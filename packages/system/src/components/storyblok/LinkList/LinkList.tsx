import type {
  LinkListItemStoryblok,
  LinkListStoryblok,
} from "../../../types/storyblok-components"
import { Typography } from "../Typography/Typography"
import "./LinkList.css"

interface LinkListProps {
  blok: LinkListStoryblok
}

export function LinkList({ blok }: LinkListProps): React.JSX.Element {
  return (
    <div className="link-list">
      <div className="link-list-heading">
        <Typography tag="h4" variant="text-xl" shade="light">
          {blok.heading}
        </Typography>
      </div>

      {blok.links && blok.links.length > 0 && (
        <ul className="link-list-items">
          {blok.links.map((linkItem) => {
            const item = linkItem as LinkListItemStoryblok
            const href = item.link?.cached_url || item.link?.url || "#"
            const target = item.link?.target || undefined

            return (
              <li key={item._uid}>
                <a
                  href={href}
                  className="link-list-item"
                  target={target}
                  rel={target === "_blank" ? "noopener noreferrer" : undefined}
                >
                  {item.link_text}
                </a>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
