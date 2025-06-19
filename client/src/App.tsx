import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import NotFound from "./pages/not-found";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Cars from "./pages/cars";
import CarDetail from "./pages/car-detail";
import About from "./pages/about";
import Contact from "./pages/contact";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/voitures" component={Cars} />
        <Route path="/voiture/:slug" component={CarDetail} />
        <Route path="/a-propos" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

function App() {
  return <Router />;
}

export default App;
