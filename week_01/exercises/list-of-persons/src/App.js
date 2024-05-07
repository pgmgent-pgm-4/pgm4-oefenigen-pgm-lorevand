import './App.css';

function App() {
  const names = ["Alice", "Bob", "Charlie", "David", "Eva"];
  return (
    <div>
			{/* Gebruik de map-functie om lijstitems te maken voor elke naam */}
			<ul>
				{names.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
  );
}

export default App;
