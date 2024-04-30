import React from "react";
import Image from "next/legacy/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="select-none">
      <section className="mb-10">
        <div className="flex flex-col items-center pt-11">
          <div className="bg-blue-400 w-[1100px] h-[282px] rounded-sm flex items-center text-nowrap drop-shadow-2xl pt-20 ml-7">
            <div className="text-white text-4xl font-extrabold ml-9 mb-24">
              Stay Informed:
              <p className="text-base mt-4 font-normal">
                Get the latest offers and announcements delivered straight to your inbox.
              </p>
              <div className="flex w-[400px] h-[38px] space-x-2 text-black font-normal mt-5">
                <Input type="email" placeholder="Email" />
                <Button className="bg-blue-600 text-white" type="submit">
                  Submit
                </Button>
              </div>
            </div>
            <div className="flex flex-col mr-3 pb-[97px]">
              <Image
                src="/subscribe.svg"
                alt="icon"
                width={530}
                height={500}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
