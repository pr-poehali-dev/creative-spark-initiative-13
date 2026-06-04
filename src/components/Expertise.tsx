import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"
import Icon from "@/components/ui/icon"

const expertiseAreas = [
  {
    title: "Эксклюзивная мебель",
    description: "Корпусная и мягкая мебель по индивидуальным проектам: гостиные, кухни, спальни, офисные переговорные. Собственное производство от эскиза до монтажа.",
    icon: "Sofa",
  },
  {
    title: "Выставочные стенды",
    description:
      "Проектируем и изготавливаем выставочные стенды любой сложности — от модульных до уникальных островных конструкций для международных выставок.",
    icon: "LayoutDashboard",
  },
  {
    title: "Рекламные конструкции",
    description:
      "Стойки, витрины, POS-материалы, лайтбоксы и брендированные стеллажи для торговых точек, шоурумов и офисов.",
    icon: "Layers",
  },
  {
    title: "Полный цикл производства",
    description:
      "От замера и дизайн-проекта до изготовления, доставки и монтажа. Работаем под ключ, берём на себя все этапы.",
    icon: "Hammer",
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наши услуги</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-medium leading-[1.15] tracking-tight mb-6 text-balance">
            <HighlightedText>Производство</HighlightedText>, которое
            <br />
            говорит само за себя
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Собственный цех, опытные мастера и современное оборудование — всё, чтобы ваш проект был реализован точно и в срок.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10 md:gap-x-12 md:gap-y-16">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={area.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`relative pl-8 border-l border-border transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`transition-all duration-1000 ${
                    visibleItems.includes(index) ? "animate-draw-stroke" : ""
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <Icon name={area.icon} size={40} className="mb-4 text-foreground" strokeWidth={1.25} />
                </div>
                <h3 className="text-xl font-medium mb-4">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}