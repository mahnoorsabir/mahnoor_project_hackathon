import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Trenton modular sofa_3',
    price: 'Rs. 25,000.00',
    image: '/images/sofa.png', // Replace with your image path
  },
  {
    id: 2,
    name: 'Granite dining table with dining chair',
    price: 'Rs. 25,000.00',
    image: '/images/dining-table.png',
  },
  {
    id: 3,
    name: 'Outdoor bar table and stool',
    price: 'Rs. 25,000.00',
    image: '/images/bar-table.png',
  },
  {
    id: 4,
    name: 'Plain console with teak mirror',
    price: 'Rs. 25,000.00',
    image: '/images/teak-mirror.png',
  },
];

const ProductSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Top Picks For You</h2>
        <p className="text-gray-500 mb-10">
          Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              <Image
                src={product.image}
                alt={product.name}
                width={287}
                height={287}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg text-gray-700 mb-2">{product.name}</h3>
              <p className="text-gray-900 font-bold">{product.price}</p>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-10">
          <Link
            href="/shop"
            className="inline-block px-6 py-2 border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
