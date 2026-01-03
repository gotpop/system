import {
  BriefcaseBusiness,
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

/**
 * Icon registry - single source of truth for available icons.
 * Only icons listed here will be bundled (tree-shaking optimization).
 * Add new icons here and run `yarn sync-icons` to update Storyblok datasource.
 *
 * Keys match the CMS datasource values (kebab-case)
 */
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
} as const

// Export for sync scripts and type generation
export const AVAILABLE_ICONS = Object.keys(ICON_REGISTRY) as Array<
  keyof typeof ICON_REGISTRY
>

// Type-safe icon names
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
    // render a safe fallback so consumers still get an icon
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
