import { useId } from "react"
import { formatDate } from "../../../utils/date-formatter"
import { CustomElement } from "../../ui/CustomElement"
import { Typography } from "../Typography"

interface PostHeaderProps {
  heading?: string
  publishedDate?: string
  style?: React.CSSProperties
}

export function PostHeader({
  heading,
  publishedDate,
  style,
}: PostHeaderProps): React.JSX.Element | null {
  const id = useId()

  if (!publishedDate || !heading) return null

  const formattedDate = formatDate(publishedDate)

  return (
    <CustomElement tag="box-grid" aria-labelledby={id} style={style}>
      <Typography tag="h1" variant="text-xl" shade="dark" id={id}>
        {heading}
      </Typography>
      <Typography
        tag="time"
        variant="text-sm"
        shade="charcoal"
        dateTime={publishedDate}
      >
        {formattedDate}
      </Typography>
    </CustomElement>
  )
}
