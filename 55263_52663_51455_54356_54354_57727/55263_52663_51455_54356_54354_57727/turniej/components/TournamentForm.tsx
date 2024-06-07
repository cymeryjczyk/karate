"use client";
import Link from "next/link";
import { useRef, MutableRefObject } from "react";

type TournamentFormProps = {
  onGetTournamentDetails(arg0: { name: string; date: string; contestants: string; category: string; email: string; }): unknown;
};

const TournamentForm: React.FC<TournamentFormProps> = (props) => {
  const nameInputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const dateInputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const contestantsInputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const categorySelectRef: MutableRefObject<HTMLSelectElement | null> = useRef(null);
  const emailInputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredName: string | null = nameInputRef.current?.value || "";
    const enteredDate: string | null = dateInputRef.current?.value || "";
    const enteredContestants: string | null = contestantsInputRef.current?.value || "";
    const enteredCategory: string | null = categorySelectRef.current?.value || "";
    const enteredEmail: string | null = categorySelectRef.current?.value || "";
    props.onGetTournamentDetails({
      name: enteredName,
      date: enteredDate,
      contestants: enteredContestants,
      category: enteredCategory,
      email: enteredEmail,
    });
  };

  return (
    <div className="flex flex-col relative mx-auto max-w-2xl items-center">
      <form onSubmit={submitHandler} className="flex flex-col rounded ">
        <div className="flex flex-col">
          <div className="flex flex-col w-[20rem] max-w-full m-2">
            <label htmlFor="name" className="text-left font-bold">Nazwa turnieju</label>
            <input type="text" id="name" ref={nameInputRef} className="p-2 rounded-[4px] border-[1px] border-solid border-gray-500 max-w-full" />
          </div>
          <div className="flex flex-col w-[20rem] max-w-full m-2">
            <label htmlFor="date" className="text-left font-bold">Data</label>
            <input type="date" id="date" ref={dateInputRef} className="p-2 rounded-[4px] border-[1px] border-solid border-gray-500 max-w-full" />
          </div>
          <div className="flex flex-col w-[20rem] max-w-full m-2">
            <label htmlFor="contestants" className="text-left font-bold">Ilość zawodników</label>
            <input type="number" id="contestants" ref={contestantsInputRef} className="p-2 rounded-[4px] border-[1px] border-solid border-gray-500 max-w-full" min="4" max="120" />
          </div>
          <div className="flex flex-col w-[20rem] max-w-full m-2">
            <label htmlFor="category" className="text-left font-bold">Kategoria</label>
            <select id="category" ref={categorySelectRef} className="p-2 rounded-[4px] border-[1px] border-solid border-gray-500 max-w-full">
              <option value="">Wybierz</option>
              <option value="1">KATA DZIEWCZĄT DO 7 LAT</option>
              <option value="2">KATA CHŁOPCÓW DO 7 LAT</option>
              <option value="3">KATA DZIEWCZĄT 8-9 LAT 9.1-9.3 KYU</option>
              <option value="4">KATA CHŁOPCÓW 8-9 LAT 9.1-9.3 KYU</option>
              <option value="5">KATA DZIEWCZĄT 8-9 LAT OD 8.1 KYU</option>
              <option value="6">KATA CHŁOPCÓW 8-9 LAT OD 8.1 KYU</option>
              <option value="7">KATA DZIEWCZĄT 10-11 LAT 9.1-8.3 KYU</option>
              <option value="8">KATA CHŁOPCÓW 10-11 LAT 9.1-8.3 KYU</option>
              <option value="9">KATA DZIEWCZĄT 10-11 LAT OD 7.1 KYU</option>
              <option value="10">KATA CHŁOPCÓW 10-11 LAT OD 7.1 KYU</option>
              <option value="11">KATA DZIEWCZĄT 12-13 LAT 9.3-8.1 KYU</option>
              <option value="12">KATA CHŁOPCÓW 12-13 LAT 9.3-8.1 KYU</option>
              <option value="13">KATA DZIEWCZĄT 12-13 LAT OD 7.1 KYU</option>
              <option value="14">KATA CHŁOPCÓW 12-13 LAT OD 7.1 KYU</option>
              <option value="15">KATA DZIEWCZĄT 14-15 LAT</option>
              <option value="16">KATA CHŁOPCÓW 14-17 LAT</option>
              <option value="17">KATA DZIEWCZĄT 16-17 LAT</option>
              <option value="18">KATA CHŁOPCÓW 18+ LAT</option>
              <option value="19">KATA DZIEWCZĄT 18+ LAT</option>
              <option value="20">KATA MASTER 40+ LAT</option>
              <option value="21">KATA DRUŻYNOWE DO 11 LAT</option>
              <option value="22">KATA DRUŻYNOWE OD 12 LAT</option>
              <option value="23">KUMITE DZIEWCZĄT DO 7 LAT</option>
              <option value="24">KUMITE CHŁOPCÓW DO 7 LAT</option>
              <option value="25">KUMITE DZIEWCZĄT 8-9 LAT DO 30 KG</option>
              <option value="26">KUMITE CHŁOPCÓW 8-9 LAT DO 30 KG</option>
              <option value="27">KUMITE DZIEWCZĄT 8-9 LAT POWYŻEJ 30 KG</option>
              <option value="28">KUMITE CHŁOPCÓW 8-9 LAT POWYŻEJ 30 KG</option>
              <option value="29">KUMITE DZIEWCZĄT 10-11 LAT DO 37 KG</option>
              <option value="30">KUMITE CHŁOPCÓW 10-11 LAT DO 37 KG</option>
              <option value="31">KUMITE DZIEWCZĄT 10-11 LAT POWYŻEJ 37 KG</option>
              <option value="32">KUMITE CHŁOPCÓW 10-11 LAT POWYŻEJ 37 KG</option>
              <option value="33">KUMITE DZIEWCZĄT 12-13 LAT DO 48 KG</option>
              <option value="34">KUMITE CHŁOPCÓW 12-13 LAT DO 45 KG</option>
              <option value="35">KUMITE DZIEWCZĄT 12-13 LAT POWYŻEJ 48 KG</option>
              <option value="36">KUMITE CHŁOPCÓW 12-13 LAT POWYŻEJ 45 KG</option>
              <option value="37">KUMITE DZIEWCZĄT 14-15 LAT DO 52 KG</option>
              <option value="38">KUMITE CHŁOPCÓW 14-15 LAT DO 55 KG</option>
              <option value="39">KUMITE DZIEWCZĄT 14-15 LAT POWYŻEJ 52 KG</option>
              <option value="40">KUMITE CHŁOPCÓW 14-15 LAT POWYŻEJ 55 KG</option>
              <option value="41">KUMITE DZIEWCZĄT 16-17 LAT</option>
              <option value="42">KUMITE CHŁOPCÓW 16-17 LAT</option>
              <option value="43">KUMITE DZIEWCZĄT 18+ LAT</option>
              <option value="44">KUMITE CHŁOPCÓW 18+LAT</option>
            </select>
          </div>
          <div className="flex flex-col w-[20rem] max-w-full m-2">
            <label htmlFor="email" className="text-left font-bold">Email</label>
            <input type="email" id="email" ref={emailInputRef} className="p-2 rounded-[4px] border-[1px] border-solid border-gray-500 max-w-full" />
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <Link href="/"
           className="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400">Wyślij</Link>
        </div>
      </form>
    </div>
  );
};

export default TournamentForm