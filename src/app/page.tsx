"use client";

import { UserDataPage } from "@/components/pages/user-data";
import { MateriListPage } from "@/components/pages/materi-list";
import { WelcomePage } from "@/components/pages/welcome-page";
import { Materi } from "@/components/pages/materi";
import { ConfirmMateriDone } from "@/components/pages/confirm-materi-done";
import { Soal } from "@/components/pages/soal";
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

  const clickButtonMulaiWelcomePage = () => {
    setShowWelcomePage(false);
    setShowUserDataPage(true);
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
          <UserDataPage
            btnClickEvent={() => {
              alert("Hello");
            }}
          />
        </div>
      )}

      {showMateriListPage && (
        <div className={`w-full h-full`}>
          <MateriListPage />
        </div>
      )}

      {showMateriPage && (
        <div className={`w-full h-full`}>
          <Materi />
        </div>
      )}

      {showConfirMateriDonePage && (
        <div className={`w-full h-full`}>
          <ConfirmMateriDone />
        </div>
      )}

      {showSoalPage && (
        <div className={`w-full h-full`}>
          <Soal />
        </div>
      )}

      {showDoneLearnPage && (
        <div className={`w-full h-full`}>
          <DoneLearn />
        </div>
      )}
    </main>
  );
}
