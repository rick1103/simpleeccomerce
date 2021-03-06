import './App.css';
import './utlts/Transitions.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {AnimatedSwitch} from 'react-router-transition';
import {pageTransitions as transition, mapGlideStyles as mapStyles} from './utlts/Transitions';

import Home from './cmps/public/Home';
import Login from './cmps/public/Login';

import ListProductos from './cmps/private/ListProductos';

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
    <Router>
    <section>
      <AnimatedSwitch
      {...transition}
      mapStyles={mapStyles}
      className="switch-wrapper"
      >
        <Route path="/" exact component= {Home} />
        <Route path="/login" exact component= {Login} />
        <Route path="/productos" exact component={ListProductos}/>
      </AnimatedSwitch>
      </section>
    </Router>
    </div>
  );
}

export default App;
