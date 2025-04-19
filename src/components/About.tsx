import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Server, Palette, Cpu, Book, Terminal, Database, Layout } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "TypeScript", level: "Learning", experience: "Current focus" },
      { name: "Java", level: "Intermediate", experience: "1 year" },
      { name: "Python", level: "Intermediate", experience: "2+ years" },
      { name: "JavaScript", level: "Intermediate", experience: "2+ years" },
      { name: "Lua", level: "Advanced", experience: "4+ years" }
    ]
  },
  {
    category: "Frontend Development",
    items: [
      { name: "React", level: "Learning", experience: "Current focus" },
      { name: "Tailwind", level: "Learning", experience: "Current focus" },
      { name: "Desktop GUI (Java Swing)", level: "Intermediate", experience: "1 year" },
      { name: "HTML", level: "Advanced", experience: "5+ years" },
      { name: "CSS", level: "Advanced", experience: "5+ years" }
    ]
  },
  {
    category: "Backend & Tools",
    items: [
      { name: "Node.js", level: "Learning", experience: "Current focus" },
      { name: "Git", level: "Intermediate", experience: "1 year" },
      { name: "MongoDB", level: "Intermediate", experience: "1 year" },
      { name: "Linux", level: "Intermediate", experience: "2+ years" },
      { name: "SQLite", level: "Advanced", experience: "3+ years" }
    ]
  }
];

const certifications = [
  {
    name: "C Programming",
    provider: "Starting later this year",
    date: "2025"
  },
  {
    name: "Full Stack Development",
    provider: "Currently pursuing",
    date: "Since 2025"
  },
  {
    name: "Java Frontend and Backend Development",
    provider: "Currently pursuing",
    date: "Since 2024"
  },
  {
    name: "Networking",
    provider: "Currently pursuing",
    date: "Since 2023"
  },
  {
    name: "Python",
    provider: "Completed",
    date: "2022/23"
  },
  {
    name: "JavaScript Development",
    provider: "Completed",
    date: "2021/22"
  },
  {
    name: "SQLite",
    provider: "Completed",
    date: "2021"
  },
  {
    name: "HTML/CSS Basics",
    provider: "Currently pursuing",
    date: "2020/21"
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
            <h3 className="text-lg font-medium mb-2 text-foreground">{title}</h3>
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
          <h2 className="text-3xl font-bold gradient-text inline-block mb-4">About Me</h2>
          <p className="text-foreground max-w-2xl mx-auto">
            My journey into development began with a fascination for problem-solving and creating digital experiences. 
            From writing my first lines of code to building full-stack applications, each step has strengthened my 
            passion for crafting efficient, user-friendly solutions that make a difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <AboutItem icon={Layout} title="Frontend Development">
            My approach to frontend development combines technical precision with creative design thinking. 
            I specialize in building responsive, accessible interfaces using React and modern CSS frameworks. 
            I'm particularly passionate about creating smooth animations and micro-interactions that enhance 
            the user experience while maintaining clean, maintainable code.
          </AboutItem>
          
          <AboutItem icon={Server} title="Backend Development">
            I'm taking my first steps into backend development, focusing on Java and Spring Framework. 
            I've been working with core Java concepts like OOP, collections, and multithreading, while also 
            exploring Spring Boot for building robust applications. I'm getting familiar with relational 
            databases like MySQL and PostgreSQL, implementing JPA for data persistence.
          </AboutItem>
          
          <AboutItem icon={Palette} title="UI/UX Design">
            My approach to UI/UX design is guided by user-centered design principles and accessibility standards. 
            Using tools like Figma, I create intuitive interfaces that balance aesthetics with functionality. 
            I regularly conduct user research and testing to ensure my designs meet real user needs while 
            maintaining visual consistency and brand identity. I'm especially interested in creating user interfaces
            that are accessible to users of all ages and abilities by staying simple but effective.
          </AboutItem>
          
          <AboutItem icon={Terminal} title="Continuous Learning">
            Technology evolves rapidly, and I maintain a structured learning approach to stay current. 
            I'm currently deepening my expertise in React and TypeScript through practical projects and 
            online courses, with plans to explore C programming later this year. I actively contribute 
            to open-source projects and participate in coding communities to share knowledge and learn from others.
            I also keep myself updated with the latest trends and best practices in development.
          </AboutItem>
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-center text-foreground">Skills and Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <div key={groupIndex} className="rounded-lg border border-border bg-card p-6 hover:bg-secondary/50 transition-all">
                <h4 className="text-lg font-medium mb-4 text-portfolio-accent">{skillGroup.category}</h4>
                <div className="flex flex-col gap-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="relative">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.experience}</span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full">
                        <div 
                          className="h-full bg-portfolio-accent rounded-full transition-all duration-500"
                          style={{ 
                            width: skill.level === 'Advanced' ? '90%' : 
                                  skill.level === 'Intermediate' ? '60%' : '30%' 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-center text-foreground">Learning Journey</h3>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:bg-secondary/50 transition-all">
                  <div className="rounded-full bg-portfolio-accent/10 p-2">
                    <Book className="h-5 w-5 text-portfolio-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.provider} • {cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
