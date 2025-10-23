import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="pt-20 pb-0 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold gradient-text inline-block mb-4">Get In Touch</h2>
          <p className="text-foreground max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to work together!
          </p>
          <p className="text-foreground max-w-2xl mx-auto mt-6">
            Based in Edinburgh & St Andrews, Scotland
          </p>
          <p className="text-foreground max-w-2xl mx-auto mb-6">
            Open to remote work in the UK
          </p>
          <div className="group relative">
            <h3 className="text-2xl md:text-4xl font-bold gradient-text break-all hover:opacity-80 transition-opacity">
              <a href="mailto:me@alexstoneham.co.uk" className="hover:underline focus-visible:outline-2 focus-visible:outline-portfolio-accent focus-visible:outline-offset-2 rounded">
                me@alexstoneham.co.uk
              </a>
            </h3>
            <div className="opacity-0 group-hover:opacity-100 absolute left-1/2 -translate-x-1/2 -bottom-8 transition-opacity text-sm text-foreground/70">
              Send me an email!
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;