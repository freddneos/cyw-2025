import { useTranslation } from './i18n';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import mentor1 from '/mentor_1.png';
import mentor2 from '/mentor_2.png';
import { Crisp } from 'crisp-sdk-web';

export function Mentors() {
  const { t } = useTranslation();
  const mentorImages = [mentor1, mentor2];

  const handleMentorClick = (e, mentor, linkType) => {
    e.preventDefault();
    const clickedLink = linkType === 'linkedin' ? mentor.linkedin : mentor.github;
    Crisp.session.setSegments(["mentor_checker"]);
    Crisp.session.pushEvent("mentor_checker", { link: clickedLink, mentor: mentor.name });
    window.open(clickedLink, '_blank');
  };

  return (
    <section id="mentors" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('mentors.title')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            {t('mentors.subtitle')}
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
                  <img src={mentorImages[idx]} alt={mentor.name} className="h-20 w-20 rounded-full mr-6" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{mentor.name}</h3>
                    <p className="text-gray-600 mt-1">{mentor.role}</p>
                    <div className="mt-3 flex space-x-3">
                      <a 
                        href={mentor.linkedin} 
                        className="text-gray-500 hover:text-dark-pastel-green transition-colors"
                        onClick={(e) => handleMentorClick(e, mentor, 'linkedin')}
                      >
                        <FaLinkedin size={20} />
                      </a>
                      <a 
                        href={mentor.github} 
                        className="text-gray-500 hover:text-dark-pastel-green transition-colors"
                        onClick={(e) => handleMentorClick(e, mentor, 'github')}
                      >
                        <FaGithub size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <ul className="space-y-2">
                    {mentor.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center">
                        <span className="mr-2 text-dark-pastel-green">✓</span>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
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

// Update the translation file to include the LinkedIn and GitHub links for the mentors
const mentorsList = [
  {
    name: 'Frederico Bezerra',
    role: 'Software Engineer',
    linkedin: 'https://linkedin.com/in/fredericobezerra',
    github: 'https://github.com/freddneos',
    achievements: ['Achievement 1', 'Achievement 2']
  },
  {
    name: 'Yago',
    role: 'Developer',
    linkedin: 'https://www.linkedin.com/in/yago-valuche-95b7591ab/',
    github: 'https://github.com/yagovaluchedevs',
    achievements: ['Achievement 1', 'Achievement 2']
  }
];

export default mentorsList;