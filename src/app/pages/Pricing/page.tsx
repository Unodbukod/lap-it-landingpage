import React from "react";
import Features from "./Features";
import Footer from "@/app/components/constants/Footer";
import Navbar from "@/app/components/navbar";
import PriceTable from "./Table";
const Pricing = () => {
  return (
    <>
      <Navbar />
      <div>
        <Features />
        <div className="bg-blue-50 py-3 pt-11 mt-7">
          {" "}
          {/*2nd SECTION*/}
          <div className="flex justify-center  text-[48px] font-bold ">
            <h1>SEE WHICH PLAN IS</h1>
          </div>
          <div className="flex flex-row justify-center gap-3">
            <div className="text-[48px] font-bold bg-red-600 rounded-lg text-white px-5">
              <h1>BEST</h1>
            </div>
            <div className="text-[48px] font-bold">
              <h1>FOR YOU</h1>
            </div>
          </div>
          <div className="text-[16px] text-gray-500 flex justify-center pt-3">
            <h1>
              Elevate Your Learning Journey: HospitalityEdge - Shaping
              Tomorrow&apos;s Hospitality
            </h1>
          </div>
          <div className="text-[16px] text-gray-500 flex justify-center ">
            <h1>Leaders through Innovation and Excellence.</h1>
          </div>
          <div>
            <PriceTable />
          </div>
        </div>{" "}
        {/* END OF DIV FOR 2nd SECTION*/}
        <Footer />
      </div>
    </>
  );
};

export default Pricing;
