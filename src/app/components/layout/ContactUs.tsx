import React from 'react';
import Contacts from './Contacts';
import FormContacts from './FormContacts';

function ContactUs() {
  return (
    <section id="contacts" className="box-border md:px-8 md:py-16 lg:px-20 lg:py-16 lg:flex items-center justify-center bg-cover bg-center" style={{backgroundImage: 'url(/bg-contact-us.png)'}}>
      <h1 className="md:w-2/3 lg:w-3/4 font-thin md:text-7xl lg:text-8xl tracking-tight leading-none uppercase">
      Contact <span className="font-medium ">us</span>
        </h1>
        <Contacts />
        <FormContacts />
    </section>
  );
}

export default ContactUs;