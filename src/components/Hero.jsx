import { useTranslation } from './i18n';
import { motion } from 'framer-motion';
import { FaRocket, FaArrowRight } from 'react-icons/fa';

export function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-24">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30">
          <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-blue-300 mix-blend-multiply blur-3xl"></div>
          <div className="absolute top-40 right-1/4 w-80 h-80 rounded-full bg-purple-300 mix-blend-multiply blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full bg-dark-pastel-green/30 mix-blend-multiply blur-3xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12 pb-20 md:py-28 lg:py-36">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column: Text content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center px-3 py-1 mb-4 bg-dark-pastel-green/10 border border-dark-pastel-green/20 rounded-full text-dark-pastel-green text-sm font-medium">
              <FaRocket className="mr-2" /> {t('structure.name')}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              {t('hero.title')}
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 max-w-lg">
              {t('hero.subtitle')}
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#inscricao"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-dark-pastel-green hover:bg-dark-pastel-green/90 transition-all shadow-sm hover:shadow-md"
              >
                {t('cta.button')} <FaArrowRight className="ml-2" />
              </a>
              
              <a 
                href="#about"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all"
              >
                {t('about.title')}
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6 justify-center md:justify-start">
              <div className="text-center md:text-left">
                <p className="text-4xl font-bold text-gray-900">4</p>
                <p className="text-sm text-gray-600 mt-1">Semanas</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-4xl font-bold text-gray-900">34h</p>
                <p className="text-sm text-gray-600 mt-1">De conteúdo</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-4xl font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-600 mt-1">Prática</p>
              </div>
            </div>
          </motion.div>

          {/* Right column: Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative rounded-2xl bg-white shadow-xl overflow-hidden">
              <div className="bg-gradient-to-tr from-dark-pastel-green to-blue-500 h-16 flex items-center px-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="p-6">
                <pre className="text-left text-sm font-mono">
                  <code className="language-javascript text-gray-800">
                    <span className="text-purple-600">function</span> <span className="text-blue-600">buildYourFuture</span>() {'{'}<br/>
                    {'  '}<span className="text-purple-600">const</span> <span className="text-blue-600">skills</span> = [];<br/>
                    {'  '}<span className="text-purple-600">const</span> <span className="text-blue-600">weeks</span> = 4;<br/>
                    {'  '}<span className="text-purple-600">let</span> <span className="text-blue-600">knowledge</span> = 0;<br/>
                    <br/>
                    {'  '}<span className="text-green-600">// Learn while building projects</span><br/>
                    {'  '}<span className="text-purple-600">for</span>(<span className="text-purple-600">let</span> i = 0; i {'<'} weeks; i++) {'{'}<br/>
                    {'    '}skills.<span className="text-blue-600">push</span>(<span className="text-orange-600">'JavaScript'</span>, <span className="text-orange-600">'HTML'</span>, <span className="text-orange-600">'CSS'</span>);<br/>
                    {'    '}knowledge += buildProject(i);<br/>
                    {'  }'}<br/>
                    <br/>
                    {'  '}<span className="text-purple-600">return</span> {'{'}<br/>
                    {'    '}skills,<br/>
                    {'    '}knowledge,<br/>
                    {'    '}success: <span className="text-orange-600">true</span><br/>
                    {'  }'}<br/>
                    {'}'}<br/>
                    <br/>
                    <span className="text-blue-600">buildYourFuture</span>();
                  </code>
                </pre>
              </div>
            </div>
            
            {/* Code blocks floating in the background */}
            <div className="absolute -right-16 top-32 -rotate-6 transform bg-white p-5 rounded-lg shadow-lg z-[-1] opacity-70 scale-75">
              <pre className="text-xs font-mono">
                <code>{'<div class="coder">You</div>'}</code>
              </pre>
            </div>
            
            <div className="absolute -left-12 -bottom-10 rotate-6 transform bg-white p-4 rounded-lg shadow-lg z-[-1] opacity-70 scale-60">
              <pre className="text-xs font-mono">
                <code>// Your future starts here</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L80,85.3C160,75,320,53,480,53.3C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
}