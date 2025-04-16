"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

export default function AnalyticsDashboard() {
  // Mock data for analytics
  const achievementsByYear = [
    { year: "2019", count: 28 },
    { year: "2020", count: 42 },
    { year: "2021", count: 56 },
    { year: "2022", count: 78 },
    { year: "2023", count: 95 },
  ]

  const achievementsByType = [
    { name: "Research Papers", value: 45 },
    { name: "Patents", value: 15 },
    { name: "Projects", value: 30 },
    { name: "Hackathons", value: 20 },
    { name: "Workshops", value: 18 },
  ]

  const achievementsByDepartment = [
    { name: "Computer Science", value: 42 },
    { name: "Electrical Engineering", value: 28 },
    { name: "Mechanical Engineering", value: 22 },
    { name: "Civil Engineering", value: 18 },
    { name: "Biotechnology", value: 15 },
  ]

  const sdgContributionsByYear = [
    { year: "2019", "SDG 4": 10, "SDG 9": 15, "SDG 17": 8 },
    { year: "2020", "SDG 4": 15, "SDG 9": 20, "SDG 17": 12 },
    { year: "2021", "SDG 4": 18, "SDG 9": 25, "SDG 17": 15 },
    { year: "2022", "SDG 4": 22, "SDG 9": 32, "SDG 17": 20 },
    { year: "2023", "SDG 4": 28, "SDG 9": 38, "SDG 17": 24 },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]
  const SDG_COLORS = {
    "SDG 4": "#c5192d",
    "SDG 9": "#f36d25",
    "SDG 17": "#19486a",
  }

  return (
    <DashboardLayout userRole="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h2>
            <p className="text-muted-foreground">Comprehensive analytics of academic achievements</p>
          </div>
          <div className="flex items-center gap-4">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="cs">Computer Science</SelectItem>
                <SelectItem value="ee">Electrical Engineering</SelectItem>
                <SelectItem value="me">Mechanical Engineering</SelectItem>
                <SelectItem value="ce">Civil Engineering</SelectItem>
                <SelectItem value="bt">Biotechnology</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="2023">
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
                <SelectItem value="2019">2019</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="overview">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="departments">Departments</TabsTrigger>
            <TabsTrigger value="sdgs">SDGs</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Achievements by Year</CardTitle>
                  <CardDescription>Total number of achievements per year</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={achievementsByYear} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="count"
                          name="Achievements"
                          stroke="#8884d8"
                          activeDot={{ r: 8 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Achievements by Type</CardTitle>
                  <CardDescription>Distribution of achievements by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={achievementsByType}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {achievementsByType.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>SDG Contributions by Year</CardTitle>
                <CardDescription>Tracking SDG contributions over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sdgContributionsByYear} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="SDG 4" fill={SDG_COLORS["SDG 4"]} />
                      <Bar dataKey="SDG 9" fill={SDG_COLORS["SDG 9"]} />
                      <Bar dataKey="SDG 17" fill={SDG_COLORS["SDG 17"]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="departments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Achievements by Department</CardTitle>
                <CardDescription>Distribution of achievements across departments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={achievementsByDepartment}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis type="category" dataKey="name" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value" name="Achievements" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sdgs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>SDG Contributions</CardTitle>
                <CardDescription>Analysis of contributions to Sustainable Development Goals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sdgContributionsByYear} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="SDG 4" stroke={SDG_COLORS["SDG 4"]} strokeWidth={2} />
                      <Line type="monotone" dataKey="SDG 9" stroke={SDG_COLORS["SDG 9"]} strokeWidth={2} />
                      <Line type="monotone" dataKey="SDG 17" stroke={SDG_COLORS["SDG 17"]} strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
