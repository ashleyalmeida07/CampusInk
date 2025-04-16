import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Award, FileText, Users, Globe, Lightbulb, Handshake } from "lucide-react"
// import {FAQPage} from "./faq"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 z-0" />
        <div className="container relative z-10 py-20 md:py-28 flex flex-col items-center text-center">
          <Badge className="mb-4" variant="outline">
            Empowering Academic Excellence
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl">
            Exploring Knowledge, Expressing Thoughts, Elevating Voices
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            A centralized platform for students and faculty to document, verify, and showcase academic achievements
            aligned with Sustainable Development Goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/register">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SDG Alignment Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-2">SDG Alignment</Badge>
            <h2 className="text-3xl font-bold mb-4">Supporting Sustainable Development Goals</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform is designed to align with and promote key Sustainable Development Goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">SDG 4: Quality Education</h3>
                  <p className="text-muted-foreground">
                    Enabling students to document and showcase academic excellence through an accessible platform.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">SDG 9: Industry & Innovation</h3>
                  <p className="text-muted-foreground">
                    Fostering innovation by encouraging research, supporting patents, and facilitating industry
                    linkages.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Handshake className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">SDG 17: Partnerships</h3>
                  <p className="text-muted-foreground">
                    Creating opportunities to connect with researchers, institutions, and industry for collaborative
                    growth.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-2">Core Features</Badge>
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform provides tools for managing all aspects of academic achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Publication Management</h3>
              <p className="text-muted-foreground">
                Structured submission process for research papers, patents, and conferences with faculty verification.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Achievement Tracking</h3>
              <p className="text-muted-foreground">
                Categorized system for awards, hackathons, and competitions with digital certificates and badges.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration Hub</h3>
              <p className="text-muted-foreground">
                Connect with peers, faculty, and industry professionals for research projects and mentorship.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Recognition</h3>
              <p className="text-muted-foreground">
                Integration with global academic platforms and recruiter access to verified student profiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">1000+</h3>
              <p className="text-muted-foreground">Published Articles</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p className="text-muted-foreground">Student Achievements</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p className="text-muted-foreground">Industry Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Publications Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <Badge className="mb-2">Latest Research</Badge>
              <h2 className="text-3xl font-bold">Recent Publications</h2>
            </div>
            <Link href="/publications">
              <Button variant="outline" className="mt-4 md:mt-0">
                View All Publications
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card  className="overflow-hidden">
                <div className="aspect-video relative bg-muted">
                  <Image
                    src={`https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D`}
                    alt={`Publication`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      SDG 9
                    </Badge>
                    <span className="text-xs text-muted-foreground">Mar 15, 2023</span>
                  </div>
                  <h3 className="font-bold mb-2 line-clamp-1">Machine Learning for Sustainable Energy Systems</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    A novel approach to optimize energy consumption using advanced machine learning algorithms...
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-muted" />
                    <span className="text-xs">By Ashley Almeida</span>
                  </div>
                </CardContent>
              </Card>

              <Card  className="overflow-hidden">
                <div className="aspect-video relative bg-muted">
                  <Image
                    src={`https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D`}
                    alt={`Publication`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      SDG 10
                    </Badge>
                    <span className="text-xs text-muted-foreground">June 15, 2023</span>
                  </div>
                  <h3 className="font-bold mb-2 line-clamp-1">Block Chain and VR</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    A  approach to optimize energy consumption using advanced machine learning algorithms...
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-muted" />
                    <span className="text-xs">By Jaden Britto</span>
                  </div>
                </CardContent>
              </Card>

              <Card  className="overflow-hidden">
                <div className="aspect-video relative bg-muted">
                  <Image
                    src={`https://images.unsplash.com/photo-1488229297570-58520851e868?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D`}
                    alt={`Publication`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      SDG 11
                    </Badge>
                    <span className="text-xs text-muted-foreground">Jan 25, 2023</span>
                  </div>
                  <h3 className="font-bold mb-2 line-clamp-1">Big Data </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    A novel approach to optimize energy consumption using advanced machine learning algorithms...
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-muted" />
                    <span className="text-xs">By Siddhi Alat</span>
                  </div>
                </CardContent>
              </Card>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <Badge className="mb-4" variant="outline">
              Join Our Community
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Showcase Your Achievements?</h2>
            <p className="text-muted-foreground mb-8">
              Create your academic profile, submit your publications, and connect with a global network of researchers
              and industry professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
