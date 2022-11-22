const seo = {
  title: "Junhyeong's Portfolio",
  description:
    "A individual who always thrives to work on end to end products which develop sustainable and scalable systems and programs.",
  og: {
    title: "Junhyeong Park Portfolio",
    type: "website",
    url: "http://junhyeongpark.com/",
  },
};

const greet = {
  title: "Junhyeong Park",
  logo_name: "JunhyeongPark",
  nickname: "YUJunhyeongPark",
  subTitle:
  "A individual who always thrives to work on end to end products to develop sustainable and scalable systems and programs.",
  resumeLink:
    "https://drive.google.com/file/d/17nxTg2PYSUGC8UpLuvn6-5bLxDXcALSr/view?usp=sharing",
  portfolio_repository: "https://github.com/YUJunhyeongPark/reactportfolio",
  githubProfile: "https://github.com/YUJunhyeongPark",
};

const SNSLinks = [

  {
    name: "Github",
    link: "https://github.com/YUJunhyeongPark",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/junhyeong-park-4b5583180/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCtzeqtDBGjBo9X9gTOozm-g",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "roberuchi@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/junhyeong.park.507/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "- Building responsive website front end using React",
        "- Creating application backend in Django",
        "- Building desktop applications based on Java",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092E20",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "York University",
      subtitle: "B.Sc. in Computer Science",
      descriptions: [
        "- Studied basic software engineering subjects like DS, Algorithms, DBMS, OS, AI etc.",
        "- Chosen for entry scholarship."
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Projects done by Junhyeong Park using variety of technology tools. Projects developed to serve the community through web application or as a desktop application",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPage = {
  contactSection: {
    title: "Contact",
    profile_image_path: "",
    description:
      "I am available on Facebook and Discord. I'm willing to join any projects with the use of React, Java, Javascript and Python.",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "811-20 Graydon Hall Dr, North York, ON M3A 3A1, Canada",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/kyweDxjLo7uVXLZB7",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1 6479709040",
  },
};

export {
  seo,
  greet,
  SNSLinks,
  skills,
  degrees,
  projectsHeader,
  contactPage,
};