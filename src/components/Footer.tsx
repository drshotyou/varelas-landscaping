import Image from "next/image";
import Link from "next/link";
Link
const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-primary w-full py-12  text-center">
            <h2 className="uppercase text-base-100">varela&apos;s <br /> Landscaping</h2>
            <button className="btn btn-primary rounded-none text-primary 
            hover:bg-primary hover:text-base-100 hover:border hover:border-base-100 bg-base-100 my-6 uppercase
            shadow-lg"> Free Estimate</button>
            <div className='mb-6'>
                <video autoPlay muted loop preload="auto" className="w-full max-w-[1300px] h-[300px] object-cover">
                    <source src="/video/footer.mp4" type="video/mp4" />
                </video>
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-6 w-full'>
                <span className='text-base-100 uppercase'>GET IN TOUCH</span>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <span className='font-semibold'>Main Office</span>
                    <span>Griffin,GA</span>
                </div>
                <ul>
                    <li> 
                        <span className='font-semibold text-base-100 text-lg'>Tel:</span> (678) 382-8760
                    </li>
                    <li>
                        <span className='font-semibold text-base-100 text-lg'>
                            Email:
                        </span>
                         rudy@varelalandscapingllc.com
                    </li>
                    <li>
                        <span className='font-semibold text-base-100 text-lg'> Social: </span>
                        @varelaslandscaping2024
                    </li>
                </ul>
                <ul className="menu menu-horizontal">
                  {/* Navbar menu content here */}
                  {/* <li>
                    <h3>Check our social media platforms</h3>
                  </li> */}
                  <li>
                    <Link href={`https://www.facebook.com/varela.s.landscaping.2024`} target="_blank">
                      <div className="flex flex-row justify-center items-center w-full">
                        <Image src={'/logo/logo-facebook-white.svg'} width={48} height={48} alt="facebook logo"/>
                        {/* <h3> Facebook </h3>`` */}
                      </div>
                     </Link >
                  </li>
                  <li>
                    <Link href={`https://www.instagram.com/varelaslanscapingllc/` } target="_blank">
                      <div className="flex flex-row justify-center items-center w-full">
                        <Image src={'/logo/logo-instagram-white.svg'} width={48} height={48} alt="instagram logo"/>
                        {/* <h3> Instagram </h3> */}
                      </div>
                    </Link >
                  </li>
                  <li>
                    <Link href={`https://wa.me/6783828760`}>
                      <div className="flex flex-row justify-center items-center w-full">
                        <Image src={'/logo/logo-whatsapp.svg'} width={48} height={48} alt="WhatsApp logo"/>
                        {/* <h3>Google</h3> */}
                      </div>
                    </Link >
                  </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;