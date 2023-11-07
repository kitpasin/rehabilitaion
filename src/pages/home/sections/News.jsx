import { useEffect } from "react";
import { Link } from "react-router-dom";
import { NewsData } from "../../../data/home/NewsData";
import Aos from "aos";
import "aos/dist/aos.css";

export default function News({ windowWidth }) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="w-full px-4 py-12">
      <div className="w-full max-w-[1636px] flex justify-start items-start gap-4 m-auto">
        {/* div เปล่าเพื่อรองรับ fixed sidebar ตั้งแต่หน้าจอ 1280 */}
        <div className="w-full max-w-[250px] max-xl:hidden" />
        <div className="w-full max-w-[1370px] max-xl:max-w-[768px] flex flex-col gap-12 max-xs:gap-4 m-auto xl:ml-auto">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex max-xs:flex-col justify-between items-center max-xs:items-start gap-4"
          >
            <p className="text-4xl font-[500]">{NewsData.h1}</p>
            <Link to="#" className="text-[#489295] underline">
              ดูข่าวประชาสัมพันธ์ทั้งหมด
            </Link>
          </div>
          {/* ถ้าขนาดหน้าจอมากกว่าหรือเท่ากับ 1280 แสดง news ซ้าย 1 ขวา 3 */}
          {windowWidth >= 1280 ? (
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="grid grid-cols-2 gap-4"
            >
              {/* first news */}
              <div className="max-w-[650px] flex flex-col justify-between">
                <div>
                  <figure>
                    <img
                      src={NewsData.lists[0].image}
                      alt={NewsData.lists[0].title}
                    />
                  </figure>
                  <p className="text-[#2F5C6F] text-[20px] font-[500] mt-4 leading-5">
                    {NewsData.lists[0].title}
                  </p>
                  <p className="text-[#A8A8A8] leading-5 mt-2">
                    {NewsData.lists[0].description}
                  </p>
                </div>
                <div>
                  <p className="text-[#2F5C6F] font-[300] leading-5 ">
                    วันที่ลงบทความ
                  </p>
                  <p className="text-[#2F5C6F] font-[500] leading-5 ">
                    {NewsData.lists[0].created_at}
                  </p>
                  <p className="text-[#A8A8A8] leading-5 ">
                    {NewsData.lists[0].author}
                  </p>
                  <div className="flex justify-start items-center gap-4 mt-2 mb-4">
                    <button className="bg-[#2F5C6F] px-4 py-2 rounded-md text-[#fff] leading-5 ">
                      ดูรายละเอียดเพิ่มเติม
                    </button>
                    <img src="/images/news-1-new.png" alt="" />
                  </div>
                  <div className="bg-[#D9D9D9] w-full h-[2px]" />
                </div>
              </div>
              {/* other news */}
              <div className="max-w-[650px] flex flex-col justify-between items-start">
                <div className="bg-[#D9D9D9] w-full h-[2px] mb-4" />
                {NewsData.lists.map((list, index) => (
                  <div key={list.id} className="flex flex-col items-start">
                    {index > 0 && (
                      <>
                        <div className="flex justify-between items-start gap-4">
                          <figure className="w-full">
                            <img
                              className="w-full"
                              src={list.image}
                              alt={list.title}
                            />
                          </figure>
                          <div className="h-full flex flex-col justify-between">
                            <p className="text-[#2F5C6F] text-[20px] font-[500] leading-5">
                              {list.title}
                            </p>
                            <p className="text-[#A8A8A8] leading-5 mt-2">
                              {list.description}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <p className="text-[#2F5C6F] font-[300] leading-5">
                                วันที่ลงบทความ
                              </p>
                              <p className="text-[#2F5C6F] font-[500] leading-5">
                                {list.created_at}
                              </p>
                            </div>
                            <p className="text-[#A8A8A8]">{list.author}</p>
                            <button className="bg-[#2F5C6F] w-fit mt-2 px-4 py-2 rounded-md text-[#fff] leading-5">
                              ดูรายละเอียดเพิ่มเติม
                            </button>
                          </div>
                        </div>
                        <div
                          className={`bg-[#D9D9D9] w-full h-[2px] ${
                            index === NewsData.lists.length - 1
                              ? "mt-4"
                              : "my-4"
                          }`}
                        />
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // ถ้าขนาดหน้าจอน้อยกว่า 1280 แสดง news แบบ grid 2-1 column
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="w-full h-full grid grid-cols-2 max-xs:grid-cols-1 gap-4"
            >
              {NewsData.lists.map((list, index) => (
                <div
                  key={list.id}
                  className="w-full h-full flex flex-col justify-between gap-4"
                >
                  <div>
                    <figure>
                      <img src={list.image} alt={list.title} />
                    </figure>
                    <p className="text-[#2F5C6F] text-[20px] font-[500] mt-4 leading-5">
                      {list.title}
                    </p>
                    <p className="text-[#A8A8A8] leading-5 mt-2">
                      {list.description}
                    </p>
                  </div>
                  <div className="flex flex-col justify-end">
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
                      {/* แสดงป้าย news ใหม่ ถ้า index = 0 */}
                      {index === 0 && (
                        <img src="/images/news-1-new.png" alt="" />
                      )}
                    </div>
                    <div className="bg-[#D9D9D9] w-full h-[2px]" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
