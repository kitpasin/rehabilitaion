import {FooterData} from "../data/footer/FooterData"
import MapsHomeWorkRoundedIcon from "@mui/icons-material/MapsHomeWorkRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";

export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-b from-[#2F5C6F] to-[#489295] px-4 py-12 text-[#fff]">
        <div className="max-w-[1636px] max-xl:max-w-[768px] m-auto flex max-xl:flex-col justify-between items-center max-xl:items-start gap-4">
          <figure className="h-full">
            <img src={FooterData.image} alt="" />
          </figure>
          <div className="max-w-[650px]">
            <p className="text-[20px] font-[500]">ที่อยู่</p>
            <div className="flex items-start gap-2 mt-2">
              <MapsHomeWorkRoundedIcon sx={{ fontSize: "30px" }} />
              <p className="leading-5">
               {FooterData.address}
              </p>
            </div>
          </div>
          <div>
            <p className="text-[20px] font-[500]">ติดต่อสอบถาม</p>
            <div className="flex max-xl:flex-col justify-between xl:items-center gap-4 mt-2">
              <div className="xl:w-1/2 flex items-center gap-2 leading-5">
                <FacebookRoundedIcon sx={{ fontSize: "30px" }} />
                <p>{FooterData.fb}</p>
              </div>
              <div className="xl:w-1/2 flex items-center gap-2 leading-5">
                <LocalPhoneRoundedIcon sx={{ fontSize: "30px" }} />
                <p>{FooterData.tel}</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-[#A3CFC0] px-4 py-2 text-[#2F5C6F] text-center leading-5">
        copyright &copy; 2010-2023 Rehabmd.kku.ac.th. All rights reserved.
      </div>
    </>
  );
}
