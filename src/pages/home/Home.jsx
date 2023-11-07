import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./sections/Banner";
import About from "./sections/About";
import News from "./sections/News";
import Event from "./sections/Event";
import Article from "./sections/Article";
export default function Home({ windowWidth }) {
  const [isScrollToSidebar, setIsScrollToSidebar] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const aboutSectionTop = aboutRef.current.getBoundingClientRect().top;
        const scrollPosition = window.scrollY;
        if (aboutSectionTop <= scrollPosition) {
          setIsScrollToSidebar(true);
        } else {
          setIsScrollToSidebar(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      {/* ทำ seo หน้าหลักใน helmet นี้ */}
      <Helmet>
        <title>Rehabilitation Khon Kaen University</title>
        <meta
          name="description"
          content="ภาควิชาเวชศาสตร์ฟื้นฟู คณะแพทยศาสตร์ มหาวิทยาลัยขอนแก่น"
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <section id="banner">
        <Banner windowWidth={windowWidth} />
      </section>
      <section id="about" ref={aboutRef}>
        <About
          windowWidth={windowWidth}
          isScrollToSidebar={isScrollToSidebar}
        />
      </section>
      <section id="news">
        <News windowWidth={windowWidth} />
      </section>
      <section id="event">
        <Event />
      </section>
      <section id="article">
        <Article />
      </section>
    </main>
  );
}
