import React from "react";
import CardItem from "./CardItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

const OrderTab = ({ items }) => {
  const itemsPerPage = 6;

  // Split items into chunks of 6
  const pages = [];
  for (let i = 0; i < items.length; i += itemsPerPage) {
    pages.push(items.slice(i, i + itemsPerPage));
  }

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        // className="mySwiper bg-yellow-400"
      >
        {pages.map((page, pageIndex) => (
          <SwiperSlide key={pageIndex}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 px-3">
              {page.map((item) => (
                <CardItem key={item._id} item={item} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OrderTab;
