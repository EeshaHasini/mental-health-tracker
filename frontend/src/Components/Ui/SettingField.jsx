import React, { useState } from 'react';

function SettingField({ label, type, placeholder, onSubmit }) {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    if (!value.trim()) {
      alert(`Please enter a valid ${label.toLowerCase()}`);
      return;
    }
    onSubmit(value);
    setValue('');
  };

  return (
    <div className="setting-field">
      <label>{label}</label>
      <div className="setting-input">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleSubmit}>Update</button>
      </div>
    </div>
  );
}

export default SettingField;
