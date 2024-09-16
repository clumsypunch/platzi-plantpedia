// pages/docs.tsx
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const DocsPage = () => {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the 404 page
    router.replace('/404')
  }, [router])

  // This component will not render due to the redirect
  return null
}

export default DocsPage
