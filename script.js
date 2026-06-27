/* ============================================================
   STEVEN UNIVERSE × UNDERTALE — CRYSTAL GEM RANKING SYSTEM
   script.js — V4.0 ULTIMATE — ADVANCED AUDIO IMMERSION
   ============================================================ */

// ─────────────────────────────────────────────
// 0. CONFIGURATION & DATA MAPS
// ─────────────────────────────────────────────

const CONFIG = {
  FORM_ENDPOINT: "https://formspree.io/f/mvzjrpgg",

  AUDIO: {
    bgm:               "assets/audio/bgm.mp3",
    talk:              "assets/audio/talk.mp3",
    hover:             "assets/audio/hover.mp3",
    drag:              "assets/audio/drag.mp3",
    drop:              "assets/audio/drop.mp3",
    computer:          "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/mus_computer.ogg",
    levelup:           "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/snd_levelup.wav",
    wonderfulidea:     "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/snd_wonderfulidea.wav",
    star:              "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/mus_sfx_star.wav",
  },

  TYPE_SPEED: 45,
  TYPE_SPEED_FAST: 25,
  TYPE_SPEED_SLOW: 65,

  GEMS: [
    { id: "garnet",       name: "Garnet",           img: "assets/img/GARNET.png"       },
    { id: "ametista",     name: "Ametista",          img: "assets/img/AMETISTA.png"     },
    { id: "perola",       name: "Pérola",            img: "assets/img/PEROLA.png"       },
    { id: "steven",       name: "Steven",            img: "assets/img/Steven_Universe_Age_16_Two_by_TheOffColors.webp" },
    { id: "lapis",        name: "Lapis Lazuli",      img: "assets/img/Lapis_Lazuli_Season_Six_by_TheOffColors.webp" },
    { id: "peridot",      name: "Peridot",           img: "assets/img/PERIDOT.png"      },
    { id: "bismuto",      name: "Bismuto",           img: "assets/img/BISMUTO.png"      },
    { id: "rose",         name: "Rose Quartz",       img: "assets/img/ROSE.png"         },
    { id: "leao",         name: "Leão",              img: "assets/img/LEAO.png"         },
    { id: "greg",         name: "Greg",              img: "assets/img/GREG.png"         },
    { id: "rubi",         name: "Rubi",              img: "assets/img/RUBI.webp"        },
    { id: "safira",       name: "Safira",            img: "assets/img/SAFIRA.png"       },
    { id: "stevonnie",    name: "Stevonnie",         img: "assets/img/STEVONIE.png"     },
    { id: "opal",         name: "Opal",              img: "assets/img/OPAL.png"         },
    { id: "sardonix",     name: "Sardonix",          img: "assets/img/SARDONIX.webp"    },
    { id: "sugilite",     name: "Sugilite",          img: "assets/img/SUGALITE.png"     },
    { id: "alexandrite",  name: "Alexandrite",        img: "assets/img/ALEXANDRITE-CHIBE.png" },
    { id: "arco_iris",    name: "Arco-Íris Quartz",  img: "assets/img/Arco-Íris Quartz.png" },
    { id: "fluorite",     name: "Fluorite",          img: "assets/img/Fluorite_by_TheOffColors.webp" },
    { id: "obsidian",     name: "Obsidian",          img: "assets/img/OBISIDIAN.webp" },
    { id: "pedra_do_sol", name: "Pedra do Sol",      img: "assets/img/PEDRA DO SOL.webp" },
    { id: "steg",         name: "Steg",              img: "assets/img/STEG.webp"        },
    { id: "fume_quartz",  name: "Fumê Quartz",       img: "assets/img/Smoky_Quartz_Three_by_Thatoneredguy.webp" },
  ],

  GEM_SOUNDS: {
    garnet:       "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/snd_spearappear.wav",
    ametista:     "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/snd_punchstrong.wav",
    perola:       "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/mus_chime.wav",
    steven:       "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/snd_heal_c.wav",
    lapis:        "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/snd_splash.wav",
    peridot:      "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/snd_shock.wav",
    bismuto:      "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/snd_impact.wav",
    rose:         "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/snd_sparkle1.wav",
    leao:         "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/mus_sfx_yowl.wav",
    greg:         "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/snd_credit_s.wav",
    rubi:         "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/snd_bombsplosion.wav",
    safira:       "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/snd_bell.wav",
    stevonnie:    "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/snd_hero.wav",
    opal:         "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/mus_sfx_star.wav",
    sardonix:     "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/snd_drumroll.wav",
    sugilite:     "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/snd_screenshake.wav",
    alexandrite:  "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/snd_shakerbreaker.wav",
    arco_iris:    "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/mus_sfx_rainbowbeam_1.wav",
    fluorite:     "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/snd_tempbell.wav",
    obsidian:     "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/snd_elecdoor_shutheavy.wav",
    pedra_do_sol: "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/snd_yeah.wav",
    steg:         "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/snd_dumbvictory.wav",
    fume_quartz:  "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/snd_saber3.wav",
  }
};

const GEM_THEME = {
  garnet:       "linear-gradient(160deg, rgba(139,0,50,.20) 0%, rgba(80,0,80,.15) 60%, rgba(11,13,26,.95) 100%)",
  ametista:     "linear-gradient(160deg, rgba(150,50,200,.20) 0%, rgba(80,0,150,.15) 60%, rgba(11,13,26,.95) 100%)",
  perola:       "linear-gradient(160deg, rgba(200,220,255,.18) 0%, rgba(180,200,240,.12) 60%, rgba(11,13,26,.95) 100%)",
  rose:         "linear-gradient(160deg, rgba(244,120,160,.20) 0%, rgba(200,80,120,.12) 60%, rgba(11,13,26,.95) 100%)",
  peridot:      "linear-gradient(160deg, rgba(80,200,80,.20) 0%, rgba(60,160,60,.12) 60%, rgba(11,13,26,.95) 100%)",
  bismuto:      "linear-gradient(160deg, rgba(200,100,50,.20) 0%, rgba(255,150,80,.10) 60%, rgba(11,13,26,.95) 100%)",
  lapis:        "linear-gradient(160deg, rgba(30,80,200,.22) 0%, rgba(20,60,180,.15) 60%, rgba(11,13,26,.95) 100%)",
  safira:       "linear-gradient(160deg, rgba(80,140,255,.20) 0%, rgba(40,100,220,.12) 60%, rgba(11,13,26,.95) 100%)",
  rubi:         "linear-gradient(160deg, rgba(200,30,30,.22) 0%, rgba(160,20,20,.15) 60%, rgba(11,13,26,.95) 100%)",
  stevonnie:    "linear-gradient(160deg, rgba(180,120,220,.18) 0%, rgba(220,180,80,.10) 60%, rgba(11,13,26,.95) 100%)",
  opal:         "linear-gradient(160deg, rgba(100,200,180,.18) 0%, rgba(200,150,200,.12) 60%, rgba(11,13,26,.95) 100%)",
  sardonix:     "linear-gradient(160deg, rgba(200,160,60,.20) 0%, rgba(160,80,40,.12) 60%, rgba(11,13,26,.95) 100%)",
  steven:       "linear-gradient(160deg, rgba(255,100,150,.20) 0%, rgba(200,50,100,.15) 60%, rgba(11,13,26,.95) 100%)",
  leao:         "linear-gradient(160deg, rgba(255,150,200,.20) 0%, rgba(200,100,150,.15) 60%, rgba(11,13,26,.95) 100%)",
  greg:         "linear-gradient(160deg, rgba(150,150,255,.20) 0%, rgba(100,100,200,.15) 60%, rgba(11,13,26,.95) 100%)",
  sugilite:     "linear-gradient(160deg, rgba(150,30,150,.20) 0%, rgba(100,20,100,.15) 60%, rgba(11,13,26,.95) 100%)",
  alexandrite:  "linear-gradient(160deg, rgba(50,150,150,.20) 0%, rgba(30,100,100,.15) 60%, rgba(11,13,26,.95) 100%)",
  arco_iris:    "linear-gradient(160deg, rgba(255,150,200,.20) 0%, rgba(150,200,255,.15) 60%, rgba(11,13,26,.95) 100%)",
  fluorite:     "linear-gradient(160deg, rgba(100,200,200,.20) 0%, rgba(200,100,200,.15) 60%, rgba(11,13,26,.95) 100%)",
  obsidian:     "linear-gradient(160deg, rgba(255,80,30,.25) 0%, rgba(80,20,10,.20) 60%, rgba(11,13,26,.95) 100%)",
  pedra_do_sol: "linear-gradient(160deg, rgba(255,180,50,.25) 0%, rgba(255,100,30,.15) 60%, rgba(11,13,26,.95) 100%)",
  steg:         "linear-gradient(160deg, rgba(180,100,255,.22) 0%, rgba(120,60,200,.15) 60%, rgba(11,13,26,.95) 100%)",
  fume_quartz:  "linear-gradient(160deg, rgba(160,130,110,.20) 0%, rgba(120,90,80,.15) 60%, rgba(11,13,26,.95) 100%)",
};

const GEM_HUES = {
  garnet: 340, ametista: 270, perola: 220, rose: 330, peridot: 100,
  bismuto: 30, lapis: 210, safira: 200, rubi: 0, stevonnie: 280,
  opal: 160, sardonix: 40, steven: 330, leao: 310, greg: 40,
  sugilite: 290, alexandrite: 180, arco_iris: 320, fluorite: 180,
  obsidian: 15, pedra_do_sol: 35, steg: 275, fume_quartz: 25
};

const SOUL_ATTRS = { abertura: 0, consciencia: 0, extroversao: 0, amabilidade: 0, estabilidade: 0, honestidade: 0 };

const GEM_AFFINITY = {
  garnet:       { estabilidade: 4, honestidade: 3, consciencia: 2, amabilidade: 1, abertura: 0, extroversao: 0 },
  ametista:     { extroversao: 4, abertura: 3, amabilidade: 2, estabilidade: -1, consciencia: -2, honestidade: 0 },
  perola:       { consciencia: 4, honestidade: 3, estabilidade: 1, abertura: 1, extroversao: -1, amabilidade: 0 },
  rose:         { abertura: 4, amabilidade: 4, extroversao: 2, consciencia: -1, estabilidade: 0, honestidade: -1 },
  peridot:      { consciencia: 4, abertura: 3, extroversao: 1, amabilidade: 1, estabilidade: -1, honestidade: 1 },
  bismuto:      { extroversao: 3, honestidade: 4, amabilidade: 2, abertura: 2, consciencia: 1, estabilidade: 1 },
  lapis:        { amabilidade: 3, abertura: 2, honestidade: 3, extroversao: -2, estabilidade: -1, consciencia: 0 },
  safira:       { estabilidade: 4, consciencia: 3, honestidade: 2, amabilidade: 1, abertura: 0, extroversao: -2 },
  rubi:         { extroversao: 4, honestidade: 3, amabilidade: 2, estabilidade: -3, consciencia: -1, abertura: 0 },
  stevonnie:    { abertura: 3, extroversao: 3, estabilidade: 2, amabilidade: 3, consciencia: 1, honestidade: 2 },
  sardonix:     { extroversao: 4, consciencia: 3, abertura: 2, amabilidade: 1, estabilidade: 2, honestidade: 1 },
  steven:       { amabilidade: 4, honestidade: 4, extroversao: 3, estabilidade: 1, abertura: 2, consciencia: 1 },
  leao:         { honestidade: 4, estabilidade: 3, consciencia: 1, abertura: 1, extroversao: -2, amabilidade: 2 },
  greg:         { abertura: 4, amabilidade: 3, estabilidade: 2, consciencia: -2, extroversao: 2, honestidade: 3 },
  spinel:       { extroversao: 4, amabilidade: 2, estabilidade: -4, abertura: 2, consciencia: -1, honestidade: 1 },
  opal:         { estabilidade: 3, consciencia: 2, honestidade: 2, abertura: 1, extroversao: 1, amabilidade: 1 },
  sugilite:     { extroversao: 4, estabilidade: -3, consciencia: -2, honestidade: 1, abertura: 2, amabilidade: 1 },
  alexandrite:  { estabilidade: 3, consciencia: 3, honestidade: 3, abertura: 2, extroversao: 1, amabilidade: 1 },
  arco_iris:    { abertura: 4, amabilidade: 4, extroversao: 3, consciencia: 1, estabilidade: 2, honestidade: 2 },
  fluorite:     { estabilidade: 4, amabilidade: 4, honestidade: 4, consciencia: 2, abertura: 1, extroversao: -2 },
  obsidian:     { estabilidade: 4, honestidade: 4, consciencia: 3, extroversao: 2, abertura: 2, amabilidade: 1 },
  pedra_do_sol: { extroversao: 4, amabilidade: 4, estabilidade: 3, abertura: 2, honestidade: 3, consciencia: 2 },
  steg:         { abertura: 4, extroversao: 4, amabilidade: 4, estabilidade: 2, honestidade: 3, consciencia: 1 },
  fume_quartz:  { extroversao: 3, abertura: 3, amabilidade: 3, estabilidade: -1, honestidade: 2, consciencia: 1 },
};

