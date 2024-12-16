import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md">
      {/* Left Section: Links */}
      <div className="flex space-x-8 text-gray-800 font-medium">
        <Link href="/" className="hover:text-gray-500">Home</Link>
        <Link href="/shop" className="hover:text-gray-500">Shop</Link>
        <Link href="/about" className="hover:text-gray-500">About</Link>
        <Link href="/contact" className="hover:text-gray-500">Contact</Link>
      </div>

      {/* Right Section: Icons */}
      <div className="flex space-x-6 text-gray-800">
        {/* Profile Icon */}
        <Link href="/profile">
          <svg className="w-6 h-6 hover:text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 14a4 4 0 00-8 0m8 0a4 4 0 11-8 0m8 0v3a3 3 0 01-3 3H9a3 3 0 01-3-3v-3m8 0H7m5-10a4 4 0 110 8 4 4 0 010-8z" />
          </svg>
        </Link>

        {/* Search Icon */}
        <Link href="/search">
          <svg className="w-6 h-6 hover:text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1111 5a6 6 0 016 6z" />
          </svg>
        </Link>

        {/* Heart Icon */}
        <Link href="/wishlist">
          <svg className="w-6 h-6 hover:text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.572L12 21l-7.5-7.428a5.25 5.25 0 017.372-7.5l.128.128.128-.128a5.25 5.25 0 017.372 7.5z" />
          </svg>
        </Link>

        {/* Cart Icon */}
        <Link href="/cart">
          <svg className="w-6 h-6 hover:text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h3l.879 4.122M7.5 13H16m5-8H7.879M7.5 13a2.5 2.5 0 105 0m-5 0a2.5 2.5 0 11-5 0m5 0L20 5m0 0a2.5 2.5 0 11-5 0" />
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
