import React, { FC } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

interface Props {
  title: string;
  subTitle?: string;
  date: string;
  desc: string;
  img?: string;
}

const TimelineElement: FC<Props> = ({ title, subTitle, desc, img }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2011 - present"
      iconStyle={{
        background: "rgb(134 239 172)",
        color: "#fff",
      }}
      dateClassName="text-green-500"
    >
      <h3 className="vertical-timeline-element-title">Creative Director</h3>
      <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
      <p>
        Creative Direction, User Experience, Visual Design, Project Management,
        Team Leading
      </p>
    </VerticalTimelineElement>
  );
};

export default TimelineElement;
