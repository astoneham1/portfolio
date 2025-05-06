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
      { name: "MongoDB", level: "Intermediate", experience: "1 year" },
      { name: "Linux", level: "Intermediate", experience: "2+ years" },
      { name: "SQLite", level: "Advanced", experience: "3+ years" },
      { name: "Git", level: "Advanced", experience: "5+ years" }
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
    name: "Java Development",
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
    name: "Simple JavaScript",
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
    provider: "Completed",
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
            I got into coding because I liked solving problems and making things on the computer.
            Starting with basic code and working up to full apps, I’ve enjoyed learning how to build
            things that work well and are easy to use.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <AboutItem icon={Layout} title="Frontend Development">
            I like mixing coding with design to build clean, responsive websites.
            I use React and modern CSS tools to make interfaces that work well on any device.
            I especially enjoy adding smooth animations and small interactive touches that make the experience feel better, while keeping my code tidy and easy to manage.
          </AboutItem>
          
          <AboutItem icon={Server} title="Backend Development">
            I’m just getting started with backend development, mainly using Java and the Spring Framework.
            I’ve been learning key Java topics like OOP, collections, and multithreading, and using Spring Boot to build solid apps.
            I’m also working with databases like MySQL and PostgreSQL, using JPA to handle data.
          </AboutItem>
          
          <AboutItem icon={Palette} title="UI/UX Design">
            I focus on designing user-friendly and accessible interfaces.
            I use Figma to create designs that look good and work well, always keeping real users in mind.
            I do user research and testing to make sure my designs are clear, consistent, and easy for everyone to use.
          </AboutItem>
          
          <AboutItem icon={Terminal} title="Continuous Learning">
            Technology changes fast, so I follow a steady learning plan to keep up.
            Right now while university is on break, I’m improving my skills in React and TypeScript by building projects and taking online courses.
            I plan to learn C and further refine my frontend skills later this year when university resumes.
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
