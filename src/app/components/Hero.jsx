import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
    
    <section className="bg-yellow-200 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
        {/* Left Text Section */}
        <div className="text-gray-800 space-y-6 max-w-lg">
          <h1 className="text-5xl font-bold leading-tight">
            Rocket single seater
          </h1>
          <Link
            href="/shop"
            className="inline-block text-lg font-medium underline hover:text-gray-600"
          >
            Shop Now
          </Link>
        </div>

        {/* Right Image Section */}
        <div className="relative mt-8 lg:mt-0">
          {/* Chair Image */}
          <Image
            src="/images/chair.png" // Replace with your local chair image path
            alt="Rocket Single Seater"
            width={600}
            height={500}
            className="mx-auto"
          />
        </div>
      </div>
    </section>

    <section className="bg-[#fef9f9] py-12 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
        {/* First Product */}
        <div className="">
        <Image
                src="/images/Mask group (1).png"
                alt=""
                width={393}
                height={393}
                className="mx-auto"
              />
          <h3 className="font-semibold text-2xl" style={{ fontFamily: "Poppins" }}>
            Side table
          </h3>
          <Link
                href="/shop"
                className="inline-block text-lg font-medium border-b-4 border-black hover:text-gray-600"
              >
                View More
              </Link>
        </div>

        {/* Second Product */}
        <div className="">
          <Image
                src="/images/Mask group.png"
                alt=""
                width={393}
                height={393}
                className="mx-auto"
              />
          <h3 className="font-semibold text-2xl" style={{ fontFamily: "Poppins" }}>
            Side table
          </h3>
          <Link
                href="/shop"
                className="inline-block text-lg font-medium border-b-4 border-black hover:text-gray-600"
              >
                View More
              </Link>
        </div>
      </div>
    </section>

    </>
  );
};

export default Hero;
