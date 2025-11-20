"use client"

import { startTransition, ViewTransition } from "react"
import type { ConfigStoryblok } from "../../../index"
import { CustomElement } from "../../ui/CustomElement"
import type { PostProps } from "../Card/Card"
import { Card } from "../Card/Card"
import { CardsControl } from "../CardsControl/CardsControl"
import { useCardsFilter } from "./use-cards-filter"

const SORT_OPTIONS = [
  { value: "published_desc", label: "Newest First" },
  { value: "published_asc", label: "Oldest First" },
  { value: "name_asc", label: "Title A-Z" },
  { value: "name_desc", label: "Title Z-A" },
]

export interface TagDatasourceEntry {
  name: string
  value: string
  id: number
}

interface CardsFilterClientProps {
  posts: PostProps[]
  availableTags: TagDatasourceEntry[]
  config?: ConfigStoryblok | null
}

export function CardsFilterClient({
  availableTags,
  config,
  posts,
}: CardsFilterClientProps) {
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

  // Transform tags for CardsControl options format
  const tagOptions = [
    { value: "all", label: "All Posts" },
    ...availableTags.map((tag) => ({
      value: tag.value,
      label: tag.name,
    })),
  ]

  const output =
    filteredAndSortedPosts.length > 0 &&
    filteredAndSortedPosts.map((blok) => (
      <Card key={blok.uuid} blok={blok} config={config} />
    ))

  return (
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
  )
}
