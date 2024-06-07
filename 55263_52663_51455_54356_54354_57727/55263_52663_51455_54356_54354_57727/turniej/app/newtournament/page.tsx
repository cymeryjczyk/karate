"use client";

import Footer from "@/components/Footer";
import TournamentForm from "@/components/TournamentForm";
import UserNavigation from "@/components/UserNavigation";

export default function Home() {
  
const handleGetTournamentDetails = (details: { name: string; date: string; contestants: string; category: string;}) => {
    console.log(details);
  };

  return (
    <>
    <UserNavigation />
    <section className="bg-gray-50 grid grid-rows-[1fr_auto] min-h-screen items-center">
      <div className="grid xl:grid-cols-2 h-full items-center justify-center w-screen">
        <div className="p-8 xl:px-16 xl:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Stwórz własny turniej!
            </h2>

            <p className=" text-gray-500 mt-4 block">
            Chciałbyś stworzyć własne turniej? Pozwól, że <b>Samurai Showdown</b> Ci w tym pomoże! Wypełnij formularz a w krótce się do ciebie odezwiemy! 
            </p>
          </div>
        </div>
        <div className="h-full overflow-x-auto xl:flex xl:items-center xl:flex-col xl:justify-center">
          <TournamentForm onGetTournamentDetails={handleGetTournamentDetails} />
        </div>
      </div>
      <Footer />
    </section>
    </>
  );
}