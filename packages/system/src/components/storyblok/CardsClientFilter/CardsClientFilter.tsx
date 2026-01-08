"use client"

import { Suspense, startTransition, ViewTransition } from "react"
import type {
  CardsClientFilterStoryblok,
  ConfigStoryblok,
  TagDatasourceEntry,
} from "../../../types"
import { getMeta } from "../../../utils/card-utils"
import { CardsControl } from "../../ui/CardsControl/CardsControl"
import { CustomElement } from "../../ui/CustomElement"
import type { IconName } from "../../ui/Icon/Icon"
import { Card, type CardBlokProps } from "../Card/Card"
import { CardImage } from "../CardImage"
import { useCardsFilter } from "./use-cards-filter"
import "./CardsClientFilter.css"

const SORT_ICON_MAP: Record<string, IconName> = {
  published_desc: "calendar-arrow-down",
  published_asc: "calendar-arrow-up",
  name_asc: "arrow-down-az",
  name_desc: "arrow-up-za",
}

const TAG_ICON_MAP: Record<string, IconName> = {
  all: "tag",
  css: "css",
  javascript: "javascript",
  html: "html5",
  react: "react",
  angular: "angular",
  vuejs: "vuedotjs",
  next: "nextdotjs",
  nextjs: "nextdotjs",
  node: "nodedotjs",
  nodejs: "nodedotjs",
  typescript: "typescript",
  graphql: "graphql",
  cloudflare: "cloudflare",
  accessibility: "accessibility",
  aws: "cloud",
}

const SORT_OPTIONS = [
  { value: "published_desc", label: "Newest First" },
  { value: "published_asc", label: "Oldest First" },
  { value: "name_asc", label: "Title A-Z" },
  { value: "name_desc", label: "Title Z-A" },
]

interface CardsProps {
  blok: CardsClientFilterStoryblok
  availableTags: TagDatasourceEntry[]
  config?: ConfigStoryblok | null
  posts?: CardBlokProps[]
}

export function CardsClientFilter({
  availableTags,
  posts = [],
  config,
}: CardsProps) {
  const {
    currentSort,
    currentTag,
    filteredAndSortedPosts,
    setCurrentSort,
    setCurrentTag,
  } = useCardsFilter(posts)

  const handleTagChange = (tag: string) => {
    startTransition(() => {
      setCurrentTag(tag)
    })
  }

  const handleSortChange = (sort: string) => {
    startTransition(() => {
      setCurrentSort(sort)
    })
  }

  const hasPagePostImage = posts.some((post) => {
    const component = post?.component

    if (component === "card") return false

    return component === "card_image"
  })

  const hasPostsWithTag = (tagValue: string) => {
    return posts.some((post) => {
      const { tags } = getMeta(post.meta_data_page)

      return tags.some(
        (postTag: string) => postTag.toLowerCase() === tagValue.toLowerCase()
      )
    })
  }

  const availableTagOptions = availableTags
    .filter((tag) => hasPostsWithTag(tag.value))
    .map((tag) => ({
      value: tag.value,
      label: tag.name,
      icon: TAG_ICON_MAP[tag.value.toLowerCase()],
    }))

  const tagOptions = [
    { value: "all", label: "All Posts", icon: TAG_ICON_MAP.all },
    ...availableTagOptions,
  ]

  const sortOptions = SORT_OPTIONS.map((option) => ({
    ...option,
    icon: SORT_ICON_MAP[option.value],
  }))

  const output =
    filteredAndSortedPosts.length > 0 &&
    filteredAndSortedPosts.map((blok) =>
      hasPagePostImage ? (
        <CardImage key={blok.full_slug} blok={blok} config={config} />
      ) : (
        <Card key={blok.full_slug} blok={blok} config={config} />
      )
    )

  console.info(
    "The minified hydration error you're seeing here is due to the use of nested html in this page's custom select. As this is an experimental project I've decided to use it anyway (it's a problem with Next.js not the broswer) obviously this is not ready for a commerical project."
  )

  return (
    <Suspense fallback={<div>Loading posts...</div>}>
      <div className="filters-with-output">
        <CustomElement tag="box-grid">
          <CardsControl
            label="Filter"
            value={currentTag}
            onChange={handleTagChange}
            options={tagOptions}
          />
          <CardsControl
            label="Sort"
            value={currentSort}
            onChange={handleSortChange}
            options={sortOptions}
          />
        </CustomElement>
        <ViewTransition update="reorder-list">
          <output className="grid-cards" aria-live="polite">
            {output}
          </output>
        </ViewTransition>
      </div>
    </Suspense>
  )
}
