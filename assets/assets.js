import user_image from './icons/user-image.jpg';
import edu_icon from './icons/edu-icon.png';
import edu_icon_dark from './icons/edu-icon-dark.png';
import vscode from './icons/vscode.png';
import git from './icons/git.png';
import github from './icons/github.png'
import github_dark from './icons/github-dark.png';
import mysql from './icons/mysql.png'
import mongodb from './icons/mongodb.png';
import right_arrow_white from './icons/right-arrow-white.png';
import mail_icon from './icons/mail_icon.png';
import mail_icon_dark from './icons/mail_icon_dark.png';
import profile_img from './icons/profile-img.png';
import download_icon from './icons/download-icon.png';
import hand_icon from './icons/hand-icon.png';
import header_bg_color from './icons/header-bg-color.png';
import moon_icon from './icons/moon_icon.png';
import sun_icon from './icons/sun_icon.png';
import arrow_icon from './icons/arrow-icon.png';
import arrow_icon_dark from './icons/arrow-icon-dark.png';
import menu_black from './icons/menu-black.png';
import menu_white from './icons/menu-white.png';
import close_black from './icons/close-black.png';
import close_white from './icons/close-white.png';
import right_arrow from './icons/right-arrow.png';
import send_icon from './icons/send-icon.png';
import right_arrow_bold from './icons/right-arrow-bold.png';
import right_arrow_bold_dark from './icons/right-arrow-bold-dark.png';
import code_icon from './icons/code_icon.png'
import code_icon_dark from './icons/code_dark_icon.png'
import frontend_icon from './icons/frontend_icon.png'
import frontend_dark_icon from './icons/frontend_dark_icon.png'
import backend_icon from './icons/backend_icon.png'
import backend_dark_icon from './icons/backend_dark_icon.png'
import database_icon from './icons/database_icon.png'
import database_dark_icon from './icons/database_dark_icon.png'



export const assets = {
    user_image,
    edu_icon,
    edu_icon_dark,
    vscode,
    git,
    github,
    github_dark,
    mysql,
    mongodb,
    right_arrow_white,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    code_icon,
    code_icon_dark,
    frontend_icon,
    frontend_dark_icon,
    backend_icon,
    backend_dark_icon,
    database_icon,
    database_dark_icon,
};

export const projectsData = [
    {
        title: 'Wanderlust - Full Stack Travel Accommodation Platform',
        skills: 'HTML5, CSS3, JavaScript, EJS, Node.js, Express.js, MongoDB, Mongoose, RESTful APIs, BootStrap',
        bgImage: '/images/wanderlust.png',
        link:"https://wanderlust-to5k.onrender.com/listings"
    },
    {
        title: 'PassOP - Your own password manager',
        skills: 'React, Node.js, Express.js, MongoDB, Tailwind CSS',
        bgImage: '/images/passOP.png',
        link:"https://passop-1bvt.onrender.com/"
    },
    {
        title: 'iTask - Manage your todos at one place',
        skills: 'React, Tailwind CSS, React Icons',
        bgImage: '/images/iTask.png',
        link:"https://i-task-delta.vercel.app/"
    },
    {
        title: 'Movie Ticket Booking System',
        skills: 'Java, HTML, CSS, JavaScript, JSP, Java Servlets, JDBC, MySQL',
        bgImage: '/images/MovieTicket.png',
        link:"https://github.com/sulemankhan1803/MovieTicketBookingSystem"
    },
]

// export const moreProjectsData = [
//     {
//         title: 'Wanderlust - Full Stack Travel Accommodation Platform',
//         skills: 'HTML5, CSS3, JavaScript, EJS, Node.js, Express.js, MongoDB, Mongoose, RESTful APIs, BootStrap',
//         bgImage: '/images/wanderlust.png',
//         link:"https://wanderlust-to5k.onrender.com/listings"
//     },
//     {
//         title: 'PassOP - Your own password manager',
//         skills: 'React, Node.js, Express.js, MongoDB, Tailwind CSS',
//         bgImage: '/images/passOP.png',
//         link:"https://passop-1bvt.onrender.com/"
//     },
//     {
//         title: 'iTask - Manage your todos at one place',
//         skills: 'React, Tailwind CSS, React Icons',
//         bgImage: '/images/iTask.png',
//         link:"https://i-task-delta.vercel.app/"
//     },
//     {
//         title: 'Movie Ticket Booking System',
//         skills: 'Java, HTML, CSS, JavaScript, JSP, Java Servlets, JDBC, MySQL',
//         bgImage: '/images/MovieTicket.png',
//         link:"https://github.com/sulemankhan1803/MovieTicketBookingSystem"
//     },
// ]


export const skillsData = [
    {
        icon: assets.code_icon,
        iconDark: assets.code_icon_dark,
        title: "Programming Languages",
        skills: "Java, C, Python",
        description:"Strong foundation in object-oriented and procedural programming.",
    },
    {
        icon: assets.frontend_icon,
        iconDark: assets.frontend_dark_icon,
        title: "Frontend",
        skills: "React, JavaScript, HTML5, CSS3, Tailwind CSS",
        description: "Responsive and interactive UI development.",
    },
    {
        icon: assets.backend_icon,
        iconDark: assets.backend_dark_icon,
        title: "Backend",
        skills: "Node.js, Express.js",
        description:"Building RESTful APIs, middleware, and server-side logic.",
    },
    {
        icon: assets.database_icon,
        iconDark: assets.database_dark_icon,
        title: "Database",
        skills: "MySQL, MongoDB",
        description:"Schema design, queries, and integration with backend.",
    },
];

export const infoList = [
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science', college: 'Annamacharya Institute of Technology and Sciences' }
];

export const toolsData = [
    assets.vscode, assets.mongodb, assets.git, assets.mysql,
];

export const githubicon = [
    {icon: assets.github, iconDark: assets.github_dark}
];

