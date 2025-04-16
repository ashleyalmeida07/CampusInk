"use client"

import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SdgBadge } from "@/components/sdg-badge"
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

  const topStudents = [
    { name: "Priya Sharma", department: "Computer Science", publications: 5, achievements: 8, sdgs: [4, 9] },
    { name: "Rahul Gupta", department: "Electrical Engineering", publications: 3, achievements: 6, sdgs: [7, 9] },
    { name: "Ananya Patel", department: "Computer Science", publications: 4, achievements: 7, sdgs: [9, 17] },
    { name: "David Chen", department: "Civil Engineering", publications: 2, achievements: 5, sdgs: [11, 13] },
    { name: "Sarah Williams", department: "Mechanical Engineering", publications: 3, achievements: 4, sdgs: [9, 12] },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Department Analytics</h2>
            <p className="text-muted-foreground">Comprehensive analytics of academic achievements in your department</p>
          </div>
          <div className="flex items-center gap-4">
            <Select defaultValue="cs">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
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

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Publications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">128</div>
              <p className="text-xs text-muted-foreground">+24% from last year</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Patents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">+50% from last year</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-muted-foreground">Across all years</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">SDG Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">9/17</div>
              <p className="text-xs text-muted-foreground">SDGs contributed to</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
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
                          stroke="hsl(var(--primary))"
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
                          fill="hsl(var(--primary))"
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
                      <Bar dataKey="SDG 4" fill="var(--sdg-4)" />
                      <Bar dataKey="SDG 9" fill="var(--sdg-9)" />
                      <Bar dataKey="SDG 17" fill="var(--sdg-17)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Students</CardTitle>
                <CardDescription>Students with the most achievements and publications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {topStudents.map((student, index) => (
                    <div
                      key={student.name}
                      className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-muted-foreground">{student.department}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <p className="text-2xl font-bold">{student.publications}</p>
                          <p className="text-xs text-muted-foreground">Publications</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold">{student.achievements}</p>
                          <p className="text-xs text-muted-foreground">Achievements</p>
                        </div>
                        <div className="flex gap-1">
                          {student.sdgs.map((sdg) => (
                            <SdgBadge key={sdg} sdg={sdg} />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
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
                      <Line type="monotone" dataKey="SDG 4" stroke="var(--sdg-4)" strokeWidth={2} />
                      <Line type="monotone" dataKey="SDG 9" stroke="var(--sdg-9)" strokeWidth={2} />
                      <Line type="monotone" dataKey="SDG 17" stroke="var(--sdg-17)" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <SdgBadge sdg={4} size="lg" />
                    <CardTitle>SDG 4: Quality Education</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-1">28</div>
                  <p className="text-sm text-muted-foreground mb-4">Contributions in 2023</p>
                  <div className="text-sm">
                    <p className="font-medium">Top Contributors:</p>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>Priya Sharma (5)</li>
                      <li>Ananya Patel (4)</li>
                      <li>Rahul Gupta (3)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <SdgBadge sdg={9} size="lg" />
                    <CardTitle>SDG 9: Industry & Innovation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-1">38</div>
                  <p className="text-sm text-muted-foreground mb-4">Contributions in 2023</p>
                  <div className="text-sm">
                    <p className="font-medium">Top Contributors:</p>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>Ananya Patel (6)</li>
                      <li>Rahul Gupta (5)</li>
                      <li>Sarah Williams (4)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <SdgBadge sdg={17} size="lg" />
                    <CardTitle>SDG 17: Partnerships</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-1">24</div>
                  <p className="text-sm text-muted-foreground mb-4">Contributions in 2023</p>
                  <div className="text-sm">
                    <p className="font-medium">Top Contributors:</p>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>Ananya Patel (5)</li>
                      <li>David Chen (3)</li>
                      <li>Priya Sharma (3)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  )
}
