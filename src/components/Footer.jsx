import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";

function Footer() {
  return (
    <footer className="mt-[5.5rem]">
      <ul className="flex justify-center items-center gap-3 md:gap-7">
        <li className="text-lg md:text-2xl border rounded-full text-primary-blue hover:text-white hover:bg-primary-blue transition-colors">
          <a href="#" aria-label="facebook">
            <TiSocialFacebook aria-hidden="true" />
          </a>
        </li>
        <li className="text-lg md:text-2xl border rounded-full text-primary-blue hover:text-white hover:bg-primary-blue transition-colors">
          <a href="#" aria-label="twitter">
            <TiSocialTwitter aria-hidden="true" />
          </a>
        </li>
        <li className="p-1 text-sm md:text-lg border rounded-full text-primary-blue hover:text-white hover:bg-primary-blue transition-colors">
          <a href="#" aria-label="instagram">
            <SlSocialInstagram aria-hidden="true" />
          </a>
        </li>
      </ul>

      <p className="mt-4 text-[.625rem] md:text-sm text-center text-neutral-gray">
        &copy; Copyright Ping. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
