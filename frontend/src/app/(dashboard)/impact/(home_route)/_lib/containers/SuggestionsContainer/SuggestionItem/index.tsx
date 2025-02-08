import React from "react";
import "./styles.scss";
import LinkIcon from "@/components/icons/LinkIcon";

type Props = {};

const SuggestionItem = (props: Props) => {
  return (
    <div className="wrapper">
      <div className="top">
        <div className="top-left">
          <div className="info">
            <div className="tag">Top</div>
            <p className="text">Rev. Share: 70.00%</p>
          </div>
          <div className="heading">
            <span className="text">Bussiness: </span>
            <p className="text">Bosh LLC</p>
          </div>
        </div>
        <div className="top-right">
          <p className="top-right-inner">Load More</p>
          <LinkIcon />
        </div>
      </div>
      <p className="item-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
  );
};

export default SuggestionItem;
