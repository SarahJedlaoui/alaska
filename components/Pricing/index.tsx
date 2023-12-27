"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="2024 Package Information and Pricing"
          paragraph="All packages include accommodations, 3 meals per day, unlimited private bank fishing at the lodge (fishing gear provided), 50 lbs of fish processing, plus Charter Fishing Trips. Package pricing below is per guest.          
          
          
          
          Check in starting at 3PM. Check out time is 11AM."
          center
          width="665px"
        />


        <div className="w-full">
          <div
            className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-wow-delay=".1s"
          >
            <span
              onClick={() => setIsMonthly(true)}
              className={`${isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
                } mr-4 #54b4cd cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${isMonthly ? "" : "translate-x-full"
                    } shadow-switch-1 bg-[#54b4cd] absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
                } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          <PricingBox
            packageName="Standard Stay"
            price={isMonthly ? "2.19" : "120"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="4 Nights
            (3 Days)"
          >
            <OfferList text="6/1 – 7/15 King Salmon, Halibut" status="active" />
            <OfferList text="7/15 – 8/15 Sockeye Salmon, Halibut" status="active" />
            <OfferList text="8/15 – 9/10 Silver Salmon, Halibut, Trophy Trout" status="active" />
            <OfferList text="0 Charter Trips" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Package A"
            price={isMonthly ? "2.699" : "789"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="4 Nights (3 Days)"
          >
           <OfferList text="6/1 – 7/15 King Salmon, Halibut" status="active" />
            <OfferList text="7/15 – 8/15 Sockeye Salmon, Halibut" status="active" />
            <OfferList text="8/15 – 9/10 Silver Salmon, Halibut, Trophy Trout" status="active" />
            <OfferList text="2 Charter Trips" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Package B"
            price={isMonthly ? "3.459" : "999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="5 Nights (4 Days)"
          >
           <OfferList text="6/1 – 7/15 King Salmon, Halibut" status="active" />
            <OfferList text="7/15 – 8/15 Sockeye Salmon, Halibut" status="active" />
            <OfferList text="8/15 – 9/10 Silver Salmon, Halibut, Trophy Trout" status="active" />
            <OfferList text="3 Charter Trips" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Package C"
            price={isMonthly ? "4.199" : "999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="6 Nights (5 Days)"
          >
           <OfferList text="6/1 – 7/15 King Salmon, Halibut" status="active" />
            <OfferList text="7/15 – 8/15 Sockeye Salmon, Halibut" status="active" />
            <OfferList text="8/15 – 9/10 Silver Salmon, Halibut, Trophy Trout" status="active" />
            <OfferList text="4 Charter Trips" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#54b4cd" />
              <stop offset="1" stopColor="#54b4cd" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#54b4cd" />
              <stop offset="1" stopColor="#54b4cd" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
