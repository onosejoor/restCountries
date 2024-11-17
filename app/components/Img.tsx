import Image from "next/image";

export default function Img({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      height={1080}
      width={1080}
      alt={alt}
      className={className}
      src={src}
    />
  );
}
