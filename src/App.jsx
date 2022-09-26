// Components
// Home Page
import Header from "./Components/Header";
import Main from "./Components/Main";

// Authentication Page
import SignUp from "./Pages/Authentication/SignUp";
import SignIn from "./Pages/Authentication/SignIn";
import ForgetPassword from "./Pages/Authentication/ForgetPassword";

// React-bootstrap's Components
import { Container } from "react-bootstrap";
import { GlobalStyle } from "./GlobalStyles/GlobalStyle";

// React Router Dom
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";

// App function component
function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        {/*  Route Home Page Component */}
        <Route
          path="/"
          element={
            <Container fluid="xl">
              {/* There are Global Style */}

              {/* There are Header Component */}
              <Header />

              {/* There are Main Component */}
              <Main />

              {/* There are Footer Component */}
              <Footer />
            </Container>
          }
        />

        {/* Route SignUp Component */}
        <Route path="/sign-in" element={<SignIn />} />

        {/* Route SignIn Component */}
        <Route path="/sign-up" element={<SignUp />} />

        {/* Route ForgotPassword Component */}
        <Route path="/forgot-password" element={<ForgetPassword />} />
      </Routes>
    </>
  );
}

export default App;
