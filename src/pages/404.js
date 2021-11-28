import React from 'react'

import ErrorLayout from 'layouts/error'

import image from 'assets/error-404.svg'

export default function NotFoundPage() {
  return <ErrorLayout error="404" image={image} />
}
