'use client'

import { ViewTransition } from "react"
import Link from "next/link"
import Image from "next/image"
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

  return (
    <CustomElement
      className="card-with-image"
      tag="box-grid"
    >
      <figure className="figure">
        <ViewTransition name={`${viewTransitionName}-image`}>
          <Image
            alt={title || "Card image"}
            className="image"
            height={364}
            src={image}
            width={640}
          />
        </ViewTransition>
      </figure>
      <section className="content" aria-labelledby={id}>
        <ViewTransition name={`${viewTransitionName}-heading`}>
          <Typography
            id={id}
            shade="dark"
            tag="h3"
            variant="text-xl"
          >
            <Link href={linkPath} className="heading-link">
              {title}
            </Link>
          </Typography>
        </ViewTransition>
        <ViewTransition name={`${viewTransitionName}-tags`}>
          <Tags tags={tags} />
        </ViewTransition>
      </section>
    </CustomElement>
  )
}
