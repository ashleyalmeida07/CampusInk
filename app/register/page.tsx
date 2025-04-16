"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"

export default function RegisterPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("student")

  const [studentForm, setStudentForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    department: "",
    studentId: "",
    year: "",
  })

  const [facultyForm, setFacultyForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    department: "",
    facultyId: "",
    position: "",
  })

  const [recruiterForm, setRecruiterForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
    jobTitle: "",
  })

  const handleStudentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setStudentForm((prev) => ({ ...prev, [id]: value }))
  }

  const handleFacultyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFacultyForm((prev) => ({ ...prev, [id]: value }))
  }

  const handleRecruiterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setRecruiterForm((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (name: string, value: string, formType: string) => {
    if (formType === "student") {
      setStudentForm((prev) => ({ ...prev, [name]: value }))
    } else if (formType === "faculty") {
      setFacultyForm((prev) => ({ ...prev, [name]: value }))
    } else if (formType === "recruiter") {
      setRecruiterForm((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent, formType: string) => {
    e.preventDefault()

    let formData
    if (formType === "student") {
      formData = studentForm
      if (formData.password !== formData.confirmPassword) {
        toast({
          title: "Passwords do not match",
          description: "Please make sure your passwords match",
          variant: "destructive",
        })
        return
      }
    } else if (formType === "faculty") {
      formData = facultyForm
      if (formData.password !== formData.confirmPassword) {
        toast({
          title: "Passwords do not match",
          description: "Please make sure your passwords match",
          variant: "destructive",
        })
        return
      }
    } else {
      formData = recruiterForm
      if (formData.password !== formData.confirmPassword) {
        toast({
          title: "Passwords do not match",
          description: "Please make sure your passwords match",
          variant: "destructive",
        })
        return
      }
    }

    setIsLoading(true)

    // Simulate registration
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Registration successful",
        description: "Your account has been created",
      })
      router.push("/login")
    }, 1500)
  }

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-8rem)] py-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
          <CardDescription>Register to start managing your academic achievements</CardDescription>
        </CardHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="student">Student</TabsTrigger>
            <TabsTrigger value="faculty">Faculty</TabsTrigger>
            <TabsTrigger value="recruiter">Recruiter</TabsTrigger>
          </TabsList>

          <TabsContent value="student">
            <form onSubmit={(e) => handleSubmit(e, "student")}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={studentForm.name}
                    onChange={handleStudentChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@college.edu"
                    value={studentForm.email}
                    onChange={handleStudentChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select
                      value={studentForm.department}
                      onValueChange={(value) => handleSelectChange("department", value, "student")}
                    >
                      <SelectTrigger id="department">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cs">Computer Science</SelectItem>
                        <SelectItem value="ee">Electrical Engineering</SelectItem>
                        <SelectItem value="me">Mechanical Engineering</SelectItem>
                        <SelectItem value="ce">Civil Engineering</SelectItem>
                        <SelectItem value="bt">Biotechnology</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Year of Study</Label>
                    <Select
                      value={studentForm.year}
                      onValueChange={(value) => handleSelectChange("year", value, "student")}
                    >
                      <SelectTrigger id="year">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">First Year</SelectItem>
                        <SelectItem value="2">Second Year</SelectItem>
                        <SelectItem value="3">Third Year</SelectItem>
                        <SelectItem value="4">Fourth Year</SelectItem>
                        <SelectItem value="pg">Post Graduate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="studentId">Student ID</Label>
                  <Input
                    id="studentId"
                    placeholder="e.g., 2023CS001"
                    value={studentForm.studentId}
                    onChange={handleStudentChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={studentForm.password}
                    onChange={handleStudentChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={studentForm.confirmPassword}
                    onChange={handleStudentChange}
                    required
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Creating account..." : "Create account"}
                </Button>
                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <Link href="/login" className="text-primary hover:underline">
                    Login
                  </Link>
                </div>
              </CardFooter>
            </form>
          </TabsContent>

          <TabsContent value="faculty">
            <form onSubmit={(e) => handleSubmit(e, "faculty")}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Dr. Jane Smith"
                    value={facultyForm.name}
                    onChange={handleFacultyChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane.smith@college.edu"
                    value={facultyForm.email}
                    onChange={handleFacultyChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select
                      value={facultyForm.department}
                      onValueChange={(value) => handleSelectChange("department", value, "faculty")}
                    >
                      <SelectTrigger id="department">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cs">Computer Science</SelectItem>
                        <SelectItem value="ee">Electrical Engineering</SelectItem>
                        <SelectItem value="me">Mechanical Engineering</SelectItem>
                        <SelectItem value="ce">Civil Engineering</SelectItem>
                        <SelectItem value="bt">Biotechnology</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Position</Label>
                    <Select
                      value={facultyForm.position}
                      onValueChange={(value) => handleSelectChange("position", value, "faculty")}
                    >
                      <SelectTrigger id="position">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professor">Professor</SelectItem>
                        <SelectItem value="associate">Associate Professor</SelectItem>
                        <SelectItem value="assistant">Assistant Professor</SelectItem>
                        <SelectItem value="lecturer">Lecturer</SelectItem>
                        <SelectItem value="hod">Department Head</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="facultyId">Faculty ID</Label>
                  <Input
                    id="facultyId"
                    placeholder="e.g., FAC2023001"
                    value={facultyForm.facultyId}
                    onChange={handleFacultyChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={facultyForm.password}
                    onChange={handleFacultyChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={facultyForm.confirmPassword}
                    onChange={handleFacultyChange}
                    required
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Creating account..." : "Create account"}
                </Button>
                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <Link href="/login" className="text-primary hover:underline">
                    Login
                  </Link>
                </div>
              </CardFooter>
            </form>
          </TabsContent>

          <TabsContent value="recruiter">
            <form onSubmit={(e) => handleSubmit(e, "recruiter")}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Alex Johnson"
                    value={recruiterForm.name}
                    onChange={handleRecruiterChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="alex@company.com"
                    value={recruiterForm.email}
                    onChange={handleRecruiterChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    placeholder="Company Name"
                    value={recruiterForm.company}
                    onChange={handleRecruiterChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Input
                    id="jobTitle"
                    placeholder="e.g., HR Manager, Technical Recruiter"
                    value={recruiterForm.jobTitle}
                    onChange={handleRecruiterChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={recruiterForm.password}
                    onChange={handleRecruiterChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={recruiterForm.confirmPassword}
                    onChange={handleRecruiterChange}
                    required
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Creating account..." : "Create account"}
                </Button>
                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <Link href="/login" className="text-primary hover:underline">
                    Login
                  </Link>
                </div>
              </CardFooter>
            </form>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}
