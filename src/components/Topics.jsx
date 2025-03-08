import { useState } from 'preact/hooks';
import { useTranslation } from './i18n';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Crisp } from "crisp-sdk-web";


export function Topics() {
  const { t } = useTranslation();
  const [activeWeek, setActiveWeek] = useState(0);

  const handleClickOnWeek = (weekIndex) => {
    Crisp.session.setSegments(["detail_checker"]);
    Crisp.session.pushEvent("week_check" ,{ week: weekIndex});
  }

  const weeks = [
    ...t('topics.weeks', { returnObjects: true })
  ];
  const technologies = t('topics.technologies', { returnObjects: true });

  return (
    <section id="topics" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('topics.title')}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            {t('topics.subtitle')}
          </p>
        </div>

        <div className="mt-12 relative">
          {/* Progress indicator */}
          <div className="hidden md:block absolute left-0 inset-y-0 w-1 bg-gray-200">
            <div 
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
                className={`bg-white rounded-lg border ${
                  activeWeek === idx ? 'border-dark-pastel-green shadow-md' : 'border-gray-200'
                } overflow-hidden transition-all`}
              >
                <button 
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => { 
                    if (activeWeek === idx) {
                      setActiveWeek(-1);
                    } else {
                      setActiveWeek(idx);
                      handleClickOnWeek(idx);
                    }
                  }}
                >
                  <div className="flex items-center">
                    <div className="hidden md:flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-dark-pastel-green/10 text-dark-pastel-green mr-4">
                      <span className="font-medium">{idx === 0 ? '🔥' : idx + 1}</span>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">{week.title}</h3>
                  </div>
                  {activeWeek === idx ? (
                    <FaChevronUp className="h-5 w-5 text-dark-pastel-green" />
                  ) : (
                    <FaChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>

                <div>
                  {activeWeek === idx && (
                    <div
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
                        
                        {/* Week highlights */}
                        <div className="mt-6 ml-0 md:ml-12 pt-4 border-t border-gray-200">
                          <div className="flex flex-wrap gap-2">
                            {technologies?.[`week${idx + 1}`]?.map((tech, techIdx) => (
                              <span 
                                key={techIdx} 
                                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                  getTechBadgeColor(tech)
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function getTechBadgeColor(tech) {
  const colors = {
    'AI': 'bg-yellow-100 text-yellow-800',
    'Networking': 'bg-pink-100 text-pink-800',
    'Teoria': 'bg-gray-100 text-gray-800',
    'Web': 'bg-red-100 text-red-800',
    'HTML': 'bg-blue-100 text-blue-800',
    'CSS': 'bg-yellow-100 text-yellow-800',
    'Git': 'bg-green-100 text-green-800',
    'JavaScript': 'bg-purple-100 text-purple-800',
    'DOM': 'bg-pink-100 text-pink-800',
    'To-Do App': 'bg-indigo-100 text-indigo-800',
    'Arrays': 'bg-orange-100 text-orange-800',
    'LocalStorage': 'bg-teal-100 text-teal-800',
    'APIs': 'bg-red-100 text-red-800',
    'Fetch': 'bg-blue-100 text-blue-800',
    'GitHub': 'bg-green-100 text-green-800',
    'Portfolio': 'bg-gray-100 text-gray-800'
  };
  return colors[tech] || 'bg-gray-100 text-gray-800';
}