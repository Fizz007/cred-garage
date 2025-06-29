
import { motion } from 'framer-motion';
import { User, Star, TrendingUp } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const UserProfile = ({ user, isLoading }) => {
  const { theme } = useTheme();

  if (isLoading) {
    return (
      <motion.div 
        className={`${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-slate-900/50 to-purple-900/30 border-slate-700/50' 
            : 'bg-gradient-to-r from-white/80 to-purple-50/80 border-slate-200/50'
        } backdrop-blur-sm border rounded-2xl p-6 mb-8`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center space-x-4">
          <div className={`w-16 h-16 ${theme === 'dark' ? 'bg-slate-700/50' : 'bg-slate-200/50'} rounded-full animate-pulse`}></div>
          <div className="flex-1">
            <div className={`h-6 ${theme === 'dark' ? 'bg-slate-700/50' : 'bg-slate-200/50'} rounded animate-pulse mb-2`}></div>
            <div className={`h-4 ${theme === 'dark' ? 'bg-slate-700/50' : 'bg-slate-200/50'} rounded w-1/2 animate-pulse`}></div>
          </div>
        </div>
        <div className="mt-4">
          <div className={`h-3 ${theme === 'dark' ? 'bg-slate-700/50' : 'bg-slate-200/50'} rounded animate-pulse`}></div>
        </div>
      </motion.div>
    );
  }

  const progressPercentage = (user.currentXP / user.nextLevelXP) * 100;

  return (
    <motion.div 
      className={`${
        theme === 'dark' 
          ? 'bg-gradient-to-r from-slate-900/50 to-purple-900/30 border-slate-700/50 hover:border-purple-500/30' 
          : 'bg-gradient-to-r from-white/90 to-purple-50/90 border-slate-200/50 hover:border-purple-400/50'
      } backdrop-blur-sm border rounded-2xl p-6 mb-8 transition-all duration-300`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div className={`absolute -top-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center border-2 ${
              theme === 'dark' ? 'border-slate-900' : 'border-white'
            }`}>
              <Star className={`w-3 h-3 ${theme === 'dark' ? 'text-slate-900' : 'text-white'}`} />
            </div>
          </motion.div>
          <div>
            <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>{user.name}</h2>
            <p className={`font-medium ${theme === 'dark' ? 'text-purple-300' : 'text-purple-600'}`}>Level {user.level} • {user.title}</p>
          </div>
        </div>
        <motion.div 
          className="text-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className={`flex items-center mb-1 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
            <TrendingUp className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">+{user.weeklyGains} this week</span>
          </div>
          <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{user.currentXP.toLocaleString()} / {user.nextLevelXP.toLocaleString()} XP</p>
        </motion.div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>Progress to Level {user.level + 1}</span>
          <span className={`text-sm font-medium ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>{Math.round(progressPercentage)}%</span>
        </div>
        <div className={`w-full rounded-full h-3 overflow-hidden ${theme === 'dark' ? 'bg-slate-700/50' : 'bg-slate-200/70'}`}>
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default UserProfile;
