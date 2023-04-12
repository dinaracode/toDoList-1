import './App.css';
import imageOne from './people.jpg';
import imageTwo from './checkMark.jpg'
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div>
    <img src={imageOne} width="400px" alt="people"/>
    <h1>To Do List</h1>
    <ToDoList />
    <img src={imageTwo} width="150px" alt="Check Mark" className='done'/>
    </div>
  );
}

export default App;
