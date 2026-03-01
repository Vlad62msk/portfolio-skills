import { useState } from "react";

const competencies = [
  {
    title: "Проектирование образовательных продуктов",
    description:
      "Полный цикл — от исследования аудитории до запуска и итерации. Карты компетенций, Learning Journey Map, сервисные карты. Разработка с нуля и пересборка существующих продуктов. Модель Triple Diamond как основа процесса. Умею работать и с техническими дисциплинами (Java-разработка, продакт-менеджмент), и с творческими (3D, интерьерный дизайн, моушн) — и понимаю, почему для них нужны разные подходы.",
    tags: ["Learning Design", "LJM", "Карты компетенций", "Triple Diamond", "UX исследования"],
    accent: "#FF6B00",
  },
  {
    title: "Образовательная аналитика",
    description:
      "Data-driven оптимизация программ. Не просто «смотрю дашборд» — использую данные для принятия решений: какой модуль пересобрать, где мотивация падает, что оптимизировать в первую очередь. Кластерный анализ аудиторий, survival analysis для фазирования продуктов, A/B-тесты образовательных гипотез.",
    tags: ["CSI", "NPS", "COR", "AARRR", "Кластерный анализ", "Tableau"],
    accent: "#FF8C00",
  },
  {
    title: "AI-интеграция в образовательное производство",
    description:
      "Разрабатываю методологии промпт-стратегий и системные промпты для коммерческих продуктов. Упаковываю процессы разработки контента с AI — от декомпозиции учебных целей до вычитки. Принцип: AI усиливает экспертизу, а не заменяет её. Результат — ×5 к скорости производства без потери педагогического качества.",
    tags: ["Промпт-инжиниринг", "Claude", "ChatGPT", "RAG", "Контент-автоматизация"],
    accent: "#FF5500",
  },
  {
    title: "Построение команд и управление производством",
    description:
      "Поиск, онбординг и координация авторов-экспертов — до 50+ человек на проекте. Управление методическими командами до 10 человек. Параллельное производство контента с несколькими авторами без потери системности. Создаю общие артефакты (глоссарии, карты прогрессии, шаблоны), которые делают расхождения видимыми до того, как они становятся проблемой.",
    tags: ["Онбординг авторов", "OKR/KPI", "Процессы качества", "Менторинг", "ДПО/ФГОС"],
    accent: "#FF7A00",
  },
  {
    title: "Мотивационный дизайн и геймификация",
    description:
      "Проектирование мотивационных механик, встроенных в образовательный продукт — не «баллы и бейджи», а система, основанная на исследованиях. Полевой опыт: 24 интервью в отделениях Сбера, модель измерения эффективности геймификации. Академическая база: Вербах, ARCS-V, Self-Determination Theory.",
    tags: ["Геймификация", "ARCS-V", "Мотивация", "Полевые исследования", "SDT"],
    accent: "#FF4400",
  },
  {
    title: "Преподавание и публичные выступления",
    description:
      "От индивидуальных менторских сессий до аудиторий 100+ человек. Курс «Образовательное решение как продукт» в НИУ ВШЭ — оценка 4,72/5, дважды лучший по студенческим критериям. Воркшопы в «Гараже», вебинары, семинары для технических команд. Автор статей на vc.ru, в EduTech (Сбер Университет), на площадках Лаборатории геймификации.",
    tags: ["НИУ ВШЭ", "Воркшопы", "Вебинары", "Публикации", "4.72/5"],
    accent: "#FF9500",
  },
];

const allTags = [...new Set(competencies.flatMap((c) => c.tags))];

