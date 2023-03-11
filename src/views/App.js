import "./App.scss";
import ComponentParent from "./Example/ComponentParent";

const App = () => {
  return (
    <div>
      <header className="App-header">
        <ComponentParent />
      </header>
    </div>
  );
};

export default App;
