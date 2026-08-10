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
    desc: 'A full-stack book reading application. The app uses a custom web scraper to feed book data into a Supabase database. The React frontend displays the collection, while browser LocalStorage and the supabase database saves a users progress in a book and saves favorites.',
    tags: ['React', 'Node.js', 'Web-scraping', 'PostgreSQL', 'supabase'],
    link: 'https://book-site-six-zeta.vercel.app',
    github: 'https://github.com/OliverBarta/Book-Site',
    images: [bookSiteImg,bookSiteShadowSlave],
    imageOrientation: 'carousel',
  },
  {
    title: 'Workout App',
    desc: 'Coming soon - A full-featured iOS workout app built with Swift, letting users build custom routines, track sets and rest timers during live workouts, log completed sessions to history, and follow friends to see their activity or copy their workouts — with a Supabase backend for accounts, syncing, and a social leaderboard.',
    tags: ['Swift','Xcode','PostgreSQL','supabase'],
    link: '',
    github: 'https://github.com/OliverBarta/WorkoutApp',
    images: [workoutAppRoutine, workoutAppExplore, workoutAppAddExercise],
    imageOrientation: 'horizontal',
  },
  {
    title: 'Move Strong',
    desc: 'Move Strong is a curated, searchable directory of exercise programs for older adults in Ontario, Canada. Built as a React app, it helps older adults, clinicians, and caregivers find community exercise classes, virtual coaching, and disease-specific programs filtered by city, goals, budget, and health conditions. The dataset combines information scraped from Healthline and GoodLife Fitness.',
    tags: ['React', 'Vite', 'Health-tech', 'Web-scraping'],
    link: 'https://oliverbarta.github.io/moveStrong/',
    github: 'https://github.com/OliverBarta/moveStrong',
    images: [activeAgingImg],
    imageOrientation: 'vertical',
  },
  {
    title: 'NOTHINGG',
    desc: 'A full-stack e-commerce clothing website using a Node.js backend, React frontend, and Supabase database. Using Supabase I made a secure authentication system allowing authorized administrators to dynamically add, edit, and remove products. The admin system built in a custom management interface so admins never have to interact with the database or any code.',
    tags: ['React', 'Vite', 'Node.js', 'JavaScript', 'PostgreSQL', 'supabase'],
    link: 'https://oliverbarta.github.io/NOTHINGG/',
    github: 'https://github.com/OliverBarta/NOTHINGG',
    images: [nothinggImg],
    imageOrientation: 'vertical',
  },
  {
    title: 'UFC Fighter',
    desc: 'A comprehensive web app for exploring a database of every UFC fighter, their stats, fight history, and rankings. With images of fighters found using the Wikipedia API.',
    tags: ['API', 'CSV parsing'],
    link: 'https://oliverbarta.github.io/UFC-fighter/',
    github: 'https://github.com/OliverBarta/UFC-fighter',
    images: [ufcFighterImg],
    imageOrientation: 'vertical',
  },
]
