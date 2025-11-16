import { motion } from "framer-motion";
import { MapPin, AlertTriangle, Navigation, Radio, Radar, Shield } from "lucide-react";

const GeoFencing = () => {
  return (
    <section id="geo-safety" className="py-20 lg:py-32 relative overflow-hidden" style={{
      background: `radial-gradient(circle at 5% 15%, rgba(34,211,238,0.18) 0%, transparent 60%),
           radial-gradient(circle at 20% 55%, rgba(59,130,246,0.16) 0%, transparent 70%),
           radial-gradient(circle at 40% 25%, rgba(34,211,238,0.15) 0%, transparent 70%),
           radial-gradient(circle at 65% 50%, rgba(30,58,138,0.10) 0%, transparent 60%),
           radial-gradient(circle at 88% 20%, rgba(59,130,246,0.14) 0%, transparent 65%)`,
      backgroundColor: "hsl(var(--background))"
    }}>
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, hsl(185 100% 50% / 0.3) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 glass-dark px-4 py-2 rounded-full mb-4">
            <Radar className="w-4 h-4 text-secondary animate-pulse" />
            <span className="text-sm font-medium text-primary">Real-Time Monitoring</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-primary">
            Geo-Fencing & <span className="text-secondary text-[#000265]">Zone Alerts</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI-powered location tracking with smart alerts for high-risk zones and safe route recommendations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* High-Risk Zone Alert Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-dark rounded-3xl p-6 relative overflow-hidden group hover:scale-105 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10 space-y-4">
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-destructive/20 flex items-center justify-center">
                  <AlertTriangle className="w-7 h-7 text-destructive animate-pulse" />
                </div>
                <div className="px-3 py-1 bg-destructive/20 rounded-full">
                  <span className="text-xs font-semibold text-destructive">Active Alert</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">High-Risk Zone Detected</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  You're approaching an area flagged for safety concerns. Alternative routes suggested.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-destructive" />
                  <span className="text-white/80">Location: Connaught Place</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Radio className="w-4 h-4 text-destructive" />
                  <span className="text-white/80">Distance: 500m ahead</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <button className="text-sm font-semibold text-destructive hover:text-destructive/80 transition-colors">
                  View Safe Routes →
                </button>
              </div>
            </div>

            {/* Pulsing Ring */}
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 border-2 border-destructive/30 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.div>

          {/* Safe Route Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-dark rounded-3xl p-6 relative overflow-hidden group hover:scale-105 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10 space-y-4">
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center">
                  <Navigation className="w-7 h-7 text-accent" />
                </div>
                <div className="px-3 py-1 bg-accent/20 rounded-full">
                  <span className="text-xs font-semibold text-accent">Recommended</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">Safe Route Available</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  AI-optimized path with verified safety checkpoints and tourist-friendly stops.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/70">Distance</span>
                  <span className="text-white font-semibold">2.4 km</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/70">Est. Time</span>
                  <span className="text-white font-semibold">8 mins</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/70">Safety Score</span>
                  <span className="text-accent font-semibold">98/100</span>
                </div>
              </div>

              {/* Route Visualization */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <div className="flex-1 h-0.5 bg-accent/30" />
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <div className="flex-1 h-0.5 bg-accent/30" />
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                </div>
                <button className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors">
                  Start Navigation →
                </button>
              </div>
            </div>
          </motion.div>

          {/* Geo-Fencing Status Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-dark rounded-3xl p-6 relative overflow-hidden group hover:scale-105 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10 space-y-4">
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center">
                  <Shield className="w-7 h-7 text-secondary" />
                </div>
                <div className="px-3 py-1 bg-secondary/20 rounded-full">
                  <span className="text-xs font-semibold text-secondary">Protected</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">Geo-Fencing Active</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Your location is continuously monitored with AI-powered anomaly detection.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Real-Time Tracking</p>
                    <p className="text-xs text-white/60">GPS accuracy: ±5m</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Radar className="w-5 h-5 text-secondary animate-spin" style={{ animationDuration: "3s" }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">AI Monitoring</p>
                    <p className="text-xs text-white/60">24/7 anomaly detection</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/70">Protection Level</span>
                  <span className="text-sm font-semibold text-secondary">Maximum</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-secondary to-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </div>
            </div>

            {/* Radar Pulse */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-secondary/30 rounded-full"
              animate={{
                scale: [1, 2, 2],
                opacity: [0.5, 0, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </div>

        {/* Bottom Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 glass-dark rounded-3xl p-6 lg:p-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <Radio className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Coverage Across India</h4>
                <p className="text-sm text-white/70">
                  Our geo-fencing network covers 500+ cities with real-time safety updates
                </p>
              </div>
            </div>
            <div className="flex gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-secondary">10M+</div>
                <div className="text-xs text-white/60">Safe Zones</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-xs text-white/60">Monitoring</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">99.8%</div>
                <div className="text-xs text-white/60">Accuracy</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GeoFencing;
