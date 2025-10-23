import React, { useMemo } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import { prefersReducedMotion } from '@/lib/a11y.ts';

export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}


const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl
}) => {
  const altText = useMemo(() => `Screenshot of ${title} – project UI`, [title]);

  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (prefersReducedMotion()) return;
    const card = e.currentTarget as HTMLDivElement;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 6; // tilt range
    const rotateX = ((y / rect.height) - 0.5) * -6;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const onMouseLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const card = e.currentTarget as HTMLDivElement;
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <Card className="project-card bg-card border-border" onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      <div className="relative overflow-hidden h-96">
        <img 
          src={image}
          alt={altText}
          loading="lazy"
          decoding="async"
          width="1280" height="720"
          className="object-cover w-full h-full transition-transform duration-500 will-change-transform"
        />
      </div>
      <CardHeader className="pt-6 pb-2">
        <CardTitle className="text-xl font-bold text-foreground">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/80" tabIndex={0}>
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-foreground">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="me noopener noreferrer"
            aria-label={`View code for ${title} on GitHub (opens in new tab)`}
            className="inline-flex items-center px-2 py-1 text-sm rounded-md hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-portfolio-accent focus-visible:outline-offset-2"
          >
            <Github className="h-4 w-4 mr-2" />
            Code
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title} live site or download (opens in new tab)`}
            className="inline-flex items-center px-2 py-1 text-sm rounded-md ml-auto hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-portfolio-accent focus-visible:outline-offset-2"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            View/Download
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default React.memo(ProjectCard);
