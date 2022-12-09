import Home from "./components/Home";
import Page1 from "./components/Page1";
import MessProvider from "./provider/MessageProvider";

function App() {
  return (
    <MessProvider>
      <Home/>
      <Page1/>
    </MessProvider>
  );
}

export default App;
