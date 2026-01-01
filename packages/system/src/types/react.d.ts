import "react"

declare module "react" {
  interface ViewTransitionProps {
    name?: string
    update?: "none" | "auto"
    children: React.ReactNode
  }

  export function ViewTransition(props: ViewTransitionProps): JSX.Element
  export function addTransitionType(type: string): void
  export function startTransition(callback: () => void): void
}
