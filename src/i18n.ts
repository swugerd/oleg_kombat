import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        notFoundBtn: 'Вернуться на главную',
        titles: {
          about: 'Обо мне',
          workExperience: 'Опыт работы',
          projects: 'Проекты',
        },
        main: {
          title: 'Привет, я Олег',
          subTitle: 'Full-Stack - Разработчик',
          description:
            'Я Full-stack разработчик. В настоящее время я работаю Front-end разработчиком',
          resumeBtn: 'Резюме',
        },
        about: {
          title: 'Немного расскажу про себя и чем я занимаюсь',
          description:
            'Я начал увлекаться веб разработкой и программированием с 18 лет. Изначально я не знал чем хотел заниматься в жизни, и решил попробовать себя в разработке. До сих пор я считаю, что не прогадал с выбором',
          subDescription:
            'В свободное от работы или учебы время, обычно играю в игры или отдыхаю с друзьями. Также увлекаюсь тематикой компьютеров, а именно их комплектующими и сборкой',
          skills:
            'Учиться я привык самостоятельно, поэтому изучая что-то новое я ищу информацию и пытаюсь разобраться в ней сам. За время моего обучения я изучил много интересных и полезных технологий, которые использую и по сей день',
        },
        workExperience: {
          title: 'Мой опыт работы',
          company1: {
            name: 'Альфаматика',
            post: 'Junior Front-end разработчик',
          },
        },
        projects: {
          title: 'Мои проекты',
          stack: 'Стек',
          moreBtn: 'Подробнее',
          project1: {
            name: 'Социальная сеть',
            description:
              'Мой первый проект на React и Nest, был написан на 4 курсе для дипломной работы',
          },
          project2: {
            name: 'Видеохостинг',
            description:
              'Масштабный проект, который всё ещё находится в разработке (На данный момент практически готова только серверная часть)',
          },
          project3: {
            name: 'Дискорд бот',
            description: 'Бот для прослушивания музыки через ютуб',
          },
          project4: {
            name: 'Интернет магазин',
            description:
              'Учебный проект, в котором я учился использовать новые технологии',
          },
        },
        footer: {
          design: 'Дизайн разработал',
          designAuthor: 'Никита Шишков',
        },
      },
    },
    en: {
      translation: {
        notFoundBtn: 'Back to the main page',
        titles: {
          about: 'About me',
          workExperience: 'Work Experience',
          projects: 'Projects',
        },
        main: {
          title: 'Hello, my name is Oleg',
          subTitle: 'I am Full-Stack - web developer',
          description:
            'I am Full-stack web developer. I am currently working as front end web developer',
          resumeBtn: 'Resume',
        },
        about: {
          title: `I'll tell you a little about myself and what I do`,
          description: `I started getting interested in web development and programming when I was 18 years old. Initially, I didn't know what I wanted to do in life, and decided to try my hand at development. I still think I made the right choice`,
          subDescription:
            'In my free time from work or study, I usually play games or relax with friends. I am also interested in the subject of computers, namely their components and assembly',
          skills: `I'm used to learning on my own, so when learning something new, I look for information and try to figure it out myself. During my studies, I learned many interesting and useful technologies that I still use to this day`,
        },
        workExperience: {
          title: 'My work experience',
          company1: {
            name: 'Alphamatica',
            post: 'Junior Front-end developer',
          },
        },
        projects: {
          title: 'My projects',
          stack: 'Stack',
          moreBtn: 'More',
          project1: {
            name: 'Social Network',
            description:
              'My first project on React and Nest, was written in the 4th year for a graduate work',
          },
          project2: {
            name: 'Video hosting',
            description:
              'A large-scale project that is still in development (At the moment, only the server side is almost ready)',
          },
          project3: {
            name: 'Discord bot',
            description: 'Bot for listening to music via YouTube',
          },
          project4: {
            name: 'E commerce',
            description:
              'A learning project in which I learned to use new technologies',
          },
        },
        footer: {
          design: 'Design developed',
          designAuthor: 'Nikita Shishkov',
        },
      },
    },
  },
  lng: 'ru',
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
