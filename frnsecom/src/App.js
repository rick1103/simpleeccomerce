import logo from './logo.svg';
import './App.css';

function Mensaje( {children} ){
  return(
    <section>
      <h2>Este es un mensaje</h2>
      <p>{children}</p>
    </section>
  );
}

function Quotes ( {text} ){
  return(
    <blockquote>{text}</blockquote>
  );
}

function App() {
  return (
    <div className="App">
      <Mensaje>Mensaje a Mostrar</Mensaje>
      <Mensaje>
        <Quotes text="Lo dijo el ingeniero."/>
      </Mensaje>
      <Mensaje></Mensaje>
    </div>
  );
}

export default App;
