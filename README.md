# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

## Public Assets & Banner Slider

Anything placed in the `public/` folder is served statically from the root of your site. For example:

```
public/
 └─ images/
     ├─ banner_1.png
     ├─ banner_2.png
     ├─ banner_3.png
     ├─ banner_4.png
     ├─ income-tax.jpg
     ├─ gst.jpg
     ├─ accounting.jpg
     ├─ consultation.jpg
     ├─ about-1.jpg
     └─ about-2.jpg
```

You do **not** import these images in React. Refer to them directly paths like:

```css
background-image: url("/images/banner_1.png");
```

### Hero banner slider

The home route (`app/routes/home.tsx`) uses a simple auto‑rotating slider with a fade transition and clickable dots. The component maintains `current` index state and updates it every 4 seconds via `setInterval` in a `useEffect` hook.

The primary button in the hero now scrolls directly to the services section (ID `#services`), and global CSS includes `html { scroll-behavior: smooth; }` for a polished transition. You can adjust the button text (`View Our Expertise`, `Explore Our Services`, etc.) as needed.

Feel free to add or remove banner files – just update the `banners` array at the top of the file accordingly. Additional CSS hooks (like `animate-[zoom_6s_linear_infinite]` and custom `@keyframes zoom`) can be added to give a premium zoom effect.

### Premium styling details

- **Wrapper background**: the outer `<div>` is now plain white (`bg-white`) for a clean, modern canvas; text selections use `selection:bg-blue-100`.
- **Hero overlay**: stronger blue grad and scale animation (`scale-105` on active slide).
- **Responsive layout**: paddings use `px-6 md:px-10` (or `md:px-16` in hero), headings scale with `text-3xl md:text-5xl`, and service grid becomes `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` for mobile friendliness. Content is capped with `max-w-7xl mx-auto` throughout (hero, services, about) to avoid overly long lines.
- **Services & About sections** use a matching `bg-slate-50` with top/bottom borders for a unified “professional info” block. The About area includes a two‑image cross‑fade animation swapping every 5 seconds.
- **About details**: the three bullet points now read “Personalized Tax Strategies,” “Dedicated Audit Support,” and “Transparent Pricing” (no longer mentioning 15+ years) to suit a newer firm.
- **Click-to-call/email top bar**: contact info links are clickable (`tel:`/`mailto:`) and adjust padding for smaller screens.
- **Mobile navigation**: a hamburger button toggles a dropdown menu on phones, restoring the links that were hidden before.
- **Cards** have a glass‑like blur (`backdrop-blur-sm`), semi‑transparent white (`bg-white/80`), rounded‑2xl edges and lift on hover.
- **Enquiry button** is now a small, clean pill that sits bottom-right on mobile and mid-right on desktop. Mobile view shows only a � icon. It features a subtle animated ring (`animate-pulseRing`) defined in `tailwind.config.js`, with a fading glow that cycles every 2 seconds. No glass or heavy glow, just a professional highlight effect and hover scale.
- **Modal form** appears when the button is clicked, with inputs matching the theme; it fades in using `animate-fadeIn`. All input fields include `name` attributes required by EmailJS.
- **EmailJS integration**: handled via `handleSubmit` using `@emailjs/browser`. Replace the placeholder IDs/keys with your own. See below for setup instructions.

Global CSS now includes animations for fade in, float effect, and the new border glow, plus `scroll-behavior: smooth`. The outer `<div>` also sets `selection:bg-blue-100` so text selections pick up a light blue highlight. These details give the site a clean, professional CA firm aesthetic.

### Component Breakdown

To keep the page organized the code is now modular:

- `app/components/EnquiryModal.tsx` – handles the email form logic, loading state, and UI.
- `app/components/FloatingButton.tsx` – displays the glowing button with a delayed tooltip.
- `app/components/ServicesSection.tsx` – contains the service cards grid used on the home page.

The `app/routes/home.tsx` file simply composes these pieces and manages slider state, navigation, and layout.

The rest of the homepage relies on the same `public/images` assets for services and about sections.

### EmailJS Setup

1. Install the library:
   ```bash
   npm install @emailjs/browser
   ```
2. Sign up at https://www.emailjs.com/ and create a service (e.g. Gmail) and a template.
3. Copy your **Service ID**, **Template ID**, and **Public Key** from the EmailJS dashboard.
4. In `app/routes/home.tsx`, modify the `handleSubmit` function with those values:

   ```js
   emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.currentTarget, "YOUR_PUBLIC_KEY");
   ```

5. Customize the template fields as needed; they correspond to the form inputs (name, phone, email, message).

Once configured, submitting the modal form will send an email and close the dialog.

---

Built with ❤️ using React Router.
