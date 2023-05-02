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
      {img && altImg && <Image src={`/img/${img}`} alt={altImg} width={100} />}
      <h3 className="vertical-timeline-element-title">{title}</h3>
      {subTitle && (
        <h4 className="vertical-timeline-element-subtitle">{subTitle}</h4>
      )}
      <p>{desc}</p>
    </VerticalTimelineElement>
  );
};

export default TimelineElement;
