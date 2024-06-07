import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import UserNavigation from "@/components/UserNavigation";
import { IoLogoAlipay } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <UserNavigation />
      <section className="overflow-hidden bg-gray-50 grid grid-rows-[1fr_auto] min-h-screen items-center">
        <div className="grid sm:grid-cols-2 h-full items-center justify-center">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-4xl text-gray-900 md:text-5xl">
                Samurai Showdown <IoLogoAlipay className="inline-block m1-2" />
              </h2>
              <h2 className="text-2xl font-bold text-gray-900 md:mt-12 md:text-3xl">
                Weź udział w Mistrzostwach Warszawy Karate
              </h2>

              <p className="hidden text-gray-500 md:mt-4 md:block">
                Już 15 czerwca 2024 roku najbliższe zawody organizowane przez
              </p>
              <p className="hidden text-gray-500 md:block">
                <b>Samurai Showdown</b>! Zapraszamy wszystkich uczestników do rejestracji!
              </p>

              <div className="mt-4 md:mt-8">
                <Link
                  href="/apply"
                  className="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Zarejestruj się!
                </Link>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-20 md:text-3xl">
                Tak było na Mistrzostwach Polski
              </h2>
              <p className="hidden text-gray-500 md:mt-4 md:block">
                20 kwietnia 2024 roku miały miejsce Mistrzostwa Polski organizowane przez <b>Samurai Showdown</b>! Zobacz jak to wyglądało!
              </p>

              <div className="mt-4 md:mt-8">
                <Link
                  href="/gallery"
                  className="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Galeria
                </Link>
              </div>
            </div>
          </div>
          <div className="h-full w-full relative">
          <Image
            alt="Logo"
            priority
            fill
            src="/logo2.jpg"
            className="h-56 w-full object-cover sm:h-full"
          />
        </div>
        </div>
        <Footer />
      </section>
    </>
  );
}