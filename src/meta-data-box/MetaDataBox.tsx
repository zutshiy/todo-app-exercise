import React, { useState } from "react";
import "./MetaDataBox.scss";
import { ListItem } from "../models/ListItem";

const MetaDataBox = ({
  listItems,
  onClearClick,
  updateView,
}: {
  listItems: ListItem[];
  onClearClick: () => void;
  updateView: (val: "All" | "Active" | "Completed") => void;
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const onButtonClick = (val: "All" | "Active" | "Completed") => {
    setSelectedFilter(val);
    updateView(val);
  };
  const leftItems = listItems.filter((item) => !item.completed).length;
  const selectedClassName = (val: string) =>
    selectedFilter === val ? "selected-button" : "";

  let isAnyCompleted = listItems.find((item) => item.completed);
  return (
    <div>
      <div className="meta-bg-container">
        <div className="meta-bg" />
        <div className="meta-bg" />
      </div>
      <div className="input-container meta-data-box">
        <span>{leftItems} items left</span>
        <div className="meta-buttons">
          <button
            className={selectedClassName("All")}
            onClick={() => onButtonClick("All")}
          >
            All
          </button>
          <button
            className={selectedClassName("Active")}
            onClick={() => onButtonClick("Active")}
          >
            Active
          </button>
          <button
            className={selectedClassName("Completed")}
            onClick={() => onButtonClick("Completed")}
          >
            Completed
          </button>
        </div>
        <button
          className={"clear-button" + (!isAnyCompleted ? " hidden" : "")}
          onClick={onClearClick}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default MetaDataBox;
