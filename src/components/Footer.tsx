import Link from "next/link"
export default function Footer(){

    return <>
        <footer className="bg-black text-gray-500 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
            <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Harmony Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <Link
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            
            <li>
              <Link
                href="/courses"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Pune, India</p>
          <p>Pune 10001</p>
          <p>Email: info@harmonymusicschool.com</p>
          <p>Phone: 9420207903</p>
        </div>
        </div>
        <p className="text-center text-xs pt-8">© 2024 Harmony Music School. All rights reserved.</p>
        </footer>
    </>
}