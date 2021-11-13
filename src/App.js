import './App.scss';
import Header from './components/Header';
import Banner from './components/Banner';
import Projetos from './components/Projetos';
import Footer from './components/Footer';



function App() {
  return (
    <>
    <Header/>
    <main>
      <Banner/>
      <Projetos/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
