import './index.css';
import User from './components/user';
import FirstVideo from './components/firstVideo';
import Button from './components/button';
import Product from './components/product';
import SecondVideo from './components/SecondVideo';


function App(props) {
  return (
    <div className="main-container">
          
            <User />
            <FirstVideo />
            
            <Product />
            <SecondVideo />
             
    </div>
  );
}

export default App;
