# 🧠 KNOWLEDGE BASE: Visual, Performance & SEO
> Documento vivo para registro de aprendizados, comandos e padrões de excelência. Use este guia para garantir 90+ em Performance e Acessibilidade em todos os projetos.

---

## 🛠️ Guia de Comandos (Cheat Sheet)

### 1. Otimização de Imagens (WebP)
Converta imagens pesadas (PNG/JPG) para WebP de nova geração.
```bash
# Converter imagem única mantendo qualidade (q=75)
ffmpeg -i input.png -quality 75 output.webp

# Converter todas as PNGs de uma pasta (loop)
for file in *.png; do ffmpeg -i "$file" -quality 75 "${file%.png}.webp"; done
```

### 2. Compressão de Vídeo (Otimizado para Web)
Reduz drasticamente o tamanho sem perder qualidade visual perceptível.
```bash
# Codec h264, CRF 28 (equilíbrio ideal tamanho/qualidade), preset faster
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset faster -acodec aac -b:a 128k output_opt.mp4
```

### 3. Teste de Performance (Lighthouse CLI)
Rode sempre contra o build de **produção**, nunca em dev.
```bash
# 1. Buildar o projeto
npm run build
# 2. Servir o preview
npm run preview
# 3. Rodar auditoria (em outro terminal)
npx lighthouse http://localhost:4173 --output json --output-path ./report.json --device=mobile --chrome-flags="--headless"
```

---

## 📂 Registro de Aprendizados (Log)

### 📅 Ciclo: Otimização Mobile DRC Pro (Jan 2026)

#### ❌ O que Erramos / Problemas Encontrados
1.  **Imagem Hero Gigante**: Usar um PNG de 750KB no LCP (Largest Contentful Paint) causou um tempo de carregamento de 24s em conexões 3G, jogando o score para 47.
2.  **Teste em Ambiente Dev**: Rodar o Lighthouse com `npm run dev` resultou em pontuações falsamente baixas (51) devido ao overhead do Vite em desenvolvimento. O teste real deve ser em Prod.
3.  **Falta de Dimensões Explícitas**: Imagens sem `width` e `height` causaram *Cumulative Layout Shift* (CLS), penalizando a performance visual.
4.  **Vídeos "Crus"**: Vídeos de background somavam 70MB, consumindo banda excessiva do usuário.
5.  **Scripts de Terceiros (GTM/Clarity)**: Mesmo com imagens otimizadas, o carregamento imediato de scripts de tracking travou o score em 61 (TBT alto).
6.  **Imagens Escondidas no Código**: Otimizamos o Hero principal, mas componentes internos (`Differentials.jsx`, `CTAFinal.jsx`) ainda importavam versões PNG antigas via Javascript (`import img from ...`). Isso sabotou a performance silenciosamente.
7.  **Fontes Bloqueantes**: O Lighthouse acusou 854ms de "Render Blocking" causados pelo carregamento padrão do Google Fonts (`<link rel="stylesheet">`). O usuário via uma tela branca por quase 1 segundo.
8.  **Conflito de Portas no Teste**: Ao rodar múltiplos testes (`npm run preview`), o Vite mudou para a porta 4174 silenciosamente porque a 4173 estava presa, invalidando auditorias que miravam a porta padrão.

#### ✅ O que Acertamos / Soluções Aplicadas
1.  **Conversão para WebP**: O `hero-bg.png` (747KB) virou `hero-bg.webp` (40KB). **Redução de 95%** sem perda visual.
2.  **Preload de LCP**: Adicionamos `<link rel="preload" as="image" href="/hero-bg.webp">` no `index.html` para priorizar o carregamento visual imediato.
3.  **Semântica Acessível**: Envolver o conteúdo principal em uma tag `<main>` resolveu o erro "Landmarks contained in the landmark navigation" e garantiu Score 90 em Acessibilidade.
4.  **Internacionalização**: Mudar `lang="en"` para `lang="pt-BR"` é vital para leitores de tela e SEO local.
5.  **Lazy Loading de Scripts**: Adiar o carregamento do GTM para 3.5s ou interação do usuário limpou a thread principal.
6.  **Auditoria de Código**: Varredura manual (`grep`) encontrou imports de imagens PNG esquecidos em subcomponentes.
7.  **Fonts Async**: Implementamos o hack `media="print" onload="this.media='all'"` no link do Google Fonts. Resultado: O tempo de bloqueio de renderização caiu para zero nesta métrica.

#### 💡 O APRENDIZADO (Regras de Ouro)
1.  **Regra do LCP**: O elemento principal da tela (LCP) **DEVE** ter menos de 100KB e ser pré-carregado (`preload`) no head.
2.  **Regra do WebP**: Nunca use PNG/JPG para fotos em produção. Sempre converta para WebP.
3.  **Regra do Build**: Performance só se mede no `npm run preview` (versão de produção). Testes em dev são apenas para depuração funcional.
4.  **Regra do CLS**: Toda tag `<img>` precisa ter `width` e `height` (mesmo que o CSS mude o tamanho visual) para reservar espaço no layout.
5.  **Regra da Acessibilidade**: Toda página deve ter *pelo menos* um `<main>` e os contrastes de cor devem ser testados.
6.  **Regra dos Scripts**: Se o score travar em ~60 mesmo com imagens leves, adie o carregamento de GTM/Pixel/Clarity (Lazy Load) para liberar a CPU inicial.
7.  **Regra do Import**: Nunca confie apenas na pasta `public`. Verifique se os componentes React (`.jsx`) não estão importando imagens pesadas diretamente (`import x from './assets/heavy.png'`). Use `grep` para achar esses vilões.
8.  **Regra das Fontes**: Google Fonts padrão (`<link rel="stylesheet">`) bloqueiam a renderização. Use a técnica `media="print" onload="this.media='all'"` para carregamento assíncrono e ganhe ~800ms no FCP.
9.  **Regra do Processo (Kill)**: Antes de rodar uma nova auditoria de performance, use `pkill -f "vite"` para garantir que não está auditando uma versão antiga do servidor presa na porta padrão.

---

### [Próximo Ciclo...]
*Adicione novos aprendizados aqui sem remover os anteriores.*
