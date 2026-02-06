import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";

const NotFound = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-8xl md:text-9xl font-bold text-gradient mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page not found</h2>
          <p className="text-muted-foreground mb-8 max-w-md">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Back to home</span>
          </Link>
        </motion.div>
      </main>
    </>
  );
};

export default NotFound;
