import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store";
import { initFirebase } from "../firebase/FirebaseApp";

function MyApp({ Component, pageProps }: AppProps) {
  initFirebase();

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
