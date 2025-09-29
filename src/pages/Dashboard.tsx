import { useState } from "react";
import Navigation from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Clock, CheckCircle, AlertTriangle, Search, Filter, Eye } from "lucide-react";

// Mock data for issues
const mockIssues = [
  {
    id: "CW2847",
    title: "Large pothole on MG Road",
    category: "Roads & Infrastructure",
    severity: "high",
    status: "in-progress",
    location: "MG Road, Near Metro Station",
    reportedDate: "2024-01-15",
    upvotes: 23,
    comments: 5
  },
  {
    id: "CW2846",
    title: "Street light not working",
    category: "Street Lighting",
    severity: "medium",
    status: "acknowledged",
    location: "Park Street, Block A",
    reportedDate: "2024-01-14",
    upvotes: 12,
    comments: 2
  },
  {
    id: "CW2845",
    title: "Garbage not collected for 3 days",
    category: "Waste Management",
    severity: "high",
    status: "reported",
    location: "Sector 15, Residential Area",
    reportedDate: "2024-01-13",
    upvotes: 45,
    comments: 8
  },
  {
    id: "CW2844",
    title: "Water logging during rain",
    category: "Water & Drainage",
    severity: "critical",
    status: "resolved",
    location: "Main Market Road",
    reportedDate: "2024-01-12",
    upvotes: 67,
    comments: 15
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "reported": return "bg-blue-500";
    case "acknowledged": return "bg-yellow-500";
    case "in-progress": return "bg-orange-500";
    case "resolved": return "bg-green-500";
    default: return "bg-gray-500";
  }
};

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "low": return "bg-gray-500";
    case "medium": return "bg-yellow-500";
    case "high": return "bg-orange-500";
    case "critical": return "bg-red-500";
    default: return "bg-gray-500";
  }
};

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");

  const filteredIssues = mockIssues.filter(issue => {
    const matchesSearch = issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         issue.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || issue.status === filterStatus;
    const matchesCategory = filterCategory === "all" || issue.category === filterCategory;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Community Dashboard</h1>
          <p className="text-muted-foreground">
            Track reported issues and their resolution status in your community
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">247</p>
                  <p className="text-sm text-muted-foreground">Total Reports</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-8 w-8 text-orange-500" />
                <div>
                  <p className="text-2xl font-bold">89</p>
                  <p className="text-sm text-muted-foreground">In Progress</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">158</p>
                  <p className="text-sm text-muted-foreground">Resolved</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <MapPin className="h-8 w-8 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Avg Days</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search issues by title or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="reported">Reported</SelectItem>
                  <SelectItem value="acknowledged">Acknowledged</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Roads & Infrastructure">Roads & Infrastructure</SelectItem>
                  <SelectItem value="Street Lighting">Street Lighting</SelectItem>
                  <SelectItem value="Waste Management">Waste Management</SelectItem>
                  <SelectItem value="Water & Drainage">Water & Drainage</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Issues List */}
        <div className="space-y-4">
          {filteredIssues.map((issue) => (
            <Card key={issue.id} className="hover:shadow-card-custom transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className="font-mono">
                        {issue.id}
                      </Badge>
                      <Badge className={`${getStatusColor(issue.status)} text-white`}>
                        {issue.status.replace("-", " ").toUpperCase()}
                      </Badge>
                      <Badge className={`${getSeverityColor(issue.severity)} text-white`}>
                        {issue.severity.toUpperCase()}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{issue.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {issue.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {issue.reportedDate}
                      </div>
                      <Badge variant="secondary">{issue.category}</Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <p className="text-lg font-semibold">{issue.upvotes}</p>
                      <p className="text-xs text-muted-foreground">upvotes</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold">{issue.comments}</p>
                      <p className="text-xs text-muted-foreground">comments</p>
                    </div>
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredIssues.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <AlertTriangle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No issues found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or report a new issue.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Dashboard;