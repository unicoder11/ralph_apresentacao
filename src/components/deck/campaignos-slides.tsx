import type { ReactNode } from "react";
import { Slide, Kicker, Title, Coral, Card, GlowOrb } from "./primitives";

/* ------------------------------------------------------------------ */
/* 01 — Capa                                                           */
/* ------------------------------------------------------------------ */

function Capa() {
  return (
    <Slide className="items-center text-center">
      <GlowOrb className="left-[-10%] top-[-20%] h-[60vh] w-[60vh] bg-navy" />
      <GlowOrb className="bottom-[-25%] right-[-10%] h-[55vh] w-[55vh] bg-coral/40" />
      <p className="anim-rise text-[clamp(0.75rem,1.2vw,1rem)] font-bold uppercase tracking-[0.5em] text-white/50">
        The Operating System for Political Campaigns
      </p>
      <h1 className="anim-rise d-2 mt-6 text-[clamp(3rem,9vw,8rem)] font-black leading-none tracking-tight">
        Campaign<Coral>OS</Coral>
      </h1>
      <div className="anim-bar d-4 mx-auto mt-8 h-[3px] w-40 bg-coral" />
      <p className="anim-rise d-5 mt-8 max-w-3xl text-[clamp(1rem,2vw,1.6rem)] font-medium leading-snug text-white/85">
        A campanha deixa de funcionar em dezenas de planilhas, grupos e
        documentos espalhados.{" "}
        <Coral>Passa a funcionar como um único organismo.</Coral>
      </p>
      <p className="anim-fade d-7 mt-14 text-sm font-medium uppercase tracking-[0.3em] text-white/40">
        Inteligência Artificial · Conhecimento · Estratégia · Execução
      </p>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 02 — A filosofia                                                    */
/* ------------------------------------------------------------------ */

const ativos = [
  ["Conhecimento", "Tudo que a campanha sabe — hoje disperso em documentos e cabeças"],
  ["Estratégia", "As decisões que definem o rumo — hoje desconectadas dos dados"],
  ["Comunicação", "Cada peça, discurso e post — hoje sem memória do que veio antes"],
  ["Execução", "Território, eventos, voluntários — hoje coordenados no improviso"],
];

function Filosofia() {
  return (
    <Slide>
      <GlowOrb className="right-[-15%] top-[-25%] h-[55vh] w-[55vh] bg-navy" />
      <Kicker>A filosofia</Kicker>
      <Title>
        Toda campanha tem quatro ativos.{" "}
        <span className="text-white/40">Hoje, separados.</span>
      </Title>
      <div className="grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
        {ativos.map(([nome, desc], i) => (
          <Card key={nome} delay={`d-${i + 2}`} className="flex gap-5">
            <span className="text-[clamp(1.8rem,3vw,2.8rem)] font-black leading-none text-white/15">
              {i + 1}
            </span>
            <div>
              <h3 className="text-[clamp(1rem,1.5vw,1.3rem)] font-bold text-coral">
                {nome}
              </h3>
              <p className="mt-2 text-[clamp(0.8rem,1.05vw,1rem)] leading-relaxed text-white/65">
                {desc}
              </p>
            </div>
          </Card>
        ))}
      </div>
      <p className="anim-rise d-6 mt-8 text-[clamp(1rem,1.8vw,1.5rem)] font-semibold">
        CampaignOS <Coral>conecta tudo</Coral> — em uma única plataforma.
      </p>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 03 — O princípio mais importante                                    */
/* ------------------------------------------------------------------ */

function Principio() {
  return (
    <Slide className="items-center text-center" grid={false}>
      <GlowOrb className="left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 bg-navy" />
      <Kicker className="text-center">O princípio mais importante</Kicker>
      <div className="space-y-3">
        {["ideologia", "partido", "candidato"].map((coisa, i) => (
          <p
            key={coisa}
            className={`anim-rise d-${i + 1} text-[clamp(1.4rem,3.4vw,3rem)] font-extrabold text-white/35`}
          >
            CampaignOS não possui{" "}
            <span className="line-through decoration-coral decoration-4">
              {coisa}
            </span>
            .
          </p>
        ))}
      </div>
      <p className="anim-rise d-5 mt-10 text-[clamp(2rem,5.5vw,5rem)] font-black">
        CampaignOS <Coral>aprende</Coral>.
      </p>
      <p className="anim-rise d-7 mt-10 max-w-3xl text-[clamp(0.95rem,1.6vw,1.3rem)] leading-relaxed text-white/70">
        O candidato define a identidade. A IA aprende essa identidade.{" "}
        <strong className="text-white">
          Depois protege essa identidade durante toda a campanha.
        </strong>
      </p>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 04 — Knowledge Graph                                                */
/* ------------------------------------------------------------------ */

const conexoes = [
  "Projetos de lei",
  "Discursos",
  "Vídeos",
  "Notícias",
  "Pesquisas",
  "Posicionamentos",
  "Perguntas frequentes",
  "Debates",
  "Propostas",
];

function KnowledgeGraph() {
  return (
    <Slide>
      <GlowOrb className="left-[-15%] bottom-[-25%] h-[55vh] w-[55vh] bg-coral/25" />
      <Kicker>Como funciona</Kicker>
      <Title>
        No centro, um Knowledge Graph.
        <br />
        <span className="text-white/50">Não é um banco de documentos.</span>{" "}
        <Coral>É um cérebro.</Coral>
      </Title>
      <div className="grid max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1.4fr]">
        <Card delay="d-2" className="border-l-4 border-l-coral">
          <p className="text-[clamp(0.75rem,1vw,0.9rem)] font-bold uppercase tracking-[0.25em] text-coral">
            Exemplo
          </p>
          <p className="mt-3 text-[clamp(1rem,1.6vw,1.4rem)] font-semibold leading-snug">
            Uma entrevista fala sobre segurança.
          </p>
          <p className="mt-3 text-[clamp(0.85rem,1.15vw,1.05rem)] leading-relaxed text-white/70">
            Essa entrevista fica{" "}
            <strong className="text-white">automaticamente ligada</strong> a
            tudo que a campanha já sabe sobre o tema →
          </p>
        </Card>
        <div className="flex flex-wrap gap-3">
          {conexoes.map((c, i) => (
            <span
              key={c}
              className={`anim-rise d-${Math.min(i + 2, 8)} rounded-full border border-white/15 bg-white/4 px-5 py-2.5 text-[clamp(0.8rem,1.1vw,1rem)] font-semibold text-white/80`}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
      <p className="anim-rise d-8 mt-8 text-[clamp(1rem,1.8vw,1.5rem)] font-semibold">
        Toda informação <Coral>conversa</Coral> com toda informação.
      </p>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 05 — A arquitetura                                                  */
/* ------------------------------------------------------------------ */

const bibliotecas = [
  "Political DNA", "War Book", "Brand Bible", "Speech Library", "Debate Library",
  "Policy Library", "Content Library", "Media Library", "Polling", "Research",
  "Legal", "CRM", "Ground Game", "Analytics", "News Intelligence",
  "Social Listening", "Calendar", "Events", "Communities", "Donors",
  "Volunteers", "Projects", "Legislation", "Public Data",
];

const agentes = [
  "Research", "Content", "Brand", "Speech", "Debate", "Ground", "CRM",
  "Media", "Analytics", "Polling", "War Room", "Legal", "Image", "Video",
  "Voice", "Automation",
];

const interfaces = ["Web", "Mobile", "WhatsApp", "Telegram", "Slack", "API", "Voice Assistant"];

function Camada({
  titulo,
  children,
  delay,
  destaque = false,
}: {
  titulo: string;
  children: ReactNode;
  delay: string;
  destaque?: boolean;
}) {
  return (
    <div
      className={`anim-rise ${delay} rounded-xl border px-5 py-3 ${
        destaque ? "border-coral/50 bg-coral/8" : "border-white/10 bg-white/3"
      }`}
    >
      <p
        className={`mb-2 text-[clamp(0.62rem,0.85vw,0.78rem)] font-bold uppercase tracking-[0.25em] ${
          destaque ? "text-coral" : "text-white/45"
        }`}
      >
        {titulo}
      </p>
      {children}
    </div>
  );
}

function Arquitetura() {
  return (
    <Slide>
      <GlowOrb className="right-[-20%] top-[-25%] h-[55vh] w-[55vh] bg-navy" />
      <Kicker>A arquitetura</Kicker>
      <Title>Quatro camadas, um organismo</Title>
      <div className="max-w-6xl space-y-2.5">
        <Camada titulo="Knowledge Graph — o cérebro" delay="d-1" destaque>
          <div className="flex flex-wrap gap-1.5">
            {bibliotecas.map((b) => (
              <span
                key={b}
                className="rounded-md bg-white/8 px-2.5 py-1 text-[clamp(0.6rem,0.82vw,0.76rem)] font-semibold text-white/75"
              >
                {b}
              </span>
            ))}
          </div>
        </Camada>
        <p className="anim-fade d-3 text-center text-coral">↓</p>
        <Camada titulo="AI Orchestrator — coordena todos os agentes" delay="d-3">
          <p className="text-[clamp(0.72rem,0.98vw,0.9rem)] text-white/70">
            Toda solicitação passa pelo orquestrador, que decide quais agentes
            consultar e em que ordem.
          </p>
        </Camada>
        <p className="anim-fade d-4 text-center text-coral">↓</p>
        <Camada titulo="Specialized Agents — 16+ IAs especializadas" delay="d-4">
          <div className="flex flex-wrap gap-1.5">
            {agentes.map((a) => (
              <span
                key={a}
                className="rounded-md bg-coral/15 px-2.5 py-1 text-[clamp(0.6rem,0.82vw,0.76rem)] font-semibold text-coral"
              >
                {a} AI
              </span>
            ))}
          </div>
        </Camada>
        <p className="anim-fade d-5 text-center text-coral">↓</p>
        <Camada titulo="Interfaces — onde a equipe trabalha" delay="d-5">
          <div className="flex flex-wrap gap-1.5">
            {interfaces.map((i) => (
              <span
                key={i}
                className="rounded-md bg-white/8 px-2.5 py-1 text-[clamp(0.6rem,0.82vw,0.76rem)] font-semibold text-white/75"
              >
                {i}
              </span>
            ))}
          </div>
        </Camada>
      </div>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 06 — Como o sistema aprende                                         */
/* ------------------------------------------------------------------ */

const insumos = [
  "Entrevistas", "Questionários", "Histórias", "Valores", "Vídeos",
  "Discursos", "Podcasts", "Livros", "Biografia",
];

function ComoAprende() {
  return (
    <Slide>
      <GlowOrb className="left-[-15%] top-[-25%] h-[50vh] w-[50vh] bg-navy" />
      <Kicker>Como o sistema aprende</Kicker>
      <Title>
        O primeiro módulo nunca gera conteúdo.{" "}
        <Coral>Ele aprende.</Coral>
      </Title>
      <div className="flex max-w-4xl flex-wrap gap-3">
        {insumos.map((s, i) => (
          <span
            key={s}
            className={`anim-rise d-${Math.min(i + 1, 8)} rounded-full border border-white/15 bg-white/4 px-5 py-2.5 text-[clamp(0.8rem,1.15vw,1.05rem)] font-semibold text-white/80`}
          >
            {s}
          </span>
        ))}
      </div>
      <p className="anim-rise d-6 mt-8 max-w-4xl text-[clamp(0.95rem,1.5vw,1.25rem)] leading-relaxed text-white/70">
        Tudo isso forma o <strong className="text-white">Political DNA</strong>.
        E esse módulo responde apenas uma pergunta:
      </p>
      <blockquote className="anim-rise d-7 mt-6 w-fit rounded-2xl border-2 border-coral bg-coral/10 px-10 py-6 text-[clamp(1.3rem,2.8vw,2.4rem)] font-extrabold shadow-[0_0_60px_rgba(244,106,78,0.25)]">
        &ldquo;Isso parece o candidato?&rdquo;
      </blockquote>
      <p className="anim-fade d-8 mt-6 text-[clamp(0.85rem,1.25vw,1.1rem)] text-white/60">
        Toda IA consulta esse módulo antes de produzir qualquer resposta.
      </p>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 07 — Political DNA                                                  */
/* ------------------------------------------------------------------ */

const dnaItens = [
  "História", "Personalidade", "Valores", "Arquétipos", "Linguagem",
  "Estilo", "Humor", "Tom de voz", "Medos", "Gatilhos emocionais",
  "Objetivos", "Posicionamentos", "Temas proibidos", "Temas prioritários",
  "Identidade visual", "Narrativa",
];

function PoliticalDna() {
  return (
    <Slide>
      <GlowOrb className="right-[-15%] bottom-[-25%] h-[55vh] w-[55vh] bg-coral/25" />
      <Kicker>O coração do sistema</Kicker>
      <Title>
        Political <Coral>DNA</Coral>
      </Title>
      <div className="flex max-w-5xl flex-wrap gap-2.5">
        {dnaItens.map((item, i) => (
          <span
            key={item}
            className={`anim-rise d-${Math.min(Math.floor(i / 3) + 1, 8)} rounded-lg border border-white/12 bg-white/4 px-4 py-2 text-[clamp(0.78rem,1.08vw,1rem)] font-semibold text-white/80`}
          >
            {item}
          </span>
        ))}
      </div>
      <Card delay="d-7" className="mt-10 max-w-4xl border-l-4 border-l-coral">
        <p className="text-[clamp(0.95rem,1.5vw,1.3rem)] font-semibold leading-snug">
          Esse módulo é <Coral>único para cada candidato</Coral> — e é a única
          coisa que muda de uma campanha para outra.
        </p>
      </Card>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 08 — War Book                                                       */
/* ------------------------------------------------------------------ */

const warbookItens = [
  "Diagnóstico", "Histórico", "Estatísticas", "Legislação", "Projetos",
  "Perguntas difíceis", "Respostas", "Argumentos", "Contra-argumentos",
  "Casos reais", "Fontes", "Propostas", "Discursos", "Vídeos", "Posts",
];

function WarBook() {
  return (
    <Slide>
      <GlowOrb className="left-[-15%] bottom-[-25%] h-[50vh] w-[50vh] bg-navy" />
      <Kicker>A maior biblioteca do sistema</Kicker>
      <Title>
        War Book:{" "}
        <span className="text-white/50">centenas de temas públicos,</span>{" "}
        <Coral>tudo conectado</Coral>
      </Title>
      <div className="grid max-w-6xl grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_1.5fr]">
        <Card delay="d-2" className="border-coral/40">
          <p className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none text-coral">
            100s
          </p>
          <p className="mt-2 text-[clamp(0.9rem,1.3vw,1.15rem)] font-bold">
            de temas públicos
          </p>
          <p className="mt-3 text-[clamp(0.8rem,1.05vw,0.95rem)] leading-relaxed text-white/65">
            Segurança, saúde, educação, economia, transporte… cada tema é um nó
            do Knowledge Graph com tudo que a campanha precisa para falar dele
            com segurança.
          </p>
        </Card>
        <div>
          <p className="anim-rise d-3 mb-3 text-[clamp(0.75rem,1vw,0.9rem)] font-bold uppercase tracking-[0.25em] text-white/45">
            Cada tema possui
          </p>
          <div className="flex flex-wrap gap-2">
            {warbookItens.map((item, i) => (
              <span
                key={item}
                className={`anim-rise d-${Math.min(Math.floor(i / 3) + 3, 8)} rounded-lg border border-white/12 bg-white/4 px-4 py-2 text-[clamp(0.75rem,1vw,0.95rem)] font-semibold text-white/80`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 09 — Content Engine                                                 */
/* ------------------------------------------------------------------ */

const pipeline = [
  "Political DNA", "Brand Bible", "Narrativa", "War Book",
  "Notícias", "Sentimento", "Calendário", "Redes sociais",
];

function ContentEngine() {
  return (
    <Slide>
      <GlowOrb className="right-[-15%] top-[-25%] h-[50vh] w-[50vh] bg-navy" />
      <Kicker>Content Engine</Kicker>
      <Title>
        Um pedido simples.{" "}
        <span className="text-white/50">Oito consultas antes de responder.</span>
      </Title>
      <Card delay="d-1" className="mb-8 w-fit border-l-4 border-l-coral">
        <p className="font-mono text-[clamp(1rem,1.8vw,1.5rem)] font-bold">
          &gt; &ldquo;Crie um vídeo sobre segurança.&rdquo;
        </p>
      </Card>
      <div className="flex max-w-6xl flex-wrap items-center gap-2">
        {pipeline.map((p, i) => (
          <div key={p} className="contents">
            <span
              className={`anim-rise d-${Math.min(i + 1, 8)} rounded-xl border border-white/15 bg-white/4 px-5 py-3 text-[clamp(0.78rem,1.1vw,1rem)] font-bold text-white/85`}
            >
              {p}
            </span>
            {i < pipeline.length - 1 && (
              <span className={`anim-fade d-${Math.min(i + 2, 8)} text-coral`}>
                →
              </span>
            )}
          </div>
        ))}
      </div>
      <p className="anim-rise d-8 mt-10 text-[clamp(1rem,1.8vw,1.5rem)] font-semibold">
        <Coral>Só então</Coral> produz o conteúdo — coerente com tudo que veio
        antes.
      </p>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 10 — War Room + Sentiment                                           */
/* ------------------------------------------------------------------ */

const monitoramento = [
  "Google News", "Twitter/X", "Instagram", "TikTok", "Facebook",
  "YouTube", "Google Trends", "Pesquisas", "Concorrentes", "Agenda pública",
];

const emocoes = ["Confiança", "Raiva", "Esperança", "Medo", "Orgulho", "Frustração"];

function WarRoomSentiment() {
  return (
    <Slide>
      <GlowOrb className="left-[-15%] top-[-25%] h-[55vh] w-[55vh] bg-coral/20" />
      <Kicker>War Room · Sentiment Engine</Kicker>
      <Title>
        Funciona 24 horas.{" "}
        <span className="text-white/50">Não mede curtidas —</span>{" "}
        <Coral>mede emoções.</Coral>
      </Title>
      <div className="grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="anim-rise d-2">
          <p className="mb-3 text-[clamp(0.75rem,1vw,0.9rem)] font-bold uppercase tracking-[0.25em] text-white/45">
            Monitora
          </p>
          <div className="flex flex-wrap gap-2">
            {monitoramento.map((m) => (
              <span
                key={m}
                className="rounded-lg border border-white/12 bg-white/4 px-4 py-2 text-[clamp(0.75rem,1vw,0.95rem)] font-semibold text-white/80"
              >
                {m}
              </span>
            ))}
          </div>
          <Card delay="d-4" className="mt-5 border-l-4 border-l-coral">
            <p className="text-[clamp(0.9rem,1.3vw,1.15rem)] font-semibold">
              O objetivo não é mostrar notícias. É responder:{" "}
              <Coral>&ldquo;O que realmente importa hoje?&rdquo;</Coral>
            </p>
          </Card>
        </div>
        <div className="anim-rise d-4">
          <p className="mb-3 text-[clamp(0.75rem,1vw,0.9rem)] font-bold uppercase tracking-[0.25em] text-white/45">
            Emoções rastreadas ao longo do tempo
          </p>
          <div className="space-y-2">
            {emocoes.map((e, i) => (
              <div key={e} className="flex items-center gap-4">
                <span className="w-28 text-[clamp(0.8rem,1.1vw,1rem)] font-bold">
                  {e}
                </span>
                <div className="h-3 flex-1 rounded-full bg-white/6">
                  <div
                    className={`anim-bar d-${Math.min(i + 3, 8)} h-full rounded-full ${
                      i % 2 === 0 ? "bg-coral" : "bg-white/40"
                    }`}
                    style={{ width: `${[72, 38, 64, 45, 58, 30][i]}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="anim-fade d-7 mt-4 text-[clamp(0.78rem,1.05vw,0.95rem)] text-white/55">
            O sistema entende como a percepção pública evolui — não apenas
            quantas pessoas clicaram.
          </p>
        </div>
      </div>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 11 — Ground Game + CRM                                              */
/* ------------------------------------------------------------------ */

function GroundCrm() {
  return (
    <Slide>
      <GlowOrb className="right-[-15%] bottom-[-25%] h-[55vh] w-[55vh] bg-navy" />
      <Kicker>Ground Game · CRM</Kicker>
      <Title>
        O CRM tradicional guarda contatos.{" "}
        <Coral>CampaignOS guarda relacionamentos.</Coral>
      </Title>
      <div className="grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
        <Card delay="d-2">
          <h3 className="text-[clamp(0.95rem,1.35vw,1.2rem)] font-bold text-coral">
            Ground Game — o território, integrado
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Academias", "Igrejas", "Líderes", "Comunidades", "Empresários", "Associações", "Voluntários", "Eventos", "Agenda", "Mapas"].map(
              (g) => (
                <span
                  key={g}
                  className="rounded-lg bg-white/8 px-3.5 py-1.5 text-[clamp(0.72rem,0.98vw,0.9rem)] font-semibold text-white/75"
                >
                  {g}
                </span>
              ),
            )}
          </div>
        </Card>
        <Card delay="d-4">
          <h3 className="text-[clamp(0.95rem,1.35vw,1.2rem)] font-bold text-coral">
            Cada pessoa possui
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Histórico", "Nível de confiança", "Interações", "Eventos", "Interesses", "Conexões", "Comunidade", "Influência"].map(
              (c) => (
                <span
                  key={c}
                  className="rounded-lg bg-coral/15 px-3.5 py-1.5 text-[clamp(0.72rem,0.98vw,0.9rem)] font-semibold text-coral"
                >
                  {c}
                </span>
              ),
            )}
          </div>
          <p className="mt-4 text-[clamp(0.8rem,1.05vw,0.95rem)] leading-relaxed text-white/65">
            A métrica que importa não é quantos contatos existem — é quanta{" "}
            <strong className="text-white">influência</strong> cada
            relacionamento carrega.
          </p>
        </Card>
      </div>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 12 — Decision AI                                                    */
/* ------------------------------------------------------------------ */

const briefing = [
  ["2", "oportunidades"],
  ["1", "crise"],
  ["3", "temas crescendo"],
  ["1", "debate importante"],
  ["5", "conteúdos recomendados"],
  ["2", "bairros prioritários"],
  ["1", "entrevista necessária"],
];

function DecisionAi() {
  return (
    <Slide>
      <GlowOrb className="left-[-15%] top-[-25%] h-[50vh] w-[50vh] bg-navy" />
      <Kicker>Decision AI</Kicker>
      <Title>
        O <Coral>CEO</Coral> da campanha
      </Title>
      <div className="max-w-4xl">
        <div className="anim-rise d-2 rounded-2xl border border-white/12 bg-white/4 p-6 backdrop-blur-sm">
          <p className="mb-4 flex items-center gap-2 text-[clamp(0.7rem,0.95vw,0.85rem)] font-bold uppercase tracking-[0.25em] text-white/45">
            <span className="h-2 w-2 rounded-full bg-coral" />
            Briefing executivo · hoje, 07h00
          </p>
          <p className="text-[clamp(1rem,1.6vw,1.4rem)] font-semibold">
            &ldquo;Bom dia. Hoje existem:&rdquo;
          </p>
          <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3 md:grid-cols-4">
            {briefing.map(([n, item], i) => (
              <div key={item} className={`anim-rise d-${Math.min(i + 3, 8)}`}>
                <span className="text-[clamp(1.4rem,2.6vw,2.2rem)] font-black text-coral">
                  {n}
                </span>
                <p className="text-[clamp(0.72rem,0.98vw,0.9rem)] font-semibold text-white/75">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        <blockquote className="anim-rise d-8 mt-8 text-[clamp(1.2rem,2.6vw,2.2rem)] font-extrabold leading-snug">
          CampaignOS não responde perguntas.{" "}
          <Coral>Recomenda decisões.</Coral>
        </blockquote>
      </div>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 13 — Replicável                                                     */
/* ------------------------------------------------------------------ */

const candidatos = [
  ["Candidato A", "Linguagem agressiva"],
  ["Candidato B", "Linguagem técnica"],
  ["Candidato C", "É humorista"],
  ["Candidato D", "É médico"],
];

function Replicavel() {
  return (
    <Slide>
      <GlowOrb className="right-[-15%] top-[-25%] h-[55vh] w-[55vh] bg-coral/20" />
      <Kicker>Por que é replicável</Kicker>
      <Title>
        O sistema nunca muda.{" "}
        <Coral>Quem muda é apenas o DNA.</Coral>
      </Title>
      <div className="grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {candidatos.map(([nome, perfil], i) => (
          <Card key={nome} delay={`d-${i + 2}`} className="text-center">
            <p className="text-[clamp(0.85rem,1.2vw,1.05rem)] font-bold">
              {nome}
            </p>
            <p className="mt-2 text-[clamp(0.75rem,1vw,0.92rem)] text-white/60">
              {perfil}
            </p>
            <p className="mt-4 rounded-lg bg-coral/15 py-2 text-[clamp(0.75rem,1vw,0.92rem)] font-bold text-coral">
              A IA aprende
            </p>
          </Card>
        ))}
      </div>
      <Card delay="d-7" className="mt-8 max-w-4xl border-l-4 border-l-coral">
        <p className="text-[clamp(0.9rem,1.4vw,1.2rem)] leading-relaxed text-white/85">
          Basta um perfil de entrada — nome, profissão, valores — e o sistema
          gera automaticamente: Brand Bible, narrativa, tom de voz, discursos,
          posts, vídeos, War Book personalizado, treinamento para entrevistas e
          debates, plano de comunicação e Ground Game.{" "}
          <strong className="text-white">Tudo mantendo coerência.</strong>
        </p>
      </Card>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 14 — Evolução                                                       */
/* ------------------------------------------------------------------ */

const evolucao = [
  ["CampaignOS", "A campanha"],
  ["ElectionOS", "A eleição"],
  ["MandateOS", "O mandato"],
  ["LeadershipOS", "A liderança pública"],
];

function Evolucao() {
  return (
    <Slide className="items-center text-center">
      <GlowOrb className="left-[-10%] bottom-[-25%] h-[55vh] w-[55vh] bg-navy" />
      <Kicker className="text-center">Evolução</Kicker>
      <Title className="text-center">
        A campanha termina. <Coral>O sistema continua.</Coral>
      </Title>
      <div className="flex flex-col items-center gap-3 md:flex-row md:gap-5">
        {evolucao.map(([nome, fase], i) => (
          <div key={nome} className="contents">
            <div
              className={`anim-rise d-${i * 2 + 1} rounded-2xl border px-8 py-5 ${
                i === 0
                  ? "border-coral bg-coral/12 shadow-[0_0_50px_rgba(244,106,78,0.25)]"
                  : "border-white/12 bg-white/4"
              }`}
            >
              <p className="text-[clamp(1rem,1.8vw,1.6rem)] font-black">
                {nome.replace("OS", "")}
                <Coral>OS</Coral>
              </p>
              <p className="mt-1 text-[clamp(0.7rem,0.95vw,0.88rem)] font-semibold uppercase tracking-wide text-white/50">
                {fase}
              </p>
            </div>
            {i < evolucao.length - 1 && (
              <span
                className={`anim-fade d-${i * 2 + 2} rotate-90 text-[clamp(1.2rem,2vw,1.8rem)] font-black text-coral md:rotate-0`}
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>
      <p className="anim-rise d-8 mt-12 max-w-3xl text-[clamp(0.95rem,1.6vw,1.3rem)] leading-relaxed text-white/70">
        Primeiro ajuda a vencer. Depois ajuda o mandato. Depois o governo.{" "}
        <strong className="text-white">
          A plataforma acompanha toda a vida política.
        </strong>
      </p>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* 15 — Missão                                                         */
/* ------------------------------------------------------------------ */

function Missao() {
  return (
    <Slide className="items-center text-center" grid={false}>
      <GlowOrb className="left-[-10%] top-[-20%] h-[55vh] w-[55vh] bg-navy" />
      <GlowOrb className="bottom-[-25%] right-[-10%] h-[60vh] w-[60vh] bg-coral/35" />
      <Kicker className="text-center">Missão</Kicker>
      <blockquote className="anim-rise d-1 max-w-5xl text-[clamp(1.3rem,3vw,2.6rem)] font-bold leading-[1.35]">
        Criar o primeiro Sistema Operacional de IA capaz de organizar{" "}
        <Coral>conhecimento, estratégia, comunicação e decisão</Coral> para
        qualquer liderança pública do mundo.
      </blockquote>
      <div className="anim-bar d-4 mx-auto mt-10 h-[3px] w-40 bg-coral" />
      <p className="anim-rise d-5 mt-10 max-w-3xl text-[clamp(0.95rem,1.6vw,1.3rem)] leading-relaxed text-white/75">
        CampaignOS não substitui pessoas — aumenta a capacidade de decisão de
        equipes humanas. O objetivo é simples:{" "}
        <strong className="text-white">
          transformar campanhas em organizações inteligentes, orientadas por
          dados, conhecimento e coerência.
        </strong>
      </p>
    </Slide>
  );
}

export const campaignosSlides: { id: string; node: ReactNode }[] = [
  { id: "capa", node: <Capa /> },
  { id: "filosofia", node: <Filosofia /> },
  { id: "principio", node: <Principio /> },
  { id: "knowledge-graph", node: <KnowledgeGraph /> },
  { id: "arquitetura", node: <Arquitetura /> },
  { id: "como-aprende", node: <ComoAprende /> },
  { id: "political-dna", node: <PoliticalDna /> },
  { id: "war-book", node: <WarBook /> },
  { id: "content-engine", node: <ContentEngine /> },
  { id: "war-room", node: <WarRoomSentiment /> },
  { id: "ground-crm", node: <GroundCrm /> },
  { id: "decision-ai", node: <DecisionAi /> },
  { id: "replicavel", node: <Replicavel /> },
  { id: "evolucao", node: <Evolucao /> },
  { id: "missao", node: <Missao /> },
];
