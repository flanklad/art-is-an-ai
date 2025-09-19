import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  Users, 
  ArrowLeft, 
  Mail, 
  Lock,
  User,
  MapPin,
  Sparkles,
  Eye,
  EyeOff
} from "lucide-react";

const Auth = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialRole = searchParams.get('role') as 'artisan' | 'ngo' | null;
  
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [selectedRole, setSelectedRole] = useState<'artisan' | 'ngo'>(initialRole || 'artisan');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    location: '',
    organization: '',
    craftType: ''
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - in real app, this would use Supabase auth
    if (selectedRole === 'artisan') {
      navigate('/artisan-dashboard');
    } else {
      navigate('/ngo-dashboard');
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate signup - in real app, this would use Supabase auth
    if (selectedRole === 'artisan') {
      navigate('/artisan-dashboard');
    } else {
      navigate('/ngo-dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-grid-orange-100/20" />
      
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 z-10"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Button>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center animate-pulse-soft">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold gradient-text">ArtisanFlow</h1>
          </div>
          <p className="text-muted-foreground">Welcome to the future of artisan empowerment</p>
        </div>

        {/* Role Selection */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Button
            variant={selectedRole === 'artisan' ? 'default' : 'outline'}
            onClick={() => setSelectedRole('artisan')}
            className={`p-4 h-auto flex-col space-y-2 ${
              selectedRole === 'artisan' 
                ? 'bg-gradient-to-br from-green-400 to-blue-500 text-white border-0' 
                : 'border-2 border-orange-200 hover:bg-orange-50'
            }`}
          >
            <Palette className="w-6 h-6" />
            <span className="font-medium">Artisan</span>
          </Button>
          <Button
            variant={selectedRole === 'ngo' ? 'default' : 'outline'}
            onClick={() => setSelectedRole('ngo')}
            className={`p-4 h-auto flex-col space-y-2 ${
              selectedRole === 'ngo' 
                ? 'bg-gradient-to-br from-purple-400 to-pink-500 text-white border-0' 
                : 'border-2 border-orange-200 hover:bg-orange-50'
            }`}
          >
            <Users className="w-6 h-6" />
            <span className="font-medium">NGO</span>
          </Button>
        </div>

        {/* Auth Card */}
        <Card className="p-6 glass-card">
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'login' | 'signup')}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-10 pr-10"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-2 h-6 w-6 p-0"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <Button type="submit" className="w-full btn-hero">
                  Login as {selectedRole === 'artisan' ? 'Artisan' : 'NGO'}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{selectedRole === 'artisan' ? 'Full Name' : 'Organization Name'}</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      placeholder={selectedRole === 'artisan' ? 'Your full name' : 'Organization name'}
                      className="pl-10"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="location"
                      placeholder="City, State"
                      className="pl-10"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      required
                    />
                  </div>
                </div>

                {selectedRole === 'artisan' && (
                  <div className="space-y-2">
                    <Label htmlFor="craftType">Craft Specialization</Label>
                    <Input
                      id="craftType"
                      placeholder="e.g., Pottery, Textiles, Jewelry"
                      value={formData.craftType}
                      onChange={(e) => setFormData({...formData, craftType: e.target.value})}
                      required
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      className="pl-10 pr-10"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-2 h-6 w-6 p-0"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                
                <Button type="submit" className="w-full btn-hero">
                  Create {selectedRole === 'artisan' ? 'Artisan' : 'NGO'} Account
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </Card>

        <div className="text-center mt-6">
          <Badge variant="outline" className="px-3 py-1 text-xs text-muted-foreground">
            Secured by end-to-end encryption
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Auth;