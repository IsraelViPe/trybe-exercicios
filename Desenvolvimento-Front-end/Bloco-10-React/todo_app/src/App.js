
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const tasks = ['aula de box','estudar inglês','estudar lógica','estudar course','estudar livro Loiane']
const olTasks = tasks.map((task) => Task(task));


function App() {
  return (
    <div><ol> {olTasks} </ol></div>
  );
}

export default App;
