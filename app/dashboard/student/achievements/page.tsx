"use client"

import { useState } from "react"
import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { SdgBadge } from "@/components/sdg-badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CheckCircle, Clock, Download, Eye, FileText, Filter, Search, XCircle } from "lucide-react"
import Link from "next/link"

export default function AchievementsPage() {
  const [viewDialogOpen, setViewDialogOpen] = useState(false)
  const [selectedAchievement, setSelectedAchievement] = useState<any>(null)

  // Mock data for achievements
  const publications = [
    {
      id: "PUB-001",
      title: "Machine Learning for Sustainable Energy Systems",
      type: "Research Paper",
      date: "2023-03-15",
      status: "approved",
      journal: "International Journal of Sustainable Computing",
      sdgs: [7, 9, 13],
    },
    {
      id: "PUB-002",
      title: "Blockchain for Supply Chain Transparency",
      type: "Conference Paper",
      date: "2023-02-20",
      status: "approved",
      journal: "IEEE Blockchain Conference 2023",
      sdgs: [9, 17],
    },
    {
      id: "PUB-003",
      title: "Smart Water Management System",
      type: "Journal Article",
      date: "2023-04-05",
      status: "pending",
      journal: "Water Resources Management",
      sdgs: [6, 9, 11],
    },
  ]

  const projects = [
    {
      id: "PRJ-001",
      title: "AI-Driven Crop Disease Detection",
      type: "Project",
      date: "2022-11-15",
      status: "approved",
      event: "University Innovation Challenge",
      sdgs: [2, 9],
    },
    {
      id: "PRJ-002",
      title: "Educational App for Rural Areas",
      type: "Hackathon",
      date: "2022-11-10",
      status: "approved",
      event: "EdTech Hackathon 2022",
      sdgs: [4, 17],
    },
    {
      id: "PRJ-003",
      title: "Sustainable Urban Planning Tool",
      type: "Project",
      date: "2022-09-05",
      status: "approved",
      event: "Smart Cities Initiative",
      sdgs: [11],
    },
    {
      id: "PRJ-004",
      title: "Renewable Energy Integration System",
      type: "Project",
      date: "2023-01-20",
      status: "rejected",
      event: "Energy Innovation Challenge",
      sdgs: [7, 13],
    },
  ]

  const certifications = [
    {
      id: "CERT-001",
      title: "Advanced Machine Learning",
      type: "Certification",
      date: "2022-08-10",
      status: "approved",
      issuer: "Coursera",
      sdgs: [4, 9],
    },
    {
      id: "CERT-002",
      title: "Blockchain Development",
      type: "Certification",
      date: "2022-10-15",
      status: "approved",
      issuer: "Udacity",
      sdgs: [9],
    },
    {
      id: "CERT-003",
      title: "Sustainable Development in Engineering",
      type: "Workshop",
      date: "2023-02-05",
      status: "approved",
      issuer: "University Sustainability Center",
      sdgs: [4, 9, 11],
    },
  ]

  const handleView = (achievement: any) => {
    setSelectedAchievement(achievement)
    setViewDialogOpen(true)
  }

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">My Achievements</h2>
            <p className="text-muted-foreground">View and manage all your academic achievements</p>
          </div>
          <Link href="/dashboard/student/submit">
            <Button>
              <FileText className="mr-2 h-4 w-4" />
              Submit New
            </Button>
          </Link>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="search" placeholder="Search achievements..." className="flex-1" />
            <Button type="submit" size="icon">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
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
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="publications">Publications</TabsTrigger>
            <TabsTrigger value="projects">Projects & Hackathons</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>All Achievements</CardTitle>
                <CardDescription>All your academic achievements and submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>SDGs</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[...publications, ...projects, ...certifications].map((achievement) => (
                      <TableRow key={achievement.id}>
                        <TableCell className="font-medium">{achievement.id}</TableCell>
                        <TableCell>{achievement.title}</TableCell>
                        <TableCell>{achievement.type}</TableCell>
                        <TableCell>{new Date(achievement.date).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              achievement.status === "approved"
                                ? "default"
                                : achievement.status === "pending"
                                  ? "outline"
                                  : "destructive"
                            }
                          >
                            {achievement.status.charAt(0).toUpperCase() + achievement.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            {achievement.sdgs.map((sdg: number) => (
                              <SdgBadge key={sdg} sdg={sdg} />
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" onClick={() => handleView(achievement)}>
                            <Eye className="h-4 w-4" />
                            <span className="sr-only">View</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="publications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Publications</CardTitle>
                <CardDescription>Your research papers, conference papers, and journal articles</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Journal/Conference</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {publications.map((publication) => (
                      <TableRow key={publication.id}>
                        <TableCell className="font-medium">{publication.id}</TableCell>
                        <TableCell>{publication.title}</TableCell>
                        <TableCell>{publication.type}</TableCell>
                        <TableCell>{publication.journal}</TableCell>
                        <TableCell>{new Date(publication.date).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              publication.status === "approved"
                                ? "default"
                                : publication.status === "pending"
                                  ? "outline"
                                  : "destructive"
                            }
                          >
                            {publication.status.charAt(0).toUpperCase() + publication.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" onClick={() => handleView(publication)}>
                            <Eye className="h-4 w-4" />
                            <span className="sr-only">View</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Projects & Hackathons</CardTitle>
                <CardDescription>Your technical projects, hackathons, and competitions</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Event</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {projects.map((project) => (
                      <TableRow key={project.id}>
                        <TableCell className="font-medium">{project.id}</TableCell>
                        <TableCell>{project.title}</TableCell>
                        <TableCell>{project.type}</TableCell>
                        <TableCell>{project.event}</TableCell>
                        <TableCell>{new Date(project.date).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              project.status === "approved"
                                ? "default"
                                : project.status === "pending"
                                  ? "outline"
                                  : "destructive"
                            }
                          >
                            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" onClick={() => handleView(project)}>
                            <Eye className="h-4 w-4" />
                            <span className="sr-only">View</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certifications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Certifications & Workshops</CardTitle>
                <CardDescription>Your certifications, workshops, and training programs</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Issuer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {certifications.map((certification) => (
                      <TableRow key={certification.id}>
                        <TableCell className="font-medium">{certification.id}</TableCell>
                        <TableCell>{certification.title}</TableCell>
                        <TableCell>{certification.type}</TableCell>
                        <TableCell>{certification.issuer}</TableCell>
                        <TableCell>{new Date(certification.date).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              certification.status === "approved"
                                ? "default"
                                : certification.status === "pending"
                                  ? "outline"
                                  : "destructive"
                            }
                          >
                            {certification.status.charAt(0).toUpperCase() + certification.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" onClick={() => handleView(certification)}>
                            <Eye className="h-4 w-4" />
                            <span className="sr-only">View</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* View Achievement Dialog */}
        <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Achievement Details</DialogTitle>
              <DialogDescription>Viewing {selectedAchievement?.id}</DialogDescription>
            </DialogHeader>
            {selectedAchievement && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium">Title</h4>
                    <p>{selectedAchievement.title}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Type</h4>
                    <p>{selectedAchievement.type}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Date</h4>
                    <p>{new Date(selectedAchievement.date).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Status</h4>
                    <Badge
                      variant={
                        selectedAchievement.status === "approved"
                          ? "default"
                          : selectedAchievement.status === "pending"
                            ? "outline"
                            : "destructive"
                      }
                    >
                      {selectedAchievement.status.charAt(0).toUpperCase() + selectedAchievement.status.slice(1)}
                    </Badge>
                  </div>
                  {selectedAchievement.journal && (
                    <div>
                      <h4 className="text-sm font-medium">Journal/Conference</h4>
                      <p>{selectedAchievement.journal}</p>
                    </div>
                  )}
                  {selectedAchievement.event && (
                    <div>
                      <h4 className="text-sm font-medium">Event</h4>
                      <p>{selectedAchievement.event}</p>
                    </div>
                  )}
                  {selectedAchievement.issuer && (
                    <div>
                      <h4 className="text-sm font-medium">Issuer</h4>
                      <p>{selectedAchievement.issuer}</p>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="text-sm font-medium">SDGs</h4>
                  <div className="flex gap-2 mt-1">
                    {selectedAchievement.sdgs?.map((sdg: number) => (
                      <SdgBadge key={sdg} sdg={sdg} showLabel />
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium">Description</h4>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium">Attachments</h4>
                  <div className="mt-2 flex gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span>{selectedAchievement.type === "Certification" ? "Certificate.pdf" : "Document.pdf"}</span>
                      <Download className="h-4 w-4 ml-2" />
                    </Button>
                    {selectedAchievement.type !== "Certification" && (
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <span>Supporting_Document.pdf</span>
                        <Download className="h-4 w-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </div>

                {selectedAchievement.status === "rejected" && (
                  <div className="rounded-md bg-destructive/10 p-4">
                    <div className="flex items-start">
                      <XCircle className="h-5 w-5 text-destructive mr-2 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-medium text-destructive">Rejection Feedback</h4>
                        <p className="text-sm text-destructive/80 mt-1">
                          The submission was rejected due to insufficient documentation. Please provide more detailed
                          information about your contribution and resubmit.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedAchievement.status === "approved" && (
                  <div className="rounded-md bg-primary/10 p-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-medium text-primary">Verification</h4>
                        <p className="text-sm text-primary/80 mt-1">
                          Verified by Dr. Rajesh Kumar on {new Date().toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedAchievement.status === "pending" && (
                  <div className="rounded-md bg-amber-500/10 p-4">
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-medium text-amber-500">Pending Verification</h4>
                        <p className="text-sm text-amber-500/80 mt-1">
                          Your submission is currently under review. This process typically takes 3-5 business days.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </DashboardShell>
  )
}
