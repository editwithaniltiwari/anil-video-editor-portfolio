/**
 * ANIL TIWARI — PORTFOLIO DATA CONFIGURATION
 * 
 * REAL CONTACT DETAILS & APPROVED PROJECTS
 * 1. KLUSTEERR — Short Film / Creative Project
 * 2. ABHINAY MD — Client Work
 */

export const editorProfile = {
  name: "Anil Tiwari",
  role: "Video Editor & Visual Storyteller",
  tagline: "Transforming raw footage into engaging visual experiences through creative storytelling and cinematic editing.",
  status: "Available for Commissions",
  statusSubtext: "Taking selective projects for Q1/Q2",
  experienceYears: "5+",
  projectsCompleted: "120+",
  totalViewsGenerated: "50M+",
  averageTurnaround: "24-48 Hours",
  location: "Mumbai, India (Remote Worldwide)",
  email: "editwithaniltiwari@gmail.com",
  emailMailto: "mailto:editwithaniltiwari@gmail.com",
  phone: "+91 9014030326",
  whatsappUrl: "https://wa.me/919014030326",
  instagramHandle: "@editwithaniltiwari",
  instagramUrl: "https://www.instagram.com/editwithaniltiwari/",
  youtubeUrl: "", // Configurable: left empty as not provided yet, no broken link shown
  bio: "I'm Anil Tiwari, a video editor passionate about turning raw footage into engaging visual stories. I focus on cinematic edits, YouTube videos, and short-form content, combining creative storytelling with clean, professional editing.",
  philosophy: "Every cut is a psychological decision. If a frame doesn't serve the story, heighten tension, or reward the viewer's attention, it belongs on the cutting room floor.",
  aboutCoverImage: null // Configurable: User profile portrait or editing suite cover image
};

/**
 * 1. KLUSTEERR — SHORT FILM (Creative Project)
 * Showcased as a creative short film project with Google Drive preview embed & fallback link.
 */
export const featuredShortFilm = {
  id: "klusteerr-short-film",
  title: "Klusteerr — Short Film",
  genre: "Short Film / Creative Project",
  duration: "14:28",
  aspectRatio: "16:9",
  role: "Video Editor",
  driveOriginalUrl: "https://drive.google.com/file/d/1mOx35fzXwlKCDUNFUz5hct8LseKYgmel/view?usp=sharing",
  driveEmbedUrl: "https://drive.google.com/file/d/1mOx35fzXwlKCDUNFUz5hct8LseKYgmel/preview",
  videoUrl: "https://drive.google.com/file/d/1mOx35fzXwlKCDUNFUz5hct8LseKYgmel/preview",
  thumbnail: "/images/projects/klusteerr-thumbnail.jpg",
  description: "A creative narrative short film edited with deliberate dramatic pacing, atmospheric acoustic sound design, and cinematic DaVinci Resolve color grading.",
  specs: [
    { label: "Project Category", value: "Short Film / Creative Project" },
    { label: "My Role", value: "Video Editor" },
    { label: "Presentation", value: "Cinematic 16:9 Widescreen" },
    { label: "Master Resolution", value: "4K DCI Cinema Master" },
    { label: "Color Science", value: "DaVinci Wide Gamut / Rec.709" }
  ],
  editingHighlights: [
    "Dramatic pacing and frame-accurate narrative cuts",
    "Atmospheric sound design and dialogue clarity",
    "Cinematic color grading and filmic visual tone"
  ]
};

export const showreelData = {
  title: "Official Showreel 2025/2026",
  subtitle: "Commercials, Narrative Storytelling, Viral Reels & Cinematic Grading",
  duration: "02:18",
  aspectRatio: "16:9 4K",
  colorSpace: "DaVinci Wide Gamut / Rec.709",
  audioSpec: "5.1 Surround & Stereo Master (-14 LUFS)",
  videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  posterUrl: "/images/reels/color-grading-reel.jpg",
  chapters: [
    { time: "00:00", title: "Intro & Narrative Hook" },
    { time: "00:25", title: "High-Pacing Commercial Montage" },
    { time: "00:58", title: "DaVinci Color Emulation (Kodak 2383)" },
    { time: "01:32", title: "Multi-Track SFX & Foley Integration" },
    { time: "02:00", title: "Viral Short-Form Rhythms" }
  ]
};

