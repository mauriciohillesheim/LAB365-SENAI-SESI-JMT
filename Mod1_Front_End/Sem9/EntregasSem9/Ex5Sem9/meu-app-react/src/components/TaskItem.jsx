import PropTypes from 'prop-types';

function TaskItem({ task, onToggleComplete }) {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
      />
      <span>{task.description}</span>
    </li>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  onToggleComplete: PropTypes.func.isRequired
};

export default TaskItem;
