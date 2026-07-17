# 📝 README File Generator

Generate a beautiful, ready-to-use **GitHub profile README** in under a minute. Fill in a simple form — your username, a short bio, your social links, and your tech stack — and the app produces polished Markdown you can copy straight into your GitHub profile repository.

### 🔗 Live Demo
**[https://readme-file-generator.vercel.app/](https://readme-file-generator.vercel.app/)**

> This is my **first Next.js project** — built to learn the App Router, forms, validation, and working with an AI API end to end.

---

## ✨ Features

- **AI-powered generation** — sends your details to the Grok API (x.ai) and gets back a polished, well-structured README in Markdown.
- **Guided form flow** — a single, validated form collects everything in one place:
  - GitHub username
  - A short "about you" section
  - **16 social platforms** (LinkedIn, X, Instagram, GitHub, Discord, YouTube, StackOverflow, Reddit, and more)
  - A **searchable tech-stack picker** with 300+ technologies
- **Shields.io badges** — social links and tech skills are turned into clean, colorful badges automatically.
- **GitHub stats cards** — the generated README includes GitHub stats, streak stats, and top-languages cards.
- **Profile views counter** — a live visitor counter badge is added to the profile.
- **Copy / Download / Start over** — on the result page you can copy the Markdown, download it as `README.md`, or create a new one.
- **Offline-safe fallback** — if the AI API is unavailable, the app builds the README locally so you still get a result.

---

## 🛠️ Tech Stack

| Category | Tools |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/) |
| **Forms** | [React Hook Form](https://react-hook-form.com/) |
| **Validation** | [Zod](https://zod.dev/) (via `@hookform/resolvers`) |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) + [Devicon](https://devicon.dev/) |
| **AI** | [Grok API (x.ai)](https://x.ai/) |
| **Badges & Cards** | [Shields.io](https://shields.io/), [github-readme-stats](https://github.com/anuraghazra/github-readme-stats), [streak-stats](https://github.com/DenverCoder1/github-readme-streak-stats), [komarev counter](https://github.com/antonkomarev/github-profile-views-counter) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## ⚙️ How It Works

```txt
User fills the form on /Create
        ↓
Clicks "Generate README"
        ↓
Form data is validated (Zod) and sent to /api/generate-readme
        ↓
The API builds a prompt (with Shields.io badges) and calls Grok
        ↓
Generated Markdown is saved to sessionStorage
        ↓
User is redirected to /File
        ↓
File page shows the Markdown with Copy / Download buttons
        ↓
User pastes it into their GitHub profile repo
```

The generated README follows a consistent structure: a greeting heading, an about paragraph, a **🌐 Socials** section, a **💻 Tech Stack** section, a **📊 GitHub Stats** section, and a **👀 Profile Views** counter.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ and npm

### Installation

```bash
# Clone the repo
git clone https://github.com/thakurshaurya/readme-file-generator.git
cd readme-file-generator

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
GROK_API_KEY=your_api_key_here
GROK_API_URL=https://api.x.ai/v1/chat/completions
GROK_MODEL=grok-3-mini
```

> If no API key is provided, the app automatically uses a built-in fallback generator, so it still works without one.

### Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```txt
app/
├── page.tsx                # Landing page
├── layout.tsx              # Root layout (header + footer)
├── components/             # Landing page sections + Header/Footer
├── Create/                 # /Create route — the form page
├── CreateComponents/       # Form wrapper + section components
├── Form/                   # Individual form inputs, schema, skill options
├── File/                   # /File route — the result page
├── FileComponents/         # Result page (copy / download / preview)
└── api/
    ├── apiMain.tsx         # Prompt builder + fallback README generator
    └── generate-readme/    # API route that calls Grok
```

---

## 📌 Notes

- The **GitHub stats cards** are served by free public instances (`github-readme-stats`, `streak-stats`). These are sometimes rate-limited and may show a temporary error — self-hosting those services with your own GitHub token gives reliable results.
- The app collects data client-side and only sends it to the API when you click **Generate README**. Nothing is stored on a server.

---

## 🙏 Acknowledgements

Built with the amazing open-source tools listed above — especially [Devicon](https://devicon.dev/) for the tech icons, [Shields.io](https://shields.io/) for badges, and [github-readme-stats](https://github.com/anuraghazra/github-readme-stats) for the profile stats cards.

---

_Made with 💚 by [Shaurya Thakur](https://github.com/thakurshaurya)_
