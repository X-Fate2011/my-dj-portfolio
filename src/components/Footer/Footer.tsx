import { SocialLinks } from "./SocialLinks/SocialLinks";
import { CopyrightNotice } from "./CopyrightNotice/CopyrightNotice";
import { LegalLinks } from "./LegalLinks/LegalLinks";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-8 z-20" role="contentinfo">
      <div className="px-4 flex flex-col lg:flex-row items-center justify-center gap-4">
        <SocialLinks />
        <CopyrightNotice />
        <LegalLinks />
      </div>
    </footer>
  );
};

export default Footer;
