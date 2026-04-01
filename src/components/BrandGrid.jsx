import clsx from 'clsx';
import { motion } from 'framer-motion';

const brands = [
  {
    name: 'Firefox',
    highlight: true,
    note: 'Performance and lifestyle bicycles',
    logo: 'https://firefoxlife.com/cdn/shop/files/Group_1.svg?v=1756724790',
  },
  {
    name: 'KeySto',
    highlight: false,
    note: 'Reliable value-focused models',
    logo: 'https://trinitycyclesindia.com/wp-content/uploads/2023/06/KeySto-1024x576.png',
  },
  {
    name: 'Schnell',
    highlight: true,
    note: 'Stylish premium commuter range',
    logo: 'https://trinitycyclesindia.com/wp-content/uploads/2023/06/Schnell-1024x576.png',
  },
  {
    name: 'E-Motorrad',
    highlight: false,
    note: 'Electric mobility lineup',
    logo: 'https://www.google.com/s2/favicons?domain=emotorad.com&sz=128',
  },
  {
    name: 'Hero Lectro',
    highlight: true,
    note: 'Established EV mobility brand',
    logo: 'https://www.herolectro.com/on/demandware.static/Sites-heroLectro-Site/-/default/dw99c7a874/images/group-8.svg',
  },
];

export default function BrandGrid() {
  return (
    <section id="brands" className="px-4 py-10 sm:px-5 md:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 space-y-2">
          <p className="text-base font-semibold text-cycle-700">Popular Brands</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-asphalt-900 md:text-4xl">
            Top bicycle and EV names people ask for
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600">
            We keep demand-led inventory so dealers and buyers get trusted products without long sourcing cycles.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand, index) => (
            <motion.article
              key={brand.name}
              className={clsx(
                'rounded-2xl p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md',
                brand.highlight ? 'bg-cycle-50 ring-1 ring-cycle-200' : 'bg-white'
              )}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-start gap-3">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-sm ring-1 ring-slate-100">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-asphalt-900">{brand.name}</h3>
                </div>
                {brand.highlight && <span className="rounded-full bg-spark-500/20 px-3 py-1 text-base font-medium text-asphalt-900">Popular</span>}
              </div>
              <p className="mt-3 text-base text-slate-600">{brand.note}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
