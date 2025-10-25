import PageBanner from '@/components/common/PageBanner';

const ServicesBanner = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services' }
  ];

  return (
    <PageBanner 
      title="Our Services" 
      breadcrumbs={breadcrumbs} 
    />
  );
};

export default ServicesBanner;