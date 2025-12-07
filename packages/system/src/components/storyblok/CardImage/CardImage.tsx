import Image from "next/image"
import type { ConfigStoryblok } from "../../../types/storyblok-components"
import {
  getLinkPath,
  getMeta,
  type MetaDataArray,
} from "../../../utils/card-utils"
import { CustomElement } from "../../ui/CustomElement"
import { Typography } from "../Typography/Typography"
import "./CardImage.css"

export interface CardImageBlokProps {
  _uid: string
  component: string
  full_slug: string
  meta_data_page?: MetaDataArray
}

export interface CardImageProps {
  blok: CardImageBlokProps
  config?: ConfigStoryblok | null
}

export function CardImage({ blok, config }: CardImageProps) {
  const { full_slug: fullSlug, meta_data_page: metaData } = blok
  const { title, image, tags, viewTransitionName } = getMeta(metaData)

  const linkPath = getLinkPath(fullSlug, config)
  // const formattedDate = formatDate(date)

  const tagList = tags.map((tag) => (
    <span key={tag} className="tag">
      {tag}
    </span>
  ))

  return (
    <article
      className="card-with-image"
      style={{
        viewTransitionName: viewTransitionName,
      }}
    >
      {image && (
        <div className="image-container">
          <Image
            src={image}
            alt={title || "Card image"}
            width={640}
            height={364}
            className="card-image"
            style={{
              viewTransitionName: `${viewTransitionName}-image`,
            }}
          />
        </div>
      )}
      <div className="content">
        <CustomElement tag="box-grid">
          <Typography
            tag="h3"
            variant="text-xl"
            shade="dark"
            styles={{
              viewTransitionName: `${viewTransitionName}-heading`,
            }}
          >
            <a href={linkPath} className="title-link">
              {title}
            </a>
          </Typography>
          <div className="tags">{tagList}</div>
          {/* <a href={linkPath} className="link-simple">
            Read more
          </a> */}
        </CustomElement>
      </div>
    </article>
  )
}
