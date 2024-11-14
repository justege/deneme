import { BrowserRouter as Router, Route, Routes,Navigate, useParams } from "react-router-dom";
import "./App.css";
import { SinglePage } from "./Pages/SinglePage";
import { useEffect } from "react";
import i18n from "./i18n";
import { LandingPage } from "./Pages/Landingpage";
import { ErrorPage } from "./Pages/ErrorPage";

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/tr" />} /> 
        <Route path="/:lng/*" element={ <LanguageRoute />} /> 
      </Routes>
    </Router>
    </>
  );
}



interface LanguageRouteWrapperProps {
  children: JSX.Element;
  lang: string;
}

const LanguageRouteWrapper: React.FC<LanguageRouteWrapperProps> = ({
  children,
  lang,
}) => {

  useEffect(()=> {
    i18n.changeLanguage(lang);
  }, [lang])

  return children;
}

const LanguageRoute: React.FC = () => {

  const {lng} = useParams<{lng: string}>();

  return (
    <LanguageRouteWrapper lang={lng || "en"}>

    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/egemen/:id/:arabamarkasi" element={<SinglePage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
    
    </LanguageRouteWrapper>
  )
}

export default App;
