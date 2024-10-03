import Album from "../components/Album";
import MovieVideo from "../components/MovieVideo";
import PopupPesan from "../components/PopUpPesan";

export default function Home() {
  return (
    <div className="px-5 lg:p-0">
      <MovieVideo />
      <Album />
      <a href="/album">
        <p className="text-gray-400 text-sm text-center mb-3">
          see more {">>>"}
        </p>
      </a>
      <PopupPesan />
    </div>
  );
}
