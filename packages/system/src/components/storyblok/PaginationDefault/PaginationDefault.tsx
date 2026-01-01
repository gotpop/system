import Link from "next/link"
import type {
  ConfigStoryblok,
  PageDefaultStoryblok,
  PaginationDefaultStoryblok,
} from "../../../types/storyblok-components"
import { CustomElement } from "../../ui/CustomElement"
import { Icon } from "../../ui/Icon"
import "./PaginationDefault.css"

interface PaginationData {
  previous: {
    slug: string
    title: string
  }
  next: {
    slug: string
    title: string
  }
}

interface PaginationLinkProps {
  slug: string
  title: string
  direction: "previous" | "next"
}

function PaginationLink({ slug, title, direction }: PaginationLinkProps) {
  const isPrevious = direction === "previous"

  return (
    <Link href={slug} className={`link-pagination pagination-${direction}`}>
      {isPrevious && <Icon className="arrow" name="FaChevronLeft" />}
      <span>{title}</span>
      {!isPrevious && <Icon className="arrow" name="FaChevronRight" />}
    </Link>
  )
}

export interface PaginationDefaultProps {
  blok: PaginationDefaultStoryblok
  metaDataPage?: PageDefaultStoryblok["meta_data_page"]
  config?: ConfigStoryblok | null
  pagination: PaginationData
}

export function PaginationDefault({
  pagination: { previous, next },
}: PaginationDefaultProps) {
  return (
    <CustomElement tag="box-grid" className="pagination">
      {previous.slug && (
        <PaginationLink
          slug={previous.slug}
          title={previous.title}
          direction="previous"
        />
      )}

      {next.slug && (
        <PaginationLink slug={next.slug} title={next.title} direction="next" />
      )}
    </CustomElement>
  )
}
