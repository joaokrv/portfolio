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
    description: 'Plataforma de treino e nutrição personalizada com IA.',
    longDescription:
      'Frontend em React 19 + backend FastAPI integrado ao Google Gemini 2.0 Flash. Gera planos de treino e nutrição com sistema de feedback adaptativo. Deploy em Vercel + Render.',
    status: 'academic',
    stack: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Google Gemini', 'Recharts'],
    links: {
      githubFrontend: 'https://github.com/joaokrv/front_ai_can',
      githubBackend: 'https://github.com/joaokrv/backend_ai_can',
      live: 'https://aican-seven.vercel.app/',
    },
    featured: false,
    highlights: [
      'Backend assíncrono com FastAPI e SQLAlchemy — deploy na Render',
      'Frontend em React 19 com TypeScript, Vite e Recharts para visualização de progresso',
      'Sanitização contra prompt injection nas entradas do usuário',
      'Rate Limiting via SlowAPI — proteção contra abuso da API de IA',
    ],
  },
  {
    id: 'mapa',
    name: 'Mapa Faculdade',
    description: 'Sistema de navegação interativa para o campus universitário.',
    longDescription:
      'Cálculo de rotas, busca de locais, compartilhamento via WhatsApp e tema claro/escuro. Desenvolvido para facilitar a vida de calouros e visitantes. Deploy ativo na Vercel.',
    status: 'academic',
    stack: ['JavaScript', 'Leaflet.js', 'OpenStreetMap', 'OpenRouteService', 'Node.js', 'Express'],
    links: {
      github: 'https://github.com/joaokrv/mapa',
      live: 'https://mapa-two.vercel.app',
    },
    featured: false,
    highlights: [
      'Visualização interativa do campus com Leaflet.js e OpenStreetMap',
      'Cálculo dinâmico de rotas via OpenRouteService API',
      'Backend Express no Render + frontend na Vercel — deploy ativo',
    ],
  },
]
