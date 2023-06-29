import React from "react";
import projectOne from "./images/project1.png";
import PortfolioTemplate from "./PortfolioTemplate";
import projectTwo from "./images/sound-shelf.png";
import projectThree from "./images/junk-store.jpg";
import weatherApp from "./images/weather-dashboard.png";
import textEditor from "./images/text-editor.png";
import TaekwondoWs from "./images/TaeKwon-Do.png";
import movieImg from "./images/movie-app.png";
import ratingApp from "./images/ratingApp.png";
import storeApp from "./images/storeApp.png";
import weatherdashboard from "./images/weatherApp.png";
import commandLine from "./images/command-line.jpg";
import taekwondo from "./images/taekwondo.jpg";

const Work = () => {
  const projects = [
    {
      name: "TaeKwon-Do Website",
      link: "https://naidiri1.github.io/taekwondo-website/",
      imgSrc: TaekwondoWs,
      description:
        "This website is a static website for a bussines of Taekwon-Do. Currently, it is in process missing the content information  with a structure finished ready to add the information and being deployed.",
      modalTitle: "TaeKwon-Do Website",
      modalContent:
        "This project is built in a team colaborations of 2 web developers eager to gain more experience as junior web developers, This  business website is under development missing only the content information ready to be deployed anytime. We faced different challenges like the Goggle reviews Api and decided to go for a widget of reviews for a low cost per year, and also used an embeded Html google maps  in order to user get access to the directions and location of the business",
      modalRepolink: "https://github.com/Naidiri1/taekwondo-website",
      modalFeaturesApp: [
        "React",
        "Widget for Google Reviews",
        "embeded Html Google Maps",
        "Email.js",
        "Bootstrap",
        "CSS",
        "HTML5",
        "JavaScript",
      ],
      modalImgApp: taekwondo,
    },
    {
      name: "The Junk Store",
      link: "https://quiet-depths-44401.herokuapp.com",
      imgSrc: projectThree,
      description:
        "This is a MERN stack application, a one-stop shop for all your online shopping needs. It is a full stack application that allows users to create an account, login, view, add products to their cart, and checkout.",
      modalTitle: "MERN Stack App",
      modalContent:
        "This project  is built with MERN stack (MongoDB, Express,js, React.js and Node.js), we used Mongoose that provides a straightforward way to interact with MongoDB databases to manage our data of product, users, orders and categories for our products and Express.js was used to to define routes for handling different HTTP requests (such as GET, POST, PUT, DELETE) and their corresponding actions. And for the front end we used Apollo client to create requests and interaction with the user. finally we used Stripe to handle the payment methods.",
      modalRepolink: "https://github.com/trudman/online-store",
      modalFeaturesApp: [
        "Node.js",
        "Stripe",
        "Apollo-Cliente",
        "Apollo-Server",
        "IndexedDB",
        "GraphQL",
        "Mongoose",
        "Express",
        "React",
        "  MongoDB",
      ],
      modalImgApp: storeApp,
    },
    {
      name: "Movie Time App",
      link: "https://naidiri1.github.io/Movie-Time",
      imgSrc: projectOne,
      description:
        "The main purpose of the project is to allow users to choose a movie to watch based on information about a movie and displaying its trailer  to help decide to watch the movie in mind or choose another one based on those two factors. ",
      modalTitle: "Movie Time",
      modalContent:
        "This project was built by a team work, It was my first project to work in a collaborative way, and we decided to work on movies since we all loved the idea, we use OMDb Api to get relative information about an specific movie the user wanted to know about and then render its trailer with Youtube Api. The user could save a history of movies searched using local storage.",
      modalRepolink: "https://github.com/Naidiri1/Movie-Time",
      modalFeaturesApp: ["OMDb API", "Youtube Api", "Local Storage"],
      modalImgApp: movieImg,
    },
    {
      name: "Sound Shelf Rating App",
      link: "https://glacial-ridge-68667.herokuapp.com",
      imgSrc: projectTwo,
      description:
        "This application allows users to dynamically navigate a Heroku deployed application that includes user account sign up, login, functionality to add/rate songs as well as leave comments.",
      modalTitle: "Sound Shelf",
      modalContent:
        "This project called Sound Shelf, a music rating app was built with a team of 4 people including me, we decided to come up with this idea because we all love listening to music. We used MySQL to save data like: users, songs, comments, rating, scores and song details. In order to handle our routes and middleware we used Express.js and Sequelize to have access to our data using mysql we were able to use CRUD (create, read,update and delete) to manipulate data from user and song information. In order to gather users input we used sequilize to write revies, make a rating and create a user-friendly CLI interface. Another feature from this project we used and it was useful was bcrypt to secure our users passwords in our database and for last what made our app fun was the rater package called Rater.js to rate the user's songs.",
      modalRepolink: "https://github.com/sco5am/music-rating-app",
      modalFeaturesApp: [
        "Node.js",
        "MySQL",
        "Express.js",
        "Sequelize",
        "inquirer",
        "dotenv",
        "bcrypt",
        "express-handlebars",
        "express-session",
        "Heroku",
        "Rater.js",
      ],
      modalImgApp: ratingApp,
    },
    {
      name: "Weather Dashboard App",
      link: "https://naidiri1.github.io/weather-dashboard/",
      imgSrc: weatherApp,
      description:
        "The main purpose of this project is to provide weather information for any city in the USA, displaying the current day and the next following days' weather conditions.",
      modalTitle: "Weather Dashboard",
      modalContent:
        "This project is utilizing the OpenWeatherMap API to retrieve weather data from the current day and the next 5 days. This website is deployed in github pages using HTML and CSS.",
      modalRepolink: "https://github.com/Naidiri1/weather-dashboard",
      modalFeaturesApp: ["OpenWeatherMap", "local Storage"],
      modalImgApp: weatherdashboard,
    },
    {
      name: "(PWA) Text Editor",
      link: "https://calm-dawn-74665.herokuapp.com",
      imgSrc: textEditor,
      description:
        "This project is built to create notes or code snippets with or without an internet connection as a native application, working with internet connection or offline, so the user can make notes and still be saved or being able to delete them based on his needs.",
      modalTitle: "(PWA) Text Editor",
      modalContent:
        "To build this text editor that runs in the browser, The app will be a single-page application that meets the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.To build this text editor, the user will start with an existing application and implement methods for getting and storing data to an IndexedDB database. The user will use a package called idb, which is a lightweight wrapper around the IndexedDB API. It features a number of methods that are useful for storing and retrieving data, and is used by companies like Google and Mozilla.",
      modalRepolink: "https://github.com/Naidiri1/progressive-web-applications",
      modalFeaturesApp: [
        "HTML",
        "CSS",
        "express",
        "webpack-pwa-manifest",
        "style-loader",
        "html-webpack-plugin",
        "http-server",
      ],
      modalImgApp: commandLine,
    },
  ];

  const renderProjects = () => {
    return projects.map((project, idx) => (
      <PortfolioTemplate
        key={idx}
        name={project.name}
        link={project.link}
        imgSrc={project.imgSrc}
        description={project.description}
        modalTitle={project.modalTitle}
        modalContent={project.modalContent}
        modalFeaturesApp={project.modalFeaturesApp}
        modalImgApp={project.modalImgApp}
        modalRepolink={project.modalRepolink}
      />
    ));
  };
  return (
    <div className="mt-5 d-flex flex-wrap justify-content-center ">
      {renderProjects()}
    </div>
  );
};
export default Work;
