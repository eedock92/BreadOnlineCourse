import React from 'react'
import { useRouter } from 'next/router'

const CourseDetailPage = () => {
  const router = useRouter();
  console.log(router.query.newsId)
  return (
    <div>-important</div>
  )
}

export default CourseDetailPage