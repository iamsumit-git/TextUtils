import { useState } from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled!!!", "success");
      document.title = "TextUtils-Dark Mode ";
      // setInterval(() =>{

      // }, 2000)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light Mode has been enabled!!!", "success");
      document.title = "TextUtils-light Mode ";

      // setInterval(() =>{
      // }, 2000)
    }
  };

  // setAlert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}> </Alert>
        <div className="container my-3">
        <Routes>
          <Route path="/about"  element={<About />}>        
          </Route>
          <Route path="/" element ={<TextForm
                showAlert={showAlert}
                heading="Text to analyze below"
                mode={mode}
              />}>
          </Route>
        </Routes>
       </div>

        
      </Router>
    </>
  );
}

export default App;
