import "../styles/globals.css";
import { AuthProvider } from "./session/authcontext";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