export default function App() {
  const [activeTag, setActiveTag] = useState(null);

  const filtered = activeTag
    ? competencies.filter((c) => c.tags.includes(activeTag))
    : competencies;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(ellipse at 20% 0%, #1a0a00 0%, #0a0a0a 50%, #000000 100%)",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* Ambient glow blobs */}
      <div
        style={{
          position: "fixed",
          top: "-20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,107,0,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "-30%",
          left: "-10%",
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,107,0,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, padding: "40px 24px", maxWidth: "1100px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "36px",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: "6px",
            letterSpacing: "-0.5px",
          }}
        >
          Что я умею
        </h1>
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "14px", marginBottom: "32px" }}>
          Нажмите на тег, чтобы отфильтровать карточки
        </p>

        {/* Tag cloud */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "40px" }}>
          {activeTag && (
            <button
              onClick={() => setActiveTag(null)}
              style={{
                padding: "6px 14px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                background: "#FF6B00",
                color: "#000",
                transition: "all 0.2s",
              }}
            >
              Сбросить ✕
            </button>
          )}
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              style={{
                padding: "6px 14px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: 500,
                border: "1px solid",
                cursor: "pointer",
                transition: "all 0.25s",
                ...(activeTag === tag
                  ? {
                      background: "#FF6B00",
                      color: "#000",
                      borderColor: "#FF6B00",
                    }
                  : {
                      background: "rgba(255,255,255,0.04)",
                      color: "rgba(255,255,255,0.5)",
                      borderColor: "rgba(255,255,255,0.1)",
                    }),
              }}
              onMouseEnter={(e) => {
                if (activeTag !== tag) {
                  e.target.style.borderColor = "rgba(255,107,0,0.4)";
                  e.target.style.color = "rgba(255,255,255,0.8)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeTag !== tag) {
                  e.target.style.borderColor = "rgba(255,255,255,0.1)";
                  e.target.style.color = "rgba(255,255,255,0.5)";
                }
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 480px), 1fr))",
            gap: "20px",
          }}
        >
          {filtered.map((comp) => (
            <div
              key={comp.title}
              style={{
                position: "relative",
                borderRadius: "16px",
                padding: "28px",
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.06)",
                transition: "all 0.3s ease",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                e.currentTarget.style.borderColor = `${comp.accent}33`;
                e.currentTarget.style.boxShadow = `0 8px 40px ${comp.accent}11, inset 0 1px 0 rgba(255,255,255,0.05)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Accent line at top */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "28px",
                  right: "28px",
                  height: "1px",
                  background: `linear-gradient(90deg, transparent 0%, ${comp.accent}55 50%, transparent 100%)`,
                }}
              />

              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: comp.accent,
                    boxShadow: `0 0 12px ${comp.accent}88`,
                    flexShrink: 0,
                  }}
                />
                <h2
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#ffffff",
                    lineHeight: 1.3,
                    margin: 0,
                  }}
                >
                  {comp.title}
                </h2>
              </div>

              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.45)",
                  marginBottom: "18px",
                  paddingLeft: "20px",
                }}
              >
                {comp.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", paddingLeft: "20px" }}>
                {comp.tags.map((tag) => (
                  <span
                    key={tag}
                    onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                    style={{
                      padding: "4px 10px",
                      borderRadius: "8px",
                      fontSize: "11px",
                      fontWeight: 500,
                      cursor: "pointer",
                      transition: "all 0.2s",
                      ...(activeTag === tag
                        ? {
                            background: comp.accent,
                            color: "#000",
                          }
                        : {
                            background: `${comp.accent}15`,
                            color: `${comp.accent}cc`,
                            border: `1px solid ${comp.accent}22`,
                          }),
                    }}
                    onMouseEnter={(e) => {
                      if (activeTag !== tag) {
                        e.target.style.background = `${comp.accent}25`;
                        e.target.style.borderColor = `${comp.accent}44`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeTag !== tag) {
                        e.target.style.background = `${comp.accent}15`;
                        e.target.style.borderColor = `${comp.accent}22`;
                      }
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "48px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>
            Карточки компетенций · Портфолио Владимира Круглова
          </p>
        </div>
      </div>
    </div>
  );
}
