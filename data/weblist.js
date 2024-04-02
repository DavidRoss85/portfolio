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
        images: ["images/NewsApp/NewsApp1.png","images/NewsApp/NewsApp2.png","images/NewsApp/NewsApp3.png","images/NewsApp/NewsApp4.png"],
        imgRef: ["newsImg1","newsImg2","newsImg3","newsImg4"]
    },
    {
        title: "Casino Blackjack",
        url: "https://davidross-casino.web.app/",
        description:
        `<strong>
            Single player Casino blackjack
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
        images: ["images/Casino/Casino1.png","images/Casino/Casino2.png","images/Casino/Casino3.png","images/Casino/Casino4.png","images/Casino/Casino5.png","images/Casino/Casino6.png","images/Casino/Casino7.png"],
        imgRef: ["casinoImg1","casinoImg2","casinoImg3","casinoImg4","casinoImg5","casinoImg6","casinoImg7"]
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
        images: ["images/Matching/matching1.png","images/Matching/matching2.png","images/Matching/matching3.png"],
        imgRef: ["matchImg1","matchImg2","matchImg3"]
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
        images:["../images/Nucamp/nucamp1.png","images/Nucamp/nucamp2.png","images/Nucamp/nucamp3.png"],
        imgRef: ["ncImg1","ncImg2","ncImg3"]
    },
    {
        title: "Dark Themed Coffee Shop",
        url: "https://davidross-coffee-shop-1.web.app/",
        description:"Feeling thirsty? Need a pick-me-up? Check out this template for a coffee shop.",
        images:["../images/Coffee_Shop/Coffee_01.png"],
        imgRef: ["coffeeImg1"]

    },
    {
        title: "CSS Cafe",
        url: "https://davidross-css-cafe.web.app/",
        description:"This is a fictional website displaying a menu with various items. Site created using HTML, CSS, and Bootstrap classes.",
        images: ["images/Corner_Cafe/CSS-Cafe.png"],
        imgRef: ["cssCImg1"]
    },
];

export const navList ={
    "index": 
        [
            {
                title:"Home",
                url: "#"
            },
            {
                title:"About",
                url: "#intro"
            },
            {
                title:"Skills",
                url: "#details"
            },
            {
                title:"Projects",
                url: "#projects"
            },
            {
                title:"Contact",
                url: "#footer"
            }
        ]
    ,
    "projectdisplay": 
        [
            {
                title:"Home",
                url: "index.html"
            },
            {
                title:"About",
                url: "index.html#intro"
            },
            {
                title:"Skills",
                url: "index.html#details"
            },
            {
                title:"Projects",
                url: "projectlist.html"
            },
            {
                title:"Contact",
                url: "#footer"
            }
        ]
    ,
    "projectlist": 
        [
            {
                title:"Home",
                url: "index.html"
            },
            {
                title:"About",
                url: "index.html#intro"
            },
            {
                title:"Skills",
                url: "index.html#details"
            },
            {
                title:"Projects",
                url: "#"
            },
            {
                title:"Contact",
                url: "#footer"
            }
        ]
}