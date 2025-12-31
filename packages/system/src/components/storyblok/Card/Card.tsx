"use client"

import Link from "next/link"
import { ViewTransition } from "react"
import type { ConfigStoryblok } from "../../../types/storyblok-components"
import {
  getLinkPath,
  getMeta,
  type MetaDataArray,
} from "../../../utils/card-utils"
import { formatDate } from "../../../utils/date-formatter"
import { CustomElement } from "../../ui/CustomElement"
import { Tags } from "../../ui/Tags"
import { Typography } from "../Typography/Typography"
import "./Card.css"

export interface CardBlokProps {
  _uid: string
  component: string
  full_slug: string
  meta_data_page?: MetaDataArray
}

export interface CardProps {
  blok: CardBlokProps
  config?: ConfigStoryblok | null
}

export function Card({ blok, config }: CardProps) {
  const { full_slug: fullSlug, meta_data_page: metaData } = blok

  const { title, date, description, tags, viewTransitionName } =
    getMeta(metaData)

  const linkPath = getLinkPath(fullSlug, config)
  const formattedDate = formatDate(date)

  console.log("[Card] viewTransitionName:", viewTransitionName)

  return (
    <ViewTransition name={viewTransitionName}>
      <CustomElement tag="box-grid">
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
          <Tags tags={tags} />
        </div>
        <Typography tag="h3" variant="text-xl" shade="dark">
          <Link href={linkPath} className="title-link">
            {title}
          </Link>
        </Typography>
        <Typography tag="p" variant="text-base" shade="charcoal">
          {description}
        </Typography>
        <Link href={linkPath} className="link-simple">
          Read more
        </Link>
      </CustomElement>
    </ViewTransition>
  )
}
