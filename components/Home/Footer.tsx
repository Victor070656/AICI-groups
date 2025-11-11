import Link from "next/link";
import {
  BrandLogo,
  SocialLink,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
  ContactItem,
  LocationIcon,
  PhoneIcon,
  EmailIcon,
  ArrowRightIcon
} from "@/components/icons";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Top decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-yellow-700 to-blue-800"></div>

      <div className="px-6 sm:px-8 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Company info */}
            <div className="lg:col-span-1 space-y-6">
              <BrandLogo />
              <p className="font-sans text-gray-400 text-sm leading-relaxed">
                Building Futures, Delivering Excellence. Your trusted partner in
                real estate and consultancy.
              </p>
              <div className="flex gap-3">
                <SocialLink href="#" label="LinkedIn" icon={<LinkedinIcon />} />
                <SocialLink href="#" label="Twitter" icon={<TwitterIcon />} />
                <SocialLink href="#" label="Instagram" icon={<InstagramIcon />} />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-white">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  "About Us",
                  "Services",
                  "Properties",
                  "Blog",
                  "Contact",
                ].map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="font-sans text-gray-400 hover:text-yellow-700 text-sm transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-700 transition-all duration-300"></span>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-white">
                Contact Us
              </h4>
              <ul className="space-y-4 font-sans text-sm text-gray-400">
                <ContactItem icon={<LocationIcon />}>
                  Suite FF-18, Hakeem Dickson Drive, Off TF Kuboye Street,
                  Oniru–Lekki Phase 1, Lagos, Nigeria
                </ContactItem>
                <ContactItem icon={<PhoneIcon />}>
                  +234 (0) 9033145286
                </ContactItem>
                <ContactItem icon={<EmailIcon />}>
                  info@aicigoc.com
                </ContactItem>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-white">
                Newsletter
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to get the latest updates and offers.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  className="w-full btn-premium flex items-center justify-center gap-2 rounded-lg h-11 px-4 bg-gradient-to-r from-red-600 to-yellow-700 text-white text-sm font-semibold"
                >
                  <span>Subscribe</span>
                  <ArrowRightIcon />
                </button>
              </form>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                © 2025 AICI Group. All Rights Reserved.
              </p>
              <div className="flex gap-6 text-sm text-gray-500">
                <Link href="#" className="hover:text-yellow-700 transition-colors">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link href="#" className="hover:text-yellow-700 transition-colors">
                  Terms of Service
                </Link>
                <span>•</span>
                <Link href="#" className="hover:text-yellow-700 transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
