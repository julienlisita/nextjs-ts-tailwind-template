import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Next 16 génère/complète AGENTS.md à chaque `next dev` : désactivé (AGENTS.md est écrit à la main)
  agentRules: false,
  images: {
    // Next 16 n'autorise par défaut que quality=75 ; le hero utilise quality={80}
    qualities: [75, 80],
  },
};

export default nextConfig;