const QUIZ_DATA = [
  { q: "Uma nave desconhecida pousou em Beach City. Seu primeiro instinto?", 
    opts: [
      { l: "Monto um plano seguro de longe.", a: { consciencia: 3, estabilidade: 2 } },
      { l: "Vou cumprimentar os aliens!", a: { amabilidade: 3, abertura: 2 } },
      { l: "Invoco minha arma e vou pro combate!", a: { extroversao: 3, estabilidade: -1 } },
      { l: "Fico invisível e observo.", a: { honestidade: 3, consciencia: 1 } }
    ] },
  { q: "Você encontra um artefato Gem quebrado. O que faz?", 
    opts: [
      { l: "Invento uma função nova pra ele.", a: { abertura: 4 } },
      { l: "Catalogo perfeitamente na base.", a: { consciencia: 4 } },
      { l: "Dou de presente para alguém especial.", a: { amabilidade: 4 } },
      { l: "Guardo em segurança.", a: { estabilidade: 3 } }
    ] },
  { q: "Seu plano perfeito deu muito errado no meio da missão. E agora?", 
    opts: [
      { l: "Respiro fundo e recalculo.", a: { estabilidade: 4, consciencia: 2 } },
      { l: "Uso o caos a meu favor!", a: { abertura: 3, extroversao: 2 } },
      { l: "Protejo meu time primeiro.", a: { honestidade: 3, amabilidade: 3 } },
      { l: "Ataque frontal com tudo!", a: { extroversao: 4, estabilidade: -1 } }
    ] },
  { q: "Um amigo confessa que cometeu um erro que te prejudicou. Sua reação real?", 
    opts: [
      { l: "Ouço pacientemente e abraço.", a: { amabilidade: 4, estabilidade: 1 } },
      { l: "Agradeço a verdade. É o que importa.", a: { honestidade: 4, consciencia: 1 } },
      { l: "Faço piada para quebrar o gelo.", a: { extroversao: 3, amabilidade: 2 } },
      { l: "Fico chateada, mas busco a solução lógica.", a: { consciencia: 3, estabilidade: -1 } }
    ] },
  { q: "Sexta à noite no calçadão de Beach City! Qual a vibe?", 
    opts: [
      { l: "Música alta e fliperama lotado!", a: { extroversao: 4, abertura: 1 } },
      { l: "Passeio tranquilo com os mais íntimos.", a: { amabilidade: 3, extroversao: -2 } },
      { l: "Ler um livro ou ver documentários.", a: { consciencia: 3, extroversao: -3 } },
      { l: "Testar uma comida alienígena bizarra.", a: { abertura: 4, extroversao: 1 } }
    ] },
  { q: "Você achou o diário secreto da Pérola aberto em cima da mesa.", 
    opts: [
      { l: "Fecho imediatamente sem ler nada.", a: { honestidade: 4, consciencia: 2 } },
      { l: "Leio só a última página...", a: { abertura: 2, honestidade: -2 } },
      { l: "Leio tudo e ainda corrijo a gramática.", a: { consciencia: -2, abertura: 3 } },
      { l: "Guardo para ela não perder.", a: { amabilidade: 3, estabilidade: 2 } }
    ] },
  { q: "Você tem a chance de viajar na velocidade da luz, mas é perigoso.", 
    opts: [
      { l: "Tô dentro! Malas prontas!", a: { abertura: 4, extroversao: 3, estabilidade: -1 } },
      { l: "Preciso ver as estatísticas de segurança.", a: { consciencia: 4, estabilidade: 3 } },
      { l: "Só vou se meus amigos forem.", a: { amabilidade: 4, honestidade: 2 } },
      { l: "Prefiro ficar na Terra, obrigada.", a: { estabilidade: 2, abertura: -3 } }
    ] },
  { q: "Uma Gem Corrompida te ataca, mas ela parece assustada e confusa.", 
    opts: [
      { l: "Tento acalmá-la cantando.", a: { amabilidade: 4, abertura: 2 } },
      { l: "Paraliso ela com cuidado.", a: { consciencia: 3, estabilidade: 2 } },
      { l: "Bato forte antes que ela me machuque.", a: { extroversao: 3, amabilidade: -2 } },
      { l: "Chamo a Garnet para resolver.", a: { estabilidade: 1, honestidade: 2 } }
    ] },
  { q: "Como é o estado do seu quarto no Templo?", 
    opts: [
      { l: "Organizado. Cada coisa tem seu lugar.", a: { consciencia: 4, estabilidade: 2 } },
      { l: "Caos criativo. Eu me entendo.", a: { abertura: 3, consciencia: -3 } },
      { l: "Cheio de lembranças e presentes.", a: { amabilidade: 4, extroversao: 1 } },
      { l: "Minimalista. Só o essencial.", a: { estabilidade: 3, consciencia: 2 } }
    ] },
  { q: "O prefeito Dewey te pediu para organizar o festival da cidade. Seu papel:", 
    opts: [
      { l: "Subir no palco e ser a atração principal!", a: { extroversao: 4, abertura: 2 } },
      { l: "Fazer as planilhas de orçamento e logística.", a: { consciencia: 4, estabilidade: 2 } },
      { l: "Decorar e garantir que todos estejam felizes.", a: { amabilidade: 4, abertura: 1 } },
      { l: "Trabalhar nos bastidores com os cabos de luz.", a: { honestidade: 3, extroversao: -2 } }
    ] },
  { q: "O Transportador quebrou e você está presa na Ilha da Máscara. Sua reação:", 
    opts: [
      { l: "Entro em pânico por 5 minutos, depois choro.", a: { estabilidade: -4, amabilidade: 1 } },
      { l: "Começo a construir uma jangada com bambus.", a: { consciencia: 4, abertura: 2 } },
      { l: "Exploro a ilha e faço amizade com melancias mágicas.", a: { abertura: 4, extroversao: 2 } },
      { l: "Sento, medito e espero o resgate.", a: { estabilidade: 4, consciencia: 1 } }
    ] },
  { q: "Bismuto se oferece para fazer um upgrade na sua arma. O que você quer?", 
    opts: [
      { l: "Algo espalhafatoso, que solte fogos e brilhe!", a: { extroversao: 4, abertura: 3 } },
      { l: "Um escudo impenetrável.", a: { estabilidade: 3, amabilidade: 2 } },
      { l: "Algo tático, preciso e letal.", a: { consciencia: 4, honestidade: 1 } },
      { l: "Uma arma que cure em vez de machucar.", a: { amabilidade: 4, abertura: 2 } }
    ] },
  { q: "Diamante Amarelo está olhando diretamente para você com raiva.", 
    opts: [
      { l: "Encaro de volta sem piscar.", a: { estabilidade: 4, extroversao: 2 } },
      { l: "Tento usar lógica e argumentar.", a: { consciencia: 4, abertura: 1 } },
      { l: "Chamo ela pra chorar e falar de sentimentos.", a: { amabilidade: 4, abertura: 3 } },
      { l: "Fujo para a base mais próxima.", a: { estabilidade: -2, honestidade: 2 } }
    ] },
  { q: "Você quebrou o vidro da van do Greg sem querer jogando baseball.", 
    opts: [
      { l: "Assumo a culpa na hora e pago o conserto.", a: { honestidade: 4, consciencia: 3 } },
      { l: "Falo que foi um monstro invisível.", a: { honestidade: -4, abertura: 3 } },
      { l: "Conserto antes que ele perceba.", a: { consciencia: 4, estabilidade: 2 } },
      { l: "Peço desculpas chorando muito.", a: { amabilidade: 3, estabilidade: -2 } }
    ] },
  { q: "Qual a melhor forma de passar o tempo com o Steven?", 
    opts: [
      { l: "Comendo Gato Biscoito e vendo TV.", a: { amabilidade: 3, extroversao: -1 } },
      { l: "Compondo músicas tristes no violão.", a: { abertura: 4, estabilidade: 1 } },
      { l: "Treinando novas táticas de fusão.", a: { consciencia: 3, extroversao: 2 } },
      { l: "Voando no Leão sem rumo.", a: { abertura: 3, extroversao: 3 } }
    ] },
  { q: "Peridot te entrega um gráfico complexo sobre a agricultura das cenouras.", 
    opts: [
      { l: "Leio e aponto um erro de cálculo.", a: { consciencia: 4, honestidade: 2 } },
      { l: "Finjo que entendi para ela não ficar triste.", a: { amabilidade: 4, honestidade: -2 } },
      { l: "Uso o gráfico como chapéu.", a: { abertura: 4, extroversao: 3 } },
      { l: "Pergunto qual a relevância militar disso.", a: { estabilidade: 3, consciencia: 1 } }
    ] },
  { q: "Você encontra a Lápis Lazuli olhando para a água com cara de choro.", 
    opts: [
      { l: "Sento do lado dela em silêncio.", a: { amabilidade: 4, estabilidade: 3 } },
      { l: "Faço ela voar comigo pra distrair.", a: { extroversao: 4, abertura: 2 } },
      { l: "Analiso se a água está contaminada.", a: { consciencia: 4, amabilidade: -1 } },
      { l: "Pergunto diretamente o que aconteceu.", a: { honestidade: 4, extroversao: 1 } }
    ] },
  { q: "Você tem que se fundir. O que é mais importante na sua parceira?", 
    opts: [
      { l: "Sincronia perfeita de movimentos.", a: { consciencia: 4, estabilidade: 2 } },
      { l: "Amor absoluto e confiança cega.", a: { amabilidade: 4, honestidade: 4 } },
      { l: "O desejo de quebrar tudo junto!", a: { extroversao: 4, abertura: 2 } },
      { l: "Mentes que se completam.", a: { abertura: 4, consciencia: 2 } }
    ] },
  { q: "Chegando ao fim... O que você acha de questionários longos?", 
    opts: [
      { l: "Amei, me faz refletir sobre mim mesma.", a: { abertura: 4, amabilidade: 2 } },
      { l: "Me deixa ansiosa, quero ver o resultado!", a: { estabilidade: -3, extroversao: 3 } },
      { l: "Respondi com total precisão estatística.", a: { consciencia: 4, honestidade: 3 } },
      { l: "Só respondi porque o Criador pediu.", a: { amabilidade: 4, honestidade: 4 } }
    ] },
  { q: "Última pergunta. O Criador deste site passou do limite na fofura?", 
    opts: [
      { l: "Com certeza. E eu secretamente adorei.", a: { amabilidade: 4, honestidade: 4 } },
      { l: "Foi bem metódico e genial, admito.", a: { consciencia: 3, abertura: 2 } },
      { l: "Ele é louco. Um louco de um jeito bom.", a: { extroversao: 3, abertura: 3 } },
      { l: "(Sorrir para a tela e não dizer nada)", a: { estabilidade: 4, honestidade: 3 } }
    ] }
];

const FUSIONS = {
  "garnet+ametista": {
    name: "Sugilita",
    img: "assets/img/SUGALITE.png",
    sound: "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/snd_mtt_burst.wav",
    text: "FUSÃO DETECTADA: SUGILITA. Força bruta e caos em forma de rocha. O Criador não sabe se fica impressionado ou com medo."
  },
  "perola+ametista": {
    name: "Opal",
    img: "assets/img/OPAL.png",
    sound: "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/mus_sfx_sparkles.wav",
    text: "FUSÃO DETECTADA: OPAL. Rara, elegante e difícil de manter. Igual a essa combinação."
  },
  "garnet+perola": {
    name: "Sardonix",
    img: "assets/img/SARDONIX.webp",
    sound: "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/snd_drumroll.wav",
    text: "FUSÃO DETECTADA: SARDONIX. Alguém aqui gosta de um bom show. E de drama. Muito drama."
  },
  "ametista+rubi": {
    name: "Fumê Quartz",
    img: "assets/img/Smoky_Quartz_Three_by_Thatoneredguy.webp",
    sound: "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/snd_punchstrong.wav",
    text: "FUSÃO DETECTADA: FUMÊ QUARTZ. Descontrolada, divertida, surpreendente. Parece familiar?"
  },
  "rubi+safira": {
    name: "Garnet",
    img: "assets/img/GARNET.png",
    sound: "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/snd_hero.wav",
    text: "FUSÃO DETECTADA: GARNET. Rubi e Safira. Feitas uma para a outra. O Criador acha isso muito bonito."
  },
  "garnet+ametista+perola": {
    name: "Alexandrite",
    img: "assets/img/ALEXANDRITE-CHIBE.png",
    sound: "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/snd_wonderfulidea.wav",
    text: "FUSÃO MÁXIMA: ALEXANDRITE. As três Crystal Gems originais juntas. O Criador passou a noite inteira preparando isso."
  },
  "lapis+peridot": {
    name: "Lapidot ✨ (Easter Egg)",
    img: "assets/img/PERIDOT.png",
    sound: "assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/mus_ohyes.ogg",
    text: "EASTER EGG DESBLOQUEADO: LAPIDOT. Oficialmente não é um personagem. Não oficialmente é o favorito do fandom. E do Criador."
  },
};

