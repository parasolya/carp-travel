import { PhoneNumberProp } from "@/@types";


const PhoneNumber: React.FC<PhoneNumberProp> = ( { phone }) => {
  return (
    <>
      <a
        className="md:leading-5 lg:leading-6 outline-none shadow-none hover:underline focus:underline hover:transition-all hover:duration-150 ease-in-out focus:transition-all focus:duration-150"
        href="tel:+380961234567"
      >
        {phone}
      </a>
    </>
  );
};

export default PhoneNumber;
