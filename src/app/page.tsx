"use client";

import { UserDataPage } from "@/components/pages/user-data";
import { MateriListPage } from "@/components/pages/materi-list";
import { WelcomePage } from "@/components/pages/welcome-page";
import { MateriPage } from "@/components/pages/materi";
import { ConfirmMateriDone } from "@/components/pages/confirm-materi-done";
import { SoalPage } from "@/components/pages/soal";
import { DoneLearn } from "@/components/pages/done-learn";
import { useState } from "react";

export default function Home() {
  const [showWelcomePage, setShowWelcomePage] = useState(true);
  const [showUserDataPage, setShowUserDataPage] = useState(false);
  const [showMateriListPage, setShowMateriListPage] = useState(false);
  const [showMateriPage, setShowMateriPage] = useState(false);
  const [showConfirMateriDonePage, setShowConfirMateriDonePage] =
    useState(false);
  const [showSoalPage, setShowSoalPage] = useState(false);
  const [showDoneLearnPage, setShowDoneLearnPage] = useState(false);
  const [currenMateritIdx, setCurrentMateriIdx] = useState<number>(0);
  const [currenSoalIdx, setCurrentsoalIdx] = useState<number>(0);
  const [currentPoint, setCurrentPoint] = useState<number>(0);

  const clickButtonMulaiWelcomePage = () => {
    setShowWelcomePage(false);
    setShowUserDataPage(true);
  };

  const clickButtonSimpanUserDataPage = (value: any) => {
    localStorage.setItem(
      "user_data",
      JSON.stringify({ username: value.uname, age: value.age })
    );

    setShowUserDataPage(false);
    setShowMateriListPage(true);
  };

  const clickButtonMulaiMateriPage = () => {
    setShowMateriListPage(false);
    setShowMateriPage(true);
  };

  const clickButtonSelanjutnyaMateriPage = (value: any) => {
    setCurrentMateriIdx(currenMateritIdx + 1);
    if (value.nextPage) {
      setShowMateriPage(false);
      setShowConfirMateriDonePage(true);
    }
  };

  const clickButtonYaMateriDonePage = () => {
    setShowConfirMateriDonePage(false);
    setShowSoalPage(true);
  };

  const clickButtonTidakMateriDonePage = () => {
    setShowConfirMateriDonePage(false);
    setShowMateriPage(true);
    setCurrentMateriIdx(0);
  };

  const countPoint = (value: any) => {
    setCurrentPoint(currentPoint + 1);
    console.log(currentPoint);
  };

  const clickButtonSelanjutnyaSoalPage = (value: any) => {
    console.log(value);
    console.log(currentPoint);

    setCurrentsoalIdx(currenSoalIdx + 1);
    if (value.nextPage) {
      setShowSoalPage(false);
      setShowDoneLearnPage(true);
    }
  };

  return (
    <main className="flex max-h-screen max-w-screen w-screen h-screen text-gray-700">
      {showWelcomePage && (
        <div
          className={`w-full h-full`}
          style={{
            backgroundImage: "url(/3997638.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <WelcomePage btnClickEvent={clickButtonMulaiWelcomePage} />
        </div>
      )}

      {showUserDataPage && (
        <div
          className={`w-full h-full`}
          style={{
            backgroundImage: "url(/3997638.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <UserDataPage btnClickEvent={clickButtonSimpanUserDataPage} />
        </div>
      )}

      {showMateriListPage && (
        <div className={`w-full h-full`}>
          <MateriListPage btnClickEvent={clickButtonMulaiMateriPage} />
        </div>
      )}

      {showMateriPage && (
        <div className={`w-full h-full`}>
          <MateriPage
            btnClickEvent={clickButtonSelanjutnyaMateriPage}
            currentIdxParent={currenMateritIdx}
          />
        </div>
      )}

      {showConfirMateriDonePage && (
        <div className={`w-full h-full`}>
          <ConfirmMateriDone
            btnYaClickEvent={clickButtonYaMateriDonePage}
            btnTidakClickEvent={clickButtonTidakMateriDonePage}
          />
        </div>
      )}

      {showSoalPage && (
        <div className={`w-full h-full`}>
          <SoalPage
            btnCountPointClickEvent={countPoint}
            btnClickEvent={clickButtonSelanjutnyaSoalPage}
            currentIdxParent={currenSoalIdx}
          />
        </div>
      )}

      {showDoneLearnPage && (
        <div className={`w-full h-full`}>
          <DoneLearn currentPoint={currentPoint} />
        </div>
      )}
    </main>
  );
}
