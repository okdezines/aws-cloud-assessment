import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AwsServices from "@/components/AwsServices";
import ProjectOverview from "@/components/ProjectOverview";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <AwsServices />
      <ProjectOverview />
    </main>
  );
}