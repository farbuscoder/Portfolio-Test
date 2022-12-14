const { response } = require("express");

const express = require("express");

const router = express.Router();

const projects = [
  {
    id: 1,
    title: "Stocky-app",
    description: `Add new products, edit their properties and delete them. Fetching great Spoonacular api. Learn more clicking on more button.
    Login was implemented using React google login. %100 Responsive.
    Tecnologies: SweetAlert2, Node.js, Express, Axios, ApiContext, MongodbAtlas. `,
    image: "https://i.ibb.co/fHBKJS6/stokcy-app.png",
    url: "https://github.com/farbuscoder/stocky-app-farbuscoder",
  },
  {
    id: 2,
    title: "Foddit",
    description: `Search and add to menu cart your preferred dishes, click on the order cart and confirm your Order. This project is part of the Frontend challenge alkemy.
    Tecnologies: Html5, Css3, Bootstrap, SweetAlert2, Javascript, React, Api Context, Axios.`,
    image: "https://i.ibb.co/7zmCB2J/fooddit2.png",
    url: "https://github.com/farbuscoder/Challenge-frontend-Alkemy",
  },
  {
    id: 3,
    title: "Color Palette",
    description: `Generate thousands of different colors. Select a color and set your favourite color palette. Copy hexadecimal and rgb. Delete each color if you want. Press G key to generate new colors.
    Tecnologies: Html5, Css3, Vanilla Javascript, DOM. `,
    image: "https://i.ibb.co/XzKHdxJ/mypalette.png",
    url: "https://github.com/farbuscoder/Color-palettes",
  },
  {
    id: 4,
    title: "Go-scrum",
    description: `Create tasks and order them depending on their necessity, Tecnologies: React.js, formik, yup, css, node.js, Redux, React Redux, framer-motion`,
    image: "https://i.ibb.co/C5ZG23Y/tutarea.png",
    url: "https://github.com/farbuscoder/Go-scrum",
  },
];

router.get("/", (req, res) => {
  res.json(projects);
});

module.exports = router;
