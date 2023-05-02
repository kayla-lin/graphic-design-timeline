import Image from "next/image";
import React, { FC } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

interface Props {
  title: string;
  subTitle?: string;
  date: string;
  desc: string;
  img?: string;
  altImg?: string;
}

const TimelineElement: FC<Props> = ({
  title,
  subTitle,
  desc,
  img,
  date,
  altImg,
}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={date}
      iconStyle={{
        background: "rgb(134 239 172)",
        color: "#fff",
      }}
      dateClassName="text-green-500"
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      {img && altImg && (
        <div className="h-64 w-96 relative">
          <Image
            src={`/img/${img}`}
            alt={altImg}
            layout="fill" // required
            objectFit="cover" // change to suit your needs
          />
        </div>
      )}
      {subTitle && (
        <h4 className="vertical-timeline-element-subtitle">{subTitle}</h4>
      )}
      <p>{desc}</p>
    </VerticalTimelineElement>
  );
};

export default TimelineElement;
