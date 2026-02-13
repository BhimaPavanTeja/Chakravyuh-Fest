
export interface Event {
  title: string;
  club: string;
  description: string;
  longDescription: string;
  eventType?: string;
  targetAudience?: string;
  participants?: string;
  duration?: string;
  venue?: string;
  fees?: string;
  prizes?: string;
  requirements?: {
    technical?: string[];
    resources?: string[];
    special?: string;
  };
  volunteers?: string;
  contactName?: string;
  contactDetails?: string;
  facultyCoordinator?: string;
  facultyContact?: string;
  category: 'technical' | 'non-technical' | 'sports';
}

export const eventsData: Event[] = [
  // DATA SCIENCE DEPARTMENT
  {
    title: 'DATA PARADOX - THE PREDICTION AUCTION',
    club: 'Data Science Department',
    description: 'A strategic data analysis challenge where you predict trends and auction on your confidence.',
    longDescription: 'Data Paradox — The Prediction Auction is a strategic data analysis challenge conducted as part of Chakravyuh 2K26 by the Data Science Department, Raghu Engineering College. In this event, participants are provided with real-world datasets and must analyze patterns, identify trends, and predict the next value. Teams are given virtual coins and must decide how much to invest based on their confidence in their prediction. Accurate predictions earn profits, while incorrect predictions result in losses, making the event a blend of data analytics, logical thinking, and risk management. The team with the highest number of virtual coins at the end of all rounds will be declared the winner.',
    fees: 'Online: ₹99 | Spot Registration: ₹79',
    prizes: 'Top 1: ₹1000 | Top 2: ₹500',
    category: 'technical',
    eventType: 'Competition',
    targetAudience: 'Open to all',
  },
  // E-CELL REC CLUB
  {
    title: 'MONOPOLY X – Build. Trade. Dominate.',
    club: 'E-Cell REC',
    description: 'A high-intensity, real-world startup and market simulation.',
    longDescription: 'MONOPOLY X is a high-intensity, real-world startup and market simulation designed as a flagship anchor event for the Techfest. Participants act as startup founders competing in a live, multiplayer economy where they bid for assets, negotiate deals, form alliances, manage risks, and respond to sudden market events. This is not a board game but a dynamic economic battlefield where decisions are public, time-bound, and consequential.',
    eventType: 'Flagship Competition / Live Economic Simulation',
    targetAudience: 'Open to all (Engineering, Management, Startup & Finance enthusiasts)',
    participants: '120–150 participants (Teams of 3)',
    duration: '2.5 – 3 hours',
    venue: 'Large Hall / Indoor Stadium / Open Area',
    requirements: {
      technical: ['Projector / LED Screen', 'Sound System & Wireless Mic', 'Stable Internet / Wi-Fi', 'Power Supply & Extension Cables'],
      resources: ['Tables & chairs for teams', 'Printed asset cards, power cards, and currency tokens', 'Whiteboards / Standee boards for zones', 'Central banking desk setup'],
    },
    volunteers: '15–20',
    contactName: 'E Sri Ram Vishal',
    contactDetails: '9490147819',
    facultyCoordinator: 'Dr G. Kiran Kumar (IIC Convenor, Physics HOD)',
    facultyContact: '+91 99496 51218',
    category: 'non-technical',
  },
  {
    title: 'Startup Expo – Techfest Vizag',
    club: 'E-Cell REC',
    description: 'An exhibition and networking event for regional startups.',
    longDescription: 'The Startup Expo is designed to bring together real, early-stage and growth-stage startups from the Vizag startup ecosystem under one roof. It serves as a convergence point for innovation, entrepreneurship, students, mentors, and industry professionals. Startups will showcase their products, technologies, and business models through dedicated stalls.',
    eventType: 'Exhibition / Networking Event',
    targetAudience: 'Open to all (Students, Founders, Industry Professionals)',
    participants: '1,000+ visitors; 15–20 startups',
    duration: 'Full Day / Multi-hour Expo Window',
    venue: 'Open Hall / Exhibition Area',
    requirements: {
      technical: ['Power supply for stalls', 'Internet / Wi-Fi', 'Optional screens for demos', 'Canopy Setups'],
      resources: ['Exhibition stalls/ Canopy (15–20)', 'Tables, chairs', 'Category signage and navigation layout'],
    },
    volunteers: '8–12',
    contactName: 'E Sri Ram Vishal',
    contactDetails: '9490147819',
    facultyCoordinator: 'Dr G. Kiran Kumar (IIC Convenor, Physics HOD)',
    facultyContact: '+91 99496 51218',
    category: 'non-technical',
  },
  // CHITRALAYA ClUB
  {
    title: 'Movie Quiz',
    club: 'Chitraalaya Club',
    description: 'A multi-round, competitive trivia about movies.',
    longDescription: 'Movie quiz is a multi-round, competitive trivia. Moving beyond simple Q&A, this event features diverse rounds such as Identify the Soundtrack (audio cues), The Pixelated Poster (visual puzzles), and Dialogue Mashups.',
    eventType: 'Competition',
    targetAudience: 'Open to all',
    participants: '100+',
    duration: '2-3 hrs',
    venue: 'lab/ seminar hall',
    requirements: {
      technical: ['Projector / Screen', 'Sound System / Mic', 'Internet / Wi-Fi', 'Power Supply'],
      resources: ['supplies for decorations'],
    },
    volunteers: '30 (for decorations)',
    contactName: 'SHAIK AZIM REHAN',
    contactDetails: '7095235557',
    category: 'non-technical',
  },
  {
    title: 'Cine Quest',
    club: 'Chitraalaya Club',
    description: 'An immersive, campus-wide scavenger hunt with a film crew theme.',
    longDescription: 'Cine-Quest is an immersive, campus-wide scavenger hunt that puts participants in the shoes of a film crew racing against a "production deadline." Teams are given "Call Sheets" containing movie-themed riddles, iconic dialogue ciphers, and plot-based puzzles.',
    eventType: 'Competition',
    targetAudience: 'Open to all',
    participants: '30+',
    duration: '2 hrs',
    venue: '4-5 open locations',
    requirements: {
      technical: ['Projector / Screen', 'Sound System / Mic', 'Internet / Wi-Fi', 'Power Supply'],
      resources: ['supplies for decorations'],
    },
    volunteers: '30 (for decorations)',
    contactName: 'SHAIK AZIM REHAN',
    contactDetails: '7095235557',
    category: 'non-technical',
  },
  // AKRUTHI ARTS CLUB
  {
    title: 'Caricature Stall',
    club: 'Akruthi Fine Arts Club',
    description: 'Live caricature sketches of students, faculty, and visitors.',
    longDescription: 'A Live Caricature Stall will be set up where skilled artists from the club will create quick caricature sketches of students, faculty, and visitors. This interactive stall will be a major attraction, encouraging engagement, fun, and memorable takeaways for the attendees.',
    eventType: 'Live Art Stall',
    targetAudience: 'Open to all',
    participants: '150–250 visitors',
    duration: '9:00 am to 4:00 pm',
    venue: 'Dedicated stall space',
    requirements: {
      technical: ['Sound System / Mic', 'Power Supply / Extension Cables'],
      resources: ['Art supplies (sketch papers, markers, pencils, frames)', 'Tables, chairs, easels, and display stands'],
    },
    volunteers: '20-30',
    contactName: 'A.V.S.Nrupesh',
    contactDetails: '9989542961',
    category: 'non-technical',
  },
  {
    title: 'Art Expo',
    club: 'Akruthi Fine Arts Club',
    description: 'An exhibition of student artworks.',
    longDescription: 'An art expo where our student artists will showcase their artworks, including paintings, sketches, illustrations, crafts, miniatures, and mixed-media works. This expo will serve as a platform for students to display their creativity, gain exposure, and interact with visitors.',
    eventType: 'Art Exhibition',
    targetAudience: 'Open to all',
    duration: '9:00 am to 4:00 pm',
    venue: 'Exhibition Area',
    requirements: {
      resources: ['Display stands, tables, chairs'],
    },
    volunteers: '20-30',
    contactName: 'A.V.S.Nrupesh',
    contactDetails: '9989542961',
    category: 'non-technical',
  },
  // FEMSPIRE CLUB
  {
    title: 'Queen’s Arena',
    club: 'FemSpire Club',
    description: 'A strength, stamina, and teamwork-based event for girls.',
    longDescription: 'Queen’s Arena is a strength, stamina, and teamwork-based event that combines physical and mental challenges, conducted in a station-based format. This event aims to prove that girls are physically strong, mentally sharp, and excellent team players.',
    eventType: 'Competition',
    targetAudience: 'All branches (Girls only)',
    participants: '150–200 (combined)',
    duration: '3 to 4 hours',
    venue: 'One open area / hall',
    requirements: {
      resources: ['Cups, ropes, bottles, basic props'],
    },
    volunteers: '10-15',
    contactName: 'Miriyala Harshini',
    contactDetails: '8074040041',
    category: 'sports',
  },
  {
    title: 'Mind Maze',
    club: 'FemSpire Club',
    description: 'A mental ability and presence-of-mind competition for girls.',
    longDescription: 'Mind Maze is a mental ability and presence-of-mind competition designed to test participants’ logical thinking, memory power, observation skills, and decision-making ability under pressure. It consists of multiple rounds including logic, memory, and situational decision-making.',
    eventType: 'Competition',
    targetAudience: 'All branches (Girls only)',
    duration: '3 to 4 hours',
    venue: 'Classrooms',
    requirements: {
      technical: ['Projector and screen', 'Sound system and microphone'],
      resources: ['Question papers (MCQs, puzzles)', 'Pens, papers, charts'],
    },
    volunteers: '10-15',
    contactName: 'Miriyala Harshini',
    contactDetails: '8074040041',
    category: 'non-technical',
  },
  // SAPTASWARA MUSIC CLUB
  {
    title: 'Band Performance',
    club: 'Saptaswara Music Club',
    description: 'A live band performance by the student music club.',
    longDescription: 'Saptaswara Music Club proposes to present a live band performance. The band will perform a curated set of songs across genres such as classical fusion, semi-classical, and contemporary music, ensuring the content is appropriate, meaningful, and engaging for a diverse audience.',
    eventType: 'Performance',
    targetAudience: 'Open to all',
    participants: 'Club members only (around 10)',
    duration: '2 hr',
    venue: 'Open Area',
    requirements: {
      technical: ['Screen', 'Sound Systems, Mic, Instruments', 'Power Supply', 'Lighting'],
    },
    contactName: 'Khyathi',
    contactDetails: '7013727543',
    category: 'non-technical',
  },
  // SPORTS SECTION
  {
    title: 'Cricket',
    club: 'Sports Committee',
    description: 'Inter-branch cricket tournament.',
    longDescription: 'A classic knockout cricket tournament to find the champion team of the campus. Bring your team and compete for glory.',
    eventType: 'Sports Competition',
    targetAudience: 'Open to all',
    category: 'sports',
  },
  {
    title: 'Basketball',
    club: 'Sports Committee',
    description: '3-on-3 basketball challenge.',
    longDescription: 'Fast-paced 3-on-3 basketball tournament. Form your trio and showcase your skills on the court.',
    eventType: 'Sports Competition',
    targetAudience: 'Open to all',
    category: 'sports',
  },
  {
    title: 'Volleyball',
    club: 'Sports Committee',
    description: 'Classic volleyball tournament.',
    longDescription: 'Feel the heat with our volleyball tournament. Teams will compete in a league followed by knockouts.',
    eventType: 'Sports Competition',
    targetAudience: 'Open to all',
    category: 'sports',
  },
  {
    title: 'Tennis',
    club: 'Sports Committee',
    description: 'Singles and doubles tennis tournament.',
    longDescription: 'Aces, volleys, and smashes. Compete in our singles and doubles tennis tournament to be crowned the champion.',
    eventType: 'Sports Competition',
    targetAudience: 'Open to all',
    category: 'sports',
  },
];
