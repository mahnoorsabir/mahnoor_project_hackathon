import Image from 'next/image';
import Link from 'next/link';
import * as React from "react";

const blog = [
  {
    id: 1,
    desc: 'Going all-in with millennial design',
    image: '/images/blogs1.png', // Replace with your image path
  },
  {
    id: 2,
    desc: 'Granite dining table with dining chair',
    image: '/images/blogs2.png',
  },
  {
    id: 3,
    desc: 'Outdoor bar table and stool',
    image: '/images/blog3.png',
  },
];
const BlogSection = () => {
  return (
    <section className="py-12 px-6 md:px-24">
      <h2 className="text-3xl font-bold text-center mb-8">Our Blog</h2>
      <p className="text-gray-500 mb-10">
        Find a bright ideal to suit your taste with our great selection
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blog.map((blog, idx) => (
          <div key={idx} className="text-center">
            <Image
                src={blog.image}
                alt={blog.name}
                width={393}
                height={393}
                className="mx-auto mb-4"
              />
            <div>
              <p> {blog.desc} </p>
              <Link
                href="/shop"
                className="inline-block text-lg font-medium border-b-4 border-black hover:text-gray-600"
              >
                Read More
              </Link>
              <div className='flex justify-center'>
                <div >
                <svg
                className='inline-block '
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height={18}
                  width={17.83}
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                  <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z" />
                </svg>
                <p className='inline-block ms-1 mt-4'>5 min</p>
                </div>
                <div className='ms-4' >
                <svg
                  className='inline-block '
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  height={18}
                  width={17.83}
                >
                  <path d="M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 2a1 1 0 00-1 1v1h14V3a1 1 0 00-1-1H2zm13 3H1v9a1 1 0 001 1h12a1 1 0 001-1V5z" />
                </svg>
                <p className='inline-block ms-1 mt-4'>12th Oct 2022</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