const ACHIEVEMENTS = {
  cookie_cat:     { name: "Cookie Cat Lover",    desc: "Encontrou o Easter Egg do Cookie Cat.",    icon: "🍪", unlocked: false },
  fusion_found:   { name: "Fusion Master",        desc: "Descobriu uma fusão secreta no pódio.",    icon: "💎", unlocked: false },
  lapidot:        { name: "Shipper Confirmado",   desc: "Colocou Lapis e Peridot juntas.",          icon: "💚", unlocked: false },
  true_gem:       { name: "True Gem",             desc: "Obteve compatibilidade acima de 90%.",     icon: "✨", unlocked: false },
  lion_found:     { name: "Amigo do Leão",        desc: "Encontrou o Leão escondido.",              icon: "🦁", unlocked: false },
  logo_click:     { name: "Curioso Demais",       desc: "Clicou 3 vezes no logo.",                  icon: "🔍", unlocked: false },
  konami:         { name: "Crystal Gem Lendária", desc: "Ativou o código secreto.",                 icon: "⭐", unlocked: false },
  all_compatible: { name: "Crystal Collector",    desc: "Viu a compatibilidade de todas as gems.",  icon: "🏆", unlocked: false },
};

const GEM_DATABASE_RECORDS = {
  garnet: {
    title: "A Fundação das Crystal Gems",
    desc: "Uma fusão feita puramente de amor e estabilidade. O pilar inabalável da equipe.",
    type: "Fusão (Rubi + Safira)",
    powers: "Visão do futuro, eletrocinese, manoplas pesadas, invulnerabilidade ao calor",
    weapon: "Manoplas de Combate",
    personality: "Estóica, protetora, extremamente focada e carinhosa nos momentos certos.",
    fusions: "Sugilite, Sardonix, Alexandrite, Obsidian",
    emotional: "Dois corações batendo em um único ritmo eterno.",
    episodes: "Jail Break, Mindful Education, True Kinda Love"
  },
  ametista: {
    title: "O Caos em Forma de Pedra",
    desc: "Espontânea, divertida e sem filtro. Sabe aproveitar cada momento da vida na Terra.",
    type: "Quartz",
    powers: "Metamorfose avançada, proficiência com chicote, spin dash",
    weapon: "Chicote cravejado",
    personality: "Brincalhona, impulsiva, rebelde e com um profundo lealdade aos amigos.",
    fusions: "Opal, Sugilite, Fumê Quartz, Alexandrite, Obsidian",
    emotional: "Perfeita do jeito que nasceu, sem precisar se encaixar nos padrões.",
    episodes: "On " + "the Run, Earthlings, Tiger Millionaire"
  },
  perola: {
    title: "A Perfeição e o Drama",
    desc: "Elegante, metódica e incrivelmente dedicada àqueles que escolheu proteger.",
    type: "Pérola",
    powers: "Hologramas, manipulação de nuvens/areia, armazenamento na gem",
    weapon: "Lança / Tridente",
    personality: "Perfeccionista, intelectual, dramática e profundamente devota.",
    fusions: "Opal, Sardonix, Alexandrite, Mega Pérola, Obsidian",
    emotional: "Um cavaleiro leal que aprendeu a lutar por si mesma.",
    episodes: "Rose's Scabbard, Mr. Greg, A Single Pale Rose"
  },
  lapis: {
    title: "A Guardiã dos Oceanos",
    desc: "Livre e profunda como o oceano. Uma gem com poder imensurável e espírito resiliente.",
    type: "Lapis Lazuli",
    powers: "Hidrocinese em escala planetária, asas de água, voo interestelar",
    weapon: "O próprio oceano",
    personality: "Introspectiva, cautelosa, amante da liberdade e defensora feroz de seu lar.",
    fusions: "Malaquita (instável)",
    emotional: "Asas que cortam o céu após séculos aprisionadas no espelho.",
    episodes: "Ocean Gem, Alone at Sea, Can't Go Back"
  },
  peridot: {
    title: "O Cérebro (e Clod) da Equipe",
    desc: "Uma técnica genial que descobriu na Terra o valor da amizade e da arte.",
    type: "Peridot (Era 2)",
    powers: "Ferrocinese (controle de metal), intelecto avançado, conhecimento técnico",
    weapon: "Sucata de metal e tablets",
    personality: "Exuberante, curiosa, egocêntrica mas incrivelmente doce e leal.",
    fusions: "Nenhuma (mas tem grande sinergia com Lapis)",
    emotional: "Encontrou um lar verdadeiro onde achava que havia apenas rochas.",
    episodes: "Catch and Release, Log Date 7 15 2, Earthlings"
  },
  bismuto: {
    title: "A Forja da Rebelião",
    desc: "Paixão ardente e força pura. Constrói armas e laços inquebráveis.",
    type: "Bismuto",
    powers: "Mudança de forma nos membros (martelos, lâminas), imunidade à lava",
    weapon: "Mãos moldáveis",
    personality: "Entusiasta, direta, passional e com um calor humano cativante.",
    fusions: "Nenhuma conhecida",
    emotional: "Quem forja as armas também sabe construir os caminhos para a paz.",
    episodes: "Bismuth, Made of Honor, Big Fish"
  },
  rose: {
    title: "A Líder da Rebelião",
    desc: "Misteriosa, grandiosa e amorosa. Enxergava beleza em cada ser vivo.",
    type: "Diamante / Quartz",
    powers: "Cura de lágrimas, fitocinese, flutuação, super força",
    weapon: "Escudo e Espada",
    personality: "Fascinada pela vida, carismática, secreta e inspiradora.",
    fusions: "Rainbow Quartz, Obsidian (formação antiga)",
    emotional: "Deixou sua forma física para que uma nova estrela pudesse brilhar.",
    episodes: "Lion 3: Straight to Video, Story for Steven, A Single Pale Rose"
  },
  safira: {
    title: "A Visão da Serenidade",
    desc: "Tranquila e focada. Vê múltiplos futuros mas escolheu viver o presente.",
    type: "Safira",
    powers: "Visão do futuro, criocinese (frio/gelo), levitação",
    weapon: "Nenhuma (usa poderes mentais e de gelo)",
    personality: "Pacífica, paciente, cortês e serena.",
    fusions: "Garnet",
    emotional: "O futuro era um roteiro fixo até o amor mudar todas as previsões.",
    episodes: "Jail Break, The Answer, Now We're Only Falling Apart"
  },
  rubi: {
    title: "A Chama da Paixão",
    desc: "Uma explosão de emoção e calor. Não pensa duas vezes para defender quem ama.",
    type: "Rubi",
    powers: "Pirocinese (geração de calor/fogo), força aprimorada",
    weapon: "Manopla simples",
    personality: "Impetuosa, passional, corajosa e sincera.",
    fusions: "Garnet",
    emotional: "Uma faísca que acendeu o fogo do amor eterno na galáxia.",
    episodes: "Jail Break, The Answer, The Question"
  },
  stevonnie: {
    title: "A Experiência Compartilhada",
    desc: "Uma fusão humana e gem encantadora, descobrindo o mundo com harmonia e coragem.",
    type: "Fusão (Steven + Connie)",
    powers: "Escudo, levitação, pilotagem avançada, agilidade e esgrima",
    weapon: "Escudo e Espada da mãe",
    personality: "Empática, enérgica, curiosa e focada.",
    fusions: "Steg (formação indireta), Obsidian (via Steven)",
    emotional: "Não é uma pessoa só, nem duas... é uma experiência única.",
    episodes: "Alone Together, Beach City Drift, Jungle Moon"
  },
  opal: {
    title: "A Gigante Elegante",
    desc: "Harmonia rara entre o caos e a ordem. Quando focada, não erra um único alvo.",
    type: "Fusão (Pérola + Ametista)",
    powers: "Arqueria mágica, agilidade espetacular, destreza imensa",
    weapon: "Arco e flecha de energia",
    personality: "Pacífica, silenciosa, focada e levemente esquecida.",
    fusions: "Alexandrite, Obsidian",
    emotional: "A fusão perfeita de duas almas opostas que encontram o silêncio da paz.",
    episodes: "Giant Woman, The Return, Independent Together"
  },
  sardonix: {
    title: "O Show Tem Que Continuar",
    desc: "Espetacular, carismática e dramática. Para ela, o campo de batalha é um palco.",
    type: "Fusão (Garnet + Pérola)",
    powers: "Articulações 360º, anatomia flexível, cálculos teatrais",
    weapon: "Martelo de Guerra / Broca",
    personality: "Teatral, exuberante, eloquente e articulada.",
    fusions: "Alexandrite, Obsidian",
    emotional: "As luzes se acendem e o espetáculo da vitória é garantido.",
    episodes: "Cry for Help, Know Your Fusion, Back to the Moon"
  },
  steven: {
    title: "O Coração da Galáxia",
    desc: "O elo entre humanos e gems. Salva o universo com empatia, música e amor.",
    type: "Híbrido (Humano + Gem)",
    powers: "Escudo, bolha rosa, cura, levitação, empatia telepática",
    weapon: "Escudo Rosa",
    personality: "Ultra empático, pacificador, animado e afetuoso.",
    fusions: "Stevonnie, Fumê Quartz, Rainbow Quartz 2.0, Sunstone, Obsidian, Steg",
    emotional: "A prova viva de que a mudança e o amor curam as marcas do passado.",
    episodes: "Change Your Mind, Steven Universe Future, The Movie"
  },
  leao: {
    title: "O Protetor Mágico",
    desc: "Peludo, rosa e incrivelmente independente. Tem dimensões de bolso na juba.",
    type: "Leão Ressuscitado",
    powers: "Teletransporte por rugido, dimensão na juba, caminhar sobre a água",
    weapon: "Rugido sônico",
    personality: "Felino, indolente, protetor leal e fã de Gato Biscoito.",
    fusions: "Nenhuma",
    emotional: "Um guia silencioso guardando os segredos mais preciosos sob as estrelas.",
    episodes: "Steven's Lion, Lion 3, Buddy's Book"
  },
  greg: {
    title: "O Charme do Universo",
    desc: "Um roqueiro de bom coração que provou que a música é a linguagem universal.",
    type: "Humano",
    powers: "Música inspiradora, empatia, lavagem de carros impecável",
    weapon: "Guitarra acústica",
    personality: "Bem-humorado, pacífico, sábio à sua maneira e ótimo pai.",
    fusions: "Steg",
    emotional: "Se todo porco em volta é carne, ele escolheu as estrelas do céu.",
    episodes: "Mr. Greg, The Message, We Need to Talk"
  },
  sugilite: {
    title: "Força Bruta e Caos",
    desc: "Uma fusão maciça que gosta de quebrar regras, academias e tudo o que ver pela frente.",
    type: "Fusão (Garnet + Ametista)",
    powers: "Super força colossal, resistência bruta, punhos maciços",
    weapon: "Mangual gigante (Manoplas + Chicote)",
    personality: "Destrutiva, confiante, enérgica e orgulhosa.",
    fusions: "Alexandrite, Obsidian",
    emotional: "Uma tempestade que não pede licença para passar.",
    episodes: "Coach Steven, Cry for Help"
  },
  alexandrite: {
    title: "A Fusão Máxima",
    desc: "A união de todas as Crystal Gems originais. Uma força monstruosa para defender a família.",
    type: "Fusão (Garnet + Ametista + Pérola)",
    powers: "Sopro de fogo, invocação de todas as armas combinadas",
    weapon: "Arco, Martelo, Mangual e Chicote",
    personality: "Focada na sobrevivência e na proteção de Steven.",
    fusions: "Obsidian (adicionando Steven)",
    emotional: "Juntas, não há ameaça no cosmo capaz de ferir o nosso lar.",
    episodes: "Fusion Cuisine, Super Watermelon Island, I Am My Monster"
  },
  arco_iris: {
    title: "O Brilho da Fusão Primordial",
    desc: "A união graciosa entre Rose Quartz/Steven e Pérola. Traz elegância, dança e magia.",
    type: "Fusão",
    powers: "Manipulação de luz, guarda-chuva mágico, flutuação",
    weapon: "Guarda-chuva Mágico",
    personality: "Elegante, charmosa, teatral e gentil.",
    fusions: "Alexandrite, Obsidian (indiretamente)",
    emotional: "Uma valsa nas nuvens que ilumina até as tempestades mais sombrias.",
    episodes: "We Need to Talk, What's Your Problem"
  },
  fluorite: {
    title: "A Sabedoria Multigemas",
    desc: "Uma fusão massiva de seis gems. Move-se e fala calmamente, expressando amor imenso.",
    type: "Fusão (6 Gems)",
    powers: "Brilho fosforescente, sabedoria vasta, paciência infinita",
    weapon: "Nenhuma (usa seu tamanho e estabilidade)",
    personality: "Calma, compreensiva, maternal e pacífica.",
    fusions: "Nenhuma conhecida além de suas 6 partes",
    emotional: "O amor não se mede em quantidade, mas sim na harmonia de cada batimento.",
    episodes: "Off Colors, Lars' Head, Your Mother and Mine"
  },
  obsidian: {
    title: "A Titã de Lava e Aço",
    desc: "A união monumental de Steven, Garnet, Ametista e Pérola. Uma gigante forjada em calor vulcânico.",
    type: "Fusão de 5 Gems",
    powers: "Superforça titânica, manipulação de magma, forja de lâmina",
    weapon: "Montante em Braza (Espada Gigante)",
    personality: "Selvagem, determinada, implacável e grandiosa.",
    fusions: "Nenhuma",
    emotional: "O magma da rebelião forjando a lâmina que protege nosso mundo.",
    episodes: "Change Your Mind"
  },
  pedra_do_sol: {
    title: "O Brilho da Motivação",
    desc: "Fusão de Steven e Garnet. Encarna a vibe descolada dos anos 90 e sempre dá conselhos inspiradores.",
    type: "Fusão (Steven + Garnet)",
    powers: "Ventosas nas mãos, agilidade insana, quebra da quarta parede",
    weapon: "Ventosas de Escalada / Escudo de Fogo",
    personality: "Extremamente motivacional, descolada, enérgica e conselheira.",
    fusions: "Obsidian",
    emotional: "Não importa o quão sombria seja a noite, o sol sempre nascerá com estilo.",
    episodes: "Change Your Mind, Very Special Episode"
  },
  steg: {
    title: "O Rockstar do Multiverso",
    desc: "Fusão inacreditável de Steven e Greg. Música que faz literalmente as pessoas flutuarem.",
    type: "Fusão Humano+Híbrido (Steven + Greg)",
    powers: "Música acústica levitacional, empatia amplificada, presença hipnotizante",
    weapon: "Guitarra de dois braços",
    personality: "Espetacular, apaixonado por música, carismático e livre.",
    fusions: "Nenhuma",
    emotional: "Quando pai e filho unem seus acordes, até a gravidade para para escutar.",
    episodes: "Steven Universe: The Movie"
  },
  fume_quartz: {
    title: "A Alegria do Ioiô Mágico",
    desc: "Fusão de Steven e Ametista. Compartilham dúvidas e medos, mas juntos descobrem que são espetaculares.",
    type: "Fusão (Steven + Ametista)",
    powers: "Proficiência com ioiô de energia, redemoinhos, agilidade acrobática",
    weapon: "Ioiô Gigante",
    personality: "Humorística, autodepreciativa no começo mas vibrante e superprotetora.",
    fusions: "Obsidian",
    emotional: "Dois imperfeitos que encontram a perfeição no apoio mútuo.",
    episodes: "Earthlings, Know Your Fusion, Guideline"
  }
};

