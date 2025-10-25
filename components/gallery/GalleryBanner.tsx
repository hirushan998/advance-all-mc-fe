import PageBanner from '@/components/common/PageBanner';

const GalleryBanner = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Gallery' }
  ];

  return (
    <PageBanner 
      title="Gallery" 
      breadcrumbs={breadcrumbs} 
    />
  );
};

export default GalleryBanner;