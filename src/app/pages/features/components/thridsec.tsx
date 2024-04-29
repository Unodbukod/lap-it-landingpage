import React from "react";
import Image from "next/legacy/image";
import Card from "./thirdsectioncard";

const Thirdsection = () => {
  const data = [
    {
      title: "Dashboard",
      description: "Lorem ipsum dolor sit amet consectetur. Egestas nulla id risus tempus volutpat etiam sed. Dolor eget pretium amet nec enim ultrices facilisis turpis turpis. Diam augue amet a duis nunc. Consequat nisl amet nibh sit commodo non  ",
      iconSrc: "/Features/boxes.svg",
    },
    {
      title: "Reporting",
      description: "Lorem ipsum dolor sit amet consectetur. Egestas nulla id risus tempus volutpat etiam sed. Dolor eget pretium amet nec enim ultrices facilisis turpis turpis. Diam augue amet a duis nunc. Consequat nisl amet nibh sit commodo non  ",
      iconSrc: "/Features/boxes.svg",
    },
    {
      title: "Real-Time",
      description: "Lorem ipsum dolor sit amet consectetur. Egestas nulla id risus tempus volutpat etiam sed. Dolor eget pretium amet nec enim ultrices facilisis turpis turpis. Diam augue amet a duis nunc. Consequat nisl amet nibh sit commodo non  ",
      iconSrc: "/Features/boxes.svg",
    },
    {
      title: "Caching",
      description: "Lorem ipsum dolor sit amet consectetur. Egestas nulla id risus tempus volutpat etiam sed. Dolor eget pretium amet nec enim ultrices facilisis turpis turpis. Diam augue amet a duis nunc. Consequat nisl amet nibh sit commodo non  ",
      iconSrc: "/Features/boxes.svg",
    },
    {
      title: "Rentals",
      description: "Lorem ipsum dolor sit amet consectetur. Egestas nulla id risus tempus volutpat etiam sed. Dolor eget pretium amet nec enim ultrices facilisis turpis turpis. Diam augue amet a duis nunc. Consequat nisl amet nibh sit commodo non  ",
      iconSrc: "/Features/boxes.svg",
    },
    {
      title: "Clinic / Patient",
      description: "Lorem ipsum dolor sit amet consectetur. Egestas nulla id risus tempus volutpat etiam sed. Dolor eget pretium amet nec enim ultrices facilisis turpis turpis. Diam augue amet a duis nunc. Consequat nisl amet nibh sit commodo non  ",
      iconSrc: "/Features/boxes.svg",
    },
  ];

  return (
    <section className="items-center justify-center py-10 pt-11 select-none bg-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div>
          <h2 className="text-black text-[16px] sm:text-[25px] md:text-[30px] xl:text-[50px] font-extrabold text-center  ">
            SIT AMET CONSECTETUR
          </h2>
          <div className=" text-[10px] sm:text-[11px] md:text-[13px] xl:text-[23px] ">
            <h1 className=" text-gray-500 text-center ">
              Lorem ipsum dolor sit amet consectetur. Id posuere vulputate diam
              facilisis dui consectetur Sed nunc sed nunc ut in diam ultrices blandit.
            </h1>
          </div>
        </div>
        <div className=" items-center justify-center mt-14 hidden lg:block ">
          <Image
            src="/Features/section3.svg"
            alt="Features"
            width={1150}
            height={500}
            style={{
              maxWidth: "100%",
              height: "auto",
            }} />
        </div>

        
        <div className="flex flex-col items-center justify-center mt-6 lg:flex lg:flex-row  ">
          <div className="space-y-5 overflow-auto basis-[217px] relative lg:flex lg:flex-row lg:space-y-0 lg:space-x-5 lg:basis-[1000px] ">
          {data.map((cards, index) => (
              <div className="space-x-4" key={index}>
                <Card
                  title={cards.title}
                  description={cards.description}
                  iconSrc={cards.iconSrc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thirdsection;
