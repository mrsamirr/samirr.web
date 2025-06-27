'use client';
import { FileTextIcon } from 'lucide-react';



export const HeroButton = () => {
    const handleClick = () => {
        window.open('https://drive.google.com/file/d/1out5HuaEUQvUtAvL44EnYbOgr1BGWtxt/view?usp=drive_link', '_blank');
    }
    return <button onClick={handleClick} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-2xl border dark:border-slate-800 dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] dark:bg-[length:200%_100%] border-slate-00 bg-[linear-gradient(110deg,#f3f4f6,45%,#e5e7eb,55%,#f3f4f6)] bg-[length:200%_100%]
 px-6 font-medium dark:text-slate-400 transition-colors focus:outline-none focus:ring-2 dark:focus:ring-slate-400 focus:ring-offset-2 dark:focus:ring-offset-slate-50">
    <span>view resume</span> <FileTextIcon />
    </button>
}

