import { useEffect } from "react"

export function useInertBody(isActive: boolean) {
  useEffect(() => {
    const body = document.body

    if (isActive) {
      body.setAttribute("inert", "")
    } else {
      body.removeAttribute("inert")
    }

    return () => {
      body.removeAttribute("inert")
    }
  }, [isActive])
}
