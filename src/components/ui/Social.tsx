import { SocialProp } from '@/@types';

const socialUrls: { [key: string]: string } = {
  facebook: 'https://www.facebook.com/',
  youtube: 'https://www.youtube.com/',
  instagram: 'https://www.instagram.com/',  
  tiktok: 'https://www.tiktok.com/',
};


const Social: React.FC<SocialProp> = ({ social }) => {
  const url = socialUrls[social.toLowerCase()] || '#';

  return (
    <>
      <a
        className=" md:leading-5 lg:leading-6 outline-none shadow-none hover:underline focus:underline hover:transition-all hover:duration-150 ease-in-out focus:transition-all focus:duration-150"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social}
      >
        {social}
      </a>
    </>
  );
};

export default Social;
