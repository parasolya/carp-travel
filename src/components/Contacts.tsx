import ContactsEmails from './ContactsEmails';
import ContactsPhoneNumbers from './ContactsPhoneNumbers';
import ContactsSocials from './ContactsSocials';

const Contacts: React.FC = () => {
  return (
    <div className="lg:h-full lg:w-full mt-12 md:mt-10">
      <h2 className="hidden">Contacts</h2>
      <div className="lg:h-full lg:w-full md:flex lg:flex-col lg:justify-between items-start lg:items-start gap-14 ">
        <div className=" md:w-1/2 lg:w-full mb-8 md:mb-0  flex flex-col gap-8">
          <ContactsPhoneNumbers />
          <ContactsEmails />
        </div>
        <ContactsSocials />
      </div>
    </div>
  );
};

export default Contacts;
