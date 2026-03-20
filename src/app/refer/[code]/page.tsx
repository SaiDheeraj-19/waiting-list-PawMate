import Home from '@/app/page';
import { ReferralHandler } from './ReferralHandler';

export default async function ReferralPage({ params }: { params: { code: string } }) {
  const code = (await params).code;
  
  return (
    <>
      <ReferralHandler code={code} />
      <Home />
    </>
  );
}
