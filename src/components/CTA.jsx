import { useState } from 'preact/hooks';
import { useTranslation } from './i18n';
import { motion } from 'framer-motion';
import { FaRocket, FaCheck } from 'react-icons/fa';

export function CTA() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setEmail('');
    }, 500);
  };
  
  return (
    <section id="inscricao" className="relative py-16 md:py-24 bg-gradient-to-b from-dark-pastel-green/5 to-dark-pastel-green/20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-dark-pastel-green/10 rounded-full"></div>
        <div className="absolute top-1/2 -left-24 w-48 h-48 bg-dark-pastel-green/10 rounded-full"></div>
        <div className="absolute -bottom-16 right-1/4 w-36 h-36 bg-dark-pastel-green/10 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('cta.title')}
          </h2>
          <div className="mt-4 max-w-3xl mx-auto space-y-2">
            {t('cta.lines', { returnObjects: true }).map((line, idx) => (
              <p key={idx} className="text-lg text-gray-600">{line}</p>
            ))}
          </div>
        </div>
        
        <div className="mt-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left column: Form */}
              <div className="p-8 md:p-12">
                <div className="inline-flex items-center px-4 py-2 bg-dark-pastel-green/10 rounded-full text-dark-pastel-green font-medium text-sm mb-6">
                  <FaRocket className="mr-2" /> Reserve sua vaga agora
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900">Inscreva-se no CodeYourWay Ignite</h3>
                <p className="mt-3 text-gray-600">Preencha o formulário abaixo para garantir sua vaga no próximo bootcamp.</p>
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-dark-pastel-green focus:border-dark-pastel-green"
                        placeholder="Digite seu nome"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-dark-pastel-green focus:border-dark-pastel-green"
                        placeholder="Digite seu e-mail"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-dark-pastel-green focus:border-dark-pastel-green"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                    
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-dark-pastel-green hover:bg-dark-pastel-green/90 text-white font-medium py-3 px-6 rounded-md shadow-sm transition-all"
                      >
                        {t('cta.button')}
                      </button>
                    </div>
                  </form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200 text-center"
                  >
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                      <FaCheck className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="text-lg font-medium text-gray-900">Inscrição recebida!</h4>
                    <p className="mt-2 text-gray-600">
                      Entraremos em contato em breve com mais informações sobre o bootcamp.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 text-dark-pastel-green hover:underline"
                    >
                      Voltar para o formulário
                    </button>
                  </motion.div>
                )}
              </div>
              
              {/* Right column: Benefits */}
              <div className="bg-gray-50 p-8 md:p-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6">O que está incluído:</h3>
                
                <ul className="space-y-4">
                  {[
                    "Acesso a todas as aulas ao vivo",
                    "Materiais complementares em texto e vídeo",
                    "Projetos práticos para seu portfólio",
                    "Comunidade exclusiva para networking",
                    "Sessões de mentoria individual",
                    "Certificado de conclusão",
                    "Suporte por 30 dias após o término do bootcamp"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex">
                      <div className="flex-shrink-0 h-5 w-5 text-dark-pastel-green mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Preço normal</span>
                    <span className="text-lg text-gray-500 line-through">R$ 1.997,00</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-medium">Preço promocional</span>
                    <span className="text-2xl font-bold text-dark-pastel-green">R$ 997,00</span>
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    ou 12x de R$ 97,00 sem juros
                  </div>
                  
                  <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-md p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-yellow-800">Vagas limitadas!</h4>
                        <p className="text-sm text-yellow-700 mt-1">
                          Temos apenas 30 vagas disponíveis para esta turma.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}