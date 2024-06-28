const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const knex = require('knex')(require('./knexfile').development);

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

// Endpoint untuk login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Cari pengguna berdasarkan email
    const users = await knex('users').where({ email });

    if (users.length > 0) {
      const user = users[0];
      // Verifikasi password
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        res.json({
          message: 'Login successful',
          user: {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username,
            email: user.email,
            mobile_number: user.mobile_number,
            specialist: user.specialist
          }
        });
      } else {
        res.status(400).json({ message: 'Invalid password' });
      }
    } else {
      res.status(400).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
