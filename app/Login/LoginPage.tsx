import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import styles from '../styles/Login.module.css';

const LoginPage = () => {
    const { login, authError } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login({ username, password });
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h2>Login</h2>
                {authError && <p className={styles.error}>{authError}</p>}
                <div className={styles.inputGroup}>
                    <label htmlFor="username">Usuário</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
};

export default LoginPage;
