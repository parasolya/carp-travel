import Image from 'next/image';

type SlideProp = {
  isActive: boolean;
  img: string;
  alt: string;
};

export const GallerySlide: React.FC<SlideProp> = ({ isActive, img, alt }) => {
  return (
    <div
      className={`wrapper relative transition-all duration-[500ms] ease-in-out ${
        isActive
          ? 'w-[415px] h-[294px] lg:w-[606px] lg:h-[429px] opacity-1 before:hidden'
          : 'w-[120px] h-[86px] lg:w-[313px] lg:h-[225px] opacity-0.75'
      } `}
    >
      <Image
        src={img}
        alt={alt}
        fill
        sizes="(max-width: 1279px) 415px, 606px"
        className="object-cover"
        priority
      />
    </div>
  );
};
