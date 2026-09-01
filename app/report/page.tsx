import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ReportPage() {
    return (
        <main className="min-h-screen bg-white text-slate-900">
            <Navbar />

            <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-600">
                    AWS Cloud Infrastructure Assessment
                </p>

                <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                    Technical Assessment Report
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                    Practical implementation and analysis of AWS cloud storage,
                    networking, monitoring and security solutions.
                </p>

                <div className="mt-12 grid grid-cols-3 gap-4 border-y border-slate-200 py-8 sm:max-w-xl">
                    <div>
                        <p className="text-2xl font-bold text-slate-950">02</p>
                        <p className="mt-1 text-xs text-slate-500">Core Tasks</p>
                    </div>

                    <div>
                        <p className="text-2xl font-bold text-slate-950">AWS</p>
                        <p className="mt-1 text-xs text-slate-500">Platform</p>
                    </div>

                    <div>
                        <p className="text-2xl font-bold text-slate-950">2026</p>
                        <p className="mt-1 text-xs text-slate-500">Assessment</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}