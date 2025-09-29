import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/ui/navigation";
import { Camera, MapPin, Upload, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const categories = [
  { value: "roads", label: "Roads & Infrastructure", color: "bg-orange-500" },
  { value: "lighting", label: "Street Lighting", color: "bg-yellow-500" },
  { value: "waste", label: "Waste Management", color: "bg-green-500" },
  { value: "water", label: "Water & Drainage", color: "bg-blue-500" },
  { value: "traffic", label: "Traffic & Transport", color: "bg-red-500" },
  { value: "environment", label: "Parks & Environment", color: "bg-emerald-500" },
];

const ReportIssue = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    severity: "",
    location: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Issue Reported Successfully!",
        description: `Your report #CW${Math.floor(Math.random() * 10000)} has been submitted and will be reviewed by the relevant department.`,
      });
      setIsSubmitting(false);
      setFormData({ title: "", description: "", category: "", severity: "", location: "" });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Report Civic Issue</h1>
            <p className="text-muted-foreground">
              Help improve your community by reporting infrastructure and civic issues
            </p>
          </div>

          <Card className="shadow-card-custom">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                Issue Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Issue Title</Label>
                  <Input
                    id="title"
                    placeholder="Brief description of the issue"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat.value} value={cat.value}>
                            <div className="flex items-center gap-2">
                              <div className={`w-3 h-3 rounded-full ${cat.color}`}></div>
                              {cat.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="severity">Severity</Label>
                    <Select value={formData.severity} onValueChange={(value) => setFormData(prev => ({ ...prev, severity: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select severity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">
                          <Badge variant="secondary">Low</Badge>
                        </SelectItem>
                        <SelectItem value="medium">
                          <Badge className="bg-yellow-500">Medium</Badge>
                        </SelectItem>
                        <SelectItem value="high">
                          <Badge className="bg-orange-500">High</Badge>
                        </SelectItem>
                        <SelectItem value="critical">
                          <Badge variant="destructive">Critical</Badge>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <div className="flex gap-2">
                    <Input
                      id="location"
                      placeholder="Enter address or landmark"
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                      required
                    />
                    <Button type="button" variant="outline" size="icon">
                      <MapPin className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Detailed Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide more details about the issue, when it occurred, and any other relevant information"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    rows={4}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Photos</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Button type="button" variant="outline" className="h-32 flex-col gap-2">
                      <Camera className="h-8 w-8 text-muted-foreground" />
                      <span className="text-sm">Take Photo</span>
                    </Button>
                    <Button type="button" variant="outline" className="h-32 flex-col gap-2">
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      <span className="text-sm">Upload Image</span>
                    </Button>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Report"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReportIssue;