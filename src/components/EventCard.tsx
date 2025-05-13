
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";

interface EventProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
}

const EventCard = ({ id, title, date, time, location, description, imageUrl }: EventProps) => {
  const [showDialog, setShowDialog] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleRSVP = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send this data to your backend
    console.log({ name, email, eventId: id });
    
    toast.success("Thank you for your RSVP! We look forward to seeing you at the event.");
    setShowDialog(false);
    setName("");
    setEmail("");
  };

  return (
    <>
      <div className="rounded-lg overflow-hidden shadow-lg bg-white transition-transform hover:-translate-y-1">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="p-5">
          <div className="flex items-center mb-3">
            <div className="p-2 bg-church-accent text-white rounded-md mr-3 text-center min-w-14">
              <div className="font-bold text-lg">{date.split(" ")[0]}</div>
              <div className="text-xs">{date.split(" ")[1]}</div>
            </div>
            <h3 className="font-serif text-xl font-semibold text-church-primary">{title}</h3>
          </div>
          
          <div className="mb-4 space-y-2">
            <div className="flex items-center text-church-gray">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {time}
            </div>
            <div className="flex items-center text-church-gray">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {location}
            </div>
          </div>
          
          <Button 
            variant="outline" 
            className="w-full border-church-accent text-church-accent hover:bg-church-accent hover:text-white"
            onClick={() => setShowDialog(true)}
          >
            RSVP
          </Button>
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>RSVP for {title}</DialogTitle>
            <DialogDescription>
              {date} at {time} • {location}
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleRSVP} className="space-y-4 py-4">
            <div className="grid w-full items-center gap-1.5">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input
                required
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors"
              />
            </div>
            
            <div className="grid w-full items-center gap-1.5">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                required
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors"
              />
            </div>
            
            <DialogFooter>
              <Button type="submit" className="bg-church-accent hover:bg-church-accent/90 text-white">
                Confirm RSVP
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EventCard;
