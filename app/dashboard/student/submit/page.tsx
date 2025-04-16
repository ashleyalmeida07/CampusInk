"use client"

import type React from "react"

import { useState } from "react"
import { DashboardShell } from "@/components/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"
import { FileUp, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SubmitAchievement() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeTab, setActiveTab] = useState("publication")

  const [formData, setFormData] = useState({
    title: "",
    type: "",
    description: "",
    date: "",
    coAuthors: "",
    venue: "",
    link: "",
    file: null as File | null,
    sdgs: [] as number[],
  })

  const publicationTypes = [
    { value: "research_paper", label: "Research Paper" },
    { value: "conference", label: "Conference Paper" },
    { value: "journal", label: "Journal Article" },
    { value: "book_chapter", label: "Book Chapter" },
    { value: "patent", label: "Patent" },
  ]

  const achievementTypes = [
    { value: "hackathon", label: "Hackathon" },
    { value: "competition", label: "Competition" },
    { value: "project", label: "Technical Project" },
    { value: "internship", label: "Internship" },
    { value: "workshop", label: "Workshop" },
    { value: "certification", label: "Certification" },
  ]

  const sdgOptions = [
    { id: 4, label: "Quality Education" },
    { id: 9, label: "Industry, Innovation and Infrastructure" },
    { id: 17, label: "Partnerships for the Goals" },
    { id: 6, label: "Clean Water and Sanitation" },
    { id: 11, label: "Sustainable Cities and Communities" },
    { id: 7, label: "Affordable and Clean Energy" },
    { id: 13, label: "Climate Action" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, file: e.target.files![0] }))
    }
  }

  const handleSdgChange = (sdgId: number, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      sdgs: checked ? [...prev.sdgs, sdgId] : prev.sdgs.filter((id) => id !== sdgId),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.sdgs.length === 0) {
      toast({
        title: "SDG Selection Required",
        description: "Please select at least one SDG that your achievement contributes to.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: activeTab === "publication" ? "Publication Submitted" : "Achievement Submitted",
        description: "Your submission has been sent for verification.",
      })

      // Reset form
      setFormData({
        title: "",
        type: "",
        description: "",
        date: "",
        coAuthors: "",
        venue: "",
        link: "",
        file: null,
        sdgs: [],
      })
    }, 1500)
  }

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Submit New</h2>
          <p className="text-muted-foreground">Submit your academic publications and achievements for verification</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="publication">Publication</TabsTrigger>
            <TabsTrigger value="achievement">Achievement</TabsTrigger>
          </TabsList>

          <TabsContent value="publication">
            <Card>
              <form onSubmit={handleSubmit}>
                <CardHeader>
                  <CardTitle>Publication Details</CardTitle>
                  <CardDescription>Submit your research papers, patents, and other publications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        name="title"
                        placeholder="Title of your publication"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="type">Type</Label>
                      <Select
                        value={formData.type}
                        onValueChange={(value) => handleSelectChange("type", value)}
                        required
                      >
                        <SelectTrigger id="type">
                          <SelectValue placeholder="Select publication type" />
                        </SelectTrigger>
                        <SelectContent>
                          {publicationTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Abstract/Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Provide an abstract or description of your publication"
                      className="min-h-32"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="date">Publication Date</Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="coAuthors">Co-authors</Label>
                      <Input
                        id="coAuthors"
                        name="coAuthors"
                        placeholder="Names separated by commas"
                        value={formData.coAuthors}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="venue">Journal/Conference/Publisher</Label>
                      <Input
                        id="venue"
                        name="venue"
                        placeholder="Where was it published?"
                        value={formData.venue}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="link">DOI/External Link</Label>
                      <Input
                        id="link"
                        name="link"
                        type="url"
                        placeholder="https://doi.org/..."
                        value={formData.link}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="file">Upload Document</Label>
                    <div className="flex items-center gap-4">
                      <Input id="file" type="file" className="hidden" onChange={handleFileChange} />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById("file")?.click()}
                        className="w-full"
                      >
                        <FileUp className="mr-2 h-4 w-4" />
                        {formData.file ? formData.file.name : "Choose file"}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">Upload PDF, DOC, or image files (max 10MB)</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Label>SDG Alignment</Label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-80">
                            <p>Select the Sustainable Development Goals (SDGs) that your publication contributes to.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {sdgOptions.map((sdg) => (
                        <div key={sdg.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={`sdg-${sdg.id}`}
                            checked={formData.sdgs.includes(sdg.id)}
                            onCheckedChange={(checked) => handleSdgChange(sdg.id, checked as boolean)}
                          />
                          <Label htmlFor={`sdg-${sdg.id}`} className="flex items-center gap-2">
                            <div
                              className="h-4 w-4 rounded-full"
                              style={{
                                backgroundColor:
                                  sdg.id === 4
                                    ? "#c5192d"
                                    : sdg.id === 6
                                      ? "#26bde2"
                                      : sdg.id === 7
                                        ? "#fcc30b"
                                        : sdg.id === 9
                                          ? "#f36d25"
                                          : sdg.id === 11
                                            ? "#f99d26"
                                            : sdg.id === 13
                                              ? "#3f7e44"
                                              : "#19486a",
                              }}
                            />
                            <span>
                              SDG {sdg.id}: {sdg.label}
                            </span>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Publication"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="achievement">
            <Card>
              <form onSubmit={handleSubmit}>
                <CardHeader>
                  <CardTitle>Achievement Details</CardTitle>
                  <CardDescription>Submit your hackathons, competitions, and other achievements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        name="title"
                        placeholder="Title of your achievement"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="type">Type</Label>
                      <Select
                        value={formData.type}
                        onValueChange={(value) => handleSelectChange("type", value)}
                        required
                      >
                        <SelectTrigger id="type">
                          <SelectValue placeholder="Select achievement type" />
                        </SelectTrigger>
                        <SelectContent>
                          {achievementTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Describe your achievement in detail"
                      className="min-h-32"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="coAuthors">Team Members</Label>
                      <Input
                        id="coAuthors"
                        name="coAuthors"
                        placeholder="Names separated by commas"
                        value={formData.coAuthors}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="venue">Organizer/Event</Label>
                      <Input
                        id="venue"
                        name="venue"
                        placeholder="Who organized the event?"
                        value={formData.venue}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="link">External Link</Label>
                      <Input
                        id="link"
                        name="link"
                        type="url"
                        placeholder="https://example.com/event"
                        value={formData.link}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="file">Upload Certificate/Proof</Label>
                    <div className="flex items-center gap-4">
                      <Input id="file" type="file" className="hidden" onChange={handleFileChange} />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById("file")?.click()}
                        className="w-full"
                      >
                        <FileUp className="mr-2 h-4 w-4" />
                        {formData.file ? formData.file.name : "Choose file"}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">Upload PDF, DOC, or image files (max 10MB)</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Label>SDG Alignment</Label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-80">
                            <p>Select the Sustainable Development Goals (SDGs) that your achievement contributes to.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {sdgOptions.map((sdg) => (
                        <div key={sdg.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={`sdg-${sdg.id}`}
                            checked={formData.sdgs.includes(sdg.id)}
                            onCheckedChange={(checked) => handleSdgChange(sdg.id, checked as boolean)}
                          />
                          <Label htmlFor={`sdg-${sdg.id}`} className="flex items-center gap-2">
                            <div
                              className="h-4 w-4 rounded-full"
                              style={{
                                backgroundColor:
                                  sdg.id === 4
                                    ? "#c5192d"
                                    : sdg.id === 6
                                      ? "#26bde2"
                                      : sdg.id === 7
                                        ? "#fcc30b"
                                        : sdg.id === 9
                                          ? "#f36d25"
                                          : sdg.id === 11
                                            ? "#f99d26"
                                            : sdg.id === 13
                                              ? "#3f7e44"
                                              : "#19486a",
                              }}
                            />
                            <span>
                              SDG {sdg.id}: {sdg.label}
                            </span>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Achievement"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  )
}
