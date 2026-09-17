const Hero = () => {
  return (
    <div
      className="hero h-[calc(100vh-117px)]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/8DFbghzx/Chat-GPT-Image-Sep-17-2026-10-51-50-AM.png)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold">Welcome to the Entertaining World of  Movie<span className="text-orange-500">Explorer</span></h1>
          <p className="mb-5">
            Here you can explore and watch all your favorite movies. We care about you choices. Enjoy the best entertaining moment with your favorite ones!
          </p>
          <button className="btn bg-orange-500 text-white border-0 shadow-none">Explore All Movies</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
