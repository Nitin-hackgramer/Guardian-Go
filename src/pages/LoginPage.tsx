import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../supabaseClient";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        navigate("/");
      }
      setLoading(false);
    };

    checkSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session) {
          navigate("/");
        }
      }
    );

    return () => authListener?.subscription?.unsubscribe();
  }, [navigate]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Guardian Go
        </h1>
        <Auth
          theme="dark" 
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={["google", "github"]}
          redirectTo={`${window.location.origin}/`}
        />
      </div>
    </div>
  );
};

export default LoginPage;

// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { supabase } from '../supabaseClient';
// import CustomSignupForm from '../components/CustomSignupForm';

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [showForgotPassword, setShowForgotPassword] = useState(false);
//   const [showLogin, setShowLogin] = useState(true);
//   const [showSignUp, setShowSignUp] = useState(false);

//   useEffect(() => {
//     const checkSession = async () => {
//       const { data } = await supabase.auth.getSession();
//       if (data.session) {
//         navigate('/');
//       }
//       setLoading(false);
//     };

//     checkSession();

//     const { data: authListener } = supabase.auth.onAuthStateChange(
//       (_event, session) => {
//         if (session) {
//           navigate('/');
//         }
//       }
//     );

//     return () => authListener?.subscription?.unsubscribe();
//   }, [navigate]);

//   if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-900">
//       <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold text-white mb-6 text-center">Guardian Go</h1>
//         {showLogin && !showForgotPassword && !showSignUp && (
//           <>
//             <CustomSignupForm />
//             <div className="mt-4 space-y-2">
//               <button
//                 onClick={() => setShowForgotPassword(true)}
//                 className="w-full text-sm text-blue-400 hover:text-blue-300 text-center"
//               >
//                 Forgot Password?
//               </button>
//               <button
//                 onClick={() => setShowSignUp(true)}
//                 className="w-full text-sm text-blue-400 hover:text-blue-300 text-center"
//               >
//                 Create Account
//               </button>
//             </div>
//           </>
//         )}

//         {showForgotPassword && (
//           <div>
//             <p className="text-white mb-4">Forgot Password Form</p>
//             <button
//               onClick={() => setShowForgotPassword(false)}
//               className="w-full text-sm text-blue-400 hover:text-blue-300"
//             >
//               Back to Login
//             </button>
//           </div>
//         )}

//         {showSignUp && (
//           <div>
//             <p className="text-white mb-4">Create Account Form</p>
//             <button
//               onClick={() => setShowSignUp(false)}
//               className="w-full text-sm text-blue-400 hover:text-blue-300"
//             >
//               Back to Login
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default LoginPage;
