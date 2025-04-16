import type { Metadata } from "next"
import Link from "next/link"
import { AtSign, Building, Clock, MapPin, MessageSquare, Phone, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the AcademicHub team for support or inquiries",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-xl text-muted-foreground">Have questions or feedback? We'd love to hear from you.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is your message about?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry..."
                      className="min-h-[150px]"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="role">Your Role</Label>
                      <select
                        id="role"
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                      >
                        <option value="">Select your role</option>
                        <option value="student">Student</option>
                        <option value="faculty">Faculty</option>
                        <option value="admin">Administrator</option>
                        <option value="recruiter">Recruiter</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="institution">Institution/Company</Label>
                      <Input id="institution" placeholder="Where are you from?" />
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <AtSign className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:support@academichub.edu" className="text-muted-foreground hover:text-primary">
                      support@CampusInk.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+91 9579025326</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">
                     Fr.CRCE
                      <br />
                      Bandstand, Bandra
                      <br />
                      Mumbai
                      <br />
                      Maharashtra
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 5:00 PM(Lectures till 3:30)
                      <br />
                      Saturday - Sunday: Hoilday
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Support Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <Link href="#" className="font-medium hover:text-primary">
                      Live Chat Support
                    </Link>
                  </div>
                </div>

                <div className="flex items-center">
                  <Building className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <Link href="#" className="font-medium hover:text-primary">
                      Schedule a Demo
                    </Link>
                  </div>
                </div>

                <Separator />

                <div className="pt-2">
                  <p className="text-sm text-muted-foreground mb-3">
                    For urgent inquiries, please call our support line directly.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FaqItem
              question="How do I verify my academic achievements?"
              answer="Academic achievements are verified through a multi-step process involving faculty review and administrative approval. Submit your achievement through the dashboard, and it will be routed to the appropriate reviewers."
            />
            <FaqItem
              question="Can I connect my profile with ORCID or Google Scholar?"
              answer="Yes, AcademicHub supports integration with ORCID, Google Scholar, and other academic profile services. You can link these accounts in your profile settings."
            />
            <FaqItem
              question="How are SDGs mapped to my publications?"
              answer="You can select relevant SDGs when submitting your work, or our system can suggest mappings based on content analysis. Faculty reviewers can also help refine these mappings during the verification process."
            />
            <FaqItem
              question="Who can see my academic profile?"
              answer="By default, verified achievements are visible to all platform users. You can adjust visibility settings for individual achievements or your entire profile in your privacy settings."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-medium">{question}</h3>
      <p className="text-muted-foreground">{answer}</p>
    </div>
  )
}
