'use client'

import { ViewTransition } from "react"
import type {
  ConfigStoryblok,
  HeroPostStoryblok,
  PageDefaultStoryblok,
} from "../../../types/storyblok-components"
import { getMeta } from "../../../utils/card-utils"
import { CustomElement } from "../../ui/CustomElement"
import { Tags } from "../../ui/Tags"
import { Typography } from "../Typography/Typography"
import "./HeroPost.css"
import { RichText } from "../RichText"

export interface HeroPostProps {
  blok: HeroPostStoryblok
  metaDataPage: PageDefaultStoryblok["meta_data_page"]
  config?: ConfigStoryblok | null
}

export function HeroPost({ blok, metaDataPage }: HeroPostProps) {
  const { tags, viewTransitionName } = getMeta(metaDataPage)
  const { heading, subheading } = blok

  console.log('[HeroPost] viewTransitionName:', viewTransitionName)

  return (
    <CustomElement
      tag="box-grid"
      className="hero-post"
    >
      <ViewTransition name={`${viewTransitionName}-heading`}>
        <Typography tag="h3" variant="text-xl" shade="dark">
          {heading}
        </Typography>
      </ViewTransition>
      <ViewTransition name={`${viewTransitionName}-tags`}>
        <Tags tags={tags} />
      </ViewTransition>
      {subheading && (
        <div className="subheading">
          <RichText content={subheading} />
        </div>
      )}
    </CustomElement>
  )
}
