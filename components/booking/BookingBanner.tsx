import PageBanner from '@/components/common/PageBanner';

const BookingBanner = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Book Inspection' }
  ];

  return (
    <PageBanner 
      title="Book Your Inspection" 
      breadcrumbs={breadcrumbs} 
    />
  );
};

export default BookingBanner;