import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // 自定义 writing-mode 属性
      writingMode: {
        "vertical-rl": "vertical-rl",
        "vertical-lr": "vertical-lr",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function ({ addUtilities }: any) {
      addUtilities({
        ".writing-vertical-rl": {
          "writing-mode": "vertical-rl" as string,
        },
        ".writing-vertical-lr": {
          "writing-mode": "vertical-lr" as string,
        },
      });
    },
  ] as const,
} satisfies Config;
