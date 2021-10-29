import React, {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as AuthSessions from "expo-auth-session";
import { api } from "../services/api";

const CLIENT_ID = "8492b8325df6ddfff291";
const SCOPE = "read:user";
const USER_STORAGE = "@nlwheat:user";
const TOKEN_STORAGE = "@nlwheat:token";

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
	const { Provider } = AuthContext;

	const [isSigningIn, setIsSigningIn] = useState(true);
	const [user, setUser] = useState<User | null>(null);

	async function signIn() {
		try {
			const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`;
			const authSessionResponse = (await AuthSessions.startAsync({
				authUrl,
			})) as AuthorizationResponse;

			if (
				authSessionResponse.type === "success" &&
				authSessionResponse.params.error !== "access_denied"
			) {
				const authResponse = await api.post("/authenticate", {
					code: authSessionResponse.params.code,
				});
				const { user, token } = authResponse.data as AuthResponse;

				api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
				await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
				await AsyncStorage.setItem(TOKEN_STORAGE, token);

				setUser(user);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setIsSigningIn(false);
		}
	}

	async function signOut() {
		setUser(null);
		await AsyncStorage.removeItem(USER_STORAGE);
		await AsyncStorage.removeItem(TOKEN_STORAGE);
	}

	useEffect(() => {
		async function loadUserStorageData() {
			const userStorage = await AsyncStorage.getItem(USER_STORAGE);
			const tokenStorage = await AsyncStorage.getItem(TOKEN_STORAGE);

			if (userStorage && tokenStorage) {
				setUser(JSON.parse(userStorage));
			}
			setIsSigningIn(false);
		}

		loadUserStorageData();
	}, []);

	return (
		<Provider
			value={{
				signIn,
				signOut,
				user,
				isSigningIn,
			}}
		>
			{children}
		</Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);

	return context;
}

type User = {
	id: string;
	avatar_url: string;
	name: string;
	login: string;
};

type AuthContextData = {
	user: User | null;
	isSigningIn: boolean;
	signIn: () => Promise<void>;
	signOut: () => Promise<void>;
};

type AuthProviderProps = {
	children: ReactNode;
};

type AuthResponse = {
	token: string;
	user: User;
};

type AuthorizationResponse = {
	params: {
		code?: string;
		error?: string;
	};
	type?: string;
};