/**
 * APPROVED PROJECT CATEGORIES:
 * 1. Short Film / Creative Project
 * 2. Client Work
 */
export const projectCategories = [
  { id: "all", label: "All Works" },
  { id: "short-film", label: "Short Film / Creative" },
  { id: "client-work", label: "Client Work" },
  { id: "gaming-content", label: "Gaming & Content Editing" }
];

/**
 * FEATURED PORTFOLIO PROJECTS
 */
export const projects = [
  // 1. KLUSTEERR — Short Film / Creative Project
  {
    id: "klusteerr-short-film",
    title: "Klusteerr — Short Film",
    category: "short-film",
    categoryLabel: "Short Film / Creative Project",
    aspectRatio: "16:9",
    duration: "14:28",
    clientType: "Creative Short Film",
    role: "Video Editor",
    metrics: "Creative Short Film Project",
    thumbnail: "/images/projects/klusteerr-thumbnail.jpg",
    driveOriginalUrl: "https://drive.google.com/file/d/1mOx35fzXwlKCDUNFUz5hct8LseKYgmel/view?usp=sharing",
    driveEmbedUrl: "https://drive.google.com/file/d/1mOx35fzXwlKCDUNFUz5hct8LseKYgmel/preview",
    videoUrl: "https://drive.google.com/file/d/1mOx35fzXwlKCDUNFUz5hct8LseKYgmel/preview",
    software: ["DaVinci Resolve Studio", "Adobe Premiere Pro"],
    overview: "A creative narrative short film edited with deliberate dramatic pacing, atmospheric acoustic sound design, and cinematic DaVinci Resolve color grading.",
    deliverables: ["Cinema 4K Master", "Multi-Track Audio Mix", "DaVinci Resolve Color Grade"],
    highlight: "Carefully timed dramatic cuts, emotional pacing, and filmic visual tone."
  },

  // 2. ABHINAY MD — Client Project
  {
    id: "abhinay-md-client-project",
    title: "Abhinay MD — Client Project",
    category: "client-work",
    categoryLabel: "Client Work",
    aspectRatio: "9:16",
    duration: "4 Reels",
    clientType: "Client Editing Project",
    role: "Video Editor",
    metrics: "4 Client Reels",
    thumbnail: "/images/reels/reel-1.jpg",
    videoUrl: "https://www.instagram.com/reel/DY-L5sTOCsF/",
    reels: [
      {
        id: "reel-1",
        label: "Reel 01",
        code: "DY-L5sTOCsF",
        url: "https://www.instagram.com/reel/DY-L5sTOCsF/",
        thumbnail: "/images/reels/reel-1.jpg",
        likes: "15K",
        views: null
      },
      {
        id: "reel-2",
        label: "Reel 02",
        code: "DX4PTXKuYSQ",
        url: "https://www.instagram.com/reel/DX4PTXKuYSQ/",
        thumbnail: "/images/reels/reel-2.jpg",
        likes: "550",
        views: null
      },
      {
        id: "reel-3",
        label: "Reel 03",
        code: "DWZJi6djt6i",
        url: "https://www.instagram.com/reel/DWZJi6djt6i/",
        thumbnail: "/images/reels/reel-3.jpg",
        likes: null,
        views: null
      },
      {
        id: "reel-4",
        label: "Reel 04",
        code: "DadMr2XuJ-Q",
        url: "https://www.instagram.com/reel/DadMr2XuJ-Q/",
        thumbnail: "/images/reels/reel-4.jpg",
        likes: "1,211",
        views: null
      }
    ],
    software: ["Adobe Premiere Pro", "DaVinci Resolve Studio"],
    overview: "Professional client editing project for Abhinay MD. Story pacing, multi-source footage synchronization, audio balancing, and post-production delivery across vertical short-form reels.",
    deliverables: ["High-Bitrate Vertical Masters", "Dynamic Retention Pacing", "Color & Audio Mix"],
    highlight: "Dynamic pacing, clean audio sweetening, and polished visual delivery."
  },

  // 3. INFIX PLAYS — Palworld Episode 1 (Gaming & Content Editing)
  {
    id: "infix-plays-palworld-ep1",
    title: "Our Palworld Journey Begins! with 🐑🔥@Pixelpulse990  | #Episode 1",
    category: "gaming-content",
    categoryLabel: "Gaming & Content Editing",
    aspectRatio: "16:9",
    duration: "Episode #1",
    clientType: "Personal Projects — Infix Plays",
    role: "Video Editor",
    metrics: "Personal Projects — Infix Plays",
    thumbnail: "https://img.youtube.com/vi/odbj2DyXlCw/maxresdefault.jpg",
    youtubeId: "odbj2DyXlCw",
    videoUrl: "https://youtu.be/odbj2DyXlCw",
    youtubeEmbedUrl: "https://www.youtube-nocookie.com/embed/odbj2DyXlCw",
    software: ["Adobe Premiere Pro"],
    overview: "Gameplay and content editing for Infix Plays Palworld series. Episode pacing, dynamic camera zoom punch-ins, comedic sound effects, and clean audio balancing.",
    deliverables: ["16:9 Full HD Master", "Sound Effects & Audio Leveling", "Pacing & Narrative Cuts"],
    highlight: "Engaging retention cuts, humorous sound cues, and multi-player gaming pacing."
  },

  // 4. INFIX PLAYS — Palworld Episode 2 (Gaming & Content Editing)
  {
    id: "infix-plays-palworld-ep2",
    title: "WE DEFEATED OUR FIRST BOSS! with @Pixelpulse990  🔥😂 | Palworld Episode #2",
    category: "gaming-content",
    categoryLabel: "Gaming & Content Editing",
    aspectRatio: "16:9",
    duration: "Episode #2",
    clientType: "Personal Projects — Infix Plays",
    role: "Video Editor",
    metrics: "Personal Projects — Infix Plays",
    thumbnail: "https://img.youtube.com/vi/eNGEx3NFA7s/maxresdefault.jpg",
    youtubeId: "eNGEx3NFA7s",
    videoUrl: "https://youtu.be/eNGEx3NFA7s",
    youtubeEmbedUrl: "https://www.youtube-nocookie.com/embed/eNGEx3NFA7s",
    software: ["Adobe Premiere Pro"],
    overview: "Episode 2 boss battle edition for Infix Plays. High-tension combat rhythm, comedic subtitles, clutch sound design, and narrative milestone pacing.",
    deliverables: ["16:9 Full HD Master", "Boss Fight Pacing & FX", "Multi-Track Audio Sweetening"],
    highlight: "Clutch boss battle pacing, animated text callouts, and dynamic situational comedy."
  }
];

