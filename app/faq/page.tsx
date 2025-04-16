import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpen, CheckCircle, FileText, GraduationCap, Search, Shield, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about using AcademicHub",
}

export default function FAQPage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground">Find answers to common questions about using AcademicHub</p>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input type="search" placeholder="Search for answers..." className="pl-10 h-12" />
        </div>

        <Tabs defaultValue="general" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="students">For Students</TabsTrigger>
            <TabsTrigger value="faculty">For Faculty</TabsTrigger>
            <TabsTrigger value="recruiters">For Recruiters</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="mt-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is AcademicHub?</AccordionTrigger>
                <AccordionContent>
                  AcademicHub is a centralized platform for managing and showcasing academic achievements aligned with
                  Sustainable Development Goals (SDGs). It allows students to document their work, faculty to verify
                  achievements, administrators to manage the platform, and recruiters to discover talented students.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>How does the verification process work?</AccordionTrigger>
                <AccordionContent>
                  When a student submits an achievement, it enters our verification workflow. First, faculty members
                  review the submission for academic merit and accuracy. Then, administrators perform a final check and
                  approve the achievement. Once verified, the achievement becomes part of the student's public profile.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>What types of achievements can be recorded?</AccordionTrigger>
                <AccordionContent>
                  AcademicHub supports various types of achievements including research papers, conference
                  presentations, patents, projects, competitions, internships, and more. Each achievement can be
                  categorized and tagged with relevant SDGs to highlight its impact.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>How are achievements linked to SDGs?</AccordionTrigger>
                <AccordionContent>
                  When submitting an achievement, users can select which of the 17 UN Sustainable Development Goals
                  their work contributes to. The platform provides guidance on mapping work to appropriate SDGs, and
                  faculty reviewers can help refine these connections during verification.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Is my data secure on AcademicHub?</AccordionTrigger>
                <AccordionContent>
                  Yes, we take data security seriously. All personal information is encrypted and stored securely. Users
                  have control over their privacy settings and can choose what information is publicly visible. We
                  comply with data protection regulations and never share personal data with third parties without
                  explicit consent.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="students" className="mt-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="student-1">
                <AccordionTrigger>How do I submit my academic work?</AccordionTrigger>
                <AccordionContent>
                  Log in to your student dashboard and navigate to the "Submit" section. Fill out the submission form
                  with details about your work, upload any relevant documents, select applicable SDGs, and submit for
                  review. You can track the status of your submission in the "My Submissions" section.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="student-2">
                <AccordionTrigger>Can I update my submissions after they're verified?</AccordionTrigger>
                <AccordionContent>
                  Once an achievement is verified, you can make minor updates to the description or tags, but
                  substantial changes will require re-verification. To update a verified achievement, go to "My
                  Achievements," select the item, and click "Request Update." Your changes will be reviewed by faculty.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="student-3">
                <AccordionTrigger>How do I find collaboration opportunities?</AccordionTrigger>
                <AccordionContent>
                  Visit the "Collaborate" section in your dashboard to browse research projects, study groups, and
                  hackathons. You can filter opportunities by department, SDG focus, or keywords. You can also create
                  your own collaboration opportunity to find team members for your projects.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="student-4">
                <AccordionTrigger>Can recruiters contact me through the platform?</AccordionTrigger>
                <AccordionContent>
                  Yes, if you've enabled the option in your privacy settings, recruiters can send you messages or
                  connection requests through the platform. You'll receive notifications when someone wants to connect,
                  and you can manage all communications in the "Messages" section of your dashboard.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="student-5">
                <AccordionTrigger>How can I showcase my SDG contributions?</AccordionTrigger>
                <AccordionContent>
                  Your SDG contributions are automatically visualized in your profile based on your verified
                  achievements. You can also generate an "SDG Impact Report" from your dashboard that highlights your
                  contributions across different goals, which can be shared with potential employers or included in
                  applications.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="faculty" className="mt-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faculty-1">
                <AccordionTrigger>How do I review student submissions?</AccordionTrigger>
                <AccordionContent>
                  When students from your department submit achievements, you'll receive notifications. Access the
                  "Review" section in your faculty dashboard to see pending submissions. You can approve, request
                  revisions, or reject submissions with feedback. The system tracks your review history for reference.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faculty-2">
                <AccordionTrigger>Can I endorse students without a formal submission?</AccordionTrigger>
                <AccordionContent>
                  Yes, faculty can proactively endorse students through the "Endorsements" section. You can search for
                  students by name or ID, select skills or qualities to endorse, and provide a brief recommendation.
                  These endorsements appear on student profiles separately from verified achievements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faculty-3">
                <AccordionTrigger>How do I access department analytics?</AccordionTrigger>
                <AccordionContent>
                  The "Analytics" section of your faculty dashboard provides visualizations of department performance,
                  including publication counts, SDG contributions, student engagement metrics, and comparison with other
                  departments. You can filter data by date range, achievement type, or specific SDGs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faculty-4">
                <AccordionTrigger>Can I create research opportunities for students?</AccordionTrigger>
                <AccordionContent>
                  Yes, faculty can post research opportunities through the "Create Opportunity" button in the dashboard.
                  Specify project details, required skills, SDG relevance, and the number of positions available.
                  Students can then apply, and you'll receive notifications of interested candidates.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="recruiters" className="mt-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="recruiter-1">
                <AccordionTrigger>How do I search for talented students?</AccordionTrigger>
                <AccordionContent>
                  Use the "Talent Search" feature in your recruiter dashboard to find students based on skills,
                  achievements, SDG focus areas, or departments. You can save search filters for future use and receive
                  notifications when new students match your criteria.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="recruiter-2">
                <AccordionTrigger>Can I post job opportunities on the platform?</AccordionTrigger>
                <AccordionContent>
                  Yes, recruiters can post job openings, internships, and other opportunities through the "Post
                  Opportunity" section. You can specify required skills, relevant SDGs, and application instructions.
                  Students who match your criteria will be notified of the opportunity.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="recruiter-3">
                <AccordionTrigger>How do I verify the authenticity of student achievements?</AccordionTrigger>
                <AccordionContent>
                  All achievements displayed on student profiles have gone through our verification process by faculty
                  and administrators. Look for the "Verified" badge on achievements. You can also see who verified each
                  achievement and when. For additional verification, you can contact the faculty member directly through
                  the platform.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="recruiter-4">
                <AccordionTrigger>Can I save profiles for later review?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can save student profiles to your "Saved Talents" list by clicking the bookmark icon on their
                  profile. You can organize saved profiles into different collections (e.g., "Potential Interns,"
                  "Research Candidates") and add private notes to each saved profile.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>

        <Separator className="my-12" />

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5 text-primary" />
                User Guides
              </CardTitle>
              <CardDescription>Detailed instructions for using all platform features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Link href="#" className="text-primary hover:underline flex items-center">
                  <FileText className="mr-2 h-4 w-4" />
                  Getting Started Guide
                </Link>
                <p className="text-sm text-muted-foreground">A complete walkthrough for new users</p>
              </div>

              <div className="space-y-2">
                <Link href="#" className="text-primary hover:underline flex items-center">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Student User Manual
                </Link>
                <p className="text-sm text-muted-foreground">Learn how to submit and showcase your achievements</p>
              </div>

              <div className="space-y-2">
                <Link href="#" className="text-primary hover:underline flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Verification Process Guide
                </Link>
                <p className="text-sm text-muted-foreground">Understanding how achievements are verified</p>
              </div>

              <Button variant="outline" className="w-full mt-2" asChild>
                <Link href="#">
                  View All Guides
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-primary" />
                Still Need Help?
              </CardTitle>
              <CardDescription>Get in touch with our support team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Link href="/contact" className="text-primary hover:underline flex items-center">
                  <Shield className="mr-2 h-4 w-4" />
                  Contact Support
                </Link>
                <p className="text-sm text-muted-foreground">Our team is available Monday-Friday, 9am-5pm</p>
              </div>

              <div className="space-y-2">
                <p className="font-medium">Email Support</p>
                <p className="text-sm text-muted-foreground">support@academichub.edu</p>
              </div>

              <div className="space-y-2">
                <p className="font-medium">Phone Support</p>
                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              </div>

              <Button className="w-full mt-2" asChild>
                <Link href="/contact">
                  Get Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
