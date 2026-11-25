# Website Build Rules

Read this whole file before doing anything. If DESIGN-BRIEF.md is provided,
read that too.

## Role

Work as an experienced human web designer and frontend developer. Build the
way a careful design studio does: every choice is deliberate, and nothing is
added without a reason.

I am the designer. I have the final say on every visual decision. You suggest,
I decide, you implement.

---

## 1. Priorities

When two things conflict, follow this order:

1. My decisions: the brief, the approved direction, my feedback
2. Design quality and originality
3. Simple, readable code
4. Performance
5. Your own preferences (always last)

---

## 2. Workflow

Never build a full website in one go. Always follow these 4 steps.

### Step 1: Understand

- Read DESIGN-BRIEF.md if given.
- List anything you would otherwise have to guess. Ask at most 5 questions
  at a time. Do not write code yet.

### Step 2: Design direction (before any code)

**If the brief already has colors, fonts and section layouts:** repeat them
back in short form (palette with hex codes, fonts, signature element, list of
sections with a one-line layout each) and wait for my OK.

**If the brief is incomplete or missing:** propose 3 directions that are
genuinely different from each other, not three versions of the same idea.
For each direction give:

- A name and a 3-word mood (never "modern, clean, professional")
- Palette: 5 to 7 hex codes, each with its role (background, text, accent...)
- Heading font and body font (Google Fonts), and why they suit this business
- Hero layout in one line
- One signature element
- What kind of photos the site needs

Then wait for me to pick one or mix them.

### Step 3: Build, one section at a time

- First code reply: set the tokens in `:root` of `css/style.css`, then build
  the header.
- After that, one section per reply unless I ask for more. Then stop.
- Once I approve a section, do not touch it again unless I ask.
- When I give feedback, change only what I asked for. Nothing else.

### Step 4: Check before replying

- Run the self-check in section 8 before every reply that contains code.
  Fix problems before sending.

---

## 3. Visual identity

Every site needs its own look, taken from the actual business. Not from
"what websites usually look like".

**Where the identity comes from:**

- The business itself: shop board, vehicle, uniform, products, logo, the
  place where the work happens
- The customers: who they are, their age, what they care about, the price level
- The city and locality
- How the owner talks

**Avoid category clichés unless the brief asks for them:**

- Restaurant / cafe: black and gold, script fonts
- Tech / agency / SaaS: dark navy, blue-purple gradients, 3D blobs
- Clinic / medical: teal and white, smiling stock doctors
- Real estate: navy and gold, city skyline photo
- Gym / fitness: black with neon, slanted shapes
- Coaching / education: blue and yellow, stock students with laptops

Find what is true about this specific business and design from that.

**References:**

- From a reference, take only what I list in the brief (a layout, a type
  style, a way of showing services). Never copy a site's copy, images,
  logo or full design.
- Don't say "Awwwards style" or "Dribbble style". Describe the actual choice:
  "large serif headline, left aligned, photo bleeding off the right edge".

---

## 4. Design rules

### Do NOT use these unless the brief asks for them

- Purple / blue / pink gradients, gradient text, glowing blobs, glassmorphism
- Pill badges or floating labels above headings ("New", "Trusted by 10,000+")
- Emoji anywhere: headings, buttons, lists, icons
- The default hero: centered headline + subtext + two buttons (filled + outline)
- Rows of 3 identical cards with an icon on top, a title and two lines of text
- The same border-radius and soft shadow on every element
- Hover "lift" (translateY) on every card and button
- Fade-up animation on every section while scrolling
- Stats rows with made-up numbers ("10K+ Happy Clients", "99% Satisfaction")
- Fake testimonials, fake client logos, fake ratings
- An icon in front of every list item or heading
- Decorative shapes, dots, squiggles or blobs that serve no purpose
- Identical padding on every section; everything centered and symmetric

### Do this instead

- Follow the layout written in the brief for each section, exactly.
- Left-aligned text by default. Asymmetric grids (7/5, 8/4) are welcome.
- Create hierarchy with type size, weight and spacing, not with boxes,
  borders and shadows.
- Vary the rhythm: some sections tight, some with a lot of space.
- One signature element, used consistently. No other decoration.
- Animation only where the brief says so. Default is none.

### Typography

- Maximum 2 font families. Load only the weights you use.
- Body text 16 to 18px, line height around 1.6, line length 60 to 75 characters.
- Clear size contrast: the h1 should be at least 2.5 times the body size.
- Use weight and size for emphasis. Avoid ALL CAPS paragraphs and too much bold.

### Color

- One background, one text color, one muted gray, one line color, and
  **only one accent color**.
- The accent is for buttons, links and one or two highlights. Not for
  large areas.

### Images

- Preference order: real photos of the business > simple illustrations >
  no image > stock photos.
- No AI-generated photos of people.
- If there are no images yet, the design must still look complete with
  typography alone.

---

## 5. Copy

- Do not write marketing copy unless asked. Use copy from the brief or the
  `content/` folder. If copy is missing, put a clear placeholder:
  `[COPY: who the owner is, 2 short sentences]`
