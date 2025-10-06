import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export default function Logo({ className, size = "md" }: LogoProps) {
  const sizes = {
    sm: { width: 160, height: 40 },
    md: { width: 240, height: 60 },
    lg: { width: 320, height: 80 },
  }

  const textSizes = {
    sm: "text-xl",
    md: "text-2xl", 
    lg: "text-3xl",
  }

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="relative">
        <Image
          src="/logo.png"
          alt="zibly.ai Logo"
          width={sizes[size].width}
          height={sizes[size].height}
          className="object-contain object-left"
          priority
        />
      </div>
    </Link>
  )
}
