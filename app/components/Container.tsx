"use client";
import ContainerItem from "./ContainerItem";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaMoneyCheckDollar } from "react-icons/fa6";

import { breakpoints } from "../constants/breakpointsSwiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

export default function Container(valor?: any) {
  return (
    <Swiper
      className=" w-[300px] h-[240px] min-[640px]:w-[640px] min-[1024px]:w-[1024px] mt-12 flex justify-evenly "
      modules={[Navigation, Pagination]}
      grabCursor={true}
      pagination={{ clickable: true }}
      breakpoints={breakpoints}
    >
      <SwiperSlide className="p-6">
        {" "}
        <ContainerItem
          nome="Entradas"
          symbol={
            <FaRegArrowAltCircleUp
              size={25}
              className="text-green-600 animate-pulse delay-100"
            />
          }
          valor={valor.valor.entrada}
        />
      </SwiperSlide>
      <SwiperSlide className="p-6">
        {" "}
        <ContainerItem
          nome="Saídas"
          symbol={
            <FaRegArrowAltCircleDown
              size={25}
              className="text-red-600 animate-pulse delay-100"
            />
          }
          valor={valor.valor.saida}
        />
      </SwiperSlide>
      <SwiperSlide className=" p-6">
        {" "}
        <ContainerItem
          nome="Total"
          symbol={
            <FaMoneyCheckDollar
              size={25}
              className=" animate-pulse delay-100"
            />
          }
          valor={valor.valor.total}
        />
      </SwiperSlide>
    </Swiper>
  );
}
