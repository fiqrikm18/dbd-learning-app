import { FunctionComponent, useEffect, useState } from "react";
import { getMateriData, Materi } from "@/data/localdata";

interface MateriPageProps {
  btnClickEvent: (value: any) => void;
  currentIdxParent: number;
}

export const MateriPage: FunctionComponent<MateriPageProps> = ({
  btnClickEvent,
  currentIdxParent,
}) => {
  const [materiData, setMateriData] = useState<Materi[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  useEffect(() => {
    setMateriData(getMateriData());
  }, []);

  const handleClickEnvet = () => {
    setCurrentIdx(currentIdxParent + 1);
    btnClickEvent({
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
          </div>
        ))}

        <div className="text-center mt-8">
          <button
            onClick={handleClickEnvet}
            className="bg-gray-700 text-white font-semibold p-2 min-w-[200px] rounded-md hover:border-solid hover:border-gray-700 hover:text-gray-700 hover:bg-white hover:border-2"
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </>
  );
};
