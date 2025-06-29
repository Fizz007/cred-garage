
import { motion } from 'framer-motion';
import { Gift, CreditCard, Zap, Shield, Coins, Trophy } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const benefitIcons = {
  gift: Gift,
  credit: CreditCard,
  zap: Zap,
  shield: Shield,
  coins: Coins,
  trophy: Trophy
};

const BenefitCard = ({ benefit, index }) => {
  const { theme } = useTheme();
  const Icon = benefitIcons[benefit.icon] || Gift;
  
  return (
    <motion.div
      className={`${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/30 border-slate-700/50 hover:border-purple-500/50' 
          : 'bg-gradient-to-br from-white/90 to-slate-50/90 border-slate-200/50 hover:border-purple-400/50'
      } backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 group`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: theme === 'dark' 
          ? "0 25px 50px -12px rgba(147, 51, 234, 0.25)" 
          : "0 25px 50px -12px rgba(147, 51, 234, 0.15)"
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <motion.div 
          className={`p-3 rounded-lg transition-all duration-300 ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30' 
              : 'bg-gradient-to-br from-purple-100 to-blue-100 group-hover:from-purple-200 group-hover:to-blue-200'
          }`}
          whileHover={{ rotate: 5 }}
        >
          <Icon className={`w-6 h-6 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
        </motion.div>
        {benefit.status === 'new' && (
          <span className={`px-2 py-1 text-xs font-medium rounded-full border ${
            theme === 'dark' 
              ? 'bg-green-500/20 text-green-400 border-green-500/30' 
              : 'bg-green-100 text-green-700 border-green-200'
          }`}>
            NEW
          </span>
        )}
      </div>
      
      <h3 className={`text-lg font-semibold mb-2 transition-colors ${
        theme === 'dark' 
          ? 'text-white group-hover:text-purple-300' 
          : 'text-slate-800 group-hover:text-purple-600'
      }`}>
        {benefit.title}
      </h3>
      <p className={`text-sm mb-4 leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
        {benefit.description}
      </p>
      
      <div className="flex items-center justify-between">
        <span className={`font-medium text-sm ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>
          {benefit.points} points
        </span>
        <motion.button
          className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {benefit.cta}
        </motion.button>
      </div>
    </motion.div>
  );
};

const BenefitsSection = ({ benefits, isLoading }) => {
  const { theme } = useTheme();

  if (isLoading) {
    return (
      <div className="mb-8">
        <div className={`h-8 w-48 rounded animate-pulse mb-6 ${theme === 'dark' ? 'bg-slate-700/50' : 'bg-slate-200/50'}`}></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className={`rounded-xl p-6 border ${
              theme === 'dark' 
                ? 'bg-slate-800/50 border-slate-700/50' 
                : 'bg-white/50 border-slate-200/50'
            }`}>
              <div className={`w-12 h-12 rounded-lg animate-pulse mb-4 ${theme === 'dark' ? 'bg-slate-700/50' : 'bg-slate-200/50'}`}></div>
              <div className={`h-5 rounded animate-pulse mb-2 ${theme === 'dark' ? 'bg-slate-700/50' : 'bg-slate-200/50'}`}></div>
              <div className={`h-4 rounded animate-pulse mb-4 ${theme === 'dark' ? 'bg-slate-700/50' : 'bg-slate-200/50'}`}></div>
              <div className={`h-8 rounded animate-pulse ${theme === 'dark' ? 'bg-slate-700/50' : 'bg-slate-200/50'}`}></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className="mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <motion.h2 
        className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Available Benefits
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <BenefitCard key={benefit.id} benefit={benefit} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default BenefitsSection;
