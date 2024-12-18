interface AdSidebarProps {
  adCode: string;
  className?: string;
}

export default function AdSidebar({ adCode, className = '' }: AdSidebarProps) {
  return (
    <div 
      className={`w-[300px] h-[600px] flex items-center justify-center bg-gray-100 ${className}`}
      dangerouslySetInnerHTML={{ __html: adCode }}
    />
  );
}