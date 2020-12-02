import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainBanner from './components/main/mainBanner/MainBanner';
import ServicesComponent from './components/main/services/ServicesComponent';
import About from './components/main/about/About';
import GetInTouchComponent from './components/main/getInTouch/GetInTouchComponent';
import CustomersComponent from './components/main/customers/Customers';

function App() {
  return (
    <div className="App">
      <Header />
       <main className="main">
        <MainBanner /> 
       <ServicesComponent />
        <About />
        <GetInTouchComponent /> 
        <CustomersComponent/>
        </main> 
        <Footer />
    </div>
  );
}

export default App;
