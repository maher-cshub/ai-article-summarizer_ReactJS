import NavBar from "./NavBar";
import HeroVideo from "../assets/write.mp4";
function Hero() {
  return (
    <header className="h-screen hero">
      <video
        autoPlay
        loop
        muted
        className="object-cover object-left w-screen h-screen "
        src={HeroVideo}
      />
      <NavBar />
      <div className="bg-orange-100 bg-opacity-35 hero-overlay"></div>
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-gray-900">
            Summarize Articles with Ai
          </h1>
          <p className="mb-5 text-gray-600">
            Use the potential on Artificial Intelligence to summarize lengthy
            articles into clear summaries
          </p>
          <button
            className="border-none outline-none bg-primary btn hover:bg-secondary "
            onClick={() => {
              const element = document.getElementById("main-content");
              element.scrollIntoView({
                behavior: "smooth",
                duration: "5000",
              });
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

export default Hero;
