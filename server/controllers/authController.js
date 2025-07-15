// Temporary in-memory array to store users
const users = [];

// Handle user registration
exports.registerUser = (req, res) => {
  const { username, email, password } = req.body;

  // Check if user already exists
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists with this email." });
  }

  // Store the user
  users.push({ username, email, password });

  console.log("📥 Registered users:", users);

  res.status(201).json({
    message: "User registered successfully!",
    user: { username, email }
  });
};

// Handle user login
exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  // Check if user exists with matching email and password
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password." });
  }

  console.log("🔐 Login successful:", user);

  res.status(200).json({
    message: "Login successful!",
    user: { username: user.username, email: user.email }
  });
};
