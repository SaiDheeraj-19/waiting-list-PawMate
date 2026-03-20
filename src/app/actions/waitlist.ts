'use server'
import { db } from '@/lib/db'
import { waitlist } from '@/lib/schema'
import { eq, sql, count, desc } from 'drizzle-orm'
import { Resend } from 'resend'
import { nanoid } from 'nanoid'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function joinWaitlist(data: {
  email:        string
  name?:        string
  city?:        string
  pet_type?:    string
  intent?:      string
  referred_by?: string
}) {
  try {
    const existing = await db
      .select()
      .from(waitlist)
      .where(eq(waitlist.email, data.email))
      .limit(1)

    if (existing.length > 0) {
      return {
        success:       false,
        error:         'already_exists',
        position:      existing[0].position,
        referral_code: existing[0].referral_code,
      }
    }

    const referral_code = nanoid(8)

    // Using returning() to get the serial position
    const [entry] = await db
      .insert(waitlist)
      .values({ ...data, referral_code })
      .returning()

    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 're_123456789') {
      await resend.emails.send({
        from:    'onboarding@resend.dev',
        to:      data.email,
        subject: '🐾 Your free PawMate spot is locked in!',
        html: `
          <div style="font-family:sans-serif;max-width:
            600px;margin:0 auto;padding:40px 20px;
            background:#FAF8F4">

            <div style="background:#1A3D2B;padding:32px;
              border-radius:20px;text-align:center;
              margin-bottom:32px">
              <div style="font-size:48px;margin-bottom:8px">
                🐾
              </div>
              <h1 style="color:#FAF8F4;margin:0;
                font-size:32px;font-weight:700">
                PawMate
              </h1>
              <p style="color:#9FE1CB;margin:8px 0 0;
                font-size:16px">
                Find the perfect match for your pet
              </p>
            </div>

            <div style="background:#F5A623;padding:20px;
              border-radius:16px;text-align:center;
              margin-bottom:24px">
              <p style="color:#1A3D2B;font-size:18px;
                font-weight:700;margin:0">
                🎉 You have locked in FREE access
                for 1 full year!
              </p>
            </div>

            <h2 style="color:#1A3D2B;font-size:24px">
              You are on the list!
            </h2>

            <p style="color:#6B7280;line-height:1.7;
              font-size:16px">
              You are <strong
                style="color:#1A3D2B">#${entry.position}
              </strong> on the PawMate waitlist.
              We will email you the moment we launch
              in your city.
            </p>

            <div style="background:white;border:2px solid
              #1A3D2B;border-radius:16px;padding:24px;
              margin:24px 0;text-align:center">
              <div style="font-size:32px;margin-bottom:8px">
                🐾
              </div>
              <p style="color:#1A3D2B;font-weight:700;
                font-size:16px;margin:0 0 8px">
                Your referral link
              </p>
              <p style="font-family:monospace;
                color:#F5A623;font-size:15px;
                margin:0;word-break:break-all">
                ${process.env.NEXT_PUBLIC_APP_URL}/refer/${referral_code}
              </p>
              <p style="color:#6B7280;font-size:14px;
                margin:8px 0 0">
                Share this → move up the waitlist 🚀
              </p>
            </div>

            <div style="background:#E8F5EE;border-radius:
              16px;padding:20px;margin:24px 0">
              <p style="color:#1A3D2B;font-weight:700;
                margin:0 0 12px">Referral rewards:</p>
              <p style="color:#1A3D2B;margin:4px 0">
                🎯 Refer 1 friend → Skip 100 spots
              </p>
              <p style="color:#1A3D2B;margin:4px 0">
                ⭐ Refer 3 friends → 3 months free premium
              </p>
              <p style="color:#1A3D2B;margin:4px 0">
                👑 Refer 10 friends → 2 years free premium
              </p>
            </div>

            <div style="text-align:center;margin:32px 0">
              <a href="${process.env.NEXT_PUBLIC_APP_URL}/joined?code=${referral_code}"
                style="background:#1A3D2B;color:white;
                padding:16px 32px;border-radius:50px;
                text-decoration:none;font-weight:700;
                font-size:16px;display:inline-block">
                See your position 🐾
              </a>
            </div>

            <hr style="border:none;border-top:1px solid
              #E5E7EB;margin:32px 0">

            <p style="color:#9CA3AF;font-size:13px;
              text-align:center;margin:0">
              © 2026 PawMate ·
              Every pet deserves a friend 🐾
            </p>
          </div>
        `,
      })
    } else {
      console.log('📭 Email suppressed because RESEND_API_KEY is not set or is a placeholder.');
      console.log(`To send real emails to ${data.email}, please add a valid Resend API key to .env.local!`);
    }

    return {
      success:       true,
      position:      entry.position,
      referral_code: entry.referral_code,
    }
  } catch (error) {
    console.error('Error joining waitlist:', error)
    return { success: false, error: 'internal_error' }
  }
}

export async function getWaitlistStats() {
  const [total] = await db
    .select({ count: count() })
    .from(waitlist)

  const cities = await db
    .selectDistinct({ city: waitlist.city })
    .from(waitlist)
    .where(sql`${waitlist.city} is not null`)

  const petTypes = await db
    .select({
      pet_type: waitlist.pet_type,
      count: count(),
    })
    .from(waitlist)
    .where(sql`${waitlist.pet_type} is not null`)
    .groupBy(waitlist.pet_type)
    .orderBy(desc(count()))
    .limit(1)

  const perType = await db
    .select({
      pet_type: waitlist.pet_type,
      count: count(),
    })
    .from(waitlist)
    .where(sql`${waitlist.pet_type} is not null`)
    .groupBy(waitlist.pet_type)

  return {
    total:    total.count,
    cities:   cities.length,
    top_pet:  total.count === 0 ? 'TBD' : (petTypes[0]?.pet_type ?? 'TBD'),
    per_type: perType,
  }
}

export async function getReferralCount(code: string) {
  const [result] = await db
    .select({ count: count() })
    .from(waitlist)
    .where(eq(waitlist.referred_by, code))
  return { count: result.count }
}

export async function updatePetPreferences(
  email:    string,
  pet_type: string,
  intent:   string
) {
  await db
    .update(waitlist)
    .set({ pet_type, intent })
    .where(eq(waitlist.email, email))
  return { success: true }
}

export async function getWaitlistEntryByEmail(email: string) {
  const [entry] = await db
    .select()
    .from(waitlist)
    .where(eq(waitlist.email, email))
    .limit(1);

  if (!entry) return null;
  return entry;
}

export async function updateUserCity(email: string, city: string) {
  await db
    .update(waitlist)
    .set({ city })
    .where(eq(waitlist.email, email));
  return { success: true };
}
