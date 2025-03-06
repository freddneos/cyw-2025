import { useTranslation } from './i18n';
import { FaCalendarAlt, FaCode, FaLaptop, FaUserFriends } from 'react-icons/fa';

export function Schedule() {
  const { t } = useTranslation();
  
  return (
    <section id="schedule" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('schedule.title')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            {t('structure.hours.title')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column: Timeline */}
          <div className="space-y-8">
            <div 
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-dark-pastel-green"
              data-aos="fade-right"
            >
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-dark-pastel-green/10 text-dark-pastel-green mr-3">
                  <FaCalendarAlt />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{t('schedule.warmup.title')}</h3>
              </div>
              <ul className="ml-14 space-y-2">
                {t('schedule.warmup.items', { returnObjects: true }).map((item, idx) => (
                  <li key={idx} className="flex items-baseline">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-dark-pastel-green mr-2"></span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div 
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-dark-pastel-green"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-dark-pastel-green/10 text-dark-pastel-green mr-3">
                  <FaLaptop />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{t('schedule.classes.title')}</h3>
              </div>
              <ul className="ml-14 space-y-2">
                {t('schedule.classes.items', { returnObjects: true }).map((item, idx) => (
                  <li key={idx} className="flex items-baseline">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-dark-pastel-green mr-2"></span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column: Module structure */}
          <div className="relative">
            <div 
              className="bg-white rounded-lg shadow-md p-8 border-t-4 border-dark-pastel-green"
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('structure.name')}</h3>
              
              <ul className="space-y-6">
                {t('structure.hours.items', { returnObjects: true }).map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="h-8 w-8 flex items-center justify-center rounded-full bg-dark-pastel-green/10 text-dark-pastel-green mr-4 mt-0.5">
                      {idx === 0 ? <FaCode /> : idx === 1 ? <FaUserFriends /> : <FaLaptop />}
                    </div>
                    <span className="text-gray-700">{item.replace(/^✅ /, '')}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block text-sm text-gray-500">Início</span>
                    <span className="block text-lg font-medium text-gray-900">Abril 2025</span>
                  </div>
                  <div className="w-16 h-0.5 bg-gray-200"></div>
                  <div>
                    <span className="block text-sm text-gray-500">Duração</span>
                    <span className="block text-lg font-medium text-gray-900">4 semanas</span>
                  </div>
                  <div className="w-16 h-0.5 bg-gray-200"></div>
                  <div>
                    <span className="block text-sm text-gray-500">Formato</span>
                    <span className="block text-lg font-medium text-gray-900">Ao vivo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="hidden md:block absolute -right-8 -bottom-8 w-16 h-16 bg-dark-pastel-green/10 rounded-full"></div>
            <div className="hidden md:block absolute -left-8 -top-8 w-24 h-24 bg-dark-pastel-green/5 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}