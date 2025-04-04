import { BrowserRouter as Router, Route, Routes,Navigate, useParams } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import i18n from "./i18n";
import { LandingPage } from "./Pages/Landingpage";

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
    </Routes>
    
    </LanguageRouteWrapper>
  )
}

export default App;
