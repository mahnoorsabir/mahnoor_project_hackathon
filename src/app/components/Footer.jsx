export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-24 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
        {/* Address Section */}
        <div className="text-sm">
          <p className="text-gray-400 mb-2">
            400 University Drive Suite 200 Coral Gables,
          </p>
          <p className="text-gray-400">FL 33134 USA</p>
        </div>

        {/* Links Section */}
        <div className="flex justify-between md:justify-around">
          <div>
            <h3 className="font-medium mb-2 text-gray-400">Links</h3>
            <ul>
              <li className="mb-1">
                <a
                  href="#"
                  className="font-[500] text-[16px] leading-[24px] hover:underline"
                  style={{ fontFamily: "Poppins", width: "42px", height: "24px" }}
                >
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="font-[500] text-[16px] leading-[24px] hover:underline"
                  style={{ fontFamily: "Poppins", width: "42px", height: "24px" }}
                >
                  Shop
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="font-[500] text-[16px] leading-[24px] hover:underline"
                  style={{ fontFamily: "Poppins", width: "42px", height: "24px" }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-[500] text-[16px] leading-[24px] hover:underline"
                  style={{ fontFamily: "Poppins", width: "42px", height: "24px" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2 text-gray-400">Help</h3>
            <ul>
              <li className="mb-1">
                <a
                  href="#"
                  className="font-[500] text-[16px] leading-[24px] hover:underline"
                  style={{ fontFamily: "Poppins", width: "42px", height: "24px" }}
                >
                  Payment Options
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="font-[500] text-[16px] leading-[24px] hover:underline"
                  style={{ fontFamily: "Poppins", width: "42px", height: "24px" }}
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-[500] text-[16px] leading-[24px] hover:underline"
                  style={{ fontFamily: "Poppins", width: "42px", height: "24px" }}
                >
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="font-medium mb-2 text-gray-400">Newsletter</h3>
          <div className="flex items-center border-b border-black">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full py-2 text-sm outline-none"
              style={{ fontFamily: "Poppins" }}
            />
            <button
              className="ml-2 font-bold hover:text-gray-600"
              style={{ fontFamily: "Poppins" }}
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-12 border-t pt-4 text-sm text-gray-700">
        <p style={{ fontFamily: "Poppins" }}>2022 Meubel House. All rights reserved</p>
      </div>
    </footer>
  );
}
