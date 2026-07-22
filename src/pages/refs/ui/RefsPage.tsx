import { useState } from "react";
import { Tabs } from "shared/ui/tabs";
import styles from "./RefsPage.module.css";
import {
  ClickTimer,
  PreviousInput,
  FocusTracker,
  DebouncedLogger,
  WebSocketLogger,
} from "features/refExamples";

const TABS_FORMS = [
  { id: "ClickTimer", label: "ClickTimer" },
  { id: "PreviousInput", label: "PreviousInput" },
  { id: "FocusTracker", label: "FocusTracker" },
  { id: "DebouncedLogger", label: "DebouncedLogger" },
  { id: "WebSocketLogger", label: "WebSocketLogger" },
];

export const RefsPage = () => {
  const [activeTabForm, setActiveTabForm] = useState<null | string>(null);

  const renderTabContent = () => {
    switch (activeTabForm) {
      case null:
        return <div>Выберите задание</div>;
      case "ClickTimer":
        return <ClickTimer />;
      case "PreviousInput":
        return <PreviousInput />;
      case "FocusTracker":
        return <FocusTracker />;
      case "DebouncedLogger":
        return <DebouncedLogger />;
      case "WebSocketLogger":
        return <WebSocketLogger />;
      default:
        return null;
    }
  };
  return (
    <div className={styles.pageWrapper}>
      <Tabs
        tabs={TABS_FORMS}
        activeTab={activeTabForm}
        onTabChange={setActiveTabForm}
      />
      {renderTabContent()}
    </div>
  );
};
