import { useEffect, useState } from 'preact/hooks';
import { useTranslation } from './i18n';
import { motion } from 'framer-motion';
import { useFormSubmission } from '../hooks/useFormSubmission';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [showWaitlist, setShowWaitlist] = useState(false);

  const {
        email,
        setEmail,
        isSubmitted,
        handleSubmit,
      } = useFormSubmission(false);

  const changeLanguage = (lng) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (lng === 'en' && i18n.language !== 'en') {
      setShowWaitlist(true);
    }
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language || 'pt';

  useEffect(() => {
    if (isSubmitted) {
      setShowWaitlist(false);
    }
  }
  , [isSubmitted]);

  return (
    <div className="relative">
      <div className="flex gap-2 items-center">
        <button 
          onClick={() => changeLanguage('pt')}
          className={`w-8 h-6 border-2 ${currentLanguage === 'pt' ? 'border-dark-pastel-green' : 'border-transparent'} rounded overflow-hidden transition-all hover:opacity-80`}
          aria-label="Português"
        >
          <img 
            src="https://flagcdn.com/pt.svg" 
            alt="Bandeira de Portugal" 
            className="w-full h-full object-cover"
          />
        </button>
        <button 
          onClick={() => changeLanguage('en')}
          className={`w-8 h-6 border-2 ${currentLanguage === 'en' ? 'border-dark-pastel-green' : 'border-transparent'} rounded overflow-hidden transition-all hover:opacity-80`}
          aria-label="English"
        >
          <img 
            src="https://flagcdn.com/gb.svg" 
            alt="British flag" 
            className="w-full h-full object-cover"
          />
        </button>
      </div>

      {/* Waitlist popup */}
      {showWaitlist && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg max-w-md p-6 w-full shadow-xl"
          >
            <h2 className="text-xl font-bold mb-4">{i18n.t('waitlist.title')}</h2>
            <p className="mb-4">{i18n.t('waitlist.message')}</p>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder={i18n.t('waitlist.email')}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-dark-pastel-green"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="flex justify-between">
                <button 
                  type="button" 
                  onClick={() => setShowWaitlist(false)}
                  className="px-4 py-2 text-gray-700 hover:underline"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-dark-pastel-green text-white rounded hover:bg-dark-pastel-green/90 transition-colors"
                >
                  {i18n.t('waitlist.button')}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}