import { useLocation } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Page from './components/Page';
import Footer from './components/Footer';

function App() {
  const currentPage = useLocation().pathname;
  return (
    <>
    {/* Give this div a "className", to style pg bgrnd, etc. "class" is reserved in JS, so need to use "className*/}
      <div className="Portfolio">
        <Header currentPage={currentPage}/>
        <Page currentPage={currentPage}/>
        <Footer />
      </div>
    </>
  );
}

export default App
