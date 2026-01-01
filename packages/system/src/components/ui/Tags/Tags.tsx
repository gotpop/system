import "./Tags.css"

export interface TagsProps {
  tags: string[]
  className?: string
  viewTransitionName?: string
}

export function Tags({ tags, className = "" }: TagsProps) {
  const getTagLengthClass = (tag: string) => {
    const length = tag.length
    if (length <= 4) return "tag-xs"
    if (length <= 6) return "tag-sm"
    if (length <= 9) return "tag-md"

    return "tag-lg"
  }

  const tagList = tags.map((tag) => (
    <span key={tag} className={`tag ${getTagLengthClass(tag)}`}>
      {tag}
    </span>
  ))

  return <div className={`tags ${className}`}>{tagList}</div>
}
