import { 
  Briefcase, 
  Palette, 
  Code, 
  MessageCircle, 
  Play, 
  Shield, 
  Settings, 
  Cloud, 
  DollarSign, 
  BookOpen 
} from 'lucide-react';

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: typeof Briefcase;
  color: string;
  count: number;
}

export const categories: Category[] = [
  {
    slug: 'bureautique',
    name: 'Bureautique',
    description: 'Alternatives aux suites bureautiques pour la productivité quotidienne',
    icon: Briefcase,
    color: 'blue',
    count: 12,
  },
  {
    slug: 'creativite',
    name: 'Créativité',
    description: 'Logiciels de design, montage vidéo et création graphique',
    icon: Palette,
    color: 'pink',
    count: 15,
  },
  {
    slug: 'developpement',
    name: 'Développement',
    description: 'IDE, éditeurs de code et outils de développement',
    icon: Code,
    color: 'violet',
    count: 18,
  },
  {
    slug: 'communication',
    name: 'Communication',
    description: 'Messagerie, visioconférence et outils collaboratifs',
    icon: MessageCircle,
    color: 'green',
    count: 10,
  },
  {
    slug: 'multimedia',
    name: 'Multimédia',
    description: 'Lecteurs multimédia, streaming et gestion de médias',
    icon: Play,
    color: 'red',
    count: 8,
  },
  {
    slug: 'securite',
    name: 'Sécurité',
    description: 'Antivirus, VPN et outils de protection de la vie privée',
    icon: Shield,
    color: 'cyan',
    count: 9,
  },
  {
    slug: 'systeme',
    name: 'Système',
    description: 'Utilitaires système et optimisation PC',
    icon: Settings,
    color: 'orange',
    count: 14,
  },
  {
    slug: 'cloud',
    name: 'Cloud & Stockage',
    description: 'Solutions de stockage cloud et synchronisation',
    icon: Cloud,
    color: 'blue',
    count: 11,
  },
];

export const featuredCategories = categories.filter((c) => ['developpement', 'bureautique', 'creativite', 'communication'].includes(c.slug));
