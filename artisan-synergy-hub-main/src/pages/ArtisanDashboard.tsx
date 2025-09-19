import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Bot, 
  FileText, 
  Calendar, 
  GraduationCap, 
  TrendingUp, 
  ShieldCheck,
  Bell,
  Search,
  Settings,
  LogOut,
  Sparkles,
  MessageCircle,
  BarChart3,
  Award,
  Users,
  Heart
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import FeatureModal from "@/components/ai/FeatureModal";

const ArtisanDashboard = () => {
  const navigate = useNavigate();
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<{id: string, title: string, color: string} | null>(null);

  const features = [
    {
      id: "ai-advisor",
      icon: Bot,
      title: "AI Business Advisor",
      description: "Get personalized business guidance, market insights, and growth strategies tailored to your craft",
      color: "feature-card-green",
      badge: "AI Powered",
      stats: { conversations: 127, insights: 45 }
    },
    {
      id: "document-generator",
      icon: FileText,
      title: "Smart Document Generator",
      description: "Automatically create legal documents, contracts, certificates, and business paperwork",
      color: "feature-card-blue", 
      badge: "Automated",
      stats: { generated: 23, templates: 15 }
    },
    {
      id: "events-workshops",
      icon: Calendar,
      title: "Events & Workshops",
      description: "Discover relevant workshops, exhibitions, and networking events in your area",
      color: "feature-card-yellow",
      badge: "Local Events",
      stats: { upcoming: 8, attended: 12 }
    },
    {
      id: "training-creator",
      icon: GraduationCap,
      title: "Personalized Training",
      description: "AI-curated learning paths to enhance your craft skills and business knowledge",
      color: "feature-card-purple",
      badge: "Adaptive Learning",
      stats: { courses: 5, progress: 78 }
    },
    {
      id: "market-tracker",
      icon: TrendingUp,
      title: "Market Price Tracker",
      description: "Real-time pricing analytics, demand trends, and competitive market intelligence",
      color: "feature-card-orange",
      badge: "Live Data",
      stats: { products: 45, alerts: 3 }
    },
    {
      id: "quality-assessment",
      icon: ShieldCheck,
      title: "Quality Assessment",
      description: "AI-powered quality evaluation, certification assistance, and improvement suggestions",
      color: "feature-card-pink",
      badge: "AI Vision",
      stats: { assessed: 89, score: 94 }
    }
  ];

  const handleFeatureClick = (feature: any) => {
    setSelectedFeature({
      id: feature.id,
      title: feature.title,
      color: feature.color
    });
    setModalOpen(true);
  };

  const quickStats = [
    { label: "Revenue This Month", value: "₹45,230", change: "+23%", icon: TrendingUp },
    { label: "Products Sold", value: "156", change: "+12%", icon: Award },
    { label: "Customer Rating", value: "4.8", change: "+0.3", icon: Heart },
    { label: "Active Orders", value: "23", change: "+5", icon: Users }
  ];

  const recentActivities = [
    { type: "order", message: "New order for handwoven scarf", time: "2 hours ago", icon: Award },
    { type: "quality", message: "Quality assessment completed - 95% score", time: "4 hours ago", icon: ShieldCheck },
    { type: "training", message: "Completed 'Digital Marketing' module", time: "1 day ago", icon: GraduationCap },
    { type: "advisor", message: "AI suggested new pricing strategy", time: "2 days ago", icon: Bot }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold gradient-text">ArtisanFlow</h1>
                <p className="text-sm text-muted-foreground">Artisan Dashboard</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Search className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-gradient-to-br from-green-400 to-blue-500 text-white text-sm">
                  AR
                </AvatarFallback>
              </Avatar>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/')}
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold mb-2">Welcome back, Rajesh! 👋</h2>
          <p className="text-muted-foreground text-lg">Let's continue building your craft business with AI-powered insights</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index} className={`p-4 glass-card animate-slide-in-up animate-stagger-${index + 1}`}>
              <div className="flex items-center justify-between mb-2">
                <stat.icon className="w-5 h-5 text-orange-500" />
                <Badge variant="secondary" className="text-xs">
                  {stat.change}
                </Badge>
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.id} 
              className={`feature-card ${feature.color} animate-slide-in-up animate-stagger-${index + 1} cursor-pointer transform transition-all duration-300 hover:scale-105`}
              onClick={() => handleFeatureClick(feature)}
            >
              <div className="flex items-start justify-between mb-4">
                <feature.icon className="w-10 h-10" />
                <Badge variant="secondary" className="bg-white/20 text-white border-0">
                  {feature.badge}
                </Badge>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="opacity-90 mb-4 text-sm leading-relaxed">{feature.description}</p>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                {Object.entries(feature.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-lg font-bold">{value}{typeof value === 'number' && value < 100 ? '%' : ''}</div>
                    <div className="text-xs opacity-75 capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Recent Activities */}
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 p-6 glass-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Recent Activities</h3>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-orange-50 transition-colors">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-pink-100 rounded-xl flex items-center justify-center">
                    <activity.icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{activity.message}</p>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* AI Assistant Chat Preview */}
          <Card className="p-6 glass-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">AI Assistant</h3>
              <Badge className="bg-gradient-to-r from-green-400 to-blue-500 border-0">
                Online
              </Badge>
            </div>
            <div className="space-y-3 mb-4">
              <div className="bg-gradient-to-r from-green-100 to-blue-100 p-3 rounded-lg">
                <p className="text-sm">Based on current market trends, I recommend increasing your pottery prices by 15%. Would you like me to analyze your competitor pricing?</p>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg ml-4">
                <p className="text-sm">Yes, please analyze the market</p>
              </div>
            </div>
            <Button className="w-full btn-hero">
              <MessageCircle className="w-4 h-4 mr-2" />
              Continue Chat
            </Button>
          </Card>
        </div>

        {/* Floating Action Button */}
        <Button
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 shadow-lg hover:shadow-xl animate-pulse-soft"
          onClick={() => handleFeatureClick(features[0])}
        >
          <Bot className="w-6 h-6" />
        </Button>
      </div>

      {/* Feature Modal */}
      {selectedFeature && (
        <FeatureModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          featureId={selectedFeature.id}
          featureTitle={selectedFeature.title}
          featureColor={selectedFeature.color}
        />
      )}
    </div>
  );
};

export default ArtisanDashboard;