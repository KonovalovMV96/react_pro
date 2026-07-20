import { useState } from "react";
import { Tabs } from "shared/ui/tabs";
import styles from "./FormsPage.module.css";
import { RhfForm } from "features/formRHF";
import { WizardForm } from "features/wizard/ui";

const TABS_FORMS = [
  { id: "RhfForm", label: "RhfForm" },
  { id: "WizardForm", label: "WizardForm" },
];

export const FormsPage = () => {
  const [activeTabForm, setActiveTabForm] = useState<null | string>(null);

  const renderTabContent = () => {
    switch (activeTabForm) {
      case null:
        return <div>Выберите задание</div>;
      case "RhfForm":
        return <RhfForm />;
      case "WizardForm":
        return <WizardForm />;
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
