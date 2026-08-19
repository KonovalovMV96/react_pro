import { TaskPage } from "pages/tasks";
import { useState } from "react";
import { Tabs } from "shared/ui/tabs";
import styles from "./MainPage.module.css";
import { FormsPage } from "pages/forms";
import { RefsPage } from "pages/refs";
import { RoutingPage } from "pages/routing";
import { React19Page } from "pages/react19";

const TABS_LESSONS = [
  { id: "lessons1-3", label: "Lessons 1-3" },
  { id: "lessons4", label: "Lessons 4" },
  { id: "lessons5", label: "Lessons 5" },
  { id: "lessons6", label: "Lessons 6" },
  { id: "lessons9", label: "Lessons 9" },
];

export const MainPage = () => {
  const [activeTabPage, setActiveTabPage] = useState<null | string>(null);

  const renderTabContent = () => {
    switch (activeTabPage) {
      case null:
        return <div>Выберите урок</div>;
      case "lessons1-3":
        return <TaskPage />;
      case "lessons4":
        return <FormsPage />;
      case "lessons5":
        return <RefsPage />;
      case "lessons6":
        return <RoutingPage />;
      case "lessons9":
        return <React19Page />;
      default:
        return null;
    }
  };
  return (
    <div className={styles.pageWrapper}>
      <h1>Пройденные уроки и ДЗ к ним</h1>
      <Tabs
        tabs={TABS_LESSONS}
        activeTab={activeTabPage}
        onTabChange={setActiveTabPage}
      />
      {renderTabContent()}
    </div>
  );
};
