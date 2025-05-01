const headlines = [
  {
    id: "1",
    img: "https://pictures.tribuna.com/image/1fe5aa1a-d63d-4023-b1f7-69e1e4a0ed60",
    title: "Vinicius Jr achieves 200th win with Real Madrid",
    description:
      "Vinicius Jr celebrates a milestone 200th victory in the white shirt of Real Madrid after a crucial La Liga win.",
    fullText:
      "In a career already packed with electrifying runs, vital goals, and countless moments of flair, Vinicius Jr has now hit a new milestone: 200 wins with Real Madrid. It’s a number that speaks not just to longevity, but to consistent excellence. From his early days as a raw teenager bursting with potential, to becoming one of the most feared wingers in European football, Vinicius has grown into a core figure at the Bernabéu. His pace and creativity have unlocked defenses game after game, and this latest win adds another chapter to his story of impact. Celebrating the landmark alongside teammates, fans, and coaching staff, he made it clear: he’s just getting started. With titles under his belt and more to chase, this 200th victory is both a personal triumph and a symbol of the winning mentality he embodies at Madrid.",
    author: "John Doe",
    commentsCount: 0,
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    img: "https://cdn.vox-cdn.com/thumbor/cpxEH9QZVJQBFAXnB2VFBE4egc4=/0x0:4000x2667/1200x800/filters:focal(1680x1014:2320x1654)/cdn.vox-cdn.com/uploads/chorus_image/image/74035431/2211170031.0.jpg",
    title: "Real Madrid 1 - 0 Athletic Bilbao",
    description:
      "A tense match sees Real Madrid narrowly edge out Athletic Bilbao thanks to a late goal.",
    fullText:
      "Real Madrid secured a gritty 1-0 win over Athletic Bilbao in a match that was more about nerves and control than flair. With the clock ticking down and chances few and far between, it was a moment of composure that sealed the result. Jude Bellingham, ever alert in the final third, found space and delivered a perfectly weighted pass that set up Joselu for a calm finish in the 82nd minute. Bilbao defended with resilience and posed threats on the counter, but Madrid’s midfield, led by Kroos and Valverde, kept the tempo and structure intact. The result keeps Madrid firmly in the title race and highlights their ability to grind out tough results when creativity alone isn’t enough.",
    author: "Jane Smith",
    commentsCount: 0,
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    img: "https://www.sport-tv.org/wp-content/uploads/2023/06/image-2-1.png",
    title: "Player ratings Real Madrid vs Athletic Bilbao ",
    description: "Check out how Real Madrid's players were rated",
    fullText:
      "Real Madrid’s narrow win over Athletic Bilbao brought out mixed performances across the pitch. Thibaut Courtois gets an 8 for his steady hands and a crucial late save. Dani Carvajal was solid on the right, earning a 7, while Antonio Rudiger led the backline with authority (7.5). In midfield, Toni Kroos continues to impress with his calm control and distribution (8), while Valverde added energy but lacked end product (6.5). Up front, Vinicius Jr was a constant threat though couldn’t find the final ball (7), and Joselu earns an 8 for his late winner. Bellingham’s link-up play and vision were sharp (7.5), proving once again he’s more than just a scorer. Overall, a disciplined team performance with standout moments where it mattered.",
    author: "Mike Johnson",
    commentsCount: 0,
    createdAt: new Date().toISOString(),
  },
  {
    id: "4",
    img: "https://idsb.tmgrup.com.tr/ly/uploads/images/2024/08/23/thumbs/800x531/342722.jpg",
    title: "Mbappe back in training with the team",
    description: "Kylian Mbappé, back to team training today",
    fullText:
      "Kylian Mbappé returned to full team training today, bringing a buzz of excitement to Valdebebas. After weeks of speculation and cautious rehab, the French star looked sharp and focused in drills, joining the squad for tactical work and full-contact play. His presence instantly raised the energy levels, and coach Carlo Ancelotti was visibly pleased. While the club hasn’t confirmed when he’ll return to the starting XI, signs are strong that Mbappé could feature in the upcoming fixture. With his speed and clinical finishing, his comeback couldn’t come at a better time as Madrid enters a critical stretch of the season. Fans will be watching closely to see if the superstar can return to form and reignite Madrid’s attacking options.",
    author: "Samantha Lee",
    commentsCount: 0,
    createdAt: new Date().toISOString(),
  },
  {
    id: "5",
    img: "https://img.allfootballapp.com/www/M00/24/64/CgAGVWGqGFeAPZMQAAKeToeOQ5k059.jpg",
    title: "Carlo Ancelotti press conference",
    description: "Carlo Ancelotti discusses the upcoming Getafe match",
    fullText:
      "In his pre-match press conference ahead of Real Madrid’s clash with Getafe, Carlo Ancelotti emphasized focus, rotation, and respect for the opposition. The veteran manager addressed questions about squad fitness, noting that several players are being closely monitored but should be available for selection. He praised Getafe’s organization and physicality, saying, 'They always make it difficult. We’ll need to be sharp in transition and decisive in front of goal.' When asked about Mbappé’s return, Ancelotti was measured: 'He’s training well. We’ll make a decision after the final session.' The coach also spoke about the importance of managing player minutes with a busy calendar ahead, hinting at possible changes to the starting lineup. Confident but cautious, Ancelotti clearly wants to keep the momentum going without underestimating anyone.",
    author: "David Brown",
    commentsCount: 0,
    createdAt: new Date().toISOString(),
  },
];

