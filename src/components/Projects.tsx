import { useState, useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Стенд Kilian & Boadicea The Victorious",
    category: "Выставочный стенд",
    location: "Москва",
    year: "2021",
    image: "https://cdn.poehali.dev/projects/29d00986-0283-4ead-8786-5b19e074933c/bucket/96198c4b-b5da-46b7-aa44-8a32ae2be0e3.jpg",
  },
  {
    id: 2,
    title: "Стенд Thalgo",
    category: "Торговое оборудование",
    location: "Москва",
    year: "2022",
    image: "https://cdn.poehali.dev/projects/29d00986-0283-4ead-8786-5b19e074933c/bucket/9e72b172-ef87-420e-9e13-2f6c8ca3d89d.jpg",
  },
  {
    id: 3,
    title: "Стенд Byredo",
    category: "Выставочный стенд",
    location: "Москва",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/29d00986-0283-4ead-8786-5b19e074933c/bucket/2bab2e8d-6811-4083-8607-83add634547a.jpg",
  },
  {
    id: 4,
    title: "Стенд Pernoire",
    category: "Торговое оборудование",
    location: "Москва",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/29d00986-0283-4ead-8786-5b19e074933c/bucket/497831b8-0963-41d6-aeb7-12080fd19e9a.jpg",
  },
  {
    id: 6,
    title: "Стенд Boadicea The Victorious — Tiger",
    category: "Выставочный стенд",
    location: "Москва",
    year: "2022",
    image: "https://cdn.poehali.dev/projects/29d00986-0283-4ead-8786-5b19e074933c/bucket/7d39b6e3-697f-4374-859d-f4282419aa33.jpg",
  },
  {
    id: 7,
    title: "Стенд Byredo — ГУМ",
    category: "Выставочный стенд",
    location: "Москва, ГУМ",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/29d00986-0283-4ead-8786-5b19e074933c/bucket/d130486e-10e3-4409-a265-02f8365954aa.jpg",
  },
  {
    id: 8,
    title: "Стенд Versace & Brunello Cucinelli",
    category: "Выставочный стенд",
    location: "Москва",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/29d00986-0283-4ead-8786-5b19e074933c/bucket/7f905a1c-a53b-414a-97e4-e0f42c4845d7.jpg",
  },
  {
    id: 9,
    title: "Стенд Cellcosmet Switzerland",
    category: "Торговое оборудование",
    location: "Москва",
    year: "2023",
    image: "https://cdn.poehali.dev/projects/29d00986-0283-4ead-8786-5b19e074933c/bucket/cff2cf5b-41be-488b-a166-6de1f46051e3.jpg",
  },
  {
    id: 5,
    title: "Стенд Atkinsons London 1799",
    category: "Торговое оборудование",
    location: "Москва",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/29d00986-0283-4ead-8786-5b19e074933c/bucket/44c295a8-d231-4218-b2a8-b82873f2d78a.jpg",
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setRevealedImages((prev) => new Set(prev).add(projects[index].id))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Избранные работы</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Наши проекты</h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Смотреть все проекты
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div ref={(el) => (imageRefs.current[index] = el)} className="relative overflow-hidden aspect-[4/3] mb-6">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === project.id ? "scale-105" : "scale-100"
                  }`}
                />
                <div
                  className="absolute inset-0 bg-primary origin-top"
                  style={{
                    transform: revealedImages.has(project.id) ? "scaleY(0)" : "scaleY(1)",
                    transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
                  }}
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {project.category} · {project.location}
                  </p>
                </div>
                <span className="text-muted-foreground/60 text-sm">{project.year}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}