"use client"

import { useMemo, useState } from "react"
import { getMeta } from "../../../utils/card-utils"
import type { CardBlokProps } from "../../storyblok/Card/Card"

export function useCardsFilter(posts: CardBlokProps[]) {
  const [currentTag, setCurrentTag] = useState("all")
  const [currentSort, setCurrentSort] = useState("published_desc")

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = posts

    if (currentTag !== "all") {
      filtered = posts.filter((post) => {
        const { tags } = getMeta(post.meta_data_page)
        return tags.some(
          (tag: string) => tag.toLowerCase() === currentTag.toLowerCase()
        )
      })
    }

    const sorted = [...filtered].sort((a, b) => {
      switch (currentSort) {
        case "published_desc": {
          const { date: dateA } = getMeta(a.meta_data_page)
          const { date: dateB } = getMeta(b.meta_data_page)
          return new Date(dateB).getTime() - new Date(dateA).getTime()
        }
        case "published_asc": {
          const { date: dateA } = getMeta(a.meta_data_page)
          const { date: dateB } = getMeta(b.meta_data_page)
          return new Date(dateA).getTime() - new Date(dateB).getTime()
        }
        case "name_asc": {
          const { title: titleA } = getMeta(a.meta_data_page)
          const { title: titleB } = getMeta(b.meta_data_page)
          return titleA.localeCompare(titleB)
        }
        case "name_desc": {
          const { title: titleA } = getMeta(a.meta_data_page)
          const { title: titleB } = getMeta(b.meta_data_page)
          return titleB.localeCompare(titleA)
        }
        default:
          return 0
      }
    })

    return sorted
  }, [posts, currentTag, currentSort])

  return {
    currentTag,
    setCurrentTag,
    currentSort,
    setCurrentSort,
    filteredAndSortedPosts,
  }
}
