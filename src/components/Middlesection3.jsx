import tv from "../assets/tv.png";
function Middlesection3() {
  return (
    <>
      <section className="min-h-72">
        <div className="flex justify-center items-center gap-14">
          <div className="text-white font-serif">
            <span className="text-3xl font-bold">Enjoy on your TV</span>
            <br />
            <span className="text-1xl">
              Watch on smart TVs, PlayStation, Xbox,
            </span>
            <br />
            <span className="text-sm">Apple TV, Blu-ray players and more.</span>
          </div>
          <div className="h-56 w-80 relative">
            <img id="image" src={tv} alt="tv" className="z-10 relative" />
            <video
              id="video"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              autoPlay
              loop
              muted
              className="absolute box-border w-full top-[52px] right-0 pl-[32px]"></video>
          </div>
        </div>
      </section>
    </>
  );
}
export default Middlesection3;
