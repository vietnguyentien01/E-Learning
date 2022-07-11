import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./Screens/Home";
import { Fragment } from "react";
import CourseDetailScreen from "./Screens/Detail";

function App() {
  return (
    <div className="App">
      <>
        <HomeScreen />
        {/* <CourseDetailScreen /> */}
      </>
    </div>
  );
}

export default App;
