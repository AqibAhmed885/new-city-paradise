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
    <section className="bg-[#FAF8F5] text-[#12110F] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.26em] text-[#8C7A58] block mb-3">
                Lahore Regional Desk
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-normal text-[#12110F] leading-tight">
                Connect with our <br />
                <span className="italic font-light text-[#8C7A58]">Lahore Advisory Team.</span>
              </h2>
              <p className="mt-4 font-sans text-sm sm:text-base text-[#12110F]/70 leading-relaxed font-light">
                Whether you are exploring residential waterfront living in RUDA Phase 1 or commercial avenues on the Eastern Bypass, our team is ready to assist.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4 pt-4 border-t border-black/[0.08]">
              <a
                href={LAHORE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-black/[0.08] bg-white p-5 transition-all hover:border-[#8C7A58]/50 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
                  <BsWhatsapp size={22} />
                </div>
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-wider text-black/45 block">
                    Instant WhatsApp
                  </span>
                  <span className="text-sm font-semibold text-[#12110F] font-sans">
                    {LAHORE_CONFIG.phoneDisplay}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${LAHORE_CONFIG.phoneTel}`}
                className="flex items-center gap-4 rounded-2xl border border-black/[0.08] bg-white p-5 transition-all hover:border-[#8C7A58]/50 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8C7A58]/15 text-[#8C7A58]">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-wider text-black/45 block">
                    Direct Telephone
                  </span>
                  <span className="text-sm font-semibold text-[#12110F] font-sans">
                    {LAHORE_CONFIG.phoneDisplay}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-black/[0.08] bg-white p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/5 text-[#12110F]">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-wider text-black/45 block">
                    Location Frontage
                  </span>
                  <span className="text-xs text-[#12110F]/85 font-sans leading-relaxed">
                    {LAHORE_CONFIG.location.address}
                  </span>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="relative h-60 w-full rounded-2xl overflow-hidden border border-black/[0.08] shadow-sm">
              <iframe
                title="New City Paradise Lahore Location Map"
                src="https://www.google.com/maps?q=Ravi%20Urban%20Development%20Authority%20Lahore&output=embed"
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
                    Thank you. A senior Lahore project advisor will contact you shortly with masterplan details and priority pricing schedules.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-heading text-2xl font-normal text-[#12110F]">
                      Schedule Site Visit or Inquire
                    </h3>
                    <p className="mt-1 text-sm text-[#12110F]/60 font-sans font-light">
                      Submit your details to receive official RUDA Phase 1 inventory.
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
                        Sector / Plot Interest
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full rounded-xl border border-black/[0.12] bg-[#FAF8F5]/60 px-4 py-3.5 text-sm text-[#12110F] focus:border-[#8C7A58] focus:bg-white focus:outline-none transition-all"
                      >
                        <option value="Residential Plots">Ravi Marina Residential Plots</option>
                        <option value="Commercial Plots">Downtown Commercial Boulevard</option>
                        <option value="Smart City Sectors">Smart Urban Living Units</option>
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
                      placeholder="Share your requirements or schedule a site visit on Eastern Bypass..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-black/[0.12] bg-[#FAF8F5]/60 px-4 py-3.5 text-sm text-[#12110F] placeholder-black/35 focus:border-[#8C7A58] focus:bg-white focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#12110F] py-4 text-xs font-sans font-semibold uppercase tracking-[0.2em] text-[#FAF8F5] transition-all hover:bg-[#8C7A58] hover:shadow-xl"
                  >
                    Submit Official Lahore Inquiry
                  </button>

                  <p className="text-[10px] text-center text-black/45 leading-normal">
                    By submitting, you agree to receive official RUDA Phase 1 notifications and verified project details.
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
