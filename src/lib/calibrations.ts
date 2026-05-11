export interface CalibratedTeacher {
  name: string;
  level: number;
  tradition?: string;
  note?: string;
}

export interface CalibratedWriting {
  title: string;
  level: number;
  tradition?: string;
  note?: string;
}

export const teachers: CalibratedTeacher[] = [
  // Level 1000
  { name: "Jesus Christ", level: 1000, tradition: "Christian" },
  { name: "The Buddha (Siddhartha Gautama)", level: 1000, tradition: "Buddhist" },
  { name: "Lord Krishna", level: 1000, tradition: "Hindu" },
  { name: "Zoroaster", level: 1000, tradition: "Zoroastrian" },

  // Level 800–999
  { name: "Twelve Christian Apostles", level: 980, tradition: "Christian" },
  { name: "Huang Po", level: 960, tradition: "Buddhist", note: "Tang Dynasty Ch'an master" },
  { name: "John the Baptist", level: 930, tradition: "Christian" },
  { name: "Moses", level: 910, tradition: "Jewish" },
  { name: "Abraham", level: 850, tradition: "Jewish" },

  // Level 700–799
  { name: "Bodhidharma", level: 795, tradition: "Buddhist", note: "Founder of Ch'an/Zen" },
  { name: "Mahatma Gandhi", level: 760, tradition: "Hindu" },
  { name: "St. Paul (Saul of Tarsus)", level: 745, tradition: "Christian" },
  { name: "Dogen", level: 740, tradition: "Buddhist", note: "Founder of Sōtō Zen" },
  { name: "Adi Sankara Charya", level: 740, tradition: "Hindu", note: "Advaita Vedanta" },
  { name: "Plotinus", level: 730, tradition: "Neoplatonist" },
  { name: "Ramana Maharshi", level: 720, tradition: "Hindu" },
  { name: "Nisargadatta Maharaj", level: 720, tradition: "Hindu" },
  { name: "Rabbi Moses de Leon of Granada", level: 720, tradition: "Jewish", note: "Author of the Zohar" },
  { name: "St. Teresa of Avila", level: 715, tradition: "Christian" },
  { name: "Patanjali", level: 715, tradition: "Hindu", note: "Author of the Yoga Sutras" },
  { name: "Mother Teresa", level: 710, tradition: "Christian" },
  { name: "Meister Eckhart", level: 705, tradition: "Christian" },
  { name: "Muhammad", level: 700, tradition: "Islamic" },

  // Level 600–699
  { name: "Abhinavagupta", level: 655, tradition: "Hindu", note: "Kashmir Shaivism" },
  { name: "Muktananda", level: 655, tradition: "Hindu" },
  { name: "Johann Tauler", level: 640, tradition: "Christian" },
  { name: "Mechthild von Magdeburg", level: 640, tradition: "Christian" },
  { name: "Karmapa", level: 630, tradition: "Buddhist" },
  { name: "Ramakrishna", level: 620, tradition: "Hindu" },
  { name: "Vivekananda", level: 610, tradition: "Hindu" },
  { name: "Lao Tzu", level: 610, tradition: "Taoist" },

  // Level 500–599
  { name: "Swami Satchidananda", level: 605, tradition: "Hindu" },
  { name: "Sri Aurobindo", level: 605, tradition: "Hindu" },
  { name: "St. John of the Cross", level: 605, tradition: "Christian" },
  { name: "Padmasambhava", level: 595, tradition: "Buddhist", note: "Brought Buddhism to Tibet" },
  { name: "Chuang Tzu", level: 595, tradition: "Taoist" },
  { name: "Confucius", level: 590, tradition: "Confucian" },
  { name: "St. Patrick", level: 590, tradition: "Christian" },
  { name: "Father Pio", level: 585, tradition: "Christian" },
  { name: "John Calvin", level: 580, tradition: "Christian" },
  { name: "Martin Luther", level: 580, tradition: "Christian" },
  { name: "Brother Lawrence", level: 575, tradition: "Christian" },
  { name: "The Dalai Lama", level: 570, tradition: "Buddhist" },
  { name: "Pope John Paul II", level: 570, tradition: "Christian" },
  { name: "St. Thomas Aquinas", level: 570, tradition: "Christian" },
  { name: "Roshi Suzuki", level: 565, tradition: "Buddhist" },
  { name: "White Brotherhood", level: 560 },
  { name: "St. Augustine", level: 550, tradition: "Christian" },
  { name: "Rumi", level: 550, tradition: "Sufi" },
  { name: "Socrates", level: 540, tradition: "Greek" },
  { name: "Paramahansa Yogananda", level: 540, tradition: "Hindu" },
  { name: "Sri Ramanuja Charya", level: 530, tradition: "Hindu" },
  { name: "Sri Madhva Charya", level: 520, tradition: "Hindu" },
  { name: "Poonja-Ji", level: 520, tradition: "Hindu" },
  { name: "Thomas Merton", level: 515, tradition: "Christian" },
  { name: "Joseph Smith", level: 510, tradition: "Christian", note: "Founder of LDS movement" },
  { name: "James Allen", level: 505, tradition: "New Thought" },
  { name: "Erasmus", level: 500, tradition: "Christian", note: "Renaissance humanist" },

  // Level 200–499
  { name: "Wallace Black Elk", level: 499, tradition: "Indigenous", note: "Lakota spiritual leader" },
  { name: "Hazrat Khan", level: 499, tradition: "Sufi" },
  { name: "Guru Nanak", level: 495, tradition: "Sikh" },
  { name: "Eric Butterworth", level: 495, tradition: "Unity" },
  { name: "Mary Baker Eddy", level: 490, tradition: "Christian Science" },
  { name: "Alan Watts", level: 485, tradition: "Zen/Taoist" },
  { name: "Ernest Holmes", level: 485, tradition: "New Thought" },
  { name: "Joel Goldsmith", level: 480, tradition: "Christian Mysticism" },
  { name: "Alice Bailey", level: 445, tradition: "Theosophy" },
  { name: "Edgar Cayce", level: 285, tradition: "Christian Mysticism" },
  { name: "Mother Mira", level: 240, tradition: "Hindu" },
  { name: "Meher Baba", level: 240, tradition: "Sufi/Hindu" },
];

