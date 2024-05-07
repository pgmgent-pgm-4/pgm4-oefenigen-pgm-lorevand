import './App.css';
import { useQuery } from '@apollo/client';
import { GET_TODO } from './graphql/queries';

function App() {
  const {loading, error, data} = useQuery(GET_TODO);
  if (loading) return <div>...loading</div>
  if (error) return <div>...error</div>
  console.log(data)
  return (
    <div className="App">
      	{data.todos.map((todo) => (
			<div key={todo.id}>
				<h2>{todo.title}</h2>
        <h2>{todo.isDone}</h2>
			</div>
		))}
    </div>
  );
}

export default App;
