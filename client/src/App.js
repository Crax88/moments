import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pane } from "evergreen-ui";
import Navbar from "./components/Navbar";
import Router from "./Router";
import { authSelector, authUser } from "./slices/auth.slice";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(authSelector);
  useEffect(() => {
    if (auth.isAuth === null) {
      dispatch(authUser);
    }
  }, []);
  return (
    <Pane width="100vw" height="100vh" overflow="hidden">
      <Pane maxWidth="1920px" display="flex" flexDirection="column">
        <Navbar auth={auth} />
        <Pane
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          marginX="30px"
          marginTop="10px"
        >
          <Router auth={auth} />
        </Pane>
      </Pane>
    </Pane>
  );
}

export default App;
