import Tabs, { ITab } from "./generic-components/Tabs";
import BookFavourite from "./pages/BookFavourite";
import BookSearch from "./pages/BookSearch";

function App() {
  const tabs: ITab[] = [
    { label: "Research", content: <BookSearch /> },
    { label: "Favourites", content: <BookFavourite /> },
  ];
  return (
    <div className="main-container">
      <div className="header">
        <h1>Book Research 📖</h1>
      </div>
      <div className="content">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

export default App;
