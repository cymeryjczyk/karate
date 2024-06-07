'use client';

import Bracket from '@/components/Bracket'

import Footer from "@/components/Footer";
import UserNavigation from "@/components/UserNavigation";
import Link from "next/link";
import React, { useState, useEffect } from 'react';

let data: any[] = [];
let roundCounter: number = 0;
let lastRound: number = 0;
function getRoundDataDefault() {
  data = []
}
function getRoundData(id: number, round: number) {
  // try {
  //   const response =  fetch(`http://localhost:8080/tournaments/${id}?round=${round}`, {
  //     method: "PUT"
  //   });
  //   const json =  response.json();
  //   const duels = json.duels;
  //   data = duels
  //   console.log(duels)
  // } catch (error) {
  // }
  lastRound = round;
  roundCounter = round + 1;
  // console.log("test3")

  switch (round) {
    case 1:
      data = [
        {
          "id": 10,
          "participant1": 2,
          "participant2": 4,
          "winner": null,
          "position": 0,
          "round": 2,
          "branch": "LEFT"
        },
        {
          "id": 7,
          "participant1": 3,
          "participant2": null,
          "winner": 3,
          "position": 1,
          "round": 2,
          "branch": "LEFT"
        },
        {
          "id": 9,
          "participant1": 1,
          "participant2": 6,
          "winner": null,
          "position": 0,
          "round": 2,
          "branch": "RIGHT"
        },
        {
          "id": 8,
          "participant1": 11,
          "participant2": null,
          "winner": 11,
          "position": 1,
          "round": 2,
          "branch": "RIGHT"
        }
      ]
      break;
    case 2:
      data = [
        {
          "id": 9,
          "participant1": 1,
          "participant2": 6,
          "winner": null,
          "position": 0,
          "round": 2,
          "branch": "FINALS"
        }
      ]
      break;
    case 3:
      data = [
        {
          "id": 10,
          "participant1": 2,
          "participant2": 4,
          "winner": null,
          "position": 0,
          "round": 2,
          "branch": "LEFT"
        },
        {
          "id": 7,
          "participant1": 3,
          "participant2": null,
          "winner": 3,
          "position": 1,
          "round": 2,
          "branch": "LEFT"
        },
        {
          "id": 9,
          "participant1": 1,
          "participant2": 6,
          "winner": null,
          "position": 0,
          "round": 2,
          "branch": "RIGHT"
        },
        {
          "id": 8,
          "participant1": 11,
          "participant2": null,
          "winner": 11,
          "position": 1,
          "round": 2,
          "branch": "RIGHT"
        }
      ]
      break;
    default:
      data = [
      ]
      break;
  }

}

async function RegistrationForm({ searchParams }: any) {
  // console.log("test", searchParams, roundCounter)
  roundCounter = parseInt(searchParams.round);
  let finalsIf = searchParams.finals;
  let finalsText = " "
  if (finalsIf == 1) {
    finalsText = " loser "
  }
  if (roundCounter > 0) {
    if (parseInt(searchParams.round) > lastRound) {
      // console.log("test2", parseInt(searchParams.round), lastRound)
      await getRoundData(1, parseInt(searchParams.round))//.then(() => console.log("ide dalej"));
    }
  } else {
    getRoundDataDefault();
    lastRound = parseInt(searchParams.round);
    roundCounter = parseInt(searchParams.round) + 1;
  }
  const right: any[] = [];
  const left: any[] = [];
  const finals: any[] = [];

  // console.log(data)
  for (let index = 0; index < data.length; index++) {
    switch (data[index].branch) {
      case "RIGHT":
        right.push(data[index])
        break;
      case "LEFT":
        left.push(data[index])
        break;
      case "FINALS":
        finalsIf = 1;
        finals.push(data[index])
        break;
      default:
        break;
    }
  }

  const renderList = () => {
    const listItems = [];
    if (right.length > 0) {
      listItems.push(
        <Bracket key="right bracket" steps={{ playerList: right, name: "right" + finalsText + "bracket" }} />
      )
    }
    if (left.length > 0) {
      listItems.push(
        <Bracket key="left bracket" steps={{ playerList: left, name: "left" + finalsText + "bracket" }} />
      )
    }
    if (finals.length > 0) {
      listItems.push(
        <Bracket key="finals bracket" steps={{ playerList: finals, name: "finals bracket" }} />
      )
    }
    return listItems;
  }
  return (
    <>
      <UserNavigation />
      {renderList()}
      <div className="flex justify-center mt-4">
        <Link href={{ pathname: `/ladder/`, query: { round: roundCounter, finals: finalsIf } }} key='getRoundDataKey' className="inline-block rounded w-[20rem] bg-blue-600 px-3 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400">Start</Link>
      </div>
      <Footer />
    </>
  );
}

export default RegistrationForm;
