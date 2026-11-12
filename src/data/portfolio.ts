import {
  FaAndroid,
  FaBootstrap,
  FaCss3Alt,
  FaDatabase,
  FaFigma,
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaLaravel,
  FaPhp,
  FaReact,
} from 'react-icons/fa'
import {
  SiArduino,
  SiJavascript,
  SiMysql,
  SiPostman,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiFlutter,
} from 'react-icons/si'
import type { IconType } from 'react-icons'
import { TbApi, TbBrandCSharp, TbDeviceMobile, TbRobot } from 'react-icons/tb'
import { VscVscode } from 'react-icons/vsc'

export const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']

export const stats = [
  { label: 'Academic Projects', value: '3' },
  { label: 'OJT Hours Completed', value: '488' },
  { label: 'Capstone Recognition', value: 'Top 3' },
]

type SkillItem = [string, IconType]

type SkillGroup = {
  title: string
  items: SkillItem[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: [
      ['HTML', FaHtml5],
      ['CSS', FaCss3Alt],
      ['JavaScript', SiJavascript],
      ['TypeScript', SiTypescript],
      ['React', FaReact],
      ['Tailwind CSS', SiTailwindcss],
      ['Bootstrap', FaBootstrap],
    ],
  },
  {
    title: 'Backend',
    items: [
      ['PHP', FaPhp],
      ['Laravel', FaLaravel],
      ['REST API', TbApi],
      ['MySQL', SiMysql],
      ['Supabase', SiSupabase],
    ],
  },
  {
    title: 'Mobile and IoT',
    items: [
      ['React Native', FaReact],
      ['Flutter', SiFlutter],
      ['ESP32-CAM', TbDeviceMobile],
      ['YOLOv8', TbRobot],
    ],
  },
  {
    title: 'Tools',
    items: [
      ['Git', FaGitAlt],
      ['GitHub', FaGithub],
      ['VS Code', VscVscode],
      ['Android Studio', FaAndroid],
      ['Arduino IDE', SiArduino],
      ['Postman', SiPostman],
      ['Figma', FaFigma],
    ],
  },
  {
    title: 'Database and Desktop',
    items: [
      ['MySQL', FaDatabase],
      ['Supabase', SiSupabase],
      ['C#', TbBrandCSharp],
      ['Java', FaJava],
    ],
  },
]

export const projects = [
  {
    title: 'RODWAY',
    subtitle: 'IoT-Based Smart Rodent Trap Monitoring System',
    status: 'Featured Capstone Project',
    description:
      'RODWAY is an IoT-based monitoring system developed as a BSIT capstone project to detect rodent activity in agricultural areas. I designed and developed its web dashboard for real-time monitoring, reporting, data visualization, and notifications.',
    impact:
      'Designed to replace manual inspection with automated image detection, centralized monitoring, analytics, and responsive tools for field visibility.',
    features: [
      'AI-powered rodent detection using YOLOv8',
      'ESP32-CAM image capture',
      'IoT trap monitoring',
      'User authentication',
      'Web dashboard',
      'Mobile application',
      'Real-time notifications',
      'Analytics dashboard',
      'Reports and capture history',
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'IoT', 'GitHub'],
    image: './rodway-dashboard.png',
    gallery: ['./rodway-dashboard.png', './rodway-reports.png', './rodway-mobile-dashboard.png'],
    live: 'https://rodway.dsscebamboo.com/',
    github: '#',
    featured: true,
  },
  {
    title: 'Document Management System',
    subtitle: 'Approval and Tracking Platform',
    status: 'Web Application',
    description:
      'A web-based document management system for incoming and outgoing documents with user submission, administrator approval, tracking, search, filtering, and secure record management.',
    impact: 'Creates clearer document workflows for users and administrators.',
    features: ['Incoming documents', 'Outgoing documents', 'Admin dashboard', 'Approval workflow', 'Tracking', 'Search', 'Filtering'],
    tech: ['Laravel', 'PHP', 'MySQL'],
    github: '#',
  },
  {
    title: 'Personal Portfolio Website',
    subtitle: 'Responsive Developer Portfolio',
    status: 'Personal Project',
    description:
      'A responsive personal portfolio that presents academic projects, technical skills, achievements, and contact details in a clear, polished experience.',
    impact: 'Designed as a living professional profile and deployed through GitHub Pages.',
    features: ['Responsive layout', 'Project case studies', 'Skills showcase', 'Contact form', 'GitHub Pages deployment'],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'GitHub Pages'],
    live: 'https://zepthhh.github.io/leojay-portfolio/',
    github: 'https://github.com/Zepthhh/leojay-portfolio',
  },
]
