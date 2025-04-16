import Link from "next/link"
import { BookOpen } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6" />
              <span className="font-bold text-xl">CampusInk</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering Engineering Excellence through Digital Innovation and Sustainable Growth
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <h3 className="font-medium">Platform</h3>
            <Link href="/publications" className="text-sm text-muted-foreground hover:text-primary">
              Publications
            </Link>
            <Link href="/achievements" className="text-sm text-muted-foreground hover:text-primary">
              Achievements
            </Link>
            <Link href="/collaborate" className="text-sm text-muted-foreground hover:text-primary">
              Collaborate
            </Link>
          </div>
          <div className="flex flex-col space-y-3">
            <h3 className="font-medium">SDG Alignment</h3>
            <Link href="/sdg/4" className="text-sm text-muted-foreground hover:text-primary">
              SDG 4: Quality Education
            </Link>
            <Link href="/sdg/9" className="text-sm text-muted-foreground hover:text-primary">
              SDG 9: Industry & Innovation
            </Link>
            <Link href="/sdg/17" className="text-sm text-muted-foreground hover:text-primary">
              SDG 17: Partnerships
            </Link>
          </div>
          <div className="flex flex-col space-y-3">
            <h3 className="font-medium">Legal</h3>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="text-sm text-muted-foreground hover:text-primary">
              Accessibility
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} CampusInk. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2 md:mt-0">Committed to the Sustainable Development Goals</p>
        </div>
      </div>
    </footer>
  )
}
