import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SdgBadge } from "@/components/sdg-badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
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

export default function SdgContributionsPage() {
  // Mock data for SDG contributions
  const sdgContributions = [
    { sdg: 4, count: 5, percentage: 25 },
    { sdg: 9, count: 7, percentage: 35 },
    { sdg: 17, count: 3, percentage: 15 },
    { sdg: 11, count: 2, percentage: 10 },
    { sdg: 6, count: 1, percentage: 5 },
    { sdg: 7, count: 1, percentage: 5 },
    { sdg: 13, count: 1, percentage: 5 },
  ]

  const contributionsByYear = [
    { year: "2020", "SDG 4": 1, "SDG 9": 1, "SDG 17": 0, "SDG 11": 0, "SDG 6": 0, "SDG 7": 0, "SDG 13": 0 },
    { year: "2021", "SDG 4": 2, "SDG 9": 2, "SDG 17": 1, "SDG 11": 1, "SDG 6": 0, "SDG 7": 0, "SDG 13": 0 },
    { year: "2022", "SDG 4": 3, "SDG 9": 4, "SDG 17": 2, "SDG 11": 1, "SDG 6": 1, "SDG 7": 0, "SDG 13": 0 },
    { year: "2023", "SDG 4": 5, "SDG 9": 7, "SDG 17": 3, "SDG 11": 2, "SDG 6": 1, "SDG 7": 1, "SDG 13": 1 },
  ]

  const contributionsByType = [
    { name: "Research Papers", "SDG 4": 2, "SDG 9": 3, "SDG 17": 1, "SDG 11": 0, "SDG 6": 0, "SDG 7": 1, "SDG 13": 1 },
    { name: "Projects", "SDG 4": 1, "SDG 9": 2, "SDG 17": 1, "SDG 11": 1, "SDG 6": 1, "SDG 7": 0, "SDG 13": 0 },
    { name: "Hackathons", "SDG 4": 1, "SDG 9": 1, "SDG 17": 0, "SDG 11": 1, "SDG 6": 0, "SDG 7": 0, "SDG 13": 0 },
    { name: "Patents", "SDG 4": 1, "SDG 9": 1, "SDG 17": 1, "SDG 11": 0, "SDG 6": 0, "SDG 7": 0, "SDG 13": 0 },
  ]

  const pieData = sdgContributions.map((item) => ({
    name: `SDG ${item.sdg}`,
    value: item.count,
    sdg: item.sdg,
  }))

  const recentContributions = [
    {
      title: "Machine Learning for Sustainable Energy Systems",
      type: "Research Paper",
      date: "2023-03-15",
      sdgs: [7, 9, 13],
    },
    {
      title: "Smart Water Management System",
      type: "Project",
      date: "2023-04-02",
      sdgs: [6, 9, 11],
    },
    {
      title: "Blockchain for Supply Chain",
      type: "Patent",
      date: "2023-02-20",
      sdgs: [9, 17],
    },
    {
      title: "Educational App for Rural Areas",
      type: "Hackathon",
      date: "2022-11-10",
      sdgs: [4, 17],
    },
    {
      title: "Sustainable Urban Planning Tool",
      type: "Project",
      date: "2022-09-05",
      sdgs: [11],
    },
  ]

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">SDG Contributions</h2>
          <p className="text-muted-foreground">
            Track your contributions to the Sustainable Development Goals through your academic work
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total SDG Contributions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">20</div>
              <p className="text-xs text-muted-foreground">Across 7 different SDGs</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Top SDG</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <SdgBadge sdg={9} size="lg" />
              <div>
                <div className="text-2xl font-bold">SDG 9</div>
                <p className="text-xs text-muted-foreground">Industry, Innovation and Infrastructure</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Most Recent</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">SDG 6, 9, 11</div>
              <p className="text-xs text-muted-foreground">Smart Water Management System</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">SDG Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7/17</div>
              <p className="text-xs text-muted-foreground">SDGs contributed to</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="contributions">Contributions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>SDG Distribution</CardTitle>
                  <CardDescription>Your contributions by SDG</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {pieData.map((entry) => (
                            <Cell key={`cell-${entry.sdg}`} fill={`var(--sdg-${entry.sdg})`} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>SDG Progress</CardTitle>
                  <CardDescription>Your contribution levels</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sdgContributions.map((item) => (
                      <div key={item.sdg} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <SdgBadge sdg={item.sdg} />
                            <span>SDG {item.sdg}</span>
                          </div>
                          <span className="font-medium">{item.count}</span>
                        </div>
                        <Progress value={item.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent SDG Contributions</CardTitle>
                <CardDescription>Your latest work and their SDG alignments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentContributions.map((contribution) => (
                    <div
                      key={contribution.title}
                      className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                    >
                      <div className="space-y-1">
                        <p className="font-medium">{contribution.title}</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <span>{contribution.type}</span>
                          <span className="mx-2">•</span>
                          <span>{new Date(contribution.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {contribution.sdgs.map((sdg) => (
                          <SdgBadge key={sdg} sdg={sdg} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>SDG Contributions Over Time</CardTitle>
                <CardDescription>How your contributions have evolved</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={contributionsByYear} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="SDG 4" stroke="var(--sdg-4)" strokeWidth={2} />
                      <Line type="monotone" dataKey="SDG 9" stroke="var(--sdg-9)" strokeWidth={2} />
                      <Line type="monotone" dataKey="SDG 17" stroke="var(--sdg-17)" strokeWidth={2} />
                      <Line type="monotone" dataKey="SDG 11" stroke="var(--sdg-11)" strokeWidth={2} />
                      <Line type="monotone" dataKey="SDG 6" stroke="var(--sdg-6)" strokeWidth={2} />
                      <Line type="monotone" dataKey="SDG 7" stroke="var(--sdg-7)" strokeWidth={2} />
                      <Line type="monotone" dataKey="SDG 13" stroke="var(--sdg-13)" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SDG Contributions by Type</CardTitle>
                <CardDescription>Distribution across different achievement types</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={contributionsByType} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="SDG 4" stackId="a" fill="var(--sdg-4)" />
                      <Bar dataKey="SDG 9" stackId="a" fill="var(--sdg-9)" />
                      <Bar dataKey="SDG 17" stackId="a" fill="var(--sdg-17)" />
                      <Bar dataKey="SDG 11" stackId="a" fill="var(--sdg-11)" />
                      <Bar dataKey="SDG 6" stackId="a" fill="var(--sdg-6)" />
                      <Bar dataKey="SDG 7" stackId="a" fill="var(--sdg-7)" />
                      <Bar dataKey="SDG 13" stackId="a" fill="var(--sdg-13)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contributions" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>All SDG Contributions</CardTitle>
                <CardDescription>Complete list of your contributions to each SDG</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {sdgContributions.map((item) => (
                    <div key={item.sdg} className="space-y-4">
                      <div className="flex items-center gap-3">
                        <SdgBadge sdg={item.sdg} size="lg" />
                        <div>
                          <h3 className="font-bold">SDG {item.sdg}</h3>
                          <p className="text-sm text-muted-foreground">
                            {item.count} {item.count === 1 ? "contribution" : "contributions"}
                          </p>
                        </div>
                      </div>
                      <div className="pl-10 space-y-2">
                        {recentContributions
                          .filter((contribution) => contribution.sdgs.includes(item.sdg))
                          .map((contribution) => (
                            <div
                              key={`${item.sdg}-${contribution.title}`}
                              className="flex items-center justify-between py-2 border-b last:border-0"
                            >
                              <div>
                                <p className="font-medium">{contribution.title}</p>
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <span>{contribution.type}</span>
                                  <span className="mx-2">•</span>
                                  <span>{new Date(contribution.date).toLocaleDateString()}</span>
                                </div>
                              </div>
                              <div className="flex gap-1">
                                {contribution.sdgs
                                  .filter((sdg) => sdg !== item.sdg)
                                  .map((sdg) => (
                                    <SdgBadge key={sdg} sdg={sdg} size="sm" />
                                  ))}
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  )
}
