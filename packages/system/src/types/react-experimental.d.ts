// Type declarations for React 19 experimental ViewTransition
// https://react.dev/reference/react/ViewTransition

import "react"

declare module "react" {
  interface ViewTransitionProps {
    children: React.ReactNode
    update?: string
  }

  const ViewTransition: React.FunctionComponent<ViewTransitionProps>
}
