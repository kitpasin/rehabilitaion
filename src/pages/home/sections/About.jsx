import { useEffect } from "react";
import { AboutData } from "../../../data/home/AboutData";
import SideNavbar from "../../../layouts/SideNavbar";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Aos from "aos";
import "aos/dist/aos.css";

export default function About({ windowWidth, isScrollToSidebar }) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(90deg, transparent 40%, #A3CFC0), linear-gradient(270deg, transparent 40%, #A3CFC0)`,
      }}
      className="w-full relative px-4 py-12 z-0 overflow-hidden"
    >
      <figure className="absolute bottom-0 left-0 -z-10">
        <img src="/images/dec-bl.png" alt="Bacnground Decoration" />
      </figure>
      <div className="w-full max-w-[1636px] max-xl:max-w-[768px] flex justify-start items-start gap-4 m-auto">
        <SideNavbar
          windowWidth={windowWidth}
          isScrollToSidebar={isScrollToSidebar}
        />
        {/* div เปล่าใช้ดันไม่ให้ content บีบ ตั้งแต่หน้าจอ 1280 */}
        {windowWidth >= 1280 && isScrollToSidebar && (
          <div className="w-full max-w-[250px]" />
        )}
        <div className="w-full max-w-[1370px] xl:grid xl:grid-cols-2 xl:items-center gap-4 ml-auto">
          <div className="w-full xl:max-w-[650px] flex flex-col gap-12 max-xs:gap-4">
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-4xl font-[500]"
            >
              {AboutData.h1}
            </h1>
            {/* แสดงรูปถ้าขนาดจอน้อยกว่า 1280 */}
            <figure
              data-aos="fade-left"
              data-aos-duration="1000"
              className="xl:hidden"
            >
              <img src="images/about-1.png" alt="Rehabilitation" />
            </figure>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="flex flex-col gap-4"
            >
              <p className="text-[20px] font-[500]">{AboutData.title}</p>
              <p>{AboutData.description}</p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="flex flex-col gap-4"
            >
              {AboutData.lists.map((list) => (
                <div key={list.id} className="flex items-center gap-4">
                  <CheckCircleRoundedIcon sx={{ fontSize: "32px" }} />
                  <p className="font-[600]">{list.title}</p>
                </div>
              ))}
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="flex max-md:flex-col items-center max-md:items-start gap-12 max-md:gap-4"
            >
              <div className="flex items-center gap-4 flex-none">
                <LocalPhoneRoundedIcon sx={{ fontSize: "32px" }} />
                <p>{AboutData.tel}</p>
              </div>
              <div className="flex items-center gap-4 flex-none">
                <FacebookRoundedIcon sx={{ fontSize: "32px" }} />
                <p>{AboutData.fb}</p>
              </div>
            </div>
          </div>
          {/* ซ่อนรูปถ้าขนาดจอน้อยกว่า 1280 */}
          <figure
            data-aos="fade-left"
            data-aos-duration="1000"
            className="max-xl:hidden"
          >
            <img src={AboutData.image} alt={AboutData.title} />
          </figure>
        </div>
      </div>
    </div>
  );
}