export const services = [
  {
    id: "short-form",
    title: "Instagram Reels & Short-Form",
    subtitle: "Instagram Reels, TikTok & Vertical Cuts",
    badge: "High Growth",
    description: "Engineered specifically for algorithmic retention. Fast hooks, dynamic kinetic captions, bespoke sound effects, punch-ins, and seamless loop engineering that keeps viewers watching until the last second.",
    deliverables: [
      "9:16 vertical 1080x1920 masters",
      "Dynamic styled subtitles with color pop",
      "Hook retention pacing (cut every 1-2 sec)",
      "Layered SFX: whooshes, risers, pops, foley",
      "High-converting cover image thumbnails"
    ],
    software: ["Premiere Pro"],
    typicalTurnaround: "24-48 Hours",
    idealFor: "Creators, founders, coaches & e-commerce brands looking to scale reach"
  },
  {
    id: "youtube-longform",
    title: "Narrative Long-Form Editing",
    subtitle: "Video Essays, Talking Heads & Documentaries",
    badge: "Core Expertise",
    description: "Story-first editing that keeps your 30-second retention above 75%. Comprehensive B-roll sourcing, pacing curves, chapter structuring, motion graphics, and audio mixing that transforms casual browsers into loyal audiences.",
    deliverables: [
      "4K UHD 16:9 Master exports",
      "Chapter card & timeline marker structuring",
      "Custom motion graphics & lower-thirds",
      "Comprehensive multi-track audio leveling",
      "Short-form highlight cutdowns included"
    ],
    software: ["Premiere Pro", "iZotope RX"],
    typicalTurnaround: "3-5 Business Days",
    idealFor: "Established creators, podcast channels & media companies"
  },
  {
    id: "cinematic-commercial",
    title: "Cinematic Edits & Brand Films",
    subtitle: "Commercials, Short Films & Brand Anthems",
    badge: "Premium Aesthetic",
    description: "Film-grade post-production for brands and directors. Anamorphic aspect framing, rhythmic musical cutdowns, speed ramps, and Hollywood-standard color grading that elevates production value.",
    deliverables: [
      "ProRes 422HQ & DCI 4K masters",
      "Multi-ratio exports (16:9, 9:16, 1:1, 4:5)",
      "Dedicated DaVinci color grading pass",
      "Full audio stem deliveries (Dialogue/Music/SFX)",
      "TV broadcast & web delivery compliance"
    ],
    software: ["DaVinci Resolve Studio", "Premiere Pro", "Dehancer Pro"],
    typicalTurnaround: "4-7 Business Days",
    idealFor: "Commercial brands, creative agencies, filmmakers & musicians"
  },
  {
    id: "thumbnails-packaging",
    title: "Thumbnails & Visual Packaging",
    subtitle: "High-CTR Concepts & Channel Branding",
    badge: "High Conversion",
    description: "Editing without strong packaging leaves half your views on the table. Complete visual packaging including high-CTR YouTube thumbnails, title-thumbnail synergy testing, end-screens, and brand identity toolkits.",
    deliverables: [
      "3 Unique High-CTR Thumbnail variations",
      "A/B testing optimization guidance",
      "Custom channel banner & end-screen templates",
      "Reusable lower-thirds & motion asset kit",
      "High-resolution PNG/PSD source files"
    ],
    software: ["Illustrator"],
    typicalTurnaround: "24 Hours",
    idealFor: "Creators and marketers targeting double-digit click-through rates"
  }
];

