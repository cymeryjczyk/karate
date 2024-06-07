"use client";

import Footer from "@/components/Footer";
import ResultsTable from "@/components/ResultsTable";
import UserNavigation from "@/components/UserNavigation";

export default function Home() {

  const tournamentResults = [
    { name: "Mistrzostwa Polski", date: "2024-04-20", category: "KATA DZIEWCZĄT DO 7 LAT", winner: "Małgorzata Zwierzyńska", "second": "Marianna Sznajder", "third": "Adrian Polak" },
    { name: "Mistrzostwa Polski", date: "2024-04-20", category: "KATA DZIEWCZĄT 12-13 LAT 9.3-8.1 KYU", winner: "Weronika Sowa", "second": "Marianna Sznajder", "third": "Adrian Polak" },
    { name: "Mistrzostwa Polski", date: "2024-04-20", category: "KATA CHŁOPCÓW 14-17 LAT", winner: "Jarosław Klimek", "second": "Marianna Sznajder", "third": "Adrian Polak" },
    { name: "Mistrzostwa Polski", date: "2024-04-20", category: "KUMITE CHŁOPCÓW DO 7 LAT", winner: "Michał Owczarzak", "second": "Marianna Sznajder", "third": "Adrian Polak" },
    { name: "Mistrzostwa Polski", date: "2024-04-20", category: "KUMITE DZIEWCZĄT 10-11 LAT POWYŻEJ 37 KG", winner: "Marianna Sznajder", "second": "Marianna Sznajder", "third": "Adrian Polak" },
    { name: "Mistrzostwa Polski", date: "2024-04-20", category: "KUMITE CHŁOPCÓW 14-15 LAT POWYŻEJ 55 KG", winner: "Adrian Polak", "second": "Marianna Sznajder", "third": "Adrian Polak" },

  ];

  return (
    <>
      <UserNavigation />
      <section className="bg-gray-50 grid grid-rows-[1fr_auto] min-h-screen items-center">
        <div className="p-8 xl:px-16 xl:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Wyniki Turniejów
            </h2>
            <p className="text-gray-500 mt-4 mb-5 block">
              Poniżej znajdują się wyniki ostatnich turniejów organizowanych przez <b>Samurai Showdown</b>.
            </p>
          </div>
          <ResultsTable results={tournamentResults} />
        </div>
        <Footer />
      </section>
    </>
  );
}