export interface SalonService {
  id: string;
  name: string;
  category: 'brows' | 'hair' | 'skin' | 'wellness' | 'bridal';
  duration: string;
  price: number;
  description: string;
  popular?: boolean;
}

export interface BridalPackage {
  id: string;
  title: string;
  price: number;
  duration: string;
  description: string;
  includes: string[];
  recommended?: boolean;
}

export const SALON_INFO = {
  name: 'Avalon Unisex Salon',
  shortName: 'Avalon Salon',
  type: 'Premium Salon & Beauty Studio',
  tagline: 'Premier Salon & Beauty Studio in Sector 21C, Chandigarh',
  rating: 4.8,
  totalReviews: '925+',
  reviewsCount: 925,
  phone: '7986516936',
  formattedPhone: '+91 7986516936',
  whatsappUrl: 'https://wa.me/917986516936?text=Hi%20Avalon%20Unisex%20Salon%2C%20I%20would%20like%20to%20book%20an%20appointment.',
  address: {
    shop: 'First Floor, SCO-29',
    area: 'Sector 21C, Sector 21',
    city: 'Chandigarh',
    state: 'Chandigarh',
    pincode: '160022',
    landmark: 'First Floor, SCO-29, Sector 21C Market',
    full: 'First Floor, SCO-29, Sector 21C, Sector 21, Chandigarh - 160022',
    mapsUrl: 'https://maps.google.com/?q=First+Floor+SCO-29+Sector+21C+Sector+21+Chandigarh+160022'
  },
  timings: 'Mon – Sun: 10:00 AM – 8:30 PM',
  heroImage: 'https://i.ibb.co/jkkzTtvB/Screenshot-2026-10-15-16-22-07-364-com-google-android-googlequicksearchbox-edit.jpg',
  featureImage: 'https://i.ibb.co/SDsx2nBr/Screenshot-2026-10-15-16-21-37-767-com-google-android-googlequicksearchbox-edit.jpg'
};

export const SALON_SERVICES: SalonService[] = [
  // 1. Eyebrows & Lashes
  {
    id: 'eyebrow-threading',
    name: 'Eyebrow Threading & Brow Shaping',
    category: 'brows',
    duration: '15 min',
    price: 150,
    description: 'Ultra-precise brow sculpting using organic hypoallergenic thread, finished with calming aloe vera gel.',
    popular: true
  },
  {
    id: 'eyebrow-beautification',
    name: 'Eyebrow Beautification & Tinting',
    category: 'brows',
    duration: '30 min',
    price: 650,
    description: 'Custom tinting, lamination, and symmetrical brow arch definition to create fuller, perfectly groomed arches.',
    popular: true
  },
  {
    id: 'eyelashes',
    name: 'Eyelash Extensions (Classic & Volume)',
    category: 'brows',
    duration: '60 min',
    price: 2499,
    description: 'Feather-light silk/mink lash extensions individually applied for stunning length, dramatic volume, and curl.',
    popular: true
  },
  {
    id: 'permanent-makeup',
    name: 'Permanent Makeup (Microblading & Lip Blush)',
    category: 'brows',
    duration: '90 min',
    price: 6999,
    description: 'Expert semi-permanent cosmetic tattooing including feather-stroke microblading, ombre powder brows, and subtle lip blush.',
    popular: true
  },

  // 2. Hair Styling & Care
  {
    id: 'blow-dry',
    name: 'Blow Dry & Signature Styling',
    category: 'hair',
    duration: '35 min',
    price: 550,
    description: 'Volumizing blowout, Hollywood cascading waves, textured beach curls, or ultra-sleek glass hair finish.',
    popular: true
  },
  {
    id: 'hair-extensions',
    name: '100% Remy Hair Extensions',
    category: 'hair',
    duration: '90 min',
    price: 4999,
    description: 'Premium natural human Remy hair extensions with invisible bead, tape-in, or clip-in application for instant volume and length.',
    popular: true
  },
  {
    id: 'online-salon-booking',
    name: 'Personal Hair Styling & Consultation Slot',
    category: 'hair',
    duration: '45 min',
    price: 650,
    description: 'Precision haircut customized to your face shape and texture, followed by clarifying cleanse, conditioning, and blowout.',
    popular: true
  },
  {
    id: 'keratin-treatment',
    name: 'Keratin Protein Smoothing Treatment',
    category: 'hair',
    duration: '120 min',
    price: 4200,
    description: 'Intensive formaldehyde-free keratin treatment that eliminates frizz, shields against humidity, and imparts mirror gloss.',
    popular: true
  },
  {
    id: 'balayage-ombre',
    name: 'Balayage & Ombre Hair Color',
    category: 'hair',
    duration: '150 min',
    price: 4500,
    description: 'Hand-painted sun-kissed gradient transitions, custom gloss toners, and bond-protecting Olaplex infusion.',
    popular: true
  },

  // 3. Skin & Waxing
  {
    id: 'acne-treatments',
    name: 'Targeted Acne Clearing Treatment',
    category: 'skin',
    duration: '55 min',
    price: 1899,
    description: 'Clinical grade clarifying facial with salicylic-glycolic peel, deep pore vacuuming, high-frequency anti-bacterial therapy, and soothing zinc mask.',
    popular: true
  },
  {
    id: 'brazilian-waxing',
    name: 'Brazilian Waxing (Italian Rica Wax)',
    category: 'skin',
    duration: '35 min',
    price: 1599,
    description: 'Hygienic, strip-less Italian Rica white chocolate wax formulated for delicate skin in spotless, private sanitized suites.',
    popular: true
  },
  {
    id: 'body-waxing',
    name: 'Full Body Waxing (Rica Wax)',
    category: 'skin',
    duration: '75 min',
    price: 2499,
    description: 'Silky smooth, long-lasting hair removal for arms, legs, underarms, and back using gentle anti-irritant wax.',
    popular: true
  },
  {
    id: 'tanning-treatment',
    name: 'Sun Tanning & De-Tan Body Polish',
    category: 'skin',
    duration: '50 min',
    price: 1799,
    description: 'Brightening botanical de-tan treatment that reverses sun damage, pigmentation, and uneven skin tone for an all-over radiant glow.',
    popular: true
  },
  {
    id: 'hydrafacial-glow',
    name: 'HydraFacial Deep Glow Treatment',
    category: 'skin',
    duration: '50 min',
    price: 2699,
    description: 'Vortex vacuum extraction, antioxidant infusion, and hyaluronic acid hydration for instantly plump, camera-ready skin.'
  },

  // 4. Wellness & Bridal
  {
    id: 'relaxing-massage',
    name: 'Relaxing Full Body Wellness Massage',
    category: 'wellness',
    duration: '60 min',
    price: 2199,
    description: 'Therapeutic aromatherapy body massage combining Swedish strokes and pressure points to melt away muscle fatigue and tension.',
    popular: true
  },
  {
    id: 'head-shoulder-massage',
    name: 'Stress Relief Head & Shoulder Massage',
    category: 'wellness',
    duration: '35 min',
    price: 899,
    description: 'Deep restorative head massage with warm herbal oils and shoulder acupressure to alleviate stress and headaches.'
  },
  {
    id: 'wedding-event-prep',
    name: 'Wedding & Event Preparation Makeover',
    category: 'bridal',
    duration: '150 min',
    price: 12500,
    description: 'Complete high-definition bridal makeover with designer hair updo, jewelry setting, luxury lashes, and regal dupatta draping.',
    popular: true
  },
  {
    id: 'party-event-glam',
    name: 'Cocktail & Party Event Glam',
    category: 'bridal',
    duration: '75 min',
    price: 3499,
    description: 'Glow makeup, flawless base, dramatic eye styling, and voluminous blowout for bridesmaids and festive occasions.',
    popular: true
  }
];

