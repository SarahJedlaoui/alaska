import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionFour from "@/components/About/AboutSectionFour";
import AboutSectionFive from "@/components/About/AboutSectionFive";
import AboutSectionSix from "@/components/About/AboutSectionSix";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page ",
  description: "This is About Page ",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Alaska Kenai Adventures (AKA) will be your Alaska trip of a lifetime. The lodge is located on 180 feet of picturesque Kenai River shoreline with prime property for fishing Sockeye (Red) and Coho (Silver) salmon . This area is also home to the Russian River, Kasilof River, Anchor River, and Deep Creek."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
      <AboutSectionFour />
      <AboutSectionFive />
      <AboutSectionSix />
    </>
  );
};

export default AboutPage;
