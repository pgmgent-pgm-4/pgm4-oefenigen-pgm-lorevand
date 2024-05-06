import './App.css';
import TeamCard from './components/TeamCard';

// dit zien we, als je hier iets aanpast wordt het aangepast in de browser
function App() {
  return (
    // dit is jsx
    <div className="App">
      <TeamCard jobFunction="CEO" firstName="Lore" lastName="VDA" />
      <TeamCard jobFunction="teacher" firstName="mark" lastName="langen" />
      <TeamCard jobFunction="CEO" firstName="Lore" lastName="VDA" />
    </div>
  );
}

export default App;
