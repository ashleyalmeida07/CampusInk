import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, FileText, Users, BarChart3 } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function FacultyDashboard() {
  // Mock data for faculty dashboard
  const stats = [
    {
      title: "Pending Reviews",
      value: 8,
      icon: Clock,
      description: "Submissions awaiting your review",
    },
    {
      title: "Approved",
      value: 24,
      icon: CheckCircle,
      description: "Submissions you've approved",
    },
    {
      title: "Total Submissions",
      value: 35,
      icon: FileText,
      description: "From your department",
    },
    {
      title: "Students",
      value: 42,
      icon: Users,
      description: "Active in your department",
    },
  ]

  const departmentStats = [
    { category: "Research Papers", count: 18 },
    { category: "Patents", count: 5 },
    { category: "Technical Projects", count: 12 },
    { category: "Hackathons", count: 8 },
    { category: "Workshops", count: 7 },
  ]

  const sdgContributions = [
    { sdg: 4, count: 15 },
    { sdg: 9, count: 22 },
    { sdg: 17, count: 10 },
    { sdg: 6, count: 5 },
    { sdg: 11, count: 8 },
  ]

  return (
    <DashboardLayout userRole="faculty">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Faculty Dashboard</h2>
          <p className="text-muted-foreground">Welcome back! Here's an overview of your department's achievements.</p>
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
              <CardTitle>Department Statistics</CardTitle>
              <CardDescription>Achievement distribution by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {departmentStats.map((item) => (
                  <div key={item.category} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>{item.category}</span>
                      <span className="font-medium">{item.count}</span>
                    </div>
                    <Progress value={(item.count / 25) * 100} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-1">
                <CardTitle>SDG Contributions</CardTitle>
                <CardDescription>Department's impact on SDGs</CardDescription>
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
                    <Progress value={(item.count / 25) * 100} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
