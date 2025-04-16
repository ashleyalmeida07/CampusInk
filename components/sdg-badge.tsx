import { Badge } from "@/components/ui/badge"

interface SdgBadgeProps {
  sdg: number
  showLabel?: boolean
  size?: "sm" | "md" | "lg"
}

export function SdgBadge({ sdg, showLabel = false, size = "md" }: SdgBadgeProps) {
  const sdgLabels: Record<number, string> = {
    1: "No Poverty",
    2: "Zero Hunger",
    3: "Good Health",
    4: "Quality Education",
    5: "Gender Equality",
    6: "Clean Water",
    7: "Clean Energy",
    8: "Economic Growth",
    9: "Industry & Innovation",
    10: "Reduced Inequalities",
    11: "Sustainable Cities",
    12: "Responsible Consumption",
    13: "Climate Action",
    14: "Life Below Water",
    15: "Life on Land",
    16: "Peace & Justice",
    17: "Partnerships",
  }

  const sizeClasses = {
    sm: "h-5 w-5 text-[10px]",
    md: "h-6 w-6 text-xs",
    lg: "h-8 w-8 text-sm",
  }

  if (!showLabel) {
    return (
      <div
        className={`flex items-center justify-center rounded-full font-bold ${sizeClasses[size]}`}
        style={{
          backgroundColor: `var(--sdg-${sdg})20`,
          color: `var(--sdg-${sdg})`,
        }}
      >
        {sdg}
      </div>
    )
  }

  return (
    <Badge variant="outline" className="flex items-center gap-1.5 px-2 py-0.5">
      <div
        className={`flex items-center justify-center rounded-full font-bold ${sizeClasses.sm}`}
        style={{
          backgroundColor: `var(--sdg-${sdg})20`,
          color: `var(--sdg-${sdg})`,
        }}
      >
        {sdg}
      </div>
      <span className="text-xs">{sdgLabels[sdg] || `SDG ${sdg}`}</span>
    </Badge>
  )
}
