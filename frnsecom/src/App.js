import logo from './logo.svg';
import './App.css';
import Page from './cmps/cmns/Page';
import Home from './cmps/public/Home';
import Login from './cmps/public/Login';

// function Mensaje( {children} ){
//   return(
//     <section>
//       <h2>Este es un mensaje</h2>
//       <p>{children}</p>
//     </section>
//   );
// }

// function Quotes ( {text} ){
//   return(
//     <blockquote>{text}</blockquote>
//   );
// }

function App() {
  return (
    <div className="App">
     <Login/>
    </div>
  );
}

export default App;
