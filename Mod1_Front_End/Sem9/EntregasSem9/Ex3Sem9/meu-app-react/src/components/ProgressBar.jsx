import PropTypes from 'prop-types';

function ProgressBar({ completedTasks, totalTasks }) {
  // Cálculo do percentual de conclusão
  const progressPercent = totalTasks > 0 
    ? Math.round((completedTasks / totalTasks) * 100) 
    : 0;

  return (
    <div className="task-summary">
      <p>Total de tarefas concluídas: {completedTasks} de {totalTasks}</p>
      <div id="progress-container">
        <div id="progress-bar">
          <div 
            id="progress-fill" 
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        <span id="progress-percentage">{progressPercent}%</span>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  completedTasks: PropTypes.number.isRequired,
  totalTasks: PropTypes.number.isRequired
};

export default ProgressBar;
