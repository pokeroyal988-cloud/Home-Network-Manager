import React, { useState } from 'react';
import { NetworkDevice, DeviceType } from '../types';
import { Copy, Eye, EyeOff, ExternalLink, Router, Wifi, Check, Shield, Globe } from 'lucide-react';

interface DeviceCardProps {
  device: NetworkDevice;
}

const DeviceCard: React.FC<DeviceCardProps> = ({ device }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const isMain = device.type === DeviceType.MAIN_ROUTER;
  const dashboardUrl = `http://${device.ip}`;

  return (
    <div className="group relative bg-white rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col h-full">
      {/* Top Banner Accent */}
      <div className={`h-2 w-full ${isMain ? 'bg-indigo-500' : 'bg-teal-500'}`}></div>
      
      <div className="p-6 flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm ${
              isMain ? 'bg-indigo-50 text-indigo-600' : 'bg-teal-50 text-teal-600'
            }`}>
              {isMain ? <Router size={24} /> : <Wifi size={24} />}
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-lg leading-tight">{device.name}</h3>
              <span className={`inline-flex items-center mt-1 text-xs font-medium px-2 py-0.5 rounded-full ${
                isMain ? 'bg-indigo-50 text-indigo-700' : 'bg-teal-50 text-teal-700'
              }`}>
                {isMain ? 'Gateway Chính' : 'Mesh Node'}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
          </div>
        </div>

        <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">
          {device.description}
        </p>

        {/* Credentials Box */}
        <div className="bg-slate-50 rounded-xl p-4 space-y-3 border border-slate-100">
          {/* IP Address */}
          <div className="flex items-center justify-between group/item">
            <div className="flex items-center gap-2">
              <Globe size={14} className="text-slate-400" />
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">IP Address</span>
            </div>
            <span className="font-mono text-slate-700 font-medium text-sm">{device.ip}</span>
          </div>

          <div className="h-px bg-slate-200 w-full"></div>

          {/* Username */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-slate-400" />
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Username</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-700 font-medium text-sm">{device.username}</span>
              <button 
                onClick={() => handleCopy(device.username, 'username')}
                className="text-slate-400 hover:text-indigo-600 transition-colors"
                title="Copy username"
              >
                {copiedField === 'username' ? <Check size={14} className="text-emerald-500"/> : <Copy size={14} />}
              </button>
            </div>
          </div>

          <div className="h-px bg-slate-200 w-full"></div>

          {/* Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full border border-slate-400 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
              </div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Password</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-700 font-medium font-mono text-sm tracking-wide">
                {showPassword ? device.pass : '••••••••'}
              </span>
              <button 
                onClick={() => setShowPassword(!showPassword)}
                className="text-slate-400 hover:text-indigo-600 transition-colors"
              >
                {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
              <button 
                onClick={() => handleCopy(device.pass, 'password')}
                className="text-slate-400 hover:text-indigo-600 transition-colors"
              >
                {copiedField === 'password' ? <Check size={14} className="text-emerald-500"/> : <Copy size={14} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-4 pt-0">
        <a 
          href={dashboardUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 transform active:scale-[0.98] ${
            isMain 
              ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200' 
              : 'bg-white border-2 border-slate-100 hover:border-teal-500 hover:text-teal-600 text-slate-600'
          }`}
        >
          Truy cập quản lý
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default DeviceCard;