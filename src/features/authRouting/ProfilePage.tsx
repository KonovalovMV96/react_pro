import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export const ProfilePage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <div>
      <h2>Это страница профиля</h2>
      <p>Имя пользователя: {user?.name || "Загрузка данных"}</p>
      <button onClick={handleLogout}>Выйти из профиля</button>
    </div>
  );
};
