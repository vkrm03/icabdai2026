import React from 'react';

const themes = [
  { title: 'Biosciences and Biotechnology', tag: 'BIO' },
  { title: 'Bioinformatics and Computational Biology', tag: 'BCB' },
  { title: 'Data Science and Big Data Analytics', tag: 'DSA' },
  { title: 'Cybersecurity and Privacy in Healthcare Data', tag: 'SEC' },
  { title: 'Emerging Technologies in Biosciences, Data Science and AI', tag: 'EMG' },
  { title: 'Intelligent Healthcare Systems', tag: 'IHS' },
  { title: 'Nanobiotechnology', tag: 'NBT' },
  { title: 'Intelligent Systems and Automation', tag: 'ISA' },
  { title: 'Artificial Intelligence in Biotechnology', tag: 'AIB' },
];

export default function Themes() {
  return (
    <section className="relative py-28 px-6 sm:px-8 bg-[#060e24]" id="themes">
      {/* Blueprint Grid Background Pattern from Screenshot 2026-07-06 134332.png */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.12]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(74, 127, 199, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(74, 127, 199, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-[1320px] mx-auto relative z-10">
        
        {/* Balanced Eyebrow Label */}
        <div className="flex justify-center lg:justify-start">
          <p className="inline-flex items-center gap-3 font-sans text-xs font-bold tracking-[0.2em] uppercase text-[#d7ad4b] mb-4 before:content-[''] before:w-8 before:h-px before:bg-[#d7ad4b]">
            Call for papers
          </p>
        </div>
        
        {/* Balanced Section Title */}
        <h2 className="font-serif font-bold text-[#eef3fb] text-3xl sm:text-4xl lg:text-5xl text-center lg:text-left leading-tight m-0 mb-5">
          Conference <span className="text-[#d7ad4b] italic font-normal">themes</span>
        </h2>
        
        {/* Decorative Divider */}
        <hr className="w-20 h-0.5 bg-[#d7ad4b] border-none mx-auto lg:mx-0 my-5 mb-8 rounded-sm" />
        
        {/* Refined Lead Paragraph */}
        <p className="font-sans text-[#9fb0cf] text-base lg:text-[17px] leading-relaxed text-center lg:text-left max-w-[820px] mb-14">
          Authors are invited to submit a one-page abstract of original, unpublished
          research work under any of the following tracks. Accepted abstracts will be
          intimated for full manuscript submission, and peer-reviewed papers will be
          published in indexed journals.
        </p>

        {/* Balanced Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((t) => (
            <div 
              key={t.title} 
              className="bg-[#0d1c42]/80 backdrop-blur-sm border border-[rgba(215,173,75,0.22)] rounded-[16px] p-6 lg:p-7.5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#d7ad4b] hover:shadow-[0_12px_30px_rgba(215,173,75,0.08)]"
            >
              {/* Refined Tag Component */}
              <span className="inline-block font-sans text-[11px] font-bold tracking-widest text-[#d7ad4b] bg-[#142a5c]/40 border border-[rgba(215,173,75,0.25)] rounded-md px-3 py-1 mb-4">
                {t.tag}
              </span>
              
              {/* Refined Track Title */}
              <p className="font-sans text-[#eef3fb] text-lg lg:text-[19px] font-semibold leading-snug m-0">
                {t.title}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}