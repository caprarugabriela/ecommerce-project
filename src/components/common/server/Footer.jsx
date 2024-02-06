import { Separator } from '@/components/ui/server';
import {
  FooterPrimary,
  FooterSecondary,
} from '@/components/common/server/footer/FooterComponents';

export const Footer = () => {
  return (
    <>
      <section className="container px-4 mx-auto">
        <FooterPrimary></FooterPrimary>
      </section>

      <Separator></Separator>

      <section className="container mx-auto px-4">
        <FooterSecondary></FooterSecondary>
      </section>
    </>
  );
};
