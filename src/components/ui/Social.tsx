import { SocialProp } from '@/@types';

const Social: React.FC<SocialProp> = ({ social }) => {
  return (
    <>
      <a
        className=" md:leading-5 lg:leading-6 outline-none shadow-none hover:underline focus:underline hover:transition-all hover:duration-150 ease-in-out focus:transition-all focus:duration-150"
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        {social}
      </a>
    </>
  );
};

export default Social;
