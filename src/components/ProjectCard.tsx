import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

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
  return (
    <Card className="project-card bg-transparent border-gray-800">
      <div className="relative overflow-hidden h-96">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardHeader className="pt-6 pb-2">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-400">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        {githubUrl && (
          <Button variant="ghost" size="sm" className="px-2">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          </Button>
        )}
        {liveUrl && (
          <Button variant="ghost" size="sm" className="px-2 ml-auto">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Project
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
