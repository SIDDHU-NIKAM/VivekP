import "./App.css";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, {  useState } from "react";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#06354d";
      showAlert("Dark Mode has been enabled!", "success ");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled!", "success");
    }
  };

  return (
    <>
      <Router>
        <NavBar
          title="TextUtils"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element = {<About mode={mode}/>}>
            </Route>
            <Route exact path="/" element = {<TextForm
                showAlert={showAlert}
                heading="TextUtils - Word Counter | Character Counter"
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
