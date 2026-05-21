export type ProjectStatus = 'active' | 'academic'

export interface Project {
  id: string
  name: string
  description: string
  longDescription: string
  status: ProjectStatus
  stack: string[]
  links: {
    github?: string
    githubFrontend?: string
    githubBackend?: string
    live?: string
  }
  featured: boolean
  highlights: string[]
}

export const projects: Project[] = [
  {
    id: 'equilibra',
    name: 'Equilibra',
    description: 'Sistema de controle financeiro pessoal que substituiu minha planilha.',
    longDescription:
      'Contas, cartões, faturas, transações e investimentos — tudo no mesmo lugar, com regras reais. Eu e minha família usamos diariamente. Totalmente gratuito.',
    status: 'active',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'TypeScript', 'Tailwind', 'JWT', 'Docker'],
    links: {
      githubBackend: 'https://github.com/joaokrv/backend_equilibra',
      githubFrontend: 'https://github.com/joaokrv/equilibra_frontend',
      live: 'https://equilibra-frontend.vercel.app/login',
    },
    featured: true,
    highlights: [
      'Lazy creation de faturas — geradas automaticamente na primeira transação do mês, sem pré-alocação',
      'Ghost closing inline — status da fatura atualizado na consulta, sem depender de job agendado',
      'Scheduler diário com ShedLock — protegido contra execução duplicada em múltiplas instâncias',
      'Optimistic Locking com @Version em contas, cartões e faturas — sem locks pessimistas',
      'Testes de integração com Testcontainers e PostgreSQL real — sem mocks de banco',
    ],
  },
  {
    id: 'aican',
    name: 'AICan',
    description: 'Gerador de planos de treino personalizados com IA.',
    longDescription:
      'Integração com Google Gemini para criar treinos e sugestões nutricionais baseados nos dados físicos e preferências do usuário. APIs gratuitas.',
    status: 'academic',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Google Gemini', 'JavaScript', 'HTML', 'CSS'],
    links: {
      github: 'https://github.com/joaokrv/backend_ai_can',
    },
    featured: false,
    highlights: [
      'Backend assíncrono com FastAPI (Python 3.10+) e SQLAlchemy',
      'Geração inteligente de treinos usando a API do Google Gemini 2.0 Flash',
      'Controle de abuso e segurança com Rate Limiting via SlowAPI'
    ],
  },
  {
    id: 'mapa',
    name: 'Mapa Faculdade',
    description: 'Sistema de navegação interativa para o campus universitário.',
    longDescription:
      'Cálculo de rotas, busca de locais, compartilhamento via WhatsApp e tema claro/escuro. Desenvolvido para facilitar a vida de calouros e visitantes.',
    status: 'academic',
    stack: ['JavaScript', 'Leaflet.js', 'OpenStreetMap', 'OpenRouteService', 'Node.js', 'CSS'],
    links: {
      github: 'https://github.com/joaokrv/mapa',
    },
    featured: false,
    highlights: [
      'Visualização interativa do campus com Leaflet.js e OpenStreetMap',
      'Cálculo dinâmico de trajetos usando a API do OpenRouteService',
      'Backend em Node.js com deploy na Render e frontend na Vercel'
    ],
  },
]