const SCRIPT = {
  loading: [
    "Carregando dados da alma...",
    "Consultando Garnet sobre o futuro...",
    "Convencendo Peridot a cooperar...",
    "Clod.",
    "Pronto."
  ],

  intro: [
    "Olá...",
    "Eu sou o Narrador.",
    "O Criador deste sistema me disse que você adora Steven Universo.",
    "Ele também me implorou para preparar algo especial...",
    "Um teste definitivo de personalidade intergaláctica!",
    "Você está pronta?"
  ],

  cookieCat: [
    "Uau. Você achou o Gato Biscoito escondido.",
    "O Criador passou horas escondendo isso.",
    "Finja surpresa, por favor."
  ],

  ranking: [
    "Aí estão elas! Toque em uma Gem para selecionar, e depois toque no pódio.",
    "Pense bem... suas 3 favoritas absolutas!"
  ],

  firstPlaceReactions: {
    "Garnet":               "Garnet no topo? Uma escolha feita literalmente de amor.",
    "Pérola":               "Pérola? Vejo que você aprecia elegância (e muito drama).",
    "Ametista":             "Ametista! O caos em forma de pedra.",
    "Peridot":              "Peridot em primeiro? Que escolha de... clod.",
    "Lapis Lazuli":         "Lápis Lazuli. Profundo. O Criador imaginou que você escolheria ela.",
    "Rose Quartz":          "Controverso! Os dados estão ficando interessantes.",
    "Bismuto":              "Bismuto! Forte e direta, igual a sua personalidade?",
    "Safira":               "Safira em primeiro? Eu já sabia que você ia escolher ela.",
    "Rubi":                 "Rubi! Apaixonada e explosiva. Boa escolha.",
    "Stevonnie":            "Stevonnie?! Uma fusão no topo? Que ousadia!",
    "Opal":                 "Opal! Rara e elegante. Igual a essa escolha.",
    "Sardonix":             "Sardonix! Alguém gosta de um bom show!",
    "Steven":               "Steven! O próprio herói? Escolha ousada e fofa!",
    "Greg":                 "O 'Charme do Universo'? O Criador não esperava por essa.",
    "Leão":                 "Leão?! Peludo e misterioso. Respeito.",
    "Sugilite":             "Sugilite! Força bruta. Eu gosto do seu estilo.",
    "Alexandrite":          "Alexandrite?! Uma MEGA fusão em primeiro? Impressionante!",
    "Arco-Íris Quartz":     "Arco-Íris Quartz! Uma fusão espetacular, elegante e cheia de charme.",
    "Fluorite":             "Fluorite! Devagar... com... muita... sabedoria... e... amor.",
    "Obsidian":             "Obsidian! A fusão vulcânica lendária. Puro poder titânico!",
    "Pedra do Sol":         "Pedra do Sol! Bungaú! Lembre-se sempre de respeitar os outros e manter a energia positiva!",
    "Steg":                 "Steg! Um milagre musical em forma de rock star. O universo precisa ouvir essa guitarra!",
    "Fumê Quartz":          "Fumê Quartz! Ioiôs voando para todos os lados. Descontração e superação pura!",
  },

  fusion: "Oh! Uma fusão ao vivo! Rubi e Safira se tornaram... GARNET!",

  confirm: [
    "Calculando algoritmo de alma...",
    "E cá entre nós...",
    "Eu vi o tempo que o Criador gastou programando isso.",
    "Ele deve gostar muito de você.",
    "Clique em ENVIAR para finalizar."
  ],

  outro: [
    "Prontinho! Missão completa.",
    "Obrigado por jogar!",
    "Seus dados foram enviados para as estrelas ✨"
  ],

  creatorMessage: [
    "...",
    "Antes de você fechar isso...",
    "O Criador quer dizer uma coisa.",
    "Ele passou muito tempo aqui.",
    "Cada detalhe. Cada som. Cada texto.",
    "Foi feito pensando em você.",
    "Especificamente em você.",
    "Ele acha que você é incrível.",
    "( E eu, o Narrador, concordo. )",
    "( Pela primeira vez. )",
    "✨"
  ],
};

const REACTION_POOLS = {
  abertura: [
    "Mente aberta para o desconhecido. O Criador valoriza muito a curiosidade.",
    "Fascínio pelas estrelas e pelo novo. Rose Quartz faria exatamente isso.",
    "Soluções inovadoras e artísticas. O universo agradece sua criatividade.",
    "Pensamento fora da caixa. Uma atitude digna de uma verdadeira Crystal Gem."
  ],
  consciencia: [
    "Cálculos precisos e planejamento seguro. Pérola estaria aplaudindo de pé.",
    "Organização e cautela detectadas. O Criador admira sua disciplina.",
    "Cada detalhe no seu devido lugar. A lógica e a responsabilidade prevalecem.",
    "Método e prudência. Manter o controle da situação é essencial."
  ],
  extroversao: [
    "Quanta energia! Ametista definitivamente te convidaria para uma festa.",
    "Ação e vibração lá no alto! O Criador adora essa energia espetacular.",
    "Sem medo de assumir o palco. O universo precisa desse brilho todo!",
    "Combate, música e agitação. Ninguém segura seu ímpeto!"
  ],
  amabilidade: [
    "Quanta empatia. O Criador sabia que você tinha um coração gigante.",
    "Você sempre pensa no bem-estar dos outros. Um traço raro e valioso.",
    "Compreensão e amor absoluto. Steven com certeza daria um abraço em você.",
    "Acolhimento acima do conflito. Essa gentileza ilumina Beach City."
  ],
  estabilidade: [
    "Mente serena e equilibrada. Safira elogiaria sua imensa tranquilidade.",
    "Paz interior e foco sob pressão. O Criador busca esse equilíbrio há anos.",
    "Respirando fundo diante do caos. A fundação inabalável de uma fusão perfeita.",
    "Controle emocional absoluto. Você se mantém firme quando tudo treme."
  ],
  honestidade: [
    "Verdade e integridade acima de tudo. Bismuto confiaria sua forja a você.",
    "Sinceridade pura. O Criador se sente extremamente seguro com sua lealdade.",
    "Agir corretamente mesmo quando ninguém está olhando. Admirável.",
    "Assumindo responsabilidades com total clareza e franqueza."
  ]
};

// ─────────────────────────────────────────────
// 1. AUDIO MANAGER (Advanced Immersive Engine)
// ─────────────────────────────────────────────

class AudioManager {
  constructor() {
    this.bgm           = this._create(CONFIG.AUDIO.bgm, true);
    this.talk          = this._create(CONFIG.AUDIO.talk);
    this.hover         = this._create(CONFIG.AUDIO.hover);
    this.drag          = this._create(CONFIG.AUDIO.drag);
    this.drop          = this._create(CONFIG.AUDIO.drop);
    this.computer      = this._create(CONFIG.AUDIO.computer, true);
    this.levelup       = this._create(CONFIG.AUDIO.levelup);
    this.wonderfulidea = this._create(CONFIG.AUDIO.wonderfulidea);
    this.star          = this._create(CONFIG.AUDIO.star);
    
    this.bgm.volume = 0.4;
    this.computer.volume = 0.3;
    this.muted = false;
    this.started = false;
    this.gemCache = {};
  }

  _create(src, loop = false) {
    const a = new Audio(src);
    a.loop = loop;
    a.preload = "auto";
    return a;
  }

  playSFX(audioEl) {
    if (this.muted || !this.started) return;
    try {
      const c = audioEl.cloneNode();
      c.volume = audioEl.volume ?? 0.5;
      c.play().catch(() => {});
    } catch (_) {}
  }

  playSFXByName(name, vol = 0.5) {
    if (this.muted || !this.started) return;
    try {
      const path = name.startsWith("assets/") ? name : `assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/${name}`;
      if (!this.gemCache[path]) {
        this.gemCache[path] = this._create(path);
      }
      const c = this.gemCache[path].cloneNode();
      c.volume = vol;
      c.play().catch(() => {});
    } catch (_) {}
  }

  playTalkBeep(voice = "snd_txtsans.wav") {
    if (this.muted || !this.started) return;
    try {
      const path = voice.startsWith("assets/") ? voice : `assets/audio/PC _ Computer - Undertale - Miscellaneous - Sound Effects/${voice}`;
      if (!this.gemCache[path]) {
        this.gemCache[path] = this._create(path);
      }
      const b = this.gemCache[path].cloneNode();
      b.volume = 0.25;
      b.play().catch(() => {});
    } catch (_) {}
  }

  playGemSound(gemId) {
    if (this.muted || !this.started) return;
    try {
      const src = CONFIG.GEM_SOUNDS[gemId];
      if (!src) return;
      if (!this.gemCache[src]) {
        this.gemCache[src] = this._create(src);
      }
      const c = this.gemCache[src].cloneNode();
      c.volume = 0.6;
      c.play().catch(() => {});
    } catch (_) {}
  }

  startBGM() {
    this.started = true;
    if (!this.muted) this.bgm.play().catch(() => {});
  }

  pauseBGM() { this.bgm.pause(); }

  resumeBGM() {
    if (!this.muted && this.started) this.bgm.play().catch(() => {});
  }

  startComputerMusic() {
    if (!this.muted && this.started) {
      this.bgm.pause();
      this.computer.play().catch(() => {});
    }
  }

  stopComputerMusic() {
    this.computer.pause();
    if (!this.muted && this.started) this.bgm.play().catch(() => {});
  }

  toggleMute() {
    this.muted = !this.muted;
    if (this.muted) {
      this.bgm.pause();
      this.computer.pause();
    } else if (this.started) {
      this.bgm.play().catch(() => {});
    }
    return this.muted;
  }

  setVolume(v) { this.bgm.volume = v; }
}

const audio = new AudioManager();

// ─────────────────────────────────────────────
// 2. STAR-FIELD CANVAS & PARTICLES
// ─────────────────────────────────────────────

let setStarTheme;
let currentStarHue = 340; // Garnet/Pink default

