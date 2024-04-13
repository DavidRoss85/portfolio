export const projectList = [
    {
        title: "News App",
        url: "https://davidross-News-app.web.app/",
        description:
            `<strong>
                News Aggregation Website (January 2024 – March 2024)
            </strong><br/>
            React, React Spring, Express.js, MongoDB, Passport (JWT)<br/>
            Deployed using Google Cloud Functions / Firebase<br/>
            <small>
                Role: Full-Stack Developer<br/>
                <strong>Achievements:</strong>
                <ul>
                    <li>• A full-stack news aggregation website allowing users to customize their news feed.</li>
                    <li>• Implemented JWT authentication to manage user sessions securely.</li>
                    <li>• Dynamic server endpoints for user account management and news API integration.</li>
                    <li>• Fluid front-end animations, enhancing user experience.</li>
                </ul>
            </small>`,
        shortdesc:
            `Full Stack News Aggregation Website built using the React and Express. <br>
            <strong>
                (January 2024 – March 2024)
            </strong><br/>
            React, React Spring, Express.js, MongoDB, Passport (JWT)<br/>
            Deployed using Google Cloud Functions / Firebase`,
        images: ["images/NewsApp/NewsApp1.jpg", "images/NewsApp/NewsApp2.jpg", "images/NewsApp/NewsApp3.jpg", "images/NewsApp/NewsApp4.jpg"],
        imgRef: ["newsImg1", "newsImg2", "newsImg3", "newsImg4"]
    },
    {
        title: "Casino Blackjack",
        url: "https://davidross-casino.web.app/",
        description:
            `<strong>
            Single player Casino blackjack (November 2023 – December 2023)
            </strong><br/>
            JavaScript, HTML, CSS<br/>
            Deployed using Google Firebase<br/>
            <small>
                <strong>Features:</strong>
                <ul>
                    <li>• Created a blackjack game using the Deck of Cards API.</li>
                    <li>• Custom animations using CSS keyframes for card movements.</li>
                    <li>• Fun and engaging gaming experience without real money transactions.</li>
                </ul>
                <strong>Collaboration:</strong>
                <ul>
                    <li>• Team of three.</li>
                    <li>• Utilized Git and GitHub for version control and collaboration.</li>
                    <li>• Managed project tasks and workflow using Trello for task distribution.</li>
                    <li>• Employed Figma to create wireframes and diagrams..</li>
                </ul>
            </small>
        `,
        shortdesc:
            `Single player blackjack card game <br>
            <strong>
                (November 2023 – December 2023)
            </strong><br/>
            JavaScript, HTML, CSS<br/>
            Deployed using Google Firebase`,
        images: ["images/Casino/Casino1.jpg", "images/Casino/Casino2.jpg", "images/Casino/Casino3.jpg", "images/Casino/Casino4.jpg", "images/Casino/Casino5.jpg", "images/Casino/Casino6.jpg", "images/Casino/Casino7.jpg"],
        imgRef: ["casinoImg1", "casinoImg2", "casinoImg3", "casinoImg4", "casinoImg5", "casinoImg6", "casinoImg7"]
    },
    {
        title: "Smiley Matching Game",
        url: "https://davidross-matching-game.web.app/",
        description:
            `<strong>
                Find the extra smiley!<br/> Race against the clock or play forever.
            </strong><br/>
            JavaScript, HTML, CSS<br/>
            <small>
                <strong>Features:</strong>
                <ul>
                    <li>• Matching game that challenges users to identify the extra smiley in a set.</li>
                    <li>• Multiple difficulty levels, sound effects, and varied smiley designs to enhance gameplay.</li>
                    <li>• Utilized direct DOM manipulation for dynamic content rendering.</li>
                </ul>
            </small>`,
        shortdesc:
            `Find the extra smiley. Race against the clock or play forever. Multiple difficulty levels. <br>
            <strong>
                (November 4, 2023 – November 11, 2023)
            </strong><br/>
            JavaScript, HTML, CSS<br/>
            Deployed using Google Firebase`,
        images: ["images/Matching/matching1.jpg", "images/Matching/matching2.jpg", "images/Matching/matching3.jpg"],
        imgRef: ["matchImg1", "matchImg2", "matchImg3"]
    },
    {
        title: "Nucamp",
        url: "https://davidross-nucampsite-01.web.app/",
        description:
            `<strong>
            Campsite registration website
        </strong><br/>
        Bootstrap, HTML, CSS<br/>
        <small>
            <strong>Features:</strong>
            <ul>
                <li>• User-friendly campsite registration website.</li>
                <li>• Intuitive interface using Bootstrap.</li>
                <li>• Register for campsites accommodating different group sizes.</li>
                <li>• Responsive web design across devices.</li>
            </ul>
        </small>`,
        shortdesc:"A full front-end website including campsite registration and more.<br/>Utilizes Bootstrap framework, HTML, CSS",
        images: ["../images/Nucamp/nucamp1.jpg", "images/Nucamp/nucamp2.jpg", "images/Nucamp/nucamp3.jpg"],
        imgRef: ["ncImg1", "ncImg2", "ncImg3"]
    },
    {
        title: "Dark Themed Coffee Shop",
        url: "https://davidross-coffee-shop-1.web.app/",
        description:
        `A simple landing page for a coffee website<br/>
        <strong>
            (November 8, 2023)
        </strong><br/>
        I learned flexbox styling and the bootstrap framework and applied it to this page.<br/>
        This site utilizes mobile first design and viewport adjustments using bootstrap for media query breakpoints.
        Dark themes work so well sometimes so I decided to apply it here. I also utilized gradients across objects for definition without hard borders.<br/>
        `,
        images: ["../images/Coffee_Shop/Coffee_01.jpg"],
        imgRef: ["coffeeImg1"]

    },
    {
        title: "CSS Cafe",
        url: "https://davidross-css-cafe.web.app/",
        description: 
        `This was actually my first page created using HTML and CSS.<br/>
        <strong>
            (October 3, 2023)
        </strong><br/>
        I've left it here to remind myself of how far I've come since then.<br/>
        At the time I didn't know about flexbox styling so I used the float property to make the windows stack side by side.
        However, this was when created the translucent rounded windows that I continue to use for everything today! XD`,
        shortdesc:"This was actually my first page created using HTML and CSS.<br/>I've left it here to remind myself of how far I've come since then.",
        images: ["images/Corner_Cafe/CSS-Cafe.jpg"],
        imgRef: ["cssCImg1"]
    },
];


