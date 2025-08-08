import { Button } from '@/components/ui/button.tsx'

export const Cta = () => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=6581181595&text=Hi+Co2%2C+I+would+like+ask+about+your+services.&type=phone_number&app_absent=0"
      target="_self"
      rel="noopener noreferrer">
      <Button
        variant="default"
        className="w-full bg-primary text-bg-primary rounded-md font-medium text-base hover:scale-110 transition-all hover:shadow-md cursor-pointer">
        Get Started Today!
      </Button>
    </a>
  )
}
