
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Server, Palette, Cpu } from 'lucide-react';

const skills = [
  {
    category: "Currently Learning",
    items: ["React", "TypeScript", "Node.js", "Tailwind CSS", "JavaScript"]
  },
  {
    category: "Skills",
    items: ["Java", "Lua", "Python", "Bash", "SQLite", "MongoDB", "HTML", "CSS"]
  },
  {
    category: "Tools",
    items: ["Git", "Firebase", "Linux", "VS Code", "Figma"]
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
          Frontend development has become a strong area of interest for me, driven by a genuine passion for creating 
          engaging and intuitive user experiences. As I continue to build my skills in HTML, CSS, and JavaScript, 
          I'm increasingly fascinated by the intersection of design and functionality. 
          </AboutItem>
          
          <AboutItem icon={Server} title="Backend Development">
          Backend development is an area where I feel confident and continually motivated to grow. 
          With experience in languages like Java, I enjoy designing robust, scalable systems that power applications behind the scenes. 
          I'm particularly interested in how data flows through an application, from server logic to database interactions.
          </AboutItem>
          
          <AboutItem icon={Palette} title="UI/UX Design">
          I've developed a strong interest in UX design because I enjoy thinking from the user's perspective and finding ways to make 
          digital experiences feel natural and intuitive. When working on projects, I focus on how people will interact with the interface 
          and how each decision affects usability. I find it really rewarding to take something complex and simplify it into a clean, user-friendly design. 
          </AboutItem>
          
          <AboutItem icon={Cpu} title="Continuous Learning">
          Technology is constantly evolving, and I'm committed to staying up to date by continuously expanding my knowledge and skill set. 
          Whether it's exploring new frameworks, diving into documentation, or building personal projects to test new concepts, 
          I approach learning with curiosity and enthusiasm. I actively seek out challenges that push me beyond my comfort zone and help me grow as a developer.
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
