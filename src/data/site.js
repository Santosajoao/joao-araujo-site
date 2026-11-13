// Todo o conteúdo editável do site fica aqui.
export const contact = {
  name: 'João Araújo',
  instagram: 'joaoaraujo.cantor', // Sem @
  whatsapp: '5522998391768', // DDI + DDD + número
  whatsappLabel: '(22) 99839-1768',
  email: 'assessoriajoaoaraujo@gmail.com',
  baseCity: 'Cornélio Procópio',
  age: new Date().getFullYear() - 2003, // Ano de nascimento
}

export const about = [
  `Com ${contact.age} anos e energia contagiante, João traz o calor e a alegria do Rio de Janeiro para o universo sertanejo, numa fusão única de ritmos e emoções.`,
  'Inspirado pelos grandes nomes do gênero, mas com identidade própria e moderna, apresenta um repertório que vai dos clássicos românticos aos hits dançantes do sertanejo universitário.',
  'A presença de palco é dinâmica e interativa: o público canta e se emociona do início ao fim.',
]

export const plans = [
  { id: 'voz-violao', name: 'Voz e violão', lineup: 'João Araújo (voz e violão)', ideal: 'Apresentações reservadas, cerimônias e pocket shows.' },
  { id: 'voz-violao-sanfona', name: 'Voz, violão e sanfona', lineup: 'João Araújo (voz e violão) e sanfoneiro', ideal: 'Ambientes intimistas, luais, eventos acústicos e recepções.' },
  { id: 'banda-reduzida', name: 'Banda reduzida', lineup: 'João Araújo (voz e violão), bateria e baixo', ideal: 'Festas de menor porte e casas de show.' },
  { id: 'banda-completa', name: 'Banda completa', lineup: 'João Araújo, sanfoneiro, guitarrista/violonista base, baixista e baterista', ideal: 'Festas de grande porte, rodeios, casas de show e eventos corporativos.', featured: true },
]

export const services = [
  { title: 'Duração', text: 'Cerca de 2 horas, dividido em sets com pequenos intervalos. Pode ser ajustado e combinado previamente.' },
  { title: 'Repertório', text: 'Clássicos, modões, sertanejo universitário e os maiores sucessos do momento, com personalização parcial para o seu público.' },
  { title: 'Interação com o público', text: 'Show dinâmico, com clima alegre e participativo.' },
  { title: 'Equipamentos básicos', text: 'O artista e os músicos levam seus instrumentos (violões, sanfona, cajón etc.).' },
  { title: 'Profissionalismo e pontualidade', text: 'Compromisso com horários, montagem e passagem de som, quando necessária e acordada.' },
]

export const notes = [
  { title: 'Som e iluminação', text: 'PA, mesas, microfones, monitores e iluminação são responsabilidade do contratante. Podemos indicar parceiros ou incluir no orçamento mediante consulta prévia.' },
  { title: 'Transporte e hospedagem', text: 'Para eventos fora de Cornélio Procópio, deslocamento, hospedagem e alimentação da equipe são combinados e somados ao valor final, se aplicável.' },
  { title: 'Montagem e passagem de som', text: 'O tempo necessário deve entrar no cronograma do evento e ser combinado antes.' },
]

// type: 'file' (arquivo em /public/videos) ou 'youtube' (id do vídeo)
export const videos = [
  { id: 1, title: 'Casamento', type: 'file', src: '/videos/take-1.mp4', poster: '/images/take-1.jpg', vertical: true },
  { id: 2, title: 'Show ao vivo', type: 'file', src: '/videos/take-2.mp4', poster: '/images/take-2.jpg', vertical: true },
  // { id: 3, title: 'Show completo', type: 'youtube', src: 'COLOQUE_O_ID_DO_YOUTUBE' },
]

export const heroImage = '/images/hero.jpg'
export const aboutImage = '/images/palco.jpg'
