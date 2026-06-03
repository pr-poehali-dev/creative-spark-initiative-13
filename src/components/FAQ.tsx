import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "В каких регионах вы работаете?",
    answer:
      "Производство находится в Москве. Работаем по всей России: осуществляем доставку и выезд монтажной бригады в любой регион. Крупные проекты реализуем также в СНГ.",
  },
  {
    question: "Сколько времени занимает изготовление мебели?",
    answer:
      "Сроки зависят от сложности и объёма заказа. Стандартный комплект мебели для одной комнаты — от 3 до 6 недель. Выставочный стенд — от 2 до 4 недель. Точные сроки оговариваем на этапе согласования проекта.",
  },
  {
    question: "Можно ли заказать мебель по своим размерам?",
    answer:
      "Да, это наш основной формат работы. Выезжаем на замер, разрабатываем дизайн-проект и изготавливаем изделия строго по вашим размерам и пожеланиям. Никаких стандартных модулей — только индивидуальное решение.",
  },
  {
    question: "Какие материалы вы используете?",
    answer:
      "Работаем с массивом дерева (дуб, ясень, орех), МДФ с шпоном, металлом, стеклом и натуральным камнем. Используем только проверенных поставщиков и сертифицированную фурнитуру европейских брендов.",
  },
  {
    question: "Вы занимаетесь монтажом и сборкой?",
    answer:
      "Да, мы работаем под ключ. В стоимость входит доставка, сборка и установка. Наши мастера аккуратно выполнят монтаж с соблюдением чистоты на объекте.",
  },
  {
    question: "Как начать сотрудничество?",
    answer:
      "Оставьте заявку или позвоните нам — мы проведём бесплатную консультацию, обсудим задачу и подготовим коммерческое предложение. При необходимости выедем на замер.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}