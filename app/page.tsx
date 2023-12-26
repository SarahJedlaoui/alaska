import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionFour from "@/components/About/AboutSectionFour";
import AboutSectionFive from "@/components/About/AboutSectionFive";
import AboutSectionSix from "@/components/About/AboutSectionSix";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Leap Studio",
  description: "The Leap Studio",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Video />
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree/>
      <AboutSectionFour/>
      <AboutSectionFive/>
      <AboutSectionSix/>
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
