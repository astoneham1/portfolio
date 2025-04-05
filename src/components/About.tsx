
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Server, Palette, Cpu } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"]
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS", "Firebase", "Figma", "VS Code"]
  }
];

const AboutItem = ({ icon: Icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => (
  <Card className="border-gray-800 bg-gray-900/50 hover:bg-gray-900/80 transition-colors">
    <CardContent className="p-6">
      <div className="flex items-start gap-4">
        <div className="rounded-full bg-portfolio-accent/10 p-2 text-portfolio-accent">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">{title}</h3>
          <div className="text-gray-400">{children}</div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-10 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold gradient-text inline-block mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm an aspiring developer who's passionate to learn and grow in the tech industry.
            I have a strong foundation in both frontend and backend development,
            and I'm always eager to take on new challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <AboutItem icon={Code} title="Frontend Development">
            I create responsive, interactive user interfaces using modern frameworks and libraries. 
            With a strong focus on performance and accessibility, I build web applications that work for everyone.
          </AboutItem>
          
          <AboutItem icon={Server} title="Backend Development">
            I design and implement robust APIs, database architectures, and server-side applications.
            My backend solutions are secure, scalable, and built with best practices in mind.
          </AboutItem>
          
          <AboutItem icon={Palette} title="UI/UX Design">
            I have a passion for clean, intuitive designs that enhance user experience. 
            I work to create interfaces that are not just functional, but delightful to use.
          </AboutItem>
          
          <AboutItem icon={Cpu} title="Continuous Learning">
            Technology evolves rapidly, and I'm committed to growing with it. 
            I constantly explore new tools, languages, and frameworks to expand my skill set.
          </AboutItem>
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-center">Skills & Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <div key={groupIndex} className="gradient-border p-6">
                <h4 className="text-lg font-medium mb-4 text-portfolio-accent">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="inline-block px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
