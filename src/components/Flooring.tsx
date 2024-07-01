
import Image from "next/image";
import e from '../../.next/static/chunks/main-app';

const Flooring = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center bg-primary w-full py-12 lg:py-0 lg:h-[600px] xl:h-[700px]
        max-w-[1400px] mx-auto">
            <div className="relative w-full max-w-[90%] h-[500px] lg:h-full lg:w-1/2">
                <Image src={'/webp/floors.webp'} alt="flooring work image" 
                className="w-full h-[500px] lg:h-full object-cover" fill />
            </div>
            <div className="flex flex-col items-start justify-center mt-8 lg:w-1/2 p-6">
                <h2 className="text-3xl text-base-100 uppercase">HARDWOOD FLOORING</h2>
                <hr className="w-full max-w-[20%] bg-base-100 h-[2px] mt-4" />
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4 py-4 my-2 w-full">
                    <p className="max-w-[300px]">
                        Discover the elegance and durability of hardwood flooring with Varelas landscaping.
                        <br />
                        <br />
                        Whether you&apos;re looking to enhance the beauty of your home or 
                        add value to your property, our expert team provides professional
                        installation and personalized service to ensure your flooring project
                        exceeds your expectations.
                    </p>
                    <p className="mt-4 sm:mt-0 max-w-[300px]">
                        We have a dedicated team with the expertise and skills.
                        <br />
                        <br />
                        Trust Varela&apos;s Landscaping for high-quality craftsmanship and timeless style
                        in every plank. Transform your space with the natural warmth and sophistication of hardwood
                        flooring
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Flooring;