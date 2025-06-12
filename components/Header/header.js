
import React from "react";
import Heading from "../Typography/heading";
import Paragraph from "../Typography/paragraph";
import Button from "../Buttons/button";
import ReactSlider from "../Slider/slider";
import cities from "../../config/city-lists.json";
import committee from "../Committee/committee";
import Announcement from "../announcement";
import Link from "next/link";

function Header() {
  return (
    <div className="relative">
      <div className="container w-full flex items-center justify-center">
        <div className="">
          <div className="flex justify-center w-full mt-32">
            <div className="flex flex-col justify-center items-center w-full">
              <div className="my-10">
                <Announcement />
              </div>
              <div
                className="sm:w-full text-center"
                data-test="landing-heading"
              >
                <Heading
                  className="text-6xl sm:text-4xl leading-normal sm:leading-38px tracking-[-3px] sm:tracking-[-0.02em] font-extrabold text-gradient"
                  level="h1"
                  typeStyle="heading"
                >
                  Ignite. Inspire. Impact.
                </Heading>
              </div>
              <div className="w-[624px] sm:w-full text-center">
                <Paragraph className="mt-[16px]" textColor="text-gray-200">
                  The world calls for your leadership, and the future is shaped by those who dare to act. Gain wisdom, forge lasting bonds, and leave an indelible mark. Rise, challenge the norm, and be the spark that kindles change.
                </Paragraph>
              </div>
              <div className="mt-[54px] relative flex items-center justify-center">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSehNBhz2nZYF2xR12RJGR005mHZUej9F4lnYfcAIqW921W75A/viewform">
                  <Button className="w-[250px]">Register Now</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <ReactSlider>
          {cities.map((city) => {
            return <committee key={city.name} city={city} />;
          })}
        </ReactSlider>
      </div>
    </div>
  );

}

export default Header;
