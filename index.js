#!/usr/bin/env node

// Dependencies
const boxen = require('boxen');
const chalk = require('chalk');
const gradient = require('gradient-string');
const Grid = require("term-grid");


//Options for the style of the box (boxen package)
const options = {
    padding: 1,
    margin: {
        left: 15,
        top: 0,
        bottom: 1,
        right: 0,
    },
    borderStyle: 'round',
};

//Gradients for text (gradient-string package)
const gradients = {
    blue: gradient(['#11FF66', '#00AAFF', '#3377CF']),
    orange: gradient(['#FF8811', '#FF2311', '#BB1131'])
}

//Raw data displayed at screen
const data = {
    name: "Muhammad Zia",
    handle: "mughalhere",
    title: "Full Stack Developer",
    country: "Pakistan",
    birthday: "10/01/1998",
    mobile: "+92 324 6151392",
    email: "mughalhere@icloud.com",
    description1: "Passionate about" + chalk.bold(" entrepreneurship") + "," + chalk.bold(" creativity ") + "and" + chalk.bold(" digitality") + ",",
    description2: "always optimist, nature and diversity lover, change-enthousiast,",
    description3: "globe trotter,dedicated and motivated volunteer," + chalk.bold(" marketer ") + "(with",
    description4: "Master!) single. I aimed at" + chalk.bold(" improving the world ") + "we are living by",
    description5: "putting my skills at the service of projects that make sense.",
    card: "npx mughalhere",
};

//Modified data with some style
const styled = {
    name: chalk.bold(data.name),
    handle: chalk.underline(data.handle),
    title: gradients.blue(data.title),
    githubstr: gradients.orange('GitHub:'),
    linkedinstr: gradients.orange('LinkedIn:'),
    instagramstr: gradients.orange('Instagram:'),
    upworkstr: gradients.orange('Upwork:'),
    country: chalk.bold(data.country),
    birthday: chalk.bold(data.birthday),
    mobile: chalk.bold(data.mobile),
    email: chalk.bold(data.email),
    description1: chalk.white(data.description1),
    description2: chalk.white(data.description2),
    description3: chalk.white(data.description3),
    description4: chalk.white(data.description4),
    description5: chalk.white(data.description5),
    cardstr: gradients.orange('Card:'),
    card: chalk.bold(data.card),
}

//Links 
const links = {
    github: chalk.white('https://github.com/') + chalk.hex('#00AAFF')('mughalhere'),
    linkedin: chalk.white('https://www.linkedin.com/in/') + chalk.hex('#00AAFF')('mughalhere'),
    instagram: chalk.white('https://www.instagram.com/') + chalk.hex('#00AAFF')('masterofstrike'),
    upwork: chalk.white('https://www.upwork.com/freelancers/~') + chalk.hex('#00AAFF')('0140560d4ece353ec3')
}

//Final output desplayed within the box with all the modifications and the structure
const output =
    `${styled.githubstr}     ${links.github}
${styled.linkedinstr}   ${links.linkedin}
${styled.instagramstr}  ${links.instagram}
${styled.upworkstr}     ${links.upwork}

${styled.cardstr}       ${styled.card}`;


//Grids (term-grid package)
var grid1 = new Grid([[""],
["", `${styled.name} / ${styled.handle}`],
["", `${styled.title}`],
[""],
[""],
["", "", "Country:", `${styled.country}`],
["", "", "Birthday:", `${styled.birthday}`],
["", "", "Phone:", `${styled.mobile}`],
["", "", "Email:", `${styled.email}`],
[""],
[""],
["", "Description:"],
[""],
["", `${styled.description1}`],
["", `${styled.description2}`],
["", `${styled.description3}`],
["", `${styled.description4}`],
["", `${styled.description5}`],
[""],
[""],
["", "Links:"]
]);
grid1.setWidth([15, 4, 12, 20]);



//CONSOLIDATION
//Above the box (with the term-grid p)
grid1.draw();

//Box
console.log(boxen(output, options));

//Under the box (with the term-grid package)