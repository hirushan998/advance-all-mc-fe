import PageBanner from '@/components/common/PageBanner';

const ContactBanner = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Contact' }
  ];

  return (
    <PageBanner 
      title="Contact Us" 
      breadcrumbs={breadcrumbs} 
    />
  );
};

export default ContactBanner;