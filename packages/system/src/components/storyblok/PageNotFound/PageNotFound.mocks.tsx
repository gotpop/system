import type { NotFoundStoryblok } from "../../../types/storyblok-components"
import { Typography } from "../Typography/Typography"

export const notFoundContentBlocks = (
  <Typography tag="p" variant="text-base" shade="charcoal">
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
  </Typography>
)

export const mockNotFoundBlok: NotFoundStoryblok = {
  _uid: "not-found-1",
  component: "not_found",
  title: "404 - Lorem Ipsum",
}

export const mockAvailableStories = [
  "Lorem",
  "Ipsum",
  "Dolor",
  "Sit",
  "Amet",
  "Consectetur",
]
