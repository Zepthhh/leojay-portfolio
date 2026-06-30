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

export const navItems = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact']

export const stats = [
  { label: 'Projects Completed', value: '5+' },
  { label: 'Technologies Learned', value: '20+' },
  { label: 'Capstone Completed', value: '1' },
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
    subtitle: 'AI-Powered Rodent Detection and Monitoring System',
    status: 'Featured Capstone Project',
    description:
      'RODWAY is an AI-powered rodent detection and monitoring system developed as a BSIT capstone project. It combines Artificial Intelligence, IoT, and real-time monitoring to detect rodent activity, monitor trap performance, and send instant updates through web and mobile applications.',
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
    tech: ['Laravel', 'PHP', 'MySQL', 'Supabase', 'YOLOv8', 'ESP32-CAM', 'Flutter', 'GitHub'],
    image: '/rodway-dashboard.png',
    gallery: ['/rodway-dashboard.png', '/rodway-reports.png', '/rodway-mobile-dashboard.png'],
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
    title: 'Expense Tracker Mobile App',
    subtitle: 'Budgeting and Insight Tool',
    status: 'Mobile Application',
    description:
      'A mobile app that helps users manage daily expenses through category tracking, budgeting, reports, and simple financial insights.',
    impact: 'Focused on practical, quick daily expense entry and readable summaries.',
    features: ['Category tracking', 'Budgeting', 'Reports', 'Financial insights'],
    tech: ['React Native', 'Supabase'],
    github: '#',
  },
  {
    title: 'E-Commerce Website',
    subtitle: 'Responsive Shopping Platform',
    status: 'Web Application',
    description:
      'An online shopping platform featuring authentication, a product catalog, shopping cart, checkout flow, and responsive layouts.',
    impact: 'Demonstrates core commerce workflows from browsing through checkout.',
    features: ['Authentication', 'Product catalog', 'Shopping cart', 'Checkout process', 'Responsive design'],
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    github: '#',
  },
  {
    title: 'Barangay Management System',
    subtitle: 'Desktop Records Application',
    status: 'Desktop Application',
    description:
      'A desktop application for managing barangay records, residents, and administrative services using C# and MySQL.',
    impact: 'Supports organized local record keeping and administrative access.',
    features: ['Resident records', 'Administrative services', 'Desktop workflows', 'Database storage'],
    tech: ['C#', 'MySQL'],
    github: '#',
  },
]
