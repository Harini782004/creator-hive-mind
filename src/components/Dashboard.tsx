import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, MessageSquarePlus, Youtube, Captions } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Dashboard = () => {
  const stats = [
    { label: "Total Followers", value: "127.5K", change: "+12.3%", trend: "up" },
    { label: "Monthly Earnings", value: "$3,240", change: "+8.7%", trend: "up" },
    { label: "Engagement Rate", value: "4.8%", change: "+0.3%", trend: "up" },
    { label: "Content Created", value: "48", change: "+15", trend: "up" },
  ];

  const recentTrends = [
    { topic: "#CreatorEconomy", engagement: "94K", category: "Business" },
    { topic: "#AIContent", engagement: "78K", category: "Tech" },
    { topic: "#SocialMediaTips", engagement: "65K", category: "Education" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div 
        className="relative h-80 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <div className="space-y-4 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Creator Hive Mind
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Your AI-powered companion for creating viral content and maximizing earnings
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="hero" size="lg" className="animate-glow">
                <MessageSquarePlus className="w-5 h-5" />
                Create Content
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <TrendingUp className="w-5 h-5" />
                View Analytics
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="container mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <Badge variant={stat.trend === "up" ? "default" : "secondary"} className="bg-gradient-success">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {stat.change}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <Card className="lg:col-span-2 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquarePlus className="w-5 h-5 text-primary" />
                Quick Actions
              </CardTitle>
              <CardDescription>
                Jump into your most-used creator tools
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="gradient" className="h-20 flex-col">
                <Captions className="w-6 h-6 mb-2" />
                Generate Captions
              </Button>
              <Button variant="gradient" className="h-20 flex-col">
                <MessageSquarePlus className="w-6 h-6 mb-2" />
                Design Posts
              </Button>
              <Button variant="gradient" className="h-20 flex-col">
                <MessageSquarePlus className="w-6 h-6 mb-2" />
                Content Ideas
              </Button>
              <Button variant="gradient" className="h-20 flex-col">
                <Youtube className="w-6 h-6 mb-2" />
                Video Scripts
              </Button>
            </CardContent>
          </Card>

          {/* Trending Topics */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Trending Now
              </CardTitle>
              <CardDescription>
                Hot topics in your niche
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentTrends.map((trend, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                  <div>
                    <p className="font-medium">{trend.topic}</p>
                    <p className="text-sm text-muted-foreground">{trend.engagement} engagements</p>
                  </div>
                  <Badge variant="outline">{trend.category}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="mt-8 shadow-card">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest content performance and actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "Posted new Instagram reel", time: "2 hours ago", metric: "1.2K views" },
                { action: "Generated TikTok caption", time: "4 hours ago", metric: "Saved to drafts" },
                { action: "Analyzed trending hashtags", time: "6 hours ago", metric: "15 new tags found" },
                { action: "Published YouTube short", time: "1 day ago", metric: "5.8K views" },
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary/30 transition-colors">
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                  <Badge variant="secondary">{activity.metric}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;