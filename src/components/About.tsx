import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Server, Database, Layout } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const techStack: { icon: React.ElementType; title: string; items: string[] }[] = [
  {
    icon: Code,
    title: 'Languages',
    items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'Lua']
  },
  {
    icon: Layout,
    title: 'Frontend',
    items: ['React', 'Tailwind CSS', 'HTML', 'CSS', 'Java Swing (desktop UI)']
  },
  {
    icon: Server,
    title: 'Backend',
    items: ['Java (Spring Boot)', 'Node.js']
  },
  {
    icon: Database,
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite']
  }
];


const AboutItem = ({ icon: Icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Card 
      ref={ref}
      className={`bg-card p-6 rounded-lg border border-border transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-portfolio-accent/10 p-2 text-portfolio-accent">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-foreground tracking-tight">{title}</h3>
            <div className="text-foreground">{children}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold gradient-text inline-block mb-4 tracking-tight">About Me</h2>
          <p className="text-foreground max-w-2xl mx-auto">
            I got into coding because I liked solving problems and making things on the computer.
            Starting with basic code and working up to full apps, I’ve enjoyed learning how to build
            things that work well and are easy to use.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <AboutItem icon={Layout} title="Frontend Development">
              I really enjoy the creative side of frontend development, mixing code with design to build clean, responsive websites. I use tools like React and modern CSS to make interfaces that work well on any device, and I especially like adding the small animations and interactive touches that make an app feel polished and intuitive.
          </AboutItem>
          
          <AboutItem icon={Server} title="Backend Development">
              My interest in building full applications has led me to focus on backend development with Java and the Spring Framework. I've been diving into key topics like OOP and multithreading, and using Spring Boot to build more solid, complex apps. I'm also getting more comfortable working with databases like MySQL and PostgreSQL to handle data effectively.
          </AboutItem>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-2 text-center gradient-text tracking-tight">Tech Stack</h3>
          <div className="h-1 w-16 bg-portfolio-accent/70 mx-auto rounded mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {techStack.map((group, idx) => (
              <Card key={idx} className="bg-card p-6 rounded-lg border border-border hover:bg-secondary/50 transition-all">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-portfolio-accent/10 p-2 text-portfolio-accent">
                      {(() => { const Icon = group.icon as React.ElementType; return <Icon className="h-6 w-6" />; })()}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-foreground tracking-tight">{group.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <Badge key={item} variant="secondary" className="bg-secondary text-secondary-foreground">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6">
            <h4 className="text-2xl font-bold mb-2 text-center gradient-text tracking-tight">Currently Studying</h4>
            <div className="h-1 w-16 bg-portfolio-accent/70 mx-auto rounded mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card p-6 rounded-lg border border-border hover:bg-secondary/50 transition-all">
                <CardContent className="p-0">
                  <h5 className="text-base font-semibold mb-2 text-foreground tracking-tight">CS Fundamentals</h5>
                  <p className="text-foreground/90 mb-3">
                    Building a solid foundation in core computer science concepts and problem solving.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-foreground/90">
                    <li>Data structures: arrays, linked lists, stacks, queues</li>
                    <li>Algorithms: sorting, complexity and analysis</li>
                    <li>Grammars and finite state machines</li>
                    <li>Test-driven development and design patterns</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-card p-6 rounded-lg border border-border hover:bg-secondary/50 transition-all">
                <CardContent className="p-0">
                  <h5 className="text-base font-semibold mb-2 text-foreground tracking-tight">Web & Networks</h5>
                  <p className="text-foreground/90 mb-3">
                    Understanding how the web works from the browser to the server and across the network.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-foreground/90">
                    <li>HTML/CSS and JavaScript fundamentals</li>
                    <li>DOM and object-oriented programming</li>
                    <li>Web architecture and the client–server model</li>
                    <li>Internet protocols: HTTP, TCP/UDP, and communication models</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
