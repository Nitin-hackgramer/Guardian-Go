import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, MapPin, Phone, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user || null);
    };

    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setShowUserDropdown(false);
    navigate("/login");
  };

  const userInitial =
    user?.user_metadata?.full_name?.charAt(0).toUpperCase() ||
    user?.email?.charAt(0).toUpperCase();

  const navLinks = [
    { name: "Features", href: "#features", icon: Shield },
    { name: "Geo-Safety", href: "#geo-safety", icon: MapPin },
    { name: "Emergency", href: "#emergency", icon: Phone },
    { name: "Dashboard", href: "#dashboard", icon: Users },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-dark shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <div className="relative">
              <img
                src="favicon.ico"
                alt="logo"
                className="w-10 h-10 opacity-100 bg-cyan-50 rounded-full"
              />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-poppins font-bold text-white">
                Guardian<span className="text-secondary">Go</span>
              </h1>
              <p className="text-[10px] text-muted-foreground hidden sm:block">
                Smart Tourist Safety
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-secondary transition-colors relative group"
              >
                <link.icon className="w-4 h-4" />
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex items-center gap-3 relative"
          >
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserDropdown(!showUserDropdown)}
                  className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold hover:bg-blue-600 transition-colors"
                >
                  {userInitial}
                </button>

                <AnimatePresence>
                  {showUserDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-64 bg-gray-800 text-white rounded-lg shadow-lg p-4 z-50"
                    >
                      <h2 className="text-lg font-semibold mb-3">Welcome!</h2>
                      <p className="text-sm mb-2">
                        <strong>Name:</strong>{" "}
                        {user.user_metadata?.full_name || "N/A"}
                      </p>
                      <p className="text-sm mb-4">
                        <strong>Email:</strong> {user.email}
                      </p>
                      <button
                        onClick={handleLogout}
                        className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded transition-colors"
                      >
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 text-white font-medium transition-colors"
              >
                Sign In
              </button>
            )}
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm glass-dark md:hidden z-50 overflow-y-auto"
          >
            <div className="p-6">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mt-16 space-y-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 text-lg font-medium text-white hover:text-secondary transition-colors py-3 border-b border-white/10"
                  >
                    <link.icon className="w-5 h-5" />
                    {link.name}
                  </motion.a>
                ))}

                <div className="pt-6 space-y-3">
                  {user ? (
                    <>
                      <div className="w-full rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold py-2">
                        {user.user_metadata?.full_name || user.email}
                      </div>
                      <button
                        onClick={handleLogout}
                        className="w-full px-4 py-2 bg-red-600 rounded hover:bg-red-700 text-white font-medium transition-colors"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => {
                        navigate("/login");
                        setIsOpen(false);
                      }}
                      className="w-full px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 text-white font-medium transition-colors"
                    >
                      Sign In
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-40"
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
