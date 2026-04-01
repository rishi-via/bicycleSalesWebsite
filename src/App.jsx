import { motion } from 'framer-motion';
import { Bike, MapPin, Search } from 'lucide-react';
import HeroSection from './components/HeroSection';
import BrandGrid from './components/BrandGrid';
import ServiceHighlights from './components/ServiceHighlights';
import SeoRoadmap from './components/SeoRoadmap';

export default function App() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-cycle-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 top-40 h-96 w-96 rounded-full bg-spark-400/40 blur-3xl" />

      <HeroSection />
      <BrandGrid />
      <ServiceHighlights />
      <SeoRoadmap />

      <footer className="bg-asphalt-900 px-4 py-10 text-slate-200 sm:px-5">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-full bg-cycle-500/20 p-2">
              <Bike className="h-5 w-5 text-cycle-300" />
            </div>
            <p className="font-display text-lg tracking-tight">Kohinoor Sales Agency</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-5">
              <p className="text-base font-semibold text-white">Business Type</p>
              <p className="mt-2 text-base text-slate-300">Reseller and stockist for bicycles and EV mobility products.</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-5">
              <p className="text-base font-semibold text-white">Contact Email</p>
              <a
                className="mt-2 inline-flex min-h-[44px] items-center text-base text-cycle-300 hover:text-cycle-200"
                href="mailto:contact@kohinoorsalesagency.com"
              >
                contact@kohinoorsalesagency.com
              </a>
            </div>
            <div className="rounded-2xl bg-white/5 p-5">
              <p className="text-base font-semibold text-white">Local Search Ready</p>
              <div className="mt-2 flex items-center gap-2 text-base text-slate-300">
                <MapPin className="h-5 w-5 text-spark-400" />
                <span>Add your address and phone next for Google Business profile.</span>
              </div>
            </div>
          </div>
          <motion.div
            className="rounded-2xl border border-cycle-500/40 bg-cycle-500/10 p-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="flex items-center gap-2 text-base font-semibold text-white">
              <Search className="h-5 w-5 text-spark-400" />
              Next SEO milestone
            </p>
            <p className="mt-2 text-base text-slate-200">
              Register domain, publish this site, create a Google Business Profile, and submit sitemap to Google Search
              Console.
            </p>
          </motion.div>
          <p className="text-base text-slate-400">© {new Date().getFullYear()} Kohinoor Sales Agency. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
