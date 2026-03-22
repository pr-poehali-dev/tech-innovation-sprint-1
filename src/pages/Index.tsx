export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">РАДОСТЬ*КАКИША</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Атмосфера</a>
          <a href="#">Адрес</a>
        </nav>
        <button className="btn-cta">Забронировать</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ПРОСТО,
              <br />
              ВКУСНО И <span>ДЁШЕВО</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Настоящая домашняя кухня в центре Саратова. Фирменное коричневое пюре, которое невозможно забыть — попробуй один раз и приходи снова.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Заказать
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть меню
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              ВКУСНО
              <br />
              И ДЁШЕВО
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #САРАТОВ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ТОП ПЮРЕ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ФИРМЕННОЕ КОРИЧНЕВОЕ ПЮРе * ЦЕНТР САРАТОВА * ДОСТУПНЫЕ ЦЕНЫ * УЮТНАЯ АТМОСФЕРА * ЛУЧШЕЕ ПЮРЕ В ГОРОДЕ *
            ФИРМЕННОЕ КОРИЧНЕВОЕ ПЮРЕ * ЦЕНТР САРАТОВА * ДОСТУПНЫЕ ЦЕНЫ * УЮТНАЯ АТМОСФЕРА * ЛУЧШЕЕ ПЮРЕ В ГОРОДЕ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">НАШЕ МЕНЮ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Фирменное блюдо</span>
              <img
                src="https://cdn.poehali.dev/projects/4d662487-329b-4192-b783-f15304956c81/files/8bf443bd-dcce-4dcc-ab7e-8ed501230731.jpg"
                alt="Коричневое пюре"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Коричневое пюре</h3>
                  <span className="price">199 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Наш фирменный рецепт — нежное пюре с золотистой корочкой и секретным соусом. Хит, которого не найдёшь нигде.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Горячее
              </span>
              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Суп дня"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Суп дня</h3>
                  <span className="price">149 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Наваристый суп по домашнему рецепту. Меняется каждый день — всегда свежий и сытный.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Компот"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Домашний компот</h3>
                  <span className="price">79 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Свежесваренный компот из сезонных ягод. Освежает и согревает — в зависимости от сезона.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ДУШЕВНО И ПО-ДОМАШНЕМУ.</h2>
            <p className="vibe-text">
              Мы не просто кормим — мы дарим радость. В самом центре Саратова, где каждый гость чувствует себя как дома. Простая еда, честные цены и тёплая атмосфера. Приходи один или с компанией — всегда рады.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша история
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @RADOST_KAKISHA
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">РАДОСТЬ*КАКИША</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Уютный ресторан в центре Саратова с доступными ценами и фирменным коричневым пюре. Просто, вкусно, по-домашнему.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Пт: 10:00 – 22:00</li>
            <li>Сб–Вс: 11:00 – 23:00</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Адрес</h4>
          <ul>
            <li>г. Саратов, центр города</li>
            <li>📞 Телефон: уточните у нас</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
