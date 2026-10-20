# English PDFs — sources

`presentation-en.html` → `assets/job-search-bot-presentation-EN.pdf`
`verify-en.html` → `assets/verify-documentation-EN.pdf`
`cv/cv-en.html` → `portfolio/assets/CV-Halina-Lukashenko-EN.pdf` (English CV, photo in `cv/photo.jpg`)
`cv/references-en.html` → `portfolio/assets/References-Halina-Lukashenko-EN.pdf` (translated letters, no names or contact details)

Build: `node pdf-src/build.js` (Playwright + Chromium).

## Status: draft
Text is translated. Screenshots are still the Danish originals, each marked with an
orange label (P01–P16, V1–V4). When the English bot is running:
1. Take the same screenshot in English and save it as `img/P01-en.png` etc.
2. Change the matching `src="img/P01-da.png"` to `-en.png` in the HTML.
3. When all are replaced, remove `class="draft"` from `<body>` and add the English bot
   username on the last page of the presentation.

| Label | What the screenshot shows |
|---|---|
| P01 | Welcome message + menu buttons |
| P02 | Search terms saved, CV uploaded |
| P03 | "Arhus" recognised as Aarhus |
| P04 | Two search terms at once, typo corrected |
| P05 | Positions matching one or both search terms |
| P06 | Positive match 90% / 85% |
| P07 | Partial match 85% / 25% |
| P08 | No match 0% (painter) |
| P09 | "boghlder" corrected, 61 jobs |
| P10 | New search term typed directly |
| P11 | "abrakadabra" refused |
| P12 | Sending job number 1, bot starts writing |
| P13 | Application + job posting as PDFs |
| P14 | "Show the list again" — 20 jobs |
| P15 | Job no. 2, different application |
| P16 | Two new PDFs for job no. 2 |
| V1 | Verify: claims not confirmed by the CV |
| V2 | Verify: requirements not addressed |
| V3 | Corrected application as PDF |
| V4 | Verify: check passed |

## To do for the Danish PDFs
Add the same "fixing is optional" paragraph (in Danish) to the Danish presentation and Verify PDF,
as in the English versions.
