import Image, { StaticImageData } from "next/image";

interface GalleryItemProps {
  title: string;
  description: string[];
  imageUrl: string | StaticImageData;
  width: number;
  height: number;
}

export function GalleryItem({
  title,
  description,
  imageUrl,
  width,
  height,
}: GalleryItemProps) {
  return (
    <div className="break-inside-avoid mb-4 bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        width={width}
        height={height}
        className="w-full h-auto object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <ul className="list-disc list-inside mb-4">
          {description.map((desc, index) => (
            <li key={index} className="text-gray-700">
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
