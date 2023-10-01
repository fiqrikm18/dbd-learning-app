export const Soal = () => {
  return (
    <>
      <div className="w-full h-full p-24">
        <div className="w-full text-center">
          <h1 className="text-[24pt] font-semibold">Soal</h1>
          <p>Silahkan pilih salah satu jawaban yang kamu anggap benar!</p>
          <p className="mt-4">Soal 1 dari 10</p>
        </div>

        <div className="mt-10">
          <h1 className="text-[16pt] font-semibold">
            Apa itu demam berdarah dengue (DBD)?
          </h1>

          <div className="mt-10">
            <p
              className="p-4 my-4 border-2 border-solid border-gray-700 rounded-md hover:bg-gray-700 hover:text-white hover:cursor-pointer"
              onClick={() => {
                alert("Hello");
              }}
            >
              A. Demam yang disebabkan oleh bakteri.
            </p>
            <p
              className="p-4 my-4 border-2 border-solid border-gray-700 rounded-md hover:bg-gray-700 hover:text-white hover:cursor-pointer"
              onClick={() => {
                alert("Hello");
              }}
            >
              B. Penyakit yang dibawa oleh tikus ke manusia melalui air liurnya.
            </p>
            <p
              className="p-4 my-4 border-2 border-solid border-gray-700 rounded-md hover:bg-gray-700 hover:text-white hover:cursor-pointer"
              onClick={() => {
                alert("Hello");
              }}
            >
              B. penyakit yang dibawa oleh nyamuk .
            </p>
            <p
              className="p-4 my-4 border-2 border-solid border-gray-700 rounded-md hover:bg-gray-700 hover:text-white hover:cursor-pointer"
              onClick={() => {
                alert("Hello");
              }}
            >
              D. virus e colli yang dibawa oleh nyamuk.
            </p>
          </div>

          <div className="text-center">
            <button className="bg-gray-700 text-white font-semibold p-2 min-w-[200px] rounded-md hover:border-solid hover:border-gray-700 hover:text-gray-700 hover:bg-white hover:border-2 mr-4">
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
