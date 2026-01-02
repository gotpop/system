"use client"

import { ViewTransition } from "react"

interface PageContentWrapperProps {
  children: React.ReactNode
}

export function PageContentWrapper({ children }: PageContentWrapperProps) {
  return (
    <ViewTransition update="none" name="page">
      {children}
    </ViewTransition>
  )
}
