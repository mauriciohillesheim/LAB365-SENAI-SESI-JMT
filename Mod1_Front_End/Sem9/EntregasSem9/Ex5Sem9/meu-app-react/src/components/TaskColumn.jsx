import PropTypes from 'prop-types';
import TaskItem from './TaskItem';

function TaskColumn({ title, tasks, onToggleComplete }) {
  return (
    <div className="task-column">
      <h3>{title}</h3>
      <ul className="period-task-list">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onToggleComplete={onToggleComplete} 
            />
          ))
        ) : (
          <p className="empty-list">Nenhuma tarefa para este período</p>
        )}
      </ul>
    </div>
  );
}

TaskColumn.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  onToggleComplete: PropTypes.func.isRequired
};

export default TaskColumn;
