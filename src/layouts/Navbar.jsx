import { Link, useLocation } from "react-router-dom";
import { NavbarData } from "../data/navbar/NavbarData";
import { useEffect, useState, useRef } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

export default function Navbar({ windowWidth }) {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isBurgurOpen, setIsBurgurOpen] = useState(false);
  const submenuRef = useRef(null);
  const location = useLocation();

  // ตรวจจับเมาส์ถ้า user คลิกพื้นที่อื่นนอกจากเมนูย่อย ปิดเมนูย่อย
  useEffect(() => {
    function handleClickOutside(event) {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        // ปิดเมนูย่อย
        setActiveSubmenu(null);
      }
    }
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // เปิด/ปิดเมนูย่อยโดยการเช็คไอดีของ activeSubmenu กับ menu
  function handleOpenSubmenu(menu) {
    if (activeSubmenu === menu.id) {
      // ปิดเมนูย่อย
      setActiveSubmenu(null);
    } else {
      // เปิดเมนูย่อย
      setActiveSubmenu(menu.id);
    }
  }

  return (
    <header className="bg-[#fff] sticky top-0 w-full h-[80px] px-4 shadow-md z-50">
      <div className="h-full max-w-[1636px] m-auto flex justify-between items-center">
        <Link to="/">
          <img src="/images/main-logo.png" alt="Rehabilitation" />
        </Link>
        <nav className="h-full text-[16px] xl:text-[18px] 2xl:text-[20px] font-[500]">
          {/* ถ้าขนาดจอน้อยกว่า 1280 เปลี่ยนเป็น menu ไปฟิกด้านขวาแบบ column */}
          <ul
            style={{
              backgroundImage:
                windowWidth < 1280 &&
                `linear-gradient(0deg, transparent 50%, #A8A8A8), linear-gradient(180deg, transparent 50%, #A8A8A8)`,
            }}
            className={`${
              windowWidth < 1280
                ? `${
                    !isBurgurOpen &&
                    "opacity-0 translate-x-[100px] pointer-events-none"
                  }`
                : `${
                    isBurgurOpen &&
                    "opacity-100 translate-x-0 pointer-events-auto"
                  }`
            } bg-[#fff] h-full max-xl:fixed top-0 max-xl:top-20 right-0 flex flex-col xl:flex-row justify-start xl:justify-end items-start xl:items-center gap-0 xl:gap-4 2xl:gap-12 max-xl:border-l-[1px] z-50 max-xl:shadow-md max-xl:overflow-auto max-xl:transition-all ease-in-out duration-300`}
          >
            {NavbarData.map((menu, index, array) => (
              // เช็ค url ทำ active เมนู
              <li
                onClick={(event) => event.stopPropagation()}
                key={menu.id}
                className={`max-xl:w-full max-xl:h-fit ${
                  location.pathname === menu.url &&
                  "bg-gradient-to-b from-[#2F5C6F] to-[#489295] text-[#fff]"
                } ${
                  location.pathname.includes("/department") &&
                  menu.id === 2 &&
                  "bg-gradient-to-b from-[#2F5C6F] to-[#489295] text-[#fff]"
                } ${
                  location.pathname.includes("/education") &&
                  menu.id === 3 &&
                  "bg-gradient-to-b from-[#2F5C6F] to-[#489295] text-[#fff]"
                } ${
                  location.pathname.includes("/service") &&
                  menu.id === 4 &&
                  "bg-gradient-to-b from-[#2F5C6F] to-[#489295] text-[#fff]"
                } ${
                  location.pathname.includes("/research") &&
                  menu.id === 5 &&
                  "bg-gradient-to-b from-[#2F5C6F] to-[#489295] text-[#fff]"
                }  ${windowWidth < 1280 && index === 0 && "border-y-[1px]"} 
                ${
                  windowWidth < 1280 &&
                  index === array.length - 1 &&
                  "border-b-[1px]"
                } 
                ${
                  windowWidth < 1280 &&
                  index > 0 &&
                  index !== array.length - 1 &&
                  "border-t-0 border-b-[1px]"
                } hover:bg-gradient-to-b from-[#2F5C6F] to-[#489295] hover:text-[#fff] h-full relative flex items-center px-1`}
              >
                {/* ปิดเบอร์เกอร์และเมนู หลังจากคลิกเมนูที่ไม่มีเมนูย่อย */}
                <Link
                  onClick={() =>
                    menu.submenu.length > 0
                      ? handleOpenSubmenu(menu)
                      : setIsBurgurOpen(false)
                  }
                  to={menu.url}
                  className="w-full h-full flex items-center max-xl:p-4"
                >
                  {menu.title}
                  {menu.submenu.length > 0 && (
                    <KeyboardArrowDownRoundedIcon
                      sx={{
                        transform:
                          activeSubmenu === menu.id && "rotateX(180deg)",
                        fontSize: "20px",
                        transition: "rotate ease-in-out 0.3s",
                      }}
                    />
                  )}
                </Link>
                {/* ถ้า activeSubmenu === menu.id เปิดเมนูย่อย ถ้าไม่ ปิดเมนูย่อย */}
                <ul
                  style={{
                    backgroundImage: windowWidth < 1280 && `linear-gradient(0deg, transparent 50%, #A8A8A8)`,
                  }}
                  ref={submenuRef}
                  className={`w-[200px] ${
                    activeSubmenu === menu.id
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 translate-y-[-10px] pointer-events-none"
                  } bg-[#fff] absolute top-14 xl:top-20 left-0 flex flex-col rounded-md shadow-md z-50 transition-all ease-in-out duration-300`}
                >
                  {menu.submenu?.map((submenu, index, array) => (
                    <li
                      key={submenu.id}
                      className={`w-full hover:bg-[#4A9095] hover:text-[#fff]
                      ${index === 0 && "border-y-[1px]"} 
                      ${
                        index === array.length - 1 &&
                        "border-b-[1px] rounded-b-md"
                      } 
                      ${
                        index > 0 &&
                        index !== array.length - 1 &&
                        "border-t-0 border-b-[1px]"
                      }  border-x-[1px] text-[#000]`}
                    >
                      {/* ปิดเบอร์เกอร์และเมนูย่อย หลังจากคลิกเมนูย่อย */}
                      <Link
                        onClick={() => setIsBurgurOpen(false)}
                        to={submenu.url}
                        className="w-full block p-4"
                      >
                        {submenu.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <div className="max-xl:w-full flex items-center max-xl:gap-3 max-xl:p-4 max-xl:border-b-[1px]">
              <button className="max-xl:bg-[#4A9095] max-xl:w-1/2 max-xl:h-[40px] max-xl:hover:text-[#fff] max-xl:hover:border-[1px]">
                TH
              </button>
              {"/"}
              <button className="max-xl:bg-[#4A9095] max-xl:w-1/2 max-xl:h-[40px] max-xl:hover:text-[#fff] max-xl:hover:border-[1px]">
                EN
              </button>
            </div>
          </ul>
          {/* Burgur แสดงผลขนาดจอน้อยกว่า 1280 */}
          {windowWidth < 1280 && (
            <div
              onClick={() => setIsBurgurOpen(!isBurgurOpen)}
              className="flex flex-col gap-1 justify-center h-full"
            >
              <div
                className={`${
                  isBurgurOpen && "-rotate-45 translate-y-[8px]"
                } bg-[#000] w-[30px] h-[4px] rounded-md transition-all ease-in-out duration-300`}
              />
              <div
                className={`${
                  isBurgurOpen && "opacity-0"
                } bg-[#000] w-[30px] h-[4px] rounded-md transition-all ease-in-out duration-300`}
              />
              <div
                className={`${
                  isBurgurOpen && "rotate-45 -translate-y-[8px]"
                } bg-[#000] w-[30px] h-[4px] rounded-md transition-all ease-in-out duration-300`}
              />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
