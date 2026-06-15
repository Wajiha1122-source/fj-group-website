import { Navigate, useParams } from "react-router-dom"

import EditorialDetail from "../../components/content/EditorialDetail"
import { solutionData } from "../../data/solutionData"

export default function SolutionDetail() {
  const { slug } = useParams()
  const solution = solutionData.find((item) => item.slug === slug)

  if (!solution) return <Navigate to="/about/what-we-do" replace />

  const related = solutionData
    .filter((item) => item.slug !== slug)
    .slice(0, 2)
    .map((item) => ({
      title: item.title,
      desc: item.intro,
      label: item.category,
      to: `/about/what-we-do/${item.slug}`
    }))

  return (
    <EditorialDetail
      content={solution}
      backTo="/about/what-we-do"
      backLabel="Back to what we do"
      typeLabel="Capability overview"
      related={related}
    />
  )
}
