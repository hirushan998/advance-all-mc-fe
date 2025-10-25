"use client";

import { useAuth } from "@/contexts/AuthContext";
import BookingBanner from "@/components/booking/BookingBanner";
import BookingForm from "@/components/booking/BookingForm";
// import BookingLogin from '@/components/booking/BookingLogin';
import Footer from "@/components/Footer";

export default function BookInspectionPage() {
  const { user } = useAuth();

  return (
    <>
      <BookingBanner />
      {/* {user ? <BookingForm /> : <BookingLogin />} */}
      <BookingForm />
      <Footer />
    </>
  );
}
