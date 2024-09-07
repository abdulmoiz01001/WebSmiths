import React from "react";

type BlogCardProps = {
  img: string;
  headlines: string;
};

const BlogCard = ({ img, headlines }: BlogCardProps) => {
  return (
    <div className=" w-full lg:w-1/4 p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
      <img
  className="h-64 md:h-96 lg:h-40 w-full rounded-lg"
  src={img}
  alt="img"
  onError={(e) => {
    e.currentTarget.src = "https://th.bing.com/th/id/OIP.hix62Jg09I0_VQW2jmpClwHaEK?w=333&h=187&c=7&r=0&o=5&pid=1.7"; // Path to your default image
    e.currentTarget.alt = "Default image"; // Optional: Set alt text for default image
  }}
/>

      <h2 className=" text-lg text-center font-semibold">{headlines}</h2>
      <p className=" text-center text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
        repellendus suscipit. Rerum consequatur magni expedita.
      </p>
    </div>
  );
};

export default BlogCard;
