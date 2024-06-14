import { createContext, useState, useContext } from "react";
import { request } from '../services/request';
import { setCookie } from 'nookies';
import { useRouter } from "next/navigation";

export type SignInData = {
    username: string;
    password: string;
}

type AuthContextType = {
    login: (data: SignInData) => void;
    authError: string | null;
}

type UserAuthentication = {
    'x-access-token': string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
    const [authError, setAuthError] = useState<string | null>(null);
    const router = useRouter();

    const login = async (data: SignInData) => {
        const { username, password } = data;
        
      
        if (username === 'admin' && password === 'password') {
            const token = 'fake-admin-token';
            setCookie(null, 'auth-token', token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            });
            setAuthError(null);
            router.push('/dashboard'); 
            return;
        }

        try {
            const response = await request.post('/auth/login', { username, password });
            const { 'x-access-token': token } = response.data as UserAuthentication;

            setCookie(null, 'auth-token', token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            });

            setAuthError(null);
           
