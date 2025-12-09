"use client"

import type {
  ConfigStoryblok,
  FormBuilderStoryblok,
} from "../../../types/storyblok-components"
import { CustomElement } from "../../ui/CustomElement"
import "./FormBuilder.css"
import { useActionState } from "react"

interface FormState {
  errors: Record<string, string[]>
  message: string
  success: boolean
}

interface FormBuilderProps {
  blok: FormBuilderStoryblok
  content: React.ReactNode
  config: ConfigStoryblok | null
  onSubmit?: (formData: FormData) => Promise<FormState>
}

export function FormBuilder({ content, onSubmit }: FormBuilderProps) {
  const initialState = { errors: {}, message: "", success: false }

  const handleSubmit = async (_: FormState | null, formData: FormData) => {
    if (!onSubmit) return initialState

    return await onSubmit(formData)
  }

  const [state, formAction] = useActionState(handleSubmit, initialState)

  return (
    <CustomElement className="form-builder" tag="box-grid">
      <form className="form" action={formAction}>
        {state.message && (
          <section
            className={`form-message ${state.success ? "form-message--success" : "form-message--error"}`}
            role={state.success ? "status" : "alert"}
            aria-live="polite"
          >
            {state.message}
          </section>
        )}
        {content}
      </form>
    </CustomElement>
  )
}