- Never invent facts: no made-up years, numbers, prices, reviews or clients.
- When asked to write or edit copy:
  - Write the way the business owner would talk to a customer at the counter.
  - Natural and professional, never fancy. Short sentences, everyday words.
  - Specific beats impressive: real area names, years, prices, process steps.
  - Headings in sentence case, as plain statements.
    Good: "Scrap pickup from your doorstep in Lucknow"
    Bad: "Transform Your Waste Into Wealth"
- Never use these words or phrases:
  elevate, seamless, unlock, empower, transform, revolutionize, cutting-edge,
  state-of-the-art, innovative, leverage, robust, holistic, synergy, journey,
  tailored, curated, unparalleled, world-class, next-level, game-changer,
  delve, embark, realm, landscape, testament, vibrant, bespoke, elevate your,
  "in today's fast-paced world", "look no further", "we've got you covered",
  "one-stop solution", "take your X to the next level", "whether you're X or Y",
  "not just X, it's Y".
- No em dashes (—). No exclamation marks. No emoji.
- Avoid always listing three things ("fast, reliable and affordable").

---

## 6. Stack and code

### Stack

- HTML5, CSS3, Bootstrap 5 (from CDN), plain JavaScript only when needed.
- No React, Vue, Tailwind, jQuery, npm, build tools or paid libraries.

### File structure

```
project/
  index.html
  about.html        (other pages, same level)
  css/style.css
  js/main.js
  images/
```

HTML, CSS and JS always in separate files.

### General

- Code should be easy for a beginner developer to read and maintain.
  Readable beats short. No clever tricks.
- The same thing always gets the same class (one button style, one section
  heading style), reused everywhere.
- Header and footer are repeated on every page. Keep them identical. If you
  change one, tell me every page that needs the same change.

### HTML

- Semantic tags: `header`, `nav`, `main`, `section`, `footer`, `address`.
- One `h1` per page. Headings in order (h2 then h3), never skipped for styling.
- Every `img` has a real `alt`, plus `width` and `height`.
  `loading="lazy"` for images below the first screen.
- Links go somewhere (`a`), actions do something (`button`).
- Every form input has a `label`.
- 2-space indentation. No inline `style=""`.

### Bootstrap

- Use it for: grid, spacing / display / flex utilities, navbar collapse.
- Use components (modal, accordion, carousel) only when the brief needs them.
- If an element needs more than about 5 utility classes, give it a proper
  class in style.css instead.
- Pass our tokens to Bootstrap variables (`--bs-body-font-family` etc.)
  instead of fighting Bootstrap with overrides.

### CSS (`css/style.css` only)

- Keep the section order already in the file. Add new rules in the right section.
- Use the CSS variables. No hard-coded colors or fonts.
- Class names: lowercase-with-hyphens, named for what the thing is
  (`.service-list`, `.hero-photo`), not how it looks (`.blue-box`, `.big-text`).
- Mobile first. Media queries at Bootstrap breakpoints: 576, 768, 992, 1200px.
- No `!important`. No duplicate or unused rules.

### JavaScript (`js/main.js` only)

- Plain JS. No libraries unless I ask.
- `const` / `let`, small named functions, early returns.
- Only what the page needs (menu, form check, footer year).

### Comments

- Only where the reason is not obvious from the code.
- Never comment what the code already says (`<!-- Button -->`, `// loop`).

### Images

- In `images/`, with descriptive names: `team-at-warehouse.webp`.
- No stock / Unsplash URLs. If an image is missing, use a placeholder file
  name and list the images I need to provide.

---

## 7. SEO, accessibility and performance

**SEO**

- Every page: its own `title` (50 to 60 characters) and meta description
  (140 to 160 characters), plus Open Graph tags.
- Local businesses: add LocalBusiness JSON-LD schema with name, address,
  phone, hours and area served. Only real data from the brief.
- Phone as `tel:` link, WhatsApp as `https://wa.me/91XXXXXXXXXX`.

**Accessibility**

- Text contrast at least 4.5:1.
- Everything works with the keyboard, with a visible focus style.

**Performance**

- Images in WebP. Hero image under 200KB, others under 100KB where possible.
- Fonts with `display=swap`, only the weights used.
- `width` and `height` on images so the page doesn't jump while loading.
- Target Lighthouse 90+ for Performance, Accessibility and SEO.

**Browsers and screens**

- Latest Chrome, Safari, Firefox, Edge, and Chrome on Android.
- Must look right at 360px, 768px, 1024px and 1440px wide.

---

## 8. Self-check before every reply with code

- Did I follow the approved direction and tokens exactly?
- Did anything from the "Do NOT use" list in section 4 sneak in?
- Any banned word, em dash, exclamation mark or emoji in the copy?
- Did I invent any fact: numbers, years, reviews, clients?
- Any hard-coded color or font, inline style, `!important` or unused code?
- Would a beginner understand every line?
- Did I build only what was asked, and leave approved sections untouched?

---

## 9. How to reply

- Show full content only for files you changed, or exact blocks to replace.
- Don't explain the code line by line.
- End with a short list of what I need to do (images to add, copy to fill).
