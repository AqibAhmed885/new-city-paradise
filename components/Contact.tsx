"use client";

import { FormEvent, useState } from "react";
import SectionHeading from "./SectionHeading";
import { SITE_CONFIG } from "@/lib/siteConfig";

const fields = [
  { id: "name", label: "Your name", type: "text", autoComplete: "name" },
  { id: "phone", label: "Phone number", type: "tel", autoComplete: "tel" },
  { id: "email", label: "Email address", type: "email", autoComplete: "email" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="bg-ink text-white">
      <div className="grid lg:grid-cols-2">
        <div className="container-pad !mx-0 max-w-none py-24 sm:py-32 lg:pl-[max(4rem,calc((100vw-1600px)/2+4.5rem))]">


          <SectionHeading
            eyebrow="Investment"
            title={
              <h1 className="text-white">
                Find your Place<br />{" "}
                <span className="italic text-champagne">in Paradise.</span>
              </h1>
            }
            description=""
          />

          <form onSubmit={submit} className="mt-14 max-w-xl" aria-label="Enquiry form">
            <div className="grid gap-x-7 sm:grid-cols-2">
              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className={index === 2 ? "border-b border-white/20 sm:col-span-2" : "border-b border-white/20"}
                >
                  <label htmlFor={field.id} className="sr-only">
                    {field.label}
                  </label>
                  <input
                    required
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    autoComplete={field.autoComplete}
                    placeholder={field.label}
                    className="w-full bg-transparent py-5 text-sm outline-none placeholder:text-white/35 focus:placeholder:text-white/70"
                  />
                </div>
              ))}
            </div>
            <div className="border-b border-white/20">
              <label htmlFor="message" className="sr-only">
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="How can we help?"
                className="w-full resize-none bg-transparent py-5 text-sm outline-none placeholder:text-white/35"
              />
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <button
                type="submit"
                className="group inline-flex items-center gap-6 rounded-full bg-white px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-champagne hover:text-white"
              >
                Send enquiry
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
              <p className="text-[9px] leading-5 text-white/30">
                By submitting, you agree to be contacted about this enquiry.
              </p>
            </div>
            <p
              role="status"
              className={`mt-6 text-sm text-champagne transition-opacity ${sent ? "opacity-100" : "opacity-0"
                }`}
            >
              Thank you. A property consultant will contact you shortly.
            </p>
          </form>
        </div>

        <div className="relative min-h-[34rem] overflow-hidden bg-[#302d28] lg:min-h-full">
          <iframe
            title="New City Paradise location on Google Maps"
            src="https://www.google.com/maps?q=New%20City%20Paradise%20Pakistan&output=embed"
            className="absolute inset-0 h-full w-full grayscale invert-[.87] contrast-[.88]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="glass absolute bottom-5 left-5 right-5 z-10 bg-black/55 p-6 sm:bottom-8 sm:left-8 sm:right-auto sm:w-[24rem]">
            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-champagne">
              Visit our sales gallery
            </p>
            <address className="mt-4 not-italic">
              <p className="font-serif text-2xl">{SITE_CONFIG.name}</p>
              <p className="mt-2 text-xs leading-6 text-white/55">
                {SITE_CONFIG.location.address}
              </p>
            </address>
            <div className="mt-5 flex gap-6 text-[9px] uppercase tracking-[0.16em] text-white/75">
              <a className="link-line" href={`tel:${SITE_CONFIG.phoneTel}`}>
                {SITE_CONFIG.phoneDisplay}
              </a>
              <a className="link-line" href={`mailto:${SITE_CONFIG.email}`}>
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
