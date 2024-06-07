'use client';

import { createRef, Component } from 'react';
import React from 'react';
import Link from "next/link";
import { useRef, MutableRefObject } from "react";

function Bracket(steps: any) {
  // console.log("steps", steps.steps);
  const winner = useRef(new Array())

  const submitHandler = (
    id: number, index: number
  ) => (event: React.FormEvent<HTMLFormElement>) => {
    // if (winner.current == null) {
    //   return;
    // }
    let selectWinner: string = winner.current[index].current.value || "";

    event.preventDefault();
    // console.log("response", winner.current[index].current.value)
    // console.log("response2", selectWinner)
    fetch(`http://localhost:8080/duels/${id}/winner/${selectWinner}`, {
      method: "PATCH"
    })
      .then(response => response.json())
      .catch(error => console.error(error));
  };

  async function getName(id: number) {
    // try {
    //   const response = await fetch(`http://localhost:8080/competitors/${id}`, {
    //     method: "GET"
    //   });
    //   const json = await response.json();
    //   const name = json.name;
    //   console.log(name);
    //   return name;
    // } catch (error) {
    //   console.error(error);
    //   return "";
    // }

    switch (id) {
      case 1:
        return "Jarek";
        break;
      case 6:
        return "Radosław";
        break;
      case 11:
        return "Filip";
        break;
      case 2:
        return "Szymon";
        break;
      case 4:
        return "Gregorz";
        break;
      case 3:
        return "Stanisław";
        break;
      default:
        break;
    }
    // return id;
  }

  const renderList = () => {
    const listItems = [];
    for (let i = 0; i < steps.steps.playerList.length; i++) {

      if (steps.steps.playerList[i].participant2) {
        winner.current[i] = createRef()
        listItems.push(
          <div className="flex flex-col" key={'step' + steps.steps.playerList[i].participant1}>
            <form className="flex flex-col rounded" onSubmit={submitHandler(steps.steps.playerList[i].id, i)} id={steps.steps.playerList[i].id} key={steps.steps.playerList[i].id} >
              <div className="flex flex-row">
                <div className="flex flex-col w-[20rem] max-w-full m-2">
                  <label id="name1" className="p-2 rounded-[4px] border-[1px] border-solid border-gray-500 max-w-full"> {getName(steps.steps.playerList[i].participant1)}</label>
                </div>
                <div className="flex flex-col w-[20rem] max-w-full m-2">
                  <label id="name2" className="p-2 rounded-[4px] border-[1px] border-solid border-gray-500 max-w-full"> {getName(steps.steps.playerList[i].participant2)}</label>
                </div>
              </div>
              <div className="flex flex-col self-center content-center w-[20rem] max-w-full m-2">
                <label htmlFor="name" className="text-center font-bold">Zwycięzca</label>
                <select className="text-center max-w-full m-2" ref={ winner.current[i]} id="referrer" name="referrer"> {/* winner.current[i] (element) => itemEls.current.push(element) */}
                  <option key={'participant1' + steps.steps.playerList[i].participant1} className="text-center" value={steps.steps.playerList[i].participant1}>{"<="}</option>
                  <option key={'participant2' + steps.steps.playerList[i].participant2} className="text-center" value={steps.steps.playerList[i].participant2}>{"=>"}</option>
                </select>
              </div>
              <div className="flex justify-center mt-4">
                <button className="inline-block rounded w-[20rem] bg-blue-600 px-3 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400" type="submit" form={steps.steps.playerList[i].id} value="Submit">Submit</button>
              </div>
            </form>
          </div>
        );
      } else {
        listItems.push(
          <div className="flex flex-col rounded" key={'participant3' + steps.steps.playerList[i].participant1}>
            <div className="flex flex-col w-[41rem] max-w-full m-2">
              <label id="name" className="p-2 rounded-[4px] border-[1px] border-solid border-gray-500 max-w-full"> {getName(steps.steps.playerList[i].participant1)}</label>
            </div>
          </div>
        )
      }

    }
    return listItems;
  };
  return <>
    <h2 className="text-2xl text-center font-bold text-gray-900 md:text-3xl">
      {steps.steps.name}
    </h2>
    <div className="flex flex-col relative mx-auto max-w-2xl items-center">
      {renderList()}
    </div>
  </>;
}
export default Bracket;