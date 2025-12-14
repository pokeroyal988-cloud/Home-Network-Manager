import React from 'react';
import { Globe, Router, Wifi, ArrowRight } from 'lucide-react';

const NetworkTopology: React.FC = () => {
  return (
    <div className="w-full bg-white/60 backdrop-blur-sm rounded-3xl shadow-sm border border-slate-200/60 p-10 mb-10 overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      
      <div className="text-center mb-10">
        <h2 className="text-xl font-bold text-slate-800">Sơ đồ kết nối mạng</h2>
        <p className="text-slate-500 text-sm mt-1">Trực quan hóa luồng dữ liệu trong hệ thống</p>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-0 relative max-w-4xl mx-auto">
        
        {/* Connection Lines (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-16 right-16 h-0.5 bg-slate-200 -z-10 -translate-y-1/2 overflow-hidden">
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-indigo-400 to-transparent w-20 animate-[shimmer_2s_infinite] absolute"></div>
        </div>
        
        {/* Connection Lines (Mobile) */}
        <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -z-10 -translate-x-1/2"></div>

        {/* Nodes */}
        
        {/* Internet */}
        <div className="flex flex-col items-center group relative z-10 px-4 md:px-0 mb-8 md:mb-0">
            <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-100 shadow-lg shadow-slate-200/50 flex items-center justify-center text-indigo-500 group-hover:scale-110 group-hover:border-indigo-200 transition-all duration-300">
                <Globe size={28} strokeWidth={1.5} />
            </div>
            <div className="mt-3 text-center bg-white/80 backdrop-blur rounded-lg px-3 py-1">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">ISP</span>
                <span className="text-sm font-bold text-slate-800">Internet</span>
            </div>
        </div>

        {/* Connector Arrow */}
        <div className="hidden md:flex flex-1 items-center justify-center text-slate-300">
            <ArrowRight size={20} className="animate-pulse" />
        </div>

        {/* Main Router */}
        <div className="flex flex-col items-center group relative z-10 px-4 md:px-0 mb-8 md:mb-0">
             <div className="relative">
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                </span>
                <div className="w-20 h-20 rounded-2xl bg-indigo-600 shadow-xl shadow-indigo-200 flex items-center justify-center text-white group-hover:scale-105 transition-all duration-300 ring-4 ring-white">
                    <Router size={32} strokeWidth={1.5} />
                </div>
             </div>
            <div className="mt-4 text-center">
                <span className="text-sm font-bold text-slate-800 block">Router Tổng</span>
                <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md mt-1 inline-block">192.168.1.1</span>
            </div>
        </div>

        {/* Connector Arrow */}
        <div className="hidden md:flex flex-1 items-center justify-center text-slate-300">
             <ArrowRight size={20} className="animate-pulse" />
        </div>

        {/* Mesh 1 */}
        <div className="flex flex-col items-center group relative z-10 px-4 md:px-0 mb-8 md:mb-0">
             <div className="w-16 h-16 rounded-2xl bg-white border-2 border-teal-100 shadow-lg shadow-teal-100/50 flex items-center justify-center text-teal-600 group-hover:scale-110 group-hover:border-teal-200 transition-all duration-300 ring-4 ring-white">
                <Wifi size={28} strokeWidth={1.5} />
            </div>
            <div className="mt-3 text-center">
                <span className="text-sm font-bold text-slate-800 block">Mesh 1</span>
                <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md mt-1 inline-block">...102.1</span>
            </div>
        </div>

        {/* Connector Arrow */}
        <div className="hidden md:flex flex-1 items-center justify-center text-slate-300">
             <ArrowRight size={20} className="animate-pulse" />
        </div>

        {/* Mesh 2 */}
        <div className="flex flex-col items-center group relative z-10 px-4 md:px-0">
             <div className="w-16 h-16 rounded-2xl bg-white border-2 border-teal-100 shadow-lg shadow-teal-100/50 flex items-center justify-center text-teal-600 group-hover:scale-110 group-hover:border-teal-200 transition-all duration-300 ring-4 ring-white">
                <Wifi size={28} strokeWidth={1.5} />
            </div>
            <div className="mt-3 text-center">
                <span className="text-sm font-bold text-slate-800 block">Mesh 2</span>
                <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md mt-1 inline-block">...102.10</span>
            </div>
        </div>

      </div>
      
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
};

export default NetworkTopology;