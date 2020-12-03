import logo from './logo.svg';
import './App.css';

import Home from './cmps/public/Home';
function Mensaje({children}){
  return (
    <section>
      <h2>Este es un Mensaje</h2>
      <p>{children}</p>
    </section>
  );
}

function Quotes({text}){
  return(
    <blockquote>{text}</blockquote>
  );
}

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
