import "./App.css";
import Header from "./components/Header";
import Page from "./components/Page";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="portfolio">
        <Header id="header-comp" />
        <Page id="page-comp"/>
        <Footer id="footer-comp" />
      </div>
    </>
  );
}
