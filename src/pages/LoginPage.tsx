import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';

export default function LoginPage() {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await login(email, password);
      localStorage.setItem('token', res.data.access_token);
      navigate('/'); 
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}