(function initStars() {
  const canvas = document.getElementById("star-canvas");
  const ctx = canvas.getContext("2d");
  let stars = [];
  const COUNT = 180;

  function resize() { canvas.width = innerWidth; canvas.height = innerHeight; }

  function create() {
    stars = [];
    for (let i = 0; i < COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + 0.3,
        a: Math.random(),
        da: (Math.random() * .015 + .003) * (Math.random() > .5 ? 1 : -1),
        h: [340, 200, 270, 50][Math.floor(Math.random() * 4)],
      });
    }
  }

  setStarTheme = function(hue) {
    currentStarHue = hue;
    for (const s of stars) {
      if (Math.random() < 0.75) s.h = hue;
    }
  };

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of stars) {
      s.a += s.da;
      if (s.a <= .1 || s.a >= 1) s.da *= -1;
      s.a = Math.max(.1, Math.min(1, s.a));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${s.h},80%,80%,${s.a})`;
      ctx.shadowColor = `hsla(${s.h},90%,70%,${s.a * .6})`;
      ctx.shadowBlur = s.r * 6;
      ctx.fill();
    }
    ctx.shadowBlur = 0;
    requestAnimationFrame(draw);
  }

  addEventListener("resize", () => { resize(); create(); });
  resize(); create(); draw();

  document.addEventListener("mousemove", (e) => {
    if (Math.random() < 0.3) {
      const p = document.createElement("div");
      p.className = "cursor-particle";
      p.style.left = e.clientX + "px";
      p.style.top = e.clientY + "px";
      p.style.background = `hsl(${currentStarHue}, 80%, 70%)`;
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 600);
    }
  }, { passive: true });

  document.addEventListener("click", (e) => {
    for (let i = 0; i < 10; i++) {
      const s = document.createElement("div");
      s.className = "click-sparkle";
      s.style.left = e.clientX + "px";
      s.style.top = e.clientY + "px";
      const angle = Math.random() * Math.PI * 2;
      const speed = 20 + Math.random() * 60;
      s.style.setProperty("--vx", `${Math.cos(angle) * speed}px`);
      s.style.setProperty("--vy", `${Math.sin(angle) * speed}px`);
      s.style.background = `hsl(${currentStarHue}, 90%, 75%)`;
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 800);
    }
  }, { passive: true });
})();

// ─────────────────────────────────────────────
// 3. DIALOGUE ENGINE
// ─────────────────────────────────────────────

class DialogueEngine {
  constructor() { this._typing = false; this._cancel = false; }

  async typeLines(el, lines, speed = CONFIG.TYPE_SPEED, voice = "snd_txtsans.wav") {
    this._cancel = false; this._typing = true;
    for (let i = 0; i < lines.length; i++) {
      if (this._cancel) { this._typing = false; return; }
      await this._type(el, lines[i], speed, voice);
      if (i < lines.length - 1) {
        await this.waitForInput(el);
        if (this._cancel) { this._typing = false; return; }
        el.textContent = "";
      }
    }
    el.classList.add("done");
    this._typing = false;
  }

  async typeSingle(el, text, speed = CONFIG.TYPE_SPEED, voice = "snd_txtsans.wav") {
    this._cancel = false; this._typing = true;
    await this._type(el, text, speed, voice);
    el.classList.add("done");
    this._typing = false;
  }

  _type(el, text, speed, voice) {
    return new Promise((resolve) => {
      el.textContent = ""; el.classList.remove("done", "waiting-input");
      let i = 0;
      let finished = false;

      const skipHandler = (e) => {
        if (e.type === "keydown" && e.key !== "Enter") return;
        if (finished) return;
        e.preventDefault();
        finished = true;
        clearInterval(iv);
        el.textContent = text;
        cleanup();
        resolve();
      };

      const cleanup = () => {
        document.removeEventListener("click", skipHandler);
        document.removeEventListener("keydown", skipHandler);
      };

      setTimeout(() => {
        if (!finished) {
          document.addEventListener("click", skipHandler);
          document.addEventListener("keydown", skipHandler);
        }
      }, 150);

      const iv = setInterval(() => {
        if (this._cancel) {
          finished = true;
          clearInterval(iv);
          cleanup();
          resolve();
          return;
        }
        el.textContent += text[i];
        if (text[i] !== " ") audio.playTalkBeep(voice);
        if (++i >= text.length) {
          finished = true;
          clearInterval(iv);
          cleanup();
          resolve();
        }
      }, speed);
    });
  }

  waitForInput(el) {
    return new Promise((resolve) => {
      if (this._cancel) { resolve(); return; }
      el.classList.add("waiting-input");
      let resolved = false;
      const handler = (e) => {
        if (e.type === "keydown" && e.key !== "Enter") return;
        if (resolved) return;
        e.preventDefault();
        resolved = true;
        document.removeEventListener("click", handler);
        document.removeEventListener("keydown", handler);
        el.classList.remove("waiting-input");
        audio.playSFXByName("snd_select.wav", 0.5);
        resolve();
      };
      setTimeout(() => {
        if (!this._cancel && !resolved) {
          document.addEventListener("click", handler);
          document.addEventListener("keydown", handler);
        }
      }, 150);
    });
  }

  cancel() { this._cancel = true; this._typing = false; }
  get isTyping() { return this._typing; }
}

const dialogue = new DialogueEngine();

// ─────────────────────────────────────────────
// 4. DOM HELPERS & STATE MACHINE
// ─────────────────────────────────────────────

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const STATES = {};
let currentState = "loading";

function initStateRefs() {
  for (const id of ["loading", "intro", "quiz", "ranking", "confirm", "outro"]) {
    STATES[id] = { el: $(`#state-${id}`) };
  }
}

function transitionTo(newState) {
  return new Promise((resolve) => {
    if (newState !== "loading" && newState !== "intro" && Math.random() < 0.03) {
      triggerRandomEvent();
    }

    if (newState !== "loading") {
      audio.playSFXByName("snd_elecdoor_open.wav", 0.4);
    }

    const oldEl = STATES[currentState].el;
    const newEl = STATES[newState].el;
    oldEl.classList.add("fade-out");
    setTimeout(() => {
      oldEl.classList.remove("active", "fade-in", "fade-out");
      newEl.classList.add("active", "fade-in");
      currentState = newState;
      resolve();
    }, 600);
  });
}

// ─────────────────────────────────────────────
// 5. LOCAL STORAGE & ACHIEVEMENTS
// ─────────────────────────────────────────────

let savedData = {
  achievements: {},
  lastResult: null,
  fusionsFound: [],
  easterEggs: {}
};

function loadStorageData() {
  try {
    const s = localStorage.getItem("crystal_gem_data");
    if (s) {
      const parsed = JSON.parse(s);
      savedData = Object.assign(savedData, parsed);
      for (const k of Object.keys(savedData.achievements)) {
        if (ACHIEVEMENTS[k] && savedData.achievements[k]) {
          ACHIEVEMENTS[k].unlocked = true;
        }
      }
    }
  } catch (e) { console.warn("Erro ao ler localStorage", e); }
}

function saveStorageData() {
  try {
    for (const k of Object.keys(ACHIEVEMENTS)) {
      savedData.achievements[k] = ACHIEVEMENTS[k].unlocked;
    }
    localStorage.setItem("crystal_gem_data", JSON.stringify(savedData));
  } catch (e) { console.warn("Erro ao salvar localStorage", e); }
}

function unlockAchievement(id) {
  const ach = ACHIEVEMENTS[id];
  if (!ach || ach.unlocked) return;
  ach.unlocked = true;
  saveStorageData();

  audio.playSFXByName("snd_levelup.wav", 0.7);
  const toast = $("#achievement-toast");
  $("#toast-icon").textContent = ach.icon;
  $("#toast-name").textContent = ach.name;
  toast.classList.remove("hidden");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hidden");
  }, 3500);
}

// ─────────────────────────────────────────────
// 6. EASTER EGGS EXTRAS
// ─────────────────────────────────────────────

let cookieCatFound = false;

function initEasterEggs() {
  const btnCat = $("#cookie-cat");
  if (btnCat) {
    btnCat.addEventListener("click", async () => {
      if (cookieCatFound) return;
      cookieCatFound = true;
      savedData.easterEggs.cookieCat = true;
      unlockAchievement("cookie_cat");
      btnCat.classList.add("found");
      audio.playSFXByName("mus_myemeow.ogg", 0.7);
      audio.pauseBGM();
      dialogue.cancel();
      const el = $("#text-intro");
      await new Promise((r) => setTimeout(r, 400));
      await dialogue.typeLines(el, SCRIPT.cookieCat, CONFIG.TYPE_SPEED_FAST, "snd_txtsans2.wav");
      await new Promise((r) => setTimeout(r, 1500));
      audio.resumeBGM();
      el.textContent = ""; el.classList.remove("done");
      await dialogue.typeLines(el, SCRIPT.intro, CONFIG.TYPE_SPEED, "snd_txtsans.wav");
      $("#btn-start").classList.add("visible");
    });
  }

  const btnLion = $("#btn-lion");
  const lionImg = $("#lion-img");
  if (btnLion && lionImg) {
    btnLion.addEventListener("mouseenter", () => {
      lionImg.src = "assets/img/LEAODORMINDO.png";
      audio.playSFXByName("snd_movemenu.wav", 0.4);
    });
    btnLion.addEventListener("mouseleave", () => lionImg.src = "assets/img/LEAO.png");
    btnLion.addEventListener("click", async () => {
      savedData.easterEggs.lion = true;
      unlockAchievement("lion_found");
      audio.playSFXByName("mus_sfx_yowl.wav", 0.6);
      dialogue.cancel();
      const activeBox = document.querySelector(".state.active .dialogue-text");
      if (activeBox) {
        const lionLines = ["...", "Oi.", "Eu sou o Leão.", "Não tenho nada a dizer.", "Miau.", "( Não desperta a conquista só por isso. )"];
        await dialogue.typeLines(activeBox, lionLines, CONFIG.TYPE_SPEED_FAST, "snd_tem.wav");
      }
    });
  }

  const logo = $("#intro-logo");
  if (logo) {
    let clickCount = 0;
    let clickTimer = null;
    logo.addEventListener("click", async () => {
      clickCount++;
      audio.playSFXByName("snd_movemenu.wav", 0.4);
      if (clickCount === 1) {
        clickTimer = setTimeout(() => { clickCount = 0; }, 1200);
      }
      if (clickCount === 3) {
        clearTimeout(clickTimer);
        clickCount = 0;
        savedData.easterEggs.logo = true;
        unlockAchievement("logo_click");
        audio.playSFXByName("snd_mysterygo.wav", 0.6);
        dialogue.cancel();
        const el = $("#text-intro");
        if (el) {
          const logoLines = ["Você clicou três vezes no logo.", "Isso não muda nada.", "Mas o Criador vai ficar feliz sabendo que você tentou.", "...ele sempre fica.", "Continuando..."];
          await dialogue.typeLines(el, logoLines, CONFIG.TYPE_SPEED_FAST, "snd_txtsans.wav");
          $("#btn-start").classList.add("visible");
        }
      }
    });
  }

  const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  let konamiIndex = 0;
  document.addEventListener("keydown", async (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        konamiIndex = 0;
        savedData.easterEggs.konami = true;
        unlockAchievement("konami");
        playConclusionAnimation();
        audio.playSFXByName("snd_wonderfulidea.wav", 0.7);
        dialogue.cancel();
        const activeBox = document.querySelector(".state.active .dialogue-text");
        if (activeBox) {
          const konamiLines = ["CÓDIGO SECRETO ATIVADO.", "Parabéns. Você é oficialmente uma Crystal Gem.", "Missão desbloqueada: Defender o Universo.", "( O Criador está muito orgulhoso. Ele ensaiou essa mensagem. )"];
          await dialogue.typeLines(activeBox, konamiLines, CONFIG.TYPE_SPEED_FAST, "snd_txtasr.wav");
        }
      }
    } else {
      konamiIndex = 0;
    }
  }, { passive: true });
}

async function triggerRandomEvent() {
  const events = [
    { speaker: "PERIDOT", voice: "snd_txtal.wav", lines: ["INTERRUPÇÃO NÃO AUTORIZADA.", "Olá. Sou Peridot.", "Encontrei uma falha no sistema.", "Clod.", "Retomando transmissão..."] },
    { speaker: "GARNET",  voice: "snd_txtund.wav", lines: ["...", "Garnet aqui.", "Já sei qual vai ser o seu resultado.", "Não vou contar.", "Continue."] },
    { speaker: "LEÃO",    voice: "snd_tem.wav",    lines: ["( O Leão entrou na sala. )", "( Ele olhou para a tela. )", "( Saiu. )", "( Isso foi muito importante. )"] },
    { speaker: "GREG",    voice: "snd_txtasg.wav", lines: ["Ei! Aqui é o Greg.", "O Steven me disse que você tava fazendo o teste.", "Que legal! Ele vai amar saber disso.", "Rock on! 🤘"] }
  ];
  const ev = events[Math.floor(Math.random() * events.length)];
  const overlay = $("#random-event-overlay");
  $("#random-event-speaker").textContent = ev.speaker;
  overlay.classList.remove("hidden");
  overlay.classList.add("active");

  audio.playSFXByName("mus_f_alarm.ogg", 0.5);

  const textEl = $("#text-random-event");
  const btn = $("#btn-random-continue");
  btn.classList.remove("visible");
  
  await dialogue.typeLines(textEl, ev.lines, CONFIG.TYPE_SPEED_FAST, ev.voice);
  btn.classList.add("visible");

  btn.addEventListener("click", () => {
    audio.playSFXByName("snd_select.wav", 0.5);
    overlay.classList.remove("active");
    setTimeout(() => overlay.classList.add("hidden"), 300);
  }, { once: true });
}

