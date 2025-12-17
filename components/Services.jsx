'use client';

import { SERVICES } from '@/lib/constants';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

export default function Services() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: descriptionRef, isVisible: descriptionVisible } = useScrollAnimation();

  return (
    <section id="servizi" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title Section */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2
            ref={titleRef}
            className={`text-4xl font-bold mb-6 transition-all duration-700 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            I Nostri Servizi
          </h2>
          <p
            ref={descriptionRef}
            className={`text-xl text-gray-300 transition-all duration-700 delay-200 ${
              descriptionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Soluzioni complete per far crescere il tuo business online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation();

  return (
    <div
      ref={cardRef}
      className={`group bg-slate-700 border border-slate-600 rounded-lg p-8 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 hover:translate-y-[-4px] transition-all duration-300 cursor-default ${
        cardVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      style={{
        transitionDelay: cardVisible ? `${index * 100}ms` : '0ms',
      }}
    >
      {/* Icon */}
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
        {service.description}
      </p>

      {/* Features List */}
      <div className="space-y-2 mb-6">
        {service.features.map((feature, fIdx) => (
          <div
            key={fIdx}
            className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
            style={{
              transitionDelay: `${fIdx * 50}ms`,
            }}
          >
            <span className="text-cyan-400 group-hover:scale-125 transition-transform duration-300 inline-block">
              ✓
            </span>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA Link */}
      <a
        href="#contatti"
        className="inline-block text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
      >
        Scopri di più →
      </a>
    </div>
  );
}
