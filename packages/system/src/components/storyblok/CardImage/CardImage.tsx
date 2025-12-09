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
import { useId } from "react"

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
  const id = useId()

  const linkPath = getLinkPath(fullSlug, config)

  const getTagLengthClass = (tag: string) => {
    const length = tag.length
    if (length <= 4) return "tag-xs"
    if (length <= 6) return "tag-sm"
    if (length <= 9) return "tag-md"
    return "tag-lg"
  }

  const tagList = tags.map((tag) => (
    <span key={tag} className={`tag ${getTagLengthClass(tag)}`}>
      {tag}
    </span>
  ))

  return (
    <CustomElement
      className="card-with-image"
      tag="box-grid"
      style={{
        viewTransitionName: viewTransitionName,
      }}
    >
      <figure className="figure">
        <Image
          alt={title || "Card image"}
          className="image"
          height={364}
          src={image}
          width={640}
          style={{
            viewTransitionName: `${viewTransitionName}-image`,
          }}
        />
      </figure>
      <section className="content" aria-labelledby={id}>
        <Typography
          id={id}
          shade="dark"
          tag="h3"
          variant="text-xl"
          styles={{
            viewTransitionName: `${viewTransitionName}-heading`,
          }}
        >
          <a href={linkPath} className="heading-link">
            {title}
          </a>
        </Typography>
        <div
          className="tags"
          style={{
            viewTransitionName: `${viewTransitionName}-tags`,
          }}
        >
          {tagList}
        </div>
      </section>
    </CustomElement>
  )
}
