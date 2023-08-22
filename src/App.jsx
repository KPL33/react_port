import { useLocation } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Page from './components/Page';
import Footer from './components/Footer';

function App() {
  const currentPage = useLocation().pathname;
  return (
    <>
      <div className="header-app">
        <Header currentPage={currentPage}/>
        <Page currentPage={currentPage}/>
        <Footer />
      </div>
    </>
  );
}

export default App
