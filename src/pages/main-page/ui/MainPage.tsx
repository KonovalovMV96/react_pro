import { TaskPage } from "pages/tasks";
import { useState } from "react";
import { Tabs } from "shared/ui/tabs";
import styles from "./MainPage.module.css";
import { FormsPage } from "pages/forms";

const TABS_LESSONS = [
  { id: "lessons1-3", label: "Lessons 1-3" },
  { id: "lessons4", label: "Lessons 4" },
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
