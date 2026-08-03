import { Link } from "react-router-dom";

export const PublicPage = () => {
  return (
    <div>
      <h2>Public Page</h2>
      <p>Открытая страница для всех желающих</p>
      <Link to="/profile">Перейти в профиль</Link>
    </div>
  );
};
