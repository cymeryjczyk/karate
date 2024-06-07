"use client";

import Footer from "@/components/Footer";
import UserForm from "@/components/UserForm";
import UserNavigation from "@/components/UserNavigation";


export default function Home() {
  
const handleGetUserDetails = (details: { name: string; surname: string; club: string; age: string;}) => {
    console.log(details);
  };

  return (
    <>
    <UserNavigation />
    <section className="bg-gray-50 grid grid-rows-[1fr_auto] min-h-screen items-center">
      <div className="grid xl:grid-cols-2 h-full items-center justify-center w-screen relative">
        <div className="p-8 xl:px-16 xl:py-24">
        
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Dołącz do Mistrzostw Warszawy w Karate!
            </h2>

            <p className=" text-gray-900 mt-4 block">
            Już 15 czerwca 2024 roku odbędą się kolejne zawody organizowane przez <b>Samurai Showdown</b>! 
            </p>
            <p className=" text-gray-900 block">
            Serdecznie zapraszamy wszystkich pasjonatów karate do wzięcia udziału w tym wyjątkowym wydarzeniu.
            Nie przegap swojej szansy na pokazanie swoich umiejętności i rywalizację z najlepszymi! 
            Zarejestruj się już teraz!
            </p>
          </div>
        </div>
        <div className="h-full overflow-x-auto xl:flex xl:items-center xl:flex-col xl:justify-center">
          <UserForm onGetUserDetails={handleGetUserDetails} />
        </div>
      </div>
      <Footer />
    </section>
    </>
  );
}