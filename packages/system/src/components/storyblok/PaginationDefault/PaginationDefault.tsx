import type {
  ConfigStoryblok,
  PageDefaultStoryblok,
  PaginationDefaultStoryblok,
} from "../../../types/storyblok-components"
import { getMeta } from "../../../utils/card-utils"
import { CustomElement } from "../../ui/CustomElement"
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
  viewTransitionName: string
}

function PaginationLink({
  slug,
  title,
  direction,
  viewTransitionName,
}: PaginationLinkProps) {
  const isPrevious = direction === "previous"

  return (
    <a
      style={{
        viewTransitionName: `${viewTransitionName}-${direction}`,
      }}
      href={slug}
      className={`link-pagination pagination-${direction}`}
    >
      {isPrevious && <span>←</span>}
      <span>{title}</span>
      {!isPrevious && <span>→</span>}
    </a>
  )
}

export interface PaginationDefaultProps {
  blok: PaginationDefaultStoryblok
  metaDataPage?: PageDefaultStoryblok["meta_data_page"]
  config?: ConfigStoryblok | null
  pagination: PaginationData
}

export function PaginationDefault({
  metaDataPage,
  pagination: { previous, next },
}: PaginationDefaultProps) {
  const { viewTransitionName } = getMeta(metaDataPage || [])

  return (
    <CustomElement
      tag="box-grid"
      className="pagination"
      style={{
        viewTransitionName: `${viewTransitionName}-pagination`,
      }}
    >
      {previous.slug && (
        <PaginationLink
          slug={previous.slug}
          title={previous.title}
          direction="previous"
          viewTransitionName={viewTransitionName}
        />
      )}

      {next.slug && (
        <PaginationLink
          slug={next.slug}
          title={next.title}
          direction="next"
          viewTransitionName={viewTransitionName}
        />
      )}
    </CustomElement>
  )
}
