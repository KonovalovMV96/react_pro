import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

type User = {
  id: string;
  email: string;
  name: string;
  avatarPath: string;
  about: string;
  phone: string;
  roles: string[];
  likes: string[];
  favoritesPost: string[];
};

type AuthContextValue = {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  login: (token: string) => Promise<void>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("accessToken"),
  );
  const [user, setUser] = useState<User | null>(null);

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("accessToken");
  }, []);

  const getUserInfo = useCallback(async (currentToken: string) => {
    const userInfo = await fetch("https://api.v2.react-learning.ru/users/me", {
      headers: {
        Authorization: currentToken,
      },
    });
    if (!userInfo.ok) {
      throw new Error("Ошибка при получении данных пользователя");
    }
    const userData = await userInfo.json();
    setUser(userData);
  }, []);

  const login = useCallback(
    async (currentToken: string) => {
      setToken(currentToken);
      localStorage.setItem("accessToken", currentToken);
      await getUserInfo(currentToken);
    },
    [getUserInfo],
  );

  useEffect(() => {
    if (!token || user) {
      return;
    }
    const refresh = async () => {
      try {
        await getUserInfo(token);
      } catch {
        logout();
      }
    };

    refresh();
  }, [token, user, logout, getUserInfo]);

  const value = useMemo<AuthContextValue>(
    () => ({
      token,
      user,
      isAuthenticated: !!token,
      login,
      logout,
    }),
    [login, logout, token, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
