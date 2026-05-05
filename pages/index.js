import React, { useState } from 'react';
import './FitnessComponent.css';

const gymDays = ['Monday', 'Wednesday', 'Friday'];

const mealsData = [
  { id: 1, meal: 'Breakfast', calories: 300 },
  { id: 2, meal: 'Lunch', calories: 600 },
  { id: 3, meal: 'Dinner', calories: 500 },
];

const phases = [
  { id: 1, name: 'Phase 1', duration: '4 weeks' },
  { id: 2, name: 'Phase 2', duration: '6 weeks' },
];

const FitnessComponent = () => {
  const [selectedPhase, setSelectedPhase] = useState(null);

  const handlePhaseChange = (phase) => {
    setSelectedPhase(phase);
  };

  return (
    <div className="fitness-container">
      <h1>Fitness Plan</h1>
      <h2>Workout Days</h2>
      <ul>
        {gymDays.map((day, index) => (
          <li key={index}>{day}</li>
        ))}
      </ul>
      <h2>Meals</h2>
      <ul>
        {mealsData.map(meal => (
          <li key={meal.id}>{meal.meal} - {meal.calories} calories</li>
        ))}
      </ul>
      <h2>Phases</h2>
      <ul>
        {phases.map(phase => (
          <li key={phase.id} onClick={() => handlePhaseChange(phase)}>
            {phase.name} ({phase.duration})
          </li>
        ))}
      </ul>
      {selectedPhase && <div>Selected Phase: {selectedPhase.name}</div>}
    </div>
  );
};

export default FitnessComponent;
