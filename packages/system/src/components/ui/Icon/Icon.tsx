import {
  ArrowDownAZ,
  ArrowDownZA,
  ArrowUpAZ,
  ArrowUpZA,
  BriefcaseBusiness,
  CalendarArrowDown,
  CalendarArrowUp,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  HelpCircle,
  Home,
  Link,
  Mail,
  Menu,
  Newspaper,
  Phone,
  Search,
  Star,
  User,
  X,
} from "lucide-react"

const ICON_REGISTRY = {
  mail: Mail,
  newspaper: Newspaper,
  github: Github,
  "briefcase-business": BriefcaseBusiness,
  "chevron-right": ChevronRight,
  "chevron-left": ChevronLeft,
  menu: Menu,
  "external-link": ExternalLink,
  home: Home,
  link: Link,
  phone: Phone,
  "help-circle": HelpCircle,
  search: Search,
  star: Star,
  x: X,
  user: User,
  "arrow-down-az": ArrowDownAZ,
  "arrow-up-az": ArrowUpAZ,
  "arrow-down-za": ArrowDownZA,
  "arrow-up-za": ArrowUpZA,
  "calendar-arrow-down": CalendarArrowDown,
  "calendar-arrow-up": CalendarArrowUp,
} as const

export const AVAILABLE_ICONS = Object.keys(ICON_REGISTRY) as Array<
  keyof typeof ICON_REGISTRY
>

export type IconName = keyof typeof ICON_REGISTRY

interface IconProps {
  name: IconName
  size?: number
  color?: string
  className?: string
}

export function Icon({
  name,
  size = 24,
  color,
  className,
}: IconProps): React.JSX.Element | null {
  if (!name) {
    console.log("Invalid icon name:", JSON.stringify({ name }, null, 2))
    return null
  }

  const IconComponent = ICON_REGISTRY[name]

  if (!IconComponent) {
    console.log(
      "Icon not found:",
      JSON.stringify({ name, availableIcons: AVAILABLE_ICONS }, null, 2)
    )

    return (
      <span className={className}>
        <HelpCircle size={size} color={color} />
      </span>
    )
  }

  return (
    <span className={className}>
      <IconComponent size={size} color={color} />
    </span>
  )
}
