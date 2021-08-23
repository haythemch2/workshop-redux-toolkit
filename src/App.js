import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Head from './Components/Head';
import NewTodo from './Components/NewTodo';
import Title from './Components/Title';
import TodoList from './Components/TodoList';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import EditTodo from './Components/EditTodo';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Head/>
        <Title/>
        <TodoList/>
        <NewTodo/>
    </div>
    <Switch>
      <Route path='/:id'><EditTodo/></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
