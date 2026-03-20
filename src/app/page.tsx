import { getWaitlistStats } from '@/app/actions/waitlist';
import { HeroSection } from '@/components/sections/HeroSection';
import { FreeOfferSection } from '@/components/sections/FreeOfferSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { PetTypesSection } from '@/components/sections/PetTypesSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { ReferralSection } from '@/components/sections/ReferralSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';

export default async function Home() {
  const stats = await getWaitlistStats();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <FreeOfferSection />
      <StatsSection initialStats={{ total: stats.total, cities: stats.cities, top_pet: stats.top_pet }} />
      <HowItWorksSection />
      <PetTypesSection perType={stats.per_type as { pet_type: string; count: number }[]} />
      <FeaturesSection />
      <ReferralSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}
