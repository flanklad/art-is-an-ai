import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  BarChart3, 
  FileText, 
  Network, 
  Settings2, 
  Brain, 
  ShieldCheck,
  Bell,
  Search,
  LogOut,
  Sparkles,
  Users,
  TrendingUp,
  Heart,
  Award,
  Target,
  Globe
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const NGODashboard = () => {
  const navigate = useNavigate();
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const features = [
    {
      id: "impact-dashboard",
      icon: BarChart3,
      title: "Program Impact Dashboard",
      description: "Real-time analytics, beneficiary tracking, and automated impact reporting with AI insights",
      color: "feature-card-green",
      badge: "Analytics",
      stats: { beneficiaries: 2547, programs: 23 }
    },
    {
      id: "report-generator", 
      icon: FileText,
      title: "Automated Report Generator",
      description: "AI-powered donor reports, grant applications, and compliance documentation",
      color: "feature-card-blue",
      badge: "Automated",
      stats: { reports: 156, saved: "40hrs" }
    },
    {
      id: "supply-chain",
      icon: Network,
      title: "Supply Chain Builder",
      description: "AI-driven artisan-buyer matching and supply chain optimization",
      color: "feature-card-yellow",
      badge: "AI Matching",
      stats: { connections: 89, success: 94 }
    },
    {
      id: "training-customizer",
      icon: Settings2,
      title: "Training Content Customizer",
      description: "Adaptive training modules with regional customization and multi-language support",
      color: "feature-card-purple",
      badge: "Adaptive",
      stats: { modules: 67, languages: 8 }
    },
    {
      id: "market-intelligence",
      icon: Brain,
      title: "Market Intelligence Hub",
      description: "Comprehensive market analysis, trend monitoring, and strategic insights",
      color: "feature-card-orange", 
      badge: "Intelligence",
      stats: { insights: 234, trends: 45 }
    },
    {
      id: "quality-control",
      icon: ShieldCheck,
      title: "Quality Control Center",
      description: "360-degree quality management, certification tracking, and brand building support",
      color: "feature-card-pink",
      badge: "Certification",
      stats: { certified: 412, quality: 96 }
    }
  ];

  const programStats = [
    { label: "Active Programs", value: "23", change: "+3", icon: Target },
    { label: "Beneficiaries", value: "2,547", change: "+127", icon: Users },
    { label: "Success Rate", value: "94%", change: "+2.1%", icon: TrendingUp },
    { label: "Impact Score", value: "8.7", change: "+0.4", icon: Heart }
  ];

  const recentUpdates = [
    { type: "program", message: "Pottery training program completed - 45 artisans certified", time: "2 hours ago", icon: Award },
    { type: "impact", message: "Monthly impact report generated for donors", time: "5 hours ago", icon: BarChart3 },
    { type: "supply", message: "15 new artisan-buyer connections established", time: "1 day ago", icon: Network },
    { type: "quality", message: "Quality audit completed - 96% compliance", time: "2 days ago", icon: ShieldCheck }
  ];

  const upcomingTasks = [
    { task: "Review Q3 impact reports", priority: "High", due: "Today" },
    { task: "Artisan onboarding workshop", priority: "Medium", due: "Tomorrow" },
    { task: "Supply chain optimization meeting", priority: "Low", due: "This week" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold gradient-text">Art-is-an-AI</h1>
                <p className="text-sm text-muted-foreground">NGO Dashboard</p>
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
                <AvatarFallback className="bg-gradient-to-br from-purple-400 to-pink-500 text-white text-sm">
                  CF
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
          <h2 className="text-3xl font-bold mb-2">Welcome back, CraftForward! 🌟</h2>
          <p className="text-muted-foreground text-lg">Empowering artisans through data-driven insights and intelligent automation</p>
        </div>

        {/* Program Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {programStats.map((stat, index) => (
            <Card key={index} className={`p-4 glass-card animate-slide-in-up animate-stagger-${index + 1}`}>
              <div className="flex items-center justify-between mb-2">
                <stat.icon className="w-5 h-5 text-purple-500" />
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
              onClick={() => setActiveFeature(feature.id)}
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

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Updates */}
          <Card className="p-6 glass-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Recent Updates</h3>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {recentUpdates.map((update, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                    <update.icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{update.message}</p>
                    <p className="text-xs text-muted-foreground">{update.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Upcoming Tasks */}
          <Card className="p-6 glass-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Upcoming Tasks</h3>
              <Badge className="bg-gradient-to-r from-purple-400 to-pink-500 border-0">
                3 Pending
              </Badge>
            </div>
            <div className="space-y-4">
              {upcomingTasks.map((task, index) => (
                <div key={index} className="p-3 rounded-lg border border-purple-100 hover:bg-purple-50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-sm">{task.task}</p>
                    <Badge 
                      variant={task.priority === 'High' ? 'destructive' : task.priority === 'Medium' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {task.priority}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{task.due}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Global Impact */}
          <Card className="p-6 glass-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Global Impact</h3>
              <Globe className="w-5 h-5 text-purple-500" />
            </div>
            <div className="space-y-4">
              <div className="text-center p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg">
                <div className="text-3xl font-bold text-purple-600">2.5K+</div>
                <div className="text-sm text-purple-700">Lives Impacted</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <div className="text-lg font-bold">15</div>
                  <div className="text-xs text-muted-foreground">States</div>
                </div>
                <div className="text-center p-3 bg-pink-50 rounded-lg">
                  <div className="text-lg font-bold">8</div>
                  <div className="text-xs text-muted-foreground">Countries</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Floating Action Button */}
        <Button
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 shadow-lg hover:shadow-xl animate-pulse-soft"
          onClick={() => setActiveFeature('impact-dashboard')}
        >
          <BarChart3 className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default NGODashboard;