import { areas } from '@/data/areas'
import { ServiceItem } from './service-item'

interface ServiceListProps {
  slug: string
}

export function ServicesList({ slug }: ServiceListProps) {
  const areaServices = areas.filter((area) => area.slug === slug)
  const { services } = areaServices[0]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full border border-gray-100 rounded-xl px-4 py-8 shadow-sm">
      {services.map((topic) => (
        <ServiceItem key={topic} content={topic} />
      ))}
    </div>
  )
}