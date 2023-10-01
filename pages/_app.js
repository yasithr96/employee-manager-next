import Layout from "../comps/Layout";
import { EmployeeProvider } from "../context/EmployeeContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <EmployeeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </EmployeeProvider>
  );
}

export default MyApp;
