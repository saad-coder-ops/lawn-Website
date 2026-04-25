import {
  FaBroom,
  FaDroplet,
  FaLeaf,
  FaRegSun,
  FaSeedling,
} from 'react-icons/fa6'
import gardenDesignCard from '../assets/garden-design-card.png'
import lawnMaintenanceCard from '../assets/lawn-maintenance-card.png'
import pastWork1 from '../assets/past-work-1.png'
import pastWork2 from '../assets/past-work-2.png'
import pastWork3 from '../assets/past-work-3.png'
import pastWork4 from '../assets/past-work-4.png'
import pastWork5 from '../assets/past-work-5.png'
import pastWork6 from '../assets/past-work-6.png'

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const services = [
  {
    title: 'Lawn Maintenance',
    description:
      'Routine mowing, edging, and nutrient care to keep your lawn healthy, lush, and perfectly manicured year-round.',
    icon: FaLeaf,
    image: lawnMaintenanceCard,
  },
  {
    title: 'Garden Design',
    description:
      'Tailored landscape concepts that blend elegant planting, pathways, and focal features for premium outdoor living.',
    icon: FaSeedling,
    image: gardenDesignCard,
  },
  {
    title: 'Seasonal Planting',
    description:
      'Season-specific planting plans that introduce fresh color palettes and thriving blooms throughout every season.',
    icon: FaRegSun,
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Irrigation Setup',
    description:
      'Smart irrigation planning and installation to protect your landscape while reducing water waste and maintenance costs.',
    icon: FaDroplet,
    image:
      'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Outdoor Cleaning & Styling',
    description:
      'Comprehensive exterior refresh services including pressure cleaning, detailing, and final styling for a polished finish.',
    icon: FaBroom,
    image:
      'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?auto=format&fit=crop&w=1200&q=80',
  },
]

export const showcaseLawns = [
  {
    title: 'Modern Villa Lawn',
    place: 'Toorak, Melbourne',
    image:
      'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Luxury Garden Courtyard',
    place: 'Southbank, Melbourne',
    image:
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Resort Style Backyard',
    place: 'Gold Coast, QLD',
    image:
      'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=80',
  },
]

export const pastWorks = [
  { image: pastWork1, title: 'Front Yard Lawn Installation' },
  { image: pastWork2, title: 'Side Garden Turf & Border Design' },
  { image: pastWork3, title: 'Residential Turf Shaping Project' },
  { image: pastWork4, title: 'Street Facing Landscape Upgrade' },
  { image: pastWork5, title: 'Irrigation and Lawn Performance Setup' },
  { image: pastWork6, title: 'Modern Front Lawn Transformation' },
]

export const testimonials = [
  {
    name: 'Emily Thompson',
    location: 'Melbourne, AU',
    quote:
      'Lawnistry Green completely transformed our garden into a space that feels like a boutique resort.',
  },
  {
    name: 'Daniel Foster',
    location: 'Brisbane, AU',
    quote:
      'Professional, punctual, and meticulous. Their team elevated the entire look of our property within weeks.',
  },
  {
    name: 'Sophie Walker',
    location: 'Perth, AU',
    quote:
      'The design quality and lawn finish are exceptional. We finally have the outdoor space we dreamed of.',
  },
]

export const premiumStats = [
  { value: '1,250+', label: 'Lawns Revitalized' },
  { value: '98%', label: 'Client Retention Rate' },
  { value: '24h', label: 'Average Response Time' },
  { value: '12+', label: 'Years Team Experience' },
]

export const processSteps = [
  {
    title: 'On-Site Assessment',
    detail:
      'We inspect soil health, drainage, sunlight exposure, and current landscape structure.',
  },
  {
    title: 'Tailored Landscape Plan',
    detail:
      'You receive a clear, premium treatment plan with service milestones and visual direction.',
  },
  {
    title: 'Precision Execution',
    detail:
      'Our specialists execute each phase with detail-focused workmanship and quality control.',
  },
  {
    title: 'Ongoing Maintenance',
    detail:
      'We maintain performance with proactive seasonal care and routine quality checks.',
  },
]
