import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";
import { useEffect } from "react";
import MainLayout from "../components/layouts/mainlayout"

function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default App;