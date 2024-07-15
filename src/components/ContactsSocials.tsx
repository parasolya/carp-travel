import Social from './ui/Social';

const ContactsSocials = () => {
  return (
    <div className="md:w-1/2 lg:w-full flex justify-end md:justify-start lg:justify-center items-start gap-4">
      <h3 className="order-1 md:order-2 lg:w-1/2 lg:text-start text-[12px] md:text-xs font-thin md:leading-5 lg:leading-6">
        Follow us
      </h3>

      <ul className="order-2 md:order-1 lg:w-1/2">
        <li className="cursor-pointer flex justify-end">
          <Social social="facebook" />
        </li>
        <li className="cursor-pointer flex justify-end">
          <Social social="instagram" />
        </li>
        <li className="cursor-pointer flex justify-end">
          <Social social="youtube" />
        </li>
        <li className="flex justify-end">
          <Social social="tiktok" />
        </li>
      </ul>
    </div>
  );
};

export default ContactsSocials;