// ─────────────────────────────────────────────
// 7. STATE 1: LOADING
// ─────────────────────────────────────────────

async function runLoading() {
  const bar = $("#loading-bar");
  const textEl = $("#loading-text");
  const msgs = SCRIPT.loading;

  let progress = 0;
  const steps = [
    { p: 15, m: msgs[0], t: 400 },
    { p: 35, m: msgs[1], t: 700 },
    { p: 68, m: msgs[2], t: 800 },
    { p: 88, m: msgs[3], t: 500 },
    { p: 100, m: msgs[4], t: 600 },
  ];

  for (const s of steps) {
    await new Promise((r) => setTimeout(r, s.t));
    progress = s.p;
    bar.style.width = progress + "%";
    textEl.textContent = s.m;
    audio.playSFXByName("snd_noise.wav", 0.2);
  }

  await new Promise((r) => setTimeout(r, 600));
  await transitionTo("intro");
}

// ─────────────────────────────────────────────
// 8. STATE 2: INTRO
// ─────────────────────────────────────────────

async function runIntro() {
  const el = $("#text-intro");
  let introLines = SCRIPT.intro;
  if (savedData.lastResult) {
    introLines = ["Detectei que você já esteve aqui antes. Bem-vinda de volta."].concat(introLines);
  }

  await dialogue.typeLines(el, introLines, CONFIG.TYPE_SPEED, "snd_txtsans.wav");
  const btn = $("#btn-start");
  if (!btn.classList.contains("visible")) btn.classList.add("visible");

  btn.addEventListener("mouseenter", () => audio.playSFXByName("snd_movemenu.wav", 0.5));

  return new Promise((resolve) => {
    btn.addEventListener("click", () => {
      audio.playSFXByName("snd_hero.wav", 0.6);
      audio.startBGM();
      btn.classList.remove("visible");
      resolve();
    }, { once: true });
  });
}

// ─────────────────────────────────────────────
// 9. STATE 3: PERSONALITY QUIZ
// ─────────────────────────────────────────────

const quizAnswers = {};

async function runQuiz() {
  await transitionTo("quiz");
  await new Promise((r) => setTimeout(r, 600));

  const textEl = $("#text-quiz");
  const container = $("#quiz-answers");

  for (let qi = 0; qi < QUIZ_DATA.length; qi++) {
    const q = QUIZ_DATA[qi];
    await dialogue.typeSingle(textEl, q.q, CONFIG.TYPE_SPEED, "snd_txtsans.wav");

    container.innerHTML = "";
    const chosenOpt = await new Promise((resolve) => {
      q.opts.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.className = "quiz-btn pop-in";
        btn.textContent = opt.l;
        btn.style.animationDelay = `${i * 0.08}s`;
        btn.addEventListener("mouseenter", () => audio.playSFXByName("snd_movemenu.wav", 0.5));
        btn.addEventListener("click", () => {
          audio.playSFXByName("snd_buyitem.wav", 0.6);
          resolve(opt);
        }, { once: true });
        container.appendChild(btn);
      });
    });

    quizAnswers[`q${qi}`] = chosenOpt.l;
    container.innerHTML = "";

    if (chosenOpt.a) {
      for (const [attr, val] of Object.entries(chosenOpt.a)) {
        if (SOUL_ATTRS[attr] !== undefined) SOUL_ATTRS[attr] += val;
      }
    }

    let highestAttr = "amabilidade";
    let maxVal = -999;
    if (chosenOpt.a) {
      for (const [attr, val] of Object.entries(chosenOpt.a)) {
        if (val > maxVal && REACTION_POOLS[attr]) {
          maxVal = val;
          highestAttr = attr;
        }
      }
    }

    const pool = REACTION_POOLS[highestAttr];
    const reactionText = pool.shift(); 
    pool.push(reactionText); 

    await new Promise((r) => setTimeout(r, 200));
    await dialogue.typeSingle(textEl, reactionText, CONFIG.TYPE_SPEED, "snd_txtsans2.wav");
    await dialogue.waitForInput(textEl);
    textEl.textContent = ""; textEl.classList.remove("done");
  }

  await dialogue.typeSingle(textEl, "Dados vitais coletados com absoluto sucesso. Vamos ao ranking principal...", CONFIG.TYPE_SPEED, "snd_txtsans.wav");
  await dialogue.waitForInput(textEl);
  textEl.textContent = ""; textEl.classList.remove("done");
}

// ─────────────────────────────────────────────
// 10. GEM GRID & MECHANICS
// ─────────────────────────────────────────────

function buildGemGrid() {
  const grid = $("#gem-grid");
  grid.innerHTML = "";
  CONFIG.GEMS.forEach((gem, i) => {
    const card = document.createElement("div");
    card.className = "gem-card";
    card.id = `gem-${gem.id}`;
    card.dataset.id = gem.id;
    card.dataset.name = gem.name;
    card.draggable = true;
    card.style.setProperty("--float-delay", `${(i % 10) * 0.15}s`);
    card.innerHTML = `
      <img src="${gem.img}" alt="${gem.name}" loading="lazy" />
      <span class="gem-name">${gem.name}</span>
    `;
    grid.appendChild(card);
  });
}

let selectedGemId = null;
const slotContents = { 1: null, 2: null, 3: null };
let fusionTriggered = false;

function selectGem(cardId) {
  if (selectedGemId) {
    const prev = $(`#${selectedGemId}`);
    if (prev) prev.classList.remove("selected");
  }
  if (selectedGemId === cardId) {
    selectedGemId = null;
    unhighlightPedestals();
    return;
  }
  selectedGemId = cardId;
  const card = $(`#${cardId}`);
  if (card) card.classList.add("selected");
  audio.playSFXByName("snd_grab.wav", 0.5);
  highlightEmptyPedestals();
}

function highlightEmptyPedestals() {
  $$(".pedestal").forEach((p) => {
    if (!slotContents[p.dataset.slot]) p.classList.add("target-highlight");
  });
}

function unhighlightPedestals() {
  $$(".pedestal").forEach((p) => p.classList.remove("target-highlight"));
}

function onPedestalClick(slot) {
  if (slotContents[slot] && !selectedGemId) {
    removeGemFromSlot(slot);
    audio.playSFXByName("snd_escaped.wav", 0.5);
    checkAllSlotsFilled();
    return;
  }
  if (slotContents[slot] && selectedGemId) {
    removeGemFromSlot(slot);
    placeSelectedGemInSlot(slot);
    return;
  }
  if (!slotContents[slot] && selectedGemId) {
    placeSelectedGemInSlot(slot);
    return;
  }
}

function placeSelectedGemInSlot(slot) {
  if (!selectedGemId) return;
  const card = $(`#gem-grid #${selectedGemId}`) || $(`#${selectedGemId}`);
  if (!card) return;
  const pedestal = $(`#pedestal-${slot}`);
  freeGemFromAnySlot(selectedGemId);

  const clone = card.cloneNode(true);
  clone.classList.remove("selected", "dragging");
  clone.draggable = false;
  pedestal.appendChild(clone);
  pedestal.classList.add("filled");
  slotContents[slot] = selectedGemId;

  const original = $(`#gem-grid #${selectedGemId}`);
  if (original) {
    original.classList.add("placed");
    original.classList.remove("selected");
  }

  audio.playGemSound(card.dataset.id);

  selectedGemId = null;
  unhighlightPedestals();

  if (slot === "1") {
    triggerFirstPlaceReaction(card.dataset.name);
    const gemId = card.dataset.id;
    if (GEM_THEME[gemId]) $("#bg-layer").style.background = GEM_THEME[gemId];
    if (GEM_HUES[gemId] !== undefined) setStarTheme(GEM_HUES[gemId]);
  }

  checkFusion();
  checkAllSlotsFilled();
}

function removeGemFromSlot(slot) {
  const cardId = slotContents[slot];
  if (!cardId) return;
  const pedestal = $(`#pedestal-${slot}`);
  const cardInPedestal = pedestal.querySelector(".gem-card");
  if (cardInPedestal) cardInPedestal.remove();
  pedestal.classList.remove("filled");
  slotContents[slot] = null;

  const original = $(`#gem-grid #${cardId}`);
  if (original) original.classList.remove("placed");
}

function freeGemFromAnySlot(cardId) {
  for (const s of Object.keys(slotContents)) {
    if (slotContents[s] === cardId) removeGemFromSlot(s);
  }
}

function checkAllSlotsFilled() {
  const filled = Object.values(slotContents).filter(Boolean).length;
  const btn = $("#btn-confirm");
  if (filled === 3) {
    btn.classList.add("visible", "btn-glow");
  } else {
    btn.classList.remove("visible", "btn-glow");
  }
}

function initClickToPlace() {
  const grid = $("#gem-grid");
  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".gem-card");
    if (!card || card.classList.contains("placed")) return;
    selectGem(card.id);
  });
  document.querySelectorAll(".pedestal").forEach((pedestal) => {
    pedestal.addEventListener("click", (e) => {
      const cardInside = e.target.closest(".gem-card");
      if (cardInside) {
        const slot = pedestal.dataset.slot;
        removeGemFromSlot(slot);
        audio.playSFXByName("snd_escaped.wav", 0.5);
        checkAllSlotsFilled();
        return;
      }
      onPedestalClick(pedestal.dataset.slot);
    });
  });
}

// DRAG & DROP
let draggedCard = null;

function initDragAndDrop() {
  const grid = $("#gem-grid");
  const pedestals = $$(".pedestal");

  grid.addEventListener("dragstart", (e) => {
    const card = e.target.closest(".gem-card");
    if (!card) return;
    draggedCard = card;
    card.classList.add("dragging");
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", card.id);
    audio.playSFXByName("snd_grab.wav", 0.5);
  });

  grid.addEventListener("dragend", (e) => {
    const card = e.target.closest(".gem-card");
    if (card) card.classList.remove("dragging");
    draggedCard = null;
  });

  document.addEventListener("dragstart", (e) => {
    const card = e.target.closest(".pedestal .gem-card");
    if (!card) return;
    draggedCard = card;
    card.classList.add("dragging");
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", card.id);
    audio.playSFXByName("snd_grab.wav", 0.5);
  });

  document.addEventListener("dragend", () => {
    if (draggedCard) draggedCard.classList.remove("dragging");
    draggedCard = null;
    pedestals.forEach((p) => p.classList.remove("drag-over"));
  });

  pedestals.forEach((pedestal) => {
    pedestal.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      pedestal.classList.add("drag-over");
    });
    pedestal.addEventListener("dragleave", () => {
      pedestal.classList.remove("drag-over");
    });
    pedestal.addEventListener("drop", (e) => {
      e.preventDefault();
      pedestal.classList.remove("drag-over");
      if (!draggedCard) return;

      const slot = pedestal.dataset.slot;
      if (slotContents[slot]) removeGemFromSlot(slot);
      freeGemFromAnySlot(draggedCard.id);

      const clone = draggedCard.cloneNode(true);
      clone.classList.remove("dragging", "selected");
      clone.draggable = false;
      pedestal.appendChild(clone);
      pedestal.classList.add("filled");
      slotContents[slot] = draggedCard.id;

      const original = $(`#gem-grid #${draggedCard.id}`);
      if (original) original.classList.add("placed");

      audio.playGemSound(draggedCard.dataset.id);

      if (slot === "1") {
        triggerFirstPlaceReaction(draggedCard.dataset.name);
        const gemId = draggedCard.dataset.id;
        if (GEM_THEME[gemId]) $("#bg-layer").style.background = GEM_THEME[gemId];
        if (GEM_HUES[gemId] !== undefined) setStarTheme(GEM_HUES[gemId]);
      }

      if (selectedGemId) {
        const sel = $(`#${selectedGemId}`);
        if (sel) sel.classList.remove("selected");
        selectedGemId = null;
        unhighlightPedestals();
      }

      draggedCard = null;
      checkFusion();
      checkAllSlotsFilled();
    });
  });

  grid.addEventListener("dragover", (e) => { e.preventDefault(); });
  grid.addEventListener("drop", (e) => {
    e.preventDefault();
    if (!draggedCard) return;
    freeGemFromAnySlot(draggedCard.id);
    draggedCard = null;
    checkAllSlotsFilled();
  });
}

