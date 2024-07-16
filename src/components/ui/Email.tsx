import { EmailProp } from '@/@types';

const Email: React.FC<EmailProp> = ({ mail }) => {
  return (
    <>
      <a
        className="text-right md:leading-5 lg:leading-6 outline-none shadow-none hover:underline focus:underline hover:transition-all hover:duration-150 ease-in-out focus:transition-all focus:duration-150"
        href={`mailto:${mail}`}
      >
        {mail}
      </a>
    </>
  );
};

export default Email;
