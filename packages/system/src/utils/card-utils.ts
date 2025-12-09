import type {
  AssetStoryblok,
  ConfigStoryblok,
  MetaDatePublishedStoryblok,
  MetaDescriptionStoryblok,
  MetaImageStoryblok,
  MetaTagsStoryblok,
  MetaTitleStoryblok,
  MetaViewTransitionStoryblok,
} from "../types/storyblok-components"

type MetaDataArray = (
  | MetaTitleStoryblok
  | MetaImageStoryblok
  | MetaDatePublishedStoryblok
  | MetaDescriptionStoryblok
  | MetaTagsStoryblok
  | MetaViewTransitionStoryblok
)[]

export const getMeta = (metaData: MetaDataArray | undefined) => {
  const getValue = <T extends string | string[] | AssetStoryblok>(
    component: string
  ): T | undefined =>
    metaData?.find((item) => item.component === component)?.payload as T

  const title = getValue<string>("meta_title") || ""
  const imageAsset = getValue<AssetStoryblok>("meta_image")
  const image = imageAsset?.filename || ""
  const date = getValue<string>("meta_date_published") || ""
  const description = getValue<string>("meta_description") || ""
  const tags = getValue<string[]>("meta_tags") || []
  const viewTransitionName = getValue<string>("meta_view_transition") || ""

  return {
    title,
    image,
    date,
    description,
    tags,
    viewTransitionName,
  }
}

export const getLinkPath = (
  fullSlug: string,
  config?: ConfigStoryblok | null
) => {
  let linkPath = `/${fullSlug}`

  const root = config?.root_name_space

  if (root && linkPath.startsWith(`/${root}/`)) {
    linkPath = linkPath.slice(root.length + 1)
  }

  return linkPath
}

export type { MetaDataArray }
