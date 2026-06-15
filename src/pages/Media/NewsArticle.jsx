import { Navigate, useParams } from "react-router-dom"

import EditorialDetail from "../../components/content/EditorialDetail"
import { newsData } from "../../data/newsData"

export default function NewsArticle() {
  const { slug } = useParams()
  const article = newsData.find((item) => item.slug === slug)

  if (!article) return <Navigate to="/media/news" replace />

  const related = newsData
    .filter((item) => item.slug !== slug)
    .slice(0, 2)
    .map((item) => ({
      title: item.title,
      desc: item.desc,
      image: item.image,
      label: item.category,
      to: `/media/news/${item.slug}`
    }))

  return (
    <EditorialDetail
      content={article}
      backTo="/media/news"
      backLabel="Back to latest news"
      typeLabel="FJ Group insight"
      variant="news"
      related={related}
    />
  )
}
