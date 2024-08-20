const articleTitles = [
    "The Psychology of Color in Marketing: How Hues Influence Consumer Behavior",
    "Exploring the Depths: The Future of Deep-Sea Exploration",
    "The Renaissance of Vinyl Records: Why Analog is Making a Comeback",
    "Urban Farming: Growing Food in the Heart of the City",
    "The Impact of 5G on Global Communication: Opportunities and Challenges",
    "Gastronomy and Technology: How AI is Changing the Culinary World",
    "Virtual Tourism: Exploring the World from Your Living Room",
    "The Role of Music in Cognitive Development: A Neuroscientific Perspective",
    "Biodiversity in Urban Environments: Creating Green Spaces in Concrete Jungles",
    "The Evolution of Language: How Digital Communication is Reshaping Linguistics",
    "Astrobiology: The Search for Life Beyond Earth",
    "The Art of Minimalism: Living More with Less",
    "The Future of Renewable Energy: Solar, Wind, and Beyond",
    "Cultural Preservation in the Digital Age: Balancing Tradition and Innovation",
    "The Rise of E-Sports: A New Era of Competitive Gaming",
    "Ocean Conservation: Protecting Marine Life in the 21st Century",
    "The Intersection of Fashion and Technology: Wearable Innovations",
    "Artificial Intelligence in Creative Arts: Can Machines Be Truly Creative?",
    "The Science of Happiness: What Really Makes Us Happy?",
    "Reviving Ancient Crafts: How Artisans are Preserving Traditional Skills",
    "The Future of Space Habitation: Living on Mars and Beyond",
    "Ethical AI: Ensuring Fairness and Transparency in Machine Learning",
    "The Influence of Architecture on Mental Health: Designing for Well-being",
    "The World of Microbiomes: Understanding the Tiny Ecosystems Within Us",
    "Virtual Reality in Therapy: Treating Phobias and Anxiety Disorders",
    "The Evolution of Storytelling: From Oral Traditions to Virtual Reality",
    "Cognitive Bias in Decision-Making: Understanding and Overcoming Mental Shortcuts",
    "The Future of Personal Transportation: From Electric Cars to Hyperloops",
    "Sustainable Fashion: The Movement Toward Eco-Friendly Apparel",
    "The Power of Mindfulness: Techniques for Reducing Stress and Anxiety",
    "The Ethics of Genetic Engineering: Navigating the Moral Landscape",
    "The Role of Citizen Science in Modern Research: Empowering the Public",
    "Biomimicry: Innovating by Emulating Nature’s Designs",
    "The Economics of Happiness: How Wealth Relates to Well-being",
    "The Impact of Automation on Employment: Preparing for the Future Workforce",
    "Reimagining Education: The Shift Toward Lifelong Learning",
    "The Future of Food: Lab-Grown Meat and Plant-Based Alternatives",
    "The Role of Storytelling in Corporate Branding: Crafting Authentic Narratives",
    "Digital Detox: The Benefits of Unplugging in a Hyper-Connected World",
    "The Science of Sleep: Unlocking the Secrets to Better Rest",
    "Smart Cities: How Technology is Shaping Urban Living",
    "The Impact of Social Media on Self-Esteem: Understanding the Digital Mirror",
    "The Future of Medicine: Personalized Treatments Based on Genetics",
    "Artificial Intelligence in Healthcare: Revolutionizing Diagnosis and Treatment",
    "The Art of Negotiation: Strategies for Successful Deal-Making",
    "The Future of Entertainment: How Streaming is Changing the Game",
    "Climate Change and Its Impact on Global Migration Patterns",
    "The Psychology of Hoarding: Understanding the Compulsive Accumulation of Items",
    "The Role of Technology in Disaster Relief: Innovations in Crisis Management",
    "The Philosophy of Time: Understanding Our Perception of the Past, Present, and Future",
    "The Ethics of Space Exploration: Balancing Curiosity with Responsibility",
    "Renewable Energy Storage Solutions: The Key to a Sustainable Future",
    "The Influence of Diet on Mental Health: Eating for a Happier Brain",
    "The Rise of Remote Work: How the Pandemic has Permanently Changed the Workforce",
    "The Future of Retail: How E-Commerce is Shaping Consumer Behavior",
    "The Impact of Artificial Intelligence on Creativity: Enhancing or Replacing Human Talent?",
    "The Intersection of Technology and Privacy: Navigating the Digital Landscape",
    "The Power of Public Speaking: Techniques for Captivating an Audience",
    "The Role of Music in Social Movements: Soundtracking Change",
    "The Future of Space Tourism: From Fiction to Reality",
    "The Science Behind Climate Change: Understanding the Data",
  ];
  
  const frenchArticleTitles = [
    "La psychologie des couleurs en marketing : Comment les teintes influencent le comportement des consommateurs",
    "Explorer les profondeurs : L'avenir de l'exploration des fonds marins",
    "La renaissance des disques vinyles : Pourquoi l'analogique revient en force",
    "L'agriculture urbaine : Cultiver de la nourriture au cœur de la ville",
    "L'impact de la 5G sur la communication mondiale : Opportunités et défis",
    "Gastronomie et technologie : Comment l'IA transforme le monde culinaire",
    "Le tourisme virtuel : Explorer le monde depuis son salon",
    "Le rôle de la musique dans le développement cognitif : Une perspective neuroscientifique",
    "La biodiversité dans les environnements urbains : Créer des espaces verts dans les jungles de béton",
    "L'évolution du langage : Comment la communication numérique redéfinit la linguistique",
    "L'astrobiologie : À la recherche de la vie au-delà de la Terre",
    "L'art du minimalisme : Vivre mieux avec moins",
    "L'avenir des énergies renouvelables : Solaire, éolien, et au-delà",
    "La préservation culturelle à l'ère numérique : Équilibrer tradition et innovation",
    "L'essor de l'e-sport : Une nouvelle ère de compétitions",
  ];
  
  const spanishArticleTitles = [
    "La psicología del color en marketing: Cómo los tonos influyen en el comportamiento del consumidor",
    "Explorando las profundidades: El futuro de la exploración de las profundidades marinas",
    "El renacimiento de los discos de vinilo: Por qué lo analógico está regresando",
    "La agricultura urbana: Cultivando alimentos en el corazón de la ciudad",
    "El impacto del 5G en la comunicación global: Oportunidades y desafíos",
    "Gastronomía y tecnología: Cómo la IA está cambiando el mundo culinario",
    "El turismo virtual: Explorando el mundo desde tu sala de estar",
    "El papel de la música en el desarrollo cognitivo: Una perspectiva neurocientífica",
    "La biodiversidad en entornos urbanos: Creando espacios verdes en junglas de concreto",
    "La evolución del lenguaje: Cómo la comunicación digital está remodelando la lingüística",
    "Astrobiología: La búsqueda de vida más allá de la Tierra",
    "El arte del minimalismo: Vivir más con menos",
    "El futuro de las energías renovables: Solar, eólica, y más allá",
    "La preservación cultural en la era digital: Equilibrando tradición e innovación",
    "El auge de los e-Sports: Una nueva era de competiciones",
    "Conservación de los océanos: Protegiendo la vida marina en el siglo XXI",
  ]
  
  const germanArticleTitles = [
    "Die Psychologie der Farben im Marketing: Wie Farbtöne das Verbraucherverhalten beeinflussen",
    "Die Tiefen erkunden: Die Zukunft der Tiefsee-Erforschung",
    "Die Renaissance der Vinyl-Schallplatten: Warum Analoges ein Comeback feiert",
    "Städtische Landwirtschaft: Nahrungsmittelanbau im Herzen der Stadt",
    "Die Auswirkungen von 5G auf die globale Kommunikation: Chancen und Herausforderungen",
    "Gastronomie und Technologie: Wie KI die kulinarische Welt verändert",
    "Virtueller Tourismus: Die Welt von deinem Wohnzimmer aus erkunden",
    "Die Rolle der Musik in der kognitiven Entwicklung: Eine neurowissenschaftliche Perspektive",
    "Biodiversität in städtischen Umgebungen: Grünflächen in Betonwüsten schaffen",
    "Die Evolution der Sprache: Wie digitale Kommunikation die Linguistik neu gestaltet",
    "Astrobiologie: Die Suche nach Leben jenseits der Erde",
    "Die Kunst des Minimalismus: Mehr mit weniger leben",
    "Die Zukunft der erneuerbaren Energien: Solar, Wind und darüber hinaus",
    "Kulturerhaltung im digitalen Zeitalter: Tradition und Innovation ausbalancieren",
    "Der Aufstieg des E-Sports: Eine neue Ära des Wettkampfs",
    "Ozeanschutz: Meereslebewesen im 21. Jahrhundert schützen",
  ]
  
  const titleArrays = {
    English: articleTitles,
    Spanish: spanishArticleTitles,
    French: frenchArticleTitles,
    German: germanArticleTitles,
  }
  
  const articleContent = [
    "As artificial intelligence continues to advance, the legal profession faces new challenges and opportunities. The integration of AI in legal research and document analysis streamlines processes but raises questions about ethics and job displacement.",
    "In the rapidly evolving landscape of Quantum Legal Systems, the traditional understanding of legal frameworks is being redefined. Quantum computing's ability to process vast amounts of data simultaneously poses both promise and potential risks for legal practices.",
    "The emergence of LegalTech is reshaping how legal services are delivered. From cloud-based case management to virtual courtrooms, technology is enhancing efficiency and accessibility, but legal professionals must adapt to these changes.",
    "Environmental law is at the forefront of addressing climate change. Advocates work on developing policies to mitigate environmental impact, while legal scholars explore the implications of climate-related disputes in the legal arena.",
    "Mindfulness is gaining traction in legal circles, emphasizing the importance of focused attention and ethical decision-making. Integrating mindfulness practices into legal education and professional development is becoming a priority.",
    "Space law faces uncharted territories as private companies engage in space exploration. Issues of jurisdiction, resource ownership, and liability are becoming focal points for legal scholars and practitioners in this field.",
    "Sustainable legal practices go beyond environmental concerns. Legal professionals are exploring ways to reduce their carbon footprint, implement green technologies, and contribute to a more sustainable and ethical legal industry.",
    "Blockchain's decentralized nature is transforming how legal transactions are conducted. Smart contracts, powered by blockchain, offer new possibilities for secure and transparent agreements, challenging traditional legal frameworks.",
    "Legal storytelling is evolving in the digital age, with multimedia presentations and interactive narratives gaining prominence in the courtroom. Crafting compelling legal narratives has become an essential skill for effective advocacy.",
    "Virtual reality is revolutionizing legal education by providing immersive experiences for students. Virtual mock trials, crime scene reconstructions, and interactive simulations offer a new dimension to legal learning.",
    "The ethical implications of AI judges involve questions of bias, accountability, and the potential impact on the judicial system. Striking the right balance between automation and human oversight is crucial for a fair legal system.",
    "Cybersecurity laws play a crucial role in safeguarding digital assets and protecting against cyber threats. The legal landscape is adapting to the challenges posed by rapidly evolving technologies and the increasing frequency of cyber attacks.",
    "Biotechnology advancements bring forth legal considerations related to patents, privacy, and bioethics. Legal frameworks must adapt to ensure responsible and equitable use of biotechnological innovations.",
    "E-discovery, an integral part of modern litigation, involves the identification and collection of digital evidence. Legal professionals navigate the complexities of handling electronic data to ensure a fair and transparent legal process.",
    "International law faces challenges in an interconnected world, addressing issues such as cross-border disputes, human rights violations, and the harmonization of legal standards on a global scale.",
    "The ethics of autonomous vehicles extend beyond the technological realm, raising questions about liability, safety, and the impact on traditional legal concepts such as driver responsibility and insurance regulations.",
    "Intellectual property laws are adapting to the digital age, addressing issues like copyright infringement, digital piracy, and the protection of creative works in online environments.",
    "Augmented reality presents legal challenges in areas such as privacy, data ownership, and potential misuse. Legal professionals are exploring frameworks to navigate the legal implications of this emerging technology.",
    "Blockchain's role in legal identity verification is transforming traditional notary services. Decentralized and secure identity verification methods offer potential solutions for issues related to identity fraud and authentication.",
    "AI and predictive analytics are reshaping legal research methodologies. Legal professionals leverage data-driven insights to anticipate legal trends, assess case strategies, and enhance decision-making processes.",
    "In the realm of legal ethics, the integration of artificial intelligence prompts discussions about the responsibilities of legal professionals. Ensuring transparency, fairness, and accountability in AI-driven legal processes is paramount.",
    "Quantum legalities introduce a paradigm shift in legal systems, where the principles of superposition and entanglement redefine the nature of legal information processing. Adapting to the intricacies of quantum legal frameworks poses both challenges and opportunities.",
    "As LegalTech trends continue to evolve, legal practitioners are exploring the potential of automation, machine learning, and natural language processing. These technologies enhance legal research, contract review, and case management, but ethical considerations loom large.",
    "The legal implications of biotechnology span diverse areas such as genetic engineering, cloning, and gene editing. Legal scholars grapple with defining boundaries and regulations that balance scientific advancements with ethical and legal norms.",
    "Effective e-discovery practices are essential for modern legal proceedings. The integration of advanced analytics and artificial intelligence streamlines the identification and review of electronic documents, improving the efficiency of legal teams.",
    "International environmental law is at the forefront of addressing climate change on a global scale. Collaborative efforts among nations are required to develop and enforce policies that mitigate environmental harm and protect the planet.",
  ];
  
  const frenchArticleContent = [
    "À mesure que l'intelligence artificielle continue de progresser, la profession juridique fait face à de nouveaux défis et opportunités. L'intégration de l'IA dans la recherche juridique et l'analyse de documents rationalise les processus, mais soulève des questions d'éthique et de déplacement des emplois.",
    "Dans le paysage en évolution rapide des Systèmes Juridiques Quantiques, la compréhension traditionnelle des cadres juridiques est redéfinie. La capacité de l'informatique quantique à traiter d'énormes quantités de données simultanément présente à la fois des promesses et des risques potentiels pour les pratiques juridiques.",
    "L'émergence de LegalTech transforme la manière dont les services juridiques sont fournis. Des solutions de gestion de cas basées sur le cloud aux salles d'audience virtuelles, la technologie améliore l'efficacité et l'accessibilité, mais les professionnels du droit doivent s'adapter à ces changements.",
    "Le droit de l'environnement est en première ligne dans la lutte contre le changement climatique. Les défenseurs travaillent à développer des politiques pour atténuer l'impact environnemental, tandis que les chercheurs juridiques explorent les implications des litiges liés au climat dans le domaine juridique.",
    "La pleine conscience gagne du terrain dans les cercles juridiques, soulignant l'importance de l'attention concentrée et de la prise de décision éthique. L'intégration des pratiques de pleine conscience dans l'éducation juridique et le développement professionnel devient une priorité.",
    "Le droit spatial explore des territoires inconnus alors que des entreprises privées s'engagent dans l'exploration spatiale. Les questions de juridiction, de propriété des ressources et de responsabilité deviennent des points focaux pour les chercheurs et praticiens du droit dans ce domaine.",
    "Les pratiques juridiques durables vont au-delà des préoccupations environnementales. Les professionnels du droit explorent des moyens de réduire leur empreinte carbone, d'implémenter des technologies vertes et de contribuer à une industrie juridique plus durable et éthique.",
    "La nature décentralisée de la blockchain transforme la manière dont les transactions juridiques sont effectuées. Les contrats intelligents, alimentés par la blockchain, offrent de nouvelles possibilités pour des accords sécurisés et transparents, remettant en question les cadres juridiques traditionnels.",
    "La narration juridique évolue à l'ère numérique, avec des présentations multimédias et des récits interactifs prenant de l'importance dans la salle d'audience. Créer des récits juridiques convaincants est devenu une compétence essentielle pour une plaidoirie efficace.",
  ];
  
  const spanishArticleContent = [
    "A medida que la inteligencia artificial sigue avanzando, la profesión legal enfrenta nuevos desafíos y oportunidades. La integración de la IA en la investigación legal y el análisis de documentos agiliza los procesos, pero plantea preguntas sobre ética y desplazamiento de empleos.",
    "En el paisaje en rápida evolución de los Sistemas Jurídicos Cuánticos, la comprensión tradicional de los marcos legales está siendo redefinida. La capacidad de la computación cuántica para procesar grandes cantidades de datos simultáneamente presenta tanto promesas como riesgos potenciales para las prácticas legales.",
    "El surgimiento de LegalTech está transformando la forma en que se brindan los servicios legales. Desde la gestión de casos basada en la nube hasta las salas de audiencias virtuales, la tecnología está mejorando la eficiencia y accesibilidad, pero los profesionales del derecho deben adaptarse a estos cambios.",
    "El derecho ambiental está a la vanguardia en la lucha contra el cambio climático. Los defensores trabajan en el desarrollo de políticas para mitigar el impacto ambiental, mientras que los académicos legales exploran las implicaciones de los litigios relacionados con el clima en el ámbito jurídico.",
    "La atención plena está ganando terreno en los círculos legales, enfatizando la importancia de la atención enfocada y la toma de decisiones éticas. Integrar prácticas de atención plena en la educación legal y el desarrollo profesional se está convirtiendo en una prioridad.",
    "El derecho espacial enfrenta territorios desconocidos a medida que las empresas privadas se involucran en la exploración espacial. Las cuestiones de jurisdicción, propiedad de recursos y responsabilidad se están convirtiendo en puntos focales para los académicos y profesionales del derecho en este campo.",
    "Las prácticas legales sostenibles van más allá de las preocupaciones ambientales. Los profesionales del derecho están explorando maneras de reducir su huella de carbono, implementar tecnologías ecológicas y contribuir a una industria legal más sostenible y ética.",
    "La naturaleza descentralizada de la blockchain está transformando la manera en que se realizan las transacciones legales. Los contratos inteligentes, impulsados por la blockchain, ofrecen nuevas posibilidades para acuerdos seguros y transparentes, desafiando los marcos legales tradicionales.",
    "La narración legal está evolucionando en la era digital, con presentaciones multimedia y narrativas interactivas ganando prominencia en la sala de audiencias. Crear narrativas legales convincentes se ha convertido en una habilidad esencial para una defensa efectiva.",
  ];
  
  const germanArticleCotnent = [
    "Während die künstliche Intelligenz weiterhin fortschreitet, steht der Rechtsberuf vor neuen Herausforderungen und Chancen. Die Integration von KI in die juristische Recherche und Dokumentenanalyse rationalisiert Prozesse, wirft jedoch Fragen zur Ethik und zum Arbeitsplatzverlust auf.",
    "Im sich schnell entwickelnden Bereich der Quantenrechtssysteme wird das traditionelle Verständnis von rechtlichen Rahmenbedingungen neu definiert. Die Fähigkeit der Quantencomputing, riesige Datenmengen gleichzeitig zu verarbeiten, birgt sowohl Versprechen als auch potenzielle Risiken für juristische Praktiken.",
    "Das Aufkommen von LegalTech verändert die Art und Weise, wie juristische Dienstleistungen erbracht werden. Von cloudbasiertem Fallmanagement bis hin zu virtuellen Gerichtssälen verbessert die Technologie die Effizienz und Zugänglichkeit, doch juristische Fachleute müssen sich an diese Veränderungen anpassen.",
    "Das Umweltrecht steht an vorderster Front im Kampf gegen den Klimawandel. Befürworter arbeiten an der Entwicklung von Richtlinien zur Minderung der Umweltbelastung, während Rechtswissenschaftler die Auswirkungen klima-assoziierter Streitigkeiten im rechtlichen Bereich untersuchen.",
    "Achtsamkeit gewinnt in juristischen Kreisen an Bedeutung und betont die Wichtigkeit von fokussierter Aufmerksamkeit und ethischer Entscheidungsfindung. Die Integration von Achtsamkeitspraktiken in die juristische Ausbildung und berufliche Weiterentwicklung wird zunehmend zur Priorität.",
    "Das Weltraumrecht stößt in unbekannte Gebiete vor, da private Unternehmen in die Weltraumforschung einsteigen. Fragen der Gerichtsbarkeit, Ressourcennutzung und Haftung werden zu Schwerpunkten für Rechtswissenschaftler und Praktiker in diesem Bereich.",
    "Nachhaltige juristische Praktiken gehen über Umweltbelange hinaus. Juristische Fachleute erkunden Möglichkeiten, ihren CO2-Fußabdruck zu reduzieren, grüne Technologien umzusetzen und zu einer nachhaltigeren und ethischeren Rechtsbranche beizutragen.",
    "Die dezentrale Natur der Blockchain verändert, wie rechtliche Transaktionen durchgeführt werden. Intelligente Verträge, die durch die Blockchain unterstützt werden, bieten neue Möglichkeiten für sichere und transparente Vereinbarungen und stellen traditionelle rechtliche Rahmenbedingungen in Frage.",
    "Die rechtliche Erzählweise entwickelt sich im digitalen Zeitalter weiter, wobei Multimedia-Präsentationen und interaktive Narrative im Gerichtssaal an Bedeutung gewinnen. Das Erstellen überzeugender juristischer Erzählungen ist zu einer wesentlichen Fähigkeit für eine effektive Vertretung geworden.",
  ];
  
  const contentArrays = {
    English: articleContent,
    Spanish: spanishArticleContent,
    French: frenchArticleContent,
    German: germanArticleCotnent,
  }
  
  const articleQuotes = [
    "In the digital age, innovation is the currency of progress.",
    "Technology is a tool, and how we use it defines our future.",
    "The internet is the modern agora, where ideas are exchanged at the speed of light.",
    "In the world of technology, change is the only constant.",
    "Embrace technology, but never lose sight of the human touch it seeks to enhance.",
    "Justice is the foundation upon which a civilized society is built.",
    "In the eyes of the law, all individuals are equal.",
    "The law is a mirror reflecting the values of a society.",
    "Laws are the threads that weave the fabric of a just and orderly society.",
    "Fairness is not just a legal concept; it's a moral imperative.",
    "Politics is the art of the possible, driven by the ideals of the people.",
    "Democracy is not just a system of governance; it's a commitment to the voice of the people.",
    "In politics, compromise is the bridge between ideals and realities.",
    "Leadership is not about power; it's about service to the greater good.",
    "A thriving society is built on the foundation of informed and engaged citizens.",
    "Society flourishes when kindness becomes the currency of interaction.",
    "Diversity is the strength that weaves the rich tapestry of society.",
    "In a compassionate society, empathy is the bridge that connects us all.",
    "The strength of a society is measured by how it cares for its most vulnerable members.",
    "Education is the cornerstone of an enlightened and progressive society.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Change is not a threat; it's an opportunity for growth.",
    "Wisdom is the compass that guides us through the labyrinth of life.",
    "The only constant in life is change; embrace it with resilience and grace.",
    "In unity, there is strength; in diversity, there is beauty.",
  ];
  
  const urls = [
    "https://en.wikipedia.org/wiki/Technology",
    "https://en.wikipedia.org/wiki/Innovation",
    "https://en.wikipedia.org/wiki/Digital_era",
    "https://en.wikipedia.org/wiki/Information_age",
    "https://en.wikipedia.org/wiki/Law",
    "https://en.wikipedia.org/wiki/Rule_of_law",
    "https://en.wikipedia.org/wiki/Justice",
    "https://en.wikipedia.org/wiki/Legal_system",
    "https://en.wikipedia.org/wiki/Politics",
    "https://en.wikipedia.org/wiki/Democracy",
    "https://en.wikipedia.org/wiki/Compromise",
    "https://en.wikipedia.org/wiki/Leadership",
    "https://en.wikipedia.org/wiki/Society",
    "https://en.wikipedia.org/wiki/Diversity",
    "https://en.wikipedia.org/wiki/Empathy",
    "https://en.wikipedia.org/wiki/Education",
    "https://en.wikipedia.org/wiki/Future",
    "https://en.wikipedia.org/wiki/Change",
    "https://en.wikipedia.org/wiki/Wisdom",
    "https://en.wikipedia.org/wiki/Unity",
  ];
  
  const keywords = [
    "algorithm",
    "blockchain",
    "code",
    "database",
    "encryption",
    "software",
    "startup",
    "litigation",
    "contract",
    "regulation",
    "finance",
    "investment",
    "capital",
    "credit",
    "risk",
    "audit",
    "climate",
    "ecosystem",
    "renewable_energy",
    "pollution",
    "conservation",
    "biodiversity",
    "sustainability",
    "recycling",
    "wildlife",
    "destination",
    "adventure",
    "exploration",
    "culture",
    "tourism",
    "passport",
    "journey",
    "landscape",
    "vacation",
    "explore",
    "education",
    "knowledge",
    "curriculum",
    "research",
    "study",
    "innovation",
    "creativity",
    "skill",
    "classroom",
    "development",
  ];
  
  const musicVids = [
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "https://www.youtube.com/watch?v=kfVsfOSbJY0",
    "https://www.youtube.com/watch?v=4fndeDfaWCg",
    "https://www.youtube.com/watch?v=FC3y9llDXuM",
    "https://www.youtube.com/watch?v=PWgvGjAhvIw",
    "https://www.youtube.com/watch?v=L_jWHffIx5E",
    "https://www.youtube.com/watch?v=DmeUuoxyt_E",
    "https://www.youtube.com/watch?v=s1tAYmMjLdY",
    "https://embed.acast.com/$/b19ac1f5-6adf-4c8b-aa1a-2af2160f99e4/ep-226-noel-fielding?",
    "https://embed.acast.com/$/b19ac1f5-6adf-4c8b-aa1a-2af2160f99e4/ep-248-huge-davies?",
    "https://embed.acast.com/$/b19ac1f5-6adf-4c8b-aa1a-2af2160f99e4/ep-248-huge-davies?",
    "https://embed.acast.com/$/b19ac1f5-6adf-4c8b-aa1a-2af2160f99e4/ep-240-killer-mike?",
  ];
  
  const imageUrls = [
      "https://compote.slate.com/images/697b023b-64a5-49a0-8059-27b963453fb1.gif",
      "https://www.socialpilot.co/wp-content/uploads/2023/02/gif.gif",
      "https://media0.giphy.com/media/kaq6GnxDlJaBq/giphy.webp?cid=790b7611t9wghu5aryjdrs0thm0cgp3bmxco3noy63quc61b&ep=v1_gifs_search&rid=giphy.webp&ct=g",
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmp2OWxnbThxNmN0cmtxcWk1MTFkYXE1NHB1Zmhubmw2YWVnZjQ3eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AmDzMmCJZABsk/giphy.webp",
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGNobGRzeTllMHpzM3l3MWYza281cHprdWlnOGdsZnkxNnJzNTNlbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/10A06pOVcpo6hW/giphy.webp",
      "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzk4Y2hxc2E5bDVseml2c3NtOW04cnIxM3N3aHNmNWk4ZGI3MHNobCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vp9rYcsH1cIVO/giphy.webp",
      "https://media1.giphy.com/media/XteNIxbCLj3HzEfAil/giphy.webp?cid=790b7611grw8r6gg7ni51qnpc433smn03ec74xvhnc91xr5c&ep=v1_gifs_search&rid=giphy.webp&ct=g",
      "https://media0.giphy.com/media/pHYaWbspekVsTKRFQT/giphy.webp?cid=790b7611brx9nrvi26o7njpumeqopnvzxyhq5qyzl3doafv7&ep=v1_gifs_search&rid=giphy.webp&ct=g",
      "https://media2.giphy.com/media/SGkufeMafyuBhIw796/200w.webp?cid=790b7611brx9nrvi26o7njpumeqopnvzxyhq5qyzl3doafv7&ep=v1_gifs_search&rid=200w.webp&ct=g",
      "https://media1.giphy.com/media/PXCqTNXuGlNpHABHH4/giphy.webp?cid=ecf05e476c70bi13rd9kvude54s5zi74no37uncessifgpf7&ep=v1_gifs_search&rid=giphy.webp&ct=g",
      "https://media0.giphy.com/media/olAik8MhYOB9K/200.webp?cid=ecf05e47nep58ichra6s3pc3ek9kwylr94cer0bz0vf7hetj&ep=v1_gifs_search&rid=200.webp&ct=g",
      "https://media4.giphy.com/media/ajTYvLVDxbT1sbgMlI/giphy.webp?cid=ecf05e47sy7bm22luk42odmwmxetzxi3jgcgdtznsba2zjx6&ep=v1_gifs_search&rid=giphy.webp&ct=g",
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWc0cG9ubHJteWF3OG9kejZyMmtqNmRpNHh1dHRoa3ZqYWpxbG55byZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ORjfgiG9ZtxcQQwZzv/200.webp"
      ];
  
      const emojis = [
        "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "😘", "😗", "😙", "😚", "😋",
        "😜", "😝", "😛", "🤑", "🤗", "🤔", "🤭", "🤫", "🤥", "😶", "😐", "😑", "😏", "😒", "🙄", "😬", "🤐", "🤨", "😠", "😡",
        "🤬", "😔", "😕", "🙁", "😟", "😣", "😖", "😞", "😓", "😩", "😫", "🥱", "😤", "😮", "😱", "😨", "😰", "😥", "😢", "😭",
        "😵", "🥴", "😲", "🤯", "🤪", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "😇", "🥳", "🥸", "😈", "👿", "👹", "👺", "💀", "☠️",
        "👻", "👽", "👾", "🤖", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾",
        "🐵", "🐒", "🦍", "🦧", "🐶", "🐕", "🐩", "🐺", "🦊", "🐱", "🐈", "🦁", "🐯", "🐅", "🐆", "🐴", "🐎", "🦄", "🦓", "🦌", 
        "🦬", "🐮", "🐂", "🐃", "🐄", "🐷", "🐖", "🐗", "🐽", "🐏", "🐑", "🐐", "🐪", "🐫", "🦙", "🦒", "🐘", "🦣", "🦏", "🦛", 
        "🐭", "🐁", "🐀", "🐹", "🐰", "🐇", "🐿️", "🦫", "🦔", "🦇", "🐻", "🐨", "🐼", "🦥", "🦦", "🦨", "🦘", "🦡", "🐾", "🦃", 
        "🐔", "🐓", "🐣", "🐤", "🐥", "🐦", "🐧", "🕊️", "🦅", "🦆", "🦢", "🦉", "🦤", "🪶", "🦩", "🦚", "🦜", "🐸", "🐊", "🐢", 
        "🦎", "🐍", "🐲", "🐉", "🦕", "🦖", "🐳", "🐋", "🐬", "🦭", "🐟", "🐠", "🐡", "🦈", "🐙", "🦑", "🦀", "🦞", "🦐", "🦪", 
        "🐚", "🐌", "🦋", "🐛", "🐜", "🐝", "🪲", "🐞", "🦗", "🪳", "🕷️", "🕸️", "🦂", "🦟", "🪰", "🪱", "🦠"
    ]
  
  function num(array) {
    return Math.floor(Math.random() * (array.length - 1));
  }
  
  function inputEvent(element) {
    const inputEvent = new Event("input", { bubbles: true, inputType: 'insertText' });
    element.dispatchEvent(inputEvent);
  }
  
  function waitForElement(selector, textContent, callback) {
    const observer = new MutationObserver((mutations, me) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        if (element.textContent.trim().includes(textContent)) {
          me.disconnect();
          callback(element);
        }
  
        if (textContent === null) {
          me.disconnect();
          callback(element);
        }
      });
    });
  
    observer.observe(document, {
      childList: true,
      subtree: true,
    });
  }
  
  async function addPostTitle() {
    const pslTabsElement = document.querySelector('psl-tabs');
    let activeTabValue = "English";
    if (pslTabsElement) {
      activeTabValue = pslTabsElement.getAttribute('ng-reflect-psl-active-tab');
    }
  
    var currentLanguageArray = titleArrays[activeTabValue];
    const passleShortcode =  window.location.pathname.split('/')[2];
    const passleTitle = document.querySelector('span.first.clickable.ng-star-inserted').innerText;
    const title = document.querySelector('textarea[placeholder="Enter a post title"]');
    if (title) {
      title.value = `${passleTitle} - ${activeTabValue} (${passleShortcode.toUpperCase()}) - ${currentLanguageArray[num(currentLanguageArray)]}  ${emojis[num(emojis)]}`;
      inputEvent(title);
    }
  }
  
  function createAccordion(language) {
    const randomElement = (arr) => arr[num(arr)];
    var languageContent = contentArrays[language];
  
    const accordionContents = [
      `<p>${randomElement(keywords)} - ${randomElement(keywords)} - ${randomElement(keywords)}</p>`,
      `<img src="${randomElement(imageUrls)}" alt="${randomElement(articleTitles)}" style="max-width:100px; max-height:100px"></img>`,
      `<p>${randomElement(languageContent)}</p>`
    ];
  
    const accordianHTML = accordionContents.map(content => `<div class="accordion__content">${content}</div>`).join("");
    return `
      <details class="accordion">
        <summary class="accordion__title">${randomElement(languageContent)}</summary>
        ${accordianHTML}
      </details>
    `;
  }
  
  function content(language) {
    var languageTitles = titleArrays[language];
    var languageContent = contentArrays[language];
  
    let string = "<h3>" + languageTitles[num(languageTitles)] + " - " + emojis[num(emojis)] + "</h3>";
    string += '<p style="margin-left:20px;"><i>' + languageContent[num(languageContent)] + "</i></p>";
    string += `<img src="${imageUrls[num(imageUrls)]}" alt="${languageTitles[num(languageTitles)]}" style="width:50%; max-width:350px;">`;
    string += "<p>" + languageContent[num(languageContent)] + "</p>";
    string += `<ul><li>${keywords[num(keywords)]}</li><li>${keywords[num(keywords)]}</li><li>${keywords[num(keywords)]}</li></ul>`;
    string += createAccordion(language);
    string += "<p>" + languageContent[num(languageContent)] +"</p>" 
    string +="<p><strong>" + languageContent[num(languageContent)] + "</strong></p>";
    string += `<p><a href="${urls[num(urls)]}" target="_blank" rel="noopener noreferrer">Link to content</a>⁠⁠⁠⁠⁠⁠⁠</p>`;
    string += "<blockquote><h3>" + languageTitles[num(languageTitles)] + "</h3></blockquote>";
    string += "<p>" + languageContent[num(languageContent)] + "</p>";
    string += `<ol><li>${keywords[num(keywords)]}, ${keywords[num(keywords)]}</li><li>${keywords[num(keywords)]}, ${keywords[num(keywords)]}</li><li>${keywords[num(keywords)]}, ${keywords[num(keywords)]}</li></ol>`;
    string += "<p>" + languageContent[num(languageContent)] + "</p>";
    return string;
  }
  
  async function addPostContent() {
    const contentBoxes = document.querySelectorAll(".ck-content");
    const pslTabsElement = document.querySelector('.tabs-component');
    let languages = [];
    if (pslTabsElement) {
      const listItems = pslTabsElement.querySelectorAll("li");
      listItems.forEach((li) => languages.push(li.innerText));
    }
  
    let i = 0;
    contentBoxes.forEach((element) => {
      var editor = element.ckeditorInstance;
      let language = languages[i] || "English";
      if (!element.textContent) editor.setData(content(language));
      i++;
    })
  }
  
  async function addQuote() {
    const switchButtons = document.querySelectorAll(".switch.d-inline-block");
    const lastButton = switchButtons[switchButtons.length - 1];
  
    if (lastButton && !lastButton.classList.contains("active")) {
      lastButton.click();
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  
    const quoteTextarea = document.querySelector(".input__under-label textarea");
    if (quoteTextarea) {
      quoteTextarea.value = articleQuotes[num(articleQuotes)] + ' ' + articleQuotes[num(articleQuotes)];
      inputEvent(quoteTextarea);
    }
  
    const urlInput = document.querySelector('input[formcontrolname="quoteUrl"]');
    if (urlInput) {
      urlInput.value =  urls[num(urls)];
      inputEvent(urlInput);
    }
  }
  
  async function addTags() {
    const tags = document.querySelector('input[placeholder="Add tag..."]');
    if (tags) {
      const keyword = keywords[num(keywords)];
      tags.value = keyword;
      inputEvent(tags);
      tags.focus();
    }
  }
  
  async function addMedia() {
    const media = document.querySelector(".media-container");
    if (!media) {
      const imageInput = document.querySelector('input.form-control[placeholder="Search Getty Images"]');
      if (imageInput) {
        imageInput.value =  keywords[num(keywords)];
        inputEvent(imageInput);
  
        if (Math.random() < 0.33) {
          waitForElement(".text--bold", "Embed media", (element) => {
            element.click();
            const inputElement = document.querySelector('input[formcontrolname="sourceUrl"][placeholder="Enter media URL"].ng-untouched.ng-pristine.ng-invalid');
            inputElement.value = musicVids[num(musicVids)];
            inputEvent(inputElement);
            setTimeout(() => {
              document.querySelector('button[type="button"].button.embedded-media-picker__button.button--join-left.button--join-input').click();
            }, 500);
          });
        }
      }
    }
  }
  
  async function createPasslePost() {
    if (window.location.pathname.includes('newpost')) {
      await addPostTitle();
      await addPostContent();
      await addQuote();
      await addMedia();
      await addTags()
    }
  }
  
  createPasslePost();  