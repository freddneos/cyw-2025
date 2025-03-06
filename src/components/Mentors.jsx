import { useTranslation } from './i18n';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export function Mentors() {
  const { t } = useTranslation();
  
  return (
    <section id="mentors" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('mentors.title')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Aprenda com profissionais experientes que atuam no mercado
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {t('mentors.list', { returnObjects: true }).map((mentor, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 transition-all hover:shadow-lg"
              data-aos="fade-up" 
              data-aos-delay={idx * 100}
            >
              <div className="p-8">
                <div className="flex items-center">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-dark-pastel-green/80 to-dark-pastel-green flex items-center justify-center text-white text-2xl font-bold mr-6">
                    {mentor.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{mentor.name}</h3>
                    <p className="text-gray-600 mt-1">{mentor.role}</p>
                    <div className="mt-3 flex space-x-3">
                      <a href="#" className="text-gray-500 hover:text-dark-pastel-green transition-colors">
                        <FaLinkedin size={20} />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-dark-pastel-green transition-colors">
                        <FaGithub size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <ul className="space-y-2">
                    {idx === 0 ? (
                      <>
                        <li className="flex items-center">
                          <span className="mr-2 text-dark-pastel-green">✓</span>
                          <span className="text-gray-600">Mais de 10 anos de experiência em desenvolvimento</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2 text-dark-pastel-green">✓</span>
                          <span className="text-gray-600">Especialista em JavaScript e tecnologias web</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2 text-dark-pastel-green">✓</span>
                          <span className="text-gray-600">Já treinou mais de 500 estudantes</span>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="flex items-center">
                          <span className="mr-2 text-dark-pastel-green">✓</span>
                          <span className="text-gray-600">Desenvolvedor full-stack há 8 anos</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2 text-dark-pastel-green">✓</span>
                          <span className="text-gray-600">Especialista em ensino e metodologias ágeis</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2 text-dark-pastel-green">✓</span>
                          <span className="text-gray-600">Autor de diversos cursos online de programação</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}