export type Therapy = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const popularTherapies: Therapy[] = [
  {
    slug: "deep-tissue",
    title: "Deep Tissue Massage",
    description:
      "Targets deep muscle tension and body stiffness — a restorative full-body ritual.",
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1600&q=85",
  },
  {
    slug: "swedish",
    title: "Full Body Swedish",
    description:
      "Gentle, full-body relaxation — a quiet reset for first-time spa guests.",
    image:
      "https://images.unsplash.com/photo-1620733723572-11c53f73a416?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "aromatherapy",
    title: "Aromatherapy Massage",
    description:
      "Healing essential-oil massage designed to ease mental stress and physical fatigue.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "balinese",
    title: "Full Body Balinese Massage",
    description:
      "Traditional combination massage technique for deep, restorative full-body relaxation.",
    image:
      "https://images.unsplash.com/photo-1542848284-8afa78a08ccb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "hot-stone",
    title: "Hot Stone Therapy",
    description:
      "Warm stones relieve muscle stiffness, improve circulation and ease tension.",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "signature-jacuzzi",
    title: "Signature with Jacuzzi",
    description:
      "Premium hydrotherapy experience — the ultimate Souan luxury ritual.",
    image:
      "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1400&q=85",
  },
];
