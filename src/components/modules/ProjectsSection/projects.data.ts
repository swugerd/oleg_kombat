import discordBotImg from '@/../public/img/discord-bot.jpeg'
import eCommerceImg from '@/../public/img/e-commerce.jpg'
import socialImg from '@/../public/img/social-network.jpg'
import videoHostingImg from '@/../public/img/video-hosting.jpg'

export const projects = [
  {
    tKeyName: 'projects.project1.name',
    tKeyDesc: 'projects.project1.description',
    img: socialImg,
    stack: ['React', 'Typescript', 'Redux', 'Socket.io', 'Nest', 'Sequelize'],
    link: 'https://github.com/swugerd/colloquy',
  },
  {
    tKeyName: 'projects.project2.name',
    tKeyDesc: 'projects.project2.description',
    img: videoHostingImg,
    stack: ['Next', 'Typescript', 'Zustand', 'Nest', 'Graphql', 'Prisma'],
    link: 'https://github.com/swugerd/wave',
  },
  {
    tKeyName: 'projects.project3.name',
    tKeyDesc: 'projects.project3.description',
    img: discordBotImg,
    stack: ['Typescript', 'Discord.js', 'ytdl'],
    link: 'https://github.com/swugerd/skuf-bot',
  },
  {
    tKeyName: 'projects.project4.name',
    tKeyDesc: 'projects.project4.description',
    img: eCommerceImg,
    stack: ['Next', 'Typescript', 'Nest', 'Effector', 'Mongo DB'],
    link: 'https://github.com/swugerd/rostelecom-shop',
  },
]
