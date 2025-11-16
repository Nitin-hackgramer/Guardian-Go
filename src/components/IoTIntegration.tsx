import { motion } from "framer-motion";
import {
  Watch,
  Smartphone,
  Radio,
  Wifi,
  Bluetooth,
  Battery,
  Signal,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const IoTIntegration = () => {
  return (
    <section
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at 10% 20%, rgba(59,130,246,0.28) 0%, transparent 55%),
             radial-gradient(circle at 30% 70%, rgba(34,211,238,0.22) 0%, transparent 60%),
             radial-gradient(circle at 50% 40%, rgba(59,130,246,0.22) 0%, transparent 65%),
             radial-gradient(circle at 70% 60%, rgba(30,58,138,0.14) 0%, transparent 55%),
             radial-gradient(circle at 90% 30%, rgba(2,6,23,0.08) 0%, transparent 60%)`,
      }}
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-secondary/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
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
            <Radio className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-primary">
              Connected Devices
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-primary">
            IoT <span className="text-secondary text-[#000265]">Ecosystem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wearable devices and smart sensors for continuous health monitoring
            and location tracking.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Smart Wearable Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-dark rounded-3xl p-6 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10 space-y-4">
              {/* Device Illustration */}
              <div className="relative h-48 flex items-center justify-center mb-4">
                <motion.div
                  className="w-32 h-40 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl border-4 border-secondary/30 flex items-center justify-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Watch className="w-16 h-16 text-secondary" />
                </motion.div>

                {/* Signal Rings */}
                {[...Array(2)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-40 h-40 border-2 border-secondary/30 rounded-full"
                    animate={{
                      scale: [1, 1.5],
                      opacity: [0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 1,
                    }}
                  />
                ))}
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  GuardianGo Band
                </h3>
                <p className="text-sm text-white/70 leading-relaxed mb-4">
                  Smart wearable with GPS tracking, heart rate monitoring, and
                  instant SOS trigger.
                </p>
              </div>

              <div className="space-y-2">
                {[
                  { icon: Signal, label: "24/7 Connectivity" },
                  { icon: Battery, label: "7-day battery life" },
                  { icon: Bluetooth, label: "Bluetooth 5.0" },
                ].map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-white/80"
                  >
                    <spec.icon className="w-4 h-4 text-secondary" />
                    <span>{spec.label}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-secondary/20 text-secondary hover:bg-secondary hover:text-primary transition-all mt-4">
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Mobile App Integration Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-dark rounded-3xl p-6 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10 space-y-4">
              {/* Phone Illustration */}
              <div className="relative h-48 flex items-center justify-center mb-4">
                <motion.div
                  className="w-24 h-48 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl border-4 border-accent/30 flex items-center justify-center"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                >
                  <Smartphone className="w-12 h-12 text-accent" />
                </motion.div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Mobile Companion
                </h3>
                <p className="text-sm text-white/70 leading-relaxed mb-4">
                  Unified app for all IoT devices with real-time sync and
                  offline capabilities.
                </p>
              </div>

              <div className="space-y-2">
                {[
                  { icon: Wifi, label: "Cloud sync" },
                  { icon: Signal, label: "Offline mode" },
                  { icon: Radio, label: "Multi-device support" },
                ].map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-white/80"
                  >
                    <spec.icon className="w-4 h-4 text-accent" />
                    <span>{spec.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 mt-4">
                <Button
                  size="sm"
                  className="flex-1 bg-accent/20 text-accent hover:bg-accent hover:text-primary text-xs"
                >
                  iOS
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-accent/20 text-accent hover:bg-accent hover:text-primary text-xs"
                >
                  Android
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Device Pairing Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-dark rounded-3xl p-6 relative overflow-hidden"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Device Status
                </h3>
                <p className="text-sm text-white/70">
                  Connected devices in your network
                </p>
              </div>

              {/* Connected Devices List */}
              <div className="space-y-3">
                {[
                  {
                    name: "GuardianGo Band #1",
                    status: "Connected",
                    battery: 87,
                    color: "text-secondary",
                  },
                  {
                    name: "Mobile App (iOS)",
                    status: "Active",
                    battery: 62,
                    color: "text-accent",
                  },
                ].map((device, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-semibold text-white">
                        {device.name}
                      </p>
                      <div className="flex items-center gap-1">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            device.color === "text-secondary"
                              ? "bg-secondary"
                              : "bg-accent"
                          } animate-pulse`}
                        />
                        <span className="text-xs text-white/60">
                          {device.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Battery className={`w-4 h-4 ${device.color}`} />
                      <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${
                            device.color === "text-secondary"
                              ? "bg-secondary"
                              : "bg-accent"
                          }`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${device.battery}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.2 }}
                        />
                      </div>
                      <span className="text-xs text-white/70">
                        {device.battery}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pair New Device Button */}
              <Button className="w-full bg-gradient-to-r from-secondary to-accent text-primary hover:shadow-lg transition-all">
                <Bluetooth className="w-4 h-4 mr-2" />
                Pair New Device
              </Button>

              {/* Info */}
              <div className="pt-3 border-t border-white/10">
                <p className="text-xs text-white/60 text-center">
                  All devices are end-to-end encrypted
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="glass-dark rounded-3xl p-6 lg:p-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <Radio className="w-8 h-8 text-secondary animate-pulse" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">
                  IoT Network Coverage
                </h4>
                <p className="text-sm text-white/70">
                  5G-enabled network with nationwide coverage and 99.9% uptime
                </p>
              </div>
            </div>
            <div className="flex gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-secondary">500K+</div>
                <div className="text-xs text-white/60">Active Devices</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">50ms</div>
                <div className="text-xs text-white/60">Avg Latency</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">99.9%</div>
                <div className="text-xs text-white/60">Uptime</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IoTIntegration;
