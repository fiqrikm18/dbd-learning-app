"use client";

import { FunctionComponent } from "react";

interface UserDataProp {
  btnClickEvent: () => void;
}
export const UserDataPage: FunctionComponent<UserDataProp> = ({
  btnClickEvent,
}) => {
  return (
    <>
      <div className="w-full h-full p-24">
        <div className="text-center mt-[15%]">
          <h1 className="text-[24pt] font-semibold">
            Silahkan isi data terlebih dahulu!
          </h1>
        </div>

        <div className="flex flex-col gap-5 justify-center items-center mt-8">
          <input
            className="p-4 border-solid border-2 rounded-md min-w-[500px] border-gray-700"
            type="text"
            placeholder="Silahkan masukkan Nama anda"
          />
          <input
            className="p-4 border-solid border-2 rounded-md min-w-[500px] border-gray-700"
            type="text"
            placeholder="Silahkan masukkan Umur anda"
          />
          <button
            onClick={btnClickEvent}
            className="bg-gray-700 text-white font-semibold py-2 px-8 rounded-md hover:border-solid hover:border-gray-700 hover:text-gray-700 hover:bg-white hover:border-2"
          >
            Simpan
          </button>
        </div>
      </div>
    </>
  );
};
