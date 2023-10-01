export const DoneLearn = () => {
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
                100
              </div>
            </div>
            <button className="bg-gray-700 text-white font-semibold p-2 min-w-[200px] rounded-md hover:border-solid hover:border-gray-700 hover:text-gray-700 hover:bg-white hover:border-2 mt-6">
              Selesai
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
