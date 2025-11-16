import { motion } from "framer-motion";
import { ArrowRight, Shield, MapPin, Clock, Users, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

// Animation variants for reusability
const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } },
};

const Hero = () => {
    const features = ["Real-time Tracking", "AI Alerts", "Blockchain Verified"];

    const stats = [
        { icon: MapPin, number: "500K+", label: "Protected Tourists" },
        { icon: Clock, number: "99.9%", label: "Response Rate" },
        { icon: Flame, number: "500+", label: "Crowd Zones Monitored" },
        { icon: Users, number: "24/7", label: "AI Monitoring" },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(hsl(185 100% 50% / 0.15) 1px, transparent 1px),linear-gradient(90deg, hsl(185 100% 50% / 0.15) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 0.6, 0],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Radial Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent" />

            <div className="container mx-auto px-4 lg:px-8 absolute z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Centered Content Layout */}
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                        className="text-center space-y-8 max-w-4xl mx-auto mt-16"
                    >
                        <div className="center absolute top-0 left-0 right-0 flex justify-center">
                            <motion.div
                                variants={fadeInUp}
                                transition={{ duration: 0.6 }}
                                className="absolute top-0 left-50 right-50 inline-flex items-center gap-2 bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/20 px-5 py-2.5 rounded-full z-50"
                            >
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                <span className="text-cyan-100 font-medium text-sm">
                                    Powered by AI, Blockchain & GeoTech
                                </span>
                            </motion.div>
                        </div>

                        {/* Main Heading */}
                        <motion.h1
                            variants={fadeInUp}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="top-0 text-3xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] tracking-tight"
                        >
                            Smart, Stress-Free
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                                Travel Journeys
                            </span>
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            variants={fadeInUp}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-sm sm:text-base md:text-lg text-slate-200 max-w-3xl mx-auto leading-snug sm:leading-relaxed"
                        >
                            Real-time safety insights, AI-powered alerts, and
                            blockchain-secured identities. Transform your travel
                            experience with intelligent protection across India.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={fadeInUp}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-row gap-2 sm:gap-4 justify-center items-center pt-4"
                        >
                            <Button
                                size="lg"
                                className="group whitespace-nowrap shrink-0 bg-cyan-500 text-slate-950 hover:bg-cyan-400 text-sm sm:text-base font-semibold px-4 py-3 sm:px-8 sm:py-6 rounded-lg sm:rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-300"
                            >
                                Get Started
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="whitespace-nowrap shrink-0 text-sm sm:text-base px-4 py-3 sm:px-8 sm:py-6 rounded-lg sm:rounded-xl border-2 border-slate-700 bg-slate-800/50 text-white hover:bg-slate-800 hover:border-slate-600 hover:text-B-400 transition-all backdrop-blur-sm"
                            >
                                <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                Watch Demo
                            </Button>
                        </motion.div>

                        {/* Feature Pills */}
                        <motion.div
                            variants={fadeInUp}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-wrap gap-3 justify-center pt-2"
                        >
                            {features.map((feature, i) => (
                                <div
                                    key={i}
                                    className="bg-slate-800/50 backdrop-blur-sm px-5 py-2 rounded-full text-sm text-slate-300 border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800/70 transition-all cursor-default"
                                >
                                    {feature}
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Stats Section - Positioned at Bottom with Connecting Lines */}
                    <div className="absolute inset-0 pointer-events-none z-20">
                        {/* SVG Connector Lines */}
                        <svg
                            className="absolute inset-0 w-full h-full pointer-events-none"
                            style={{ overflow: "visible" }}
                        >
                            <defs>
                                <linearGradient
                                    id="lineGradient1"
                                    x1="0%"
                                    y1="0%"
                                    x2="0%"
                                    y2="100%"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="rgba(34, 211, 238, 0.6)"
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor="rgba(34, 211, 238, 0)"
                                    />
                                </linearGradient>
                                <linearGradient
                                    id="lineGradient2"
                                    x1="100%"
                                    y1="0%"
                                    x2="100%"
                                    y2="100%"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="rgba(34, 211, 238, 0.6)"
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor="rgba(34, 211, 238, 0)"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Left Bottom Stats - Hidden on mobile, visible on lg */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="hidden lg:flex absolute left-4 lg:left-12 bottom-8 lg:bottom-16 flex-col gap-6 pointer-events-auto"
                        >
                            {stats.slice(0, 2).map((stat, i) => {
                                const Icon = stat.icon;
                                return (
                                    <div
                                        key={i}
                                        className="group cursor-default"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all flex-shrink-0">
                                                <Icon className="w-5 h-5 text-cyan-400" />
                                            </div>
                                            <div>
                                                <div className="text-xl lg:text-2xl font-bold text-white">
                                                    {stat.number}
                                                </div>
                                                <div className="text-xs lg:text-sm text-slate-400 font-medium whitespace-nowrap">
                                                    {stat.label}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-0.5 h-8 bg-gradient-to-b from-cyan-500/50 to-transparent ml-5 mt-1" />
                                    </div>
                                );
                            })}
                        </motion.div>

                        {/* Right Bottom Stats - Hidden on mobile, visible on lg */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="hidden lg:flex absolute right-4 lg:right-12 bottom-8 lg:bottom-16 flex-col gap-6 pointer-events-auto"
                        >
                            {stats.slice(2).map((stat, i) => {
                                const Icon = stat.icon;
                                return (
                                    <div
                                        key={i}
                                        className="group cursor-default text-right"
                                    >
                                        <div className="flex items-center gap-3 justify-end">
                                            <div>
                                                <div className="text-xl lg:text-2xl font-bold text-white">
                                                    {stat.number}
                                                </div>
                                                <div className="text-xs lg:text-sm text-slate-400 font-medium whitespace-nowrap">
                                                    {stat.label}
                                                </div>
                                            </div>
                                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all flex-shrink-0">
                                                <Icon className="w-5 h-5 text-cyan-400" />
                                            </div>
                                        </div>
                                        <div className="w-0.5 h-8 bg-gradient-to-b from-cyan-500/50 to-transparent ml-auto mr-5 mt-1" />
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Enhanced 3D Globe with Mobile-First Design */}
            <div
                className="absolute left-1/2 bottom-0 sm:bottom-auto sm:top-[75%] md:top-[95%] lg:top-[110%] transform -translate-x-1/2 translate-y-0 sm:-translate-y-1/2 pointer-events-none z-0 globe-iframe-wrapper"
                aria-hidden="true"
                style={{
                    width: "clamp(500px, 100vw, 1600px)",
                    height: "clamp(400px, 100vw, 1600px)",
                }}
            >
                <style>{`
          .globe-iframe-wrapper { 
            visibility: visible; 
            filter: drop-shadow(0 25px 50px rgba(0,0,0,0.15));
          }
          
          .globe-iframe-wrapper .globe-iframe {
            width: 100%;
            height: 100%;
            border-radius: 1rem;
            transition: all .4s cubic-bezier(0.4, 0, 0.2, 1);
            display: block;
            overflow: visible;
            transform-origin: 50% 0%;
            box-shadow: 
              0 25px 80px rgba(0,0,0,0.12),
              0 0 0 1px rgba(255,255,255,0.05),
              inset 0 1px 0 rgba(255,255,255,0.1);
          }

          /* Mobile-first: Make the semi-sphere the hero element */
          @media (max-width: 640px) {
            .globe-iframe-wrapper {
              height: clamp(450px, 90vw, 600px);
              filter: drop-shadow(0 35px 70px rgba(0,0,0,0.25));
            }
            .globe-iframe-wrapper .globe-iframe {
              clip-path: ellipse(150% 80% at 50% 0%);
              -webkit-clip-path: ellipse(150% 80% at 50% 0%);
              transform: translateY(8%) scale(1.35);
              border-radius: 9999px 9999px 0 0;
              box-shadow: 
                0 40px 120px rgba(0,0,0,0.25),
                0 0 0 1px rgba(255,255,255,0.1),
                inset 0 2px 0 rgba(255,255,255,0.15);
            }
          }

          /* Small tablets */
          @media (min-width: 641px) and (max-width: 900px) {
            .globe-iframe-wrapper .globe-iframe {
              clip-path: ellipse(130% 70% at 50% 0%);
              -webkit-clip-path: ellipse(130% 70% at 50% 0%);
              transform: translateY(12%) scale(1.2);
              border-radius: 9999px 9999px 0 0;
              box-shadow: 
                0 35px 90px rgba(0,0,0,0.18),
                0 0 0 1px rgba(255,255,255,0.08);
            }
          }

          /* Large screens: show full globe */
          @media (min-width: 901px) {
            .globe-iframe-wrapper .globe-iframe {
              clip-path: none;
              -webkit-clip-path: none;
              transform: none;
              border-radius: 1rem;
              box-shadow: 
                0 25px 80px rgba(0,0,0,0.12),
                0 0 0 1px rgba(255,255,255,0.05);
            }
          }
        `}</style>

                {
                    <iframe
                        src="https://my.spline.design/3dglobe-PrQYveWALbIYSuf1qdXYYpID/"
                        title="3D Globe"
                        frameBorder="0"
                        loading="lazy"
                        className="globe-iframe"
                    />
                }
            </div>
        </section>
    );
};

export default Hero;
