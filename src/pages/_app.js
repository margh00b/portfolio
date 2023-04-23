import "@/styles/globals.css";

import { ScrollProvider } from "react-scroll";
import { Element } from "react-scroll";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
