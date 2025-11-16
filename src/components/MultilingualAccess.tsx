import { motion } from "framer-motion";
import { Languages, Mic, Globe, Volume2, MessageSquare, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const MultilingualAccess = () => {
  const languages = [
    { code: "EN", name: "English", flag: "🇬🇧" },
    { code: "HI", name: "हिंदी", flag: "🇮🇳" },
    { code: "BN", name: "বাংলা", flag: "🇮🇳" },
    { code: "TE", name: "తెలుగు", flag: "🇮🇳" },
    { code: "MR", name: "मराठी", flag: "🇮🇳" },
    { code: "TA", name: "தமிழ்", flag: "🇮🇳" },
    { code: "GU", name: "ગુજરાતી", flag: "🇮🇳" },
    { code: "KN", name: "ಕನ್ನಡ", flag: "🇮🇳" },
    { code: "ML", name: "മലയാളം", flag: "🇮🇳" },
    { code: "PA", name: "ਪੰਜਾਬੀ", flag: "🇮🇳" },
    { code: "OD", name: "ଓଡ଼ିଆ", flag: "🇮🇳" },
  ];

  return (
    <section className="py-20 lg:py-32 bg-primary relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, hsl(185 100% 50% / 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, hsl(30 100% 50% / 0.3) 0%, transparent 50%)`,
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
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
            <Languages className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-white">Universal Access</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white">
            Speak Your <span className="text-secondary text-[#000265]">Language</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Access GuardianGo in 11+ Indian languages with real-time translation and voice-enabled emergency support.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Language Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-secondary" />
                <h3 className="text-xl font-bold text-white">Select Your Language</h3>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {languages.map((lang, index) => (
                  <motion.button
                    key={lang.code}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass-dark rounded-xl p-3 hover:bg-white/10 transition-all group"
                  >
                    <div className="text-2xl mb-1">{lang.flag}</div>
                    <div className="text-xs font-semibold text-white group-hover:text-secondary transition-colors">
                      {lang.name}
                    </div>
                  </motion.button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-white/70 text-center mb-4">
                  Can't find your language? We're constantly adding more!
                </p>
                <Button className="w-full bg-secondary/20 text-secondary hover:bg-secondary hover:text-primary transition-all">
                  Request New Language
                </Button>
              </div>
            </div>

            {/* Real-time Translation Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass rounded-2xl p-5"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Real-Time Translation</h4>
                  <p className="text-sm text-white/70">
                    Instant translation for emergency calls and text messages
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Voice Input Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Voice Input Card */}
            <div className="glass rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 space-y-6">
                <div className="text-center space-y-4">
                  <motion.div
                    className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-secondary/30 to-accent/30 relative"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <Mic className="w-12 h-12 text-white" />
                    
                    {/* Pulse Rings */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 border-2 border-secondary/30 rounded-full"
                        animate={{
                          scale: [1, 1.8],
                          opacity: [0.6, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.6,
                        }}
                      />
                    ))}
                  </motion.div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Voice-Activated SOS</h3>
                    <p className="text-sm text-white/70 max-w-xs mx-auto">
                      Say "Help" in any supported language to trigger emergency response
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-sm text-white/60 mb-2">Try saying:</p>
                  <div className="space-y-2">
                    {[
                      { text: "मदद करो", translation: "(Hindi: Help)" },
                      { text: "সাহায্য করুন", translation: "(Bengali: Help)" },
                      { text: "உதவி", translation: "(Tamil: Help)" },
                    ].map((phrase, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 bg-white/5 rounded-lg p-3"
                      >
                        <Volume2 className="w-4 h-4 text-secondary flex-shrink-0" />
                        <div>
                          <p className="text-white font-semibold">{phrase.text}</p>
                          <p className="text-xs text-white/60">{phrase.translation}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Accessibility Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Headphones,
                  title: "Audio Guidance",
                  description: "Turn-by-turn navigation in your language",
                  color: "text-secondary",
                  bgColor: "bg-secondary/20",
                },
                {
                  icon: MessageSquare,
                  title: "Text-to-Speech",
                  description: "Read all safety alerts aloud automatically",
                  color: "text-accent",
                  bgColor: "bg-accent/20",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="glass rounded-2xl p-4 hover:bg-white/5 transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-3`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1">{feature.title}</h4>
                  <p className="text-xs text-white/70 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="glass rounded-3xl p-6 lg:p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "11+", label: "Languages Supported", icon: Languages },
              { number: "95%", label: "Translation Accuracy", icon: Globe },
              { number: "<1s", label: "Voice Recognition Time", icon: Mic },
              { number: "24/7", label: "Multilingual Support", icon: Headphones },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <stat.icon className="w-8 h-8 text-secondary mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MultilingualAccess;
