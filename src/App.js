import logo from './logo.svg';
import './App.css';
import TodoList from './Todo';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <h1>Todo List</h1>
        <TodoList />
      </Container>
    </div>
  );
}

export default App;
