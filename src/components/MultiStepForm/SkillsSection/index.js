import React, { useState } from 'react';
import './skillsSection.css';

const SkillsSection = ({ onBack, onNext }) => {
  const [skillInput, setSkillInput] = useState('');
  const [experience, setExperience] = useState('Intermediate');
  const [skills, setSkills] = useState([]);

  const handleAddSkill = () => {
    if (skillInput.trim() === '') return;

    setSkills([
      ...skills,
      { name: skillInput.trim(), level: experience },
    ]);
    setSkillInput('');
    setExperience('Intermediate');
  };

  const handleRemoveSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <div className="skillset-container">
      <h2 className="form-title">Add Skill Sets</h2>
      <div className="input-row">
        <div className="form-group">
          <label>Add Skill</label>
          <input
            type="text"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            placeholder="e.g. JavaScript"
          />
        </div>

        <div className="form-group">
          <label>Experience level</label>
          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Expert</option>
          </select>
        </div>
      </div>

      <button className="add-button" onClick={handleAddSkill}>
        Add <span className="plus">+</span>
      </button>

      <div className="skill-tags">
        {skills.map((skill, index) => (
          <div key={index} className="skill-tag">
            {skill.name} <span>({skill.level})</span>
            <button className="remove-btn" onClick={() => handleRemoveSkill(index)}>×</button>
          </div>
        ))}
      </div>

      <div className="button-container">
        <button className="back-button" onClick={onBack}>BACK</button>
        <button className="next-button" onClick={onNext}>NEXT</button>
      </div>
    </div>
  );
};

export default SkillsSection;
