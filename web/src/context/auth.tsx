import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../components/services/api";

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider(props: AuthProvider) {
    const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=8492b8325df6ddfff291&redirect_uri=http://localhost:3001`;
    const [user, setUser] = useState<User | null>(null);

    const signIn = async (githubCode: string) => {
        const response = await api.post<AuthResponse>("authenticate", {
            code: githubCode
        });

        const { token, user } = response.data;

        localStorage.setItem("@dowhile:token", token);

        setUser(user);
    };

    const signOut = () => {
        setUser(null);
        localStorage.removeItem("@dowhile:token");
    };

    useEffect(() => {
        const url = window.location.href;
        const hasGithubCode = url.includes("?code=");

        if (hasGithubCode) {
            const [urlWithoutCode, githubCode] = url.split("?code=");
            
            window.history.pushState({}, '', urlWithoutCode);
            signIn(githubCode);
        }
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("@dowhile:token");

        if (token) {
            api.defaults.headers.common.authorization = `Bearer ${token}`;

            api.get<User>("profile")
                .then(response => {
                    setUser(response.data);
                });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ signInUrl, user, signOut }}>
            {props.children}
        </AuthContext.Provider>
    );
}

type AuthProvider = {
    children: ReactNode;
}

type AuthResponse = {
    token: string;
    user: {
        id: string;
        avatar_url: string;
        name: string;
        login: string;
    };
}

type User = {
    id: string;
    name: string;
    login: string;
    avatar_url: string;
}

type AuthContextData = {
    user: User | null;
    signInUrl: string;
    signOut: () => void;
}