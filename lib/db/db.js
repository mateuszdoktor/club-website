let headlines = [
  {
    id: 1,
    img: "https://pictures.tribuna.com/image/1fe5aa1a-d63d-4023-b1f7-69e1e4a0ed60",
    title: "Vinicius Jr achieves 200th win with Real Madrid",
    description:
      "Vinicius Jr celebrates a milestone 200th victory in the white shirt of Real Madrid after a crucial La Liga win.",
    fullText:
      "In a career already filled with countless highlights, Vinicius Jr has reached a major milestone — his 200th win in a Real Madrid shirt. The Brazilian forward played a crucial role in securing a 2-1 victory against Valencia, showcasing his blistering pace, dazzling footwork, and relentless determination. Over the past seasons, Vinicius has evolved from a promising talent to a true leader on the field. After the match, he dedicated the victory to the fans and hinted at even bigger ambitions for the future. 'This is just the beginning,' Vinicius said. 'I want to win 200 more!'",
    author: "John Doe",
    commentsCount: 0,
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    img: "https://cdn.vox-cdn.com/thumbor/nJhlzcM2k6iVns1RO4P1o71QvWU=/0x0:4282x2855/1820x1213/filters:focal(1424x830:2108x1514):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/74034648/2210589683.0.jpg",
    title: "Real Madrid 1 - 0 Athletic Bilbao",
    description:
      "A tense match sees Real Madrid narrowly edge out Athletic Bilbao thanks to a late goal.",
    fullText:
      "Real Madrid managed a hard-fought 1-0 victory over Athletic Bilbao at Santiago Bernabéu. Despite dominating possession, Los Blancos found it difficult to break down Bilbao's resilient defense. The breakthrough finally came in the 85th minute when Jude Bellingham fired a stunning strike into the top corner. This win strengthens Madrid's position at the top of the La Liga table. Coach Carlo Ancelotti praised his team's patience and determination, stating that 'games like this are the true tests of champions.'",
    author: "Jane Smith",
    commentsCount: 0,
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    img: "https://www.sport-tv.org/wp-content/uploads/2023/06/image-2-1.png",
    title: "Player ratings Real Madrid vs Athletic Bilbao ",
    description:
      "Check out how Real Madrid's players were rated following the win against Athletic Bilbao.",
    fullText:
      "Following a gritty 1-0 win over Athletic Bilbao, the player ratings tell the story of a team that fought hard for three points. Thibaut Courtois was outstanding between the posts, earning a solid 9/10 for a series of critical saves. Jude Bellingham once again proved his worth with an 8/10 performance, capped off by his late match-winning goal. Meanwhile, some of the defenders struggled under Bilbao’s pressure, highlighting areas Carlo Ancelotti may want to tighten before the next fixture. Overall, it was a team effort that showed resilience and composure under pressure.",
    author: "Mike Johnson",
    commentsCount: 0,
    createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    img: "https://idsb.tmgrup.com.tr/ly/uploads/images/2024/08/23/thumbs/800x531/342722.jpg?v=1724401743",
    title: "Mbappe back in training with the team",
    description:
      "Kylian Mbappé, back to team training today as he'll be ready for the Copa del Rey final vs Barça!",
    fullText:
      "After weeks of speculation and recovery, Kylian Mbappé returned to full training with Real Madrid today. His presence ahead of the crucial Copa del Rey final against FC Barcelona is a major boost for Los Blancos. Mbappé was seen actively participating in drills, sprints, and tactical sessions, looking sharp and motivated. In a brief interview after training, he stated: 'I feel ready. I can't wait to help the team in one of the most important matches of the season.' Fans are eagerly anticipating his potential impact on the upcoming Clásico showdown.",
    author: "Samantha Lee",
    commentsCount: 0,
    createdAt: new Date().toISOString(),
  },
  {
    id: 5,
    img: "https://cdn.vox-cdn.com/thumbor/-UId1f2fk2mCfSB20NLZkpTCbGs=/0x0:5897x3931/1820x1213/filters:focal(2478x1495:3420x2437):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72943864/1814849277.0.jpg",
    title: "Carlo Ancelotti press conference ahead of Getafe clash in La Liga",
    description:
      "Carlo Ancelotti discusses the upcoming Getafe match and Real Madrid's form during a pre-match press conference.",
    fullText:
      "In his latest press conference, Carlo Ancelotti addressed the media ahead of Real Madrid’s La Liga clash against Getafe. Ancelotti stressed the importance of maintaining focus and not underestimating their opponents, despite Madrid’s superior league position. 'Every match is a battle,' he said. He also provided updates on injuries, confirming that key players like Modric and Tchouaméni are nearing full fitness. Ancelotti refused to be drawn into transfer speculation, instead emphasizing the unity and spirit within the current squad. 'We are ready for the challenges ahead,' he concluded confidently.",
    author: "David Brown",
    commentsCount: 0,
    createdAt: new Date().toISOString(),
  },
];

let comments = [
  {
    id: 1,
    headlineId: 1,
    userId: 1,
    author: "Alex",
    text: "Amazing win, Vini is incredible!",
    createdAt: new Date().toISOString(),
  },
];

let users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
    image:
      "https://fifpro.org/media/byuldvne/imago1036948333h.jpg?rxy=0.5031452428202344,0.4669260700389105&width=1600&height=1024&rnd=133462960298630000",
  },
];

export const db = {
  headlines,
  comments,
  users,
};
