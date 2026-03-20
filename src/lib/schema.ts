import {
  pgTable, uuid, text,
  boolean, timestamp, serial
} from 'drizzle-orm/pg-core'

export const waitlist = pgTable('waitlist', {
  id:            uuid('id').defaultRandom().primaryKey(),
  email:         text('email').notNull().unique(),
  name:          text('name'),
  city:          text('city'),
  pet_type:      text('pet_type'),
  intent:        text('intent'),
  referral_code: text('referral_code').unique(),
  referred_by:   text('referred_by'),
  position:      serial('position'),
  confirmed:     boolean('confirmed').default(false),
  created_at:    timestamp('created_at').defaultNow(),
})
