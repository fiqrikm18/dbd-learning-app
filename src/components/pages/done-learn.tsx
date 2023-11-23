import { Soal, getSoalData } from "@/data/localdata";
import { FunctionComponent, useEffect, useState } from "react";

interface DonePageProps {
  currentPoint: number;
}

export const DoneLearn: FunctionComponent<DonePageProps> = ({
  currentPoint,
}) => {
  const [soal, setSoal] = useState<Soal[]>([]);

  useEffect(() => {
    setSoal(getSoalData());
  }, []);

  return (
    <>
      <div className="w-full h-full p-24">
        <div>
          <h1 className="text-[24pt] font-semibold">
            Terimakasih sudah menjawab!
          </h1>
          <hr />

          <div className="mt-[10%] text-center w-full h-full flex flex-col justify-center items-center">
            <p className="text-[16pt] font-semibold">Nilai anda adalah</p>
            <div className="flex flex-col justify-center items-center mt-4">
              <div className="border-solid border-gray-700 border-2 py-4 px-10 rounded-md">
                {`${currentPoint}/${soal.length}`}
              </div>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="bg-gray-700 text-white font-semibold p-2 min-w-[200px] rounded-md border-solid border-gray-700 hover:text-gray-700 hover:bg-white border-2 mt-6"
            >
              Selesai
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
