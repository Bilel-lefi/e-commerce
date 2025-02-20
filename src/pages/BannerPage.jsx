import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/banner/post1.jpg";
import img2 from "../assets/banner/post2.jpg";
import img3 from "../assets/banner/post3.jpg";
function BannerPage() {
  return (
    <>
      <div className="mt-5 min-h-screen flex flex-col py-7 w-full justify-center items-center">
        <h1
          className="text-4xl font-bold border-b-2 border-gray-600 font-light text-gray-600 uppercase pb-2"
          data-aos="fade-up"
        >
          Notre Travail
        </h1>

        <div className="mt-5">
          <Carousel
            showThumbs={false}
            infiniteLoop={true}
            showIndicators={false}
            showStatus={false}
            autoPlay={true}
          >
            <div>
              <img
                className="w-full xs:h-[40vh]  lg:h-[70vh] md:h-[70vh] sm:h-[20vh]"
                src={img1}
              />
            </div>
            <div>
              <img className="w-full md:h-[70vh] sm:h-[20vh]" src={img2} />
            </div>
            <div>
              <img className="w-full md:h-[70vh] sm:h-[20vh]" src={img3} />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default BannerPage;
