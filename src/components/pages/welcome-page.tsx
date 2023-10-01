"use client";

import { FunctionComponent } from "react";

interface WelcomePageProps {
  btnClickEvent: () => void;
}

export const WelcomePage: FunctionComponent<WelcomePageProps> = ({
  btnClickEvent,
}) => {
  return (
    <>
      <div className="w-full h-full">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[48pt] font-semibold text-center mt-[20%]">
            Virtual <br />
            Classroom
          </h1>
          <button
            onClick={btnClickEvent}
            className="bg-gray-700 text-white font-semibold p-4 min-w-[200px] rounded-md hover:border-solid hover:border-gray-700 hover:text-gray-700 hover:bg-white hover:border-2 m-4"
          >
            Mulai!
          </button>

          <div className="absolute bottom-0 p-12 text-gray-800 font-semibold">
            <p>Alya Nur Fauzyah-{`{NIM}`}</p>
          </div>
        </div>
      </div>
    </>
  );
};
