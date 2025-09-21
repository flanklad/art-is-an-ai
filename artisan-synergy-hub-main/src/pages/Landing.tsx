import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  Bot,
  Globe,
  Heart,
  Brush,
  Hammer,
  Scissors
} from "lucide-react";
import artisanHero from "@/assets/artisan-hero.jpg";

const Landing = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<"artisan" | "ngo" | null>(null);

  const features = [
    {
      icon: Bot,
      title: "AI Business Advisor",
      description: "Get personalized business guidance powered by advanced AI",
      color: "feature-card-green"
    },
    {
      icon: Globe,
      title: "Market Intelligence",
      description: "Real-time market insights and pricing analytics",
      color: "feature-card-blue"
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description: "AI-powered quality assessment and certification",
      color: "feature-card-purple"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Artisans Connected", icon: Brush },
    { number: "500+", label: "NGO Partners", icon: Heart },
    { number: "50+", label: "Craft Types", icon: Hammer },
    { number: "98%", label: "Success Rate", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold gradient-text">Art-is-an-AI</h1>
            </div>
            <Button 
              onClick={() => navigate('/auth')}
              className="btn-hero"
            >
              Get Started <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 via-transparent to-pink-100/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge variant="outline" className="px-4 py-2 text-orange-600 border-orange-200">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Platform
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Empowering
                <span className="gradient-text block">Traditional Artisans</span>
                with Modern AI
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Connect artisans with NGOs through intelligent matching, market insights, 
                and collaborative support systems powered by cutting-edge AI technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="btn-hero"
                  onClick={() => navigate('/auth?role=artisan')}
                >
                  I'm an Artisan <Palette className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-orange-200 text-orange-600 hover:bg-orange-50"
                  onClick={() => navigate('/auth?role=ngo')}
                >
                  I'm an NGO <Users className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
            <div className="relative animate-float">
              <img 
                src={artisanHero}
                alt="Traditional artisans working on crafts"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl animate-pulse-soft opacity-80" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl animate-float floating-delayed opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className={`p-6 text-center glass-card animate-slide-in-up animate-stagger-${index + 1}`}>
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-orange-500" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-orange-600 border-orange-200">
              <Bot className="w-4 h-4 mr-2" />
              Powered by AI
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Revolutionary Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of artisan empowerment with our AI-driven platform
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className={`feature-card ${feature.color} animate-slide-in-up animate-stagger-${index + 1} interactive-hover`}>
                <feature.icon className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="opacity-90">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Craft Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of artisans and NGOs already using Art-is-an-AI to build sustainable craft businesses
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold text-lg"
            onClick={() => navigate('/auth')}
          >
            Start Your Journey <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Art-is-an-AI</span>
          </div>
          <p className="text-center text-gray-400">
            Empowering traditional crafts with modern technology
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;