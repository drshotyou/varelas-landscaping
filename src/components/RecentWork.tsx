import Image from "next/image";

interface recentWorksProps {
  name: string;
  location: string;
  image: string;
}

const works: recentWorksProps[] = [
  {
    name: 'landscape design',
    location: 'Griffin, GA',
    image: '/webp/work1.webp'
  },
  {
    name: 'maintenance',
    location: 'Fayetteville, GA',
    image: '/webp/work2.webp'
  },
  {
    name: 'Laying sod',
    location: 'Peachtree City, GA',
    image: '/webp/work3.webp'
  }
];

const RecentWork = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-base-100 w-full py-12">
      <h2 className="uppercase text-primary text-center my-4 text-3xl">Recent Works</h2>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 py-4 my-2 w-full max-w-[1300px]">
        {works.map((work, index) => (
          <div className="flex flex-col justify-center items-center w-full" key={index}>
            <hr className={`w-full max-w-[80%] bg-secondary h-[2px] ${index % 2 === 1 ? 'lg:mt-16' : ''}`} />
            <div className={`flex flex-col items-center justify-center gap-4 py-4 my-2 w-full `}>
              <div className="relative w-full max-w-[90%] h-[400px] lg:h-[300px] lg:w-full shadow-lg">
                <Image src={work.image} alt="work" className="w-full h-[400px] object-cover" fill />
              </div>
              <p className="text-primary text-center lg:text-xl px-3 uppercase font-semibold text-black">{work.name}</p>
              <p className="text-primary text-center lg:text-xl px-3 uppercase text-primary">{work.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentWork;
