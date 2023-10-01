export const ConfirmMateriDone = () => {
  return (
    <>
      <div className="w-full h-full p-24">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-[24pt] font-semibold">
            Yakin telah selesai membaca materi?
          </h1>

          <div className="mt-8">
            <button className="bg-gray-700 text-white font-semibold p-2 min-w-[200px] rounded-md hover:border-solid hover:border-gray-700 hover:text-gray-700 hover:bg-white hover:border-2 mr-4">
              Iya
            </button>
            <button className="bg-gray-700 text-white font-semibold p-2 min-w-[200px] rounded-md hover:border-solid hover:border-gray-700 hover:text-gray-700 hover:bg-white hover:border-2">
              Tidak
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
