import { useState, useEffect } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskColumn from './components/TaskColumn';
import ProgressBar from './components/ProgressBar';
import './App.css';

function App() {
  // Chave para armazenamento no localStorage
  const STORAGE_KEY = 'dailyTasks';
  
  // Estado para armazenar as tarefas
  const [tasks, setTasks] = useState([]);

  // Carregar tarefas do localStorage quando o componente é montado
  useEffect(() => {
    const storedTasks = localStorage.getItem(STORAGE_KEY);
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Salvar tarefas no localStorage sempre que o estado de tarefas mudar
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // Adicionar uma nova tarefa
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Alternar o status de conclusão de uma tarefa
  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, completed: !task.completed } 
        : task
    ));
  };

  // Filtrar tarefas por período
  const morningTasks = tasks.filter(task => task.period === 'Manhã');
  const afternoonTasks = tasks.filter(task => task.period === 'Tarde');
  const eveningTasks = tasks.filter(task => task.period === 'Noite');

  // Calcular tarefas concluídas
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <div className="app">
      <h1>Gestor de Tarefas Diárias</h1>
      
      <AddTaskForm onAddTask={handleAddTask} />
      
      <ProgressBar 
        completedTasks={completedTasks} 
        totalTasks={totalTasks} 
      />
      
      <div className="task-columns">
        <TaskColumn 
          title="Manhã" 
          tasks={morningTasks} 
          onToggleComplete={handleToggleComplete} 
        />
        <TaskColumn 
          title="Tarde" 
          tasks={afternoonTasks} 
          onToggleComplete={handleToggleComplete} 
        />
        <TaskColumn 
          title="Noite" 
          tasks={eveningTasks} 
          onToggleComplete={handleToggleComplete} 
        />
      </div>
    </div>
  );
}

export default App;
