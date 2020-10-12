import * as React from 'react';

const ARTICLES = [
  {
    id: 1,
    title: "Lesson 1 - How to create Pounds to " +
      "Kilograms converter in 2020?(JavaScript, NodeJS)",
    to: 'https://medium.com/@premiumtechnologyacademy/' +
      'lesson-1-how-to-create-pounds-to-kilograms-converter-in-2020-' +
      'javascript-nodejs-d7b22e18a657'
  },
  {
    id: 2,
    title: "Lesson 2 - Get Started with TypeScript in 2020 (npm, tsc)",
    to: "https://medium.com/@premiumtechnologyacademy/lesson-2-get-started-with-typescript-in-2020-npm-tsc-f9e769f4e5e5"
  },
  {
    id: 3,
    title: "Lesson 3 - How to use ESLint with TypeScript",
    to: "https://medium.com/@premiumtechnologyacademy/lesson-3-how-to-use-eslint-with-typescript-9d747741165f"
  },
  {
    id: 4,
    title: "Lesson 4 - Getting Started on Heroku with Node.js",
    to: "https://medium.com/@premiumtechnologyacademy/live-website-in-5-minutes-using-express-and-heroku-lesson-4-f61169f983d3"
  },
];

const MediumArticles = () => {
  return (
    <ul>
      {ARTICLES.map(article => (
        <li>
          <a key={article.id} href={article.to}>
            {article.title}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default MediumArticles;