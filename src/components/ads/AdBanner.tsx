interface AdBannerProps {
  adCode: string;
  className?: string;
}

export default function AdBanner({ adCode, className = '' }: AdBannerProps) {
  return (
    <div 
      className={`w-full h-[90px] flex items-center justify-center bg-gray-100 ${className}`}
      dangerouslySetInnerHTML={{ __html: adCode }}
    />
  );
}