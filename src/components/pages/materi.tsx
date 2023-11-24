import { FunctionComponent, useEffect, useState } from "react";
import { getMateriData, Materi } from "@/data/localdata";
import { mapRange } from "gsap";

interface MateriPageProps {
  btnNextClickEvent: (value: any) => void;
  btnPrevClickEvent: (value: any) => void;
  currentIdxParent: number;
}

export const MateriPage: FunctionComponent<MateriPageProps> = ({
  btnNextClickEvent,
  btnPrevClickEvent,
  currentIdxParent,
}) => {
  const [materiData, setMateriData] = useState<Materi[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  useEffect(() => {
    setMateriData(getMateriData());
  }, []);

  const handleClickNextEnvet = () => {
    setCurrentIdx(currentIdxParent + 1);
    btnNextClickEvent({
      currentIdxParent,
      nextPage: currentIdxParent === materiData.length - 1,
    });
  };

  const handleClickPrevEnvet = () => {
    setCurrentIdx(currentIdxParent - 1);
    btnPrevClickEvent({
      currentIdxParent,
      nextPage: currentIdxParent === materiData.length - 1,
    });
  };

  return (
    <>
      <div className="w-full h-full p-24">
        {materiData.map((materi, idx) => (
          <div key={idx} className={`${idx !== currentIdx ? "hidden" : ""}`}>
            <div>
              <h1 className="text-[16pt] font-semibold mb-4">
                {materi.title.toUpperCase()}
              </h1>
              <p>
                Materi {idx + 1} dari {materiData.length}
              </p>
              <hr className="mt-4" />
            </div>

            <div className="mt-10">
              {materi.content.length == 1 ? (
                <p>{materi.content[0]}</p>
              ) : (
                <ul className="list-decimal">
                  {materi.content.map((content, contentIdx) => (
                    <li
                      key={contentIdx}
                      className={`${contentIdx > 0 ? "my-3" : ""}`}
                    >
                      <p>{content}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10">
              {materi.images.map((image, imageIdx) => (
                <div
                  key={imageIdx}
                  style={{
                    backgroundImage: `url(/${image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    minHeight: "250px",
                  }}
                >
                  {/* {image} */}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="flex flex-row gap-3 justify-center items-center mt-8">
          {currentIdxParent > 0 && (
            <button
              onClick={handleClickPrevEnvet}
              className="bg-gray-700 text-white font-semibold p-2 min-w-[200px] rounded-md hover:border-solid hover:border-gray-700 hover:text-gray-700 hover:bg-white hover:border-2"
            >
              Kembali
            </button>
          )}
          <button
            onClick={handleClickNextEnvet}
            className="bg-gray-700 text-white font-semibold p-2 min-w-[200px] rounded-md hover:border-solid hover:border-gray-700 hover:text-gray-700 hover:bg-white hover:border-2"
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </>
  );
};
