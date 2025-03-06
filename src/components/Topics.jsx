import { useState } from 'preact/hooks';
import { useTranslation } from './i18n';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export function Topics() {
  const { t } = useTranslation();
  const [activeWeek, setActiveWeek] = useState(0);

  const weeks = t('topics.weeks', { returnObjects: true });

  return (
    <section id="topics" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('topics.title')}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            Nosso currículo foi cuidadosamente estruturado para maximizar seu aprendizado em apenas 4 semanas.
          </p>
        </div>

        <div className="mt-12 relative">
          {/* Progress indicator */}
          <div className="hidden md:block absolute left-0 inset-y-0 w-1 bg-gray-200">
            <motion.div 
              className="absolute w-1 bg-dark-pastel-green rounded-full"
              initial={{ height: '25%', top: '0%' }}
              animate={{ 
                height: '25%', 
                top: `${activeWeek * 25}%` 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>

          <div className="space-y-6 ml-0 md:ml-8">
            {weeks.map((week, idx) => (
              <div 
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className={`bg-white rounded-lg border ${
                  activeWeek === idx ? 'border-dark-pastel-green shadow-md' : 'border-gray-200'
                } overflow-hidden transition-all`}
              >
                <button 
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setActiveWeek(idx === activeWeek ? idx : idx)}
                >
                  <div className="flex items-center">
                    <div className="hidden md:flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-dark-pastel-green/10 text-dark-pastel-green mr-4">
                      <span className="font-medium">{idx + 1}</span>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">{week.title}</h3>
                  </div>
                  {activeWeek === idx ? (
                    <FaChevronUp className="h-5 w-5 text-dark-pastel-green" />
                  ) : (
                    <FaChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>

                <AnimatePresence>
                  {activeWeek === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <ul className="ml-0 md:ml-12 space-y-3 text-gray-600">
                          {week.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start">
                              <span className="text-dark-pastel-green mr-2">·</span>
                              <span>{item.replace(/^📌 /, '')}</span>
                            </li>
                          ))}
                        </ul>
                        
                        {/* Week highlights - Static content for demonstration */}
                        <div className="mt-6 ml-0 md:ml-12 pt-4 border-t border-gray-200">
                          <div className="flex flex-wrap gap-2">
                            {idx === 0 && (
                              <>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">HTML</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">CSS</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Git</span>
                              </>
                            )}
                            {idx === 1 && (
                              <>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">JavaScript</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800">DOM</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">To-Do App</span>
                              </>
                            )}
                            {idx === 2 && (
                              <>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">JavaScript</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">Arrays</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800">LocalStorage</span>
                              </>
                            )}
                            {idx === 3 && (
                              <>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">APIs</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Fetch</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">GitHub</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Portfolio</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}