'use client';

import React, { useState } from 'react';
import { 
  ChevronDown, Shield, Lock, HardDrive, CheckCircle, 
  MessageSquare, Upload, FileKey2, Download, Mail, ArrowRight 
} from 'lucide-react';
import Link from 'next/link'; 

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is steganography and how does it work?",
      answer: "Steganography is the practice of concealing a secret message, file, or data within an ordinary, non-secret file or message to avoid detection. Unlike encryption, which scrambles data so it can't be read, steganography hides the very existence of the data. Our app uses advanced LSB (Least Significant Bit) injection to hide your data inside images without altering their visible quality."
    },
    {
      question: "How secure is SteganoVault's service?",
      answer: "Highly secure. We utilize LSB pixel manipulation combined with delimiter structuring. The file visually remains identical. Because our tool processes everything locally in your browser, there is no network interception risk."
    },
    {
      question: "What file formats does SteganoVault support?",
      answer: "Currently, we support PNG and JPG formats for our core visual steganography engine. Note that downloading the secured file will automatically convert it to PNG to prevent lossy compression from destroying your secret data."
    },
    {
      question: "Is my data stored on your servers?",
      answer: "No. SteganoVault is a 100% client-side application. All processing and encoding happen directly inside your web browser's memory using HTML5 Canvas APIs. We never see, store, or transmit your files or secret messages."
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-slate-200 font-sans overflow-x-hidden selection:bg-fuchsia-500/30">
      
      {/* Background Glowing Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-fuchsia-600/10 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-600/10 blur-[120px] pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Shield className="w-8 h-8 text-fuchsia-500" />
          <span className="text-2xl font-bold tracking-wider text-white">SteganoVault</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        
        {/* UPDATED LINK */}
        <Link href="/Secure" className="px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 rounded-full shadow-[0_0_20px_rgba(217,70,239,0.3)] transition-all">
          Launch App
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm mb-8">
          <span className="text-xl">👋</span> Say hello to total privacy
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          The future of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
            STEGANOGRAPHY
          </span> <br />
          is here
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          {/* UPDATED LINK */}
          <Link href="/Secure" className="px-8 py-3 rounded-lg bg-white text-black font-bold hover:bg-slate-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center gap-2">
            Get started <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="#about" className="px-8 py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/5 transition-colors">
            How it works
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mt-24 pt-12 border-t border-white/10 w-full max-w-4xl">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white mb-1">100%</span>
            <span className="text-sm text-slate-400">Local Processing</span>
          </div>
          <div className="flex flex-col items-center md:border-l md:border-r border-white/10">
            <span className="text-3xl font-bold text-white mb-1">250ms</span>
            <span className="text-sm text-slate-400">Average Speed</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white mb-1">Zero</span>
            <span className="text-sm text-slate-400">Server Logs</span>
          </div>
        </div>
      </section>

      {/* About / How it Works Section */}
      <section id="about" className="relative z-10 bg-[#111116] py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h3 className="text-fuchsia-500 font-bold tracking-widest uppercase text-sm mb-4">About the Engine</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How SteganoVault Works</h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We leverage browser-native HTML5 Canvas APIs to perform Least Significant Bit (LSB) steganography entirely on your device. Your data never leaves your computer, ensuring absolute military-grade operational security.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-fuchsia-500/20 via-cyan-500/20 to-fuchsia-500/20 -translate-y-1/2 z-0" />
            
            {/* Step 1 */}
            <div className="relative z-10 bg-[#1a1b26] p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-fuchsia-500/20 rounded-2xl flex items-center justify-center mb-6 border border-fuchsia-500/30">
                <Upload className="w-8 h-8 text-fuchsia-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">1. Upload Image</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Select any standard JPG or PNG image. The image acts as the carrier vessel, providing millions of pixels where data can be seamlessly hidden.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 bg-[#1a1b26] p-8 rounded-3xl border border-cyan-500/30 flex flex-col items-center text-center shadow-[0_0_30px_rgba(6,182,212,0.1)] hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/30">
                <FileKey2 className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">2. Inject Data</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Type your secret message. Our engine converts it to binary and replaces the least significant bits of the image's pixels—invisible to the human eye.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 bg-[#1a1b26] p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/30">
                <Download className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">3. Export & Share</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Download the newly secured PNG. To anyone else, it's just a normal picture. But loaded back into SteganoVault, the hidden message is revealed.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            {/* UPDATED LINK */}
            <Link href="/Secure" className="inline-flex items-center gap-2 text-fuchsia-400 font-bold hover:text-fuchsia-300 transition-colors">
              Try the tool now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Factors / Features */}
      <section id="features" className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-20">The SteganoVault Advantage</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {/* Factor 1 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-transparent border border-fuchsia-500/30 flex items-center justify-center mb-4 relative overflow-hidden group">
               <Shield className="w-10 h-10 text-fuchsia-400 z-20 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h3 className="text-2xl font-bold text-white">Visual Robustness</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              The embedded file appears to be entirely ordinary. Without mathematical analysis, there are zero visible signs of alteration, ensuring stealthy transmission.
            </p>
          </div>

          {/* Factor 2 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent border border-cyan-500/30 flex items-center justify-center mb-4 relative overflow-hidden group">
               <Lock className="w-10 h-10 text-cyan-400 z-20 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h3 className="text-2xl font-bold text-white">Air-Gapped Security</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              By running 100% in your browser without backend calls, you can safely encode messages even while completely disconnected from the internet.
            </p>
          </div>

          {/* Factor 3 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/30 flex items-center justify-center mb-4 relative overflow-hidden group">
               <HardDrive className="w-10 h-10 text-purple-400 z-20 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h3 className="text-2xl font-bold text-white">High Capacity</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Our refined LSB algorithm maximizes the use of image data arrays, enabling you to hide thousands of words of text within standard resolution images seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 max-w-3xl mx-auto px-6 py-24 border-t border-white/5">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/10 bg-[#13111c] rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none group hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-lg font-medium text-slate-200 group-hover:text-fuchsia-400 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-fuchsia-500' : ''}`} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out bg-black/20 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-400 leading-relaxed px-6 pb-6 pt-2">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 bg-[#0d0b14] py-32 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Left Info Area */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's talk about <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">Security.</span></h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Whether you have a question about the cryptographic algorithms used, need help integrating our tool into your workflow, or just want to report a bug, our team is ready to listen.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:hyperwaqar@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-fuchsia-400 transition-colors group">
                  <div className="w-12 h-12 bg-[#1a1b26] border border-white/10 rounded-full flex items-center justify-center group-hover:border-fuchsia-500/50 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-lg">hyperwaqar@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Right Form Area */}
            <div className="bg-[#13111c] border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-fuchsia-600/10 blur-3xl rounded-full pointer-events-none" />
              
              <form onSubmit={(e) => e.preventDefault()} className="relative z-10 flex flex-col gap-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-[#1a1b26] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-fuchsia-500 transition-colors"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-[#1a1b26] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="How can we help you?" 
                    className="w-full bg-[#1a1b26] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-fuchsia-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button className="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                  <MessageSquare className="w-5 h-5" /> Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-10 text-center flex flex-col items-center bg-[#050505]">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-5 h-5 text-fuchsia-500" />
          <span className="font-bold tracking-wider text-white">SteganoVault</span>
        </div>
        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} SteganoVault. All rights reserved.</p>
        <div className="flex gap-4 mt-6 text-slate-600 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}