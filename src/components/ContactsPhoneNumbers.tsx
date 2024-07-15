import PhoneNumber from './ui/PhoneNumber';

const ContactsPhoneNumbers = () => {
  return (
    <div className=" flex justify-end lg:justify-center items-start gap-4">
    <ul className="lg:w-1/2 list-none text-end items-center">
      <li className="cursor-pointer">
        <PhoneNumber phone="+38 (098) 12 34 567" />
      </li>
      <li className="cursor-pointer">
        <PhoneNumber phone="+38 (073) 12 34 567" />
      </li>
    </ul>
    <h3 className="lg:w-1/2 text-start text-[12px] md:text-xs font-thin md:leading-5 lg:leading-6">
      Phone number
    </h3>
  </div>
  )
}

export default ContactsPhoneNumbers