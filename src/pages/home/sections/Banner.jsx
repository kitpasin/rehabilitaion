import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { BannerData } from "../../../data/home/BannerData";
import { useEffect } from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import Aos from 'aos';
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";

export default function Banner({ windowWidth }) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Swiper
      className="mySwiper z-0"
      slidesPerView={1}
      speed={1000}
      loop={true}
      draggable={true}
      modules={[Navigation]}
      navigation={{
        nextEl: ".next",
        prevEl: ".prev",
      }}
    >
      {BannerData.map((banner) => (
        <SwiperSlide
          key={banner.id}
          className="w-full relative overflow-hidden text-white"
        >
          <figure>
            <img
              className="w-full max-md:h-[280px] max-md:object-cover"
              src={banner.image}
              alt={banner.title}
            />
          </figure>
          <div className="w-full h-full max-w-[100%] md:max-w-[620px] absolute bottom-0 left-0 md:left-16 lg:left-36 flex flex-col justify-center items-center md:items-start text-center md:text-start gap-2 xl:gap-8 drop-shadow-md">
            <div>
              <figure>
                <img
                  className="w-[250px] h-[75px] 2xl:w-auto 2xl:h-auto"
                  src={banner.icon}
                  alt={banner.title}
                />
              </figure>
              <p className="mt-2 xl:mt-1 2xl:mt-0 text-4xl xl:text-6xl 2xl:text-8xl font-[600]">
                {banner.title}
              </p>
            </div>

            <div className="flex flex-col gap-4 xl:gap-8">
              {/* เช็คขนาดจอ ลดจำนวน description */}
              <p className="max-md:max-w-[320px] italic leading-4 lg:leading-5 text-[14px] lg:text-[16px]">
                {windowWidth < 768
                  ? `${banner.description.substring(0, 150)}...`
                  : windowWidth < 1024
                  ? `${banner.description.substring(0, 300)}...`
                  : banner.description}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <FacebookRoundedIcon
                    sx={{ color: "#fff", fontSize: "32px" }}
                  />
                  <p className="flex flex-col leading-4 lg:leading-5 text-[14px] lg:text-[16px]">
                    {banner.fb.split(" ")[0]}
                    <span>
                      {banner.fb.split(" ")[1]} {banner.fb.split(" ")[2]}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[14px] lg:text-[16px]">
                  <LocalPhoneRoundedIcon
                    sx={{ color: "#fff", fontSize: "32px" }}
                  />
                  <p>{banner.tel}</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      {/* custom swiper navigation */}
      {/* ใช้ class prev และ next ในการอ้างอิงจาก navigation */}
      <div className="w-full h-0 absolute top-1/2 z-10 flex justify-between items-center px-4 lg:px-12 drop-shadow-md">
        <img
          data-aos="fade-left"
          data-aos-duration="1000"
          className="prev w-[32px] lg:w-[40px] hidden xs:block cursor-pointer"
          src="/images/banner-prev.png"
          alt="Navigation Prev"
        />
        <img
          data-aos="fade-right"
          data-aos-duration="1000"
          className="next w-[32px] lg:w-[40px] hidden xs:block cursor-pointer"
          src="/images/banner-next.png"
          alt="Navigation Next"
        />
      </div>
    </Swiper>
  );
}
