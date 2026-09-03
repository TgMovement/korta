/** Палитра и шрифт — из дизайн-системы Korta в Figma.
 *  Файл Mobile, страница ✅ UI KIT → секция «Light colors» (node 410:3071).
 *  Значения сняты через Figma MCP (get_variable_defs), не подобраны на глаз.
 *
 *  Ключевая подмена: шкала `green` = Figma `colors/base/success-*`, но 600-й шаг
 *  заменён на «Main Green» #0BB951. На сайте `green-600` — самый частый класс
 *  (389 использований), поэтому весь акцентный зелёный автоматически становится
 *  бренд-зелёным приложения, без правки разметки.
 */
module.exports = {
  content: ["./*.html", "./city/*.html", "./terms/*.html", "./privacy/*.html"],
  theme: {
    extend: {
      colors: {
        // Figma: colors/base/success-* + Main Green на 600
        green: {
          50: "#EDFFF4",  // leagueStatusOpenBackground — фон бейджа «Открыта регистрация»
          100: "#d1f4e0",
          200: "#a2e9c1",
          300: "#74dfa2",
          400: "#45d483",
          500: "#17c964",
          600: "#0BB951", // Main Green — бренд
          700: "#0e793c",
          800: "#095028",
          900: "#052814",
        },
        // Figma: colors/base/default-*
        gray: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
        },
        // Figma: colors/base/warning-*
        yellow: {
          50: "#fefce8",
          100: "#fdedd3",
          200: "#fbdba7",
          300: "#f9c97c",
          400: "#f7b750",
          500: "#f5a524",
          600: "#c4841d",
          700: "#936316",
          800: "#62420e",
          900: "#312107",
        },
        // Семантические имена — для новой разметки
        brand: {
          DEFAULT: "#0BB951",
          ink: "#0e793c", // success-700: зелёный текст мелкого кегля (у #0BB951 контраст 2.7:1)
          soft: "#EDFFF4",
          line: "#A4E7BE", // selectGreenBorder
          tint: "#F3FBF6", // selectGreenBackground
        },
        ink: "#18181b",     // default-900 — заголовки
        "ink-card": "#27272a", // zinc-800 — текст на карточках
        muted: "#71717a",   // zinc-500 — вторичный
        line: "#e4e4e7",    // zinc-200 — бордеры и разделители
        // Бейджи уровней из приложения
        level: {
          start: "#CBFFC2",
          mid: "#BFEAFF",
          adv: "#E8D9FF",
        },
        // Кислотно-жёлтый акцент приложения: бейдж рейтинга «2,84» и mainYellow.
        // Текст на нём всегда тёмный (onLevelBadge #18181b).
        acid: {
          DEFAULT: "#DBFF76", // levelYellow
          deep: "#C4FF65",    // mainYellow
        },
        // Фиолетовый статуса «Идёт лига» — base.secondary + purple/50
        league: {
          DEFAULT: "#7828c8",
          soft: "#F2EAFA",
        },
        // Голубой инфо-баннера приложения
        info: "#DEF6FF",
      },
      fontFamily: {
        sans: ['"Inter var"', "Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      borderRadius: {
        card: "14px", // радиус карточки в приложении
      },
      maxWidth: {
        content: "1120px",
      },
    },
  },
  plugins: [],
};
