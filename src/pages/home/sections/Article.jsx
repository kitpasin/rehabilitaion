import { Link } from "react-router-dom";
import { ArticleData } from "../../../data/home/ArticleData";

export default function Article() {
  return (
    <div className="w-full px-4 py-12">
      <div className="w-full max-w-[1636px] flex justify-start items-start gap-4 m-auto">
        {/* div เปล่าเพื่อรองรับ fixed sidebar ตั้งแต่หน้าจอ 1280 */}
        <div className="w-full max-w-[250px] max-xl:hidden" />
        <div className="w-full max-w-[1370px] max-xl:max-w-[768px] flex flex-col gap-12 max-xs:gap-4 m-auto xl:ml-auto">
          <div data-aos="fade-up"
              data-aos-duration="1000" className="flex max-xs:flex-col justify-between items-center max-xs:items-start gap-4">
            <p className="text-4xl font-[500]">{ArticleData.h1}</p>
            <Link to="#" className="text-[#489295] underline">
              ดูบทความทั้งหมด
            </Link>
          </div>
          <div data-aos="fade-right"
              data-aos-duration="1000" className="grid grid-cols-2 max-xl:grid-cols-1 gap-4">
            <div className="xl:max-w-[650px] flex flex-col gap-4">
            <figure className="w-full xl:hidden">
              <img src={ArticleData.image} alt={ArticleData.title} />
            </figure>
              <p className="indent-12">{ArticleData.description1}</p>
              <p className="indent-12">{ArticleData.description2}</p>
              <div className="flex max-xs:flex-col items-ceter gap-4 xs:mt-8">
                <figure className="bg-[#294A4A] w-[200px] h-[40px] flex items-center gap-8 px-4 rounded-md">
                  <img src="/icons/user-group.png" alt="" />
                  <div className="flex flex-col text-[#fff]">
                    <p className="text-[12px] leading-3">การเยียมชมเว็บไซต์</p>
                    <p className="text-[20px] font-[500] leading-5">9,058+</p>
                  </div>
                </figure>
                <figure className="bg-[#294A4A] w-[200px] h-[40px] flex items-center gap-8 px-4 rounded-md">
                  <img src="/icons/book.png" alt="" />
                  <div className="flex flex-col text-[#fff]">
                    <p className="text-[12px] leading-3">บทความ/งานวิจัย</p>
                    <p className="text-[20px] font-[500] leading-5">558</p>
                  </div>
                </figure>
              </div>
            </div>
            <figure className="w-full max-xl:hidden max-w-[650px] ml-auto">
              <img src={ArticleData.image} alt={ArticleData.title} />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
