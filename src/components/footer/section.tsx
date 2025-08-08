import type { FooterSectionProps } from '@/types/footer.ts'

const FooterSection = ({ title, items, isContact = false }: FooterSectionProps) => {
  return (
    <div className="w-fit">
      <h6 className="font-family text-xl font-semibold">{title}</h6>
      <ul className="list-disc list-outside text-[#888] flex-shrink-0">
        {items.map((item, index) => (
          <li key={item.href || item.text || index} className="mt-2">
            {isContact ? (
              <div className="flex items-center gap-2">
                {item.icon && <item.icon className="inline text-[#888]" />}
                <span>{item.text}</span>
              </div>
            ) : (
              <a href={item.href}>
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterSection