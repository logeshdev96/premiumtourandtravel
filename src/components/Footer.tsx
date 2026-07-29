import Link from "next/link";
import { Camera, MessageCircle, Share2, Video } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#4a0404] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold tracking-tighter text-white flex items-center">
                Dust & <span className="text-amber-500 ml-1">Dough</span>
              </span>
            </Link>
            <p className="text-amber-50/80 font-light mb-6">
              Crafting delightful baked goods for our community. Every item is baked fresh with love.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-500 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" className="text-amber-500 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 tracking-wide text-amber-500">Menu</h4>
            <ul className="space-y-4">
              <li><Link href="#menu" className="text-amber-50/80 hover:text-white transition-colors font-light">Breads</Link></li>
              <li><Link href="#menu" className="text-amber-50/80 hover:text-white transition-colors font-light">Pastries</Link></li>
              <li><Link href="#menu" className="text-amber-50/80 hover:text-white transition-colors font-light">Cakes</Link></li>
              <li><Link href="#menu" className="text-amber-50/80 hover:text-white transition-colors font-light">Custom Orders</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 tracking-wide text-amber-500">Contact Us</h4>
            <ul className="space-y-4 text-amber-50/80 font-light">
              <li>OPP - PKR ARTS</li>
              <li>PARIYUR ROAD</li>
              <li>GOBICHETTIPALAYAM</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 tracking-wide text-amber-500">Opening Hours</h4>
            <ul className="space-y-4 text-amber-50/80 font-light">
              <li>Mon - Fri: 8:00 AM - 8:00 PM</li>
              <li>Sat: 9:00 AM - 7:00 PM</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-amber-50/60 font-light text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Dust & Dough. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-amber-50/60 hover:text-white text-sm font-light transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-amber-50/60 hover:text-white text-sm font-light transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
