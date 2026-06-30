# PopX — React App (Adobe XD Conversion)

React implementation of the PopX onboarding/account flow from the Adobe XD design.

## Screens
1. **Welcome** (`/`) — Welcome to PopX, Create Account / Login buttons
2. **Create Account** (`/create-account`) — Registration form with Agency radio toggle
3. **Login** (`/login`) — Sign in form
4. **Account Settings** (`/account`) — Profile card with avatar, name, email, bio

## Tech Stack
- React 18 (Vite)
- React Router DOM v7
- Plain CSS — all shared design tokens (colors, fonts, buttons, inputs) live in a single `index.css`, imported once globally. No per-component CSS variable files to keep in sync.

## Project Structure
```
src/
  pages/
    Welcome.jsx / .css
    CreateAccount.jsx / .css
    Login.jsx / .css
    AccountSettings.jsx / .css
  components/
    FormInput.jsx      # reusable labeled input
  App.jsx               # router + centered mobile-app shell
  main.jsx                # entry point, imports index.css once
  index.css                 # global reset, CSS variables, shared classes
```

## Local Development
```bash
npm install
npm run dev
```
Then open the printed `http://localhost:5173` link.

## Build
```bash
npm run build
```

## Live Demo
https://popx-react-app1.netlify.app/

## Design Reference
Adobe XD: https://xd.adobe.com/view/b68eea25-003d-4a5d-8fdd-d463eeb20b32-e3dd
