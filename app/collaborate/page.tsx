import type { Metadata } from "next"
import Image from "next/image"
import { BookOpen, Calendar, Filter, MessageSquare, Search, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { SdgBadge } from "@/components/sdg-badge"

export const metadata: Metadata = {
  title: "Collaboration Opportunities",
  description: "Find and connect with peers and faculty for research collaborations",
}

// Mock data for collaboration opportunities
const researchProjects = [
  {
    id: 1,
    title: "Machine Learning for Climate Change Prediction",
    description:
      "Looking for students with ML/AI background to collaborate on a climate prediction model using satellite data.",
    department: "Computer Science",
    faculty: "Dr. Sarah Johnson",
    sdgs: [13, 15],
    deadline: "2023-12-15",
    participants: 3,
    maxParticipants: 5,
    image: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    title: "Sustainable Urban Water Management",
    description:
      "Research project focused on developing efficient water management systems for urban areas in developing countries.",
    department: "Civil Engineering",
    faculty: "Prof. Michael Chen",
    sdgs: [6, 11],
    deadline: "2023-11-30",
    participants: 2,
    maxParticipants: 4,
    image: "https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "Renewable Energy Integration in Rural Communities",
    description:
      "Seeking collaborators for a project on implementing renewable energy solutions in underserved rural areas.",
    department: "Electrical Engineering",
    faculty: "Dr. Amara Patel",
    sdgs: [7, 10],
    deadline: "2024-01-20",
    participants: 1,
    maxParticipants: 3,
    image: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
  },
]

const studyGroups = [
  {
    id: 1,
    title: "Advanced Machine Learning Study Group",
    description: "Weekly meetings to discuss advanced ML concepts and research papers.",
    organizer: "Alex Wong",
    members: 8,
    maxMembers: 12,
    topics: ["Neural Networks", "Reinforcement Learning", "Computer Vision"],
    meetingDay: "Wednesdays",
    meetingTime: "5:00 PM",
  },
  {
    id: 2,
    title: "Sustainable Engineering Practices",
    description: "Discussion group focused on sustainable engineering approaches across disciplines.",
    organizer: "Maya Patel",
    members: 5,
    maxMembers: 10,
    topics: ["Green Design", "Circular Economy", "Life Cycle Assessment"],
    meetingDay: "Mondays",
    meetingTime: "4:30 PM",
  },
  {
    id: 3,
    title: "Research Paper Writing Workshop",
    description: "Collaborative sessions on writing and reviewing academic papers.",
    organizer: "Prof. James Wilson",
    members: 6,
    maxMembers: 8,
    topics: ["Academic Writing", "Peer Review", "Publication Strategy"],
    meetingDay: "Fridays",
    meetingTime: "3:00 PM",
  },
]

const hackathons = [
  {
    id: 1,
    title: "SDG Innovation Hackathon",
    description: "48-hour hackathon focused on developing solutions for SDG challenges.",
    organizer: "Engineering Department",
    date: "December 10-12, 2023",
    location: "Main Campus, Innovation Center",
    registrationDeadline: "December 1, 2023",
    teamSize: "3-5 members",
    prizes: "Cash prizes, Mentorship opportunities",
  },
  {
    id: 2,
    title: "Health Tech for All",
    description: "Hackathon focused on creating accessible healthcare technology solutions.",
    organizer: "Biomedical Engineering Society",
    date: "January 20-22, 2024",
    location: "Health Sciences Building",
    registrationDeadline: "January 10, 2024",
    teamSize: "2-4 members",
    prizes: "Funding for prototype development, Industry mentorship",
  },
]

export default function CollaboratePage() {
  return (
    <div className=" px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 space-y-8 mt-8 mb-12">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search opportunities..." className="w-full pl-8" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button size="sm">
            <Users className="mr-2 h-4 w-4" />
            Create Opportunity
          </Button>
        </div>
      </div>

      <Tabs defaultValue="research" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="research">Research Projects</TabsTrigger>
          <TabsTrigger value="study">Study Groups</TabsTrigger>
          <TabsTrigger value="hackathons">Hackathons</TabsTrigger>
        </TabsList>

        {/* Research Projects */}
        <TabsContent value="research" className="space-y-4 mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchProjects.map((project) => (
              <Card key={project.id} className="flex flex-col transition-shadow hover:shadow-lg">
                <CardHeader className="flex gap-4 items-start">
                  <Image
                    src={project.image || "https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"}
                    alt={project.title}
                    width={64}
                    height={64}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <CardTitle className="text-base font-semibold tracking-tight">{project.title}</CardTitle>
                    <CardDescription>{project.department}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-4 text-sm text-muted-foreground">
                  <p>{project.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Led by {project.faculty}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {project.participants}/{project.maxParticipants} participants
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Deadline: {new Date(project.deadline).toLocaleDateString()}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Apply to Collaborate</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Study Groups */}
        <TabsContent value="study" className="space-y-4 mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studyGroups.map((group) => (
              <Card key={group.id} className="flex flex-col transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-base font-semibold tracking-tight">{group.title}</CardTitle>
                  <CardDescription>Organized by {group.organizer}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-4 text-sm text-muted-foreground">
                  <p>{group.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {group.members}/{group.maxMembers} members
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Meets {group.meetingDay} at {group.meetingTime}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {group.topics.map((topic) => (
                      <Badge key={topic} variant="outline">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Join Group</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Hackathons */}
        <TabsContent value="hackathons" className="space-y-4 mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            {hackathons.map((hackathon) => (
              <Card key={hackathon.id} className="flex flex-col transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-base font-semibold tracking-tight">{hackathon.title}</CardTitle>
                  <CardDescription>Organized by {hackathon.organizer}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-4 text-sm text-muted-foreground">
                  <p>{hackathon.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {hackathon.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Team size: {hackathon.teamSize}
                    </div>
                    <Separator />
                    <div>
                      <strong>Location:</strong> {hackathon.location}
                    </div>
                    <div>
                      <strong>Registration Deadline:</strong> {hackathon.registrationDeadline}
                    </div>
                    <div>
                      <strong>Prizes:</strong> {hackathon.prizes}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                  <Button className="w-full">Register</Button>
                  <Button variant="outline" className="w-full">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Find Team Members
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Suggest Action Box */}
      <div className="bg-muted/50 rounded-lg p-6 mt-8">
        <h3 className="text-lg font-semibold mb-2">Looking for something specific?</h3>
        <p className="text-muted-foreground mb-4">
          If you can't find a collaboration opportunity that matches your interests, you can create your own or reach
          out to faculty members directly.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline">
            <Users className="mr-2 h-4 w-4" />
            Create Study Group
          </Button>
          <Button variant="outline">
            <BookOpen className="mr-2 h-4 w-4" />
            Contact Faculty
          </Button>
          <Button variant="outline">
            <MessageSquare className="mr-2 h-4 w-4" />
            Discussion Forum
          </Button>
        </div>
      </div>
    </div>
  );
}

