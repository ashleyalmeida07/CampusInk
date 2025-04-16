import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookmarkIcon, ExternalLink, Filter, Search } from "lucide-react"
import Link from "next/link"

export default function TalentsPage() {
  // Mock data for student profiles
  const students = [
    {
      id: 1,
      name: "Priya Sharma",
      department: "Computer Science",
      year: "4th Year",
      skills: ["Machine Learning", "Python", "Data Science", "Web Development"],
      achievements: 12,
      publications: 3,
      sdgs: [4, 9, 17],
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Rahul Gupta",
      department: "Electrical Engineering",
      year: "3rd Year",
      skills: ["IoT", "Embedded Systems", "Circuit Design", "Robotics"],
      achievements: 8,
      publications: 2,
      sdgs: [7, 9, 11],
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Ananya Patel",
      department: "Computer Science",
      year: "4th Year",
      skills: ["AI", "Computer Vision", "TensorFlow", "Research"],
      achievements: 15,
      publications: 4,
      sdgs: [2, 4, 9],
      image: "/placeholder.svg",
    },
    {
      id: 4,
      name: "David Chen",
      department: "Civil Engineering",
      year: "3rd Year",
      skills: ["Structural Analysis", "CAD", "Sustainable Design", "Project Management"],
      achievements: 6,
      publications: 1,
      sdgs: [6, 11, 13],
      image: "/placeholder.svg",
    },
    {
      id: 5,
      name: "Sarah Williams",
      department: "Mechanical Engineering",
      year: "4th Year",
      skills: ["3D Printing", "CAD/CAM", "Product Design", "Thermodynamics"],
      achievements: 10,
      publications: 2,
      sdgs: [9, 12],
      image: "/placeholder.svg",
    },
    {
      id: 6,
      name: "Michael Brown",
      department: "Biotechnology",
      year: "3rd Year",
      skills: ["Genetic Engineering", "Microbiology", "Lab Techniques", "Research"],
      achievements: 7,
      publications: 2,
      sdgs: [3, 15],
      image: "/placeholder.svg",
    },
  ]

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Browse Talents</h2>
            <p className="text-muted-foreground">Discover talented students based on their achievements and research</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="search" placeholder="Search by name, skills, or research area..." className="flex-1" />
            <Button type="submit" size="icon">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Department" />
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
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="SDG" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All SDGs</SelectItem>
                <SelectItem value="4">SDG 4: Quality Education</SelectItem>
                <SelectItem value="9">SDG 9: Industry & Innovation</SelectItem>
                <SelectItem value="17">SDG 17: Partnerships</SelectItem>
                <SelectItem value="6">SDG 6: Clean Water</SelectItem>
                <SelectItem value="7">SDG 7: Clean Energy</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Students</TabsTrigger>
            <TabsTrigger value="publications">With Publications</TabsTrigger>
            <TabsTrigger value="achievements">With Achievements</TabsTrigger>
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {students.map((student) => (
                <Card key={student.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={student.image || "/placeholder.svg"} alt={student.name} />
                          <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-bold">{student.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {student.department} • {student.year}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <BookmarkIcon className="h-4 w-4" />
                        <span className="sr-only">Save</span>
                      </Button>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className="font-medium">{student.publications}</span> Publications
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">{student.achievements}</span> Achievements
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {student.sdgs.map((sdg) => (
                          <div
                            key={sdg}
                            className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold"
                            style={{
                              backgroundColor:
                                sdg === 2
                                  ? "#DDA63A20"
                                  : sdg === 3
                                    ? "#4C9F3820"
                                    : sdg === 4
                                      ? "#C5192D20"
                                      : sdg === 6
                                        ? "#26BDE220"
                                        : sdg === 7
                                          ? "#FCC30B20"
                                          : sdg === 9
                                            ? "#F36D2520"
                                            : sdg === 11
                                              ? "#F99D2620"
                                              : sdg === 12
                                                ? "#BF8B2E20"
                                                : sdg === 13
                                                  ? "#3F7E4420"
                                                  : sdg === 15
                                                    ? "#56C02B20"
                                                    : "#19486A20",
                              color:
                                sdg === 2
                                  ? "#DDA63A"
                                  : sdg === 3
                                    ? "#4C9F38"
                                    : sdg === 4
                                      ? "#C5192D"
                                      : sdg === 6
                                        ? "#26BDE2"
                                        : sdg === 7
                                          ? "#FCC30B"
                                          : sdg === 9
                                            ? "#F36D25"
                                            : sdg === 11
                                              ? "#F99D26"
                                              : sdg === 12
                                                ? "#BF8B2E"
                                                : sdg === 13
                                                  ? "#3F7E44"
                                                  : sdg === 15
                                                    ? "#56C02B"
                                                    : "#19486A",
                            }}
                          >
                            {sdg}
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {student.skills.slice(0, 3).map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {student.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{student.skills.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end">
                      <Link href={`/dashboard/recruiter/talents/${student.id}`}>
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <span>View Profile</span>
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          {/* Similar content for other tabs */}
        </Tabs>
      </div>
    </DashboardShell>
  )
}
