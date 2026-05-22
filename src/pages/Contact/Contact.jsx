import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    // Main Canvas: Swapped out the old cream tint for the striking deep electric purple layout background
    <div className="bg-gradient-to-r from-green-200 to-blue-500 text-white min-h-screen pt-28 pb-16 font-sans selection:bg-purple-900/30">
      
      {/* SECTION 1: Our Location & Info Cards */}
      <section className="max-w-6xl mx-auto px-4 text-center mb-20">
        <span className="text-purple-200 text-xs font-bold tracking-widest block mb-2 uppercase opacity-90">
          --- Visit Us ---
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold uppercase tracking-wider text-white border-b-2 border-white/20 max-w-xs mx-auto pb-4 mb-12">
          Our Location
        </h2>

        {/* 3-Column Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-purple-950/20 border border-purple-400/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            {/* Top icon headers match the bold branding colors of the reference map layout */}
            <div className="bg-[#7C3AED] py-5 flex justify-center text-white text-xl shadow-md">
              <FaPhoneAlt />
            </div>
            <div className="p-6 h-36 flex flex-col justify-center items-center bg-white">
              <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-900 mb-2">
                Phone
              </h4>
              <p className="text-xs text-neutral-600 font-semibold tracking-wide">+38 012 34 56 789</p>
            </div>
          </div>

          {/* Address Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-purple-950/20 border border-purple-400/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="bg-[#7C3AED] py-5 flex justify-center text-white text-xl shadow-md">
              <FaMapMarkerAlt />
            </div>
            <div className="p-6 h-36 flex flex-col justify-center items-center bg-white">
              <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-900 mb-2">
                Address
              </h4>
              <p className="text-xs text-neutral-600 font-semibold tracking-wide">+38 012 34 56 789</p>
            </div>
          </div>

          {/* Working Hours Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-purple-950/20 border border-purple-400/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="bg-[#7C3AED] py-5 flex justify-center text-white text-xl shadow-md">
              <FaClock />
            </div>
            <div className="p-6 h-36 flex flex-col justify-center items-center bg-white">
              <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-900 mb-1.5">
                Working Hours
              </h4>
              <p className="text-[11px] text-neutral-600 font-semibold tracking-wide">
                Mon - Fri: 08:00 - 22:00
              </p>
              <p className="text-[11px] text-neutral-600 font-semibold tracking-wide mt-0.5">
                Sat - Sun: 10:00 - 23:00
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 2: Contact Form Section */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <span className="text-purple-200 text-xs font-bold tracking-widest block mb-2 uppercase opacity-90">
          --- Send Us a Message ---
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold uppercase tracking-wider text-white border-b-2 border-white/20 max-w-xs mx-auto pb-4 mb-12">
          Contact Form
        </h2>

        {/* Form Box Wrapper: Clean white-matte back panel mimicking your reference design card overlays */}
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl shadow-purple-950/30 text-left">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                  Name*
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#7C3AED] text-neutral-900 placeholder:text-neutral-400 transition-all shadow-inner"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#7C3AED] text-neutral-900 placeholder:text-neutral-400 transition-all shadow-inner"
                />
              </div>
            </div>

            {/* Row 2: Phone */}
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                Phone*
              </label>
              <input
                type="tel"
                required
                placeholder="Enter your phone number"
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#7C3AED] text-neutral-900 placeholder:text-neutral-400 transition-all shadow-inner"
              />
            </div>

            {/* Row 3: Message */}
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                Message*
              </label>
              <textarea
                required
                rows="6"
                placeholder="Write your message here"
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#7C3AED] text-neutral-900 placeholder:text-neutral-400 transition-all shadow-inner resize-none"
              ></textarea>
            </div>

            {/* reCAPTCHA Mock Wrapper */}
            <div className="pt-2">
              <div className="bg-neutral-50 border border-neutral-200 p-3 inline-flex items-center gap-4 rounded-xl shadow-sm">
                <input 
                  type="checkbox" 
                  id="recaptcha" 
                  className="w-5 h-5 cursor-pointer accent-[#7C3AED] rounded border-gray-300" 
                />
                <label htmlFor="recaptcha" className="text-xs text-neutral-600 font-semibold select-none cursor-pointer">
                  I'm not a robot
                </label>
                <div className="ml-8 flex flex-col items-center shrink-0">
                  <img 
                    src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
                    alt="recaptcha" 
                    className="w-5 h-5 object-contain opacity-90"
                  />
                  <span className="text-[8px] text-neutral-400 font-medium mt-0.5">Privacy - Terms</span>
                </div>
              </div>
            </div>

            {/* Premium Button: Matched to the active vibrant purple theme with an internal glowing pulsing plane animation */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2.5 px-10 py-3.5 bg-gradient-to-r from-[#6366F1] to-[#7C3AED] hover:from-[#4F46E5] hover:to-[#6D28D9] active:scale-95 text-white font-bold uppercase tracking-widest text-xs rounded-xl transition-all duration-300 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/40 cursor-pointer"
              >
                Send Message <FaPaperPlane className="text-[10px] animate-pulse" />
              </button>
            </div>

          </form>
        </div>
      </section>

    </div>
  );
};

export default Contact;