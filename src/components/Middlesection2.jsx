import mobile from "../assets/mobile.jpg"
function Middlesection2() {
  return (
    <>
      <section className="min-h-72"> 
        <div className="flex justify-center items-center gap-14">
          <div className="h-56 w-80">
            <img src={mobile} alt="tv"/>
          </div>
          <div className="text-white font-serif">
            <span className="text-3xl font-bold">Enjoy on your TV</span><br />
            <span className="text-1xl">Watch on smart TVs, PlayStation, Xbox,</span><br />
            <span className="text-sm">Apple TV, Blu-ray players and more.</span>
          </div>
        </div>
      </section>
    </>
  )
}
export default Middlesection2
