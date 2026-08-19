import { useState } from "react";
import { Tabs } from "shared/ui/tabs";
import styles from "./React19Page.module.css";
import {
  FormWithAsyncSave,
  TodoListOptimistic,
  ActionStateWithReducer,
} from "features/react19Examples";

const TABS_FORMS = [
  { id: "FormWithAsyncSave", label: "FormWithAsyncSave" },
  { id: "TodoListOptimistic", label: "TodoListOptimistic" },
  { id: "ActionStateWithReducer", label: "ActionStateWithReducer" },
];

export const React19Page = () => {
  const [activeTabForm, setActiveTabForm] = useState<null | string>(null);

  const renderTabContent = () => {
    switch (activeTabForm) {
      case null:
        return <div>Выберите задание</div>;
      case "FormWithAsyncSave":
        return <FormWithAsyncSave />;
      case "TodoListOptimistic":
        return <TodoListOptimistic />;
      case "ActionStateWithReducer":
        return <ActionStateWithReducer />;
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
