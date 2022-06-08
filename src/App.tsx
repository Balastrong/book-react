import Tabs, { ITab } from "./generic-components/Tabs";
import BookFavourite from "./pages/BookFavourite";
import BookSearch from "./pages/BookSearch";

function App() {
  const tabs: ITab[] = [
    { label: "Left", content: <BookSearch /> },
    { label: "Right", content: <BookFavourite /> },
  ];
  return (
    <div className="main-container">
      <Tabs tabs={tabs} />
    </div>
  );
}

export default App;
