import { motion } from 'framer-motion';
import { Building2, CircleDollarSign, PackageCheck } from 'lucide-react';

const services = [
  {
    title: 'Bulk Stockist Supply',
    description: 'Consistent stock support for local stores and partner dealers planning monthly demand.',
    icon: PackageCheck,
  },
  {
    title: 'Retail Reseller Support',
    description: 'Help customers choose the right model with quick availability across trusted brands.',
    icon: CircleDollarSign,
  },
  {
    title: 'Dealer Growth Partnership',
    description: 'Product mix guidance for cities and towns with changing commuter and EV buying trends.',
    icon: Building2,
  },
];

export default function ServiceHighlights() {
  return (
    <section className="bg-white px-4 py-10 sm:px-5 md:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 space-y-2">
          <p className="text-base font-semibold text-cycle-700">What We Offer</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-asphalt-900 md:text-4xl">
            Built for retailers, businesses, and repeat buyers
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((item, index) => (
            <motion.article
              key={item.title}
              className="rounded-2xl bg-slate-50 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <div className="inline-flex rounded-xl bg-cycle-100 p-3">
                <item.icon className="h-6 w-6 text-cycle-700" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-asphalt-900">{item.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-slate-600">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
