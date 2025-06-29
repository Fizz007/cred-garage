"use client"

import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, ArrowLeft, Search } from 'lucide-react';
import Link from 'next/link';

const NotFound = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 p-4">
      <div className="w-full max-w-md">
        <Card className={`transition-all duration-1000 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <CardContent className="p-8 text-center space-y-6">
          
            <div className="space-y-2">
              <h1 className={`text-8xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent transition-all duration-1000 delay-300 ${
                mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}>
                404
              </h1>
              <div className={`h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000 delay-500 ${
                mounted ? 'w-full' : 'w-0'
              }`} />
            </div>

            <div className={`transition-all duration-1000 delay-700 ${
              mounted ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-12 scale-75'
            }`}>
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 text-primary" />
              </div>
            </div>

            <div className={`space-y-4 transition-all duration-1000 delay-1000 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <h2 className="text-2xl font-semibold text-foreground">
                Page Not Found
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-3 pt-4 transition-all duration-1000 delay-1200 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <Button 
                asChild 
                className="flex-1 group hover:scale-105 transition-transform duration-200"
              >
                <Link href="/">
                  <Home className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-200" />
                  Go Home
                </Link>
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.history.back()}
                className="flex-1 group hover:scale-105 transition-transform duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                Go Back
              </Button>
            </div>

            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse transition-all duration-1000 delay-${1500 + i * 200} ${
                    mounted ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${10 + (i % 2) * 80}%`,
                    animationDelay: `${1.5 + i * 0.2}s`,
                    animationDuration: `${2 + i * 0.5}s`
                  }}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound; 