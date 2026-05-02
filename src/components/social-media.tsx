import React from "react";
import {CiTwitter} from "react-icons/ci";
import {FiLinkedin} from "react-icons/fi";
import {LiaFacebookF} from "react-icons/lia";
import {FaInstagram} from "react-icons/fa";

const socialMedia = [
  {id: 1, icon: <CiTwitter size={23} />},
  {id: 2, icon: <FiLinkedin size={23} />},
  {id: 3, icon: <LiaFacebookF size={23} />},
  {id: 4, icon: <FaInstagram size={23} />},
];

function SocialMedia() {
  return (
    <div className="flex flex-col gap-3.25">
      <h3 className="text-[20px] font-semibold">Follow us</h3>
      <ul className="flex flex-wrap items-center gap-5.75">
        {socialMedia.map((item) => (
          <li
            className="text-black/45 w-10 h-10 rounded-full border-2 border-black/45 flex items-center justify-center"
            key={item.id}
          >
            {item.icon}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialMedia;
