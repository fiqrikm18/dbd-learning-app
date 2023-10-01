"use client";

import { FunctionComponent, useState } from "react";

interface UserDataProp {
  btnClickEvent: (data: any) => void;
}
export const UserDataPage: FunctionComponent<UserDataProp> = ({
  btnClickEvent,
}) => {
  const [uname, setUname] = useState("");
  const [age, setAge] = useState("");

  const unameChangeHandle = (data: any) => {
    setUname(data.target.value);
  };

  const ageChangeHandle = (data: any) => {
    setAge(data.target.value);
  };

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
            value={uname}
            onChange={(e) => unameChangeHandle(e)}
          />
          <input
            className="p-4 border-solid border-2 rounded-md min-w-[500px] border-gray-700"
            type="text"
            placeholder="Silahkan masukkan Umur anda"
            value={age}
            onChange={(e) => ageChangeHandle(e)}
          />
          <button
            onClick={(e) => btnClickEvent({ uname, age })}
            className="bg-gray-700 text-white font-semibold py-2 px-8 rounded-md hover:border-solid hover:border-gray-700 hover:text-gray-700 hover:bg-white hover:border-2"
          >
            Simpan
          </button>
        </div>
      </div>
    </>
  );
};
