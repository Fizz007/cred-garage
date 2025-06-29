
import { motion } from 'framer-motion';
import { Coins, Award, TrendingUp } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const RewardProgress = ({ rewards, isLoading }) => {
  const { theme } = useTheme();

  if (isLoading) {
    return (
      <motion.div 
        className={`${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-slate-900/50 to-blue-900/30 border-slate-700/50' 
            : 'bg-gradient-to-br from-white/90 to-blue-50/90 border-slate-200/50'
        } backdrop-blur-sm border rounded-2xl p-6 mb-8`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className={`h-6 ${theme === 'dark' ? 'bg-slate-700/50' : 'bg-slate-200/50'} rounded animate-pulse mb-6`}></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="text-center">
              <div className={`w-24 h-24 ${theme === 'dark' ? 'bg-slate-700/50' : 'bg-slate-200/50'} rounded-full animate-pulse mx-auto mb-4`}></div>
              <div className={`h-4 ${theme === 'dark' ? 'bg-slate-700/50' : 'bg-slate-200/50'} rounded animate-pulse mb-2`}></div>
              <div className={`h-6 ${theme === 'dark' ? 'bg-slate-700/50' : 'bg-slate-200/50'} rounded animate-pulse`}></div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  }

  const totalProgress = (rewards.currentPoints / rewards.nextMilestone) * 100;

  return (
    <motion.div 
      className={`${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-slate-900/50 to-blue-900/30 border-slate-700/50 hover:border-blue-500/30' 
          : 'bg-gradient-to-br from-white/90 to-blue-50/90 border-slate-200/50 hover:border-blue-400/50'
      } backdrop-blur-sm border rounded-2xl p-6 mb-8 transition-all duration-300`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex items-center justify-between mb-6">
        <motion.h2 
          className={`text-2xl font-bold flex items-center ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Coins className="w-6 h-6 mr-2 text-yellow-500" />
          Reward Points
        </motion.h2>
        <motion.div 
          className="text-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className={`text-sm flex items-center ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}`}>
            <TrendingUp className="w-4 h-4 mr-1" />
            +{rewards.weeklyEarned} this week
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <motion.div 
          className="text-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <div className="relative w-24 h-24 mx-auto mb-4">
            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke={theme === 'dark' ? 'rgb(51 65 85)' : 'rgb(226 232 240)'}
                strokeWidth="2"
                strokeDasharray="100, 100"
              />
              <motion.path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="url(#gradient1)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={`${totalProgress}, 100`}
                initial={{ strokeDasharray: "0, 100" }}
                animate={{ strokeDasharray: `${totalProgress}, 100` }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#eab308" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <Coins className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
          <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Current Points</p>
          <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>{rewards.currentPoints.toLocaleString()}</p>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
        >
          <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/20' 
              : 'bg-gradient-to-br from-purple-100 to-blue-100'
          }`}>
            <Award className={`w-8 h-8 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
          </div>
          <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Total Redeemed</p>
          <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>{rewards.totalRedeemed.toLocaleString()}</p>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, type: "spring" }}
        >
          <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20' 
              : 'bg-gradient-to-br from-green-100 to-emerald-100'
          }`}>
            <TrendingUp className={`w-8 h-8 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} />
          </div>
          <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Next Milestone</p>
          <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>{rewards.nextMilestone.toLocaleString()}</p>
        </motion.div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>Progress to next milestone</span>
          <span className={`text-sm font-medium ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}`}>
            {rewards.currentPoints.toLocaleString()} / {rewards.nextMilestone.toLocaleString()}
          </span>
        </div>
        <div className={`w-full rounded-full h-3 overflow-hidden ${theme === 'dark' ? 'bg-slate-700/50' : 'bg-slate-200/70'}`}>
          <motion.div
            className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${totalProgress}%` }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default RewardProgress;