export const clientProjectsData = {
  headline: "Proven Production Standards for Serious Creators & Brands",
  subheadline: "Every cut is backed by meticulous technical specifications and tested storytelling workflows.",
  stats: [
    { label: "Average Retention Boost", value: "+38%" },
    { label: "Total Views Powered", value: "50M+" },
    { label: "Turnaround Reliability", value: "99.2%" },
    { label: "Master Delivery Format", value: "4K ProRes" }
  ],
  collaborationTypes: [
    {
      title: "Solo Creators & Digital Leaders",
      scope: "Weekly or bi-weekly episode pipeline. Raw footage in on Monday, polished 4K cut ready for upload on Thursday with 3 Shorts included.",
      specs: "1080p / 4K • 16:9 • Custom Chapter Marks • B-Roll Curation"
    },
    {
      title: "Commercial & DTC Brands",
      scope: "Product launch teasers, performance ads for Meta/TikTok, and brand anthems built for immediate hook and high ROAS.",
      specs: "9:16 & 4:5 & 16:9 • Color Match • Licensed Sound FX • Safe Zone Text"
    },
    {
      title: "Podcasts & Media Houses",
      scope: "Multi-camera audio/video synchronization, automated audio leveling, video chaptering, and high-volume short-form extraction.",
      specs: "Multi-Cam Sync • -14 LUFS Broadcast Audio • Captioned Reels"
    }
  ]
};

export const colorGradeComparison = {
  title: "DaVinci Resolve Color Science",
  subtitle: "Drag the slider to compare raw Log capture against our final filmic grade",
  beforeLabel: "RAW S-Log3 (Uncorrected)",
  afterLabel: "DaVinci Resolve Rec.709 (Film Emulation)",
  beforeImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=70&sat=-80&con=-20",
  afterImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=85",
  technicalSpecs: [
    "DaVinci Wide Gamut Intermediate color pipeline",
    "Kodak Vision3 5207 / 2383 35mm print film emulation",
    "Preserved skin tone luminance vectorscope accuracy",
    "Subtle highlight halation & organic 35mm grain structure"
  ]
};