export const BRIDAL_PACKAGES: BridalPackage[] = [
  {
    id: 'pre-wedding-ritual',
    title: 'Pre-Wedding & Wellness Ritual',
    price: 8499,
    duration: '2 Days Preparation',
    description: 'Comprehensive head-to-toe beauty rejuvenation before wedding festivities commence.',
    includes: [
      'Full Body Rica Waxing & Threading',
      'Relaxing Full Body Aromatherapy Massage',
      'Targeted Acne Clearing & De-Tan Polishing',
      'HydraFacial Glow Treatment',
      'Luxury Spa Manicure & Pedicure'
    ]
  },
  {
    id: 'royal-hd-bridal',
    title: 'Royal HD Wedding Preparation Package',
    price: 15500,
    duration: 'Main Wedding Day',
    description: 'Our signature bridal experience crafted for high-definition wedding photography and all-day radiance.',
    includes: [
      'HD Bridal Makeup (MAC / Huda Beauty / NARS)',
      'Bridal Hair Styling & Remy Volume Extensions',
      'Dupatta Draping & Royal Silhouette Pinning',
      'Jewelry & Maang Tikka Setting',
      '3D Silk Lashes & Brow Beautification'
    ],
    recommended: true
  },
  {
    id: 'grand-bridal-wellness',
    title: 'Grand Bridal & Wellness Experience',
    price: 21000,
    duration: 'Pre-Wedding + Main Day',
    description: 'The ultimate royal package featuring pre-event relaxing massage, skin polishing, and airbrush bridal artistry.',
    includes: [
      'Complete 60-min Relaxing Body Massage & De-Tan',
      'Waterproof Airbrush Bridal Makeover',
      'Permanent Makeup Touch-up / Brow Beautification',
      'Full Body Waxing & HydraFacial Glow',
      'Luxury Bridal Hair Extensions & On-Site Artist Support'
    ]
  }
];

export const REVIEWS = [
  {
    name: 'Mehak Preet Kaur',
    rating: 5,
    text: 'Avalon Unisex Salon in Sector 21C is fantastic! Got eyebrow beautification and permanent lip blush done. The staff is so gentle and professional.',
    service: 'Eyebrows & Permanent Makeup'
  },
  {
    name: 'Rohan Mehra',
    rating: 5,
    text: 'Booked online salon booking for hair extensions and a blowout for my sister, and I got a relaxing massage. World class hygiene and courteous service in Sector 21.',
    service: 'Hair Extensions & Relaxing Massage'
  },
  {
    name: 'Simran Walia',
    rating: 5,
    text: 'Best salon in Chandigarh for skin & waxing! The acne treatment worked wonders on my breakouts, and Brazilian waxing with Rica wax was virtually painless.',
    service: 'Acne Treatment & Brazilian Waxing'
  },
  {
    name: 'Pooja Aggarwal',
    rating: 5,
    text: 'Selected Avalon for my wedding and event preparation. My bridal makeover and blow dry turned out flawless. Truly worthy of their 4.8 star reputation!',
    service: 'Wedding & Event Preparation'
  }
];
