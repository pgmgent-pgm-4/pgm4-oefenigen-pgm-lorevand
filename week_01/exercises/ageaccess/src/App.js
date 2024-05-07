import './App.css';

function App() {
  let age = 20;
  return (
    // message
    <>
    <h1>Welkom!</h1> 
    {age <=18 ? <span> Sorry, je moet 18 jaar of ouder zijn om de inhoud van deze website te bekijken.</span>
    :<span> Je bent oud genoeg om de inhoud van deze website te bekijken. </span>
    }
    </>
    // vraagteken = condition true = eerst zin
    // dubbelpunt = condition false = tweede zin
  );
}

export default App;
