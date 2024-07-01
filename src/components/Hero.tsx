

const Hero = () => {
    return (
        <div
  className="hero min-h-[calc(60vh-70px)]"
  style={{
    backgroundImage: "url('/webp/hero.webp')",
  }}>
  {/* <div className="hero-overlay"></div> */}
  <div className="hero-content text-neutral-content text-center p-0">
    <div className="w-[90%] lg:max-w-xl bg-base-100 p-8">
      <h1 className="mb-5 text-4xl uppercase text-primary">Request a free estimate</h1>
      <div className="flex flex-row gap-4 w-full ">
        <button className="btn btn-base-100 border-primary w-1/2 uppercase text-primary rounded-none">full name</button>
        <button className="btn btn-primary w-1/2 uppercase rounded-none">phone number</button>

      </div>
    </div>
  </div>
</div>

    )
}

export default Hero;