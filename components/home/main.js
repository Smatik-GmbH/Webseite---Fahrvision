import React from "react";

export default function Main() {
  return (
    <>
      <div className="fixed w-full bottom-0">
        <div>
          <img src="/images/road.png" className="relative" />
          <img
            src="/images/car.png"
            className="absolute w-[180px] bottom-12 right-9 effect_car"
          />
        </div>
      </div>
      <div className="fixed w-full left-0">
        <img
          src="/images/cloud1.png"
          className="absolute w-[60px] top-48 right-[700px] effect_cloud1"
        />
        <img
          src="/images/cloud2.png"
          className="absolute w-[80px] top-32 right-[550px] effect_cloud2"
        />
        <img
          src="/images/cloud3.png"
          className="absolute w-[80px] top-36 right-[300px] effect_cloud3"
        />
        <img
          src="/images/cloud4.png"
          className="absolute w-[60px] top-52 right-[200px] effect_cloud4"
        />
        <img
          src="/images/cloud5.png"
          className="absolute w-[60px] top-48 right-[100px] effect_cloud5"
        />
      </div>
      <div className="bg-[url('/images/background.png')] bg-cover bg-center h-screen">
        <div className="flex flex-row h-full">
          <div className="w-1/3 h-full flex items-center px-16 effect1">
            <div className="flex flex-col">
              <div className="text-5xl text-[#515151] font-extrabold">
                Zeit für den <br />
                Führerschein.
              </div>
              <div className="text-[#333333] ">
                Lorem ipsum dolor sit amet, consectetur adipis Elit morbi dictum
                justo nec tellus vulputate nel.
              </div>
              <div className="pt-24">
                <button
                  className="rounded-3xl  text-white font-bold bg-gradient-to-r from-[#AAFFA3] to-[#269E38] py-2 px-8"
                  onClick={() => {}}
                >
                  SUCHE
                </button>
              </div>
            </div>
          </div>
          <div className="w-2/3 flex justify-center items-center">
            <div className="w-full flex justify-around">
              <img src="/images/driverCard.png" className="w-1/2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
