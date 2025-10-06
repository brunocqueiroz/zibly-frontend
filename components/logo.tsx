import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "default" | "white"
}

export default function Logo({ className, size = "md", variant = "default" }: LogoProps) {
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

  const logoSrc = variant === "white" ? "/logo_white.png" : "/logo.png"

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="relative">
        <Image
          src={logoSrc}
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
