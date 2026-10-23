"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { SITE_CONFIG } from "@/lib/siteConfig";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Residential Plots",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#FAF8F5] text-[#12110F] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.26em] text-[#8C7A58] block mb-3">
                Main Sales Gallery
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-normal text-[#12110F] leading-tight">
                Connect with our <br />
                <span className="italic font-light text-[#8C7A58]">Sales Advisory Team.</span>
              </h2>
              <p className="mt-4 font-sans text-sm sm:text-base text-[#12110F]/70 leading-relaxed font-light">
                Whether you are exploring residential plots (3.5, 5, 10 Marla, 1 Kanal) or commercial frontage along the 330-ft boulevard, our authorized team is available 7 days a week.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4 pt-4 border-t border-black/[0.08]">
              <a
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-black/[0.08] bg-white p-5 transition-all hover:border-[#8C7A58]/50 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
                  <BsWhatsapp size={22} />
                </div>
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-wider text-black/45 block">
                    Verified WhatsApp Desk
                  </span>
                  <span className="text-sm font-semibold text-[#12110F] font-sans">
                    {SITE_CONFIG.phoneDisplay}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${SITE_CONFIG.phoneTel}`}
                className="flex items-center gap-4 rounded-2xl border border-black/[0.08] bg-white p-5 transition-all hover:border-[#8C7A58]/50 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8C7A58]/15 text-[#8C7A58]">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-wider text-black/45 block">
                    Direct UAN Hotline
                  </span>
                  <span className="text-sm font-semibold text-[#12110F] font-sans">
                    {SITE_CONFIG.phoneDisplay}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-black/[0.08] bg-white p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/5 text-[#12110F]">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-wider text-black/45 block">
                    Site Gallery Address
                  </span>
                  <span className="text-xs text-[#12110F]/85 font-sans leading-relaxed">
                    Main GT Road near Burhan Interchange (M-1) &amp; CPEC Route, Wah
                  </span>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="relative h-60 w-full rounded-2xl overflow-hidden border border-black/[0.08] shadow-sm">
              <iframe
                title="New City Paradise Location Map"
                src="https://www.google.com/maps?q=New%20City%20Paradise%20Pakistan&output=embed"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-black/[0.08] bg-white p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
              {submitted ? (
                <div className="py-16 text-center">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#8C7A58]/15 text-[#8C7A58] text-2xl font-bold mb-4">
                    ✓
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl text-[#12110F]">
                    Inquiry Received
                  </h3>
                  <p className="mt-3 text-base text-[#12110F]/70 max-w-md mx-auto font-sans font-light">
                    Thank you. An authorized New City Paradise property consultant will contact you shortly with the verified brochure and payment schedule.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-heading text-2xl font-normal text-[#12110F]">
                      Schedule Site Visit or Inquire
                    </h3>
                    <p className="mt-1 text-sm text-[#12110F]/60 font-sans font-light">
                      Fill out your contact details to receive verified plot inventory &amp; pricing.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#12110F]/70 mb-2">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tariq Khan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-black/[0.12] bg-[#FAF8F5]/60 px-4 py-3.5 text-sm text-[#12110F] placeholder-black/35 focus:border-[#8C7A58] focus:bg-white focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#12110F]/70 mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0300 0000000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-black/[0.12] bg-[#FAF8F5]/60 px-4 py-3.5 text-sm text-[#12110F] placeholder-black/35 focus:border-[#8C7A58] focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#12110F]/70 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-black/[0.12] bg-[#FAF8F5]/60 px-4 py-3.5 text-sm text-[#12110F] placeholder-black/35 focus:border-[#8C7A58] focus:bg-white focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#12110F]/70 mb-2">
                        Plot / Sector Interest
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full rounded-xl border border-black/[0.12] bg-[#FAF8F5]/60 px-4 py-3.5 text-sm text-[#12110F] focus:border-[#8C7A58] focus:bg-white focus:outline-none transition-all"
                      >
                        <option value="Residential Plots">Residential Plots (3.5, 5, 10 Marla, 1 Kanal)</option>
                        <option value="Commercial Plots">Commercial Plots (2.5, 4, 7 Marla)</option>
                        <option value="Awami Block">Awami Block Planned Plots</option>
                        <option value="Waterfront District">Waterfront District Residences</option>
                        <option value="General Inquiry">General Developer Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#12110F]/70 mb-2">
                      Your Message or Requirement
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share your requirements or request a preferred date for site visit..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-black/[0.12] bg-[#FAF8F5]/60 px-4 py-3.5 text-sm text-[#12110F] placeholder-black/35 focus:border-[#8C7A58] focus:bg-white focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#12110F] py-4 text-xs font-sans font-semibold uppercase tracking-[0.2em] text-[#FAF8F5] transition-all hover:bg-[#8C7A58] hover:shadow-xl"
                  >
                    Submit Official Inquiry
                  </button>

                  <p className="text-[10px] text-center text-black/45 leading-normal">
                    By submitting, you agree to receive official project notifications and verified payment details from New City Paradise.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
