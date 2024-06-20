import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact"
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value/>
      <Contact />
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from "./components/Header/Header";
// import Hero from "./components/Hero/Hero";
// import Companies from "./components/Companies/Companies";
// import Residencies from "./components/Residencies/Residencies";
// import Value from "./components/Value/Value";
// import Contact from "./components/Contact/Contact";
// import GetStarted from "./components/GetStarted/GetStarted";
// import Footer from "./components/Footer/Footer";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <div>
//           <div className="white-gradient" />
//           <Header />
//           <Hero />
//         </div>

//         <Routes>
//           <Route path="/companies" element={<Companies />} />
//           <Route path="/residencies" element={<Residencies />} />
//           <Route path="/value" element={<Value />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/get-started" element={<GetStarted />} />
//           {/* Add more routes as needed */}
//         </Routes>

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;




// import "./App.css";
// import Header from "./components/Header/Header";
// import Hero from "./components/Hero/Hero";
// import Companies from "./components/Companies/Companies";
// import Residencies from "./components/Residencies/Residencies";
// import Value from "./components/Value/Value";
// import Contact from "./components/Contact/Contact"
// import GetStarted from "./components/GetStarted/GetStarted";
// import Footer from "./components/Footer/Footer";
// import { Route, Routes } from "react-router-dom";
// import Outlet from "./components/LayoutRoutes/Outlet";
// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         {/* <Route index element={<Outlet/>} > */}
//           <Route  path="" />
//         {/* </Route> */}
//       </Routes>
//     </div>
//   );
// }

// export default App;