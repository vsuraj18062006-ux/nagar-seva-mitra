import { useState } from "react";
import Navigation from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  Users, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  TrendingUp,
  MapPin,
  Calendar,
  Filter,
  Download
} from "lucide-react";

const Admin = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [dateRange, setDateRange] = useState("30");

  // Mock admin data
  const adminStats = {
    totalReports: 1247,
    pendingReports: 234,
    inProgress: 89,
    resolved: 924,
    avgResolutionTime: 8.5,
    citizenSatisfaction: 87
  };

  const departmentStats = [
    { name: "Public Works", reports: 456, resolved: 398, avgTime: "6.2 days" },
    { name: "Municipal Corp", reports: 321, resolved: 287, avgTime: "4.8 days" },
    { name: "Traffic Police", reports: 234, resolved: 156, avgTime: "12.1 days" },
    { name: "Water Board", reports: 236, resolved: 183, avgTime: "9.3 days" }
  ];

  const recentReports = [
    {
      id: "CW2847",
      title: "Large pothole on MG Road",
      severity: "high",
      department: "Public Works",
      assignee: "Team Alpha",
      daysOpen: 3,
      priority: "urgent"
    },
    {
      id: "CW2846", 
      title: "Street light maintenance required",
      severity: "medium",
      department: "Municipal Corp",
      assignee: "Team Beta",
      daysOpen: 1,
      priority: "normal"
    },
    {
      id: "CW2845",
      title: "Garbage collection missed",
      severity: "high",
      department: "Municipal Corp", 
      assignee: "Team Gamma",
      daysOpen: 2,
      priority: "high"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Government Admin Portal</h1>
          <p className="text-muted-foreground">
            Manage and track civic issues across all departments
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="reports">Manage Reports</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="teams">Teams</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-6 w-6 text-blue-500" />
                    <div>
                      <p className="text-lg font-bold">{adminStats.totalReports}</p>
                      <p className="text-xs text-muted-foreground">Total Reports</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-6 w-6 text-orange-500" />
                    <div>
                      <p className="text-lg font-bold">{adminStats.pendingReports}</p>
                      <p className="text-xs text-muted-foreground">Pending</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-6 w-6 text-yellow-500" />
                    <div>
                      <p className="text-lg font-bold">{adminStats.inProgress}</p>
                      <p className="text-xs text-muted-foreground">In Progress</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <div>
                      <p className="text-lg font-bold">{adminStats.resolved}</p>
                      <p className="text-xs text-muted-foreground">Resolved</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-6 w-6 text-purple-500" />
                    <div>
                      <p className="text-lg font-bold">{adminStats.avgResolutionTime}d</p>
                      <p className="text-xs text-muted-foreground">Avg Resolution</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Users className="h-6 w-6 text-cyan-500" />
                    <div>
                      <p className="text-lg font-bold">{adminStats.citizenSatisfaction}%</p>
                      <p className="text-xs text-muted-foreground">Satisfaction</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Department Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Department Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {departmentStats.map((dept, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                      <div>
                        <h3 className="font-semibold">{dept.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {dept.resolved}/{dept.reports} resolved
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge className="mb-1">
                          {Math.round((dept.resolved / dept.reports) * 100)}% resolved
                        </Badge>
                        <p className="text-sm text-muted-foreground">Avg: {dept.avgTime}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent High Priority Reports */}
            <Card>
              <CardHeader>
                <CardTitle>High Priority Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentReports.map((report) => (
                    <div key={report.id} className="flex items-center justify-between p-4 rounded-lg border">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline">{report.id}</Badge>
                          <Badge className={
                            report.priority === "urgent" ? "bg-red-500" :
                            report.priority === "high" ? "bg-orange-500" : "bg-yellow-500"
                          }>
                            {report.priority}
                          </Badge>
                        </div>
                        <h4 className="font-medium">{report.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {report.department} • Assigned to {report.assignee}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{report.daysOpen} days</p>
                        <Button size="sm" className="mt-1">Assign</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Report Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Departments</SelectItem>
                      <SelectItem value="public-works">Public Works</SelectItem>
                      <SelectItem value="municipal">Municipal Corp</SelectItem>
                      <SelectItem value="traffic">Traffic Police</SelectItem>
                      <SelectItem value="water">Water Board</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    More Filters
                  </Button>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export Data
                  </Button>
                </div>
                <p className="text-muted-foreground">
                  Detailed report management interface would be implemented here with filtering, 
                  assignment, and bulk actions capabilities.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Analytics & Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-6">
                  <Select value={dateRange} onValueChange={setDateRange}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Date Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7">Last 7 days</SelectItem>
                      <SelectItem value="30">Last 30 days</SelectItem>
                      <SelectItem value="90">Last 3 months</SelectItem>
                      <SelectItem value="365">Last year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart3 className="h-5 w-5" />
                      <h3 className="font-semibold">Reports by Category</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Interactive charts showing report distribution, resolution trends, 
                      and performance metrics would be displayed here.
                    </p>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="h-5 w-5" />
                      <h3 className="font-semibold">Geographic Heat Map</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Heat map visualization showing issue density across different 
                      areas and neighborhoods.
                    </p>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="teams" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Team Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Team management interface for assigning personnel, tracking workloads, 
                  and managing department resources would be implemented here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;