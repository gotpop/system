import "server-only"

import type { ConfigStoryblok } from "@gotpop/system"
import { StoryblokServerComponent } from "@storyblok/react/rsc"
import type { ReactNode } from "react"
import { getConfig } from "../config/runtime-config"

interface FormBuilderBlok {
  // biome-ignore lint/suspicious/noExplicitAny: Replace with proper type once forms are full integrated
  inputs?: any[]
  [key: string]: unknown
}

interface FormState {
  errors: Record<string, string[]>
  message: string
  success: boolean
}

interface WithFormBuilderDataProps {
  // biome-ignore lint/suspicious/noExplicitAny: Replace with proper type once forms are full integrated
  blok: any
  content: ReactNode
  config: ConfigStoryblok | null
  onSubmit?: (formData: FormData) => Promise<FormState>
}

/** Higher-Order Component that renders form input components for the FormBuilder */
export function withFormBuilderData(
  ViewComponent: React.ComponentType<WithFormBuilderDataProps>,
  submitAction?: (formData: FormData) => Promise<FormState>
) {
  return async ({
    blok,
    config: providedConfig,
  }: {
    blok: FormBuilderBlok
    config?: ConfigStoryblok | null
  }) => {
    // Use provided config or fetch from cache
    const config = providedConfig ?? (await getConfig())
    const { inputs } = blok

    const content = inputs?.map((inputBlok) => (
      <StoryblokServerComponent
        blok={inputBlok}
        key={inputBlok._uid}
        config={config}
      />
    ))

    return (
      <ViewComponent
        blok={blok}
        content={content}
        config={config}
        onSubmit={submitAction}
      />
    )
  }
}
