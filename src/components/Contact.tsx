
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold gradient-text inline-block mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to work together!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Send Me a Message</h3>
            <form className="space-y-4">
              <div>
                <Input 
                  placeholder="Your Name" 
                  className="bg-gray-900 border-gray-800 focus:border-portfolio-accent"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-gray-900 border-gray-800 focus:border-portfolio-accent"
                />
              </div>
              <div>
                <Input 
                  placeholder="Subject" 
                  className="bg-gray-900 border-gray-800 focus:border-portfolio-accent"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  rows={5}
                  className="bg-gray-900 border-gray-800 focus:border-portfolio-accent resize-none"
                />
              </div>
              <Button className="w-full bg-portfolio-accent hover:bg-portfolio-accent-light">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <p className="text-gray-400">
              You can also reach me directly through the following channels:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-gray-900 p-2">
                  <Mail className="h-5 w-5 text-portfolio-accent" />
                </div>
                <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-portfolio-accent">
                  me@alexstoneham.co.uk
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-gray-900 p-2">
                  <Github className="h-5 w-5 text-portfolio-accent" />
                </div>
                <a 
                  href="https://github.com/astoneham1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-portfolio-accent"
                >
                  github.com/astoneham1
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-gray-900 p-2">
                  <Linkedin className="h-5 w-5 text-portfolio-accent" />
                </div>
                <a 
                  href="https://www.linkedin.com/in/alexander-stoneham-03aa70341/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-portfolio-accent"
                >
                  linkedin.com/in/alexander-stoneham
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-gray-900 p-2">
                  <Twitter className="h-5 w-5 text-portfolio-accent" />
                </div>
                <a 
                  href="https://twitter.com/chiefkeykaad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-portfolio-accent"
                >
                  twitter.com/chiefkeykaad
                </a>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-6 mt-8">
              <p className="text-gray-400">
                Based in Edinburgh and St Andrews, Scotland
              </p>
              <p className="text-gray-400 mt-2">
                Available for remote work within the UK
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
