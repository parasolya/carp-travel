import React from 'react';
import Contacts from '../components/Contacts';
import FormContacts from '../components/FormContacts';
import Title from '../components/Title';

const ContactUs: React.FC = () => {
  return (
    <section
      id="contacts"
      className="box-border section bg-cover bg-center bg-no-repeat bg-contactMob sm:bg-contactTab lg:bg-contactDesk"
    >
      <div className="container">
        <div>
          <Title firstWords="Contact" secondWords="us" />
        </div>
        <div className="lg:h-[360px] lg:flex lg:mt-8">
          <div className="lg:w-1/2 lg:h-full">
            <Contacts />
          </div>
          <div className="lg:w-1/2 lg:h-full">
            <FormContacts />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
