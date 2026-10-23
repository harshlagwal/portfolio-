# Organization Logos — Brand Asset Source Manifest

This directory (`public/logos/`) contains verified, high-resolution, original brand assets for all academic institutions, employers, certification authorities, and credential partners featured in the portfolio of Harsh Lagwal.

All external image hosting dependencies (e.g. `i.postimg.cc`, `wikimedia.org`) have been removed from runtime code. Unaffiliated brand logos (YouTube, Spotify, Amazon) have been purged. Assets are stored locally in both `src/assets/logos/` and mirrored in `public/logos/` to guarantee zero broken links, lightning-fast loading, and consistent visual fidelity across light and dark themes.

---

## 1. Inventory & Verification Matrix

| # | Organization Name | Local Asset Path | Format | Official Source Page / URL | Verification Status | Usage Notes |
|---|---|---|---|---|---|---|
| 1 | **IIT Patna** (Indian Institute of Technology, Patna) | `public/logos/iit-patna.png`<br>`src/assets/logos/iit-patna.png` | PNG (Transparent) | [iitp.ac.in](https://www.iitp.ac.in/) | **Verified Authentic** | Official university seal. Used for MBA in Decision Science academic credential. |
| 2 | **Rayat Bahra University** (Mohali) | `public/logos/rayat-bahra-university.webp`<br>`public/logos/rayat-bahra-seal.webp` | WebP (Transparent) | [rbuchd.in](https://rbuchd.in/) & [rbuchd.in/organogram/](https://rbuchd.in/organogram/) | **Verified Authentic** | Fetched directly from live university CDN (`/navbar/RBU_LOGO_png@4x.webp` & `/rbu-logo-new.webp`). Used for B.Tech in CSE degree. |
| 3 | **Upto Skills** | `public/logos/upto-skills.webp`<br>`src/assets/logos/upto-skills.webp` | WebP (Transparent) | [uptoskills.com](https://uptoskills.com/) | **Verified Authentic** | Direct asset extracted from header (`/uslogo.webp`). Used for AI / ML Internship experience letter & certificate. |
| 4 | **eDC IIT Delhi** (Entrepreneurship Development Cell) | `public/logos/edc-iit-delhi.png`<br>`src/assets/logos/edc-iit-delhi.png` | PNG (Transparent) | [edciitd.com](https://www.edciitd.com/) | **Verified Authentic** | Official purple bird emblem and typography from live portal (`/assets/edc-logo-purple-BYxFM40A.png`). Distinguishes student body from general IIT Delhi mark. |
| 5 | **SpectoV** | `public/logos/spectov.svg`<br>`src/assets/logos/spectov.svg` | SVG (Vector) | [spectov.com](https://www.spectov.com/) | **Verified Authentic** | Official vector logo directly fetched from `spectov.com/logo.svg`. Used for Generative AI Engineer experience. |
| 6 | **Edunet Foundation** | `public/logos/edunet-foundation.svg`<br>`src/assets/logos/edunet-foundation.svg` | SVG (Vector) | [edunetfoundation.org](https://edunetfoundation.org/) | **Verified Authentic** | Official vector mark from `edunetfoundation.org/wp-content/uploads/2021/02/logo.svg`. Used for Microsoft Cloud AI & AI Azure Internship. |
| 7 | **ISRO** (Indian Space Research Organisation) | `public/logos/isro.png`<br>`public/logos/isro.svg`<br>`src/assets/logos/isro.png` | PNG / SVG (Transparent) | [isro.gov.in](https://www.isro.gov.in/) | **Verified Authentic** | Official bilingual ISRO emblem featuring the orange thrust arrow, blue solar panels, and bilingual 'इसरो isro' wordmarks. |
| 8 | **Google / Google Developers** | `public/logos/google-developers.svg`<br>`src/assets/logos/google-developers.svg` | SVG (Vector) | [developers.google.com](https://developers.google.com/) | **Verified Authentic** | Official 4-color Google mark (#4285F4, #34A853, #FBBC05, #EA4335). Used for Build with AI Bootcamp & Workshop Series. |
| 9 | **Microsoft / Azure** | `public/logos/microsoft-azure.svg`<br>`src/assets/logos/microsoft-azure.svg` | SVG (Vector) | [azure.microsoft.com](https://azure.microsoft.com/) | **Verified Authentic** | Official Azure cloud mark (#0078D4). Used for Azure AI Fundamentals accreditation. |
| 10 | **ChatGPT / OpenAI** | `public/logos/chatgpt.svg`<br>`public/logos/chatgpt.png`<br>`src/assets/logos/chatgpt.svg` | SVG / PNG (Transparent) | [openai.com](https://openai.com/) | **Verified Authentic** | Official ChatGPT interlocking knot icon. Configured with adaptive theme inversion for crisp black in light mode and pure white in dark mode. |
| 11 | **Anthropic** | `public/logos/anthropic.png`<br>`public/logos/anthropic.svg`<br>`src/assets/logos/anthropic.png` | PNG / SVG | [anthropic.com](https://www.anthropic.com/) | **Verified Authentic** | Official Anthropic 'A\' stylized mark on signature parchment (#F0EFEA) badge. Used for Model Context Protocol certificate. |
| 12 | **NVIDIA** | `public/logos/nvidia.svg`<br>`public/logos/nvidia.png`<br>`src/assets/logos/nvidia.svg` | SVG / PNG | [nvidia.com](https://www.nvidia.com/) | **Verified Authentic** | Official NVIDIA green square (#76B900) with white curved eye vector and transparent background PNG. Used for Deep Learning credentials. |
| 13 | **TATA** | `public/logos/tata.png`<br>`public/logos/tata.svg`<br>`src/assets/logos/tata.png` | PNG / SVG | [tata.com](https://www.tata.com/) | **Verified Authentic** | Official TATA oval emblem and wordmark in crisp white on dark/transparent ground. Used for Data Visualisation credential. |
| 14 | **Scaler** | `public/logos/scaler.svg`<br>`src/assets/logos/scaler.svg` | SVG (Vector) | [scaler.com](https://www.scaler.com/) | **Verified Authentic** | Official Scaler vector mark (`#E62C4E`). Co-issuer of Google For Startups certification. |
| 15 | **Hack2Skills** | `public/logos/hack2skills.svg`<br>`src/assets/logos/hack2skills.svg` | SVG (Vector) | [hack2skills.com](https://hack2skills.com/) | **Verified Authentic** | Official Hack2Skills developer mark. Co-organizer of Build with AI Bootcamp. |

---

## 2. Integration Rules

1. **Aspect Ratio Preservation**:
   All image elements utilize `object-contain`, strictly prohibiting `object-cover` or stretch distortions.

2. **Contrast & Theme Adaptability**:
   - Primary SVGs carry brand-approved HEX codes (e.g. OpenAI `#10A37F`, Anthropic `#D97757`, NVIDIA `#76B900`, Google 4-color) ensuring instant visual recognition on light (`#f0f2f5`) and dark (`#090a0d`, `#171920`) backgrounds.
   - Seals with detailed crests (IIT Patna, Rayat Bahra University, eDC IIT Delhi) retain transparent PNG/WebP alpha layers and gentle contrast enhancement for dark-mode legibility.

3. **Zero External Host Dependency**:
   All components (`Education.jsx`, `Experience.jsx`, `Certifications.jsx`, `ProofRibbon.jsx`, `PreviewApp.jsx`, `NotesApp.jsx`, `portfolioData.js`) refer to local `/logos/...` files.
