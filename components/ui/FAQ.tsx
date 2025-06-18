
import * as React from "react"
import * as Collapsible from "@radix-ui/react-collapsible"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <Collapsible.Root key={index} className="group">
          <Collapsible.Trigger className="w-full text-left flex justify-between items-center rounded-md bg-muted px-4 py-3 text-sm font-medium hover:bg-muted/80 transition-colors">
            {item.question}
            <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </Collapsible.Trigger>
          <Collapsible.Content className="px-4 py-3 text-sm text-muted-foreground bg-background border-l-2 border-primary">
            {item.answer}
          </Collapsible.Content>
        </Collapsible.Root>
      ))}
    </div>
  )
}

export default FAQ