const comments = [
  {
    id: "1",
    headlineId: "1",
    userId: "2",
    author: "Emma Stone",
    text: "Amazing win, Vini is incredible!",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    headlineId: "1",
    userId: "3",
    author: "Carlos Rivera",
    text: "200 wins already? This guy is becoming a legend.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    headlineId: "1",
    userId: "4",
    author: "Leila Grant",
    text: "So happy for Vinicius. He’s matured so much since his debut.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "4",
    headlineId: "2",
    userId: "1",
    author: "John Doe",
    text: "That was a tense game! Glad we pulled it off late.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "5",
    headlineId: "2",
    userId: "5",
    author: "Tomas Eriksen",
    text: "Bilbao made it tough. Solid performance from the midfield though.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "6",
    headlineId: "2",
    userId: "2",
    author: "Emma Stone",
    text: "Not pretty but effective. That’s how you win titles.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "7",
    headlineId: "3",
    userId: "3",
    author: "Carlos Rivera",
    text: "Kroos was class as always. Glad Joselu got the winner.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "8",
    headlineId: "3",
    userId: "1",
    author: "John Doe",
    text: "Some low ratings felt harsh. Vini worked hard all game.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "9",
    headlineId: "3",
    userId: "4",
    author: "Leila Grant",
    text: "Courtois deserves more credit — that save late on was crucial.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "10",
    headlineId: "4",
    userId: "2",
    author: "Emma Stone",
    text: "So excited to see Mbappé back. Let’s go!",
    createdAt: new Date().toISOString(),
  },
  {
    id: "11",
    headlineId: "4",
    userId: "5",
    author: "Tomas Eriksen",
    text: "If he’s fit, defenses better watch out.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "12",
    headlineId: "4",
    userId: "3",
    author: "Carlos Rivera",
    text: "This could change everything in the title race.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "13",
    headlineId: "5",
    userId: "4",
    author: "Leila Grant",
    text: "Ancelotti always keeps it classy. Respect to the man.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "14",
    headlineId: "5",
    userId: "1",
    author: "John Doe",
    text: "He knows how to manage pressure. Let’s hope the rotation works.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "15",
    headlineId: "5",
    userId: "2",
    author: "Emma Stone",
    text: "Looking forward to the Getafe match. Hope we stay sharp.",
    createdAt: new Date().toISOString(),
  },
];


const users = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
    image: "https://fifpro.org/media/byuldvne/imago1036948333h.jpg",
  },
  {
    id: "2",
    name: "Emma Stone",
    email: "emma@example.com",
    password: "securepass456",
    image:
      "https://ichef.bbci.co.uk/ace/standard/932/cpsprodpb/cf1c/live/21640f30-0b20-11f0-88df-cbea984e02db.jpg",
  },
  {
    id: "3",
    name: "Carlos Rivera",
    email: "carlos@example.com",
    password: "carlospass789",
    image:
      "https://www.sportspro.com/wp-content/uploads/2024/05/News-story-template-8-1.jpg",
  },
  {
    id: "4",
    name: "Leila Grant",
    email: "leila@example.com",
    password: "leila2025",
    image:
      "https://lejournaldureal.fr/wp-content/uploads/2024/11/real-madrid-cf-v-deportivo-alaves-la-liga-ea-sports-_8_-_2_-_1_.webp",
  },
  {
    id: "5",
    name: "Tomas Eriksen",
    email: "tomas@example.com",
    password: "nordicpass",
    image:
      "https://cdn.vox-cdn.com/thumbor/WGFAh9oeIWA4834rFGYIkmkow2g=/0x0:1933x2441/1200x800/filters:focal(798x463:1106x771)/cdn.vox-cdn.com/uploads/chorus_image/image/74022182/2210081895.0.jpg",
  },
];


export const db = {
  headlines,
  comments,
  users,
};
