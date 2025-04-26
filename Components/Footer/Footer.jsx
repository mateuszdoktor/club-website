//daisyUI Footer
export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 px-6 md:px-20 py-16 border-t border-gray-200 text-base">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div>
          {/* <img src="/logo-navy-no-bg.png" alt="Logo" className="w-16 mb-6" /> */}
          <p className="text-gray-500 leading-relaxed">
            © 2025 Real Madrid. All rights reserved.
          </p>
        </div>

        <div>
          <h6 className="font-semibold mb-4 uppercase text-gray-700 text-sm tracking-wider">
            Club
          </h6>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                History
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Foundation
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="font-semibold mb-4 uppercase text-gray-700 text-sm tracking-wider">
            Tickets
          </h6>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:underline">
                Buy tickets
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Membership
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Hospitality
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="font-semibold mb-4 uppercase text-gray-700 text-sm tracking-wider">
            Follow Us
          </h6>
          <div className="flex space-x-5">
            <a
              href="#"
              className="text-gray-500 hover:text-black"
              aria-label="Facebook"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                width="22"
                height="22"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.6l.4-4h-4v-1.7c0-.95.2-1.3 1.1-1.3H19V0h-3.8C11.6 0 10 1.6 10 4.6V8z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-black"
              aria-label="Twitter"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                width="22"
                height="22"
              >
                <path d="M24 4.6c-.9.4-1.8.6-2.8.8 1-0.6 1.8-1.6 2.2-2.7-1 .6-2 .9-3.1 1.2C19.3 2.7 18 2 16.6 2c-2.7 0-4.7 2.5-4.1 5.1-3.4-.2-6.4-1.8-8.4-4.3-1.1 1.9-.6 4.4 1.3 5.7C4 8.4 3.2 8.2 2.5 7.9c-.1 2.3 1.6 4.5 4 5-.7.2-1.5.2-2.2.1.6 1.9 2.4 3.3 4.6 3.3-2.1 1.6-4.7 2.3-7.3 2 2.2 1.4 4.8 2.2 7.5 2.2 9.1 0 14.3-7.7 14-14.6.9-.7 1.8-1.6 2.5-2.6z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-black"
              aria-label="Instagram"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                width="22"
                height="22"
              >
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.6.2 1 .5 1.4.9s.7.8.9 1.4c.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.2.6-.5 1-.9 1.4s-.8.7-1.4.9c-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.6-.2-1-.5-1.4-.9s-.7-.8-.9-1.4c-.2-.4-.4-1.1-.5-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.2-.6.5-1 .9-1.4s.8-.7 1.4-.9c.4-.2 1.1-.4 2.3-.5C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.6.2 4.5.5 3.7.9c-.9.4-1.7 1-2.5 1.8S.5 4.5.1 5.3C-.2 6.1-.5 7.2-.6 8.6.5 8.9 0 9.3 0 12c0 2.7.1 3.1.1 4.4.1 1.4.4 2.5.9 3.3.4.8 1 1.6 1.8 2.4.8.8 1.6 1.4 2.4 1.8.8.5 1.9.8 3.3.9 1.3.1 1.7.1 4.4.1s3.1 0 4.4-.1c1.4-.1 2.5-.4 3.3-.9.8-.4 1.6-1 2.4-1.8.8-.8 1.4-1.6 1.8-2.4.5-.8.8-1.9.9-3.3.1-1.3.1-1.7.1-4.4s0-3.1-.1-4.4c-.1-1.4-.4-2.5-.9-3.3-.4-.8-1-1.6-1.8-2.4-.8-.8-1.6-1.4-2.4-1.8-.8-.5-1.9-.8-3.3-.9C15.3 0 14.9 0 12 0zM12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.3a4.1 4.1 0 1 1 0-8.2 4.1 4.1 0 0 1 0 8.2zm6.4-11.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-8 text-sm text-gray-500 text-center">
        <p>Legal | Privacy Policy | Cookie Policy | Accessibility</p>
      </div>
    </footer>
  );
}
