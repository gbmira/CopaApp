import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import MainRoutes from './Routes/MainRoutes';
import { Config, DivBody, Global } from './style/Styled';

function App() {
  return (
    <div>

      <Header />
      <MainRoutes />
      <Footer/>
     
    </div>




  );
}

export default App;
