import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DigitalID from "@/components/DigitalID";
import GeoFencing from "@/components/GeoFencing";
import EmergencySOS from "@/components/EmergencySOS";
import AIAnalytics from "@/components/AIAnalytics";
import IoTIntegration from "@/components/IoTIntegration";
import MultilingualAccess from "@/components/MultilingualAccess";
import DashboardAccess from "@/components/DashboardAccess";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <DigitalID />
      <GeoFencing />
      <EmergencySOS />
      <AIAnalytics />
      <IoTIntegration />
      <MultilingualAccess />
      <DashboardAccess />
      <Footer />
    </div>
  );
};

export default Index;
