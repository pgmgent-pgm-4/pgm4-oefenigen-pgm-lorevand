import './App.css';
import { useFetch } from "./hooks/useFetch";

const url = "https://fakestoreapi.com/products";
function App() {
	const { data: products, isLoading, isError } = useFetch(url);
	if (isLoading) return <>...Loading</>;
	if (isError) return <>...Error</>;
	console.log(products);
	return (
		<>
			{products.map((product) => (
				<div key={product.id}>{product.title}</div>
			))}
		</>
	);
}

export default App;
