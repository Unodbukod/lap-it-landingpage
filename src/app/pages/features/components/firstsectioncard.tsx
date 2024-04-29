import React from "react";
import Image from "next/image";

interface cardprops {
  // uppercase
  title: string;
  iconSrc?: string;
}
const firstCard = ({ title, iconSrc }: cardprops) => {
  return (
    <div className="relative flex justify-center items-center">
      <div className=" mx-[1px] sm:mx-[10px] md:mx-[15px] xl:mx-[40px] w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] xl:w-[190px] xl:h-[250px] xl:mt-20 flex-col items-center justify-center">
        <div className=" mb-4 ">
          {iconSrc && (
          <div className="mb-4">
            <Image
              width={50}
              height={50}
              src={iconSrc}
              alt={title}
              className=" sm:w-[35px] sm:h-[35px] md:w-[45px] md:h-[45px] xl:w-[80px] xl:h-[80px] mx-auto "
            />
          </div>
           )}
        </div>
        <div>
          <h1 className="text-center text-black font-semibold text-[7px] sm:text-[10px] md:text-[10px] xl:text-[18px] pb-2">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default firstCard;
