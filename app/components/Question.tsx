export default function Question() {
  const judul = [
    "Susah Ditebak",
    "Royal Banget Cuy",
    "Rajin & Pinter",
    "A Little Dumb In Love",
    "Cantik, Imut, Lucu, Gemesin, Seperti Bidadari",
    "Asdfghjkl <3",
  ];
  const details = [
    "Jujur selama gua hidup, lu itu orang yang paling sulit buat ditebak. Baik secara mood, cara bicara, perasaan, dll. Pokoknya lu tuh orang yang paling sulit ditebak selama gua hidup wkwk.",
    "Aslii lu juga orang paling royal yang pernah gue temuin",
    "Dalam penglihatan dan pengamatan saya, ya begitu. terbukti kan kalo ga pinter dan rajin ga mungkin tuh bisa magang di jepang kek sekarang.",
    "Lu gajelas!(canda wkwk), tapi asli deh sepenglihatan gua ya seperti itu. u like kinda dumb in love. gomen 😊🙏",
    "Ini sudah pasti dan tidak dapat dideskripsikan, (Like a asdfghjkl <3).",
    "gatau kenapa lucu aja lu sering ngucap ini.",
  ];

  return (
    <div className="space-y-4 p-5">
      <h1 className="text-2xl font-bold text-center text-white">FACT</h1>
      <p className="text-gray-400 text-sm text-center mb-6">
        Beberapa Fakta Menarik Tentang Alya Dari Aku
      </p>
      {judul.map((judulItem, index) => (
        <div key={index}>
          <details
            className="group border-s-4 border-sky-500 bg-gray-50 p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                {judulItem}
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3 dark:bg-gray-800 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
              {details[index]}
            </p>
          </details>
        </div>
      ))}
    </div>
  );
}