export const resumeDownload = 'https://docs.google.com/document/d/1RXhsA85jUTFzgGeLHKJ0nQ22AZmTphr0/edit?usp=sharing&ouid=113642822992613418451&rtpof=true&sd=true';
export const navList = {
    "index":
        [
            {
                title: "Home",
                url: "#"
            },
            {
                title: "About",
                url: "#intro"
            },
            {
                title: "Skills",
                url: "#details"
            },
            {
                title: "Projects",
                url: "./projectlist.html"
            },
            {
                title: "Contact",
                url: "#footer"
            },
            {
                title: "Resumé",
                url: resumeDownload,
            },
        ]
    ,
    "projectdisplay":
        [
            {
                title: "Home",
                url: "index.html"
            },
            {
                title: "About",
                url: "index.html#intro"
            },
            {
                title: "Skills",
                url: "index.html#details"
            },
            {
                title: "Projects",
                url: "projectlist.html"
            },
            {
                title: "Contact",
                url: "#footer"
            },
            {
                title: "Resumé",
                url: resumeDownload,
            },
        ]
    ,
    "projectlist":
        [
            {
                title: "Home",
                url: "index.html"
            },
            {
                title: "About",
                url: "index.html#intro"
            },
            {
                title: "Skills",
                url: "index.html#details"
            },
            {
                title: "Projects",
                url: "#"
            },
            {
                title: "Contact",
                url: "#footer"
            },
            {
                title: "Resumé",
                url: resumeDownload,
            },
        ]
}