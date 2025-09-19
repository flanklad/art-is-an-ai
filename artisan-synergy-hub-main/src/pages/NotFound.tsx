import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 via-white to-pink-50">
      <div className="text-center animate-fade-in">
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl flex items-center justify-center mb-4">
            <span className="text-3xl text-white font-bold">404</span>
          </div>
        </div>
        <h1 className="mb-4 text-4xl font-bold gradient-text">Page Not Found</h1>
        <p className="mb-6 text-xl text-muted-foreground">Oops! The page you're looking for doesn't exist.</p>
        <Button
          onClick={() => window.location.href = '/'}
          className="btn-hero"
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
