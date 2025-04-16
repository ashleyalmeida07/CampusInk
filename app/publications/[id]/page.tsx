import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SdgBadge } from "@/components/sdg-badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Download, Share2, Bookmark, MessageSquare } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function PublicationPage({ params }: { params: { id: string } }) {
  // Mock data for a single publication
  const publication = {
    id: Number.parseInt(params.id),
    title: "Machine Learning for Sustainable Energy Systems",
    abstract:
      "A novel approach to optimize energy consumption using advanced machine learning algorithms and predictive analytics to reduce carbon footprint in industrial settings. This research presents a comprehensive framework that integrates real-time data analysis with adaptive control systems to achieve significant energy savings while maintaining operational efficiency.",
    authors: [
      { name: "Priya Sharma", department: "Computer Science", image: "/placeholder.svg" },
      { name: "Rahul Gupta", department: "Electrical Engineering", image: "/placeholder.svg" },
    ],
    date: "2023-03-15",
    type: "Research Paper",
    sdgs: [7, 9, 13],
    department: "Computer Science",
    image: "/placeholder.svg?height=400&width=800&text=Energy+Systems",
    journal: "International Journal of Sustainable Computing",
    doi: "10.1234/ijsc.2023.0015",
    citations: 12,
    keywords: ["Machine Learning", "Energy Optimization", "Sustainability", "Predictive Analytics", "Carbon Footprint"],
    references: [
      "Smith, J. et al. (2022). Artificial Intelligence in Energy Management. Journal of Clean Energy, 45(2), 123-145.",
      "Johnson, A. & Williams, B. (2021). Predictive Models for Energy Consumption. Sustainable Computing Review, 18(3), 78-92.",
      "Garcia, M. et al. (2022). Carbon Footprint Reduction Strategies in Industry. Environmental Science & Technology, 56(4), 234-251.",
    ],
    content: `
      <h2>Introduction</h2>
      <p>The global energy crisis and climate change concerns have necessitated innovative approaches to energy management in industrial settings. This research explores the application of machine learning techniques to optimize energy consumption while maintaining operational efficiency.</p>
      
      <h2>Methodology</h2>
      <p>We developed a framework that integrates real-time data collection from various sensors with advanced machine learning algorithms. The system continuously learns from operational patterns and environmental factors to make predictive adjustments to energy usage.</p>
      
      <h2>Results</h2>
      <p>Our implementation in three different industrial settings demonstrated energy savings of 15-22% compared to traditional control systems. The adaptive nature of the system allowed for continuous improvement over time, with minimal impact on production efficiency.</p>
      
      <h2>Discussion</h2>
      <p>The results indicate significant potential for machine learning applications in sustainable energy management. The framework's ability to adapt to changing conditions provides advantages over static optimization approaches.</p>
      
      <h2>Conclusion</h2>
      <p>This research demonstrates that machine learning-based energy optimization can contribute significantly to sustainability goals while maintaining industrial productivity. Future work will focus on expanding the framework to include renewable energy integration and demand response capabilities.</p>
    `,
  }

  return (
    <div className="container py-8 md:py-12 animate-fade-in">
      <div className="mb-6">
        <Link href="/publications" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Publications
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">{publication.type}</Badge>
              <Badge variant="outline">{publication.journal}</Badge>
              <Badge variant="outline">DOI: {publication.doi}</Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-4">{publication.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {publication.sdgs.map((sdg) => (
                <SdgBadge key={sdg} sdg={sdg} showLabel />
              ))}
            </div>
            <p className="text-muted-foreground">{publication.abstract}</p>
          </div>

          <div className="aspect-video relative rounded-lg overflow-hidden border">
            <Image
              src={publication.image || "/placeholder.svg"}
              alt={publication.title}
              fill
              className="object-cover"
            />
          </div>

          <Tabs defaultValue="content">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="references">References</TabsTrigger>
              <TabsTrigger value="discussions">Discussions</TabsTrigger>
            </TabsList>
            <TabsContent value="content" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div
                    className="prose dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: publication.content }}
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="references" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">References</h3>
                  <ul className="space-y-2">
                    {publication.references.map((reference, index) => (
                      <li key={index} className="text-sm">
                        {reference}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="discussions" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Discussions</h3>
                    <Button>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Start Discussion
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground">
                    <MessageSquare className="h-12 w-12 mb-4 opacity-20" />
                    <p>No discussions yet</p>
                    <p className="text-sm">Be the first to start a discussion about this publication</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Authors</h3>
              <div className="space-y-4">
                {publication.authors.map((author) => (
                  <div key={author.name} className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={author.image || "/placeholder.svg"} alt={author.name} />
                      <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{author.name}</p>
                      <p className="text-sm text-muted-foreground">{author.department}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Publication Info</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Published in</p>
                  <p>{publication.journal}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Publication Date</p>
                  <p>{new Date(publication.date).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">DOI</p>
                  <p>{publication.doi}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Citations</p>
                  <p>{publication.citations}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {publication.keywords.map((keyword) => (
                  <Badge key={keyword} variant="secondary">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-3">
            <Button className="w-full">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline">
                <Bookmark className="mr-2 h-4 w-4" />
                Save
              </Button>
              <Button variant="outline">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
