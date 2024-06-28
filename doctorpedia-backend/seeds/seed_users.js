const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.seed = async function(knex) {
  // Hapus semua entri yang ada
  await knex('users').del();

  // Hash password
  const hashedPassword = await bcrypt.hash('password', saltRounds);

  // Tambahkan entri seed baru
  await knex('users').insert([
    {
      first_name: 'Ayumu',
      last_name: 'Uehara',
      username: 'Pomu',
      email: 'AyumuNakagawa@example.com',
      mobile_number: '1234567890',
      specialist: 'General',
      password: hashedPassword
    },
    {
      first_name: 'Setsuna',
      last_name: 'Yuki',
      username: 'Mendo',
      email: 'Nakagawa.Nana@example.com',
      mobile_number: '0987654321',
      specialist: 'Cardiology',
      password: hashedPassword
    }
  ]);
};
