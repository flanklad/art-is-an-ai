import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import ChatInterface from './ChatInterface';
import {
  Bot,
  FileText,
  Calendar,
  GraduationCap,
  TrendingUp,
  ShieldCheck,
  Download,
  Clock,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Users,
  MapPin,
  Star,
  Camera,
  Upload
} from 'lucide-react';

interface FeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  featureId: string;
  featureTitle: string;
  featureColor: string;
}

const FeatureModal = ({ isOpen, onClose, featureId, featureTitle, featureColor }: FeatureModalProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  const getFeatureContent = () => {
    switch (featureId) {
      case 'ai-advisor':
        return {
          icon: Bot,
          overview: "Your personal AI business advisor powered by advanced machine learning. Get instant insights, market analysis, and strategic recommendations tailored to your craft business.",
          tabs: [
            { id: 'chat', label: 'Chat with AI', icon: Bot },
            { id: 'insights', label: 'Business Insights', icon: BarChart3 },
            { id: 'recommendations', label: 'Recommendations', icon: CheckCircle }
          ],
          data: {
            insights: [
              { title: "Revenue Growth Opportunity", value: "+23%", description: "Increase pricing by 15% during festival season", status: "positive" },
              { title: "Market Expansion", value: "3 New Markets", description: "Delhi, Mumbai, Bangalore showing high demand", status: "positive" },
              { title: "Inventory Alert", value: "Low Stock", description: "5 popular items need restocking", status: "warning" }
            ],
            recommendations: [
              { title: "Digital Marketing Setup", priority: "High", completion: 30, description: "Set up Instagram and Facebook business profiles" },
              { title: "Quality Certification", priority: "Medium", completion: 60, description: "Apply for craft authenticity certificate" },
              { title: "Export Documentation", priority: "Low", completion: 10, description: "Prepare for international markets" }
            ]
          }
        };

      case 'document-generator':
        return {
          icon: FileText,
          overview: "Automatically generate legal documents, contracts, certificates, and business paperwork using AI. Save hours of manual work with intelligent form filling.",
          tabs: [
            { id: 'templates', label: 'Document Templates', icon: FileText },
            { id: 'generated', label: 'Generated Docs', icon: Download },
            { id: 'pending', label: 'Pending Tasks', icon: Clock }
          ],
          data: {
            templates: [
              { name: "GST Registration Form", type: "Legal", status: "ready", uses: 234 },
              { name: "Artisan Certificate", type: "Certification", status: "ready", uses: 567 },
              { name: "Export License", type: "Trade", status: "ready", uses: 89 },
              { name: "Partnership Agreement", type: "Legal", status: "ready", uses: 156 }
            ],
            generated: [
              { name: "GST_Registration_Rajesh.pdf", date: "Today", size: "2.4 MB", status: "completed" },
              { name: "Craft_Certificate_2024.pdf", date: "Yesterday", size: "1.8 MB", status: "completed" },
              { name: "Invoice_Template.pdf", date: "2 days ago", size: "856 KB", status: "completed" }
            ]
          }
        };

      case 'events-workshops':
        return {
          icon: Calendar,
          overview: "Discover relevant workshops, exhibitions, and networking events. Get personalized recommendations based on your location and craft specialization.",
          tabs: [
            { id: 'upcoming', label: 'Upcoming Events', icon: Calendar },
            { id: 'recommended', label: 'Recommended', icon: Star },
            { id: 'my-events', label: 'My Events', icon: Users }
          ],
          data: {
            upcoming: [
              { title: "Delhi Craft Fair 2024", date: "Dec 15-18", location: "Delhi", type: "Exhibition", spots: 45 },
              { title: "Digital Marketing Workshop", date: "Dec 22", location: "Online", type: "Workshop", spots: 12 },
              { title: "Pottery Master Class", date: "Jan 5", location: "Jaipur", type: "Training", spots: 8 }
            ],
            myEvents: [
              { title: "Traditional Weaving Workshop", date: "Completed", status: "attended", rating: 5 },
              { title: "Business Planning Seminar", date: "Dec 1", status: "registered", rating: 0 },
              { title: "Quality Assessment Training", date: "Nov 25", status: "attended", rating: 4 }
            ]
          }
        };

      case 'training-creator':
        return {
          icon: GraduationCap,
          overview: "AI-curated personalized learning paths to enhance your craft skills and business knowledge. Adaptive content that grows with your progress.",
          tabs: [
            { id: 'courses', label: 'My Courses', icon: GraduationCap },
            { id: 'progress', label: 'Progress', icon: BarChart3 },
            { id: 'certificates', label: 'Certificates', icon: CheckCircle }
          ],
          data: {
            courses: [
              { title: "Digital Marketing for Artisans", progress: 78, lessons: 24, duration: "6 weeks", status: "active" },
              { title: "Quality Control Basics", progress: 100, lessons: 12, duration: "3 weeks", status: "completed" },
              { title: "Export Business Setup", progress: 45, lessons: 18, duration: "4 weeks", status: "active" },
              { title: "Financial Planning", progress: 12, lessons: 20, duration: "5 weeks", status: "new" }
            ],
            certificates: [
              { title: "Quality Control Specialist", date: "Nov 2024", validity: "2 years", verified: true },
              { title: "Traditional Craft Expert", date: "Sep 2024", validity: "Lifetime", verified: true }
            ]
          }
        };

      case 'market-tracker':
        return {
          icon: TrendingUp,
          overview: "Real-time market intelligence with pricing analytics, demand forecasting, and competitive insights to maximize your profits.",
          tabs: [
            { id: 'prices', label: 'Price Tracker', icon: TrendingUp },
            { id: 'trends', label: 'Market Trends', icon: BarChart3 },
            { id: 'competitors', label: 'Competitors', icon: Users }
          ],
          data: {
            prices: [
              { product: "Handwoven Scarves", current: "₹1,450", change: "+12%", trend: "up", volume: "High" },
              { product: "Pottery Bowls", current: "₹850", change: "-3%", trend: "down", volume: "Medium" },
              { product: "Silver Jewelry", current: "₹2,300", change: "+8%", trend: "up", volume: "High" },
              { product: "Wooden Crafts", current: "₹650", change: "+5%", trend: "up", volume: "Low" }
            ],
            trends: [
              { category: "Festival Season Demand", impact: "+35%", duration: "2 weeks", confidence: "High" },
              { category: "Export Opportunities", impact: "+18%", duration: "6 months", confidence: "Medium" },
              { category: "Local Competition", impact: "-5%", duration: "1 month", confidence: "Low" }
            ]
          }
        };

      case 'quality-assessment':
        return {
          icon: ShieldCheck,
          overview: "AI-powered quality evaluation using computer vision. Get instant feedback, improvement suggestions, and certification assistance.",
          tabs: [
            { id: 'assess', label: 'Quality Check', icon: Camera },
            { id: 'history', label: 'Assessment History', icon: BarChart3 },
            { id: 'improvements', label: 'Improvements', icon: CheckCircle }
          ],
          data: {
            history: [
              { item: "Handwoven Textile", score: 94, date: "Today", improvements: 2, status: "excellent" },
              { item: "Pottery Vase", score: 87, date: "Yesterday", improvements: 4, status: "good" },
              { item: "Silver Ring", score: 96, date: "2 days ago", improvements: 1, status: "excellent" },
              { item: "Wooden Sculpture", score: 82, date: "3 days ago", improvements: 5, status: "good" }
            ],
            improvements: [
              { title: "Glaze Consistency", priority: "High", impact: "+8 points", status: "pending" },
              { title: "Edge Finishing", priority: "Medium", impact: "+5 points", status: "in-progress" },
              { title: "Pattern Alignment", priority: "Low", impact: "+3 points", status: "completed" }
            ]
          }
        };

      default:
        return {
          icon: Bot,
          overview: "AI-powered feature to enhance your craft business.",
          tabs: [{ id: 'overview', label: 'Overview', icon: Bot }],
          data: {}
        };
    }
  };

  const feature = getFeatureContent();
  const IconComponent = feature.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] p-0">
        <DialogHeader className={`p-6 feature-card ${featureColor} text-white rounded-t-lg`}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold">{featureTitle}</DialogTitle>
              <p className="opacity-90 mt-1">{feature.overview}</p>
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-6">
              {feature.tabs.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id} className="flex items-center gap-2">
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* AI Advisor Content */}
            {featureId === 'ai-advisor' && (
              <>
                <TabsContent value="chat">
                  <ChatInterface 
                    title="AI Business Advisor"
                    placeholder="Ask about pricing, marketing, legal help..."
                    aiType="advisor"
                  />
                </TabsContent>

                <TabsContent value="insights" className="space-y-4">
                  {feature.data.insights?.map((insight: any, index: number) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">{insight.title}</h4>
                          <p className="text-sm text-muted-foreground">{insight.description}</p>
                        </div>
                        <div className="text-right">
                          <div className={`text-lg font-bold ${
                            insight.status === 'positive' ? 'text-green-600' : 
                            insight.status === 'warning' ? 'text-orange-600' : 'text-red-600'
                          }`}>
                            {insight.value}
                          </div>
                          <Badge variant={insight.status === 'positive' ? 'default' : 'secondary'}>
                            {insight.status === 'positive' ? <CheckCircle className="w-3 h-3 mr-1" /> : <AlertCircle className="w-3 h-3 mr-1" />}
                            {insight.status}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="recommendations" className="space-y-4">
                  {feature.data.recommendations?.map((rec: any, index: number) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold">{rec.title}</h4>
                        <Badge variant={rec.priority === 'High' ? 'destructive' : rec.priority === 'Medium' ? 'default' : 'secondary'}>
                          {rec.priority} Priority
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{rec.description}</p>
                      <div className="flex items-center gap-3">
                        <Progress value={rec.completion} className="flex-1" />
                        <span className="text-sm font-medium">{rec.completion}%</span>
                      </div>
                    </Card>
                  ))}
                </TabsContent>
              </>
            )}

            {/* Quality Assessment Content */}
            {featureId === 'quality-assessment' && (
              <>
                <TabsContent value="assess">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Upload className="w-5 h-5" />
                        Upload for Assessment
                      </h3>
                      <div className="border-2 border-dashed border-orange-200 rounded-lg p-8 text-center">
                        <Camera className="w-12 h-12 mx-auto text-orange-400 mb-4" />
                        <p className="text-muted-foreground mb-4">Upload photos of your craft for AI quality assessment</p>
                        <Button className="btn-hero">
                          <Upload className="w-4 h-4 mr-2" />
                          Choose Photos
                        </Button>
                      </div>
                    </Card>
                    <ChatInterface 
                      title="Quality Assistant"
                      placeholder="Ask about quality standards, improvements..."
                      aiType="quality"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="history" className="space-y-4">
                  {feature.data.history?.map((item: any, index: number) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">{item.item}</h4>
                          <p className="text-sm text-muted-foreground">{item.date} • {item.improvements} improvements suggested</p>
                        </div>
                        <div className="text-right">
                          <div className={`text-2xl font-bold ${
                            item.score >= 90 ? 'text-green-600' : item.score >= 80 ? 'text-orange-600' : 'text-red-600'
                          }`}>
                            {item.score}
                          </div>
                          <Badge variant={item.status === 'excellent' ? 'default' : 'secondary'}>
                            {item.status}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  ))}
                </TabsContent>
              </>
            )}

            {/* Add similar content for other features... */}
            {featureId === 'market-tracker' && (
              <TabsContent value="prices" className="space-y-4">
                {feature.data.prices?.map((item: any, index: number) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{item.product}</h4>
                        <p className="text-sm text-muted-foreground">Volume: {item.volume}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold">{item.current}</div>
                        <Badge variant={item.trend === 'up' ? 'default' : 'secondary'}>
                          <TrendingUp className={`w-3 h-3 mr-1 ${item.trend === 'down' ? 'rotate-180' : ''}`} />
                          {item.change}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>
            )}

          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FeatureModal;