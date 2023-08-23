import {
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    figma,
    specs,
    netflix,
    Disney_Hotstar,
    netflix_clone,
    spectacles,
    DisneyHotstar,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "react ",
      icon: reactjs ,
    },
    {
      title: "javascript ",
      icon: javascript,
    },
    {
      title: "MySql",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Netflix_clone",
      company_name: "Netflix",
      icon: netflix,
      iconBg: "#383E56",
      date: "April-26-2023",
      points: [
        "tried making basic clone webpage of netflix ",
        "HTML and CSS is used ",
      ],
    },
    {
      title: "Spectacles",
      company_name: "spectacles",
      icon: specs,
      iconBg: "#383E56",
      date: "May-28-2023",
      points: [
        "tried to basic clone webpage of Lenskart ",
        "HTML , CSS and Javascript",
        "learned different css styles and animation",
      ],
    },
    {
      title: "Disney+Hotstar_clone",
      company_name: "Disney+Hotstar_clone",
      icon: Disney_Hotstar,
      iconBg: "#E6DEDD",
      date: "May-28-2023",
      points: [
        "It is a basic clone webpage of Disney+Hotstar",
        "HTML , CSS and Javascript is used ",
        "learned Making corousel ,slides and more javascript functionalities"
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "DisneyHotstar",
      description:
        "Web-based platform that allows users to binge watch different series and movies since it used basic functionalities like animation etc",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: DisneyHotstar,
      source_code_link: "https://github.com/prekshasoni/hotstarclone",
    },
    {
      name: "netflix_clone",
      description:
        "Web application that enables users to binge watch series and movies it gives basic information of how it is used and it's other plans",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
      ],
      image: netflix_clone,
      source_code_link: "https://github.com/prekshasoni/p1netflix_clone",
    },
    {
      name: "Spectacles",
      description:
        "A basic kind of e-commerce website that shows different kinds of spectacles categories to purchase",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: spectacles,
      source_code_link: "https://github.com/prekshasoni/Spectacles",
    },
  ];
  
  export { services, technologies, experiences, projects };