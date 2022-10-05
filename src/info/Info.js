import self from "../img/self.jpg"
import mock1 from "../img/pp.png"
import mock2 from "../img/geon.png"
import mock3 from "../img/jump.png"

export let colors = ["#15DB95", "rgb(166,104,255)"];

export const info = {
    firstName: "Jules",
    lastName: "Finck",
    initials: "jf",
    position: "Développeur Full Stack",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '🌎',
            text: 'basé à Chambéry, FR'
        },
        {
            emoji: "💼",
            text: "recherche un stage"
        },
        {
            emoji: "📧",
            text: "jules.finck@hotmail.fr"
        }
    ],
    socials: [
        {
            link: "https://github.com/copsfuraxx",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/jules-finck-a82182183/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }

    ],
    bio: "Je suis un étudiant en master informatique à l'USMB.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'mysql', 'nodejs', 'java', 'html/css', 'C#', 'php', 'unity/godot'],
            exposedTo: ['C/C++', 'python', 'NEO4J']
        }
    ,
    hobbies: [
        {
            label: 'jeux video',
            emoji: '🎮'
        },
        {
            label: 'escalade',
            emoji: '🥾'
        },
        {
            label: 'film/serie',
            emoji: '🎥'
        },
        {
            label: 'culture japonaise',
            emoji: '🌸'
        }
    ],
    portfolio: [
        {
            title: "ParrotProject",
            live: "https://youtu.be/4kcpkQmy4W8",
            source: "https://github.com/copsfuraxx/ParrotProject",
            image: mock1
        },
        {
            title: "Geon",
            live: "https://eispri-stic.gitlab.io/tuto-godot-1-flappybird-rendus/Pages/FlappyBird_Jules_Finks.html",
            source: "https://github.com/copsfuraxx/Project2DClubInfo",
            image: mock2
        },
        {
            title: "MiniJeuxJump",
            live: "https://julesfinck.alwaysdata.net/jeux.html",
            source: "https://github.com/copsfuraxx/MiniJeuxJump",
            image: mock3
        }
    ]
}
