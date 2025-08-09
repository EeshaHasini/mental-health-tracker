const bcrypt = require('bcrypt');
<<<<<<< HEAD
const jwt = require('jsonwebtoken');
=======
>>>>>>> 0fe18f1 (Add mental-health-tracker folder after removing nested git)
const User = require('../models/User');

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
<<<<<<< HEAD
    
    console.log("Saving user:", newUser);
=======
>>>>>>> 0fe18f1 (Add mental-health-tracker folder after removing nested git)

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

<<<<<<< HEAD
=======
const jwt = require('jsonwebtoken');

>>>>>>> 0fe18f1 (Add mental-health-tracker folder after removing nested git)
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid password' });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET || 'fallback_secret', // fallback just for debugging
      { expiresIn: '1d' }
    );

<<<<<<< HEAD
    // 🔹 Send the username and email in the response
    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });

  } catch (error) {
    console.error("🔴 Login error:", error);
=======
    res.status(200).json({ message: 'Login successful', token });

  } catch (error) {
    console.error("🔴 Login error:", error); // 🔍 Add this line!
>>>>>>> 0fe18f1 (Add mental-health-tracker folder after removing nested git)
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

<<<<<<< HEAD
module.exports = { register, login };
=======
module.exports = { register, login };
>>>>>>> 0fe18f1 (Add mental-health-tracker folder after removing nested git)
