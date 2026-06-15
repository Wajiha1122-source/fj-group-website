import { Navigate, useParams } from "react-router-dom"

import EditorialDetail from "../../components/content/EditorialDetail"
import { caseStudies } from "../../data/caseStudies"

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const study = caseStudies.find((item) => item.slug === slug)

  if (!study) return <Navigate to="/about/case-studies" replace />

  const related = caseStudies
    .filter((item) => item.slug !== slug)
    .slice(0, 2)
    .map((item) => ({
      title: item.title,
      desc: item.desc,
      label: item.category,
      to: `/cases/${item.slug}`
    }))

  return (
    <EditorialDetail
      content={study}
      backTo="/about/case-studies"
      backLabel="Back to case studies"
      typeLabel="Case study"
      variant="case"
      related={related}
    />
  )
}