function initTouchDrag() {
  let touchCard = null;
  let touchClone = null;
  let ox = 0, oy = 0;
  let longPressTimer = null;
  let isLongPress = false;

  document.addEventListener("touchstart", (e) => {
    const card = e.target.closest(".gem-card");
    if (!card) return;
    isLongPress = false;
    longPressTimer = setTimeout(() => {
      isLongPress = true;
      touchCard = card;
      const rect = card.getBoundingClientRect();
      const t = e.touches[0];
      ox = t.clientX - rect.left;
      oy = t.clientY - rect.top;

      touchClone = card.cloneNode(true);
      touchClone.style.cssText = `position:fixed;z-index:9999;width:${rect.width}px;pointer-events:none;opacity:.85;transform:scale(1.05);transition:none;`;
      touchClone.style.left = (t.clientX - ox) + "px";
      touchClone.style.top = (t.clientY - oy) + "px";
      document.body.appendChild(touchClone);
      card.classList.add("dragging");
      audio.playSFXByName("snd_grab.wav", 0.5);
    }, 400);
  }, { passive: true });

  document.addEventListener("touchmove", (e) => {
    if (!isLongPress && longPressTimer) {
      clearTimeout(longPressTimer);
      longPressTimer = null;
      return;
    }
    if (!touchClone) return;
    const t = e.touches[0];
    touchClone.style.left = (t.clientX - ox) + "px";
    touchClone.style.top = (t.clientY - oy) + "px";

    $$(".pedestal").forEach((p) => {
      const r = p.getBoundingClientRect();
      const inside = t.clientX >= r.left && t.clientX <= r.right && t.clientY >= r.top && t.clientY <= r.bottom;
      p.classList.toggle("drag-over", inside);
    });
  }, { passive: true });

  document.addEventListener("touchend", (e) => {
    clearTimeout(longPressTimer);
    longPressTimer = null;
    if (!isLongPress || !touchClone || !touchCard) {
      isLongPress = false;
      return;
    }

    const t = e.changedTouches[0];
    touchClone.remove();
    touchCard.classList.remove("dragging");

    let dropped = false;
    $$(".pedestal").forEach((p) => {
      p.classList.remove("drag-over");
      const r = p.getBoundingClientRect();
      if (t.clientX >= r.left && t.clientX <= r.right && t.clientY >= r.top && t.clientY <= r.bottom) {
        const slot = p.dataset.slot;
        if (slotContents[slot]) removeGemFromSlot(slot);
        freeGemFromAnySlot(touchCard.id);

        const clone = touchCard.cloneNode(true);
        clone.classList.remove("dragging", "selected");
        clone.draggable = false;
        p.appendChild(clone);
        p.classList.add("filled");
        slotContents[slot] = touchCard.id;

        const orig = $(`#gem-grid #${touchCard.id}`);
        if (orig) orig.classList.add("placed");

        audio.playGemSound(touchCard.dataset.id);

        if (slot === "1") {
          triggerFirstPlaceReaction(touchCard.dataset.name);
          const gemId = touchCard.dataset.id;
          if (GEM_THEME[gemId]) $("#bg-layer").style.background = GEM_THEME[gemId];
          if (GEM_HUES[gemId] !== undefined) setStarTheme(GEM_HUES[gemId]);
        }
        dropped = true;
      }
    });

    if (!dropped) freeGemFromAnySlot(touchCard.id);
    touchCard = null;
    touchClone = null;
    isLongPress = false;
    checkFusion();
    checkAllSlotsFilled();
  });
}

async function triggerFirstPlaceReaction(gemName) {
  const textEl = $("#text-ranking");
  const reaction = SCRIPT.firstPlaceReactions[gemName];
  if (!reaction) return;
  await new Promise((r) => setTimeout(r, 400));
  dialogue.cancel();
  await new Promise((r) => setTimeout(r, 100));
  await dialogue.typeSingle(textEl, reaction, CONFIG.TYPE_SPEED_FAST, "snd_txtsans.wav");
}

// ─────────────────────────────────────────────
// 11. SISTEMA DE FUSÕES COM OVERLAY ESPECIAL
// ─────────────────────────────────────────────

async function checkFusion() {
  if (!fusionTriggered) {
    const s2 = slotContents[2];
    const s3 = slotContents[3];
    if (s2 && s3) {
      const ids = [s2, s3].sort();
      const fusionPair = ["gem-rubi", "gem-safira"].sort();
      if (ids[0] === fusionPair[0] && ids[1] === fusionPair[1] && slotContents[1] !== "gem-garnet") {
        fusionTriggered = true;
        const overlay = $("#fusion-overlay");
        overlay.classList.add("flash");
        audio.playSFXByName("snd_spearrise.wav", 0.7);
        await new Promise((r) => setTimeout(r, 600));
        audio.playSFXByName("snd_hero.wav", 0.7);
        removeGemFromSlot("2");
        removeGemFromSlot("3");
        const rubiCard = $(`#gem-grid #gem-rubi`);
        const safiraCard = $(`#gem-grid #gem-safira`);
        if (rubiCard) rubiCard.classList.add("placed");
        if (safiraCard) safiraCard.classList.add("placed");
        const garnetData = CONFIG.GEMS.find((g) => g.id === "garnet");
        const garnetOriginal = $(`#gem-grid #gem-garnet`);
        freeGemFromAnySlot("gem-garnet");
        const pedestal2 = $("#pedestal-2");
        const garnetClone = document.createElement("div");
        garnetClone.className = "gem-card fusion-born";
        garnetClone.id = "gem-garnet";
        garnetClone.dataset.id = "garnet";
        garnetClone.dataset.name = garnetData.name;
        garnetClone.innerHTML = `<img src="${garnetData.img}" alt="${garnetData.name}" /><span class="gem-name">${garnetData.name}</span>`;
        pedestal2.appendChild(garnetClone);
        pedestal2.classList.add("filled");
        slotContents[2] = "gem-garnet";
        if (garnetOriginal) garnetOriginal.classList.add("placed");
        await new Promise((r) => setTimeout(r, 800));
        overlay.classList.remove("flash");
        dialogue.cancel();
        await dialogue.typeSingle($("#text-ranking"), SCRIPT.fusion, CONFIG.TYPE_SPEED_FAST, "snd_txtsans.wav");
        unlockAchievement("fusion_found");
        checkAllSlotsFilled();
        return;
      }
    }
  }

  const currentGems = [slotContents[1], slotContents[2], slotContents[3]]
    .filter(Boolean)
    .map(id => id.replace("gem-", ""))
    .sort();

  if (currentGems.length < 2) return;

  let fusionKey = null;
  if (currentGems.length === 3) {
    const k3 = currentGems.join("+");
    if (FUSIONS[k3]) fusionKey = k3;
  }
  if (!fusionKey) {
    const pairs = [
      [currentGems[0], currentGems[1]].join("+"),
      [currentGems[0], currentGems[2]].join("+"),
      [currentGems[1], currentGems[2]].join("+")
    ];
    for (const p of pairs) {
      if (FUSIONS[p]) { fusionKey = p; break; }
    }
  }
  if (!fusionKey) {
    for (const fk of Object.keys(FUSIONS)) {
      const sortedFk = fk.split("+").sort().join("+");
      const currentSorted3 = currentGems.join("+");
      if (sortedFk === currentSorted3) { fusionKey = fk; break; }
      const pairs = [
        [currentGems[0], currentGems[1]].join("+"),
        [currentGems[0], currentGems[2]].join("+"),
        [currentGems[1], currentGems[2]].join("+")
      ];
      for (const p of pairs) {
        if (sortedFk === p) { fusionKey = fk; break; }
      }
    }
  }

  if (fusionKey && !savedData.fusionsFound.includes(fusionKey)) {
    savedData.fusionsFound.push(fusionKey);
    saveStorageData();

    const fus = FUSIONS[fusionKey];
    if (fusionKey.includes("lapis") && fusionKey.includes("peridot")) {
      unlockAchievement("lapidot");
    } else {
      unlockAchievement("fusion_found");
    }

    const modal = $("#fusion-modal-overlay");
    $("#fusion-modal-img").src = fus.img;
    $("#fusion-modal-name").textContent = fus.name;
    modal.classList.remove("hidden");
    modal.classList.add("active");

    audio.playSFXByName(fus.sound, 0.7);

    const textEl = $("#text-fusion-modal");
    const btn = $("#btn-fusion-continue");
    btn.classList.remove("visible");
    dialogue.cancel();
    await dialogue.typeSingle(textEl, fus.text, CONFIG.TYPE_SPEED_FAST, "snd_txtsans.wav");
    btn.classList.add("visible");

    btn.addEventListener("click", () => {
      audio.playSFXByName("snd_select.wav", 0.5);
      modal.classList.remove("active");
      setTimeout(() => modal.classList.add("hidden"), 300);
    }, { once: true });
  }
}

// ─────────────────────────────────────────────
// 12. CONCLUSION SPARKLE ANIMATION
// ─────────────────────────────────────────────

function playConclusionAnimation() {
  return new Promise((resolve) => {
    const overlay = $("#conclusion-overlay");
    overlay.innerHTML = "";
    overlay.classList.add("active");
    audio.playSFXByName("mus_sfx_sparkles.wav", 0.7);

    const cx = innerWidth / 2, cy = innerHeight / 2;
    const colors = ["#f4a6c4", "#fce588", "#c8a8e9", "#9ad8f5", "#a8f0d9", "#fff"];

    for (let i = 0; i < 60; i++) {
      const s = document.createElement("div");
      s.className = "sparkle";
      const angle = Math.random() * Math.PI * 2;
      const dist = 100 + Math.random() * 400;
      s.style.left = cx + "px";
      s.style.top = cy + "px";
      s.style.setProperty("--tx", `${Math.cos(angle) * dist}px`);
      s.style.setProperty("--ty", `${Math.sin(angle) * dist}px`);
      s.style.background = colors[Math.floor(Math.random() * colors.length)];
      const size = (4 + Math.random() * 8) + "px";
      s.style.width = size; s.style.height = size;
      s.style.animationDelay = (Math.random() * .4) + "s";
      s.style.animationDuration = (1 + Math.random() * .8) + "s";
      overlay.appendChild(s);
    }

    setTimeout(() => { overlay.classList.remove("active"); resolve(); }, 2200);
  });
}

// ─────────────────────────────────────────────
// 13. SECRET DATA CAPTURE
// ─────────────────────────────────────────────

async function sendRankingData() {
  const data = {
    rank_1: slotContents[1] || "empty",
    rank_2: slotContents[2] || "empty",
    rank_3: slotContents[3] || "empty",
    quiz_answers: quizAnswers,
    cookie_cat_found: cookieCatFound,
    fusion_triggered: fusionTriggered,
    soul_attributes: SOUL_ATTRS,
    timestamp: new Date().toISOString(),
  };

  for (const key of ["rank_1", "rank_2", "rank_3"]) {
    const gem = CONFIG.GEMS.find((g) => `gem-${g.id}` === data[key]);
    if (gem) data[key] = gem.name;
  }

  console.log("🔮 Ranking data captured:", data);

  try {
    const res = await fetch(CONFIG.FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) console.log("✅ Data sent!");
    else console.warn("⚠️ Endpoint returned:", res.status);
  } catch (err) {
    console.warn("⚠️ Could not reach endpoint:", err.message);
  }
}

function initHoverSounds() {
  document.querySelectorAll(".action-btn, .gem-card, .diary-btn").forEach((el) => {
    el.addEventListener("mouseenter", () => audio.playSFXByName("snd_movemenu.wav", 0.4));
  });
}

async function runRanking() {
  await transitionTo("ranking");
  buildGemGrid();
  initClickToPlace();
  initDragAndDrop();
  initTouchDrag();
  initHoverSounds();

  const textEl = $("#text-ranking");
  await dialogue.typeLines(textEl, SCRIPT.ranking, CONFIG.TYPE_SPEED, "snd_txtsans.wav");

  const btn = $("#btn-confirm");
  btn.addEventListener("mouseenter", () => audio.playSFXByName("snd_movemenu.wav", 0.5));
  return new Promise((resolve) => {
    btn.addEventListener("click", () => {
      if (!btn.classList.contains("visible")) return;
      audio.playSFXByName("snd_select.wav", 0.6);
      resolve();
    }, { once: true });
  });
}

async function runConfirm() {
  await transitionTo("confirm");
  const el = $("#text-confirm");
  await dialogue.typeLines(el, SCRIPT.confirm, CONFIG.TYPE_SPEED, "snd_txtsans.wav");
  const btn = $("#btn-send");
  btn.classList.add("visible");
  btn.addEventListener("mouseenter", () => audio.playSFXByName("snd_movemenu.wav", 0.5));

  return new Promise((resolve) => {
    btn.addEventListener("click", async () => {
      audio.playSFXByName("snd_save.wav", 0.7);
      btn.classList.remove("visible");
      sendRankingData();
      resolve();
    }, { once: true });
  });
}

