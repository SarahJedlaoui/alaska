import Image from "next/image";

const AboutSectionSix = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">

        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/logo/OIP.jpg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/logo/OIP.jpg"
                alt="about image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl xl:text-3xl">
                  EXCURSIONS
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Many more adventures a wait you from Dog Sledding, Bird Watching, Bear & Wild Life Watching, Sight Seeing, Flight Seeing, Shopping and Gift Shops, Canoeing, Hiking and Biking, Kayaking and more, Just let us know.
                </p>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionSix;
