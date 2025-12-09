"use client"

import { Suspense, startTransition, ViewTransition } from "react"
import type {
  CardsClientFilterStoryblok,
  ConfigStoryblok,
  TagDatasourceEntry,
} from "../../../types"
import { CardsControl } from "../../ui/CardsControl/CardsControl"
import { CustomElement } from "../../ui/CustomElement"
import { Card, type CardBlokProps } from "../Card/Card"
import { CardImage } from "../CardImage"
import { useCardsFilter } from "./use-cards-filter"
import "./CardsClientFilter.css"

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

  const tagOptions = [
    { value: "all", label: "All Posts" },
    ...availableTags.map((tag) => ({
      value: tag.value,
      label: tag.name,
    })),
  ]

  const output =
    filteredAndSortedPosts.length > 0 &&
    filteredAndSortedPosts.map((blok) =>
      hasPagePostImage ? (
        <CardImage key={blok.full_slug} blok={blok} config={config} />
      ) : (
        <Card key={blok.full_slug} blok={blok} config={config} />
      )
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
            options={SORT_OPTIONS}
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
