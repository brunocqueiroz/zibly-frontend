"use client"

interface GridPatternProps {
  className?: string
}

export default function GridPattern({ className = "" }: GridPatternProps) {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px"
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at 50% 50%, transparent 0%, hsl(var(--background)) 100%)`
        }}
      />
    </div>
  )
}
