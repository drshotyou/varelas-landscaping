import Image from "next/image";


const About = () => {
    return (
        <div className="hero bg-secondary py-8 px-4 w-full">
  <div className="relative hero-content flex-col lg:flex-row-reverse w-full">
    <div className="relative w-full max-w-[90%] h-[400px] lg:h-[800px] lg:w-1/2">
        <Image alt="Who we are section image"
        src="/webp/whoweare.webp"
        fill
        className="  lg:max-w-full w-full shadow-2xl object-cover" />
    </div>
   
    <div className="flex flex-col items-center justify-center lg:w-1/2">
      <h1 className="text-5xl  uppercase text-primary text-center mt-4">Who we are</h1>
      <p className="py-6 text-primary text-center lg:text-xl px-3">
        Welcome to Varela&apos;s Landscaping. Georgia&apos;s top choice for transforming outdoor spaces. Founded by Rudy Varela, we are a family-owned businesses
       commited to quality and personalized service. <br /> <br />

        With over fifteen years of experience, we specialize in landscape design, installation, and maintenace. Our skilled 
       team tailors each project to your unique needs, ensuring lasting beatuy with high-quality materials and sustainable practices. <br /> <br />

        Join our satisfied cients and let us bring your outdoor vision to life. Your perfect landscape is just a call away!
      </p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>

    )
}

export default About;   