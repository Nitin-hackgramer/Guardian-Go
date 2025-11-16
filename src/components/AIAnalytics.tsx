import { motion } from "framer-motion";
import { Brain, TrendingUp, AlertTriangle, Activity, Zap, BarChart3, LineChart } from "lucide-react";

const AIAnalytics = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-blue-50 to-cyan-100 relative overflow-hidden" style={{
      backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.25) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(34, 211, 238, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 40% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 10% 10%, rgba(30, 58, 138, 0.12) 0%, transparent 50%),
          radial-gradient(circle at 90% 20%, rgba(30, 58, 138, 0.1) 0%, transparent 50%)`
    }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(30deg, hsl(185 100% 50% / 0.1) 12%, transparent 12.5%, transparent 87%, hsl(185 100% 50% / 0.1) 87.5%, hsl(185 100% 50% / 0.1)),
                           linear-gradient(150deg, hsl(185 100% 50% / 0.1) 12%, transparent 12.5%, transparent 87%, hsl(185 100% 50% / 0.1) 87.5%, hsl(185 100% 50% / 0.1))`,
            backgroundSize: "80px 140px",
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
            <Brain className="w-4 h-4 text-secondary animate-pulse" />
            <span className="text-sm font-medium text-primary">AI-Powered Insights</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-primary">
            Predictive <span className="text-secondary">Analytics</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Machine learning algorithms detect patterns, predict risks, and optimize tourist safety in real-time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Main Analytics Card */}
            <div className="glass-dark rounded-3xl p-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Threat Detection Dashboard</h3>
                    <p className="text-sm text-white/60">Last updated: 2 seconds ago</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/20 rounded-full">
                    <Activity className="w-4 h-4 text-accent animate-pulse" />
                    <span className="text-xs font-semibold text-accent">Live</span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Active Tourists", value: "12,847", trend: "+8.2%", color: "text-secondary" },
                    { label: "Incidents Today", value: "3", trend: "-12%", color: "text-accent" },
                    { label: "Response Time", value: "1.8m", trend: "-5%", color: "text-secondary" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 rounded-xl p-4">
                      <p className="text-xs text-white/60 mb-1">{stat.label}</p>
                      <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <TrendingUp className={`w-3 h-3 ${stat.trend.startsWith('+') ? 'text-accent' : 'text-secondary'}`} />
                        <span className="text-xs text-white/70">{stat.trend}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart Mockup */}
                <div className="bg-white/5 rounded-xl p-4 h-48 flex items-end gap-2">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-secondary to-secondary/50 rounded-t"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${Math.random() * 80 + 20}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.5 }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Anomaly Alert Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-dark rounded-2xl p-5 border-l-4 border-accent"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-accent animate-pulse" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-bold mb-1">AI Anomaly Detected</h4>
                  <p className="text-sm text-white/70 mb-3">
                    Unusual tourist movement pattern flagged in Zone 4-B (Paharganj area)
                  </p>
                  <div className="flex gap-2">
                    <button className="text-xs font-semibold text-accent hover:underline">
                      View Details →
                    </button>
                    <button className="text-xs font-semibold text-white/60 hover:text-white">
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {[
              {
                icon: Brain,
                title: "Pattern Recognition",
                description: "AI analyzes tourist movement patterns to predict potential safety concerns before they occur.",
                metrics: ["98.7% accuracy", "2M+ data points analyzed daily"],
                color: "text-secondary",
                bgColor: "bg-secondary/10",
              },
              {
                icon: BarChart3,
                title: "Crowd Density Heatmaps",
                description: "Real-time visualization of tourist concentration zones with automated overflow alerts.",
                metrics: ["500+ zones monitored", "Live updates every 30s"],
                color: "text-accent",
                bgColor: "bg-accent/10",
              },
              {
                icon: Zap,
                title: "Predictive Risk Scoring",
                description: "Machine learning models assign risk scores to locations based on historical and real-time data.",
                metrics: ["10-minute predictions", "Multi-factor analysis"],
                color: "text-secondary",
                bgColor: "bg-secondary/10",
              },
              {
                icon: LineChart,
                title: "Trend Analysis",
                description: "Long-term safety trends, seasonal patterns, and incident forecasting for proactive measures.",
                metrics: ["5-year historical data", "Seasonal predictions"],
                color: "text-accent",
                bgColor: "bg-accent/10",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-dark rounded-2xl p-5 hover:text-red-600 hover:bg-black/25 transition-all group"
              >
                <div className="flex gap-4">
                  <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed mb-3">{feature.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {feature.metrics.map((metric, i) => (
                        <div key={i} className="px-2 py-1 bg-white/5 rounded text-xs text-white/80">
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIAnalytics;
