function AvatarSelection({ user }) {
  return (
    <div className="avatar-grid">
      {user.avatars.map(avatar => (
        <div key={avatar.id} className="avatar-card">
          <img
            src={`/avatars/avatar${avatar.id}.png`}
            alt={`Avatar ${avatar.id}`}
            style={{ opacity: avatar.unlocked ? 1 : 0.5 }}
          />
          {!avatar.unlocked && <span>🔒 Unlock at 100 points</span>}
        </div>
      ))}
    </div>
  );
}
