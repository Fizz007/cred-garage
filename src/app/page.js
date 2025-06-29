
"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import UserProfile from '../components/UserProfile';
import BenefitsSection from '../components/BenefitsSection';
import RewardProgress from '../components/RewardProgress';
import ThemeToggle from '../components/ThemeToggle';
import { useTheme } from 'next-themes';

const mockUser = {
  name: "Faisal Abrar",
  level: 7,
  title: "Credit Elite",
  currentXP: 8450,
  nextLevelXP: 10000,
  weeklyGains: 325
};

const mockBenefits = [
  {
    id: 1,
    title: "Premium Lounge Access",
    description: "Enjoy complimentary access to 1000+ airport lounges worldwide",
    icon: "gift",
    points: 2500,
    cta: "Claim Now",
    status: "new"
  },
  {
    id: 2,
    title: "Credit Score Boost",
    description: "Get personalized tips to improve your credit score by 50+ points",
    icon: "credit",
    points: 1000,
    cta: "View Tips"
  },
  {
    id: 3,
    title: "Cashback Rewards",
    description: "Earn up to 5% cashback on all your online purchases",
    icon: "coins",
    points: 1500,
    cta: "Activate"
  },
  {
    id: 4,
    title: "Investment Advisor",
    description: "Get free consultation with certified financial advisors",
    icon: "trophy",
    points: 3000,
    cta: "Book Session"
  },
  {
    id: 5,
    title: "Travel Insurance",
    description: "Comprehensive travel coverage for international trips",
    icon: "shield",
    points: 2000,
    cta: "Get Quote"
  },
  {
    id: 6,
    title: "Priority Support",
    description: "24/7 dedicated customer support with zero wait time",
    icon: "zap",
    points: 800,
    cta: "Upgrade"
  }
];

const mockRewards = {
  currentPoints: 12750,
  totalRedeemed: 45600,
  nextMilestone: 15000,
  weeklyEarned: 890
};

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [benefits, setBenefits] = useState([]);
  const [rewards, setRewards] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
  
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setUser(mockUser);
      setBenefits(mockBenefits);
      setRewards(mockRewards);
      setIsLoading(false);
    };

    loadData();
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300`}>
      <ThemeToggle />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent leading-20`}>
            CRED Garage
          </h1>
          <p className={`text-lg ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Your premium rewards and benefits dashboard
          </p>
        </motion.div>

        <UserProfile user={user} isLoading={isLoading} />
        
        <RewardProgress rewards={rewards} isLoading={isLoading} />
        
        <BenefitsSection benefits={benefits} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Dashboard;
