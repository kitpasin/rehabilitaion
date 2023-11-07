import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SidebarData, EtcSidebarData } from "../data/sidebar/SidebarData";
import BookmarkSharpIcon from "@mui/icons-material/BookmarkSharp";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";

export default function SideNavbar({ windowWidth, isScrollToSidebar }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // เช็คขนาดหน้าจอ เปิด/ปิด sidebar
  useEffect(() => {
    if (windowWidth < 1280) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [windowWidth]);

  return (
    <>
      <div
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`bg-gradient-to-r from-[#2F5C6F] to-[#489295] fixed ${
          isSidebarOpen ? "top-0" : "top-20"
        } left-0 p-1 rounded-br-md shadow-md transition-all ease-in-out duration-300`}
      >
        <KeyboardDoubleArrowDownRoundedIcon
          sx={{ color: "#fff", fontSize: "30px" }}
        />
      </div>
      {/* เปลี่ยน position sidebar เป็น fixed ถ้า scroll ถึง section about */}
      <div
        className={`${
          isSidebarOpen
            ? "opacity-100 pointer-events-auto max-xl:top-[12.5rem]"
            : "opacity-0 pointer-events-none max-xl:top-0"
        } w-[250px] max-xl:fixed max-xl:left-[8.8rem] max-xl:-translate-x-1/2 max-xl:-translate-y-1/2 ${
          isScrollToSidebar
            ? "xl:fixed top-[50%] -translate-y-1/2"
            : "xl:block top-[30%]"
        } flex-none transition-all ease-in-out duration-300`}
      >
        <div className="h-full">
          {/* ซ่อนเมนูถ้าขนาดจอน้อยกว่า 1280 ให้เหลือแค่ link ไปเว็บอื่น */}
          <nav className="bg-gradient-to-b from-[#489295] to-[#2F5C6F] max-xl:hidden p-4 text-[#fff] rounded-md">
            {SidebarData.map((menu, index) => (
              <ul
                key={menu.id}
                className={`overflow-auto ${
                  index !== SidebarData.length - 1 && "pb-4"
                }`}
              >
                <p className="text-[16px] xl:text-[18px] 2xl:text-[20px] font-[500] leading-7">
                  {menu.title}
                </p>
                {menu.submenu.map((submenu) => (
                  <li key={submenu.id} className="pt-1">
                    <Link
                      to={submenu.url}
                      className="flex items-start gap-1 hover:underline"
                    >
                      <BookmarkSharpIcon />
                      {submenu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
          <ul className="relative flex flex-col gap-2 pt-2">
            <div
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="bg-[#2F5C6F] absolute -top-7 right-0 xl:hidden rounded-full shadow-md"
            >
              <CloseRoundedIcon sx={{ color: "#fff", fontSize: "30px" }} />
            </div>
            {EtcSidebarData.map((menu) => (
              <li
                key={menu.id}
                className="bg-[#2F5C6F] p-2 rounded-md text-center leading-5"
              >
                <Link className="text-[#fff] hover:underline" to={menu.url}>
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
