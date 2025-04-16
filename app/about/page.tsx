import type React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, CheckCircle, FileText, GraduationCap, LineChart, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About CampusInk",
  description: "Learn about our platform for tracking and showcasing academic achievements aligned with SDGs",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      {/* Hero Section */}
      <section className="py-12 md:py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Empowering Academic Excellence</h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
          A centralized platform for managing and showcasing academic achievements aligned with Sustainable Development
          Goals.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/register">
              Join CampusInk <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/publications">Explore Publications</Link>
          </Button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              CampusInk aims to bridge the gap between academic achievements and global sustainability goals by
              providing a comprehensive platform for students, faculty, and industry professionals.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              We believe in making academic contributions visible, verifiable, and aligned with the United Nations
              Sustainable Development Goals (SDGs) to foster innovation that addresses real-world challenges.
            </p>
            <p className="text-lg text-muted-foreground">
              By connecting students with faculty mentors and industry recruiters, we create an ecosystem that nurtures
              talent and drives sustainable development.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://www.mdpi.com/sustainability/sustainability-14-03398/article_deploy/html/images/sustainability-14-03398-g001-550.jpg"
              alt="Academic collaboration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Platform Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<FileText className="h-10 w-10" />}
            title="Publication Management"
            description="Submit, track, and showcase academic papers, patents, and other scholarly work in one place."
          />
          <FeatureCard
            icon={<CheckCircle className="h-10 w-10" />}
            title="Verification Workflow"
            description="Transparent verification process by faculty and administrators ensures credibility of achievements."
          />
          <FeatureCard
            icon={<Award className="h-10 w-10" />}
            title="Achievement Showcase"
            description="Create a comprehensive portfolio of verified achievements to share with recruiters and collaborators."
          />
          <FeatureCard
            icon={<LineChart className="h-10 w-10" />}
            title="Analytics Dashboard"
            description="Visualize impact metrics and track progress toward sustainability goals with interactive charts."
          />
          <FeatureCard
            icon={<GraduationCap className="h-10 w-10" />}
            title="SDG Alignment"
            description="Map academic work to specific Sustainable Development Goals to demonstrate real-world impact."
          />
          <FeatureCard
            icon={<Users className="h-10 w-10" />}
            title="Collaboration Network"
            description="Connect with peers, faculty mentors, and industry professionals for research and project opportunities."
          />
        </div>
      </section>

      {/* User Roles Section */}
      <section className="py-12 md:py-20 bg-muted/50 rounded-xl p-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Who Uses CampusInk?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <UserRoleCard
            title="Students"
            description="Document achievements, find collaborators, and connect with potential employers."
            cta="Student Dashboard"
            href="/dashboard/student"
          />
          <UserRoleCard
            title="Faculty"
            description="Review submissions, endorse student work, and track departmental progress."
            cta="Faculty Portal"
            href="/dashboard/faculty"
          />
          <UserRoleCard
            title="Administrators"
            description="Verify achievements, manage users, and generate institutional reports."
            cta="Admin Console"
            href="/dashboard/admin"
          />
          <UserRoleCard
            title="Recruiters"
            description="Discover talented students and browse verified achievements aligned with company goals."
            cta="Talent Search"
            href="/dashboard/recruiter"
          />
        </div>
      </section>

    

      {/* CTA Section */}
      <section className="py-12 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join CampusInk?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Start documenting your academic journey and connect with a community dedicated to sustainable innovation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/register">
              Create Account <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card>
      <CardHeader>
        <div className="text-primary mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

function UserRoleCard({
  title,
  description,
  cta,
  href,
}: {
  title: string
  description: string
  cta: string
  href: string
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border shadow-sm">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <Button variant="outline" asChild className="mt-auto">
        <Link href={href}>{cta}</Link>
      </Button>
    </div>
  )
}
