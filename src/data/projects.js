import activeAgingImg from '../assets/activeAgingOntarioFindPrograms.png'
import bookSiteImg from '../assets/bookSiteHome.png'
import bookSiteLoginPage from '../assets/BookSiteLoginPage.png'
import bookSiteShadowSlave from '../assets/BookSiteShadowSlave.png'
import nothinggImg from '../assets/nothinggListing.png'
import ufcFighterImg from '../assets/ufcFighterComparison.png'
import workoutAppRoutine from '../assets/WorkoutAppRoutineImage.PNG'
import workoutAppExplore from '../assets/WorkoutAppExploreImage.PNG'
import workoutAppAddExercise from '../assets/WorkoutAppAddExerciseImage.PNG'

export const projects = [
  {
    title: 'Book Site',
    desc: 'A book reading website. I made a web scraper to get book data and put it into a database. All I need to add a new book is a link. The React frontend displays the collection, while browser LocalStorage and the database saves a users progress in a book and saves favorites. The database also stores all the comments and reactions (likes) to comments.',
    tags: ['React', 'Node.js', 'Web-scraping', 'PostgreSQL'],
    link: 'https://book-site-six-zeta.vercel.app',
    github: 'https://github.com/OliverBarta/Book-Site',
    images: [bookSiteImg,bookSiteShadowSlave, bookSiteLoginPage],
    imageOrientation: 'carousel',
  },
  {
    title: 'Workout App',
    desc: 'An iOS workout app built with Swift. With a database to allow users to see, react to, comment, and copy other people’s workout routines. I made a following system, so you can find friends, follow them, then see leaderboards for each exercise with all your friends competing.',
    tags: ['Swift','Xcode','PostgreSQL'],
    link: '',
    github: 'https://github.com/OliverBarta/WorkoutApp',
    images: [workoutAppRoutine, workoutAppExplore, workoutAppAddExercise],
    imageOrientation: 'horizontal',
  },
  {
    title: 'Move Strong',
    desc: 'Move Strong is a directory of exercise programs for older adults in Ontario, Canada. It helps older adults, clinicians, and caregivers find community exercise classes, virtual coaching, and disease-specific programs. The dataset combines information scraped from Healthline and GoodLife Fitness.',
    tags: ['React', 'Vite', 'Health-tech', 'Web-scraping'],
    link: 'https://oliverbarta.github.io/moveStrong/',
    github: 'https://github.com/OliverBarta/moveStrong',
    images: [activeAgingImg],
    imageOrientation: 'vertical',
  },
  {
    title: 'NOTHINGG',
    desc: 'An e-commerce clothing website. I made all the listings stored in a database and made a secure authentication system allowing authorized administrators to dynamically add, edit, and remove products.',
    tags: ['React', 'Vite', 'Node.js', 'JavaScript', 'PostgreSQL'],
    link: 'https://oliverbarta.github.io/NOTHINGG/',
    github: 'https://github.com/OliverBarta/NOTHINGG',
    images: [nothinggImg],
    imageOrientation: 'vertical',
  },
  {
    title: 'UFC Fighter',
    desc: 'A website for exploring a database of every UFC fighter, their stats, fight history, and rankings. With images of fighters found using the Wikipedia API.',
    tags: ['API', 'CSV parsing'],
    link: 'https://oliverbarta.github.io/UFC-fighter/',
    github: 'https://github.com/OliverBarta/UFC-fighter',
    images: [ufcFighterImg],
    imageOrientation: 'vertical',
  },
]
