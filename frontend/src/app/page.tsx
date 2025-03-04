import { Button } from "@/components/ui/button";
import { Toaster } from 'react-hot-toast';
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Button variant="outline" className="m-4">Click Me</Button>
      <Toaster />
    </div>
  );
}
