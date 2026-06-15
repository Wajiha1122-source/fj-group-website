import EditorialDetail from "../../components/content/EditorialDetail"
import { leadershipProfile } from "../../data/leadershipData"
import { newsData } from "../../data/newsData"

export default function Leadership() {
  const related = newsData.slice(0, 2).map((item) => ({
    title: item.title,
    desc: item.desc,
    image: item.image,
    label: item.category,
    to: `/media/news/${item.slug}`
  }))

  return (
    <EditorialDetail
      content={leadershipProfile}
      backTo="/"
      backLabel="Back to home"
      typeLabel="FJ Group profile"
      variant="leadership"
      related={related}
    />
  )
}
