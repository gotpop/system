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

  return (
    <CustomElement
      tag="box-grid"
      className="hero-post"
      style={{
        viewTransitionName: viewTransitionName,
      }}
    >
      <Typography
        tag="h3"
        variant="text-xl"
        shade="dark"
        styles={{
          viewTransitionName: `${viewTransitionName}-heading`,
        }}
      >
        {heading}
      </Typography>
      <Tags tags={tags} viewTransitionName={`${viewTransitionName}-tags`} />
      {subheading && (
        <div className="subheading">
          <RichText content={subheading} />
        </div>
      )}
    </CustomElement>
  )
}
