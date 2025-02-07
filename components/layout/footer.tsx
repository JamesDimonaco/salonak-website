import Link from "next/link";
import { siteConfig } from "@/content/siteConfig";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlay,
  faAppStoreIos,
} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.jpg"
                alt={siteConfig.name}
                width={40}
                height={40}
                className="h-10 w-auto rounded-full"
              />
              <h3 className="text-lg font-semibold">About Us</h3>
            </div>
            <p className="text-muted-foreground">{siteConfig.description}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {siteConfig.footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              {siteConfig.socialMedia.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Download Our App</h3>
            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <FontAwesomeIcon
                  icon={faAppStoreIos}
                  className="h-8 w-8 text-[#0484eb]"
                />
                <span>Download on App Store</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <FontAwesomeIcon
                  icon={faGooglePlay}
                  className="h-8 w-8 text-[#0F9D58]"
                />
                <span>Get it on Google Play</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
