"use client";

import UserNavigation from "@/components/UserNavigation";
import PhotoGallery from "@/components/PhotoGallery";
import Footer from "@/components/Footer";

export default function Home() {
  
  return (
    <>
      <UserNavigation />
      <section className="bg-gray-50 grid grid-rows-[1fr_auto] min-h-screen items-center">
        <div className="p-8 xl:px-16 xl:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Mistrzostwa Polski 20.04.2024
            </h2>
            <p className="text-gray-500 mt-4 block">
              Zobacz zdjęcia z ostatnich Mistrzostw Polski organizowanych przez <b>Samurai Showdown</b>! 
            </p>
          </div>
        </div>
        <div>
          <PhotoGallery />
        </div>
        <Footer />
      </section>
    </>
  );
}