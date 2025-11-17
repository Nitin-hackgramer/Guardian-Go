import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Phone,
    AlertCircle,
    MapPin,
    Clock,
    Shield,
    Siren,
    Hospital,
    Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const EmergencySOS = () => {
    const [sosActive, setSosActive] = useState(false);

    const handleSOSClick = () => {
        setSosActive(true);
        setTimeout(() => setSosActive(false), 5000);
    };

    return (
        <section
            id="emergency"
            className="py-20 lg:py-32 bg-primary relative overflow-hidden"
        >
            {/* Animated Background */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 50% 50%, hsl(185 100% 50% / 0.05) 0%, transparent 50%)`,
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
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
                        <Siren className="w-4 h-4 text-destructive animate-pulse" />
                        <span className="text-sm font-medium text-white">
                            Emergency Response
                        </span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-bold text-white">
                        Panic Button &{" "}
                        <span className="text-secondary text-[#000265]">Instant SOS</span>
                    </h2>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto">
                        One-tap emergency alert system with instant police
                        dispatch and real-time location tracking.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* SOS Button Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative flex items-center justify-center"
                    >
                        {/* Pulsing Rings */}
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-64 h-64 rounded-full border-2 border-destructive/30"
                                animate={{
                                    scale: [1, 1.5 + i * 0.3],
                                    opacity: [0.6, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.4,
                                }}
                            />
                        ))}

                        {/* Main SOS Button */}
                        <motion.div
                            className="relative z-10"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                onClick={() => {
                                    handleSOSClick();

                                    const emergencyNumber = "7817060887"; // dial target
                                    const whatsappNumber = "919968358455"; // replace with full intl format

                                    const dialPhone = () => {
                                        window.location.href = `tel:${emergencyNumber}`;
                                    };

                                    const sendWhatsApp = (coords?: {
                                        lat: number;
                                        lon: number;
                                    }) => {
                                        const ts = new Date().toISOString();
                                        const locationPart = coords
                                            ? `Location: https://maps.google.com/?q=${coords.lat},${coords.lon}\nLat: ${coords.lat}\nLon: ${coords.lon}`
                                            : "Location: Unavailable";
                                        const msg = `EMERGENCY SOS ACTIVATED\nTime: ${ts}\nDial Number: ${emergencyNumber}\n${locationPart}\nPlease dispatch immediate assistance.`;
                                        const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                            msg
                                        )}`;
                                        window.open(waUrl, "_blank");
                                    };

                                    if (navigator.geolocation) {
                                        navigator.geolocation.getCurrentPosition(
                                            (pos) => {
                                                sendWhatsApp({
                                                    lat: pos.coords.latitude,
                                                    lon: pos.coords.longitude,
                                                });
                                                setTimeout(dialPhone, 400);
                                            },
                                            () => {
                                                sendWhatsApp();
                                                setTimeout(dialPhone, 400);
                                            },
                                            {
                                                enableHighAccuracy: true,
                                                timeout: 5000,
                                            }
                                        );
                                    } else {
                                        sendWhatsApp();
                                        setTimeout(dialPhone, 400);
                                    }
                                }}
                                size="lg"
                                className="w-64 h-64 rounded-full bg-gradient-to-br from-destructive to-destructive/80 text-white hover:shadow-2xl hover:shadow-destructive/50 transition-all glow-sos group"
                                aria-label="Activate SOS, share on WhatsApp, and call emergency number"
                            >
                                <div className="flex flex-col items-center gap-4">
                                    <Phone className="w-20 h-20 animate-pulse" />
                                    <div className="text-center">
                                        <div className="text-3xl font-bold mb-1">
                                            SOS
                                        </div>
                                        <div className="text-sm opacity-90">
                                            Press for Emergency
                                        </div>
                                    </div>
                                </div>
                            </Button>
                        </motion.div>

                        {/* Glow Effect */}
                        <motion.div
                            className="absolute inset-0 rounded-full bg-destructive/30 blur-2xl -z-10"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                        />

                        {/* Info Cards */}
                        <motion.div
                            className="absolute top-0 left-0 glass-dark rounded-2xl p-4"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-secondary" />
                                <div>
                                    <p className="text-xs text-white/60">
                                        Response Time
                                    </p>
                                    <p className="text-sm font-bold text-white">
                                        &lt; 2 mins
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute bottom-0 right-0 glass-dark rounded-2xl p-4"
                            animate={{ y: [0, 10, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: 1,
                            }}
                        >
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-accent" />
                                <div>
                                    <p className="text-xs text-white/60">
                                        Active Responders
                                    </p>
                                    <p className="text-sm font-bold text-white">
                                        1000+
                                    </p>
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
                                icon: Phone,
                                title: "One-Tap Emergency Call",
                                description:
                                    "Instantly connects to police, ambulance, and tourist helpline simultaneously.",
                                color: "text-destructive",
                                bgColor: "bg-destructive/20",
                            },
                            {
                                icon: MapPin,
                                title: "Real-Time Location Sharing",
                                description:
                                    "Your exact GPS coordinates are shared with emergency services and emergency contacts.",
                                color: "text-secondary",
                                bgColor: "bg-secondary/20",
                            },
                            {
                                icon: Shield,
                                title: "Silent Alert Mode",
                                description:
                                    "Discreet SOS trigger for dangerous situations without alerting perpetrators.",
                                color: "text-accent",
                                bgColor: "bg-accent/20",
                            },
                            {
                                icon: Hospital,
                                title: "Medical Info Access",
                                description:
                                    "Responders get instant access to your medical history and emergency contacts.",
                                color: "text-secondary",
                                bgColor: "bg-secondary/20",
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.5,
                                }}
                                className="flex gap-4 p-4 glass rounded-2xl hover:bg-white/10 transition-colors group"
                            >
                                <div
                                    className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                                >
                                    <feature.icon
                                        className={`w-7 h-7 ${feature.color}`}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-white/70 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Emergency Response Mockup */}
                <AnimatePresence>
                    {sosActive && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 50 }}
                            className="fixed bottom-8 right-8 z-50 glass-dark rounded-3xl p-6 max-w-sm shadow-2xl border-2 border-destructive"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                                        <AlertCircle className="w-6 h-6 text-destructive animate-pulse" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">
                                            SOS Activated
                                        </h4>
                                        <p className="text-xs text-white/60">
                                            Emergency services notified
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-white/70">
                                            Status
                                        </span>
                                        <span className="text-destructive font-semibold">
                                            ACTIVE
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-white/70">
                                            Police ETA
                                        </span>
                                        <span className="text-white font-semibold">
                                            1 min 45 sec
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-white/70">
                                            Location
                                        </span>
                                        <span className="text-white font-semibold">
                                            Shared ✓
                                        </span>
                                    </div>
                                </div>

                                <div className="pt-3 border-t border-white/10">
                                    <p className="text-xs text-white/60 mb-3">
                                        Help is on the way. Stay calm and safe.
                                    </p>
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="w-full border-white/30 text-black hover:bg-white/10 hover:text-orange-700 transition-all"
                                        onClick={() => setSosActive(false)}
                                    >
                                        Cancel Alert
                                    </Button>
                                </div>
                            </div>

                            <motion.div
                                className="absolute -inset-1 bg-destructive/30 rounded-3xl blur-xl -z-10"
                                animate={{
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default EmergencySOS;
