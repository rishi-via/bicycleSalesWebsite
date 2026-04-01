import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, Bike, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="px-4 pb-10 pt-8 sm:px-5 md:pb-16 md:pt-12">
      <motion.div
        className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-cycle-700 via-cycle-600 to-asphalt-800 p-6 text-white shadow-xl md:p-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="space-y-6">
          <div className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-base font-medium">
            <BadgeCheck className="h-5 w-5 text-spark-400" />
            Trusted Bicycle Reseller and Stockist
          </div>
          <div className="space-y-3">
            <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Kohinoor Sales Agency
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-cycle-100 md:text-lg">
              Reliable supply of high-demand bicycles and electric mobility brands for dealers, businesses, and retail
              buyers.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:contact@kohinoorsalesagency.com"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-xl bg-spark-500 px-6 py-3 text-base font-semibold text-asphalt-900 transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
            >
              Start an Enquiry
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#brands"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-xl bg-white/15 px-6 py-3 text-base font-semibold transition-all duration-200 hover:bg-white/25 active:scale-[0.98]"
            >
              Explore Brands
              <Bike className="h-5 w-5" />
            </a>
          </div>
          <div className="grid gap-3 pt-1 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-base font-semibold">Wide Product Mix</p>
              <p className="mt-1 text-base text-cycle-100">Standard, premium, and electric options under one source.</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="flex items-center gap-2 text-base font-semibold">
                <Zap className="h-5 w-5 text-spark-400" />
                Fast Fulfillment
              </p>
              <p className="mt-1 text-base text-cycle-100">Built for repeat orders and seasonal demand spikes.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
