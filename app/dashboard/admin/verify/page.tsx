"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import { CheckCircle, XCircle, Eye, FileText, Download } from "lucide-react"

export default function VerifySubmissions() {
  const { toast } = useToast()
  const [selectedTab, setSelectedTab] = useState("pending")
  const [viewDialogOpen, setViewDialogOpen] = useState(false)
  const [actionDialogOpen, setActionDialogOpen] = useState(false)
  const [actionType, setActionType] = useState<"approve" | "reject" | null>(null)
  const [feedback, setFeedback] = useState("")
  const [selectedSubmission, setSelectedSubmission] = useState<any>(null)

  // Mock data for submissions
  const pendingSubmissions = [
    {
      id: "SUB-001",
      title: "Machine Learning for Sustainable Agriculture",
      type: "Research Paper",
      student: "John Smith",
      department: "Computer Science",
      date: "2023-04-15",
      sdgs: [2, 9],
    },
    {
      id: "SUB-002",
      title: "Renewable Energy Storage Solutions",
      type: "Patent",
      student: "Emily Johnson",
      department: "Electrical Engineering",
      date: "2023-04-10",
      sdgs: [7, 9, 13],
    },
    {
      id: "SUB-003",
      title: "Smart Water Management System",
      type: "Project",
      student: "Michael Brown",
      department: "Civil Engineering",
      date: "2023-04-05",
      sdgs: [6, 11],
    },
  ]

  const verifiedSubmissions = [
    {
      id: "SUB-004",
      title: "Blockchain for Supply Chain Transparency",
      type: "Research Paper",
      student: "Sarah Wilson",
      department: "Computer Science",
      date: "2023-03-20",
      status: "approved",
      sdgs: [9, 12],
    },
    {
      id: "SUB-005",
      title: "Low-Cost Prosthetic Limbs",
      type: "Project",
      student: "David Lee",
      department: "Mechanical Engineering",
      date: "2023-03-15",
      status: "rejected",
      sdgs: [3, 10],
    },
  ]

  const handleView = (submission: any) => {
    setSelectedSubmission(submission)
    setViewDialogOpen(true)
  }

  const handleAction = (submission: any, action: "approve" | "reject") => {
    setSelectedSubmission(submission)
    setActionType(action)
    setFeedback("")
    setActionDialogOpen(true)
  }

  const handleSubmitAction = () => {
    setActionDialogOpen(false)

    toast({
      title: actionType === "approve" ? "Submission Approved" : "Submission Rejected",
      description: `The submission "${selectedSubmission.title}" has been ${actionType === "approve" ? "approved" : "rejected"}.`,
    })
  }

  return (
    <DashboardLayout userRole="admin">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Verify Submissions</h2>
          <p className="text-muted-foreground">Review and verify student achievement submissions</p>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="verified">Verified</TabsTrigger>
          </TabsList>
          <TabsContent value="pending" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Pending Submissions</CardTitle>
                <CardDescription>Submissions awaiting verification</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Student</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>SDGs</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingSubmissions.map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell className="font-medium">{submission.id}</TableCell>
                        <TableCell>{submission.title}</TableCell>
                        <TableCell>{submission.type}</TableCell>
                        <TableCell>{submission.student}</TableCell>
                        <TableCell>{submission.department}</TableCell>
                        <TableCell>{new Date(submission.date).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            {submission.sdgs.map((sdg) => (
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
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="icon" onClick={() => handleView(submission)}>
                              <Eye className="h-4 w-4" />
                              <span className="sr-only">View</span>
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-green-500"
                              onClick={() => handleAction(submission, "approve")}
                            >
                              <CheckCircle className="h-4 w-4" />
                              <span className="sr-only">Approve</span>
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-red-500"
                              onClick={() => handleAction(submission, "reject")}
                            >
                              <XCircle className="h-4 w-4" />
                              <span className="sr-only">Reject</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="verified" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Verified Submissions</CardTitle>
                <CardDescription>Previously verified submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Student</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {verifiedSubmissions.map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell className="font-medium">{submission.id}</TableCell>
                        <TableCell>{submission.title}</TableCell>
                        <TableCell>{submission.type}</TableCell>
                        <TableCell>{submission.student}</TableCell>
                        <TableCell>{submission.department}</TableCell>
                        <TableCell>{new Date(submission.date).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Badge variant={submission.status === "approved" ? "default" : "destructive"}>
                            {submission.status === "approved" ? "Approved" : "Rejected"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" onClick={() => handleView(submission)}>
                            <Eye className="h-4 w-4" />
                            <span className="sr-only">View</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* View Submission Dialog */}
        <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Submission Details</DialogTitle>
              <DialogDescription>Viewing submission {selectedSubmission?.id}</DialogDescription>
            </DialogHeader>
            {selectedSubmission && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium">Title</h4>
                    <p>{selectedSubmission.title}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Type</h4>
                    <p>{selectedSubmission.type}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Student</h4>
                    <p>{selectedSubmission.student}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Department</h4>
                    <p>{selectedSubmission.department}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Date</h4>
                    <p>{new Date(selectedSubmission.date).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Status</h4>
                    <p>{selectedSubmission.status || "Pending"}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium">SDGs</h4>
                  <div className="flex gap-2 mt-1">
                    {selectedSubmission.sdgs?.map((sdg: number) => (
                      <Badge key={sdg} variant="outline" className="flex items-center gap-1">
                        <div
                          className="h-3 w-3 rounded-full"
                          style={{
                            backgroundColor:
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
                        />
                        SDG {sdg}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium">Description</h4>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium">Attachments</h4>
                  <div className="mt-2 flex gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span>Paper.pdf</span>
                      <Download className="h-4 w-4 ml-2" />
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span>Certificate.pdf</span>
                      <Download className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
            <DialogFooter>
              <Button variant="outline" onClick={() => setViewDialogOpen(false)}>
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Approve/Reject Dialog */}
        <Dialog open={actionDialogOpen} onOpenChange={setActionDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{actionType === "approve" ? "Approve Submission" : "Reject Submission"}</DialogTitle>
              <DialogDescription>
                {actionType === "approve"
                  ? "This submission will be approved and published."
                  : "Please provide feedback on why this submission is being rejected."}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium">Submission</h4>
                <p>{selectedSubmission?.title}</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Feedback (optional for approval)</h4>
                <Textarea
                  placeholder="Enter your feedback here..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  required={actionType === "reject"}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setActionDialogOpen(false)}>
                Cancel
              </Button>
              <Button
                variant={actionType === "approve" ? "default" : "destructive"}
                onClick={handleSubmitAction}
                disabled={actionType === "reject" && !feedback.trim()}
              >
                {actionType === "approve" ? "Approve" : "Reject"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  )
}
