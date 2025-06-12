import React from "react";
import Image from "next/image";
import ILink from "../illustration/link";

function Footer() {
  const socials = [
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/company/srm-mun-society/posts/?feedView=all",
      imgUrl: "/img/Linkedln.png",
    },
    {
      name: "Twitter(X)",
      href: "https://x.com/srm_munsoc",
      imgUrl: "/img/twitter_new.png",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/srm_munsoc/",
      imgUrl: "/img/instagram.png",
    },
  ];
  return (
    <div className="container" data-test="footer">
      <div
        className="w-full flex justify-between items-center p-4 sm:flex-col sm:gap-3"
        data-test="footer-asyncAPI-logo"
      >
        <div className="mt-2 text-[14px] text-gray-100 sm:hidden">
          <a
            href="https://docs.google.com/spreadsheets/d/1C-cVkQC2JXNBHE0KUEbJCWTpAnZSHtLIaquVn_UJfu8/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="hover:underline text-white duration-200 ease-in-out flex items-center"
            data-test="code-of-conduct"
          >
           <span> Country Matrix 2024 </span><span><ILink className='w-4 ml-2' fill='white' /></span>
          </a>
        </div>
        <div></div>
        <div className="flex items-center justify-between sm:flex-col sm:items-center">
         <div className="text-white">Made with ❤️ by SRM MUN Society.</div>
         <div className="w-[0.9px] h-4 bg-white ml-4 sm:hidden" />
            <div className="ml-4 flex justify-between items-center gap-2 sm:mt-4">
              {socials.map((social, index) => {
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg flex items-center justify-center hover:border-[#AD20E2] duration-150 ease-in-out"
                    data-test={`footer-${social.name}`}
                  >
                    <Image
                      src={social.imgUrl}
                      alt={social.name}
                      height={23}
                      width={23}
                    />
                  </a>
                );
              })}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
