export function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 md:mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-6">
              <img src="https://cdn.poehali.dev/projects/29d00986-0283-4ead-8786-5b19e074933c/bucket/1847443d-f140-47f1-9bce-4f923da1645c.png" alt="Corner Makers" className="w-auto h-7" />
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Эксклюзивная мебель и выставочные стенды под заказ. Собственное производство — от эскиза до монтажа.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium mb-4">Студия</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#projects" className="hover:text-foreground transition-colors">
                  Проекты
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4">Связь</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:printms@mail.ru" className="hover:text-foreground transition-colors">
                  printms@mail.ru
                </a>
              </li>
              <li>
                <a href="tel:+79039684904" className="hover:text-foreground transition-colors">
                  +7 (903) 968-49-04
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Телеграм
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  ВКонтакте
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 Студия. Все права защищены.</p>
          <div className="flex gap-3 sm:gap-6 flex-wrap">
            <a href="#" className="hover:text-foreground transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}