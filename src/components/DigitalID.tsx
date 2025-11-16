import { motion } from "framer-motion";
import {
    CreditCard,
    Shield,
    Clock,
    CheckCircle,
    Fingerprint,
    QrCode,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const DigitalID = () => {
    return (
        <section
            id="features"
            className="py-20 lg:py-32 bg-background relative overflow-hidden"
            style={{
                background: `radial-gradient(circle at 8% 30%, rgba(30,58,138,0.20) 0%, transparent 50%), radial-gradient(circle at 25% 10%, rgba(59,130,246,0.24) 0%, transparent 60%), radial-gradient(circle at 45% 65%, rgba(34,211,238,0.20) 0%, transparent 60%), radial-gradient(circle at 60% 30%, rgba(30,58,138,0.16) 0%, transparent 55%), radial-gradient(circle at 85% 75%, rgba(59,130,246,0.18) 0%, transparent 65%)`,
            }}
        >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl" />

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
                        <Shield className="w-4 h-4 text-secondary " />
                        <span className="text-sm font-medium text-primary">
                            Blockchain Verified
                        </span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-bold text-primary">
                        Digital{" "}
                        <span className="text-secondary-foreground ">
                            Tourist ID
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Secure, verified, and instant. Your digital identity for
                        safe travels across India.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* ID Card Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="glass-dark rounded-3xl p-8 relative overflow-hidden group hover:scale-105 transition-transform duration-500">
                            {/* Card Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 space-y-6">
                                {/* Card Header */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                                            <Shield className="w-6 h-6 text-secondary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white">
                                                GuardianGo ID
                                            </h3>
                                            <p className="text-xs text-white/60">
                                                Verified Tourist
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                                        <QrCode className="w-12 h-12 text-white/80" />
                                    </div>
                                </div>

                                {/* Profile Section */}
                                <div className="flex items-center gap-4 py-4 border-y border-white/10">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center text-2xl font-bold text-white">
                                      AS
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white">
                                            Arjun Sharma
                                        </h4>
                                        <p className="text-sm text-white/70">
                                            Tourist ID: GG2025-IN-4521
                                        </p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <CheckCircle className="w-4 h-4 text-accent" />
                                            <span className="text-xs text-accent font-medium">
                                                Blockchain Verified
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Details Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <p className="text-xs text-white/60">
                                            Nationality
                                        </p>
                                        <p className="text-sm font-semibold text-white">
                                            Indian
                                        </p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs text-white/60">
                                            Valid Until
                                        </p>
                                        <p className="text-sm font-semibold text-white">
                                            Dec 31, 2025
                                        </p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs text-white/60">
                                            Document
                                        </p>
                                        <p className="text-sm font-semibold text-white">
                                            Aadhaar Linked
                                        </p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs text-white/60">
                                            Status
                                        </p>
                                        <div className="flex items-center gap-1">
                                            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                            <p className="text-sm font-semibold text-accent">
                                                Active
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Biometric Badge */}
                                <div className="flex items-center justify-center gap-2 py-3 bg-white/5 rounded-xl">
                                    <Fingerprint className="w-5 h-5 text-secondary" />
                                    <span className="text-sm text-white/80">
                                        Biometric Enabled
                                    </span>
                                </div>
                            </div>

                            {/* Shine Effect */}
                            <motion.div
                                className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                animate={{
                                    left: ["100%", "-100%"],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                }}
                            />
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl"
                            animate={{ scale: [1.2, 1, 1.2] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                    </motion.div>

                    {/* Features List */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        {[
                            {
                                icon: CreditCard,
                                title: "Instant Generation",
                                description:
                                    "Create your secure digital ID in under 2 minutes with KYC verification.",
                                color: "text-secondary",
                                bgColor: "bg-secondary/10",
                            },
                            {
                                icon: Shield,
                                title: "Blockchain Security",
                                description:
                                    "Immutable records stored on blockchain ensure tamper-proof verification.",
                                color: "text-accent",
                                bgColor: "bg-accent/10",
                            },
                            {
                                icon: Clock,
                                title: "Trip Validity",
                                description:
                                    "Auto-calculated validity period based on your travel dates and destinations.",
                                color: "text-secondary",
                                bgColor: "bg-secondary/10",
                            },
                            {
                                icon: CheckCircle,
                                title: "Multi-Factor Auth",
                                description:
                                    "Biometric, OTP, and document verification for maximum security.",
                                color: "text-accent",
                                bgColor: "bg-accent/10",
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.5,
                                }}
                                className="flex gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-colors group"
                            >
                                <div
                                    className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                                >
                                    <feature.icon
                                        className={`w-7 h-7 ${feature.color}`}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-primary mb-1">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}

                        <Button
                            size="lg"
                            className="w-full bg-gradient-to-r from-secondary to-secondary/80 text-primary hover:shadow-lg hover:shadow-secondary/30 transition-all mt-8"
                        >
                            <Shield className="w-5 h-5 mr-2" />
                            Generate Your Tourist ID
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DigitalID;
