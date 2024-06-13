import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const CtaBack = (props) => {
  const { children, link } = props;
  return (
    <div className="flex justify-start my-2 w-20">
      <Link to={link} className="flex items-center space-x-1 px-2 group">
        <ChevronLeft
          size={22}
          className=" group-hover:-translate-x-2 dark:text-[#37B59F] duration-150 ease-linear"
        />
        <h3 className="text-black dark:text-white">{children}</h3>
      </Link>
    </div>
  );
};

export default CtaBack;
