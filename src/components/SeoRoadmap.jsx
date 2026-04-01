import { motion } from 'framer-motion';
import { Globe, ListChecks, SearchCheck, Store } from 'lucide-react';

const steps = [
  {
    title: 'Launch your website on a domain',
    detail: 'Go live with a branded domain and SSL so Google can crawl and index your pages correctly.',
    icon: Globe,
  },
  {
    title: 'Create your Google Business Profile',
    detail: 'Add accurate address, phone, business hours, categories, and high-quality storefront/product photos.',
    icon: Store,
  },
  {
    title: 'Submit sitemap and track search performance',
    detail: 'Use Google Search Console to submit sitemap and monitor keyword rankings, impressions, and clicks.',
    icon: SearchCheck,
  },
  {
    title: 'Publish consistent local content',
    detail: 'Add pages for brands, service areas, and FAQs so your site earns relevance for buyer searches.',
    icon: ListChecks,
  },
];

export default function SeoRoadmap() {
  return (
    <section className="px-4 py-10 sm:px-5 md:py-14">
      <div className="mx-auto max-w-6xl rounded-3xl bg-asphalt-800 p-6 text-white shadow-xl md:p-8">
        <div className="space-y-2">
          <p className="text-base font-semibold text-spark-400">Rank Higher in Google</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Your practical SEO roadmap after this launch
          </h2>
          <p className="max-w-2xl text-base text-slate-300">
            This website is your first step. These are the next actions that move you toward stronger local and brand search
            visibility.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              className="rounded-2xl bg-white/10 p-5"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <div className="mb-3 inline-flex rounded-xl bg-spark-500/20 p-3">
                <step.icon className="h-6 w-6 text-spark-400" />
              </div>
              <h3 className="font-display text-2xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-base text-slate-200">{step.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
