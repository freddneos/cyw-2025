import { useTranslation } from './i18n';
import { FaLaptopCode, FaUsers, FaCalendarAlt } from 'react-icons/fa';

export function About() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <FaLaptopCode className="h-6 w-6" />,
      title: "Aulas Práticas",
      description: "Foco em aprendizado prático com projetos reais desde o primeiro dia."
    },
    {
      icon: <FaUsers className="h-6 w-6" />,
      title: "Comunidade Exclusiva",
      description: "Acesso a uma comunidade de estudantes e mentores para networking e suporte."
    },
    {
      icon: <FaCalendarAlt className="h-6 w-6" />,
      title: "Mentoria ao Vivo",
      description: "Sessões de mentoria ao vivo para tirar dúvidas e receber feedback sobre seus projetos."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('about.title')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            {t('about.description')}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative p-8 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-12 w-12 flex items-center justify-center rounded-md bg-dark-pastel-green/10 text-dark-pastel-green mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-base text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl overflow-hidden shadow-md">
          <div className="px-6 py-12 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{t('objective.title')}</h3>
                <p className="mt-4 text-lg text-gray-600">{t('objective.description')}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{t('strategy.title')}</h3>
                <ul className="mt-4 space-y-3">
                  {t('strategy.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} className="flex">
                      <span className="text-dark-pastel-green mr-2">✓</span>
                      <span className="text-gray-600">{item.replace(/^✅ /, '')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}