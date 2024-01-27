// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { reset } from "./slice/SocialLInksSlice";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Approuter from "./Approuter";
function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(reset());
  // }, []);
  return (
    <>
      <ToastContainer />
      <Router>
        <Approuter />
      </Router>
    </>
  );
}

export default App;
