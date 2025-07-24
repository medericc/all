'use client'
 import { useState } from "react";
import { Calendar, Video, Globe, LinkIcon } from "lucide-react";
import { FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const links = [
  {
    title: "Calendrier de Jade",
    url: "",
    icon: <Calendar className="w-5 h-5 mr-4" />,
  },
 
  // {
  //   title: "Dernière vidéo YouTube",
  //   url: "https://youtube.com/ma-video",
  //   icon: <Video className="w-5 h-5 mr-4" />,
  // },
  // {
  //   title: "Mon site principal",
  //   url: "https://monsite.com",
  //   icon: <Globe className="w-5 h-5 mr-4" />,
  // },
  {
    title: "Youtube",
    url: "https://www.youtube.com/@mona_lisa_bk",
    icon: <FaYoutube className="w-5 h-5 mr-4" />,
  },
   {
    title: "Tiktok",
    url: "https://www.tiktok.com/@lena_jade_backcourt",
    icon: <FaTiktok className="w-5 h-5 mr-4" />,
  },
   {
    title: "Instagram",
    url: "https://www.instagram.com/lena_jade_backcourt/",
    icon: <FaInstagram className="w-5 h-5 mr-4" />,
  },
];

export default function HomePage() {

 

const [modalOpen, setModalOpen] = useState(false);


  return (
   <main className="min-h-screen flex flex-col justify-between items-center bg-purple-700 px-6 pt-4 text-white">
  {/* Haut */}
      <div className="flex flex-col items-center justify-center w-full flex-grow ">
        <h1 className="text-4xl font-bold mb-10">Léna et Jade</h1>
        <div className="w-full max-w-md space-y-4">
         {links.map((link, i) => {
  const isDisabled = !link.url;

  return isDisabled ? (
    <button
      key={i}
      onClick={() => setModalOpen(true)}
      className="flex items-center bg-purple-800 hover:bg-purple-800 transition rounded-xl px-4 py-3 text-lg font-medium w-full"
    >
      {link.icon}
      {link.title}
    </button>
  ) : (
    <a
      key={i}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center bg-purple-800 hover:bg-purple-600 transition rounded-xl px-4 py-3 text-lg font-medium"
    >
      {link.icon}
      {link.title}
    </a>
  );
})}

        </div>
      </div>

      {/* Footer */}
    <footer className="w-screen bg-gradient-to-b from-purple-700 to-purple-900 py-6">

<p className="text-sm text-white text-opacity-70 text-center mx-auto w-full max-w-none">
  Fait avec <span className="text-2xl mr-2 ml-1 inline-block relative -bottom-1 text-white font-bold drop-shadow-[0_0_2px_rgba(255,255,255,0.4)] heartbeat">
  &hearts;
</span>

  par <strong>Jade et Léna Fan Page</strong>
</p>


</footer>
<Dialog open={modalOpen} onOpenChange={setModalOpen}>
  <DialogContent className="text-center">
    <DialogHeader>
      <DialogTitle className="text-purple-900 text-2xl">Patiente...</DialogTitle>
    </DialogHeader>
    <p className="text-base text-gray-800">Cette application n&lsquo;est pas encore disponible.</p>
  </DialogContent>
</Dialog>

    </main>
  );
}
