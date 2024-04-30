import React from 'react';
import Contacts from './Contacts';
import FormContacts from './FormContacts';
import Title from './Title';

function ContactUs() {
  return (
    <section
      id="contacts"
      className="box-border md:h-screen mx-auto px-5 py-16 md:px-8 md:py-16 lg:px-20 lg:py-16 bg-cover bg-center"
      style={{ backgroundImage: 'url(/bg-contact-us.png)' }}
    >
      <div>
        <Title firstWords="Contact" secondWords="us" />
      </div>
      <Contacts />
      <FormContacts />
    </section>
  );
}

export default ContactUs;
