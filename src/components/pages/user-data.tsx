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
        <p className="py-4 text-xl text-gray-800">
          Silahkan isi data terlebih dahulu!
        </p>
        <hr />

        <div className="mt-5">
          <input
            className="p-2 border-solid border-2 rounded-md min-w-[500px] border-gray-700"
            type="text"
            placeholder="Silahkan masukkan Nama anda"
          />
        </div>
        <div className="mt-2">
          <input
            className="p-2 border-solid border-2 rounded-md min-w-[500px] border-gray-700"
            type="text"
            placeholder="Silahkan masukkan Umur anda"
          />
        </div>
        <div className="mt-2">
          <button
            onClick={btnClickEvent}
            className="bg-gray-700 text-white font-semibold p-4 min-w-[100px] rounded-md hover:border-solid hover:border-gray-700 hover:text-gray-700 hover:bg-white hover:border-2"
          >
            Simpan
          </button>
        </div>
      </div>
    </>
  );
};
