import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, FileText, Users, Globe } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function AdminDashboard() {
  // Mock data for admin dashboard
  const stats = [
    {
      title: "Total Users",
      value: 245,
      icon: Users,
      description: "Students, faculty, and admins",
    },
    {
      title: "Total Submissions",
      value: 128,
      icon: FileText,
      description: "Across all departments",
    },
    {
      title: "Pending Verification",
      value: 18,
      icon: Clock,
      description: "Awaiting admin verification",
    },
    {
      title: "Verified",
      value: 102,
      icon: CheckCircle,
      description: "Approved achievements",
    },
  ]

  const departmentStats = [
    { department: "Computer Science", count: 45 },
    { department: "Electrical Engineering", count: 32 },
    { department: "Mechanical Engineering", count: 24 },
    { department: "Civil Engineering", count: 18 },
    { department: "Biotechnology", count: 9 },
  ]

  const sdgContributions = [
    { sdg: 4, count: 42 },
    { sdg: 9, count: 56 },
    { sdg: 17, count: 28 },
    { sdg: 6, count: 15 },
    { sdg: 11, count: 22 },
  ]

  return (
    <DashboardLayout userRole="admin">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
          <p className="text-muted-foreground">Welcome back! Here's an overview of the platform's activity.</p>
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
              <CardDescription>Achievement distribution by department</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {departmentStats.map((item) => (
                  <div key={item.department} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>{item.department}</span>
                      <span className="font-medium">{item.count}</span>
                    </div>
                    <Progress value={(item.count / 50) * 100} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-1">
                <CardTitle>SDG Contributions</CardTitle>
                <CardDescription>Overall impact on SDGs</CardDescription>
              </div>
              <Globe className="h-4 w-4 text-muted-foreground" />
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
                    <Progress value={(item.count / 60) * 100} className="h-2" />
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
