export default function PicksSection() {
    return (
      <>
      <section className="py-12 bg-gray-100 px-6 md:px-24">
        <h2 className="text-3xl font-bold text-center mb-8">Top Picks For You</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array(4)
            .fill(0)
            .map((_, idx) => (
              <div key={idx} className="text-center">
                <img
                  src={`/pick-${idx + 1}.png`}
                  alt="Top Pick"
                  className="w-48 h-48 mx-auto mb-2"
                />
                <p className="text-gray-600">$2,500.00</p>
              </div>
            ))}
        </div>
      </section>

      <div className="bg-[#FFF9E5] w-full h-[639px] flex items-center justify-between px-10">
          {/* Left Section: Sofa Image */}
          <div className="flex-1">
            <img
              src="Group 23.png"
              alt="Asgaard Sofa"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Section: Content */}
          <div className="flex-1 space-y-6 text-center">
            <p className="text-gray-800 text-lg uppercase font-medium">
              New Arrivals
            </p>
            <h1 className="text-4xl font-extrabold text-black">Asgaard sofa</h1>
            <button className="bg-transparent border border-black text-black font-medium py-3 px-6 hover:bg-black hover:text-white transition duration-300">
              Order Now
            </button>
          </div>
      </div>

      </>
    );
  }
  