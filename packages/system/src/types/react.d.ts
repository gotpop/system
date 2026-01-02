import "react"

declare module "react" {
  interface ViewTransitionInstance {
    name: string
  }

  interface ViewTransitionProps {
    name?: string
    update?: "none" | "auto"
    default?: Record<string, string>
    enter?: Record<string, string>
    exit?: Record<string, string>
    share?: Record<string, string>
    onEnter?: (instance: ViewTransitionInstance, types: Array<string>) => void
    onExit?: (instance: ViewTransitionInstance, types: Array<string>) => void
    onShare?: (instance: ViewTransitionInstance, types: Array<string>) => void
    onUpdate?: (instance: ViewTransitionInstance, types: Array<string>) => void
    children: React.ReactNode
  }

  export function ViewTransition(props: ViewTransitionProps): JSX.Element
  export function addTransitionType(type: string): void
  export function startTransition(callback: () => void): void
}
