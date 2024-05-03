import React from 'react';
import Contacts from './Contacts';
import FormContacts from './FormContacts';
import Title from './Title';

const ContactUs: React.FC = () => {

  return (
    <section
      id="contacts"
      className="box-border md:h-screen mx-auto px-5 py-16 md:px-8 md:py-16 lg:px-20 lg:py-20 bg-cover bg-center"
      style={{ backgroundImage: 'url(/bg-contact-us.png)' }}
    >
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
    </section>
  );
}

export default ContactUs;
