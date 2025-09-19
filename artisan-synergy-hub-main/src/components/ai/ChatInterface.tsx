import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Bot, User, Send, Sparkles, Lightbulb, TrendingUp, ShieldCheck } from 'lucide-react';

interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

interface ChatInterfaceProps {
  title: string;
  placeholder?: string;
  aiType?: 'advisor' | 'quality' | 'market' | 'general';
}

const ChatInterface = ({ title, placeholder = "Ask me anything...", aiType = 'general' }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'ai',
      content: getWelcomeMessage(aiType),
      timestamp: new Date(),
      suggestions: getSuggestions(aiType)
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  function getWelcomeMessage(type: string): string {
    switch (type) {
      case 'advisor':
        return "Hello! I'm your AI Business Advisor. I can help you with pricing strategies, market opportunities, legal guidance, and business planning. What would you like to discuss today?";
      case 'quality':
        return "Welcome to Quality Assessment! I can analyze your craft photos, provide quality scores, suggest improvements, and help with certification requirements. How can I assist you?";
      case 'market':
        return "Hi! I'm your Market Intelligence assistant. I can provide real-time pricing data, demand trends, competitor analysis, and export opportunities. What market insights do you need?";
      default:
        return "Hello! I'm your AI assistant. I'm here to help you with your craft business. How can I support you today?";
    }
  }

  function getSuggestions(type: string): string[] {
    switch (type) {
      case 'advisor':
        return [
          "Help me price my pottery pieces",
          "What legal documents do I need?",
          "How to find export opportunities?",
          "Business planning advice"
        ];
      case 'quality':
        return [
          "Analyze my craft quality",
          "Improvement suggestions",
          "Certification requirements",
          "Quality standards check"
        ];
      case 'market':
        return [
          "Current market prices",
          "Demand trends analysis",
          "Competitor pricing",
          "Export market opportunities"
        ];
      default:
        return [
          "Business advice",
          "Market insights",
          "Quality assessment",
          "General help"
        ];
    }
  }

  const generateAIResponse = (userMessage: string): string => {
    const responses = {
      advisor: [
        "Based on current market analysis, I recommend pricing your handwoven scarves at ₹1,200-1,800. This is 15% above current market rate due to your excellent craftsmanship quality.",
        "For export documentation, you'll need: GST registration, IEC code, and craft authenticity certificate. I can help you generate these documents automatically.",
        "I've identified 3 new market opportunities in your area: Wedding season demand is increasing by 23%, and there's a new craft fair in Delhi next month.",
        "Your business shows strong growth potential. Consider expanding to online platforms - I predict 40% revenue increase based on similar artisan profiles."
      ],
      quality: [
        "Quality Analysis Complete: Your pottery shows 94% adherence to traditional standards. Minor improvements suggested in glaze consistency and finishing touches.",
        "Excellent work! Your weaving technique scores 96/100. The thread tension is perfect, and color combinations are commercially viable.",
        "Quality Assessment: Your jewelry craftsmanship meets export standards. I recommend obtaining BIS certification to access premium markets.",
        "Great improvement! Compared to last month, your quality score increased from 87% to 93%. Keep focusing on consistent finishing."
      ],
      market: [
        "Current Market Update: Handloom textiles are trending 18% higher this month. Demand peak expected during festival season in 3 weeks.",
        "Price Analysis: Your craft category shows ₹200-400 price increase opportunity. Competitors are pricing 12% lower but with inferior quality.",
        "Export Opportunity Alert: European markets showing 25% increased demand for authentic Indian crafts. Suggested target: Germany and France.",
        "Market Intelligence: Similar artisans in your region report 30% revenue growth after implementing AI recommendations. Ready to optimize your strategy?"
      ],
      general: [
        "I can help you with business strategy, quality assessment, market insights, and more. What specific area would you like to focus on?",
        "Based on your profile, I recommend focusing on digital marketing and quality certification. This combination typically increases revenue by 35%.",
        "Your craft business has great potential! Let me analyze your current performance and suggest personalized improvement strategies.",
        "I'm here to support your success. Whether it's pricing, quality, or market expansion - I have data-driven insights ready for you."
      ]
    };

    const responseArray = responses[aiType as keyof typeof responses] || responses.general;
    return responseArray[Math.floor(Math.random() * responseArray.length)];
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI typing delay
    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: generateAIResponse(input),
        timestamp: new Date(),
        suggestions: Math.random() > 0.5 ? [
          "Tell me more about this",
          "Show me examples",
          "What's the next step?",
          "Any other recommendations?"
        ] : undefined
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const getAIIcon = () => {
    switch (aiType) {
      case 'advisor':
        return <Lightbulb className="w-4 h-4" />;
      case 'quality':
        return <ShieldCheck className="w-4 h-4" />;
      case 'market':
        return <TrendingUp className="w-4 h-4" />;
      default:
        return <Bot className="w-4 h-4" />;
    }
  };

  return (
    <Card className="flex flex-col h-[600px] glass-card">
      <div className="flex items-center gap-3 p-4 border-b border-orange-100">
        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
          {getAIIcon()}
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <Badge variant="secondary" className="text-xs">
            <Sparkles className="w-3 h-3 mr-1" />
            AI Powered
          </Badge>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : ''}`}>
              {message.type === 'ai' && (
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-gradient-to-br from-green-400 to-blue-500 text-white text-xs">
                    AI
                  </AvatarFallback>
                </Avatar>
              )}
              <div className={`max-w-[80%] ${message.type === 'user' ? 'order-first' : ''}`}>
                <div className={`p-3 rounded-2xl ${
                  message.type === 'user' 
                    ? 'bg-gradient-to-br from-orange-400 to-pink-500 text-white ml-auto' 
                    : 'bg-gradient-to-br from-green-100 to-blue-100 text-gray-800'
                }`}>
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
                {message.suggestions && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {message.suggestions.map((suggestion, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="text-xs h-7"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        {suggestion}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
              {message.type === 'user' && (
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-gradient-to-br from-orange-400 to-pink-500 text-white text-xs">
                    <User className="w-4 h-4" />
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-gradient-to-br from-green-400 to-blue-500 text-white text-xs">
                  AI
                </AvatarFallback>
              </Avatar>
              <div className="p-3 rounded-2xl bg-gradient-to-br from-green-100 to-blue-100">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-orange-100">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="border-orange-200 focus:border-orange-400"
          />
          <Button 
            onClick={handleSend} 
            disabled={!input.trim() || isTyping}
            className="bg-gradient-to-br from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ChatInterface;