import { Pane } from "evergreen-ui";
import Navbar from "./components/Navbar";
import Router from "./Router";
function App() {
  return (
    <Pane width="100vw" height="100vh" overflow="hidden">
      <Pane maxWidth="1920px" display="flex" flexDirection="column">
        <Navbar />
        <Pane
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          marginX="30px"
          marginTop="10px"
        >
          <Router />
        </Pane>
      </Pane>
    </Pane>
  );
}

export default App;
