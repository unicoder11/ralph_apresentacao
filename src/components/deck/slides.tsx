import type { ReactNode } from "react";
import { Slide, Kicker, Title, Coral, Card, GlowOrb } from "./primitives";

function Fonte({ children }: { children: ReactNode }) {
  return (
    <p className="anim-fade d-8 mt-6 text-[clamp(0.6rem,0.85vw,0.75rem)] font-semibold uppercase tracking-[0.2em] text-white/30">
      {children}
    </p>
  );
}

const cap = (n: number) => Math.min(n, 8);

/* ------------------------------------------------------------------ */
/* 01 — Capa                                                           */
/* ------------------------------------------------------------------ */

function Capa() {
  return (
    <Slide className="items-center text-center">
      <GlowOrb className="left-[-10%] top-[-20%] h-[60vh] w-[60vh] bg-navy" />
      <GlowOrb className="bottom-[-25%] right-[-10%] h-[55vh] w-[55vh] bg-coral/40" />
      <p className="anim-rise text-[clamp(0.75rem,1.2vw,1rem)] font-bold uppercase tracking-[0.5em] text-white/50">
        CampaignOS · Estudo Estratégico Completo
      </p>
      <h1 className="anim-rise d-2 mt-6 text-[clamp(3rem,9vw,8rem)] font-black leading-none tracking-tight">
        RALPH
        <br />
        <Coral>GRACIE</Coral>
      </h1>
      <div className="anim-bar d-4 mx-auto mt-8 h-[3px] w-40 bg-coral" />
      <p className="anim-rise d-5 mt-8 max-w-3xl text-[clamp(1.1rem,2.2vw,1.8rem)] font-medium leading-snug text-white/85">
        &ldquo;A verdadeira força existe para{" "}
        <Coral>proteger</Coral>.&rdquo;
      </p>
      <p className="anim-fade d-7 mt-14 text-sm font-medium uppercase tracking-[0.3em] text-white/40">
        Metodologia · Diagnóstico · Conclusões — Rio de Janeiro 2026
      </p>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 02 — Abertura                                                       */
/* ------------------------------------------------------------------ */

function Abertura() {
  return (
    <Slide>
      <GlowOrb className="right-[-15%] top-[-25%] h-[55vh] w-[55vh] bg-navy" />
      <Kicker>Abertura</Kicker>
      <Title>
        Toda campanha ruim começa perguntando:{" "}
        <span className="text-white/40">&ldquo;o que vamos postar?&rdquo;</span>
      </Title>
      <div className="max-w-4xl space-y-6">
        <Card delay="d-2" className="border-l-4 border-l-coral">
          <p className="text-[clamp(1rem,1.8vw,1.5rem)] font-semibold leading-snug">
            A nossa começou perguntando:{" "}
            <Coral>
              &ldquo;o que o eleitor do Rio precisa ouvir, que hoje ninguém
              está dizendo?&rdquo;
            </Coral>
          </p>
        </Card>
        <Card delay="d-4" className="border-l-4 border-l-white/30">
          <p className="text-[clamp(1rem,1.8vw,1.5rem)] font-semibold leading-snug">
            E depois foi além:{" "}
            <span className="text-white/90">
              &ldquo;quem é Ralph quando ninguém está pedindo para ele parecer
              um candidato?&rdquo;
            </span>
          </p>
        </Card>
        <p className="anim-rise d-6 pt-2 text-[clamp(0.95rem,1.5vw,1.2rem)] leading-relaxed text-white/60">
          Esse segundo passo mudou o projeto inteiro — por causa das{" "}
          <strong className="text-white">suas respostas</strong>, não das
          nossas ideias. E é exatamente por isso que ele agora está mais forte.
        </p>
      </div>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 03 — Metodologia: CampaignOS                                        */
/* ------------------------------------------------------------------ */

const fases = [
  {
    n: "01",
    nome: "Inteligência",
    desc: "Entender o terreno antes de falar: contexto político do Rio, história eleitoral, concorrência, psicologia do eleitor.",
  },
  {
    n: "02",
    nome: "Construção",
    desc: "Transformar inteligência em identidade: Political, Brand, Narrative, Visual, Digital e Community DNA.",
  },
  {
    n: "03",
    nome: "Operação",
    desc: "Transformar identidade em execução: redes, território, voluntários, eventos, imprensa, debates, War Room.",
  },
  {
    n: "04",
    nome: "Inteligência Artificial",
    desc: "Monitoramento de sentimento, geração de conteúdo, gestão de crise e otimização contínua.",
  },
];

function Metodologia() {
  return (
    <Slide>
      <GlowOrb className="left-[-15%] bottom-[-30%] h-[60vh] w-[60vh] bg-navy" />
      <Kicker>Parte 1 · Metodologia</Kicker>
      <Title>
        Um sistema, não uma intuição: <Coral>CampaignOS</Coral>
      </Title>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
        {fases.map((f, i) => (
          <Card key={f.n} delay={`d-${i + 2}`} className="flex flex-col">
            <span className="text-[clamp(1.6rem,3vw,2.6rem)] font-black text-coral/90">
              {f.n}
            </span>
            <h3 className="mt-2 text-[clamp(1rem,1.4vw,1.3rem)] font-bold uppercase tracking-wide">
              {f.nome}
            </h3>
            <p className="mt-3 text-[clamp(0.8rem,1vw,0.95rem)] leading-relaxed text-white/65">
              {f.desc}
            </p>
          </Card>
        ))}
      </div>
      <p className="anim-rise d-6 mt-8 max-w-4xl text-[clamp(0.9rem,1.4vw,1.15rem)] leading-relaxed text-white/70">
        A Fase 2 tinha uma etapa que{" "}
        <strong className="text-coral">só o próprio Ralph podia completar</strong>{" "}
        — o questionário de Political DNA. Toda a estratégia ficou em espera até
        essa resposta chegar: nenhuma equipe tem autoridade para inventar quem
        um candidato é.
      </p>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 03b — O estudo em números                                           */
/* ------------------------------------------------------------------ */

const numerosEstudo: [string, string, string][] = [
  ["52", "documentos de trabalho produzidos", "≈ 12.300 linhas de análise escrita"],
  ["22", "concorrentes auditados um a um", "com votos nominais TSE 2022 verificados"],
  ["7", "dossiês individuais de adversários", "Poubel, Malafaia, Knoploch, Jordy…"],
  ["12", "posições de marca mapeadas", "cada uma com saturação e ocupantes reais"],
  ["6", "frameworks proprietários aplicados", "do Political Brain ao Political Myth"],
  ["4", "hipóteses de posicionamento testadas", "três descartadas — só uma sobreviveu"],
  ["7", "fontes de votos mapeadas", "comunidades, não CEPs"],
  ["8", "critérios de validação da imagem-âncora", "checagem cruzada antes de fotografar"],
];

function EstudoNumeros() {
  return (
    <Slide>
      <GlowOrb className="right-[-15%] bottom-[-25%] h-[55vh] w-[55vh] bg-coral/25" />
      <Kicker>Parte 1 · Metodologia</Kicker>
      <Title>
        O estudo em <Coral>números</Coral>
      </Title>
      <div className="grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4">
        {numerosEstudo.map(([n, t, d], i) => (
          <Card key={t} delay={`d-${cap(i + 1)}`} className="flex flex-col">
            <span className="text-[clamp(2rem,4.5vw,3.8rem)] font-black leading-none text-coral">
              {n}
            </span>
            <h3 className="mt-2 text-[clamp(0.78rem,1.05vw,0.98rem)] font-bold leading-snug">
              {t}
            </h3>
            <p className="mt-1.5 text-[clamp(0.68rem,0.9vw,0.85rem)] leading-relaxed text-white/55">
              {d}
            </p>
          </Card>
        ))}
      </div>
      <p className="anim-rise d-8 mt-7 max-w-5xl text-[clamp(0.85rem,1.25vw,1.05rem)] leading-relaxed text-white/70">
        Cada número desta apresentação pode ser rastreado até um documento e
        uma fonte primária —{" "}
        <strong className="text-white">
          nenhuma recomendação aqui nasceu de opinião
        </strong>
        . O anexo final lista o acervo completo, disponível para consulta.
      </p>
      <Fonte>
        Acervo: 52 documentos · TSE · TRE-RJ · ALERJ · imprensa BR/EUA —
        consolidado 17/07/2026
      </Fonte>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 04 — Frameworks                                                     */
/* ------------------------------------------------------------------ */

const frameworks = [
  ["Political Brain™", "Como o cérebro do eleitor realmente decide — emoção antes da razão."],
  ["Trust Engine™", "Como nasce a confiança: capacidade, integridade, coerência, proximidade, propósito."],
  ["Emotional Territory™", "Que território emocional único um candidato pode ocupar sem concorrência."],
  ["Identity Loop™", "Como um eleitor deixa de \u201cvotar\u201d e passa a \u201cpertencer\u201d."],
  ["Political Gravity™", "Como um líder atrai pessoas em vez de persegui-las."],
  ["Political Myth™", "Como um candidato se transforma em símbolo que sobrevive ao mandato."],
];

function Frameworks() {
  return (
    <Slide>
      <GlowOrb className="right-[-20%] bottom-[-20%] h-[55vh] w-[55vh] bg-coral/30" />
      <Kicker>Parte 1 · Metodologia</Kicker>
      <Title>
        Seis frameworks proprietários.
        <br />
        <span className="text-white/50">Zero achismo.</span>
      </Title>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {frameworks.map(([nome, desc], i) => (
          <Card key={nome} delay={`d-${i + 1}`}>
            <h3 className="text-[clamp(0.95rem,1.3vw,1.2rem)] font-bold text-coral">
              {nome}
            </h3>
            <p className="mt-2 text-[clamp(0.8rem,1vw,0.95rem)] leading-relaxed text-white/70">
              {desc}
            </p>
          </Card>
        ))}
      </div>
      <p className="anim-fade d-8 mt-8 text-[clamp(0.85rem,1.2vw,1.05rem)] text-white/55">
        Os frameworks não mudaram. O que mudou foi o dado de entrada — a voz do
        próprio Ralph.
      </p>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 05 — Por que investigar                                             */
/* ------------------------------------------------------------------ */

const razoes = [
  {
    t: "Investigação antes de publicidade",
    d: "Marketing sem diagnóstico é dinheiro jogado fora. Uma campanha profissional começa investigando.",
  },
  {
    t: "O mercado conservador está saturado",
    d: "Dezenas de candidatos vendendo o mesmo: segurança, família, Deus, combate à corrupção. Comunicar igual é entrar para perder.",
  },
  {
    t: "Narrativa inventada quebra sob pressão",
    d: "Uma história construída de fora para dentro cai no primeiro debate, na primeira entrevista difícil, na primeira crise.",
  },
  {
    t: "O questionário evita exatamente esse erro",
    d: "Ralph respondeu como pessoa, não como candidato. E uma frase simples e dolorosa mudou tudo.",
  },
];

function PorQue() {
  return (
    <Slide>
      <GlowOrb className="left-[-10%] top-[-25%] h-[50vh] w-[50vh] bg-navy" />
      <Kicker>Parte 2 · Por que esse estudo é indispensável</Kicker>
      <Title>
        Quatro razões para tanta investigação
      </Title>
      <div className="grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
        {razoes.map((r, i) => (
          <Card key={r.t} delay={`d-${i + 2}`} className="flex gap-5">
            <span className="text-[clamp(1.8rem,3vw,2.8rem)] font-black leading-none text-white/15">
              {i + 1}
            </span>
            <div>
              <h3 className="text-[clamp(0.95rem,1.4vw,1.25rem)] font-bold">
                {r.t}
              </h3>
              <p className="mt-2 text-[clamp(0.8rem,1.05vw,1rem)] leading-relaxed text-white/65">
                {r.d}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 06 — Diagnóstico: o terreno                                         */
/* ------------------------------------------------------------------ */

function Terreno() {
  return (
    <Slide>
      <GlowOrb className="right-[-15%] top-[-20%] h-[55vh] w-[55vh] bg-navy" />
      <Kicker>Parte 3 · Diagnóstico</Kicker>
      <Title>
        O terreno: Rio de Janeiro,
        <br />o estado mais <Coral>personalista</Coral> do Brasil
      </Title>
      <div className="grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
        <Card delay="d-2">
          <h3 className="text-[clamp(1rem,1.5vw,1.3rem)] font-bold text-coral">
            Pessoas &gt; propostas
          </h3>
          <p className="mt-3 text-[clamp(0.85rem,1.1vw,1rem)] leading-relaxed text-white/70">
            Para deputado estadual, o eleitor vota em <strong>pessoas</strong>.
            A marca pessoal pesa mais que o programa de governo.
          </p>
        </Card>
        <Card delay="d-3">
          <h3 className="text-[clamp(1rem,1.5vw,1.3rem)] font-bold text-coral">
            Terreno complexo
          </h3>
          <p className="mt-3 text-[clamp(0.85rem,1.1vw,1rem)] leading-relaxed text-white/70">
            Alta desigualdade, milícias e crime organizado, forte componente
            religioso, cultura política extremamente personalista.
          </p>
        </Card>
        <Card delay="d-4">
          <h3 className="text-[clamp(1rem,1.5vw,1.3rem)] font-bold text-coral">
            Disputa interna
          </h3>
          <p className="mt-3 text-[clamp(0.85rem,1.1vw,1rem)] leading-relaxed text-white/70">
            A bancada do PL na ALERJ é grande e competitiva. Ralph disputa
            espaço primeiro <strong>dentro do próprio partido</strong>.
          </p>
        </Card>
      </div>
      <p className="anim-rise d-6 mt-8 max-w-4xl text-[clamp(0.9rem,1.3vw,1.1rem)] leading-relaxed text-white/60">
        Cinco conversas dominam a vida emocional do carioca: medo cotidiano,
        abandono do Estado, perda de referências, desconfiança na política e o
        desejo de um futuro melhor para os filhos.
      </p>
      <Fonte>
        Fontes: Doc. 01 (investigação estratégica) · Doc. 04 (mapa do eleitor)
        · histórico eleitoral RJ
      </Fonte>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 07 — O eleitor conservador                                          */
/* ------------------------------------------------------------------ */

const perfis = [
  ["Protetor", true],
  ["Guerreiro", false],
  ["Crente", false],
  ["Empreendedor", false],
  ["Pai de Família", false],
  ["Desiludido", false],
  ["Formador", false],
] as const;

function Eleitor() {
  return (
    <Slide>
      <GlowOrb className="left-[-20%] bottom-[-25%] h-[60vh] w-[60vh] bg-coral/25" />
      <Kicker>Parte 3 · Diagnóstico</Kicker>
      <Title>
        Sete perfis psicológicos.
        <br />
        Um deles é o <Coral>maior de todos</Coral>.
      </Title>
      <div className="flex max-w-5xl flex-wrap gap-3">
        {perfis.map(([nome, destaque], i) => (
          <span
            key={nome}
            className={`anim-rise d-${i + 1} rounded-full border px-6 py-3 text-[clamp(0.85rem,1.3vw,1.15rem)] font-bold ${
              destaque
                ? "border-coral bg-coral text-white shadow-[0_0_40px_rgba(244,106,78,0.45)]"
                : "border-white/15 bg-white/4 text-white/70"
            }`}
          >
            {nome}
          </span>
        ))}
      </div>
      <Card delay="d-8" className="mt-10 max-w-4xl border-l-4 border-l-coral">
        <p className="text-[clamp(0.95rem,1.5vw,1.3rem)] font-semibold leading-snug">
          O <Coral>Protetor</Coral> já era o maior grupo do conservadorismo
          carioca — antes mesmo de conhecermos o DNA de Ralph. Ele está{" "}
          <strong>espontaneamente alinhado</strong> com o maior segmento do
          eleitorado que pretende conquistar.
        </p>
      </Card>
      <Fonte>
        Fonte: Doc. 03 — psicologia do eleitor conservador carioca (7 perfis
        mapeados)
      </Fonte>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 08 — Concorrência                                                   */
/* ------------------------------------------------------------------ */

function Concorrencia() {
  return (
    <Slide>
      <GlowOrb className="right-[-10%] bottom-[-30%] h-[55vh] w-[55vh] bg-navy" />
      <Kicker>Parte 3 · Diagnóstico</Kicker>
      <Title>
        A concorrência ocupa territórios{" "}
        <span className="text-white/40">saturados</span>
      </Title>
      <div className="grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
        <Card delay="d-2">
          <h3 className="text-[clamp(0.95rem,1.4vw,1.2rem)] font-bold uppercase tracking-wide text-white/50">
            Todos comunicam o mesmo
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Segurança", "Polícia", "Guerra cultural", "Bolsonarismo", "Religião", "Anticorrupção"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-md bg-white/10 px-3 py-1.5 text-[clamp(0.75rem,1vw,0.9rem)] font-semibold text-white/70 line-through decoration-coral/70 decoration-2"
                >
                  {t}
                </span>
              ),
            )}
          </div>
          <p className="mt-4 text-[clamp(0.8rem,1.05vw,0.95rem)] leading-relaxed text-white/60">
            Poubel, Gualberto, Anderson Moraes, Índia Armelau, Malafaia, Alan
            Lopes, Carlos Augusto… — e os gigantes de votos que nem figuravam
            na matriz anterior: Delaroli (114k) e Giselle Monteiro (95k).
          </p>
        </Card>
        <Card delay="d-4" className="border-coral/40">
          <h3 className="text-[clamp(0.95rem,1.4vw,1.2rem)] font-bold uppercase tracking-wide text-coral">
            A honestidade estratégica
          </h3>
          <p className="mt-4 text-[clamp(0.9rem,1.25vw,1.1rem)] leading-relaxed text-white/80">
            &ldquo;Protetor&rdquo; genérico também tem ocupantes fortes. Ser
            &ldquo;mais um protetor&rdquo; seria repetir o erro da saturação.
          </p>
          <p className="mt-4 text-[clamp(0.9rem,1.25vw,1.1rem)] font-semibold leading-relaxed">
            A diferenciação real não está em <em>dizer</em> que protege — está
            em <Coral>como ele protege</Coral> e em{" "}
            <Coral>quem ele realmente é por dentro</Coral>.
          </p>
        </Card>
      </div>
      <Fonte>
        Fontes: dossiês individuais de adversários · matriz competitiva ·
        votos nominais TSE 2022
      </Fonte>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 08b — Matriz territorial (dossiers/matriz.md)                       */
/* ------------------------------------------------------------------ */

const aritmetica = [
  {
    n: "8.492.935",
    l: "votos válidos (dep. estadual RJ, 2022)",
    d: "70 bancas em disputa. Cociente eleitoral: ≈ 121.327 votos por banca — ninguém entra sem partido forte.",
  },
  {
    n: "1.828.019",
    l: "votos do PL → 15 bancas em 2022",
    d: "Maior bancada do estado. Pós-janela de abril/2026: 23 deputados — a competição interna pela lista é a mais dura do RJ.",
  },
  {
    n: "42.720",
    l: "o piso real de entrada",
    d: "Alan Lopes, último eleito do PL em 2022 por voto nominal. Piso realista para entrar pelo PL: ~40–45 mil votos próprios.",
  },
  {
    n: "1.422",
    l: "votos de Ralph em 2024 — brecha de ~30x",
    d: "O benchmark honesto. Nenhum território de marca fecha sozinho uma brecha de 30x: a diferenciação precisa de estrutura.",
  },
];

function AritmeticaEleicao() {
  return (
    <Slide>
      <GlowOrb className="right-[-15%] top-[-25%] h-[50vh] w-[50vh] bg-navy" />
      <Kicker>Matriz competitiva · Dados estruturais verificados (TSE 2022)</Kicker>
      <Title>
        A aritmética da eleição:{" "}
        <Coral>os números que definem a realidade</Coral>
      </Title>
      <div className="grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2">
        {aritmetica.map((d, i) => (
          <Card key={d.l} delay={`d-${i + 2}`}>
            <p className="text-[clamp(1.6rem,3.4vw,3rem)] font-black leading-none text-coral">
              {d.n}
            </p>
            <h3 className="mt-2 text-[clamp(0.85rem,1.2vw,1.05rem)] font-bold">
              {d.l}
            </h3>
            <p className="mt-2 text-[clamp(0.75rem,1vw,0.92rem)] leading-relaxed text-white/65">
              {d.d}
            </p>
          </Card>
        ))}
      </div>
      <p className="anim-rise d-7 mt-7 max-w-5xl text-[clamp(0.85rem,1.25vw,1.05rem)] leading-relaxed text-white/70">
        Leitura estratégica: a ameaça não é só &ldquo;quem ocupa qual
        território de marca&rdquo;. É aritmética —{" "}
        <strong className="text-white">
          quase todos os concorrentes já provaram ter entre 3 e 40 vezes mais
          votos próprios que Ralph
        </strong>
        , disputando a mesma lista e o mesmo eleitorado conservador.
      </p>
      <Fonte>
        Fontes: TSE 2022 (via G1, UOL, Valor, O Globo) · perfis ALERJ · TRE-RJ
        (retotalização 03–04/2026) — verificado 17/07/2026
      </Fonte>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 08b1 — Escala do desafio (barras de votos nominais)                 */
/* ------------------------------------------------------------------ */

const votosNominais: [string, number, string][] = [
  ["Guilherme Delaroli", 114155, "máquina de Itaboraí"],
  ["Giselle Monteiro", 95028, "mulher conservadora"],
  ["Jair Bittencourt", 75253, "interior · 3º mandato"],
  ["Filippe Poubel", 73632, "segurança / confronto"],
  ["Valdecy da Saúde", 72250, "saúde popular"],
  ["Samuel Malafaia", 72056, "evangélico"],
  ["Índia Armelau", 57582, "mulher + guerra cultural"],
  ["Renato Miranda", 54341, "base territorial"],
  ["Anderson Moraes", 52313, "bolsonarismo ideológico"],
  ["Márcio Gualberto", 51856, "Polícia Militar"],
  ["Alan Lopes", 42720, "evangélico · último eleito PL"],
];

const MAX_VOTOS = 114155;
const PISO_VOTOS = 42720;

function EscalaDesafio() {
  const fmt = (n: number) => n.toLocaleString("pt-BR");
  return (
    <Slide>
      <GlowOrb className="right-[-15%] top-[-25%] h-[50vh] w-[50vh] bg-navy" />
      <Kicker>Matriz competitiva · Votos nominais TSE 2022, em escala real</Kicker>
      <Title>
        A escala do desafio, <Coral>sem retoques</Coral>
      </Title>
      <div className="relative max-w-6xl">
        {/* linha do piso de entrada */}
        <div
          className="anim-fade d-6 absolute bottom-[-6px] top-[-26px] z-10 w-[2px] border-l-2 border-dashed border-coral/80"
          style={{ left: `calc(clamp(120px,13vw,190px) + (100% - clamp(120px,13vw,190px) - 74px) * ${PISO_VOTOS / MAX_VOTOS})` }}
        >
          <span className="absolute left-2 top-[-2px] whitespace-nowrap text-[clamp(0.55rem,0.75vw,0.7rem)] font-bold uppercase tracking-[0.15em] text-coral">
            piso de entrada · 42.720
          </span>
        </div>
        <div className="space-y-[clamp(3px,0.55vh,7px)]">
          {votosNominais.map(([nome, votos, terr], i) => (
            <div
              key={nome}
              className={`anim-rise d-${cap(Math.floor(i / 2) + 1)} grid grid-cols-[clamp(120px,13vw,190px)_1fr_74px] items-center gap-x-3`}
            >
              <span className="truncate text-right text-[clamp(0.7rem,0.95vw,0.9rem)] font-bold text-white/85">
                {nome}
              </span>
              <div className="h-[clamp(12px,2vh,20px)] w-full overflow-hidden rounded-r-md bg-white/4">
                <div
                  className={`anim-bar d-${cap(Math.floor(i / 2) + 2)} flex h-full items-center rounded-r-md bg-white/25 pl-2`}
                  style={{ width: `${(votos / MAX_VOTOS) * 100}%` }}
                >
                  <span className="truncate text-[clamp(0.55rem,0.72vw,0.68rem)] font-semibold uppercase tracking-wide text-white/70">
                    {terr}
                  </span>
                </div>
              </div>
              <span className="text-[clamp(0.68rem,0.92vw,0.86rem)] font-bold tabular-nums text-white/60">
                {fmt(votos)}
              </span>
            </div>
          ))}
          {/* Ralph */}
          <div className="anim-rise d-6 grid grid-cols-[clamp(120px,13vw,190px)_1fr_74px] items-center gap-x-3 pt-2">
            <span className="truncate text-right text-[clamp(0.72rem,1vw,0.95rem)] font-black text-coral">
              Ralph (2024)
            </span>
            <div className="h-[clamp(12px,2vh,20px)] w-full overflow-hidden rounded-r-md bg-white/4">
              <div
                className="anim-bar d-7 h-full min-w-[4px] rounded-r-md bg-coral shadow-[0_0_20px_rgba(244,106,78,0.6)]"
                style={{ width: `${(1422 / MAX_VOTOS) * 100}%` }}
              />
            </div>
            <span className="text-[clamp(0.68rem,0.92vw,0.86rem)] font-black tabular-nums text-coral">
              1.422
            </span>
          </div>
        </div>
      </div>
      <p className="anim-rise d-8 mt-6 max-w-5xl text-[clamp(0.85rem,1.25vw,1.05rem)] leading-relaxed text-white/70">
        Mostramos este gráfico em escala real de propósito:{" "}
        <strong className="text-white">
          um estudo que esconde a distância não serve para vencê-la
        </strong>
        . A boa notícia vem em duas partes — um território de marca sem dono e
        um caminho de votos calculado comunidade por comunidade.
      </p>
      <Fonte>
        Fonte: votos nominais TSE 2022 (dep. estadual RJ) · Ralph: TSE 2024
        (vereador) — verificado 17/07/2026
      </Fonte>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 08b2 — Tiers de ameaça (a_amenaza_critica.md)                       */
/* ------------------------------------------------------------------ */

const tiers = [
  {
    nome: "TIER 1 · Ameaça máxima",
    faixa: "+70 mil votos próprios provados",
    stars: "★★★★★",
    nomes: "Delaroli (114k) · Giselle Monteiro (95k) · Bittencourt (75k) · Poubel (73k) · Valdecy (72k) · Malafaia (72k)",
    destaque: true,
  },
  {
    nome: "TIER 2 · Ameaça alta",
    faixa: "40–60 mil votos, mandato e estrutura",
    stars: "★★★★",
    nomes: "Índia Armelau (57k) · Renato Miranda (54k) · Anderson Moraes (52k) · Gualberto (51k) · Dr. Deodalto (46k) · Alan Lopes (42k)",
    destaque: false,
  },
  {
    nome: "TIER 3 · Ameaça média",
    faixa: "32–37 mil (titulares por suplência/retotalização)",
    stars: "★★★",
    nomes: "Carlos Augusto (37k) · Chico Machado (37k) · Renan Jordy (36k) · Felippe Neto (35k) · Marcelo Dino (32k)",
    destaque: false,
  },
  {
    nome: "TIER 4 · Ameaça baixa",
    faixa: "trajetória em queda",
    stars: "★★",
    nomes: "Knoploch (103k → 23k → 8k — corrigido: antes superestimado) · Fred Pacheco (13k)",
    destaque: false,
  },
];

function TiersAmeaca() {
  return (
    <Slide>
      <GlowOrb className="left-[-15%] bottom-[-25%] h-[50vh] w-[50vh] bg-coral/20" />
      <Kicker>Ameaça crítica · Corrigida com votos nominais (17/07/2026)</Kicker>
      <Title>
        Tiers de ameaça:{" "}
        <span className="text-white/40">percepção de marca</span> →{" "}
        <Coral>votos provados</Coral>
      </Title>
      <div className="grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-2">
          {tiers.map((t, i) => (
            <div
              key={t.nome}
              className={`anim-rise d-${i + 1} rounded-xl border px-5 py-[clamp(8px,1.2vh,14px)] ${
                t.destaque
                  ? "border-coral/60 bg-coral/10"
                  : "border-white/8 bg-white/3"
              }`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-[clamp(0.82rem,1.15vw,1.02rem)] font-extrabold">
                  {t.nome}{" "}
                  <span className="ml-1 text-coral">{t.stars}</span>
                </h3>
                <span className="text-[clamp(0.65rem,0.88vw,0.8rem)] font-semibold text-white/50">
                  {t.faixa}
                </span>
              </div>
              <p className="mt-1 text-[clamp(0.7rem,0.95vw,0.88rem)] leading-relaxed text-white/65">
                {t.nomes}
              </p>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <Card delay="d-4" className="border-l-4 border-l-coral">
            <h3 className="text-[clamp(0.8rem,1.1vw,1rem)] font-bold uppercase tracking-wide text-coral">
              Fora da disputa estadual
            </h3>
            <ul className="mt-2 space-y-1.5 text-[clamp(0.72rem,0.98vw,0.9rem)] leading-relaxed text-white/70">
              <li>
                <strong className="text-white">Douglas Ruas (176k)</strong> —
                pré-candidato a governador
              </li>
              <li>
                <strong className="text-white">Gagliasso (102k)</strong> — vai
                para federal: libera o voto celebridade/digital
              </li>
              <li>
                <strong className="text-white">Amorim (47k)</strong> —
                inelegível até 2032: votos órfãos que todos os guerreiros vão
                disputar
              </li>
            </ul>
          </Card>
          <Card delay="d-6">
            <h3 className="text-[clamp(0.8rem,1.1vw,1rem)] font-bold uppercase tracking-wide text-white/50">
              Duas janelas verificadas em 2026
            </h3>
            <p className="mt-2 text-[clamp(0.75rem,1vw,0.92rem)] leading-relaxed text-white/70">
              O voto <strong className="text-white">celebridade-digital</strong>{" "}
              (Gagliasso → federal) é o mais aproveitável: Ralph é o único da
              lista com reconhecimento de nome não-político e perfil outsider
              comparável. Data crítica: convenções 20/07–05/08 e registro
              15/08/2026.
            </p>
          </Card>
        </div>
      </div>
      <Fonte>
        Fonte: a_amenaza_critica.md (corrigida com dados públicos) · TSE 2022 ·
        TRE-RJ · imprensa fluminense
      </Fonte>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 08c — Matriz de posicionamento (dossiers/matriz.md)                 */
/* ------------------------------------------------------------------ */

const posicoes: [string, string, string, string][] = [
  ["Polícia / Segurança", "muito-alta", "Poubel (73k) · Gualberto (51k) · C. Augusto (37k) · Delaroli (114k) · Ruas (176k)", "Muito alta"],
  ["Guerra cultural / bolsonarismo", "muito-alta", "Anderson Moraes (52k) · Índia Armelau (57k) · Knoploch — Amorim inelegível", "Muito alta"],
  ["Evangélico", "muito-alta", "Samuel Malafaia (72k) · Alan Lopes (42k)", "Muito alta"],
  ["Máquina municipal / clã familiar", "muito-alta", "Delaroli (Itaboraí) · Ruas (São Gonçalo) · Felippe Neto (capital)", "Irreplicável"],
  ["Interior", "alta", "Bittencourt (75k) · Chico Machado (37k) · Dr. Deodalto (46k)", "Alta"],
  ["Saúde", "media", "Valdecy da Saúde (72k) · Dr. Deodalto (46k)", "Média"],
  ["Mulher conservadora", "media", "Giselle Monteiro (95k) · Índia Armelau (57k)", "Não se aplica"],
  ["Celebridade + direita digital", "abrindo", "Gagliasso (102k) migra para federal", "Abrindo em 2026"],
  ["Gestor", "abrindo", "Douglas Ruas (176k) migra para governador", "Abrindo em 2026"],
  ["Esporte", "baixa", "Praticamente inexistente na ALERJ atual", "Muito baixa"],
  ["Mentor / formação de pessoas", "vazia", "Não identificado nos 70 eleitos", "Muito baixa"],
  ["Construtor de líderes / disciplina", "vazia", "Não identificado", "—"],
];

const satCor: Record<string, string> = {
  "muito-alta": "bg-red-500",
  alta: "bg-orange-400",
  media: "bg-yellow-500",
  abrindo: "bg-emerald-400 ring-2 ring-emerald-200/40",
  baixa: "bg-green-500",
  vazia: "bg-white/30 ring-2 ring-coral",
};

function MatrizPosicionamento() {
  return (
    <Slide>
      <GlowOrb className="left-[-15%] bottom-[-25%] h-[50vh] w-[50vh] bg-coral/20" />
      <Kicker>Matriz competitiva · Saturação corrigida com votos 2022</Kicker>
      <Title>
        Saturação por posição de marca{" "}
        <span className="text-[clamp(0.9rem,1.3vw,1.1rem)] font-semibold text-white/40">
          (ocupantes verificados, votos nominais TSE)
        </span>
      </Title>
      <div className="max-w-6xl">
        <div className="mb-2 grid grid-cols-[minmax(180px,1.2fr)_auto_1.9fr_0.7fr] items-center gap-x-4 px-4 text-[clamp(0.6rem,0.85vw,0.75rem)] font-bold uppercase tracking-[0.2em] text-white/35">
          <span>Posição de marca</span>
          <span>Saturação</span>
          <span>Ocupantes verificados (votos 2022)</span>
          <span className="text-right">Competição</span>
        </div>
        <div className="space-y-1.5">
          {posicoes.map(([pos, sat, ocupantes, nivel], i) => (
            <div
              key={pos}
              className={`anim-rise d-${cap(Math.floor(i / 3) + 1)} grid grid-cols-[minmax(180px,1.2fr)_auto_1.9fr_0.7fr] items-center gap-x-4 rounded-lg border px-4 py-[clamp(3px,0.6vh,8px)] ${
                sat === "vazia"
                  ? "border-coral/50 bg-coral/10"
                  : sat === "abrindo"
                    ? "border-emerald-400/40 bg-emerald-400/5"
                    : "border-white/8 bg-white/3"
              }`}
            >
              <span className="text-[clamp(0.75rem,1.05vw,0.95rem)] font-bold">
                {pos}
              </span>
              <span
                className={`h-3.5 w-3.5 justify-self-center rounded-full ${satCor[sat]}`}
              />
              <span className="text-[clamp(0.68rem,0.92vw,0.86rem)] text-white/60">
                {ocupantes}
              </span>
              <span className="text-right text-[clamp(0.68rem,0.92vw,0.86rem)] font-semibold text-white/70">
                {nivel}
              </span>
            </div>
          ))}
        </div>
      </div>
      <p className="anim-rise d-6 mt-4 max-w-6xl text-[clamp(0.8rem,1.15vw,1rem)] leading-relaxed text-white/65">
        O achado central se confirma com dados reais: o espaço mentor/formação{" "}
        <strong className="text-coral">segue vazio entre os 70 eleitos</strong>.
        Mas atenção — está vazio também porque historicamente não elege sozinho:
        os eleitos entraram por máquina, corporação, igreja, celebridade ou
        mandato. <strong className="text-white">O território vazio é a
        diferenciação; não substitui a estrutura de votos.</strong>
      </p>
      <Fonte>
        Fonte: dossiers/matriz — 12 posições · ocupantes com votos nominais
        TSE 2022 · verificado 17/07/2026
      </Fonte>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 08c2 — Mapa de posicionamento 2x2                                   */
/* ------------------------------------------------------------------ */

type Ponto = {
  nome: string;
  x: number; // credibilidade de Ralph (0–100)
  y: number; // saturação competitiva (0–100, alto = saturado)
  destaque?: boolean;
};

const pontosMapa: Ponto[] = [
  { nome: "Máquina municipal", x: 6, y: 93 },
  { nome: "Guerra cultural", x: 26, y: 88 },
  { nome: "Polícia / Segurança", x: 20, y: 80 },
  { nome: "Evangélico", x: 34, y: 72 },
  { nome: "Interior", x: 22, y: 60 },
  { nome: "Saúde", x: 16, y: 45 },
  { nome: "Celebridade digital", x: 68, y: 36 },
  { nome: "Esporte", x: 84, y: 16 },
  { nome: "Mentor / formação", x: 76, y: 8 },
  { nome: "Protetor com prova real", x: 88, y: 24, destaque: true },
];

function MapaPosicionamento() {
  return (
    <Slide>
      <GlowOrb className="right-[-20%] bottom-[-25%] h-[55vh] w-[55vh] bg-coral/20" />
      <Kicker>Síntese da matriz · Duas variáveis decidem o território</Kicker>
      <Title>
        Onde competir: <Coral>credibilidade</Coral> ×{" "}
        <span className="text-white/50">saturação</span>
      </Title>
      <div className="grid max-w-6xl grid-cols-1 items-start gap-8 lg:grid-cols-[1.6fr_1fr]">
        <div className="anim-rise d-2">
          <div className="relative aspect-16/10 w-full rounded-2xl border border-white/10 bg-white/3">
            {/* quadrante vencedor */}
            <div className="absolute bottom-0 right-0 h-1/2 w-1/2 rounded-br-2xl bg-coral/8 ring-1 ring-inset ring-coral/25" />
            <span className="absolute bottom-2 right-3 text-[clamp(0.55rem,0.75vw,0.7rem)] font-bold uppercase tracking-[0.2em] text-coral/70">
              Quadrante vencedor
            </span>
            {/* eixos centrais */}
            <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />
            <div className="absolute left-0 top-1/2 h-px w-full bg-white/10" />
            {/* rótulos dos eixos */}
            <span className="absolute left-1/2 top-1.5 -translate-x-1/2 text-[clamp(0.5rem,0.7vw,0.65rem)] font-semibold uppercase tracking-[0.2em] text-white/35">
              Território saturado
            </span>
            <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 text-[clamp(0.5rem,0.7vw,0.65rem)] font-semibold uppercase tracking-[0.2em] text-white/35">
              Território livre
            </span>
            <span className="absolute left-1.5 top-1/2 -translate-y-1/2 -rotate-90 text-[clamp(0.5rem,0.7vw,0.65rem)] font-semibold uppercase tracking-[0.2em] text-white/35">
              Baixa credibilidade
            </span>
            <span className="absolute right-1.5 top-1/2 -translate-y-1/2 rotate-90 text-[clamp(0.5rem,0.7vw,0.65rem)] font-semibold uppercase tracking-[0.2em] text-white/35">
              Alta credibilidade
            </span>
            {/* pontos */}
            {pontosMapa.map((p, i) => (
              <div
                key={p.nome}
                className={`anim-fade d-${cap(i + 1)} absolute -translate-x-1/2 -translate-y-1/2`}
                style={{ left: `${8 + p.x * 0.84}%`, top: `${8 + (100 - p.y) * 0.84}%` }}
              >
                <div className="flex flex-col items-center">
                  <span
                    className={
                      p.destaque
                        ? "h-5 w-5 rounded-full bg-coral shadow-[0_0_30px_rgba(244,106,78,0.8)] ring-4 ring-coral/30"
                        : "h-3 w-3 rounded-full bg-white/45"
                    }
                  />
                  <span
                    className={`mt-1 whitespace-nowrap text-center font-semibold ${
                      p.destaque
                        ? "text-[clamp(0.62rem,0.85vw,0.8rem)] font-black text-coral"
                        : "text-[clamp(0.55rem,0.75vw,0.72rem)] text-white/60"
                    }`}
                  >
                    {p.nome}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <Card delay="d-4" className="border-l-4 border-l-coral">
            <p className="text-[clamp(0.85rem,1.2vw,1.05rem)] leading-relaxed text-white/85">
              Todos os territórios do lado esquerdo exigiriam que Ralph{" "}
              <strong className="text-white">fingisse ser algo que não é</strong>{" "}
              — polícia, pastor, político de carreira. Custo alto, credibilidade
              baixa.
            </p>
          </Card>
          <Card delay="d-5">
            <p className="text-[clamp(0.85rem,1.2vw,1.05rem)] leading-relaxed text-white/80">
              Só um território combina{" "}
              <Coral>credibilidade máxima</Coral> (décadas de prova real) com{" "}
              <Coral>concorrência mínima</Coral>: o Protetor que forma pessoas.
              Não foi escolhido por gosto —{" "}
              <strong className="text-white">
                foi o único quadrante que sobrou depois de eliminar os outros
                com dados
              </strong>
              .
            </p>
          </Card>
        </div>
      </div>
      <Fonte>
        Derivado da matriz de saturação (12 posições · ocupantes verificados
        TSE 2022) + Political DNA de Ralph
      </Fonte>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 08d — Dados públicos verificados (Doc. 34)                          */
/* ------------------------------------------------------------------ */

const dados = [
  {
    n: "3ª",
    l: "geração da família fundadora",
    d: "Nascido no Rio (1971), neto de Hélio Gracie. O Jiu-Jitsu nasceu no Rio — e Ralph nasceu dentro dessa história.",
  },
  {
    n: "1.422",
    l: "votos em 2024 (vereador, PRD)",
    d: "Dado oficial TSE. Não se esconde: \u201csou faixa-branca de verdade na política\u201d — 2024 foi o primeiro treino, não um fracasso.",
  },
  {
    n: "11",
    l: "academias — maioria nos EUA",
    d: "Império de formação construído fora do Brasil. Precisão factual obrigatória: presença atual e ativa na Gracie Kore, Barra da Tijuca.",
  },
  {
    n: "10.142/23",
    l: "Lei Gui, sancionada na ALERJ",
    d: "Aliança com Tayane Gandra: prova de proteção já verificada pelo próprio Estado do RJ — e expandida a nível nacional em 2026.",
  },
];

function DadosPublicos() {
  return (
    <Slide>
      <GlowOrb className="left-[-15%] top-[-25%] h-[50vh] w-[50vh] bg-coral/20" />
      <Kicker>Documento 34 · Auditoria de dados públicos</Kicker>
      <Title>
        Fatos verificáveis, não narrativa:{" "}
        <Coral>o que qualquer jornalista encontra</Coral>
      </Title>
      <div className="grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2">
        {dados.map((d, i) => (
          <Card key={d.l} delay={`d-${i + 2}`} className="flex gap-6">
            <span className="shrink-0 text-[clamp(1.5rem,3.2vw,2.8rem)] font-black leading-none text-coral">
              {d.n}
            </span>
            <div>
              <h3 className="text-[clamp(0.85rem,1.2vw,1.05rem)] font-bold">
                {d.l}
              </h3>
              <p className="mt-1.5 text-[clamp(0.75rem,1vw,0.92rem)] leading-relaxed text-white/65">
                {d.d}
              </p>
            </div>
          </Card>
        ))}
      </div>
      <p className="anim-rise d-7 mt-7 max-w-5xl text-[clamp(0.85rem,1.25vw,1.05rem)] leading-relaxed text-white/65">
        Metodologia do Documento 34: toda afirmação sustentada por pelo menos
        uma fonte jornalística ou documento oficial (TSE, ALERJ, imprensa BR/EUA)
        — inclusive o risco crítico já mapeado, com resposta estruturada
        pré-aprovada no protocolo de crise.
      </p>
      <Fonte>
        Fontes: TSE/Estadão · ALERJ · O Globo · UOL · CBS News · Orange County
        Register · BJJ Heroes — levantamento 16/07/2026
      </Fonte>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 09 — A grande virada                                                */
/* ------------------------------------------------------------------ */

function Virada() {
  return (
    <Slide className="items-center text-center">
      <GlowOrb className="left-[10%] top-[-25%] h-[50vh] w-[50vh] bg-navy" />
      <GlowOrb className="right-[5%] bottom-[-25%] h-[50vh] w-[50vh] bg-coral/35" />
      <Kicker className="text-center">Parte 4 · A grande virada</Kicker>
      <div className="flex flex-col items-center gap-6 md:flex-row md:gap-12">
        <div className="anim-rise d-1">
          <p className="text-[clamp(0.75rem,1vw,0.9rem)] font-bold uppercase tracking-[0.3em] text-white/40">
            Hipótese da equipe
          </p>
          <p className="mt-3 text-[clamp(2rem,5vw,4.5rem)] font-black text-white/30 line-through decoration-coral decoration-4">
            O Formador
          </p>
        </div>
        <span className="anim-rise d-3 text-[clamp(2rem,4vw,3.5rem)] font-black text-coral">
          →
        </span>
        <div className="anim-rise d-4">
          <p className="text-[clamp(0.75rem,1vw,0.9rem)] font-bold uppercase tracking-[0.3em] text-coral">
            Resposta do próprio Ralph
          </p>
          <p className="mt-3 text-[clamp(2.4rem,6vw,5.5rem)] font-black text-white">
            O Protetor
          </p>
        </div>
      </div>
      <p className="anim-rise d-6 mt-12 max-w-3xl text-[clamp(0.95rem,1.6vw,1.35rem)] leading-relaxed text-white/70">
        A hipótese do Formador era elegante — mas construída pela estratégia,
        não por Ralph. Quando o questionário real chegou,{" "}
        <strong className="text-white">
          a resposta virou o projeto
        </strong>
        . Nós não impomos uma narrativa: ouvimos, e mudamos porque a verdade é
        mais forte que a hipótese.
      </p>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 10 — A frase                                                        */
/* ------------------------------------------------------------------ */

function Frase() {
  return (
    <Slide className="items-center text-center" grid={false}>
      <GlowOrb className="left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 bg-coral/25" />
      <p className="anim-fade text-[clamp(0.75rem,1.1vw,0.95rem)] font-bold uppercase tracking-[0.4em] text-white/40">
        Entre todas as respostas do questionário, uma se destacou
      </p>
      <blockquote className="anim-rise d-3 mt-10 max-w-5xl text-[clamp(2.2rem,6.5vw,6rem)] font-black leading-[1.05] tracking-tight">
        &ldquo;Que eu não tenho{" "}
        <Coral>coração</Coral>.&rdquo;
      </blockquote>
      <p className="anim-rise d-6 mt-12 max-w-3xl text-[clamp(0.95rem,1.6vw,1.3rem)] leading-relaxed text-white/70">
        É a percepção que Ralph teme que as pessoas tenham dele. E é exatamente
        aí que está o{" "}
        <strong className="text-white">
          ativo narrativo mais valioso de toda a campanha
        </strong>
        .
      </p>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 10b — Triangulação: três fontes independentes convergem             */
/* ------------------------------------------------------------------ */

const fontesTriangulacao = [
  {
    n: "A",
    t: "O eleitorado",
    doc: "Doc. 03 · Psicologia do eleitor conservador carioca",
    d: "Entre os sete perfis psicológicos mapeados, o Protetor já era o maior segmento do conservadorismo carioca — meses antes de qualquer resposta de Ralph.",
  },
  {
    n: "B",
    t: "A concorrência",
    doc: "Matriz competitiva · 22 concorrentes, votos TSE 2022",
    d: "O território \u201cproteção com prova real de décadas\u201d não tem ocupante crível entre os 70 eleitos da ALERJ. Todos os protetores genéricos protegem com discurso; nenhum com biografia.",
  },
  {
    n: "C",
    t: "O próprio Ralph",
    doc: "Questionário Political DNA · resposta espontânea",
    d: "Sem conhecer as análises A e B, Ralph respondeu como pessoa — e sua maior dor (\u201cque eu não tenho coração\u201d) apontou exatamente para o mesmo lugar.",
  },
];

function Triangulacao() {
  return (
    <Slide>
      <GlowOrb className="left-[-15%] top-[-25%] h-[55vh] w-[55vh] bg-navy" />
      <Kicker>Parte 4 · Por que isso não é intuição</Kicker>
      <Title>
        Três fontes independentes.{" "}
        <Coral>Uma única conclusão.</Coral>
      </Title>
      <div className="grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
        {fontesTriangulacao.map((f, i) => (
          <Card key={f.n} delay={`d-${i * 2 + 2}`} className="flex flex-col">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-coral text-[clamp(1rem,1.4vw,1.3rem)] font-black text-coral">
              {f.n}
            </span>
            <h3 className="mt-3 text-[clamp(1rem,1.5vw,1.35rem)] font-extrabold">
              {f.t}
            </h3>
            <p className="mt-1 text-[clamp(0.6rem,0.82vw,0.75rem)] font-bold uppercase tracking-[0.15em] text-white/40">
              {f.doc}
            </p>
            <p className="mt-3 text-[clamp(0.78rem,1.05vw,0.96rem)] leading-relaxed text-white/70">
              {f.d}
            </p>
          </Card>
        ))}
      </div>
      <Card delay="d-7" className="mt-8 max-w-6xl border-l-4 border-l-coral">
        <p className="text-[clamp(0.95rem,1.5vw,1.3rem)] font-semibold leading-snug">
          Demanda do eleitorado + território sem dono + verdade biográfica de
          Ralph: <Coral>as três análises foram feitas separadas e apontaram
          para o mesmo ponto</Coral>. Em pesquisa, isso se chama triangulação —
          é o oposto de uma aposta.
        </p>
      </Card>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 11 — Conflito narrativo                                             */
/* ------------------------------------------------------------------ */

const conflito = [
  ["Agressivo", "Pai"],
  ["Duro", "Protetor"],
  ["Intimidador", "Leal"],
  ["Perigoso", "Sensível ao sofrimento dos outros"],
];

function Conflito() {
  return (
    <Slide>
      <GlowOrb className="right-[-15%] top-[-20%] h-[50vh] w-[50vh] bg-navy" />
      <Kicker>Parte 4 · O coração de tudo</Kicker>
      <Title>O conflito narrativo</Title>
      <div className="grid max-w-4xl grid-cols-2 gap-x-6 gap-y-3">
        <p className="anim-rise d-1 pb-2 text-[clamp(0.75rem,1.1vw,0.95rem)] font-bold uppercase tracking-[0.25em] text-white/40">
          Imagem pública
        </p>
        <p className="anim-rise d-1 pb-2 text-[clamp(0.75rem,1.1vw,0.95rem)] font-bold uppercase tracking-[0.25em] text-coral">
          Verdade privada
        </p>
        {conflito.map(([pub, priv], i) => (
          <div key={pub} className="contents">
            <div
              className={`anim-rise d-${i + 2} rounded-xl border border-white/10 bg-white/3 px-6 py-4 text-[clamp(1rem,1.8vw,1.5rem)] font-bold text-white/45`}
            >
              {pub}
            </div>
            <div
              className={`anim-rise d-${i + 3} rounded-xl border border-coral/30 bg-coral/10 px-6 py-4 text-[clamp(1rem,1.8vw,1.5rem)] font-bold`}
            >
              {priv}
            </div>
          </div>
        ))}
      </div>
      <p className="anim-rise d-8 mt-10 max-w-4xl text-[clamp(1rem,1.8vw,1.5rem)] font-semibold leading-snug">
        &ldquo;As pessoas enxergam o lutador.{" "}
        <Coral>Os próximos precisam enxergar o protetor.</Coral>&rdquo;
      </p>
      <p className="anim-fade d-8 mt-4 text-[clamp(0.85rem,1.2vw,1.05rem)] text-white/55">
        Não é um problema a esconder. É a própria história a ser contada.
      </p>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 12 — Arquétipo validado                                             */
/* ------------------------------------------------------------------ */

const arquetipos = [
  {
    nome: "O Protetor",
    peso: 50,
    papel: "Centro da marca",
    cor: "bg-coral",
  },
  {
    nome: "O Guerreiro",
    peso: 30,
    papel: "Reforço emocional: coragem, resiliência, nunca desistir",
    cor: "bg-white/70",
  },
  {
    nome: "O Mentor",
    peso: 20,
    papel: "Consequência natural do Protetor — a prova, não a fachada",
    cor: "bg-white/35",
  },
];

function Arquetipo() {
  return (
    <Slide>
      <GlowOrb className="left-[-15%] top-[-25%] h-[55vh] w-[55vh] bg-coral/25" />
      <Kicker>Parte 4 · Arquétipo validado pelo próprio Ralph</Kicker>
      <Title>
        50 <span className="text-white/30">/</span> 30{" "}
        <span className="text-white/30">/</span> 20
      </Title>
      <div className="max-w-5xl space-y-8">
        {arquetipos.map((a, i) => (
          <div key={a.nome} className={`anim-rise d-${i * 2 + 2}`}>
            <div className="mb-2 flex items-baseline justify-between">
              <h3 className="text-[clamp(1.1rem,2vw,1.7rem)] font-extrabold">
                {a.nome}{" "}
                <span className="ml-2 text-coral">{a.peso}%</span>
              </h3>
              <p className="max-w-[55%] text-right text-[clamp(0.75rem,1.05vw,0.95rem)] text-white/60">
                {a.papel}
              </p>
            </div>
            <div className="h-4 w-full overflow-hidden rounded-full bg-white/6">
              <div
                className={`anim-bar d-${i * 2 + 3} h-full rounded-full ${a.cor}`}
                style={{ width: `${a.peso}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="anim-fade d-8 mt-10 max-w-4xl text-[clamp(0.9rem,1.35vw,1.15rem)] leading-relaxed text-white/65">
        O Mentor não desapareceu. Deixou de ser a fachada e passou a ser a{" "}
        <strong className="text-white">prova</strong>: Ralph forma pessoas
        porque essa é uma das formas mais poderosas de proteger.
      </p>
      <Fonte>
        Fonte: Doc. 18 — Political DNA real, validado nas respostas do próprio
        Ralph
      </Fonte>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 13 — Posicionamento final                                           */
/* ------------------------------------------------------------------ */

const hipoteses = [
  ["O Guerreiro puro", "\u201cLuto pelo povo\u201d", "Descartado — mercado saturadíssimo", false],
  ["O Formador puro", "\u201cFormo líderes\u201d", "Descartado — não nasceu da voz de Ralph", false],
  ["O Legado (sobrenome)", "\u201cGracie é um jeito de viver\u201d", "Reforço secundário, nunca o centro", false],
  ["O Protetor", "\u201cA verdadeira força existe para proteger\u201d", "Validado pelo próprio Ralph — centro da marca", true],
] as const;

function Posicionamento() {
  return (
    <Slide>
      <GlowOrb className="right-[-20%] bottom-[-25%] h-[55vh] w-[55vh] bg-navy" />
      <Kicker>Parte 7 · A decisão mais importante da campanha</Kicker>
      <Title>O posicionamento final</Title>
      <div className="max-w-5xl space-y-3">
        {hipoteses.map(([nome, msg, status, venceu], i) => (
          <div
            key={nome}
            className={`anim-rise d-${i + 2} flex flex-col gap-1 rounded-xl border px-6 py-4 md:flex-row md:items-center md:gap-6 ${
              venceu
                ? "border-coral bg-coral/15 shadow-[0_0_50px_rgba(244,106,78,0.25)]"
                : "border-white/10 bg-white/3 opacity-60"
            }`}
          >
            <span className="min-w-[220px] text-[clamp(0.95rem,1.4vw,1.25rem)] font-extrabold">
              {nome}
            </span>
            <span className="flex-1 text-[clamp(0.85rem,1.15vw,1.05rem)] italic text-white/75">
              {msg}
            </span>
            <span
              className={`text-[clamp(0.75rem,1vw,0.9rem)] font-bold uppercase tracking-wide ${
                venceu ? "text-coral" : "text-white/40"
              }`}
            >
              {status}
            </span>
          </div>
        ))}
      </div>
      <Card delay="d-7" className="mt-8 max-w-5xl border-l-4 border-l-coral">
        <p className="text-[clamp(0.95rem,1.5vw,1.3rem)] font-semibold leading-snug">
          Teste de posicionamento: quando alguém ouvir &ldquo;Ralph
          Gracie&rdquo;, a resposta ideal é uma frase única —{" "}
          <Coral>&ldquo;É o homem que protege.&rdquo;</Coral>
        </p>
      </Card>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 14 — Diferenciação e ativos                                         */
/* ------------------------------------------------------------------ */

const ativos = [
  {
    t: "Conflito público × privado",
    d: "Nenhum outro protetor tem imagem pública de força real e intimidadora para contrastar com uma verdade privada de sensibilidade e cuidado.",
  },
  {
    t: "Décadas de prova viva",
    d: "Nenhum outro prova capacidade de proteger através de décadas literais formando pessoas — não como discurso, como prática.",
  },
  {
    t: "Legitimidade única",
    d: "\u201cEu não protejo apenas com a força. Eu protejo formando pessoas fortes.\u201d Ninguém no mapa competitivo consegue replicar.",
  },
  {
    t: "Sobrenome Gracie + comunidade BJJ",
    d: "Marca global reconhecida e uma rede enorme de pessoas que já vivenciaram, na prática, o lado protetor de Ralph.",
  },
];

function Diferenciacao() {
  return (
    <Slide>
      <GlowOrb className="left-[-15%] bottom-[-25%] h-[55vh] w-[55vh] bg-coral/25" />
      <Kicker>Parte 5 e 8 · Diferenciação real</Kicker>
      <Title>
        Por que o Protetor não é{" "}
        <span className="text-white/40">&ldquo;mais um do mesmo&rdquo;</span>
      </Title>
      <div className="grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
        {ativos.map((a, i) => (
          <Card key={a.t} delay={`d-${i + 2}`}>
            <h3 className="text-[clamp(0.95rem,1.4vw,1.25rem)] font-bold text-coral">
              {a.t}
            </h3>
            <p className="mt-2 text-[clamp(0.82rem,1.1vw,1rem)] leading-relaxed text-white/70">
              {a.d}
            </p>
          </Card>
        ))}
      </div>
      <p className="anim-rise d-7 mt-8 max-w-4xl text-[clamp(0.9rem,1.35vw,1.15rem)] leading-relaxed text-white/65">
        Escolhemos <strong className="text-white">autenticidade sobre ineditismo</strong> —
        uma troca estratégica consciente. Um Protetor verdadeiro, comprovado
        por décadas, vence um Formador mais original porém menos crível.
      </p>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 15 — Marca, antagonista e operação                                  */
/* ------------------------------------------------------------------ */

function MarcaOperacao() {
  return (
    <Slide>
      <GlowOrb className="right-[-15%] top-[-25%] h-[55vh] w-[55vh] bg-navy" />
      <Kicker>Partes 6, 9, 10, 11 e 12 · Da marca à operação</Kicker>
      <Title>Como isso vira campanha</Title>
      <div className="grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <Card delay="d-2">
          <h3 className="text-[clamp(0.9rem,1.2vw,1.1rem)] font-bold text-coral">
            Um único antagonista
          </h3>
          <p className="mt-2 text-[clamp(0.8rem,1vw,0.92rem)] leading-relaxed text-white/70">
            <strong className="text-white">O abandono</strong> — das famílias,
            das referências, da disciplina. Nunca uma pessoa ou partido.
            Violência e corrupção são o que o abandono produz.
          </p>
        </Card>
        <Card delay="d-3">
          <h3 className="text-[clamp(0.9rem,1.2vw,1.1rem)] font-bold text-coral">
            Votos vêm de comunidades
          </h3>
          <p className="mt-2 text-[clamp(0.8rem,1vw,0.92rem)] leading-relaxed text-white/70">
            Sete fontes mapeadas: comunidade Gracie/BJJ, artes marciais, forças
            de segurança, pais de alunos, donos de academia, evangélicos,
            desiludidos. Sempre pela lente da proteção primeiro.
          </p>
        </Card>
        <Card delay="d-4">
          <h3 className="text-[clamp(0.9rem,1.2vw,1.1rem)] font-bold text-coral">
            Multiplicadores, não seguidores
          </h3>
          <p className="mt-2 text-[clamp(0.8rem,1vw,0.92rem)] leading-relaxed text-white/70">
            1 líder → 10 voluntários → 100 simpatizantes → 1.000 votos. Cinco
            motores: Marca, Confiança, Mobilização, Território, Operação.
          </p>
        </Card>
        <Card delay="d-5">
          <h3 className="text-[clamp(0.9rem,1.2vw,1.1rem)] font-bold text-coral">
            War Room disciplinado
          </h3>
          <p className="mt-2 text-[clamp(0.8rem,1vw,0.92rem)] leading-relaxed text-white/70">
            Nenhuma tarefa sem dono. Reunião diária de 30 min. Métrica-chave:
            influência. Princípios de Amazon, Apple, Toyota, Obama — e Gracie:
            disciplina vence talento.
          </p>
        </Card>
      </div>
      <div className="anim-rise d-7 mt-8 flex max-w-5xl flex-wrap items-center gap-6 rounded-2xl border border-white/10 bg-white/4 px-8 py-5">
        <div className="flex items-center gap-3">
          <span className="h-8 w-8 rounded-md bg-navy ring-1 ring-white/25" />
          <span className="h-8 w-8 rounded-md bg-white" />
          <span className="h-8 w-8 rounded-md bg-coral" />
          <span className="h-8 w-8 rounded-md bg-mist" />
        </div>
        <p className="flex-1 text-[clamp(0.8rem,1.1vw,1rem)] text-white/70">
          Identidade visual já alinhada: azul da confiança dominante, coral
          humano nunca dominante, Montserrat Bold.{" "}
          <strong className="text-white">
            Frase-chave: &ldquo;Quem protege hoje, constrói o amanhã.&rdquo;
          </strong>
        </p>
      </div>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 15a2 — O caminho até 45 mil votos                                   */
/* ------------------------------------------------------------------ */

const fontesVotos: { nome: string; capitaes: number; votos: number; cor: string }[] = [
  { nome: "Comunidade Gracie / Jiu-Jitsu", capitaes: 120, votos: 12000, cor: "bg-coral" },
  { nome: "Outras artes marciais", capitaes: 60, votos: 6000, cor: "bg-coral/75" },
  { nome: "Donos de academia e empreendedores", capitaes: 60, votos: 6000, cor: "bg-coral/55" },
  { nome: "Pais de alunos", capitaes: 60, votos: 6000, cor: "bg-white/70" },
  { nome: "Desiludidos com a política", capitaes: 60, votos: 6000, cor: "bg-white/50" },
  { nome: "Forças de segurança que treinam", capitaes: 50, votos: 5000, cor: "bg-white/35" },
  { nome: "Evangélicos conservadores", capitaes: 40, votos: 4000, cor: "bg-white/20" },
];

const TOTAL_MODELO = fontesVotos.reduce((s, f) => s + f.votos, 0);

function CaminhoVotos() {
  const fmt = (n: number) => n.toLocaleString("pt-BR");
  return (
    <Slide>
      <GlowOrb className="left-[-15%] top-[-25%] h-[55vh] w-[55vh] bg-coral/25" />
      <Kicker>O modelo · De 1.422 ao piso de entrada, comunidade por comunidade</Kicker>
      <Title>
        O caminho até <Coral>{fmt(TOTAL_MODELO)} votos</Coral> não é uma
        esperança. É uma conta.
      </Title>
      <div className="max-w-6xl">
        {/* barra empilhada */}
        <div className="anim-rise d-2 relative">
          <div className="flex h-[clamp(34px,5.5vh,52px)] w-full overflow-hidden rounded-xl bg-white/5">
            {fontesVotos.map((f) => (
              <div
                key={f.nome}
                className={`anim-bar d-3 ${f.cor} h-full border-r border-navy-darker/60`}
                style={{ width: `${(f.votos / TOTAL_MODELO) * 100}%` }}
              />
            ))}
          </div>
          {/* marcador do piso */}
          <div
            className="anim-fade d-6 absolute bottom-[-10px] top-[-10px] w-[2px] border-l-2 border-dashed border-white"
            style={{ left: `${(PISO_VOTOS / TOTAL_MODELO) * 100}%` }}
          >
            <span className="absolute left-2 top-[-4px] whitespace-nowrap text-[clamp(0.55rem,0.78vw,0.72rem)] font-bold uppercase tracking-[0.15em] text-white">
              piso 2022 · 42.720
            </span>
          </div>
        </div>
        {/* legenda */}
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-1.5 sm:grid-cols-2">
          {fontesVotos.map((f, i) => (
            <div
              key={f.nome}
              className={`anim-rise d-${cap(i + 2)} flex items-center gap-3 text-[clamp(0.72rem,0.98vw,0.92rem)]`}
            >
              <span className={`h-3 w-3 shrink-0 rounded-sm ${f.cor}`} />
              <span className="flex-1 font-semibold text-white/80">{f.nome}</span>
              <span className="tabular-nums text-white/50">
                {f.capitaes} capitães
              </span>
              <span className="w-16 text-right font-bold tabular-nums">
                {fmt(f.votos)}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2">
        <Card delay="d-7" className="border-l-4 border-l-coral">
          <p className="text-[clamp(0.8rem,1.1vw,1rem)] leading-relaxed text-white/80">
            <strong className="text-coral">A unidade do modelo é o capitão</strong>{" "}
            — meta individual fixa do Ground Game: 100 votos comprometidos, 10
            voluntários, 20 reuniões, 5 líderes. 450 capitães ×100 votos ={" "}
            {fmt(TOTAL_MODELO)} — acima do piso que elegeu o último deputado do
            PL em 2022.
          </p>
        </Card>
        <Card delay="d-8">
          <p className="text-[clamp(0.8rem,1.1vw,1rem)] leading-relaxed text-white/80">
            <strong className="text-white">Metas operacionais, não previsão:</strong>{" "}
            cada segmento vira um contador auditável no CRM (votos
            comprometidos por comunidade, atualizado toda sexta-feira). Se uma
            fonte não performa, o modelo mostra{" "}
            <em>onde</em> e <em>quanto</em> realocar.
          </p>
        </Card>
      </div>
      <Fonte>
        Modelo: Doc. 12 (fontes de votos) · Doc. 13 (Ground Game — metas por
        capitão) · piso: TSE 2022, Alan Lopes
      </Fonte>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 15b — Base teórica da imagem (Doc. 35 / Doc. 19)                    */
/* ------------------------------------------------------------------ */

function TeoriaImagem() {
  return (
    <Slide>
      <GlowOrb className="right-[-15%] top-[-25%] h-[55vh] w-[55vh] bg-navy" />
      <Kicker>Documento 35 · Base teórica validada contra as fontes</Kicker>
      <Title>
        Por que <Coral>uma imagem</Coral>, e não uma
        &ldquo;linha visual&rdquo; genérica
      </Title>
      <div className="grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
        <Card delay="d-2">
          <p className="text-[clamp(2rem,4.5vw,3.8rem)] font-black leading-none text-coral">
            ~70%
          </p>
          <h3 className="mt-2 text-[clamp(0.9rem,1.25vw,1.1rem)] font-bold">
            Kahneman / Todorov
          </h3>
          <p className="mt-2 text-[clamp(0.78rem,1.02vw,0.95rem)] leading-relaxed text-white/70">
            Julgamentos de competência a partir de uma foto de rosto, vista por{" "}
            <strong className="text-white">décimos de segundo</strong>,
            previram corretamente ~70% das eleições estudadas — efeito maior
            entre eleitores pouco informados, exatamente o perfil
            não-ideológico do Documento 03.
          </p>
        </Card>
        <Card delay="d-3">
          <p className="text-[clamp(2rem,4.5vw,3.8rem)] font-black leading-none text-coral">
            1
          </p>
          <h3 className="mt-2 text-[clamp(0.9rem,1.25vw,1.1rem)] font-bold">
            Ries · Positioning
          </h3>
          <p className="mt-2 text-[clamp(0.78rem,1.02vw,0.95rem)] leading-relaxed text-white/70">
            Posicionamento vive de <strong className="text-white">uma palavra
            repetida sem variação</strong> (&ldquo;Volvo = segurança&rdquo;). O
            equivalente visual: uma imagem única, repetida — cada composição
            nova &ldquo;reseta&rdquo; parcialmente o efeito halo acumulado.
          </p>
        </Card>
        <Card delay="d-4">
          <p className="text-[clamp(2rem,4.5vw,3.8rem)] font-black leading-none text-coral">
            0
          </p>
          <h3 className="mt-2 text-[clamp(0.9rem,1.25vw,1.1rem)] font-bold">
            Durán Barba
          </h3>
          <p className="mt-2 text-[clamp(0.78rem,1.02vw,0.95rem)] leading-relaxed text-white/70">
            Propostas que o eleitor precisa conhecer para votar no personagem:
            zero. Vota-se na <strong className="text-white">pessoa</strong> — o
            caso Tiririca prova que a imagem carrega uma eleição inteira sem
            programa de governo conhecido.
          </p>
        </Card>
      </div>
      <p className="anim-rise d-6 mt-7 max-w-5xl text-[clamp(0.9rem,1.3vw,1.1rem)] leading-relaxed text-white/70">
        Três achados independentes, de três fontes diferentes, convergem:{" "}
        <strong className="text-coral">
          a maior parte do trabalho persuasivo acontece numa única imagem,
          repetida com disciplina quase obsessiva
        </strong>{" "}
        — não numa variedade de composições.
      </p>
      <Fonte>
        Fontes: Doc. 19 (validação teórica) · Doc. 35 · Kahneman, Thinking
        Fast and Slow · Ries &amp; Trout, Positioning · Durán Barba
      </Fonte>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 15c — Visual DNA (Doc. 26)                                          */
/* ------------------------------------------------------------------ */

const paleta = [
  { cor: "#123B6A", nome: "Azul escuro", pct: 60, sig: "Confiança · estabilidade · segurança" },
  { cor: "#FFFFFF", nome: "Branco", pct: 25, sig: "Honestidade · transparência" },
  { cor: "#F46A4E", nome: "Coral", pct: 10, sig: "Humanidade · proximidade — nunca dominante" },
  { cor: "#E8EAED", nome: "Cinza claro", pct: 5, sig: "Institucional · fundos" },
];

function VisualDna() {
  return (
    <Slide>
      <GlowOrb className="left-[-15%] top-[-25%] h-[50vh] w-[50vh] bg-navy" />
      <Kicker>Documento 26 · Visual DNA</Kicker>
      <Title>
        A identidade visual como <Coral>sistema de decisão</Coral>
      </Title>
      <div className="grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="anim-rise d-2">
          <h3 className="mb-3 text-[clamp(0.8rem,1.1vw,1rem)] font-bold uppercase tracking-[0.2em] text-white/50">
            Paleta institucional — proporção fixa
          </h3>
          <div className="flex h-[clamp(48px,8vh,72px)] w-full overflow-hidden rounded-xl">
            {paleta.map((p) => (
              <div
                key={p.nome}
                className="anim-bar d-3 flex items-end justify-center pb-1"
                style={{ width: `${p.pct}%`, backgroundColor: p.cor }}
              >
                <span
                  className="text-[11px] font-black"
                  style={{ color: p.cor === "#123B6A" ? "#fff" : "#123B6A" }}
                >
                  {p.pct}%
                </span>
              </div>
            ))}
          </div>
          <ul className="mt-4 space-y-1.5">
            {paleta.map((p) => (
              <li key={p.nome} className="flex items-center gap-3 text-[clamp(0.75rem,1vw,0.92rem)]">
                <span
                  className="h-3 w-3 shrink-0 rounded-sm ring-1 ring-white/25"
                  style={{ backgroundColor: p.cor }}
                />
                <strong className="w-24">{p.nome}</strong>
                <span className="text-white/60">{p.sig}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 rounded-xl border border-white/10 bg-white/3 p-4">
            <h4 className="text-[clamp(0.75rem,1vw,0.9rem)] font-bold uppercase tracking-wide text-coral">
              Paleta de herança (uso restrito)
            </h4>
            <div className="mt-2 flex items-center gap-3">
              <span className="h-6 w-10 rounded-sm bg-black ring-1 ring-white/25" />
              <span className="h-6 w-10 rounded-sm bg-red-600" />
              <p className="text-[clamp(0.72rem,0.95vw,0.88rem)] text-white/65">
                Preto + vermelho — as cores <strong className="text-white">reais</strong>{" "}
                da faixa coral (7º/8º grau). Só em peças da jornada
                &ldquo;de faixa-branca a faixa-coral&rdquo;.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <Card delay="d-4" className="border-l-4 border-l-coral">
            <h3 className="text-[clamp(0.9rem,1.25vw,1.1rem)] font-bold">
              O teste do contraste (fotografia)
            </h3>
            <p className="mt-2 text-[clamp(0.8rem,1.05vw,0.95rem)] leading-relaxed text-white/70">
              Toda foto responde a uma pergunta única: comunica força{" "}
              <span className="text-white/45 line-through decoration-coral">
                intimidadora
              </span>{" "}
              ou força <Coral>protetora</Coral>? Força protetora tem direção —
              Ralph voltado para alguém que protege, nunca sozinho, frontal e
              de braços cruzados.
            </p>
          </Card>
          <Card delay="d-5">
            <h3 className="text-[clamp(0.9rem,1.25vw,1.1rem)] font-bold">
              Estrutura fixa de vídeo (até 90s)
            </h3>
            <p className="mt-2 font-mono text-[clamp(0.7rem,0.95vw,0.88rem)] leading-relaxed text-white/70">
              0–3s gancho · 3–15s história real · 15–60s a virada (Ralph como
              guia) · 60–80s transformação De→Para · 80–90s CTA
            </p>
            <p className="mt-2 text-[clamp(0.75rem,1vw,0.9rem)] text-white/55">
              Regra pico-fim: todo vídeo termina em ponto alto, nunca em
              crédito institucional.
            </p>
          </Card>
          <Card delay="d-6">
            <h3 className="text-[clamp(0.9rem,1.25vw,1.1rem)] font-bold">
              Símbolo: a progressão de faixas
            </h3>
            <p className="mt-2 text-[clamp(0.8rem,1.05vw,0.95rem)] leading-relaxed text-white/70">
              Branca → azul → roxa → marrom → preta → coral: um sistema visual{" "}
              <strong className="text-white">já entendido por todo o Brasil</strong>{" "}
              — mais forte que qualquer ícone inventado. Nunca troféus ou
              faixas isoladas: só biografia, não jornada do eleitor.
            </p>
          </Card>
        </div>
      </div>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 15d — A imagem-âncora (Doc. 35)                                     */
/* ------------------------------------------------------------------ */

const validacaoImagem = [
  ["Rosto bem iluminado e legível?", "Kahneman/Todorov"],
  ["Composição repetível sem variação?", "Ries, Positioning"],
  ["Quem recebe a proteção está no centro simbólico?", "Miller, StoryBrand"],
  ["Vende o personagem, não a proposta?", "Durán Barba"],
  ["Ralph voltado para alguém, nunca isolado e frontal?", "Doc. 26 — teste do contraste"],
  ["Fotografada no Rio, em local real e atual?", "Doc. 34, 1.5"],
  ["Faixa coral é a peça real, não gráfico?", "Doc. 34, 1.2"],
  ["Nada de troféu, pódio ou conquista pessoal?", "Doc. 26, seção 5"],
];

function ImagemAncora() {
  return (
    <Slide>
      <GlowOrb className="right-[-15%] bottom-[-25%] h-[55vh] w-[55vh] bg-coral/25" />
      <Kicker>Documento 35 · A imagem-âncora</Kicker>
      <Title>
        A <Coral>uma</Coral> imagem que a campanha precisa acertar antes de
        qualquer outra
      </Title>
      <div className="grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
        <Card delay="d-2" className="border-2 border-coral/60 bg-coral/8">
          <p className="text-[clamp(0.68rem,0.9vw,0.8rem)] font-bold uppercase tracking-[0.25em] text-coral">
            Conceito em uma frase
          </p>
          <p className="mt-3 text-[clamp(1rem,1.7vw,1.45rem)] font-bold leading-snug">
            Ralph agachado ao nível do olhar de um aluno no tatame da Gracie
            Kore (Barra da Tijuca), ajustando sua faixa — com a faixa coral
            real de Ralph visível, mas não central.
          </p>
          <ul className="mt-4 space-y-2 text-[clamp(0.75rem,1vw,0.92rem)] leading-relaxed text-white/70">
            <li>
              <strong className="text-white">Agachado, nivelado</strong> — é
              fisicamente impossível fotografar essa pose como agressiva.
            </li>
            <li>
              <strong className="text-white">O aluno no centro simbólico</strong>{" "}
              — o eleitor é o herói; Ralph é o guia a serviço dele.
            </li>
            <li>
              <strong className="text-white">Luz fria, um só acento quente</strong>{" "}
              — a faixa vermelha guia o olho direto à prova de autenticidade.
            </li>
            <li>
              <strong className="text-white">Olhar direto, mas caloroso</strong>{" "}
              — concilia o efeito Todorov (rosto legível) com o teste do
              contraste (não-confronto).
            </li>
          </ul>
        </Card>
        <div className="anim-rise d-4">
          <h3 className="mb-3 text-[clamp(0.8rem,1.1vw,1rem)] font-bold uppercase tracking-[0.2em] text-white/50">
            Tabela de validação cruzada — antes de fotografar
          </h3>
          <div className="space-y-1.5">
            {validacaoImagem.map(([q, fonte], i) => (
              <div
                key={q}
                className={`anim-rise d-${cap(i + 1)} flex items-center justify-between gap-4 rounded-lg border border-white/8 bg-white/3 px-4 py-[clamp(4px,0.7vh,9px)]`}
              >
                <span className="text-[clamp(0.72rem,0.98vw,0.92rem)] font-medium">
                  {q}
                </span>
                <span className="shrink-0 text-[clamp(0.6rem,0.8vw,0.72rem)] font-bold uppercase tracking-wide text-coral/80">
                  {fonte}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[clamp(0.72rem,0.95vw,0.88rem)] text-white/55">
            Se qualquer resposta falhar, a foto não vira âncora — no máximo,
            material de apoio. Sessão real na Gracie Kore, nunca imagem gerada
            artificialmente.
          </p>
        </div>
      </div>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 15e — Digital DNA (Doc. 27)                                         */
/* ------------------------------------------------------------------ */

const canais = [
  ["TikTok / Reels", "Descoberta", "Alcançar quem não conhece Ralph", "Compartilhamentos", "1"],
  ["Instagram", "Aprofundamento", "Construir confiança e identificação", "Salvamentos + replies", "1–2"],
  ["YouTube", "Prova", "Histórias longas, documentário, entrevistas", "Tempo de visualização", "2–3"],
  ["WhatsApp", "Comunidade", "Conversa direta por território, nunca massa", "Taxa de resposta", "3–4"],
  ["Site", "Credibilidade", "Jornalistas, doadores, eleitor engajado", "Tempo em propostas", "4"],
];

function DigitalDna() {
  return (
    <Slide>
      <GlowOrb className="left-[-15%] bottom-[-25%] h-[50vh] w-[50vh] bg-navy" />
      <Kicker>Documento 27 · Digital DNA</Kicker>
      <Title>
        Cada canal tem <Coral>um papel</Coral> na jornada — nunca a mesma
        peça repetida
      </Title>
      <div className="max-w-6xl">
        <div className="mb-2 grid grid-cols-[1fr_0.8fr_1.6fr_1fr_auto] items-center gap-x-4 px-4 text-[clamp(0.6rem,0.85vw,0.75rem)] font-bold uppercase tracking-[0.2em] text-white/35">
          <span>Canal</span>
          <span>Papel</span>
          <span>Função na jornada</span>
          <span>KPI primário</span>
          <span>CTA</span>
        </div>
        <div className="space-y-1.5">
          {canais.map(([canal, papel, fn, kpi, cta], i) => (
            <div
              key={canal}
              className={`anim-rise d-${cap(i + 1)} grid grid-cols-[1fr_0.8fr_1.6fr_1fr_auto] items-center gap-x-4 rounded-lg border border-white/8 bg-white/3 px-4 py-[clamp(6px,1vh,12px)]`}
            >
              <span className="text-[clamp(0.82rem,1.15vw,1.05rem)] font-bold">
                {canal}
              </span>
              <span className="text-[clamp(0.75rem,1vw,0.92rem)] font-semibold text-coral">
                {papel}
              </span>
              <span className="text-[clamp(0.72rem,0.95vw,0.88rem)] text-white/65">
                {fn}
              </span>
              <span className="text-[clamp(0.72rem,0.95vw,0.88rem)] text-white/65">
                {kpi}
              </span>
              <span className="rounded-md bg-white/10 px-2.5 py-1 text-[clamp(0.65rem,0.85vw,0.78rem)] font-black tabular-nums">
                N{cta}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2">
        <Card delay="d-6" className="border-l-4 border-l-coral">
          <p className="text-[clamp(0.8rem,1.1vw,1rem)] leading-relaxed text-white/80">
            <strong className="text-coral">Regra fixa:</strong> nunca pedir
            voto ou doação (Nível 4) num canal de descoberta (Nível 1) — o
            erro clássico que a escada de CTA existe para evitar.
          </p>
        </Card>
        <Card delay="d-7">
          <p className="text-[clamp(0.8rem,1.1vw,1rem)] leading-relaxed text-white/80">
            <strong className="text-white">Adaptar, não repetir:</strong> uma
            história = corte de 15–30s (TikTok) → 60–90s com contexto
            (Instagram) → versão completa (YouTube) → resumo + convite
            (WhatsApp). Nenhum KPI de vaidade sem o KPI de influência ao lado.
          </p>
        </Card>
      </div>
      <Fonte>
        Fonte: Doc. 27 — Digital DNA (escada de CTA e KPIs por canal)
      </Fonte>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 16 — O filtro único                                                 */
/* ------------------------------------------------------------------ */

function Filtro() {
  return (
    <Slide className="items-center text-center" grid={false}>
      <GlowOrb className="left-1/2 top-1/2 h-[65vh] w-[65vh] -translate-x-1/2 -translate-y-1/2 bg-navy" />
      <Kicker className="text-center">
        A regra prática para toda comunicação futura
      </Kicker>
      <p className="anim-rise d-2 max-w-5xl text-[clamp(1.8rem,5vw,4.5rem)] font-black leading-[1.1] tracking-tight">
        Todo vídeo, foto, discurso e post passa por{" "}
        <Coral>um único teste</Coral>:
      </p>
      <blockquote className="anim-rise d-4 mt-12 rounded-3xl border-2 border-coral bg-coral/10 px-12 py-8 text-[clamp(1.3rem,3vw,2.6rem)] font-extrabold shadow-[0_0_80px_rgba(244,106,78,0.3)]">
        &ldquo;Isso faz Ralph parecer mais protetor?&rdquo;
      </blockquote>
      <p className="anim-fade d-6 mt-10 text-[clamp(0.95rem,1.5vw,1.25rem)] text-white/60">
        Se a resposta for não: <strong className="text-white">revisar</strong>.
        Essa simplicidade é uma força, não uma limitação.
      </p>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 16a2 — Medição contínua                                             */
/* ------------------------------------------------------------------ */

const kpis: [string, string, string, string][] = [
  [
    "Votos comprometidos",
    "CRM · por comunidade",
    "semanal",
    "abaixo de 80% da meta do mês → realocar capitães entre fontes",
  ],
  [
    "Capitães ativos",
    "relatórios de sexta-feira",
    "semanal",
    "capitão sem atividade por 2 semanas → substituição ou reforço",
  ],
  [
    "Reconhecimento de nome",
    "pesquisa de rastreio",
    "mensal",
    "estagnado por 2 ondas → revisar mix de canais de descoberta",
  ],
  [
    "Associação \u201cRalph = protetor\u201d",
    "pesquisa + social listening",
    "mensal",
    "se \u201clutador/agressivo\u201d dominar → reforçar filtro nas peças",
  ],
  [
    "Sentimento por território",
    "Sentiment Engine · War Room",
    "diário",
    "queda sustentada de confiança → protocolo de crise (Doc. 33)",
  ],
];

function MedicaoContinua() {
  return (
    <Slide>
      <GlowOrb className="right-[-15%] bottom-[-25%] h-[55vh] w-[55vh] bg-navy" />
      <Kicker>O dado não termina no diagnóstico</Kicker>
      <Title>
        A campanha se mede — e se <Coral>corrige</Coral> — todo mês
      </Title>
      <div className="max-w-6xl">
        <div className="mb-2 grid grid-cols-[1.1fr_0.9fr_auto_1.5fr] items-center gap-x-4 px-4 text-[clamp(0.6rem,0.85vw,0.75rem)] font-bold uppercase tracking-[0.2em] text-white/35">
          <span>Indicador</span>
          <span>Instrumento</span>
          <span>Cadência</span>
          <span>Gatilho de correção de rumo</span>
        </div>
        <div className="space-y-1.5">
          {kpis.map(([kpi, instr, cad, gatilho], i) => (
            <div
              key={kpi}
              className={`anim-rise d-${cap(i + 1)} grid grid-cols-[1.1fr_0.9fr_auto_1.5fr] items-center gap-x-4 rounded-lg border border-white/8 bg-white/3 px-4 py-[clamp(6px,1vh,12px)]`}
            >
              <span className="text-[clamp(0.78rem,1.08vw,1rem)] font-bold">
                {kpi}
              </span>
              <span className="text-[clamp(0.7rem,0.95vw,0.88rem)] text-white/60">
                {instr}
              </span>
              <span className="rounded-md bg-white/10 px-2.5 py-1 text-[clamp(0.6rem,0.8vw,0.74rem)] font-black uppercase tracking-wide text-coral">
                {cad}
              </span>
              <span className="text-[clamp(0.7rem,0.95vw,0.88rem)] leading-relaxed text-white/65">
                {gatilho}
              </span>
            </div>
          ))}
        </div>
      </div>
      <p className="anim-rise d-7 mt-7 max-w-5xl text-[clamp(0.9rem,1.3vw,1.1rem)] leading-relaxed text-white/70">
        É isso que diferencia dados de intuição:{" "}
        <strong className="text-white">
          intuição não avisa quando está errada — um sistema de medição avisa,
          com antecedência e com endereço
        </strong>
        . Cada hipótese desta apresentação tem um número que a confirma ou a
        derruba durante a própria campanha.
      </p>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 16b — O que ainda falta                                             */
/* ------------------------------------------------------------------ */

const pendencias = [
  {
    t: "Testar a mensagem em campo",
    d: "Pesquisa quantitativa e grupos focais para confirmar \u201cA verdadeira força existe para proteger\u201d.",
  },
  {
    t: "Levantar histórias reais",
    d: "Casos concretos que comprovem o contraste \u201cduro por fora, protetor por dentro\u201d — não apenas o conceito.",
  },
  {
    t: "Revisar o material já produzido",
    d: "Todos os roteiros, textos e peças passam pelo novo filtro do Protetor.",
  },
  {
    t: "Confirmar com o próprio Ralph",
    d: "Conversa aberta sobre a leitura do conflito narrativo — a frase \u201cque eu não tenho coração\u201d — para garantir conforto total.",
  },
];

function Pendencias() {
  return (
    <Slide>
      <GlowOrb className="left-[-15%] top-[-25%] h-[50vh] w-[50vh] bg-navy" />
      <Kicker>Parte 13 · Transparência total com o candidato</Kicker>
      <Title>
        O que ainda <Coral>falta</Coral>
      </Title>
      <div className="grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
        {pendencias.map((p, i) => (
          <Card key={p.t} delay={`d-${i + 2}`} className="flex gap-5">
            <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-coral text-sm font-black text-coral">
              {i + 1}
            </span>
            <div>
              <h3 className="text-[clamp(0.95rem,1.4vw,1.25rem)] font-bold">
                {p.t}
              </h3>
              <p className="mt-2 text-[clamp(0.82rem,1.1vw,1rem)] leading-relaxed text-white/70">
                {p.d}
              </p>
            </div>
          </Card>
        ))}
      </div>
      <p className="anim-rise d-7 mt-8 max-w-4xl text-[clamp(0.9rem,1.35vw,1.15rem)] leading-relaxed text-white/60">
        Dizemos isso porque uma estratégia honesta mostra também o que ainda não
        foi validado — <strong className="text-white">nada aqui é caixa-preta</strong>.
      </p>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 17 — Conclusões                                                     */
/* ------------------------------------------------------------------ */

const conclusoes = [
  "O mercado conservador do Rio está saturado. Competir \u201cmais forte\u201d nesse território é perder.",
  "O maior ativo é um conflito humano real: como Ralph é visto × quem ele realmente é.",
  "A diferenciação está em como Ralph prova que protege: décadas reais formando pessoas.",
  "O Mentor não morreu — virou prova, não discurso. Fato demonstrável, não bandeira.",
  "Toda comunicação passa pelo filtro único do Protetor.",
  "Próximo passo: validar em campo — pesquisa, histórias reais, revisão do material.",
];

function Conclusoes() {
  return (
    <Slide>
      <GlowOrb className="right-[-15%] bottom-[-25%] h-[55vh] w-[55vh] bg-coral/25" />
      <Kicker>Fechamento</Kicker>
      <Title>Seis conclusões</Title>
      <ol className="max-w-4xl space-y-3">
        {conclusoes.map((c, i) => (
          <li
            key={i}
            className={`anim-rise d-${i + 1} flex items-start gap-5 rounded-xl border border-white/10 bg-white/4 px-6 py-3.5`}
          >
            <span className="mt-0.5 text-[clamp(1.1rem,1.8vw,1.5rem)] font-black text-coral">
              {i + 1}
            </span>
            <p className="text-[clamp(0.85rem,1.25vw,1.1rem)] font-medium leading-relaxed text-white/85">
              {c}
            </p>
          </li>
        ))}
      </ol>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 17b — Data Room (anexo)                                             */
/* ------------------------------------------------------------------ */

const acervo: [string, string, string[]][] = [
  [
    "Inteligência e diagnóstico",
    "9 documentos",
    [
      "Investigação estratégica",
      "Psicologia do eleitor conservador carioca",
      "Mapa do eleitor · Voter DNA",
      "Posicionamento estratégico · Right to Exist",
      "Diagnóstico consolidado",
    ],
  ],
  [
    "Dossiês de adversários",
    "8 documentos",
    [
      "Matriz competitiva (22 nomes, votos TSE)",
      "Poubel · Malafaia · Anderson Moraes",
      "Knoploch · Jordy · Carlos Augusto · Alan Lopes",
      "Ameaça crítica corrigida (17/07/2026)",
    ],
  ],
  [
    "Identidade e marca",
    "12 documentos",
    [
      "Political DNA real (questionário de Ralph)",
      "Brand · Narrative · Visual · Digital · Community DNA",
      "Brand Bible · Political Myth · Cultural DNA",
      "Arquitetura ideológica",
    ],
  ],
  [
    "Operação de campanha",
    "10 documentos",
    [
      "Ground Game · Fontes de votos",
      "Calendário editorial · Roteiros de lançamento",
      "Plano de imprensa · Manual de debates",
      "Protocolo de crise · Call to action",
    ],
  ],
  [
    "Frameworks proprietários",
    "6 documentos",
    [
      "Trust Engine · Political Gravity",
      "Identity Loop · Emotional Territory",
      "Political Brain · Political Myth",
    ],
  ],
  [
    "Validação e auditoria",
    "7 documentos",
    [
      "Validação teórica contra as fontes (Doc. 19)",
      "Plano de fechamento de gaps (Doc. 20)",
      "Crítica às propostas detalhadas (Doc. 23)",
      "Auditoria de dados públicos (Doc. 34) · Imagem-âncora (Doc. 35)",
    ],
  ],
];

function DataRoom() {
  return (
    <Slide>
      <GlowOrb className="left-[-15%] bottom-[-25%] h-[55vh] w-[55vh] bg-navy" />
      <Kicker>Anexo · Nada aqui é caixa-preta</Kicker>
      <Title>
        Data Room: os <Coral>52 documentos</Coral> por trás de cada slide
      </Title>
      <div className="grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {acervo.map(([cat, qtd, docs], i) => (
          <Card key={cat} delay={`d-${cap(i + 1)}`} className="flex flex-col">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-[clamp(0.82rem,1.15vw,1.05rem)] font-extrabold">
                {cat}
              </h3>
              <span className="shrink-0 text-[clamp(0.6rem,0.8rem,0.75rem)] font-bold uppercase tracking-wide text-coral">
                {qtd}
              </span>
            </div>
            <ul className="mt-3 space-y-1.5">
              {docs.map((d) => (
                <li
                  key={d}
                  className="flex gap-2 text-[clamp(0.68rem,0.92vw,0.85rem)] leading-snug text-white/60"
                >
                  <span className="text-coral/70">·</span>
                  {d}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
      <p className="anim-rise d-7 mt-6 max-w-5xl text-[clamp(0.85rem,1.25vw,1.05rem)] leading-relaxed text-white/65">
        Acervo completo à disposição do candidato e da equipe —{" "}
        <strong className="text-white">
          qualquer afirmação desta apresentação pode ser auditada até a fonte
          primária
        </strong>
        , documento por documento.
      </p>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 18 — Fechamento                                                     */
/* ------------------------------------------------------------------ */

function Fechamento() {
  return (
    <Slide className="items-center text-center" grid={false}>
      <GlowOrb className="left-[-10%] top-[-20%] h-[55vh] w-[55vh] bg-navy" />
      <GlowOrb className="bottom-[-25%] right-[-10%] h-[60vh] w-[60vh] bg-coral/35" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/fechamento.png"
        alt="Ralph Gracie — Força para proteger. Caráter para servir. Exemplo para transformar. Juntos somos mais fortes."
        className="anim-rise mx-auto max-h-[52vh] w-auto max-w-[86vw] rounded-2xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.55)]"
      />
      <blockquote className="anim-rise d-3 mt-8 max-w-5xl text-[clamp(0.95rem,1.7vw,1.45rem)] font-semibold leading-[1.45] text-white/90">
        &ldquo;A virada mais importante desse projeto não veio de nenhuma
        pesquisa — <Coral>veio do próprio Ralph</Coral>. Simples e honesta:{" "}
        <em>&lsquo;que eu não tenho coração&rsquo;</em>. É exatamente o
        contrário disso que o Rio precisa ver.{" "}
        <strong className="text-white">
          E é exatamente isso que essa campanha vai mostrar.
        </strong>
        &rdquo;
      </blockquote>
      <div className="anim-bar d-5 mx-auto mt-6 h-[3px] w-40 bg-coral" />
      <p className="anim-fade d-6 mt-5 text-[clamp(0.85rem,1.6vw,1.3rem)] font-extrabold uppercase tracking-[0.25em]">
        A verdadeira força existe para <Coral>proteger</Coral>
      </p>
    </Slide>
  );
}

export const slides: { id: string; node: ReactNode }[] = [
  { id: "capa", node: <Capa /> },
  { id: "abertura", node: <Abertura /> },
  { id: "metodologia", node: <Metodologia /> },
  { id: "estudo-numeros", node: <EstudoNumeros /> },
  { id: "frameworks", node: <Frameworks /> },
  { id: "por-que", node: <PorQue /> },
  { id: "terreno", node: <Terreno /> },
  { id: "eleitor", node: <Eleitor /> },
  { id: "concorrencia", node: <Concorrencia /> },
  { id: "aritmetica", node: <AritmeticaEleicao /> },
  { id: "escala-desafio", node: <EscalaDesafio /> },
  { id: "tiers-ameaca", node: <TiersAmeaca /> },
  { id: "matriz-posicionamento", node: <MatrizPosicionamento /> },
  { id: "mapa-posicionamento", node: <MapaPosicionamento /> },
  { id: "dados-publicos", node: <DadosPublicos /> },
  { id: "virada", node: <Virada /> },
  { id: "frase", node: <Frase /> },
  { id: "triangulacao", node: <Triangulacao /> },
  { id: "conflito", node: <Conflito /> },
  { id: "arquetipo", node: <Arquetipo /> },
  { id: "posicionamento", node: <Posicionamento /> },
  { id: "diferenciacao", node: <Diferenciacao /> },
  { id: "marca-operacao", node: <MarcaOperacao /> },
  { id: "caminho-votos", node: <CaminhoVotos /> },
  { id: "teoria-imagem", node: <TeoriaImagem /> },
  { id: "visual-dna", node: <VisualDna /> },
  { id: "imagem-ancora", node: <ImagemAncora /> },
  { id: "digital-dna", node: <DigitalDna /> },
  { id: "filtro", node: <Filtro /> },
  { id: "medicao-continua", node: <MedicaoContinua /> },
  { id: "pendencias", node: <Pendencias /> },
  { id: "conclusoes", node: <Conclusoes /> },
  { id: "data-room", node: <DataRoom /> },
  { id: "fechamento", node: <Fechamento /> },
];
