# Portfólio — João Victor Carvalho

> Documentação completa do projeto de portfólio pessoal.
> **Site:** https://joaokrv.github.io/portf-lio/
> **Repositório:** https://github.com/joaokrv/portf-lio

---

## Sumário

1. [Sobre o desenvolvedor](#1-sobre-o-desenvolvedor)
2. [Habilidades](#2-habilidades)
3. [Experiência profissional](#3-experiência-profissional)
4. [Formação acadêmica](#4-formação-acadêmica)
5. [Projetos](#5-projetos)
6. [Contato](#6-contato)
7. [Sobre o portfólio (este projeto)](#7-sobre-o-portfólio-este-projeto)
8. [Arquitetura e stack](#8-arquitetura-e-stack)
9. [Identidade visual](#9-identidade-visual)
10. [Estrutura de pastas](#10-estrutura-de-pastas)
11. [Internacionalização](#11-internacionalização)
12. [Como rodar localmente](#12-como-rodar-localmente)
13. [Deploy](#13-deploy)
14. [Decisões técnicas](#14-decisões-técnicas)

---

## 1. Sobre o desenvolvedor

**João Victor Carvalho** — Engenheiro de Software em formação, baseado em Belo Horizonte, Brasil.

**Frase pessoal:** *"Em constante evolução."*

**Filosofia de código:** Arquitetura bem pensada e simplicidade para resolver problemas reais. Cada decisão técnica tem uma razão — sem código por código, sem abstrações para "futuro hipotético".

**Resumo:** Estudante de Engenharia de Software no 6º período pela UniBH (Campus Buritis) e estagiário em desenvolvimento na **Group Software** desde julho de

---

## 14. Decisões técnicas

### Por que HashRouter e não BrowserRouter?

GitHub Pages serve arquivos estáticos. Com `BrowserRouter`, rotas como `/sobre` retornam 404 quando o usuário recarrega a página. `HashRouter` evita isso usando o hash da URL (`/#/sobre`), que o servidor ignora.

### Por que SVGs inline para ícones sociais?

`lucide-react` não tem ícones de GitHub, LinkedIn ou Instagram (são marcas registradas). Criei SVGs inline em `SocialIcons.tsx` para manter coerência visual e evitar dependências externas.

### Por que `scrollIntoView` customizado em vez de âncoras?

Com `HashRouter`, links âncora como `href="#sobre"` ficam `/#/#sobre` — o que quebra a navegação. Implementei `scrollToSection()` que faz `window.scrollTo` suave com offset do header fixo.

### Por que Tailwind 4 e não 3?

Tailwind 4 traz:
- Sintaxe `@theme` mais simples para variáveis CSS
- Plugin Vite nativo (`@tailwindcss/vite`)
- Build mais rápido
- Sem `tailwind.config.ts` obrigatório

### Por que `@fontsource` em vez de Google Fonts CDN?

- Performance: fontes vêm como módulos do bundle, sem requests externos
- Privacidade: sem rastreamento do Google
- Offline-first: funciona sem rede após o primeiro load

### Por que dark mode como padrão?

O tema roxo escuro é a identidade visual do portfólio. O light mode mantém o lilás na base (`#F5F4FB`) para preservar a personalidade mesmo no claro.

### Por que noise texture só no dark?

No dark, o fundo `#08080F` fica visualmente "morto". O noise (3,5% de opacidade) adiciona vida sutil sem distrair. No light, o lilás já tem personalidade suficiente.

---

**Última atualização:** Maio de 2026
**Versão do documento:** 1.0
