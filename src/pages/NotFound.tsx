
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-20 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-serif font-bold mb-4 text-church-primary">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <p className="text-gray-500 mb-8">We can't find the page you're looking for. It might have been moved, deleted, or never existed.</p>
        <NavLink to="/">
          <Button className="bg-church-accent hover:bg-church-accent/90 text-white">
            Return to Home
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
