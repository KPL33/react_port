# 20 React: React Portfolio


deploy Netlify.

single-page application portfolio for a web developer

load, presented with page containing header, section for content, footer

view header, presented with my name and nav, corresponding w/sections of page

view navigation titles, presented with About Me, Portfolio, Contact, and Resume. title corresponding to current section is highlighted

click navigation, browser URL changes and presented withcorresponding section below navigation and title is highlighted

load portfolio the first time About Me title and section are selected by default; presented with About Me section, see myphoto and short bio

presented with the Portfolio section, see titled images of 6 my apps, links to deployed apps GitHub repos

presented with Contact section, see a contact form with fields for a name, an email address, and a message

WHEN cursor moved out of form fields without entering text, notification that this field is required appears enter text into email address field, receive notification if have entered invalid email

presented Resume section, see link to downloadable resume list of the my proficiencies

view the footer presented with text or icon links to the developer’s GitHub, Leetcode and LinkedIn profiles

### Projects

For each project that is featured in your portfolio, include the following:

* GIF or screenshot of the deployed application

* The title of the project

* A link to the deployed application

* A link to the corresponding GitHub repository

### Design


* Use mobile-first design.

* Choose color palette https://coolors.co/.

* animations? and React component libraries (not required)


## Getting Started

You’ll use `vite` to build your portfolio, which will include the following:

* A single `Header` component that appears on multiple pages

* A single `Navigation` component within the header that will use `Link` components from `react-router-dom` to conditionally render the different sections of your portfolio

* A single `Project` component that will be used multiple times in the Portfolio section

* A single `Footer` component that appears on multiple pages

**Note**: Because this application doesn’t include a back end or connect to an API, the contact form doesn't need to save this information right now. You'll add back-end functionality in the next few weeks. In the meantime, consider including your email address and phone number on the Contact page.

### When you would like to scaffold a new `vite` application on your own, follow these steps

1. In the command line, navigate to the desired parent folder and run `npm create vite@latest`.

    * 🔑 *Note*: This command will automatically create a sub-folder which will house your React application; you do not need to perform a `mkdir` command to create one manually.

2. Enter the desired name of your new project folder.

3. From the first list of options, select your framework; for our activities in class, we'll be using `React`.

4. From the second list of options, select your variant; for our activities in class, we'll be using `JavaScript`.

5. `cd` into your newly created project folder and run `npm install`.

    * In later activities we'll add additional NPM packages to our `vite` apps such as 'bootstrap', 'dotenv', and 'axios'.

6. Run `npm dev`/`npm run dev` and navigate to the prompted URL to see your app.

### Further customization (Recommended)

1. Navigate to your `package.json` and modify the `scripts` object so that it looks like this example:

```json
  "scripts": {
    "dev": "vite",
    "start": "vite",
    "build": "vite build",
    "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
```

* Note the addition of the `"start": "vite"` script.

2. Navigate to the `vite.config.js` file and edit the export object so that it looks like this example:

```js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
```



## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria:

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

  * Application must use React to render content.

  * Application has a single `Header` component that appears on multiple pages, with a `Navigation` component within it that’s used to conditionally render About Me, Portfolio, Contact, and Resume sections.

  * Application has a single `Project` component that’s used multiple times in the Portfolio section.

  * Application has a single `Footer` component that appears on multiple pages.

  * Application must be deployed to Netlify.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository contains application code.

### Application Quality: 15%

* User experience is intuitive and easy to navigate.

* User interface style is clean and polished.

* Application uses a color scheme other than the default Bootstrap color palette.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains high-quality README file with description, screenshot, and link to deployed application.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository, with a unique name and a README that describes the project.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
