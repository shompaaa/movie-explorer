// import { AiOutlineTrademark } from "react-icons/ai";

const Movie = ({ movie, show, onDetails }) => {
  const {

    image,
    name,
    rating,
    premiered,
  } = movie;
  return (
       <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-lg">
      <img
        src={image.medium}
        className="h-80 w-full object-cover"
        loading="lazy"
      />

      <div className="p-4">
        <h2 className="truncate text-lg font-bold text-white" title={name}>
          {name}
        </h2>

        <div className="mt-2 flex items-center gap-3 text-sm text-slate-400">
          <span>⭐ {rating.average}</span>
          <span>•</span>
          <span>📅 {premiered}</span>
        </div>

        <button
          onClick={() => onDetails(show.id)}
          className="mt-4 w-full rounded-lg bg-orange-600 px-4 py-2 font-semibold text-white transition hover:bg-orange-700"
        >
          See Details
        </button>
      </div>
    </div>

  );
};

export default Movie;
