import Email from './ui/Email';

const ContactsEmails = () => {
  return (
    <div className=" flex justify-center lg:justify-center items-start gap-4">
    <div className="lg:w-1/2 lg:flex justify-end cursor-pointer">
      <Email mail="support@carptravel.com" />
    </div>

    <h3 className="lg:w-1/2  text-start text-[12px] md:text-xs font-thin md:leading-5 lg:leading-6">
      E-mail
    </h3>
  </div>
  )
}

export default ContactsEmails