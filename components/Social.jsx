import Link from "next/link";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
const download = [
  {
    name: "CV",
    path: "../assets/yoann-bounon-cv.pdf",
  },
];
const socials = [
  { icon: <FaGithub />, path: "https://github.com/BounonYoann" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/yoann-bounon/" },
  // {
  //   icon: <FaInstagram />,
  //   path: "https://www.instagram.com/visiondigitaldev/",
  // },
  // { icon: <FaTwitter />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
