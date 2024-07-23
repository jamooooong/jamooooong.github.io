import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename="/main">
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
