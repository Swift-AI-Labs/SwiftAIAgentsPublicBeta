import React from "react";
import { ArrowLeft, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export function Sidebar() {
  const navigate = useNavigate();

  return (
    <>
      {/* Mobile Menu Trigger */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] bg-gray-900/95 backdrop-blur-md p-0">
            <MobileSidebar onBack={() => navigate(-1)} />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-[260px] h-full bg-gray-900/50 backdrop-blur-sm border-r border-gray-800 flex-col">
        <div className="p-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        </div>
        
        <div className="flex-1 p-4 relative overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-blue-950/40" />
          
          {/* Technical Highlight Section */}
          <div className="relative z-10 p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 min-h-[400px]">
            <div className="animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent bg-[length:200%_100%] absolute inset-0 rounded-xl" />
            
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Real-Time Intelligence
            </h3>
            
            <div className="space-y-4">
              <div className="relative h-[300px] overflow-hidden">
                <div className="animate-moveUp whitespace-nowrap text-sm text-gray-300/90">
                  Training on daily Solana chain data...
                  <br />
                  Analyzing market trends...
                  <br />
                  Processing DeFi movements...
                  <br />
                  Monitoring NFT activities...
                  <br />
                  Tracking token launches...
                  <br />
                  Analyzing governance proposals...
                  <br />
                  Monitoring liquidity pools...
                  <br />
                  Tracking whale movements...
                  <br />
                  Analyzing cross-chain bridges...
                  <br />
                  Monitoring staking activities...
                  <br />
                  Training on daily Solana chain data...
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-gray-400">Live Training Active</span>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/50">
              <div className="text-2xl font-bold text-blue-400 animate-pulse">24/7</div>
              <div className="text-xs text-gray-400">Continuous Learning</div>
            </div>
            <div className="p-4 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/50">
              <div className="text-2xl font-bold text-purple-400 animate-pulse">100%</div>
              <div className="text-xs text-gray-400">On-Chain Data</div>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="p-4 border-t border-gray-800/50 bg-gradient-to-b from-transparent to-gray-900/50">
          <div className="text-xs text-gray-400 flex justify-between items-center">
            <span>Model Status: </span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Active
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

// Mobile Sidebar Component
function MobileSidebar({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex flex-col h-full bg-gray-900/95">
      <div className="p-4 border-b border-gray-800">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
      </div>
      
      <div className="flex-1 p-4 overflow-auto">
        <div className="space-y-6">
          {/* Technical Highlight Section for Mobile */}
          <div className="relative p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Real-Time Intelligence
            </h3>
            
            <div className="space-y-4">
              <div className="relative h-[200px] overflow-hidden">
                <div className="animate-moveUp whitespace-nowrap text-sm text-gray-300/90">
                  Training on daily Solana chain data...
                  <br />
                  Analyzing market trends...
                  <br />
                  Processing DeFi movements...
                  <br />
                  Monitoring NFT activities...
                  <br />
                  Training on daily Solana chain data...
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-gray-400">Live Training Active</span>
              </div>
            </div>
          </div>

          {/* Mobile Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/50">
              <div className="text-2xl font-bold text-blue-400 animate-pulse">24/7</div>
              <div className="text-xs text-gray-400">Continuous Learning</div>
            </div>
            <div className="p-4 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/50">
              <div className="text-2xl font-bold text-purple-400 animate-pulse">100%</div>
              <div className="text-xs text-gray-400">On-Chain Data</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}