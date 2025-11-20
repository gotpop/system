import type {
  ConfigStoryblok,
  PagePostStoryblok,
} from "../../../types/storyblok-components"
import { formatDate } from "../../../utils/date-formatter"
import { CustomElement } from "../../ui/CustomElement"
import { Typography } from "../Typography/Typography"
import "./Card.css"

export interface PostProps {
  uuid: string
  full_slug: string
  name: string
  published_at: string
  content: PagePostStoryblok
}

export interface CardProps {
  blok: PostProps
  config?: ConfigStoryblok | null
}

export function Card({ blok, config }: CardProps) {
  const { full_slug, name, published_at, content } = blok
  const {
    Heading,
    description,
    published_date,
    tags = [],
    view_transition_name: viewTransitionName,
  } = content || {}

  let linkPath = `/${full_slug}`

  const root = config?.root_name_space

  if (root && linkPath.startsWith(`/${root}/`)) {
    linkPath = linkPath.slice(root.length + 1)
  }

  const dateToUse = published_date || published_at
  const formattedDate = formatDate(dateToUse)

  const title = Heading || name || "Untitled"

  const tagList = tags.map((tag) => (
    <span key={tag} className="tag">
      {tag}
    </span>
  ))

  return (
    <CustomElement
      tag="box-grid"
      style={{
        viewTransitionName: viewTransitionName,
      }}
    >
      <div className="meta">
        <Typography
          tag="time"
          variant="text-sm"
          shade="charcoal"
          dateTime={formattedDate}
          className="margin-none"
        >
          {formattedDate}
        </Typography>
        <div className="tags">{tagList}</div>
      </div>
      <Typography tag="h3" variant="text-xl" shade="dark">
        <a href={linkPath} className="title-link">
          {title}
        </a>
      </Typography>
      <Typography tag="p" variant="text-base" shade="charcoal">
        {description}
      </Typography>
      <a href={linkPath} className="link-simple">
        Read more
      </a>
    </CustomElement>
  )
}
