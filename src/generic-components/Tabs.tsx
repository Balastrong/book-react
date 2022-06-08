import React from "react";
import "./Tabs.scss";

export interface ITabsProps {
  tabs: ITab[];
}

export interface ITab {
  label: string;
  content: JSX.Element;
}

const Tabs = (props: ITabsProps) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className="bkr-tabs">
      <div className="tabs-labels">
        {props.tabs.map((tab, index) => (
          <button
            className="tabs-label"
            key={index}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">{props.tabs[activeTab]?.content}</div>
    </div>
  );
};

export default Tabs;
