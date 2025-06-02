import { useState } from 'react';
import PropTypes from 'prop-types';

function AddTaskForm({ onAddTask }) {
  const [description, setDescription] = useState('');
  const [period, setPeriod] = useState('Manhã');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (description.trim() === '') {
      alert('Por favor, insira a descrição da tarefa.');
      return;
    }

    const newTask = {
      description: description.trim(),
      period,
      completed: false,
      id: Date.now() // Identificador único para a tarefa
    };

    onAddTask(newTask);
    setDescription('');
    setPeriod('Manhã');
  };

  return (
    <div className="add-task-component">
      <h2>Adicionar Nova Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição da tarefa..."
        />
        <select 
          value={period} 
          onChange={(e) => setPeriod(e.target.value)}
        >
          <option value="Manhã">Manhã</option>
          <option value="Tarde">Tarde</option>
          <option value="Noite">Noite</option>
        </select>
        <button type="submit">Adicionar Tarefa</button>
      </form>
    </div>
  );
}

AddTaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired
};

export default AddTaskForm;
