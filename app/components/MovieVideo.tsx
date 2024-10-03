import MovieButton from "./MovieButton";

export default function MovieVideo() {
  return (
    <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start items-center">
      <video
        // src="https://utfs.io/f/11d84bc6-c825-42d0-a2ca-f80204c2f5b3-v0hcpd.mp4"
        poster="https://wphcaxizypgvkbhwkqss.supabase.co/storage/v1/object/public/user%20image/alya/alya5.jpg"
        autoPlay
        muted
        loop
        className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-[60%]"
      ></video>

      <div className="absolute w-[90%] lg:w-[40%] mx-auto">
        <h1 className="text-white text-2xl md:text-5xl lg:text-6xl font-bold">
          HALOO BIDADARIII!
        </h1>
        <p className="text-white text-lg mt-5 line-clamp-3">
          pasti kamu lagi capek capeknya yaaa?, semoga dengan hadiah ini bisa
          ngobatin lelah mu dikit dikit wkwkw
        </p>
        <p className="text-sm text-white mt-7 line-clamp-3 opacity-80">
          Check for more details bellow &darr;
        </p>
        <div className="flex gap-x-3 mt-4">
          <MovieButton />
        </div>
      </div>
    </div>
  );
}
