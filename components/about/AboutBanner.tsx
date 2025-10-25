import PageBanner from '@/components/common/PageBanner';

const AboutBanner = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About Us' }
  ];

  return (
    <PageBanner 
      title="About Us" 
      breadcrumbs={breadcrumbs} 
    />
  );
};

export default AboutBanner;