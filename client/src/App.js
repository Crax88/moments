import { Pane } from "evergreen-ui";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Pane width="100vw" height="100vh" backgroundColor="#ccc" overflow="hidden">
      <Pane maxWidth="1920px" display="flex" flexDirection="column">
        <Navbar />
        <Pane
          display="flex"
          alignItems="center"
          marginX="30px"
          marginTop="10px"
        ></Pane>
      </Pane>
    </Pane>
  );
}

export default App;
