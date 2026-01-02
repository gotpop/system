"use client"

import Image from "next/image"
import Link from "next/link"
import { ViewTransition } from "react"
import type { ConfigStoryblok } from "../../../types/storyblok-components"
import {
  getLinkPath,
  getMeta,
  type MetaDataArray,
} from "../../../utils/card-utils"
import { CustomElement } from "../../ui/CustomElement"
import { Tags } from "../../ui/Tags"
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
  const { full_slug: fullSlug, meta_data_page: metaData, _uid } = blok
  const { title, image, tags, viewTransitionName } = getMeta(metaData)

  const linkPath = getLinkPath(fullSlug, config)

  return (
    <ViewTransition name={viewTransitionName}>
      <CustomElement className="card-with-image" tag="box-grid">
        <figure className="figure">
          <Image
            alt={title || "Card image"}
            className="image"
            height={364}
            src={image}
            width={640}
          />
        </figure>
        <section className="content" aria-labelledby={_uid}>
          <Typography id={_uid} shade="dark" tag="h3" variant="text-xl">
            <Link href={linkPath} className="heading-link">
              {title}
            </Link>
          </Typography>
          <Tags tags={tags} />
        </section>
      </CustomElement>
    </ViewTransition>
  )
}
