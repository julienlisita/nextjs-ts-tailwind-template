// src/components/widgets/ServiceCard.tsx

type ServiceCardProps = {
  icon?: React.ReactNode;
  title: string;
  description: string;
  color: [string, string]; // Dégradé à deux couleurs
};

export default function ServiceCard({ icon, title, description, color }: ServiceCardProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(135deg, ${color[0]}, ${color[1]})`,
  };

  return (
    <div className="w-72 h-80 bg-white text-black rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      {/* Bandeau haut coloré */}
      <div
        className="w-full h-24 flex flex-col items-center justify-center space-y-1 text-white"
        style={gradientStyle}
      >
        {icon && <div className="text-3xl">{icon}</div>}
        <h3 className="text-lg font-semibold text-center">{title}</h3>
      </div>

      {/* Description */}
      <div className="p-6 pt-4 flex flex-col items-center justify-start text-center text-sm text-gray-700">
        {description}
      </div>
    </div>
  );
}