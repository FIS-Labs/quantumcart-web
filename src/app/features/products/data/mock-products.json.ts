import { Product } from '../domain/product.model';

export const PRODUCTS: Product[] = [
  /* -----------------------------------------------------------
     LAPTOPS (1–4)
  ------------------------------------------------------------ */
  {
    id: 1,
    name: 'QuantumBook X15 Pro',
    category: 'Laptops',
    categoryDe: 'Laptops',
    price: 1499.99,
    oldPrice: 1799.99,
    rating: 4.8,
    description:
      "A creator-focused 15.6'' QLED laptop with 165Hz refresh rate, ultra-silent cooling, and a quantum-accelerated performance core built for engineering, design, and gaming.",
    descriptionDe:
      "Ein kreativenorientiertes 15,6''-QLED-Notebook mit 165Hz, ultra-leiser Kühlung und einem quantenbeschleunigten Leistungskern – ideal für Design, Entwicklung und Gaming.",
    imageUrl: 'https://picsum.photos/seed/laptop1/1200/800',
  },
  {
    id: 2,
    name: 'QuantumBook AirLite 13',
    category: 'Laptops',
    categoryDe: 'Laptops',
    price: 999.99,
    rating: 4.6,
    description:
      "A lightweight performance laptop with a premium aluminum body, 13'' Retina QLED display, and all-day battery life for productivity on the go.",
    descriptionDe:
      "Ein leichtes Leistungs-Notebook mit Aluminiumgehäuse, 13''-Retina-QLED-Display und ganztägiger Akkulaufzeit für maximale Mobilität.",
    imageUrl: 'https://picsum.photos/seed/laptop2/1200/800',
  },
  {
    id: 3,
    name: 'QuantumBook Ultra 17',
    category: 'Laptops',
    categoryDe: 'Laptops',
    price: 1999.99,
    rating: 4.9,
    description:
      "A 17'' workstation featuring a 240Hz display, dedicated AI compute engine, and titanium chassis—built for high-end rendering and simulation.",
    descriptionDe:
      "Eine 17''-Workstation mit 240Hz-Display, dedizierter KI-Recheneinheit und Titan-Gehäuse – perfekt für Rendering und Simulation.",
    imageUrl: 'https://picsum.photos/seed/laptop3/1200/800',
  },
  {
    id: 4,
    name: 'QuantumBook Studio 14',
    category: 'Laptops',
    categoryDe: 'Laptops',
    price: 1299.99,
    rating: 4.7,
    description:
      "A slim 14'' laptop with a color-accurate HDR display and creator-grade GPU acceleration—ideal for video editing and 3D work.",
    descriptionDe:
      "Ein schlankes 14''-Notebook mit farbtreuem HDR-Display und leistungsstarker GPU-Beschleunigung – ideal für Videoschnitt und 3D-Arbeiten.",
    imageUrl: 'https://picsum.photos/seed/laptop4/1200/800',
  },

  /* -----------------------------------------------------------
     GRAPHICS CARDS (5–8)
  ------------------------------------------------------------ */
  {
    id: 5,
    name: 'NeonForce RTX 5090',
    category: 'Graphics Cards',
    categoryDe: 'Grafikkarten',
    price: 1899.99,
    rating: 4.9,
    description:
      'A flagship GPU with next-gen ray tracing, AI-driven rendering, and triple-chamber cooling—built for 8K gaming and cinematic workflows.',
    descriptionDe:
      'Eine High-End-GPU mit Next-Gen-Raytracing, KI-Rendering und Dreikammer-Kühlung – ideal für 8K-Gaming und Filmproduktion.',
    imageUrl: 'https://picsum.photos/seed/gpu1/1200/800',
  },
  {
    id: 6,
    name: 'NeonForce RTX 5080',
    category: 'Graphics Cards',
    categoryDe: 'Grafikkarten',
    price: 1299.99,
    rating: 4.7,
    description:
      'A high-performance GPU optimized for 4K gaming, VR, and real-time graphics pipelines with exceptional energy efficiency.',
    descriptionDe:
      'Eine leistungsstarke GPU für 4K-Gaming, VR und Echtzeit-Grafik, bekannt für ihre hohe Energieeffizienz.',
    imageUrl: 'https://picsum.photos/seed/gpu2/1200/800',
  },
  {
    id: 7,
    name: 'NeonForce RTX 5070 Ti',
    category: 'Graphics Cards',
    categoryDe: 'Grafikkarten',
    price: 899.99,
    rating: 4.6,
    description:
      'A cost-efficient GPU delivering superb 1440p performance and enhanced ray tracing without high power consumption.',
    descriptionDe:
      'Eine preis-effiziente GPU mit exzellenter 1440p-Leistung und verbessertem Raytracing bei geringem Stromverbrauch.',
    imageUrl: 'https://picsum.photos/seed/gpu3/1200/800',
  },
  {
    id: 8,
    name: 'NeonForce Creator A6000',
    category: 'Graphics Cards',
    categoryDe: 'Grafikkarten',
    price: 2499.99,
    rating: 5.0,
    description:
      'A workstation GPU designed for AI training, VFX simulation, and massive parallel compute workloads.',
    descriptionDe:
      'Eine Workstation-GPU für KI-Training, VFX-Simulationen und massive parallele Rechenaufgaben.',
    imageUrl: 'https://picsum.photos/seed/gpu4/1200/800',
  },

  /* -----------------------------------------------------------
     MONITORS (9–12)
  ------------------------------------------------------------ */
  {
    id: 9,
    name: 'HoloScreen 4K',
    category: 'Monitors',
    categoryDe: 'Monitore',
    price: 599.99,
    oldPrice: 749.99,
    rating: 4.7,
    description:
      "A 27'' 4K IPS display with holographic depth enhancement and 165Hz refresh for hybrid creative-gaming workflows.",
    descriptionDe:
      "Ein 27''-4K-IPS-Display mit holografischer Tiefenprojektion und 165Hz, ideal für kreative und Gaming-Workflows.",
    imageUrl: 'https://picsum.photos/seed/monitor1/1200/800',
  },
  {
    id: 10,
    name: 'HoloScreen UltraWide 34',
    category: 'Monitors',
    categoryDe: 'Monitore',
    price: 899.99,
    rating: 4.8,
    description:
      "An ultrawide 34'' curved display with cinematic color, 165Hz refresh, and pro-grade calibration.",
    descriptionDe:
      "Ein 34''-Curved-Display mit kinoreichen Farben, 165Hz und professioneller Kalibrierung.",
    imageUrl: 'https://picsum.photos/seed/monitor2/1200/800',
  },
  {
    id: 11,
    name: 'HoloScreen NanoPixel 32',
    category: 'Monitors',
    categoryDe: 'Monitore',
    price: 499.99,
    rating: 4.5,
    description:
      "A crisp 32'' 1440p display using NanoPixel backlighting for ultra-sharp color reproduction.",
    descriptionDe:
      "Ein gestochen scharfes 32''-1440p-Display mit NanoPixel-Beleuchtung für lebendige Farben.",
    imageUrl: 'https://picsum.photos/seed/monitor3/1200/800',
  },
  {
    id: 12,
    name: 'HoloScreen MicroLED 27',
    category: 'Monitors',
    categoryDe: 'Monitore',
    price: 1299.99,
    rating: 4.9,
    description:
      'A MicroLED professional monitor offering extreme contrast and color depth for print-accurate work.',
    descriptionDe:
      'Ein MicroLED-Profi-Monitor mit extremem Kontrast und Farbtreue für druckgenaues Arbeiten.',
    imageUrl: 'https://picsum.photos/seed/monitor4/1200/800',
  },

  /* -----------------------------------------------------------
     PERIPHERALS (13–18)
  ------------------------------------------------------------ */
  {
    id: 13,
    name: 'Photon Mechanical Keyboard',
    category: 'Peripherals',
    categoryDe: 'Peripheriegeräte',
    price: 149.99,
    rating: 4.6,
    description:
      'A responsive optical-switch mechanical keyboard with hot-swappable switches and RGB matrix lighting.',
    descriptionDe:
      'Eine schnelle optomechanische Tastatur mit hot-swappable Switches und RGB-Matrixbeleuchtung.',
    imageUrl: 'https://picsum.photos/seed/peri1/1200/800',
  },
  {
    id: 14,
    name: 'CyberCore Gaming Mouse',
    category: 'Peripherals',
    categoryDe: 'Peripheriegeräte',
    price: 79.99,
    oldPrice: 99.99,
    rating: 4.5,
    description:
      'A 26,000 DPI competitive gaming mouse with adaptive tracking and dual macro panels.',
    descriptionDe: 'Eine 26.000-DPI-Gaming-Maus mit adaptivem Tracking und zwei Makropanels.',
    imageUrl: 'https://picsum.photos/seed/peri2/1200/800',
  },
  {
    id: 15,
    name: 'WavePad Wireless Headset',
    category: 'Peripherals',
    categoryDe: 'Peripheriegeräte',
    price: 129.99,
    rating: 4.7,
    description:
      'A wireless headset with spatial audio and a 40-hour battery for marathon gaming or remote work.',
    descriptionDe:
      'Ein kabelloses Headset mit Raumklang und 40-Stunden-Akku für Gaming oder Home-Office.',
    imageUrl: 'https://picsum.photos/seed/peri3/1200/800',
  },
  {
    id: 16,
    name: 'PulsePad XL Mouse Mat',
    category: 'Peripherals',
    categoryDe: 'Peripheriegeräte',
    price: 49.99,
    rating: 4.4,
    description: 'An extended hybrid-surface mouse mat with RGB edges and anti-slip base.',
    descriptionDe:
      'Eine große Hybrid-Oberflächen-Mausmatte mit RGB-Kanten und rutschfester Unterseite.',
    imageUrl: 'https://picsum.photos/seed/peri4/1200/800',
  },
  {
    id: 17,
    name: 'NebulaMic USB Microphone',
    category: 'Peripherals',
    categoryDe: 'Peripheriegeräte',
    price: 159.99,
    rating: 4.8,
    description: 'A studio-grade USB microphone with noise shaping and real-time monitoring.',
    descriptionDe: 'Ein Studio-USB-Mikrofon mit Geräuschunterdrückung und Echtzeit-Monitoring.',
    imageUrl: 'https://picsum.photos/seed/peri5/1200/800',
  },
  {
    id: 18,
    name: 'QuantumCam 4K Pro',
    category: 'Peripherals',
    categoryDe: 'Peripheriegeräte',
    price: 139.99,
    rating: 4.6,
    description: 'A 4K HDR webcam with AI auto-framing and low-light enhancement.',
    descriptionDe: 'Eine 4K-HDR-Webcam mit KI-Auto-Framing und verbesserter Low-Light-Performance.',
    imageUrl: 'https://picsum.photos/seed/peri6/1200/800',
  },

  /* -----------------------------------------------------------
     STORAGE & COOLING & CASES (19–24)
  ------------------------------------------------------------ */
  {
    id: 19,
    name: 'PulseDrive NVMe 2TB',
    category: 'Storage',
    categoryDe: 'Speicher',
    price: 229.99,
    rating: 4.9,
    description:
      'A PCIe 5.0 NVMe SSD delivering 13,500MB/s read speeds for massive workloads and instant boot times.',
    descriptionDe:
      'Eine PCIe-5.0-NVMe-SSD mit 13.500MB/s Lesegeschwindigkeit für große Workloads und ultraschnelles Booten.',
    imageUrl: 'https://picsum.photos/seed/storage1/1200/800',
  },
  {
    id: 20,
    name: 'PulseDrive Mini 1TB',
    category: 'Storage',
    categoryDe: 'Speicher',
    price: 119.99,
    rating: 4.7,
    description:
      'A compact high-speed SSD ideal for portable editing setups and console expansion.',
    descriptionDe:
      'Eine kompakte Hochgeschwindigkeits-SSD, ideal für mobiles Editing und Konsolenspeicher.',
    imageUrl: 'https://picsum.photos/seed/storage2/1200/800',
  },
  {
    id: 21,
    name: 'CoreWave Liquid 360',
    category: 'Cooling',
    categoryDe: 'Kühlung',
    price: 169.99,
    rating: 4.8,
    description: 'A 360mm liquid cooler with holographic pump display and ultra-quiet fans.',
    descriptionDe:
      'Ein 360-mm-Wasserkühler mit holografischem Pumpendisplay und sehr leisen Lüftern.',
    imageUrl: 'https://picsum.photos/seed/cooling1/1200/800',
  },
  {
    id: 22,
    name: 'CoreWave AirFlow Max',
    category: 'Cooling',
    categoryDe: 'Kühlung',
    price: 99.99,
    rating: 4.6,
    description:
      'A high-performance air cooler with dual-tower heat pipes and reactive fan curves.',
    descriptionDe:
      'Ein Hochleistungs-Luftkühler mit Dual-Tower-Heatpipes und reaktiven Lüfterkurven.',
    imageUrl: 'https://picsum.photos/seed/cooling2/1200/800',
  },
  {
    id: 23,
    name: 'AeroCool Crystal ATX',
    category: 'PC Cases',
    categoryDe: 'PC-Gehäuse',
    price: 129.99,
    rating: 4.7,
    description:
      'A tempered-glass ATX mid-tower with optimized airflow and modular storage layout.',
    descriptionDe:
      'Ein ATX-Mid-Tower aus gehärtetem Glas mit optimiertem Airflow und modularem Speicherlayout.',
    imageUrl: 'https://picsum.photos/seed/case1/1200/800',
  },
  {
    id: 24,
    name: 'AeroCool Quantum Mini',
    category: 'PC Cases',
    categoryDe: 'PC-Gehäuse',
    price: 109.99,
    rating: 4.5,
    description:
      'A compact ITX chassis with RGB side panels, flexible cooling support, and hidden cable routing.',
    descriptionDe:
      'Ein kompaktes ITX-Gehäuse mit RGB-Seitenteilen, flexibler Kühlung und versteckter Kabelführung.',
    imageUrl: 'https://picsum.photos/seed/case2/1200/800',
  },
];
