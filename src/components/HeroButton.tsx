'use client';
import { ClipboardCopyIcon, FileTextIcon } from 'lucide-react';
import Link from 'next/link';



export const HeroButton = () => {
    const handleClick = () => {
        window.open('https://drive.google.com/file/d/10L-fiJN-Lb2AeRco0YU90duz8T3tdVp9/view?usp=sharing', '_blank');
    }
    return <button onClick={handleClick} className="inline-flex py-2 px-5 sm:py-4 md:py-3 sm:px-7 md:px-9 animate-shimmer items-center text-2xl justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 gap-2">
    <span>view resume</span> <FileTextIcon />
    </button>
}