export const editingWorkflow = [
  {
    step: "01",
    phase: "Ingest & Story Assembly",
    description: "Organizing raw media, building proxy files, syncing multi-track audio, and carving out the core story spine without fluff."
  },
  {
    step: "02",
    phase: "Pacing & Retention Cut",
    description: "Trimming dead air, optimizing hook cadence, timing cuts to natural speech rhythms, and creating compelling visual momentum."
  },
  {
    step: "03",
    phase: "Sound Design & Foley",
    description: "Multi-layer sound engineering: risers, hits, whooshes, background ambiance, dialogue cleanup, and broadcast leveling to -14 LUFS."
  },
  {
    step: "04",
    phase: "Motion VFX & Packaging",
    description: "Kinetic titles, animated infographics, 3D tracking markers, B-roll overlays, and custom transitions that reinforce points."
  },
  {
    step: "05",
    phase: "DaVinci Color & Delivery",
    description: "Color balance, skin tone correction, custom film look grade, and multi-format renders (4K ProRes, H.264, 9:16, 16:9)."
  }
];

export const softwareStack = [
  { name: "Adobe Premiere Pro", role: "Primary NLE & Assembly", proficiency: "Expert (5+ Years)" },
  { name: "DaVinci Resolve Studio", role: "Color Grading & Fairlight", proficiency: "Advanced Colorist" }
];

export const instagramReels = [
  {
    id: "ig-1",
    title: "Editorial Pacing & Hook Retention Breakdown",
    type: "Timeline Breakdown",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80",
    likes: "14.2K",
    views: "180K",
    url: "https://www.instagram.com/editwithaniltiwari/"
  },
  {
    id: "ig-2",
    title: "Before vs After DaVinci Resolve Rec.709 Color Science",
    type: "Color Grading Reel",
    thumbnail: "/images/reels/color-grading-reel.jpg",
    likes: "28.6K",
    views: "340K",
    url: "https://www.instagram.com/editwithaniltiwari/"
  },
  {
    id: "ig-3",
    title: "Layered Acoustic Sound Design for Narrative Film",
    type: "Audio Tutorial",
    thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80",
    likes: "9.8K",
    views: "95K",
    url: "https://www.instagram.com/editwithaniltiwari/"
  },
  {
    id: "ig-4",
    title: "Dynamic Cut Cadence & Rhythmic Frame Timing",
    type: "Pacing Breakdown",
    thumbnail: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80",
    likes: "19.4K",
    views: "220K",
    url: "https://www.instagram.com/editwithaniltiwari/"
  }
];

export const faqs = [
  {
    question: "What is your typical turnaround time for a project?",
    answer: "For Short-Form Reels, standard turnaround is 24 to 48 hours. For long-form videos (10-20 minutes), turnaround is typically 3 to 5 business days depending on motion graphics density and complexity."
  },
  {
    question: "How do we transfer large camera files and footage?",
    answer: "We use high-speed cloud transfer via Google Drive, Dropbox, MASV, or Frame.io. For long-term clients with heavy 4K/6K RAW workflows, I also accept proxy media workflows or hard drive couriers."
  },
  {
    question: "What is included in your revisions policy?",
    answer: "Every project comes standard with 2 rounds of structured revisions via Frame.io or timestamped review notes to ensure the final cut matches your creative vision and brand guidelines perfectly."
  },
  {
    question: "Can you handle both editing and thumbnail packaging?",
    answer: "Yes! Many clients choose our full-package delivery which includes the long-form master, vertical short-form reels, and custom high-CTR thumbnail options."
  }
];

export const spokenLanguages = [
  { id: "hindi", name: "Hindi" },
  { id: "english", name: "English" },
  { id: "telugu", name: "Telugu" }
];
