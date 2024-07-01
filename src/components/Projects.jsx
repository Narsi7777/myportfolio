
import React from "react";
import Footer from './Footer'
import landing from "../assets/landingPage.png"
import weather from "../assets/weather.png"
import simon from "../assets/simon.png"
import stopwatch from "../assets/stopwatch.png"
import ticimage from "../assets/tic.png"
const ProjectCard = ({ image, title, description, git, technologies,website }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
           
                <img className="w-full rounded-t-lg h-auto object-cover " src={image} alt="" />
           
          
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300" >Git Repo</a>
                {website!==null&&
                    <a href={website} className="text-green-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">Website</a>
                }
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        website={item.website}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title: "Weather Application",
        description: "Developed a React-based weather application using OpenWeather and LocationIQ APIs to display current weather conditions and search for city-specific weather data. Implemented dynamic UI updates and navigation with React Router.",
        image: weather,
        git: "https://github.com/Narsi7777/weatherapp",
        website: "https://narsi7777.github.io/weatherapp/",
        technologies: ["ReactJS", "OpenWeather API", "LocationIQ API", "React Router"]
    },
    {
        title: "Responsive BMW Landing Page",
        description: "Designed and developed a responsive BMW landing page using ReactJS, JavaScript, and CSS, showcasing sleek design and interactive elements for an engaging user experience.",
        image: landing,
        git: "https://github.com/Narsi7777/BmwResponsiveLandingPage",
        website: "https://narsi7777.github.io/BmwResponsiveLandingPage/",
        technologies: ["HTML", "ReactJS", "CSS"]
    },
    {
        title: "Simon Game",
        description: "Created a memory-based game using HTML, CSS, and JavaScript, where users replicate random sequences of lights and sounds.",
        image: simon,
        git: "https://github.com/Narsi7777/SIMON-GAME",
        website: "https://narsi7777.github.io/SIMON-GAME/",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Stopwatch",
        description: "Built a digital stopwatch using HTML, CSS, and JavaScript, allowing users to start, stop, and reset time tracking.",
        image: stopwatch,
        git: "https://github.com/Narsi7777/stopWatch",
        website: "https://narsi7777.github.io/stopWatch/",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Tic-Tac-Toe Game",
        description: "Implemented a classic Tic-Tac-Toe game with a simple UI and logic for two players using JavaScript and HTML/CSS.You can also play with AI opponent",
        image: ticimage,
        git: "https://github.com/Narsi7777/TicTocToe2",
        website: "https://narsi7777.github.io/TicTocToe2/",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Keeper App",
        description: "Designed a note-taking app similar to Google Keep, using React for creating, deleting, and managing notes.",
        image: "path_to_keeper_app_image",
        git: "https://github.com/Narsi7777/Narsi-sKeeperApp3",
        website: null,
        technologies: ["ReactJS", "CSS"]
    }
]


export default Projects

