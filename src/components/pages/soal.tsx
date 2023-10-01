import { Soal, getSoalData } from "@/data/localdata";
import { FunctionComponent, useEffect, useState } from "react";

interface SoalPageProps {
  btnClickEvent: (value: any) => void;
  btnCountPointClickEvent: (value: any) => void;
  currentIdxParent: number;
}

export const SoalPage: FunctionComponent<SoalPageProps> = ({
  btnClickEvent,
  btnCountPointClickEvent,
  currentIdxParent,
}) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [soalData, setSoalData] = useState<Soal[]>([]);

  useEffect(() => {
    setSoalData(getSoalData());
  }, []);

  const capitalizeFirstLetter = (txt: string) => {
    return txt.charAt(0).toUpperCase() + txt.slice(1);
  };

  const mapIdx = (idx: number) => {
    let data = "A. ";
    switch (idx) {
      case 0:
        data = "A.";
        break;
      case 1:
        data = "B.";
        break;
      case 2:
        data = "C.";
        break;
      case 3:
        data = "D.";
        break;
    }

    return data;
  };

  const handleClickEnvet = () => {
    setCurrentIdx(currentIdxParent + 1);
    btnClickEvent({
      currentIdxParent,
      nextPage: currentIdxParent === soalData.length - 1,
    });
  };

  return (
    <>
      <div className="w-full h-full p-24">
        <div className="w-full text-center">
          <h1 className="text-[24pt] font-semibold">Soal</h1>
          <p>Silahkan pilih salah satu jawaban yang kamu anggap benar!</p>
          <p className="mt-4">
            Soal {currentIdx + 1} dari {soalData.length}
          </p>
        </div>

        <div className="mt-10">
          {soalData.map((soal, idx) => (
            <div key={idx} className={`${idx == currentIdx ? "" : "hidden"}`}>
              <h1 className="text-[16pt] font-semibold">
                {`${idx + 1}. ${capitalizeFirstLetter(soal.question)}`}
              </h1>

              <div className="mt-10">
                {soal.answer.map((answr, answerIdx) => (
                  <p
                    key={answerIdx}
                    className="p-4 my-4 border-2 border-solid border-gray-700 rounded-md hover:bg-gray-700 hover:text-white hover:cursor-pointer"
                    onClick={() => {
                      if (answr.answer) {
                        btnCountPointClickEvent(answr.answer);
                      }
                    }}
                  >
                    {`${mapIdx(answerIdx)} ${capitalizeFirstLetter(
                      answr.content
                    )}`}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center">
            <button
              onClick={handleClickEnvet}
              className="bg-gray-700 text-white font-semibold p-2 min-w-[200px] rounded-md hover:border-solid hover:border-gray-700 hover:text-gray-700 hover:bg-white hover:border-2 mr-4"
            >
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
