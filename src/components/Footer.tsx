import Link from "next/link";
import { Camera, MessageCircle, Share2, Video } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold tracking-tighter text-white uppercase flex items-center">
                Wander<span className="text-amber-500">Luxe</span>
              </span>
            </Link>
            <p className="text-gray-400 font-light mb-6">
              Curating exceptional travel experiences for the world&apos;s most discerning explorers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <span className="sr-only">Facebook</span>
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <span className="sr-only">YouTube</span>
                <Video className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 tracking-wide">Destinations</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors font-light">Europe</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors font-light">Asia</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors font-light">Africa</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors font-light">South America</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors font-light">About Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors font-light">Our Team</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors font-light">Careers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors font-light">Press</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 tracking-wide">Newsletter</h4>
            <p className="text-gray-400 font-light mb-4">
              Subscribe to receive exclusive offers and travel inspiration.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-900 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 flex-grow font-light border border-gray-800"
              />
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 font-light text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} WanderLuxe Travel. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-white text-sm font-light transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-white text-sm font-light transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
