export interface CardsControlOption {
  value: string
  label: string
}

export const sortOptions: CardsControlOption[] = [
  { value: "published_desc", label: "Newest First" },
  { value: "published_asc", label: "Oldest First" },
  { value: "name_asc", label: "Title A-Z" },
  { value: "name_desc", label: "Title Z-A" },
]

export const tagOptions: CardsControlOption[] = [
  { value: "all", label: "All Posts" },
  { value: "nextjs", label: "Next.js" },
  { value: "react", label: "React" },
  { value: "css", label: "CSS" },
  { value: "typescript", label: "TypeScript" },
  { value: "javascript", label: "JavaScript" },
]

export const categoryOptions: CardsControlOption[] = [
  { value: "all", label: "All Categories" },
  { value: "tutorials", label: "Tutorials" },
  { value: "guides", label: "Guides" },
  { value: "news", label: "News" },
  { value: "reviews", label: "Reviews" },
]

export const statusOptions: CardsControlOption[] = [
  { value: "all", label: "All Status" },
  { value: "draft", label: "Draft" },
  { value: "published", label: "Published" },
  { value: "archived", label: "Archived" },
]

export const priorityOptions: CardsControlOption[] = [
  { value: "normal", label: "Normal Priority" },
  { value: "high", label: "High Priority" },
  { value: "urgent", label: "Urgent" },
  { value: "low", label: "Low Priority" },
]
