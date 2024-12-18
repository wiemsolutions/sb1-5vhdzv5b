interface AdSquareProps {
  adCode: string;
  className?: string;
}

export default function AdSquare({ adCode, className = '' }: AdSquareProps) {
  return (
    <div 
      className={`w-[300px] h-[250px] flex items-center justify-center bg-gray-100 ${className}`}
      dangerouslySetInnerHTML={{ __html: adCode }}
    />
  );
}