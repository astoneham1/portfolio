import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="pt-20 pb-0 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold gradient-text inline-block mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to work together!
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            Based in Edinburgh & St Andrews, Scotland
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Open to remote work in the UK
          </p>
          <h3 className="text-4xl font-bold gradient-text">
            me@alexstoneham.co.uk
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Contact;