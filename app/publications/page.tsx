import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter } from "lucide-react"

export default function PublicationsPage() {
  // Mock data for publications
  const publications = [
    {
      id: 1,
      title: "Machine Learning for Sustainable Energy Systems",
      abstract:
        "A novel approach to optimize energy consumption using advanced machine learning algorithms and predictive analytics to reduce carbon footprint in industrial settings.",
      authors: ["Jaden Sharma", "Aayush Gupta"],
      date: "2023-03-15",
      type: "Research Paper",
      sdgs: [7, 9, 13],
      department: "Computer Science",
      image: "https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      title: "Blockchain-Based Supply Chain Transparency Framework",
      abstract:
        "This paper presents a decentralized framework for enhancing transparency and traceability in global supply chains using blockchain technology.",
      authors: ["Alex Almeida", "Maria Rodriguez"],
      date: "2023-02-10",
      type: "Conference Paper",
      sdgs: [9, 12, 17],
      department: "Information Technology",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      title: "Smart Water Management System for Urban Areas",
      abstract:
        "An IoT-based solution for monitoring and optimizing water usage in urban environments, reducing waste and improving distribution efficiency.",
      authors: ["David Britto", "Sarah Alat"],
      date: "2023-04-05",
      type: "Journal Article",
      sdgs: [6, 11],
      department: "Civil Engineering",
      image: "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      title: "Low-Cost Prosthetic Limbs Using 3D Printing Technology",
      abstract:
        "Development of affordable prosthetic limbs using 3D printing, making assistive devices more accessible in developing regions.",
      authors: ["Michael Gonsalves", "Jennifer Lee"],
      date: "2023-01-20",
      type: "Research Paper",
      sdgs: [3, 10],
      department: "Mechanical Engineering",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      title: "Renewable Energy Integration in Rural Microgrids",
      abstract:
        "A comprehensive study on integrating solar and wind energy sources in rural microgrids to provide sustainable electricity access.",
      authors: ["Robert Wilson", "Emma Garcia"],
      date: "2023-03-28",
      type: "Journal Article",
      sdgs: [7, 9, 11],
      department: "Electrical Engineering",
      image: "https://plus.unsplash.com/premium_photo-1682145373962-4d76b19410ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHx0ZWNobm9sb2d5fGVufDB8fDB8fHww",
    },
    {
      id: 6,
      title: "AI-Driven Crop Disease Detection System",
      abstract:
        "An artificial intelligence approach to early detection of crop diseases using computer vision and deep learning techniques.",
      authors: ["Ananya Patel", "James Thompson"],
      date: "2023-02-15",
      type: "Conference Paper",
      sdgs: [2, 9],
      department: "Computer Science",
      image: "https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHx0ZWNobm9sb2d5fGVufDB8fDB8fHww",
    },
  ]

  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Publications</h1>
          <p className="text-muted-foreground">
            Explore research papers, patents, and other academic publications from our community
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="search" placeholder="Search publications..." className="flex-1" />
            <Button type="submit" size="icon">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="cs">Computer Science</SelectItem>
                <SelectItem value="ee">Electrical Engineering</SelectItem>
                <SelectItem value="me">Mechanical Engineering</SelectItem>
                <SelectItem value="ce">Civil Engineering</SelectItem>
                <SelectItem value="it">Information Technology</SelectItem>
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
                <SelectItem value="6">SDG 6: Clean Water</SelectItem>
                <SelectItem value="7">SDG 7: Clean Energy</SelectItem>
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
            <TabsTrigger value="research">Research Papers</TabsTrigger>
            <TabsTrigger value="conference">Conference Papers</TabsTrigger>
            <TabsTrigger value="journal">Journal Articles</TabsTrigger>
            <TabsTrigger value="patent">Patents</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {publications.map((publication) => (
                <Card key={publication.id} className="overflow-hidden">
                  <div className="aspect-video relative bg-muted">
                    <Image
                      src={publication.image || "/placeholder.svg"}
                      alt={publication.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {publication.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(publication.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="font-bold mb-2 line-clamp-2">{publication.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{publication.abstract}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {publication.sdgs.map((sdg) => (
                        <div
                          key={sdg}
                          className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold"
                          style={{
                            backgroundColor:
                              sdg === 2
                                ? "#DDA63A20"
                                : sdg === 3
                                  ? "#4C9F3820"
                                  : sdg === 6
                                    ? "#26BDE220"
                                    : sdg === 7
                                      ? "#FCC30B20"
                                      : sdg === 9
                                        ? "#F36D2520"
                                        : sdg === 10
                                          ? "#DD136720"
                                          : sdg === 11
                                            ? "#F99D2620"
                                            : sdg === 12
                                              ? "#BF8B2E20"
                                              : sdg === 13
                                                ? "#3F7E4420"
                                                : "#19486A20",
                            color:
                              sdg === 2
                                ? "#DDA63A"
                                : sdg === 3
                                  ? "#4C9F38"
                                  : sdg === 6
                                    ? "#26BDE2"
                                    : sdg === 7
                                      ? "#FCC30B"
                                      : sdg === 9
                                        ? "#F36D25"
                                        : sdg === 10
                                          ? "#DD1367"
                                          : sdg === 11
                                            ? "#F99D26"
                                            : sdg === 12
                                              ? "#BF8B2E"
                                              : sdg === 13
                                                ? "#3F7E44"
                                                : "#19486A",
                          }}
                        >
                          {sdg}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-muted" />
                        <span className="text-xs">{publication.authors.join(", ")}</span>
                      </div>
                      <Link href={`/publications/${publication.id}`}>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="research" className="mt-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {publications
                .filter((pub) => pub.type === "Research Paper")
                .map((publication) => (
                  <Card key={publication.id} className="overflow-hidden">
                    <div className="aspect-video relative bg-muted">
                      <Image
                        src={publication.image || "/placeholder.svg"}
                        alt={publication.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {publication.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {new Date(publication.date).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="font-bold mb-2 line-clamp-2">{publication.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{publication.abstract}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {publication.sdgs.map((sdg) => (
                          <div
                            key={sdg}
                            className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold"
                            style={{
                              backgroundColor:
                                sdg === 2
                                  ? "#DDA63A20"
                                  : sdg === 3
                                    ? "#4C9F3820"
                                    : sdg === 6
                                      ? "#26BDE220"
                                      : sdg === 7
                                        ? "#FCC30B20"
                                        : sdg === 9
                                          ? "#F36D2520"
                                          : sdg === 10
                                            ? "#DD136720"
                                            : sdg === 11
                                              ? "#F99D2620"
                                              : sdg === 12
                                                ? "#BF8B2E20"
                                                : sdg === 13
                                                  ? "#3F7E4420"
                                                  : "#19486A20",
                              color:
                                sdg === 2
                                  ? "#DDA63A"
                                  : sdg === 3
                                    ? "#4C9F38"
                                    : sdg === 6
                                      ? "#26BDE2"
                                      : sdg === 7
                                        ? "#FCC30B"
                                        : sdg === 9
                                          ? "#F36D25"
                                          : sdg === 10
                                            ? "#DD1367"
                                            : sdg === 11
                                              ? "#F99D26"
                                              : sdg === 12
                                                ? "#BF8B2E"
                                                : sdg === 13
                                                  ? "#3F7E44"
                                                  : "#19486A",
                            }}
                          >
                            {sdg}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-muted" />
                          <span className="text-xs">{publication.authors.join(", ")}</span>
                        </div>
                        <Link href={`/publications/${publication.id}`}>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
          {/* Similar content for other tabs */}
        </Tabs>
      </div>
    </div>
  )
}
