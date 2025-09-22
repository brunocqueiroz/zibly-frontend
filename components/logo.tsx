import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export default function Logo({ className, size = "md" }: LogoProps) {
  const sizes = {
    sm: { width: 40, height: 40 },
    md: { width: 56, height: 56 },
    lg: { width: 72, height: 72 },
  }

  const textSizes = {
    sm: "text-xl",
    md: "text-2xl", 
    lg: "text-3xl",
  }

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Zibly Logo"
        width={sizes[size].width}
        height={sizes[size].height}
        className="object-contain object-left"
        priority
      />
      <span className={`${textSizes[size]} font-bold -ml-1`}>Zibly</span>
    </Link>
  )
}
