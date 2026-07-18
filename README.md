# Apresentação Estratégica — Ralph Gracie (CampaignOS)

Slides interativos em Next.js para apresentar ao candidato o estudo completo:
metodologia (CampaignOS + frameworks), diagnóstico de mercado, a virada
Formador → Protetor, posicionamento final e conclusões.

## Rodar

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Navegação

- `→` / `↓` / `espaço` / `Enter` — próximo slide
- `←` / `↑` — slide anterior
- `Home` / `End` — primeiro / último slide
- Clique nas bordas laterais da tela ou nos botões do rodapé

## Estrutura

- `src/components/deck/Deck.tsx` — motor de navegação (teclado, progresso, contador)
- `src/components/deck/slides.tsx` — os 27 slides com todo o conteúdo
  (inclui matrizes competitivas, dados públicos verificados, base teórica,
  Visual DNA, imagem-âncora e Digital DNA)
- `src/components/deck/primitives.tsx` — blocos visuais reutilizáveis
- `src/app/globals.css` — paleta (azul #123B6A, coral #F46A4E) e animações

## Identidade visual

Segue o Visual DNA (Documento 26): azul escuro dominante, coral como acento
(nunca dominante), tipografia Montserrat.
