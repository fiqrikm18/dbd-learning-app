export const MateriListPage = () => {
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
          <div className="flex flex-col justify-center items-center border-solid border-2 border-gray-800 p-4 rounded-md min-h-[250px] hover:bg-gray-800 hover:text-white">
            <p className="font-bold text-lg underline underline-offset-4">
              Materi 1
            </p>
            <span className="max-w-[300px] whitespace-normal text-center mt-2">
              Definisi Demam Berdarah Dengue.
            </span>
          </div>

          <div className="flex flex-col justify-center items-center border-solid border-2 border-gray-800 p-4 rounded-md min-h-[250px] hover:bg-gray-800 hover:text-white">
            <p className="font-bold text-lg underline underline-offset-4">
              Materi 2
            </p>
            <span className="max-w-[300px] whitespace-normal text-center mt-2">
              Penularan Demam Berdarah Dengue.
            </span>
          </div>

          <div className="flex flex-col justify-center items-center border-solid border-2 border-gray-800 p-4 rounded-md min-h-[250px] hover:bg-gray-800 hover:text-white">
            <p className="font-bold text-lg underline underline-offset-4">
              Materi 3
            </p>
            <span className="max-w-[300px] whitespace-normal text-center mt-2">
              Manifestasi Klinis Demam Berdarah Dengue.
            </span>
          </div>

          <div className="flex flex-col justify-center items-center border-solid border-2 border-gray-800 p-4 rounded-md min-h-[250px] hover:bg-gray-800 hover:text-white">
            <p className="font-bold text-lg underline underline-offset-4">
              Materi 4
            </p>
            <span className="max-w-[300px] whitespace-normal text-center mt-2">
              Keparahan Demem Berdarah Dengue Pada Anak.
            </span>
          </div>

          <div className="flex flex-col justify-center items-center border-solid border-2 border-gray-800 p-4 rounded-md min-h-[250px] hover:bg-gray-800 hover:text-white">
            <p className="font-bold text-lg underline underline-offset-4">
              Materi 5
            </p>
            <span className="max-w-[300px] whitespace-normal text-center mt-2">
              Penatalaksanaan Demam Berdarah Dengue.
            </span>
          </div>

          <div className="flex flex-col justify-center items-center border-solid border-2 border-gray-800 p-4 rounded-md min-h-[250px] hover:bg-gray-800 hover:text-white">
            <p className="font-bold text-lg underline underline-offset-4">
              Materi 6
            </p>
            <span className="max-w-[300px] whitespace-normal text-center mt-2">
              Upaya Mencegah Demam Berdarah Dengue.
            </span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button className="bg-gray-700 text-white font-semibold p-4 min-w-[200px] rounded-md hover:border-solid hover:border-gray-700 hover:text-gray-700 hover:bg-white hover:border-2 mt-4">
            Mulai!
          </button>
        </div>
      </div>
    </>
  );
};
