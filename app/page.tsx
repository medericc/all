'use client'

import { Calendar, Video, Globe, LinkIcon } from "lucide-react";
import { FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";

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
  return (
   <main className="min-h-screen flex flex-col justify-between items-center bg-purple-800 px-6 pt-6 text-white">
  {/* Haut */}
      <div className="flex flex-col items-center justify-center w-full flex-grow ">
        <h1 className="text-3xl font-bold mb-10">Léna et Jade</h1>
        <div className="w-full max-w-md space-y-4">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-purple-700 hover:bg-purple-600 transition rounded-xl px-4 py-3 text-lg font-medium"
            >
              {link.icon}
              {link.title}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
    <footer className="w-screen bg-gradient-to-b from-purple-800 to-purple-900 py-6">

<p className="text-sm text-white text-opacity-70 text-center mx-auto w-full max-w-none">
  Fait avec  <span className="text-2xl -mt-0.5 mr-1 ml-1 inline-block text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.7)]">&hearts;</span>  par <strong>Jade et Léna Fan Page</strong>
</p>


</footer>

    </main>
  );
}
