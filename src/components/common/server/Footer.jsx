import { Separator } from '@/components/ui/server';
import { FooterPrimary } from './FooterPrimary';
import { FooterSecondary } from '.';

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
