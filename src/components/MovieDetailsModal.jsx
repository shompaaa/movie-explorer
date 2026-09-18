import { useEffect } from "react";

const MovieDetailsModal = ({ movie, onClose }) => {
  useEffect(() => {
    if (!movie) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [movie, onClose]);

  if (!movie) return null;

  const {
    image,
    name,
    rating,
    premiered,
    genres,
    summary,
    status,
    runtime,
    language,
    officialSite,
    network,
    webChannel,
  } = movie;

  const channelName = network?.name || webChannel?.name || "N/A";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="movie-modal-title"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-slate-900 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-xl font-bold text-white transition hover:bg-orange-600"
          aria-label="Close movie details"
        >
          &times;
        </button>

        <div className="flex flex-col gap-6 p-6 sm:flex-row">
          <img
            src={image?.original || image?.medium}
            alt={name}
            className="mx-auto h-72 w-48 shrink-0 rounded-xl object-cover sm:mx-0"
          />

          <div className="flex-1 text-slate-300">
            <h2 id="movie-modal-title" className="text-2xl font-bold text-white">
              {name}
            </h2>

            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <span>⭐ {rating?.average ?? "N/A"}</span>
              <span>•</span>
              <span>📅 {premiered ?? "N/A"}</span>
              <span>•</span>
              <span>⏱️ {runtime ? `${runtime} min` : "N/A"}</span>
            </div>

            {genres?.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {genres.map((genre) => (
                  <span
                    key={genre}
                    className="rounded-full bg-orange-600/20 px-3 py-1 text-xs font-semibold text-orange-400"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            )}

            <div
              className="mt-4 text-sm leading-relaxed text-slate-300"
              dangerouslySetInnerHTML={{
                __html: summary || "<p>No summary available.</p>",
              }}
            />

            <div className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
              <p>
                <span className="font-semibold text-white">Status:</span>{" "}
                {status ?? "N/A"}
              </p>
              <p>
                <span className="font-semibold text-white">Language:</span>{" "}
                {language ?? "N/A"}
              </p>
              <p>
                <span className="font-semibold text-white">Network:</span>{" "}
                {channelName}
              </p>

              {officialSite && (
                <p className="sm:col-span-2">
                  <a
                    href={officialSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-orange-500 hover:underline"
                  >
                    Official Site ↗
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
