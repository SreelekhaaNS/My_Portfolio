import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import resumeData from "./resumeData";
import Education from "./components/Education";
import Experience from "./components/Experience";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Education resumeData={resumeData} />
        <Experience resumeData={resumeData} />
        <Skills />
        <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}
export default App;
