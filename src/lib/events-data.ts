
export interface Event {
  title: string;
  club: string;
  description: string;
  longDescription: string;
  registrationLink?: string;
  eventType?: string;
  targetAudience?: string;
  participants?: string;
  duration?: string;
  venue?: string;
  date?: string;
  timing?: string;
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
  category: 'technical' | 'non-technical' | 'special-events';
}

export const eventsData: Event[] = [
  // ================== Technical Events ==================
  {
    title: 'Level Up',
    club: 'GDG ON CAMPUS REC',
    description: 'A multi-round technical and fun-based competition blending technology, creativity, and teamwork through engaging challenges.',
    longDescription: 'LevelUp is an engaging and competitive tech event designed to test participants’ problem-solving, creativity, and teamwork skills through exciting rounds of challenges. From logic and coding to fun interactive tasks, the event encourages students to push their limits, learn collaboratively, and level up their knowledge in a dynamic environment.\n\nParticipants will face diverse rounds that may include coding challenges, logical reasoning, technical quizzes, creative activities, and team-based tasks. Each round is designed to evaluate different skill sets such as analytical thinking, innovation, communication, and adaptability under pressure.\n\nBeyond competition, LevelUp promotes learning, networking, and experiential growth. It provides a space where students can explore their potential, gain exposure to real-world problem solving, and enjoy a thrilling competitive atmosphere.',
    duration: '3 hours 30 minutes',
    venue: 'NanoLabs-1, 2',
    date: 'March 7th, 2026',
    timing: '9:00 AM - 12:30 PM',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScSzOYJU3KjhqM1vSy0NKS7nhZ7mlQ2u_eFKiq8EuEltDoi9w/formResponse?pli=1',
    category: 'technical',
    fees: '₹100 per person',
    prizes: 'Prize Pool: ₹15,000',
    contactName: 'Thanush',
    contactDetails: '7989710860',
    facultyCoordinator: 'P Narsimharaju',
    facultyContact: '6301923220',
  },
  {
    title: 'DATA PARADOX – The Prediction Auction',
    club: 'Data Science Dept',
    description: 'A strategic data analysis challenge where participants analyze real-world datasets and predict next values using virtual currency.',
    longDescription: 'In this event, participants are provided with real-world datasets and must analyze patterns, identify trends, and predict the next value. Teams are given virtual coins and must decide how much to invest based on their confidence in their prediction. Accurate predictions earn profits, while incorrect predictions result in losses, making the event a blend of data analytics, logical thinking, and risk management.',
    fees: 'Online: ₹99 | Spot: ₹79',
    prizes: '1st: ₹1000 | 2nd: ₹500',
    date: 'March 7th, 2026',
    timing: '10:00 AM - 01:00 PM',
    duration: '3 Hours',
    venue: 'Data Science Lab',
    contactName: 'Kolagani Abishek',
    contactDetails: '8309114596',
    facultyCoordinator: 'Pyla Adithya Siva Shankar',
    facultyContact: '9502616962',
    category: 'technical',
    registrationLink: '#',
  },
  {
    title: 'Component & Circuit Challenge',
    club: 'IEEE Society',
    description: 'A three-round challenge involving component identification, circuit recognition, and auction-based design.',
    longDescription: 'Round 1: Identification of components. Round 2: Identification of circuit. Round 3: Auction-based circuit design. Test your fundamental electronics knowledge in this fast-paced competition.',
    fees: '₹50 (Solo) | ₹90 (Duo) | ₹120 (Trio)',
    date: 'March 7th, 2026',
    venue: 'Main Seminar Hall',
    category: 'technical',
    registrationLink: '#',
  },
  {
    title: 'TECH IN BORDERLAND',
    club: 'CSC',
    description: 'Multi-round technical competition inspired by card-based challenges representing intelligence, teamwork, and speed.',
    longDescription: 'Rounds mapped to suits: Diamonds (Intelligence), Clubs (Teamwork), Spades (Speed & Coordination), Hearts (Psychology & Decision Making). Final round includes difficulty card selection and an offline quiz.',
    fees: '₹120 per team',
    contactName: 'B Sehwag Ganesh',
    contactDetails: '9346827882',
    category: 'technical',
    registrationLink: '#',
  },
  {
    title: 'GAMEVERSE',
    club: 'RAIC',
    description: 'A gamified technical event where participants rotate across 5 different game stations.',
    longDescription: 'GameVerse Tech Challenge is a unique blend of gaming and technology. Participants navigate through stations testing different skills, potentially including AI concepts applied to games.',
    fees: '₹30 (Solo) | ₹50 (Team of 2)',
    prizes: '₹3000 - ₹4000',
    contactName: 'G. Balakrishna',
    contactDetails: '9177426430',
    facultyCoordinator: 'Dr. S. Vidya Sagar',
    facultyContact: '7671921578',
    category: 'technical',
    registrationLink: '#',
  },
  {
    title: 'Circulink',
    club: 'IETE',
    description: 'A four-round event featuring a virtual treasure hunt, quiz, and circuit building challenges.',
    longDescription: 'Rounds include: 1. Virtual Treasure Hunt, 2. Quiz, 3. Guess the Output, 4. Build it if you can. A comprehensive test for electronics enthusiasts.',
    fees: '₹50 (Solo) | ₹80 (Duo) | ₹120 (Trio)',
    prizes: 'Based on registrations',
    contactName: 'P. Ganapathi',
    contactDetails: '6300856587',
    facultyCoordinator: 'Dr. M.S.S.S. Srinivas',
    facultyContact: '9849672252',
    category: 'technical',
    registrationLink: '#',
  },
  {
    title: 'Project Expo',
    club: 'Raghu Scope',
    description: 'An open-domain project showcase for innovations in IoT, AI, robotics, and more.',
    longDescription: 'The Project Expo is an open-domain platform for students to showcase their innovative projects. A great opportunity to get feedback and recognition for your hard work.',
    fees: '₹400 per team (4 members)',
    prizes: 'Prize Pool: ₹20,000',
    date: 'March 7th, 2026',
    venue: 'Seminar Hall 1',
    contactName: 'P. Akhil Charan Kumar',
    contactDetails: '7670850910',
    facultyCoordinator: 'Dr. P V S Anusha',
    facultyContact: '9502616962',
    category: 'technical',
    registrationLink: '#',
  },
  {
    title: 'Cloud Quest',
    club: 'AWS Cloud Clubs',
    description: 'A gamified cloud learning challenge designed to test your knowledge of AWS and cloud computing.',
    longDescription: 'Navigate through various cloud scenarios and solve problems using AWS services. A great way to learn and compete in the cloud space.',
    fees: '₹30',
    contactName: 'T.V. Sathwik Sai',
    contactDetails: '7989524511',
    facultyCoordinator: 'Shivkumar',
    category: 'technical',
    registrationLink: '#',
  },
  {
    title: 'MONOPOLY',
    club: 'E-CELL',
    description: 'A fast-paced startup simulation where you build and scale a business under time pressure.',
    longDescription: 'Experience the highs and lows of entrepreneurship. Pitch, trade, and strategize to build the most successful startup in the room.',
    fees: '₹180 (Team of 3)',
    prizes: '₹3000',
    contactName: 'E Sri Ram Vishal',
    contactDetails: '9490147819',
    category: 'technical',
    registrationLink: '#',
  },
  {
    title: 'IPL Auction',
    club: 'E-CELL',
    description: 'A simulated franchise bidding event where strategy meets cricket passion.',
    longDescription: 'Manage your budget and build the ultimate cricket team through strategic bidding and calculated risks.',
    fees: '₹180 (Team of 3)',
    prizes: '₹3500',
    category: 'technical',
    registrationLink: '#',
  },

  // ================== Special Events ==================
  {
    title: 'Moto Expo',
    club: 'Special Event',
    description: 'Where 900+ CC Beasts Assemble.',
    longDescription: 'Witness a lineup of superbikes that redefine speed, power, and engineering dominance. Feel the vibration of roaring engines and the raw adrenaline in the air. Get up close with machines built for 300+ km/h performance and fearless riders. This isn’t just an exhibition — it’s a celebration of pure horsepower and attitude. 🏍️🔥',
    date: 'March 7th, 2026',
    timing: '10:00 AM - 03:00 PM',
    duration: '5 Hours',
    venue: 'Central Quadrangle',
    category: 'special-events',
    registrationLink: '#',
  },
  {
    title: 'DJ Night',
    club: 'Special Event',
    description: 'Where the Campus Loses Control.',
    longDescription: 'When the lights drop and the bass hits, there’s no standing still. Feel the music take over as beats, lights, and energy collide in one explosive night. Dance like nobody’s watching, scream like you own the moment. This isn’t just a party — it’s the night Chakravyuh turns into pure madness',
    date: 'March 8th, 2026',
    timing: '06:00 PM onwards',
    duration: '4 Hours',
    venue: 'Open Grounds',
    category: 'special-events',
    registrationLink: '#',
  },
  {
    title: 'Live Band Night',
    club: 'Special Event',
    description: 'Where Music Takes Over the Stage.',
    longDescription: 'Feel the drums thunder, the guitars ignite, and the vocals send chills through the crowd. Every beat hits harder, every chorus louder, every moment unforgettable. Sing at the top of your lungs as the stage turns into pure electric energy. This isn’t just a performance — it’s a night where music owns the campus. 🎸🔥',
    date: 'March 7th, 2026',
    timing: '07:00 PM onwards',
    duration: '3 Hours',
    venue: 'Main Stage',
    category: 'special-events',
    registrationLink: '#',
  },
  {
    title: 'Fireworks',
    club: 'Special Event',
    description: 'The Sky Will Not Stay Silent.',
    longDescription: 'As the night falls, the darkness shatters into explosions of color and light. Every spark ignites the sky, every burst echoes celebration and chaos. Look up as the campus transforms into a canvas of fire and brilliance. This isn’t just a display — it’s the grand finale that leaves everyone breathless. 🎆🔥',
    date: 'March 8th, 2026',
    timing: '08:30 PM',
    duration: '15 Minutes',
    venue: 'Main Gate Sky',
    category: 'special-events',
    registrationLink: '#',
  },
  {
    title: 'Stand-Up Comedy',
    club: 'Special Event',
    description: 'Laughter You Can’t Escape.',
    longDescription: 'When the mic turns on, no one is safe — not departments, not professors, not even you. Every punchline hits harder than a surprise test, every joke sharper than reality. From awkward campus moments to brutal truths, everything becomes comedy gold. This isn’t just a show — it’s a time where stress disappears and laughter takes control. 🎤🔥',
    date: 'March 8th, 2026',
    timing: '04:00 PM - 06:00 PM',
    duration: '2 Hours',
    venue: 'Auditorium',
    category: 'special-events',
    registrationLink: '#',
  },
  {
    title: 'Miss & Mr. Raghu',
    club: 'Special Event',
    description: 'Where Legends Rise.',
    longDescription: 'Confidence meets charisma as the spotlight searches for the true faces of Raghu. It’s not just about style — it’s about attitude, intelligence, and undeniable presence. Every walk, every answer, every second on stage could change everything. This isn’t a title — it’s a crown earned under pressure.',
    date: 'March 8th, 2026',
    timing: '02:00 PM - 04:00 PM',
    duration: '2 Hours',
    venue: 'Main Stage',
    category: 'special-events',
    registrationLink: '#',
  },
];
