import React, { useState } from "react";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route, Routes, useParams
} from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";

function App() {
  const [option, setOption] = useState("general")
  const match = useParams()
  console.log(match.type)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path={`/:${option}`} element={<HomePage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
