// cryptoDemo.js
import crypto from 'crypto';

// Create a SHA-256 hash
const password = 'mysecretpassword';
const hash = crypto.createHash('sha256').update(password).digest('hex');
console.log('SHA-256 Hash of password:', hash);

// Generate 16 random bytes
crypto.randomBytes(16, (err, buf) => {
  if (err) throw err;
  console.log('16 Random Bytes (hex):', buf.toString('hex'));
});
