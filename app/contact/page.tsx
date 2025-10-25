import ContactBanner from '@/components/contact/ContactBanner';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import ContactMap from '@/components/contact/ContactMap';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <ContactBanner />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
      <Footer />
    </>
  );
}