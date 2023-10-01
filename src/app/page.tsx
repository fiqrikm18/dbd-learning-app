"use client";

import { UserDataPage } from "@/components/pages/user-data";
import { MateriListPage } from "@/components/pages/materi-list";
import { WelcomePage } from "@/components/pages/welcome-page";

export default function Home() {
  return (
    <main className="flex max-h-screen max-w-screen w-screen h-screen text-gray-700">
      {/* <WelcomePage
        btnClickEvent={() => {
          alert("Hello");
        }}
      /> */}
      {/* <UserDataPage
        btnClickEvent={() => {
          alert("Hello");
        }}
      /> */}
      <MateriListPage />
    </main>
  );
}
