"use client"

import { useState } from "react"
import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { SdgBadge } from "@/components/sdg-badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Award, BookOpen, FileText, Github, Linkedin, Mail, MapPin, Phone, Twitter, Upload } from "lucide-react"

export default function ProfilePage() {
  const { toast } = useToast()
  const [isEditing, setIsEditing] = useState(false)

  // Mock data for student profile
  const studentProfile = {
    name: "Ashley Almieda",
    email: "Ashley.Almeida@college.edu",
    department: "Computer Science",
    year: "2th Year",
    studentId: "10227",
    phone: "+91 9579025326",
    location: "umbai, India",
    bio: "Computer Science student specializing in Machine Learning and Sustainable Computing. Passionate about using technology to solve environmental challenges.",
    skills: [
      "Python",
      "Web Development",
      "Sustainable Computing",
      "React",
    ],
    interests: ["Artificial Intelligence", "Sustainable Development", "Climate Tech", "Education Technology"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/ashley-almeida-5576aa2a7",
      github: "https://github.com/ashleyalmeida07",
      twitter: "twitter.com/AshleyAlmieda",
    },
    education: [
      {
        degree: "B.Tech in Computer Science",
        institution: "Fr. Conceicao Rodrigues College of Engineering",
        year: "2023 - 2027",
      },
      {
        degree: "Higher Secondary Education",
        institution: "Thomas Baptista Jr Collge",
        year: "2021 - 2023",
      },
    ],
    achievements: {
      publications: 3,
      projects: 5,
      certifications: 4,
      sdgs: [4, 9, 13, 17],
    },
  }

  const handleSaveProfile = () => {
    setIsEditing(false)
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully.",
    })
  }

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">My Profile</h2>
            <p className="text-muted-foreground">View and manage your academic profile</p>
          </div>
          <Button onClick={() => setIsEditing(!isEditing)}>{isEditing ? "Cancel" : "Edit Profile"}</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-1">
            <CardHeader>
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="/placeholder.svg" alt={studentProfile.name} />
                  <AvatarFallback>{studentProfile.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle>{studentProfile.name}</CardTitle>
                <CardDescription>
                  {studentProfile.department} • {studentProfile.year}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {isEditing ? (
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Upload className="h-4 w-4" />
                      <span>Upload Photo</span>
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue={studentProfile.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue={studentProfile.email} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" defaultValue={studentProfile.phone} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue={studentProfile.location} />
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{studentProfile.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{studentProfile.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{studentProfile.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span>Student ID: {studentProfile.studentId}</span>
                  </div>
                </>
              )}

              <div className="pt-4 border-t">
                <h4 className="text-sm font-medium mb-2">Social Links</h4>
                {isEditing ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Linkedin className="h-4 w-4 text-muted-foreground" />
                      <Input defaultValue={studentProfile.socialLinks.linkedin} className="flex-1" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Github className="h-4 w-4 text-muted-foreground" />
                      <Input defaultValue={studentProfile.socialLinks.github} className="flex-1" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Twitter className="h-4 w-4 text-muted-foreground" />
                      <Input defaultValue={studentProfile.socialLinks.twitter} className="flex-1" />
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-center gap-4">
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={`https://${studentProfile.socialLinks.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={`https://${studentProfile.socialLinks.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={`https://${studentProfile.socialLinks.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </a>
                    </Button>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t">
                <h4 className="text-sm font-medium mb-2">SDG Contributions</h4>
                <div className="flex flex-wrap gap-2">
                  {studentProfile.achievements.sdgs.map((sdg) => (
                    <SdgBadge key={sdg} sdg={sdg} />
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="text-sm font-medium mb-2">Achievements</h4>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-2xl font-bold">{studentProfile.achievements.publications}</div>
                    <p className="text-xs text-muted-foreground">Publications</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{studentProfile.achievements.projects}</div>
                    <p className="text-xs text-muted-foreground">Projects</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{studentProfile.achievements.certifications}</div>
                    <p className="text-xs text-muted-foreground">Certificates</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6 md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>About Me</CardTitle>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <Textarea className="min-h-32" defaultValue={studentProfile.bio} />
                ) : (
                  <p>{studentProfile.bio}</p>
                )}
              </CardContent>
            </Card>

            <Tabs defaultValue="skills">
              <TabsList>
                <TabsTrigger value="skills">Skills & Interests</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>
              <TabsContent value="skills" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {isEditing ? (
                      <div className="space-y-2">
                        <Label htmlFor="skills">Skills (comma separated)</Label>
                        <Textarea
                          id="skills"
                          defaultValue={studentProfile.skills.join(", ")}
                          placeholder="e.g., Machine Learning, Python, Data Science"
                        />
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {studentProfile.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Research Interests</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {isEditing ? (
                      <div className="space-y-2">
                        <Label htmlFor="interests">Interests (comma separated)</Label>
                        <Textarea
                          id="interests"
                          defaultValue={studentProfile.interests.join(", ")}
                          placeholder="e.g., Artificial Intelligence, Sustainable Development"
                        />
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {studentProfile.interests.map((interest) => (
                          <Badge key={interest} variant="outline">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="education" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Education</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {isEditing ? (
                      <div className="space-y-4">
                        {studentProfile.education.map((edu, index) => (
                          <div key={index} className="space-y-2 pb-4 border-b last:border-0">
                            <div className="space-y-2">
                              <Label htmlFor={`degree-${index}`}>Degree</Label>
                              <Input id={`degree-${index}`} defaultValue={edu.degree} />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`institution-${index}`}>Institution</Label>
                              <Input id={`institution-${index}`} defaultValue={edu.institution} />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`year-${index}`}>Year</Label>
                              <Input id={`year-${index}`} defaultValue={edu.year} />
                            </div>
                          </div>
                        ))}
                        <Button variant="outline" className="w-full">
                          Add Education
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {studentProfile.education.map((edu, index) => (
                          <div key={index} className="pb-4 border-b last:border-0">
                            <h3 className="font-medium">{edu.degree}</h3>
                            <p className="text-sm text-muted-foreground">{edu.institution}</p>
                            <p className="text-sm text-muted-foreground">{edu.year}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="achievements" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <FileText className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            Machine Learning for Sustainable Energy Systems
                          </p>
                          <p className="text-xs text-muted-foreground">Research Paper • March 15, 2023</p>
                        </div>
                        <div className="flex gap-1">
                          <SdgBadge sdg={7} />
                          <SdgBadge sdg={9} />
                          <SdgBadge sdg={13} />
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Award className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">AI-Driven Crop Disease Detection</p>
                          <p className="text-xs text-muted-foreground">Project • November 15, 2022</p>
                        </div>
                        <div className="flex gap-1">
                          <SdgBadge sdg={2} />
                          <SdgBadge sdg={9} />
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <FileText className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">Blockchain for Supply Chain Transparency</p>
                          <p className="text-xs text-muted-foreground">Conference Paper • February 20, 2023</p>
                        </div>
                        <div className="flex gap-1">
                          <SdgBadge sdg={9} />
                          <SdgBadge sdg={17} />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Achievements
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>

            {isEditing && (
              <Card>
                <CardHeader>
                  <CardTitle>Privacy Settings</CardTitle>
                  <CardDescription>Control what information is visible to others</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="profile-visibility">Profile Visibility</Label>
                      <Select defaultValue="public">
                        <SelectTrigger id="profile-visibility">
                          <SelectValue placeholder="Select visibility" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Public</SelectItem>
                          <SelectItem value="students">Students & Faculty Only</SelectItem>
                          <SelectItem value="faculty">Faculty Only</SelectItem>
                          <SelectItem value="private">Private</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-visibility">Contact Information</Label>
                      <Select defaultValue="students">
                        <SelectTrigger id="contact-visibility">
                          <SelectValue placeholder="Select visibility" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Public</SelectItem>
                          <SelectItem value="students">Students & Faculty Only</SelectItem>
                          <SelectItem value="faculty">Faculty Only</SelectItem>
                          <SelectItem value="private">Private</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSaveProfile} className="w-full">
                    Save Profile
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}