// ─────────────────────────────────────────────
// 14. STATE 5: OUTRO — RESULTADO RPG E DIÁRIO
// ─────────────────────────────────────────────

let calculatedResults = [];
let mainGemResult = null;

function calculateGemCompatibility() {
  const attrs = ["abertura", "consciencia", "extroversao", "amabilidade", "estabilidade", "honestidade"];
  
  // 1. Normaliza o perfil do usuário em um vetor unitário
  let uMagSq = 0;
  for (const a of attrs) {
    uMagSq += (SOUL_ATTRS[a] || 0) ** 2;
  }
  const uMag = Math.sqrt(uMagSq) || 1;
  const uVec = {};
  for (const a of attrs) {
    uVec[a] = (SOUL_ATTRS[a] || 0) / uMag;
  }

  // 2. Calcula a similaridade e distância euclidiana para cada Gem
  let rawResults = [];
  for (const gem of CONFIG.GEMS) {
    const aff = GEM_AFFINITY[gem.id] || {};
    let gMagSq = 0;
    for (const a of attrs) {
      gMagSq += (aff[a] || 0) ** 2;
    }
    const gMag = Math.sqrt(gMagSq) || 1;
    const gVec = {};
    for (const a of attrs) {
      gVec[a] = (aff[a] || 0) / gMag;
    }

    let dot = 0;
    let distSq = 0;
    for (const a of attrs) {
      const uVal = uVec[a] || 0;
      const gVal = gVec[a] || 0;
      dot += uVal * gVal;
      distSq += (uVal - gVal) ** 2;
    }
    const euclidianDist = Math.sqrt(distSq);
    
    // Combina alinhamento vetorial (dot) com penalidade por distância espacial
    const rawScore = dot - (euclidianDist * 0.45);
    rawResults.push({ gem, rawScore });
  }

  // 3. Ordena e distribui as porcentagens com perfeita separação e realismo psicométrico
  rawResults.sort((a, b) => b.rawScore - a.rawScore);

  const bestRaw = rawResults[0].rawScore;
  const worstRaw = rawResults[rawResults.length - 1].rawScore;
  const rawRange = (bestRaw - worstRaw) || 1;

  calculatedResults = [];
  rawResults.forEach((item, index) => {
    let percent;
    if (index === 0) {
      percent = Math.floor(94 + Math.random() * 5); // 94% a 98%
    } else {
      const dropFraction = (bestRaw - item.rawScore) / rawRange; 
      const rankPenalty = index * 4; // Garante queda de pelo menos 4% por posição
      const scoreDrop = (dropFraction * 35) + rankPenalty;
      percent = Math.round(calculatedResults[0].percent - scoreDrop);
    }
    
    percent = Math.min(98, Math.max(52, percent));
    
    // Evita empates nas porcentagens do top 6
    if (index > 0 && index < 7) {
      const prevPercent = calculatedResults[index - 1].percent;
      if (percent >= prevPercent) {
        percent = prevPercent - Math.floor(2 + Math.random() * 3);
      }
    }
    
    item.percent = percent;
    calculatedResults.push(item);
  });

  mainGemResult = calculatedResults[0];

  savedData.lastResult = {
    gemId: mainGemResult.gem.id,
    compat: mainGemResult.percent,
    attrs: SOUL_ATTRS
  };
  saveStorageData();

  if (mainGemResult.percent >= 90) unlockAchievement("true_gem");
}

async function runOutro() {
  await playConclusionAnimation();
  calculateGemCompatibility();
  
  const rec = GEM_DATABASE_RECORDS[mainGemResult.gem.id] || {
    title: "A Defensora Estelar", desc: "Uma guerreira corajosa de luz e energia.", type: "Gem", powers: "Poderes de luz", weapon: "Arma Gem", personality: "Corajosa e leal.", fusions: "Várias", emotional: "Brilhando no horizonte cósmico.", episodes: "Steven Universe"
  };

  $("#rpg-gem-img").src = mainGemResult.gem.img;
  $("#rpg-gem-name").textContent = mainGemResult.gem.name;
  $("#rpg-gem-percent").textContent = mainGemResult.percent + "%";
  $("#rpg-gem-title").textContent = `"${rec.title}"`;
  $("#rpg-gem-desc").textContent = `"${rec.desc}"`;

  // Normaliza as barras de atributos para evitar múltiplos 100% e refletir nuances reais
  let maxAttrVal = 1;
  for (const v of Object.values(SOUL_ATTRS)) {
    if (v > maxAttrVal) maxAttrVal = v;
  }

  const attrsList = $("#rpg-attrs-list");
  attrsList.innerHTML = "";
  for (const [attr, val] of Object.entries(SOUL_ATTRS)) {
    const row = document.createElement("div");
    row.className = "attr-row";
    let displayVal = Math.round((val / maxAttrVal) * 60 + 36);
    displayVal = Math.min(98, Math.max(25, displayVal));

    row.innerHTML = `
      <div class="attr-label">${attr.toUpperCase()}</div>
      <div class="attr-bar-wrapper">
        <div class="attr-bar-fill" style="width: 0%;"></div>
      </div>
      <div class="attr-val">${displayVal}</div>
    `;
    attrsList.appendChild(row);
  }

  const otherContainer = $("#rpg-other-gems");
  otherContainer.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    if (i >= calculatedResults.length) break;
    const res = calculatedResults[i];
    const card = document.createElement("div");
    card.className = "other-gem-card";
    card.innerHTML = `
      <img src="${res.gem.img}" alt="${res.gem.name}" />
      <div class="other-gem-name">${res.gem.name}</div>
      <div class="other-gem-percent">${res.percent}%</div>
    `;
    otherContainer.appendChild(card);
  }

  await transitionTo("outro");
  await new Promise((r) => setTimeout(r, 400));

  document.querySelectorAll(".attr-bar-fill").forEach((bar, index) => {
    const valEl = bar.parentElement.nextElementSibling;
    const targetWidth = valEl.textContent + "%";
    setTimeout(() => { bar.style.width = targetWidth; }, index * 150 + 100);
  });

  initDiaryModal(rec, mainGemResult.gem);
  initShareCard(rec, mainGemResult);

  await new Promise((r) => setTimeout(r, 1500));
  const creatorBox = $("#dialogue-creator");
  creatorBox.style.display = "block";
  const boxInner = $("#box-creator");
  const creatorText = $("#text-creator");
  
  boxInner.addEventListener("mouseenter", () => audio.playSFXByName("snd_movemenu.wav", 0.4));
  boxInner.addEventListener("click", async () => {
    audio.playSFXByName("snd_select.wav", 0.6);
    boxInner.style.cursor = "default";
    await dialogue.typeLines(creatorText, SCRIPT.creatorMessage, CONFIG.TYPE_SPEED_SLOW, "snd_txttor.wav");
  }, { once: true });
}

// ── Diário da Gem ──
function initDiaryModal(rec, gem) {
  const btnOpen = $("#btn-view-diary");
  const btnClose = $("#btn-close-diary");
  const modal = $("#gem-diary-overlay");
  const content = $("#diary-content");

  btnOpen.addEventListener("mouseenter", () => audio.playSFXByName("snd_movemenu.wav", 0.4));
  btnOpen.addEventListener("click", () => {
    audio.playSFXByName("snd_elecdoor_open.wav", 0.6);
    content.innerHTML = `
      <div class="diary-section"><div class="diary-label">DESIGNAÇÃO:</div><div class="diary-value">${gem.name}</div></div>
      <div class="diary-section"><div class="diary-label">TIPO:</div><div class="diary-value">${rec.type}</div></div>
      <div class="diary-section"><div class="diary-label">PODERES:</div><div class="diary-value">${rec.powers}</div></div>
      <div class="diary-section"><div class="diary-label">ARMA:</div><div class="diary-value">${rec.weapon}</div></div>
      <div class="diary-section"><div class="diary-label">PERSONALIDADE:</div><div class="diary-value">${rec.personality}</div></div>
      <div class="diary-section"><div class="diary-label">FUSÕES CONHECIDAS:</div><div class="diary-value">${rec.fusions}</div></div>
      <div class="diary-section"><div class="diary-label">ARQUIVO EMOCIONAL:</div><div class="diary-value">"${rec.emotional}"</div></div>
      <div class="diary-section"><div class="diary-label">PARTICIPAÇÕES NOTÁVEIS:</div><div class="diary-value">${rec.episodes}</div></div>
    `;
    modal.classList.remove("hidden");
    modal.classList.add("active");
    audio.startComputerMusic();
  });

  btnClose.addEventListener("mouseenter", () => audio.playSFXByName("snd_movemenu.wav", 0.4));
  btnClose.addEventListener("click", () => {
    audio.playSFXByName("snd_elecdoor_close.wav", 0.6);
    modal.classList.remove("active");
    setTimeout(() => modal.classList.add("hidden"), 300);
    audio.stopComputerMusic();
    unlockAchievement("all_compatible");
  });
}

// ── Cartão de Compartilhamento Canvas ──
function initShareCard(rec, gemResult) {
  const btnShare = $("#btn-share-result");
  btnShare.addEventListener("mouseenter", () => audio.playSFXByName("snd_movemenu.wav", 0.4));
  btnShare.addEventListener("click", async () => {
    audio.playSFXByName("mus_sfx_generate.wav", 0.7);

    const canvas = document.createElement("canvas");
    canvas.width = 480; canvas.height = 640;
    const ctx = canvas.getContext("2d");

    const grad = ctx.createLinearGradient(0, 0, 480, 640);
    grad.addColorStop(0, "#1a0b18");
    grad.addColorStop(0.5, "#3b152d");
    grad.addColorStop(1, "#0b0d1a");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 480, 640);

    ctx.strokeStyle = "#f4a6c4";
    ctx.lineWidth = 8;
    ctx.strokeRect(12, 12, 456, 616);

    ctx.fillStyle = "#fce588";
    ctx.font = "bold 24px 'Press Start 2P', monospace, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(gemResult.gem.name.toUpperCase(), 240, 360);

    ctx.fillStyle = "#fff";
    ctx.font = "bold 20px 'Quicksand', sans-serif";
    ctx.fillText(`COMPATIBILIDADE: ${gemResult.percent}%`, 240, 400);

    ctx.fillStyle = "#c8a8e9";
    ctx.font = "italic 18px 'Quicksand', sans-serif";
    ctx.fillText(`"${rec.title}"`, 240, 440);

    let startY = 490;
    let count = 0;
    for (const [attr, val] of Object.entries(SOUL_ATTRS)) {
      if (count >= 3) break; 
      ctx.fillStyle = "#fff";
      ctx.font = "12px 'Press Start 2P', monospace, sans-serif";
      ctx.textAlign = "left";
      ctx.fillText(attr.toUpperCase(), 60, startY + 14);

      ctx.fillStyle = "rgba(255,255,255,0.2)";
      ctx.fillRect(200, startY, 200, 18);

      const barVal = Math.min(200, Math.max(30, val * 6 + 100));
      ctx.fillStyle = "#f4a6c4";
      ctx.fillRect(200, startY, barVal, 18);

      startY += 32;
      count++;
    }

    ctx.fillStyle = "#fce588";
    ctx.font = "11px 'Press Start 2P', monospace, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Crystal Gem Ranking System", 240, 605);

    try {
      const imgEl = new Image();
      imgEl.crossOrigin = "anonymous";
      imgEl.src = gemResult.gem.img;
      await new Promise((resolve) => {
        imgEl.onload = () => {
          ctx.drawImage(imgEl, 160, 100, 160, 160);
          resolve();
        };
        imgEl.onerror = () => resolve();
      });
    } catch (_) {}

    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `minha-gem-${gemResult.gem.id}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, "image/png");
  });
}

// ─────────────────────────────────────────────
// 15. AUDIO UI & BOOT
// ─────────────────────────────────────────────

(function initAudioUI() {
  const btn = $("#btn-bgm");
  const slider = $("#volume-slider");

  btn.addEventListener("mouseenter", () => audio.playSFXByName("snd_movemenu.wav", 0.4));
  btn.addEventListener("click", () => {
    audio.playSFXByName("snd_lightswitch.wav", 0.6);
    if (!audio.started) audio.startBGM();
    const m = audio.toggleMute();
    btn.classList.toggle("muted", m);
    btn.textContent = m ? "🔇" : "🎵";
  });

  slider.addEventListener("change", () => audio.playSFXByName("snd_squeak.wav", 0.4));
  slider.addEventListener("input", (e) => audio.setVolume(parseFloat(e.target.value)));
})();

(async function boot() {
  loadStorageData();
  initStateRefs();
  initEasterEggs();
  initHoverSounds();

  await runLoading();  // State 1: Loading
  await runIntro();    // State 2: Greeting + Cookie Cat
  await runQuiz();     // State 3: Personality Quiz
  await runRanking();  // State 4: Selection + Fusion
  await runConfirm();  // State 5: The Joke + Secret Capture
  await runOutro();    // State 6: Star Animation + RPG Result + Diary
})();
