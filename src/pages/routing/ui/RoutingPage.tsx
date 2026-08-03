import { AppRouter, AuthProvider } from "features/authRouting";

export const RoutingPage = () => {
  return (
    <div>
      <h2>Routing Page</h2>
      <p>Закрепление пройденной темы </p>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
};
