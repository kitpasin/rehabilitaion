import { useEffect } from "react";
import { Link } from "react-router-dom";
import { EventData } from "../../../data/home/EventData";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Event() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(90deg, transparent 40%, #A3CFC0), linear-gradient(270deg, transparent 40%, #A3CFC0)`,
      }}
      className="w-full relative px-4 py-12 -z-10 overflow-hidden"
    >
      <figure className="absolute bottom-0 left-0 -z-10">
        <img src="/images/dec-bl.png" alt="Bacnground Decoration" />
      </figure>
      <figure className="absolute top-0 right-0 -z-10">
        <img src="/images/dec-tr.png" alt="Bacnground Decoration" />
      </figure>
      <div className="w-full max-w-[1636px] flex justify-start items-start gap-4 m-auto">
        {/* div เปล่าเพื่อรองรับ fixed sidebar ตั้งแต่หน้าจอ 1280 */}
        <div className="w-full max-w-[250px] max-xl:hidden" />
        <div className="w-full max-w-[1370px] max-xl:max-w-[768px] flex flex-col gap-12 max-xs:gap-4 m-auto xl:ml-auto">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex max-xs:flex-col justify-between items-center max-xs:items-start gap-4"
          >
            <p className="text-4xl font-[500]">{EventData.h1}</p>
            <Link to="#" className="text-[#489295] underline">
              ดูกิจกรรมทั้งหมด
            </Link>
          </div>
          {/* แสดง event แบบ grid 2-1 column */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="w-full h-full grid grid-cols-2 max-xs:grid-cols-1 gap-4"
          >
            {EventData.lists.map((list, index) => (
              <div key={list.id} className="w-full h-full max-w-[650px]">
                <div className="flex justify-between max-xl:flex-col gap-4">
                  <figure className="xl:w-1/2">
                    <img src={list.image} alt={list.title} />
                  </figure>
                  <div className="xl:w-1/2">
                    <p className="text-[#2F5C6F] text-[20px] font-[500] leading-5">
                      {list.title}
                    </p>
                    <p className="text-[#A8A8A8] leading-5 mt-2">
                      {list.description}
                    </p>
                    <div className="flex flex-col justify-end mt-2">
                      <p className="text-[#2F5C6F] font-[300] leading-5 ">
                        วันที่ลงบทความ
                      </p>
                      <p className="text-[#2F5C6F] font-[500] leading-5 ">
                        {list.created_at}
                      </p>
                      <p className="text-[#A8A8A8] leading-5 ">{list.author}</p>
                      <div className="flex justify-start items-center gap-4 my-4">
                        <button className="bg-[#2F5C6F] px-4 py-2 rounded-md text-[#fff] leading-5 ">
                          ดูรายละเอียดเพิ่มเติม
                        </button>
                        {/* แสดงป้าย event ใหม่ ถ้า index = 0 */}
                        {index === 0 && (
                          <img src="/images/event-1-new.png" alt="" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#D9D9D9] w-full h-[2px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
