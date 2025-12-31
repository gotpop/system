import type { ReactNode } from "react"

type ValidTag =
  | "section"
  | "logo-main"
  | "snippet-block"
  | "baseline-status"
  | "box-grid"
  | "code-block"
  | "link-list"
  | "grid-master"
  | "main-content"
  | "button-toggle"
  | "icon-hamburger"
  | "box-crosshatch"
  | "page-layout"
  | "select-option"
  | "nav-item"
  | "form-input-text"
  | "form-input-textarea"
  | "popover-nav"

interface CustomElementProps {
  children?: ReactNode
  tag: ValidTag
  className?: string | undefined
  style?: React.CSSProperties | undefined
  popover?: string | undefined
  id?: string | undefined
  dataViewTransition?: string | undefined
}

export function CustomElement({
  children,
  tag,
  className = undefined,
  style = undefined,
  popover = undefined,
  id = undefined,
  dataViewTransition = undefined,
}: CustomElementProps) {
  const Tag = tag as ValidTag

  return (
    // @ts-expect-error - Custom elements not recognized by TypeScript
    <Tag
      className={className}
      id={id}
      style={style}
      popover={popover}
      data-view-transition={dataViewTransition}
    >
      {children}
    </Tag>
  )
}
