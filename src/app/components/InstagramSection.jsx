const InstagramSection=()=> {
  return (
    <section className="relative bg-gray-50 py-24 text-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bgImage.png')" }}
      ></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-4">Our Instagram</h2>
        <p className="text-gray-600 mb-6">Follow our store on Instagram</p>
        <button className="bg-black text-white px-6 py-2 rounded-full">
          Follow Us
        </button>
      </div>
    </section>
  );
}


export default InstagramSection