export const writings: CalibratedWriting[] = [
  // Level 900–999
  { title: "Bhagavad-Gita", level: 910, tradition: "Hindu" },
  { title: "The Zohar", level: 905, tradition: "Jewish", note: "Foundational Kabbalistic text" },

  // Level 800–899
  { title: "Lamsa Bible (edited)", level: 880, tradition: "Christian", note: "Translated from Aramaic" },
  { title: "Huang Po Teachings", level: 850, tradition: "Buddhist" },
  { title: "Dhammapada", level: 840, tradition: "Buddhist" },
  { title: "Ramayana", level: 810, tradition: "Hindu" },

  // Level 700–799
  { title: "Bodhidharma Zen Teachings", level: 795, tradition: "Buddhist" },
  { title: "New Testament (KJV, minus Revelation)", level: 790, tradition: "Christian" },
  { title: "Heart Sutra", level: 780, tradition: "Buddhist" },
  { title: "Lotus Sutra", level: 780, tradition: "Buddhist" },
  { title: "The Torah", level: 745, tradition: "Jewish" },
  { title: "Yoga Sutras of Patanjali", level: 740, tradition: "Hindu" },
  { title: "Rig Veda", level: 705, tradition: "Hindu" },
  { title: "The Cloud of Unknowing", level: 705, tradition: "Christian" },
  { title: "Diamond Sutra", level: 700, tradition: "Buddhist" },
  { title: "Koran / Quran", level: 700, tradition: "Islamic" },

  // Level 600–699
  { title: "Gospel of St. Luke", level: 699, tradition: "Christian" },
  { title: "Mishneh", level: 665, tradition: "Jewish" },
  { title: "Midrash", level: 665, tradition: "Jewish" },
  { title: "Genesis (Lamsa Bible)", level: 660, tradition: "Christian" },
  { title: "Gospel of St. Thomas", level: 660, tradition: "Christian" },
  { title: "Abhinavagupta Writings", level: 655, tradition: "Hindu" },
  { title: "Psalms (Lamsa Bible)", level: 650, tradition: "Christian" },
  { title: "Aggadah", level: 645, tradition: "Jewish" },
  { title: "New Testament (KJV, standard from Greek)", level: 640, tradition: "Christian" },
  { title: "Vijnana Bhairava", level: 635, tradition: "Hindu" },
  { title: "Lao Tzu Teachings", level: 610, tradition: "Taoist" },
  { title: "Kabbalah", level: 605, tradition: "Jewish" },
  { title: "A Course in Miracles — Workbook", level: 600, tradition: "Christian/Universal" },

  // Level 500–599
  { title: "Embraced by the Light", level: 595, tradition: "Christian", note: "By Betty Eadie" },
  { title: "Life and Teachings of the Masters of the Far East", level: 560, tradition: "New Thought" },
  { title: "A Course in Miracles — Manual for Teachers", level: 555, tradition: "Christian/Universal" },
  { title: "A Course in Miracles — Textbook", level: 550, tradition: "Christian/Universal" },
  { title: "Granth Sahib (Adi Granth)", level: 505, tradition: "Sikh" },

  // Level 200–499
  { title: "Lamsa Bible (standard Aramaic)", level: 495, tradition: "Christian" },
  { title: "King James Bible (standard, from Greek)", level: 475, tradition: "Christian" },
  { title: "The I Ching", level: 430, tradition: "Chinese" },
  { title: "Book of Mormon", level: 405, tradition: "Christian" },
  { title: "Apocrypha", level: 400, tradition: "Christian" },
  { title: "Gnostic Gospels", level: 400, tradition: "Gnostic" },
  { title: "The Impersonal Life", level: 295, tradition: "Christian", note: "By Joseph Benner" },
  { title: "Dead Sea Scrolls", level: 260, tradition: "Jewish" },
];

export interface LevelBand {
  label: string;
  min: number;
  max: number;
}

export const levelBands: LevelBand[] = [
  { label: "The Great Avatars", min: 1000, max: 1000 },
  { label: "The Great Sages and Apostles", min: 800, max: 999 },
  { label: "Advanced Mystics and Sages", min: 700, max: 799 },
  { label: "Enlightened Teachers", min: 600, max: 699 },
  { label: "Saints and Spiritual Teachers", min: 500, max: 599 },
  { label: "Integrous Teachers and Thinkers", min: 200, max: 499 },
];
