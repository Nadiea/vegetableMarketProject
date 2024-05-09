import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Container from "/src/layout/Container";

function Layout() {
  return (
<>  
      <Header />
      <Container>
   
      <Outlet />
      <Footer />
    </Container></>
  );
}

export default Layout;