"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { LAHORE_CONFIG } from "@/lib/lahoreConfig";

export default function LahoreContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Residential Plots",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-ink text-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.26em] text-champagne block mb-3">
                Lahore Regional Desk
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-normal text-white leading-tight">
                Connect with our <br />
                <span className="italic font-light text-champagne">Lahore Advisory Team.</span>
              </h2>
              <p className="mt-4 font-sans text-sm sm:text-base text-white/70 leading-relaxed">
                Whether you are exploring residential waterfront living in RUDA Phase 1 or commercial avenues on the Eastern Bypass, our team is ready to assist.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <a
                href={LAHORE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-white/15 bg-white/5 p-4 transition-all hover:bg-white/10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#25D366]/20 text-[#25D366]">
                  <BsWhatsapp size={20} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-white/50 block">Instant WhatsApp</span>
                  <span className="text-sm font-semibold text-white">{LAHORE_CONFIG.phoneDisplay}</span>
                </div>
              </a>

              <a
                href={`tel:${LAHORE_CONFIG.phoneTel}`}
                className="flex items-center gap-4 rounded-xl border border-white/15 bg-white/5 p-4 transition-all hover:bg-white/10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-champagne/20 text-champagne">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-white/50 block">Direct Telephone</span>
                  <span className="text-sm font-semibold text-white">{LAHORE_CONFIG.phoneDisplay}</span>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-white/15 bg-white/5 p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-white">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-white/50 block">Location Frontage</span>
                  <span className="text-xs text-white/90">{LAHORE_CONFIG.location.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-8 sm:p-10 backdrop-blur-xl">
              {submitted ? (
                <div className="py-12 text-center">
                  <span className="inline-block h-12 w-12 rounded-full bg-champagne/20 text-champagne leading-12 text-2xl font-bold mb-4">
                    ✓
                  </span>
                  <h3 className="font-heading text-2xl text-white">Inquiry Received</h3>
                  <p className="mt-3 text-sm text-white/70 max-w-md mx-auto">
                    Thank you. A senior Lahore project advisor will contact you shortly with masterplan details and pricing schedules.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tariq Khan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-champagne focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0300 0000000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-champagne focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-champagne focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                        Interested In
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full rounded-lg border border-white/20 bg-[#16211E] px-4 py-3 text-sm text-white focus:border-champagne focus:outline-none"
                      >
                        <option value="Residential Plots">Ravi Marina Residential Plots</option>
                        <option value="Commercial Plots">Downtown Commercial Boulevard</option>
                        <option value="Smart City Sectors">Smart Urban Living Units</option>
                        <option value="General Inquiry">General Developer Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                      Your Message or Requirement
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share your requirements or schedule a site visit on Eastern Bypass..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-champagne focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-champagne py-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-all hover:bg-white hover:shadow-xl"
                  >
                    Submit Official Lahore Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
