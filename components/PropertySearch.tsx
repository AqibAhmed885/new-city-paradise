import React from 'react';

const PropertySearch = () => {
  return (
    <div className="w-full bg-[#181818] text-white">
      <div className="w-full max-w-[1400px] mx-auto border-y border-[#333333] flex flex-col md:flex-row items-stretch justify-between">
        <div className="flex w-full overflow-x-auto divide-x divide-[#333333]">
          
          {/* Community */}
          <div className="flex-1 py-3 px-6 min-w-[160px] flex flex-col justify-center cursor-pointer hover:bg-white/5 transition-colors">
            <p className="text-[9px] tracking-[0.15em] text-[#999999] uppercase font-sans mb-1">Community</p>
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-sans">Any</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
          </div>
          
          {/* Property Type */}
          <div className="flex-1 py-3 px-6 min-w-[160px] flex flex-col justify-center cursor-pointer hover:bg-white/5 transition-colors">
            <p className="text-[9px] tracking-[0.15em] text-[#999999] uppercase font-sans mb-1">Property Type</p>
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-sans">Any</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
          </div>

          {/* Bedrooms */}
          <div className="flex-1 py-3 px-6 min-w-[160px] flex flex-col justify-center cursor-pointer hover:bg-white/5 transition-colors">
            <p className="text-[9px] tracking-[0.15em] text-[#999999] uppercase font-sans mb-1">Bedrooms</p>
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-sans">Any</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
          </div>

          {/* Price */}
          <div className="flex-1 py-3 px-6 min-w-[160px] flex flex-col justify-center cursor-pointer hover:bg-white/5 transition-colors">
            <p className="text-[9px] tracking-[0.15em] text-[#999999] uppercase font-sans mb-1">Price</p>
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-sans">Any</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
          </div>
          
          {/* Filter icon */}
          <div className="w-[60px] flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors border-r border-[#333333]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="14" cy="6" r="2"></circle>
              <line x1="4" y1="6" x2="12" y2="6"></line>
              <line x1="16" y1="6" x2="20" y2="6"></line>
              <circle cx="8" cy="14" r="2"></circle>
              <line x1="4" y1="14" x2="6" y2="14"></line>
              <line x1="10" y1="14" x2="20" y2="14"></line>
              <circle cx="17" cy="22" r="2"></circle>
              <line x1="4" y1="22" x2="15" y2="22"></line>
              <line x1="19" y1="22" x2="20" y2="22"></line>
            </svg>
          </div>

          {/* Search Button */}
          <div className="w-[180px] bg-[#425256] hover:bg-[#4d6065] transition-colors flex items-center justify-center cursor-pointer">
            <span className="text-[11px] tracking-[0.2em] uppercase font-medium font-sans">Search</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySearch;
