
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface SermonProps {
  id: string;
  title: string;
  preacher: string;
  date: string;
  imageUrl: string;
  videoUrl: string;
}

const SermonCard = ({ id, title, preacher, date, imageUrl, videoUrl }: SermonProps) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <a 
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-church-accent text-white p-3 rounded-full"
            aria-label="Watch sermon"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="p-5 bg-white">
        <h3 className="font-serif text-xl font-semibold mb-2 text-church-primary">{title}</h3>
        <p className="text-church-gray mb-4">{preacher} - {date}</p>
        <div className="flex justify-between items-center">
          <a 
            href={videoUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-church-accent hover:underline font-medium flex items-center"
          >
            Watch Sermon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SermonCard;
