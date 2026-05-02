import React from "react";

type SubTitleProps = {
  title: string;
  description?: string;
  className?: string;
  titleClass?: string;
  descriptionClass?: string;
};

function SubTitle({
  title,
  description,
  className,
  titleClass,
  descriptionClass,
}: SubTitleProps) {
  return (
    <div className={`${className} flex flex-col`}>
      <h2 className={`text-[48px] font-bold ${titleClass}`}>{title}</h2>
      <p className={`text-[20px] text-black/46 ${descriptionClass}`}>
        {description}
      </p>
    </div>
  );
}

export default SubTitle;
