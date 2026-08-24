import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how New City Paradise collects, protects, uses, shares, and retains personal information.",
};

const policySections = [
  {
    id: "commitment",
    number: "01",
    title: "Our privacy commitment",
    paragraphs: [
      "New City Paradise respects your privacy rights and is committed to protecting the confidentiality of personal information when it is collected, stored, used, or transmitted.",
    ],
  },
  {
    id: "collection",
    number: "02",
    title: "Purpose of collecting data",
    paragraphs: [
      "We collect only the personal information that is necessary for the effective operation of our housing society. Information is collected through lawful means and used only for lawful purposes connected with our services and operations.",
    ],
  },
  {
    id: "protection",
    number: "03",
    title: "Data protection",
    paragraphs: [
      "Accounts used through our application are protected by a password. A new one-time password (OTP) is sent whenever you log in, providing an additional safeguard against unauthorized access, fraud, and malicious activity.",
    ],
  },
  {
    id: "third-parties",
    number: "04",
    title: "Third-party services",
    paragraphs: [
      "New City Paradise takes practical steps to protect personal information. Where required for business operations, information may be transferred, assigned, or exchanged with third parties that provide administrative, telecommunications, computer, or related services to us.",
      "These disclosures are limited to services connected with our business and operational requirements.",
    ],
  },
  {
    id: "cookies",
    number: "05",
    title: "Cookies",
    paragraphs: [
      "When you visit a login page, a temporary cookie may be set to confirm whether your browser accepts cookies. It contains no personal information and is removed when the browser is closed.",
      "After login, cookies may save your login details and screen-display preferences. Login cookies remain for two days, while screen-option cookies remain for one year. If you choose “Remember Me,” your login can remain active for two weeks. Logging out removes the login cookies.",
      "If an article is edited or published, an additional cookie may be saved. It contains no personal information, records only the relevant article’s post ID, and expires after one day.",
    ],
  },
  {
    id: "retention",
    number: "06",
    title: "Retention of personal data",
    paragraphs: [
      "Personal information is retained only for as long as reasonably necessary to fulfill the purpose for which it was originally collected.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="overflow-hidden bg-ivory">
        <section className="relative flex min-h-[38rem] items-end overflow-hidden bg-[#0a0a09] pb-14 pt-36 text-white sm:min-h-[44rem] sm:pb-20">
          <div className="absolute -right-40 -top-48 h-[40rem] w-[40rem] rounded-full bg-champagne/15 blur-[140px]" />
          <div className="absolute -bottom-64 left-[8%] h-[34rem] w-[34rem] rounded-full border border-white/10" />
          <div className="absolute -bottom-52 left-[15%] h-[28rem] w-[28rem] rounded-full border border-white/[0.07]" />
          <div className="grain absolute inset-0" />

          <div className="container-pad relative z-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-champagne">
              Legal & privacy
            </p>
            <div className="mt-6 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <h1 className="text-[clamp(4.5rem,12vw,10rem)] leading-[0.8] tracking-[-0.065em]">
                Privacy
                <span className="block italic text-[#efc38f]">Policy.</span>
              </h1>
              <p className="max-w-md border-l border-white/25 pl-6 text-sm leading-7 text-white/55 lg:mb-2">
                How New City Paradise handles personal information across its digital services and housing-society operations.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="container-pad">
            <div className="grid gap-14 lg:grid-cols-[17rem_minmax(0,52rem)] lg:justify-center lg:gap-20">
              <aside className="h-fit border-t border-black/20 pt-6 lg:sticky lg:top-28">
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-champagne">
                  On this page
                </p>
                <nav className="mt-6 grid gap-3" aria-label="Privacy policy sections">
                  {policySections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="group flex items-center gap-4 border-b border-black/10 pb-3 text-xs text-black/55 transition-colors hover:text-black"
                    >
                      <span className="text-[9px] text-black/30 group-hover:text-champagne">
                        {section.number}
                      </span>
                      <span>{section.title}</span>
                    </a>
                  ))}
                </nav>
                <a
                  href="https://newcityparadise.com/privacy-policy/"
                  target="_blank"
                  rel="noreferrer"
                  className="link-line mt-8 inline-flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.18em]"
                >
                  Official source <span>↗</span>
                </a>
              </aside>

              <article>
                <div className="border-b border-black/15 pb-12">
                  <p className="text-[clamp(1.75rem,3.2vw,2.8rem)] leading-[1.35] tracking-[-0.03em] text-black/75">
                    Your trust matters. We use personal information only where it is needed to operate our services and support the New City Paradise community.
                  </p>
                </div>

                <div className="mt-14 space-y-16">
                  {policySections.map((section) => (
                    <section key={section.id} id={section.id} className="scroll-mt-32">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-champagne">
                        {section.number}
                      </p>
                      <h2 className="mt-3 text-[clamp(2.3rem,4.5vw,4rem)] leading-[1.02] tracking-[-0.045em]">
                        {section.title}
                      </h2>
                      <div className="mt-7 space-y-5">
                        {section.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-base leading-8 text-black/60 sm:text-lg sm:leading-9"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>

                <div className="mt-20 rounded-[1.75rem] bg-ink p-7 text-white sm:p-10">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-champagne">
                    Questions about your privacy?
                  </p>
                  <h2 className="mt-4 text-[clamp(2.25rem,5vw,4rem)] leading-none tracking-[-0.045em]">
                    We’re here to help.
                  </h2>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">
                    Contact New City Paradise if you have a question about this policy or how your personal information is handled.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-5 rounded-full bg-[#efc38f] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink transition-transform hover:-translate-y-1"
                    >
                      Contact us <span className="text-base">↗</span>
                    </Link>
                    <a
                      href="mailto:info@newcityparadise.com"
                      className="inline-flex items-center rounded-full border border-white/20 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-ink"
                    >
                      info@newcityparadise.com
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
