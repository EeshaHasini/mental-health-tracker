import React from 'react';
import SettingField from '../Ui/SettingField';
import '../../Styles/Settings.css';

function Settings() {
  const changeUsername = (newUsername) => {
    console.log("Username updated to:", newUsername);
    alert(`Username updated to: ${newUsername}`);
    // Add your actual logic here, e.g., update DB or state
  };

  const changeEmail = (newEmail) => {
    console.log("Email updated to:", newEmail);
    alert(`Email updated to: ${newEmail}`);
    // API call or state update here
  };

  const changePassword = (newPassword) => {
    console.log("Password updated!");
    alert(`Password successfully changed.`);
    // Add secure logic (API call + token validation)
  };

  return (
    <div className="settings-page">
      <h2>Settings</h2>

      <SettingField
        label="Change Username"
        type="text"
        placeholder="Enter new username"
        onSubmit={changeUsername}
      />

      <SettingField
        label="Change Email"
        type="email"
        placeholder="Enter new email"
        onSubmit={changeEmail}
      />

      <SettingField
        label="Change Password"
        type="password"
        placeholder="Enter new password"
        onSubmit={changePassword}
      />
    </div>
  );
}

export default Settings;
