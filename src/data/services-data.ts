import Waypoints from '@/assets/svg/branch-services.svg?react'
import CodeXml from '@/assets/svg/code-xml-services.svg?react'
import Diamond from '@/assets/svg/diamond-services.svg?react'
import SlidersHorizontal from '@/assets/svg/tree-slider-services.svg?react'

const servicesData = [
  {
    icon: SlidersHorizontal,
    title: 'Website Maintenance',
    description:
      'Keep your website running smoothly and securely with our comprehensive maintenance services. Prevent downtime...',
    link: 'service/web-main',
  },
  {
    icon: CodeXml,
    title: 'Website & App Development',
    description:
      'Transform your online presence with our custom website design solutions. From stunning visuals to seamless...',
    link: 'service/web-dev',
  },
  {
    icon: Waypoints,
    title: 'IT Support',
    description:
      'Experience peace of mind with our reliable IT support services. From troubleshooting to system maintenance..',
    link: 'service/it-support',
  },
  {
    icon: Diamond,
    title: '3rd Party AI Solution',
    description:
      'Leverage our expertise to find the best third-party services for your business. From hosting to plugins, we provid..',
    link: 'service/ai-integration',
  },
]

export default servicesData
