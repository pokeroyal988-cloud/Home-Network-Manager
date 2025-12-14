import React from 'react';
import { NETWORK_DEVICES } from './constants';
import DeviceCard from './components/DeviceCard';
import NetworkTopology from './components/NetworkTopology';
import { ShieldCheck, Info, Activity } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative selection:bg-indigo-100 selection:text-indigo-900 pb-20">
      
      {/* Background Elements */}
      <div className="fixed inset-0 bg-slate-50 -z-20"></div>
      <div className="fixed top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-indigo-50/80 to-transparent -z-10"></div>
      <div className="fixed -top-40 -right-40 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10 animate-blob"></div>
      <div className="fixed -top-40 -left-40 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10 animate-blob animation-delay-2000"></div>

      {/* Header */}
      <header className="glass-nav sticky top-0 z-50 border-b border-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 p-2.5 rounded-xl shadow-lg shadow-indigo-200">
              <ShieldCheck className="text-white w-6 h-6" strokeWidth={2} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight leading-none">NetManager</h1>
              <span className="text-xs text-slate-500 font-medium tracking-wide">HOME CONTROL CENTER</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white/50 rounded-full border border-white/60">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-600">System Optimal</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Dashboard Title & Intro */}
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Tổng quan mạng</h2>
          <p className="text-slate-500 text-lg">Quản lý các điểm truy cập ZTE và cấu hình hệ thống Mesh WiFi.</p>
        </div>

        {/* Security Alert - Modernized */}
        <div className="bg-indigo-600 rounded-2xl p-1 mb-10 shadow-xl shadow-indigo-200">
            <div className="bg-white rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="p-3 bg-indigo-50 rounded-full text-indigo-600 shrink-0">
                    <Info size={24} />
                </div>
                <div className="flex-1">
                    <h3 className="font-bold text-slate-900">Kết nối nội bộ</h3>
                    <p className="text-slate-600 text-sm mt-1">
                        Để truy cập bảng điều khiển thiết bị, bạn cần kết nối với mạng WiFi <strong>192.168.x.x</strong> tại nhà.
                    </p>
                </div>
                <div className="px-4 py-2 bg-slate-50 rounded-lg text-xs font-mono text-slate-500 border border-slate-100">
                    Local Access Only
                </div>
            </div>
        </div>

        {/* Topology Visualization */}
        <NetworkTopology />

        {/* Device Grid */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Activity className="text-indigo-600" />
            <h2 className="text-xl font-bold text-slate-900">Thiết bị đang hoạt động</h2>
            <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded-full">{NETWORK_DEVICES.length}</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NETWORK_DEVICES.map((device) => (
              <DeviceCard key={device.id} device={device} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-slate-200 pt-8 flex flex-col items-center justify-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Home Network Controller</p>
          <p className="mt-2 text-xs">Dữ liệu an toàn & được lưu trữ cục bộ</p>
        </div>
      </main>
    </div>
  );
};

export default App;