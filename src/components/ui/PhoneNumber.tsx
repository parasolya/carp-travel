import { PhoneNumberProp } from "@/@types";


const PhoneNumber: React.FC<PhoneNumberProp> = ( { phone }) => {
  return (
    <>
      <a
        className="md:leading-5 lg:leading-6 outline-none shadow-none hover:underline transition"
        href={`tel:${phone.replace(/\s+/g, '')}`}
      >
        {phone}
      </a>
    </>
  );
};

export default PhoneNumber;
