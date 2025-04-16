import Link from "next/link"
import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Award, FileText, CheckCircle, Clock, AlertCircle, BarChart3, ExternalLink } from "lucide-react"

export default function StudentDashboard() {
  const stats = [
    {
      title: "Total Submissions",
      value: 12,
      icon: FileText,
      description: "Across all categories",
    },
    {
      title: "Approved",
      value: 8,
      icon: CheckCircle,
      description: "Verified achievements",
    },
    {
      title: "Pending",
      value: 3,
      icon: Clock,
      description: "Awaiting verification",
    },
    {
      title: "Rejected",
      value: 1,
      icon: AlertCircle,
      description: "Needs revision",
    },
  ]

  const recentAchievements = [
    {
      title: "Machine Learning Research Paper",
      type: "Research Paper",
      status: "Approved",
      date: "2023-03-15",
      sdgs: [4, 9],
    },
    {
      title: "Smart Water Management System",
      type: "Project",
      status: "Pending",
      date: "2023-04-02",
      sdgs: [6, 9, 11],
    },
    {
      title: "Blockchain for Supply Chain",
      type: "Patent",
      status: "Approved",
      date: "2023-02-20",
      sdgs: [9, 17],
    },
  ]

  const sdgContributions = [
    { sdg: 4, count: 5 },
    { sdg: 9, count: 7 },
    { sdg: 17, count: 3 },
    { sdg: 11, count: 2 },
    { sdg: 6, count: 1 },
  ]

  const opportunities = [
    {
      title: "IEEE International Conference on AI",
      type: "Conference",
      deadline: "2023-06-15",
      relevance: "High",
    },
    {
      title: "Google Research Internship",
      type: "Internship",
      deadline: "2023-05-30",
      relevance: "Medium",
    },
    {
      title: "Sustainable Tech Hackathon",
      type: "Hackathon",
      deadline: "2023-07-10",
      relevance: "High",
    },
  ]

  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Student Dashboard</h2>
          <p className="text-muted-foreground">Welcome back! Here's an overview of your academic achievements.</p>
        </div>
        <div className="flex gap-2">
          <Link href="/dashboard/student/submit">
            <Button>
              <FileText className="mr-2 h-4 w-4" />
              Submit New
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Achievements</CardTitle>
            <CardDescription>Your latest submissions and their status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAchievements.map((achievement) => (
                <div key={achievement.title} className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Award className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{achievement.title}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span>{achievement.type}</span>
                      <span className="mx-2">•</span>
                      <span>{new Date(achievement.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div
                    className={`text-xs font-medium ${
                      achievement.status === "Approved"
                        ? "text-green-500"
                        : achievement.status === "Pending"
                          ? "text-amber-500"
                          : "text-red-500"
                    }`}
                  >
                    {achievement.status}
                  </div>
                  <div className="flex gap-1">
                    {achievement.sdgs.map((sdg) => (
                      <div
                        key={sdg}
                        className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold"
                        style={{
                          backgroundColor:
                            sdg === 4
                              ? "#c5192d20"
                              : sdg === 6
                                ? "#26bde220"
                                : sdg === 9
                                  ? "#f36d2520"
                                  : sdg === 11
                                    ? "#f99d2620"
                                    : "#19486a20",
                          color:
                            sdg === 4
                              ? "#c5192d"
                              : sdg === 6
                                ? "#26bde2"
                                : sdg === 9
                                  ? "#f36d25"
                                  : sdg === 11
                                    ? "#f99d26"
                                    : "#19486a",
                        }}
                      >
                        {sdg}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Link href="/dashboard/student/achievements">
                <Button variant="outline" size="sm" className="w-full">
                  View All Achievements
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle>SDG Contributions</CardTitle>
              <CardDescription>Your impact on Sustainable Development Goals</CardDescription>
            </div>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sdgContributions.map((item) => (
                <div key={item.sdg} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{
                          backgroundColor:
                            item.sdg === 4
                              ? "#c5192d"
                              : item.sdg === 6
                                ? "#26bde2"
                                : item.sdg === 9
                                  ? "#f36d25"
                                  : item.sdg === 11
                                    ? "#f99d26"
                                    : "#19486a",
                        }}
                      />
                      <span>SDG {item.sdg}</span>
                    </div>
                    <span className="font-medium">{item.count}</span>
                  </div>
                  <Progress value={item.count * 10} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recommended Opportunities</CardTitle>
          <CardDescription>Personalized opportunities based on your profile and interests</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {opportunities.map((opportunity) => (
              <div key={opportunity.title} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{opportunity.title}</h3>
                    <Badge variant={opportunity.relevance === "High" ? "default" : "secondary"}>
                      {opportunity.relevance} Match
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>{opportunity.type}</span>
                    <span className="mx-2">•</span>
                    <span>Deadline: {opportunity.deadline}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </DashboardShell>
  )
}
