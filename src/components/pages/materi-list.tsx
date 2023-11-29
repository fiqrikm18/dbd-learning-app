import { Materi, getMateriData } from "@/data/localdata";
import { FunctionComponent, useEffect, useState } from "react";

interface WelcomePageProps {
  btnClickEvent: () => void;
}

export const MateriListPage: FunctionComponent<WelcomePageProps> = ({
  btnClickEvent,
}) => {
  const [materiData, setMateriData] = useState<Materi[]>([]);

  useEffect(() => {
    setMateriData(getMateriData());
  }, []);

  return (
    <>
      <div className="w-full h-full p-24">
        <div>
          <h1 className="text-[48pt] font-semibold">Materi</h1>
          <p>
            Harap baca materi dengan seksama, karena setelah materi akan ada
            beberapa soal!
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          {materiData.map((materi, idx) => (
            <div
              key={idx}
              className={`${
                idx % 2 == 0
                  ? "flex flex-col justify-center items-center border-solid border-2 border-gray-800 bg-cyan-100 p-4 rounded-md min-h-[250px] hover:bg-gray-800 hover:text-white"
                  : "flex flex-col justify-center items-center border-solid border-2 border-gray-800 p-4 rounded-md min-h-[250px] hover:bg-gray-800 hover:text-white"
              }`}
            >
              <p className="font-bold text-lg underline underline-offset-4">
                Materi {idx + 1}
              </p>
              <span className="max-w-[300px] whitespace-normal text-center mt-2">
                Definisi Demam Berdarah Dengue.
                {materi.title}.
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={btnClickEvent}
            className="bg-gray-700 text-white font-semibold p-4 min-w-[200px] rounded-md hover:border-solid hover:border-gray-700 hover:text-gray-700 hover:bg-white hover:border-2 mt-4"
          >
            Mulai!
          </button>
        </div>
      </div>
    </>
  );
};
