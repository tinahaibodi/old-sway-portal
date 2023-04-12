## Sway Portal

The website is written in [Next.js](https://nextjs.org/), a React framework. It uses [TypeScript](https://www.typescriptlang.org/) and [styled-components](https://styled-components.com/) for styling. The content for this project is written in JSON files, located in the data folder. The content is then passed as props to the components which is served at build time, ahead of a user’s request.

## Table of contents

- [Setup](#setup)
- [How to edit content](#how-to-edit-content)
- [Reusable components](#reusable-components)
  - [Button](#button)
  - [Container](#container)
  - [Heading](#heading)
  - [Horizontal Cards](#horizontal-cards)
  - [Horizontal Steps](#horizontal-steps)
  - [Page Seo](#page-seo)

## Setup

You’ll need to have Node 10.16.0 or later version on your local development machine (but it’s not required on the server). I recommend using the latest LTS version.

Runs next build to build the application for production usage.

```sh
yarn install
```

Runs next dev to start Next.js in development mode on http://localhost:3000

```sh
yarn dev
```

After the set up is complete:

Visit http://localhost:3000 to view your application

## How to edit content

Editing data for this project is very easy and intuitive. You do not need to go through the code to make changes.

You can do it all from the `data` directory in the root of the project. Each page has its own data file.

For example, the data for the `/ideas` page is located in `data/ideas.json`. You can edit the data in this file and see the changes reflected in the browser. Since the project is built using Typescript you will get warnings if you make a mistake in the data file or do not satisfy the data types.

## Reusable components

There are several other components used throught the project, but I've only included the ones that change depending on the provided properties.

## Button

Sway currently supports 2 variants of button - `primary` and `secondary`. The primary button is used for the main action on the page, while the secondary button is used for secondary actions.

The `primary` button is filled with the brand color while the `secondary` button only has a border with the brand color.

```js
import { Button } from "@/common/Button";

<Button text="Sway Developer Portal" variant="primary" />;
```

Button component also has an additional optional property called `hasArrow`, which renders an arrow icon on the right side of the button, that animates on hover.

```js
import { Button } from "@/common/Button";

<Button text="Submit application idea" variant="secondary" hasArrow />;
```

## Container

When adding an new section, `SectionContainer` component is probably the first component you may want to use, as it is used to wrap the section content and add the optional padding through the `padding` prop, you can leave this empty if you wish to maintain the default padding. The `layout` prop is used only for the `Header`and `Footer` sections, since their max-width is different from the rest of the sections.

### Optional

- `padding?`: The padding of the section. The default value is `3.71875rem 0`.
- `layout?`: Boolean that determines whether the container is used for `Header` and `Footer`.

```js
import { SectionContainer } from "@/common/SectionContainer";

<SectionContainer>{children}</SectionContainer>;
```

## Heading

After wrapping the content of the section, you can use the `Heading` component to add the title and subtitle of the section. The `level` prop defines the heading level of the title, and the `title` and `subtitle` props are used to define the title and subtitle of the section. The `level` prop can be any number between 1 and 6, but it is recommended to only use `level` 1 once per page for SEO purposes.

```js
import { Heading } from "@/common/Heading";

<Heading
  level={2}
  title={"WELCOME TO THE SWAY DESIGN PORTAL"}
  subtitle={"Designing better experiences on Sway"}
/>;
```

## Horizontal Cards

As the name suggests, `HorizontalCards` is a component that renders a horizontal list of cards, with an arrow icon on the right side. This component is used on every single page of the Sway website and takes in an array of `CardsData` objects as a prop. Each `CardsData` object contains the following properties:

### Mandatory

- `href`: The link to the page that the card will redirect to, this opens in a new tab.
- `markdownText`: The text that will be rendered in the card in markdown format. You can use `/n` to create a new line.

### Optional

- `backgroundImage?`: The background image of the card, this is a string that is the name of the image in the `assets/png` folder.
- `leftSvg?`: The name of the SVG that will be rendered on the left side of the card, this is a string that is the name of the image in the `assets/svg` folder.

```js
import { HorizontalCards } from "@/components/Heading";

const cardsData = [
      {
        "markdownText": "Yama \n Finance",
        "backgroundImage": "playestates",
        "href": "https://www.google.com/"
      },
      {
        "markdownText": "Play \n Estates",
        "backgroundImage": "playestates",
        "href": "https://www.google.com/"
      }
]

<HorizontalCards data={cardsData} />;
```

## Horizontal Steps

`HorizontalSteps` is a component that renders a horizontal list of dynamic steps, each step has a circle icon and a markdown text. On smaller devices the component will create an overflow effect, so the user can scroll through the steps.

The component will create an overflow effect if the row of cards exceds 2, the overflow will enable the user to scroll horizontally to see the rest of the cards.

### Mandatory

- `markdownText` - The text that will be rendered in the step as markdown format. You can use `/n` to create a new line.

### Optional

- `removeLine?` - Boolean that determines whether the gray line should be removed from the bottom of the component.

```js
import { HorizontalSteps } from "@/components/Heading";

const stepsData = [
    {
        "markdownText": "Install \n dependencies",
        "href": "https://www.google.com/"
    },

    {
        "markdownText": "Setup application \n (think create-react-app)",
        "href": "https://www.google.com/"
    }
]

<HorizontalSteps data={stepsData} removeLine />;
```

## Page Seo

`PageSEO` will render the meta tags for the page, this component will be used in the pages that need to be indexed by search engines. The component renders the meta tags for the page and also the canonical url for the page, this will help the search engines to index the page correctly.

Currently, the component doesn't have the `og:url` property, this is because the page url is unknown to me, so the og:url meta tag is commented out. If you want to use it, you will need add your website url in the commented code.

### The component requires mandatory props to be passed in order to work properly:

- `ogTitle` - The title of your object as it should appear within the graph, e.g., "Ideas - Fuel".

- `ogDescription` - A one to two sentence description of your object.

- `ogImage` - An image URL which should represent your object within the graph.

```js
import { PageSEO } from "@/common/PageSeo";

<PageSEO
  ogTitle="Sway Developer Portal - Fuel"
  ogDescription="Your home to everything building in Sway"
  // This is a placeholder image
  ogImage="https://picsum.photos/200/300"
/>;
```
