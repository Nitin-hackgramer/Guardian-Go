import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Users,
  FileText,
  MapPin,
  TrendingUp,
  Bell,
  Search,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const DashboardAccess = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section
      id="dashboard"
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 8% 30%, rgba(30,58,138,0.20) 0%, transparent 50%),
           radial-gradient(circle at 25% 10%, rgba(59,130,246,0.24) 0%, transparent 60%),
           radial-gradient(circle at 45% 65%, rgba(34,211,238,0.20) 0%, transparent 60%),
           radial-gradient(circle at 60% 30%, rgba(30,58,138,0.16) 0%, transparent 55%),
           radial-gradient(circle at 85% 75%, rgba(59,130,246,0.18) 0%, transparent 65%)`,
      }}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(185 100% 50% / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(185 100% 50% / 0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
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
            <Shield className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-primary">
              Administrative Control
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-primary">
            Command <span className="text-secondary text-[#006]">Center</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unified dashboard for police, tourism officials, and emergency
            responders with real-time monitoring capabilities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Main Dashboard Card */}
            <div className="glass-dark rounded-3xl p-6 relative overflow-hidden">
              <div className="space-y-6">
                {/* Header with Tabs */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">
                    Live Dashboard
                  </h3>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/20 rounded-full">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-xs font-semibold text-accent">
                      Live
                    </span>
                  </div>
                  {/* Tabs */}
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {["Overview", "Tourists", "Incidents", "Alerts"].map(
                      (tab, i) => (
                        <motion.button
                          key={tab}
                          initial={{ opacity: 0, y: -10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          onClick={() => setActiveTab(i)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                            activeTab === i
                              ? "bg-secondary text-primary"
                              : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          {tab}
                        </motion.button>
                      )
                    )}
                  </div>
                </div>

                {/* Heat Map Visualization */}
                <div className="bg-white/5 rounded-2xl p-4 h-64 relative overflow-hidden">
                  <div className="w-full h-full rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5234567890123!2d77.0945627!3d28.7352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb5b5b5b5b5b%3A0x0!2sMaujpur%2CDelhi%20110053!5e0!3m2!1sen!2sin!4v1234567890"
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      style={{ borderRadius: "0.5rem" }}
                    />
                  </div>

                  <div className="absolute top-4 left-4 flex gap-2 pointer-events-none">
                    <div className="flex items-center gap-1 px-2 py-1 bg-black/50 rounded text-xs text-white">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span>High Traffic</span>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-black/50 rounded text-xs text-white">
                      <div className="w-2 h-2 rounded-full bg-destructive" />
                      <span>Alert Zone</span>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    {
                      label: "Active Tourists",
                      value: "8,947",
                      trend: "+12%",
                      color: "text-secondary",
                    },
                    {
                      label: "Incidents",
                      value: "2",
                      trend: "-8%",
                      color: "text-accent",
                    },
                    {
                      label: "Responders",
                      value: "156",
                      trend: "+5%",
                      color: "text-secondary",
                    },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-secondary/20 rounded-xl p-3 cursor-pointer hover:bg-secondary/30 transition-all"
                    >
                      <p className="text-xs text-white/60 mb-1">{stat.label}</p>
                      <p className={`text-xl font-bold ${stat.color}`}>
                        {stat.value}
                      </p>
                      <p className="text-xs text-white/70 mt-1">{stat.trend}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Search & Filter Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-dark rounded-2xl p-5"
            >
              <div className="flex gap-2">
                <div className="flex-1 flex items-center gap-2 bg-white/5 rounded-xl px-4 py-3">
                  <Search className="w-5 h-5 text-white/50" />
                  <input
                    type="text"
                    placeholder="Search by Tourist ID, Location..."
                    className="flex-1 bg-transparent text-white text-sm outline-none placeholder:text-white/50"
                  />
                </div>
                <button className="w-12 h-12 bg-secondary/20 hover:bg-secondary/30 rounded-xl flex items-center justify-center transition-colors">
                  <Filter className="w-5 h-5 text-secondary" />
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {[
                {
                  icon: FileText,
                  title: "E-FIR Management",
                  description:
                    "File and track electronic First Information Reports with blockchain verification.",
                  action: "File E-FIR",
                  color: "text-secondary",
                  bgColor: "bg-secondary/10",
                  borderColor: "border-secondary/30",
                },
                {
                  icon: MapPin,
                  title: "Live Tourist Tracking",
                  description:
                    "Real-time GPS monitoring of all registered tourists with geofencing alerts.",
                  action: "View Map",
                  color: "text-accent",
                  bgColor: "bg-accent/10",
                  borderColor: "border-accent/30",
                },
                {
                  icon: Users,
                  title: "Tourist Clusters",
                  description:
                    "Identify high-density tourist zones for resource allocation and safety planning.",
                  action: "View Clusters",
                  color: "text-secondary",
                  bgColor: "bg-secondary/10",
                  borderColor: "border-secondary/30",
                },
                {
                  icon: Bell,
                  title: "Alert Broadcast",
                  description:
                    "Send mass notifications to tourists in specific zones during emergencies.",
                  action: "Send Alert",
                  color: "text-destructive",
                  bgColor: "bg-destructive/10",
                  borderColor: "border-destructive/30",
                },
                {
                  icon: TrendingUp,
                  title: "Analytics & Reports",
                  description:
                    "Generate detailed reports on safety trends, response times, and tourist patterns.",
                  action: "View Reports",
                  color: "text-accent",
                  bgColor: "bg-accent/10",
                  borderColor: "border-accent/30",
                },
              ].map((action, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`glass-dark rounded-2xl p-5 border-l-4 ${action.borderColor} hover:bg-black/25 transition-all group`}
                >
                  <div className="flex gap-4">
                    <div
                      className={`w-14 h-14 rounded-xl ${action.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <action.icon className={`w-7 h-7 ${action.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {action.title}
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed mb-3">
                        {action.description}
                      </p>
                      <Button
                        size="sm"
                        className={`${action.bgColor} ${action.color} hover:opacity-80 border-0`}
                      >
                        {action.action} →
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Access Control Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 glass-dark rounded-3xl p-6 lg:p-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">
                  Authorized Personnel Only
                </h4>
                <p className="text-sm text-white/70">
                  Multi-level access control with role-based permissions
                  (Police, Tourism Dept, Emergency Services)
                </p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-secondary to-accent text-primary hover:shadow-lg transition-all whitespace-nowrap">
              Request Dashboard Access
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardAccess;
