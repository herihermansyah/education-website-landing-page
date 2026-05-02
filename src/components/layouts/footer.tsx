import React from "react";
import SocialMedia from "../social-media";
import Logo from "../logo";
import MenuData from "../menu-data";

const linkData = [
  {title: "Our Projects", href: "/"},
  {title: "FAQ's", href: "/"},
  {title: "News and Updates", href: "/"},
];

const contactData = [
  {title: "Address : 4-5 Main road , Delhi", href: "/"},
  {title: "Email : educare@gmail.com", href: "/"},
  {title: "Phone Number : +91 4533433265", href: "/"},
];

function Footer() {
  return (
    <div className="container mx-auto xl:w-main px-4 md:px-0 pt-26.75 pb-14 flex flex-col items-center gap-31">
      <div className="flex flex-wrap gap-24 items-center">
        <Logo />
        <div className="flex items-start justify-between flex-wrap gap-22.75">
          <SocialMedia />
          <div className="flex flex-col gap-3.25">
            <h6 className="text-[20px] font-semibold capitalize">
              Useful Links
            </h6>
            <MenuData
              className="list-disc pl-5"
              data={linkData}
              title={(item) => item.title}
              href={(item) => item.href}
            />
          </div>
          <div className="flex flex-col gap-3.25">
            <h6 className="text-[20px] font-semibold capitalize">Contacts</h6>
            <MenuData
              data={contactData}
              title={(item) => item.title}
              href={(item) => item.href}
            />
          </div>
        </div>
      </div>
      <p className="text-gray-500">&copy; All Copyrights reserved</p>
    </div>
  );
}

export default Footer;
