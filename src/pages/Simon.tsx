import { ChevronRight, Mail, Phone, ShieldCheck, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Simon() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  const services = [
    {
      title: "Metal Roofing",
      description:
        "Long-lasting metal roofing solutions designed to protect your property, boost curb appeal, and stand up to the elements.",
      image: "/pic11.JPG",
      imageAlt: "Before and after roofing project",
    },
    {
      title: "Painting",
      description:
        "Exterior painting with clean lines, quality prep, and a professional finish that refreshes your space.",
      image: "/beforeafter.JPG",
      imageAlt: "Painting service photo coming soon",
    },
    {
      title: "Siding",
      description:
        "Siding installation and repair that improves protection, energy efficiency, and the overall look of your home or building.",
      image: "/siding.JPG",
      imageAlt: "Siding service photo coming soon",
    },
    {
      title: "Gutters",
      description:
        "Dependable gutter installation and replacement that helps direct water away from your property and prevent damage.",
      image: "/gutter.JPG",
      imageAlt: "Gutter installation project",
    },
  ];

  const gallery = Array.from({ length: 11 }, (_, i) => ({
    title: `Project Photo ${i + 1}`,
    src: `/pic${i + 1}.JPG`,
  }));

  const stats = [
    { value: "10+", label: "Years of hands-on experience" },
    { value: "Residential + Commercial", label: "Projects of all sizes" },
    { value: "Insurance Support", label: "Help with claim-related work" },
  ];

  const aboutPoints = [
    "Experienced, family-driven service you can trust",
    "Clear communication from estimate to completion",
    "Quality workmanship for homes and commercial properties",
    "Support for projects involving insurance claims",
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 z-40">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-6">
          <div className="flex items-center gap-4">
            <img
              src="/logo.JPG"
              alt="Simon Contracting and Roofing"
              className="h-18 w-auto object-contain md:h-20"
            />
            <div className="hidden sm:block">
              <p className="text-base font-bold tracking-wide text-slate-900">
                Simon Contracting & Roofing
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="#services"
              className="text-md font-medium text-slate-600 transition hover:text-[#2553B8]"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-md font-medium text-slate-600 transition hover:text-[#2553B8]"
            >
              About
            </a>
            <a
              href="#gallery"
              className="text-md font-medium text-slate-600 transition hover:text-[#2553B8]"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-md font-medium text-slate-600 transition hover:text-[#2553B8]"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-[#2553B8] px-4 py-2.5 text-md font-semibold text-white shadow-md transition hover:bg-[#1f469a] md:inline-flex"
            >
              Free Estimate
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white md:hidden">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <img
                src="/logo.JPG"
                alt="Simon Contracting and Roofing"
                className="h-16 w-auto object-contain"
              />

              <button
                type="button"
                onClick={closeMenu}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 p-2 text-slate-700 transition hover:bg-slate-100"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex h-[calc(100vh-81px)] flex-col justify-between px-6 py-8 bg-white">
              <nav className="flex flex-col">
                <a
                  href="#services"
                  onClick={closeMenu}
                  className="border-b border-slate-200 py-5 text-3xl font-semibold text-slate-900"
                >
                  Services
                </a>
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="border-b border-slate-200 py-5 text-3xl font-semibold text-slate-900"
                >
                  About
                </a>
                <a
                  href="#gallery"
                  onClick={closeMenu}
                  className="border-b border-slate-200 py-5 text-3xl font-semibold text-slate-900"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="border-b border-slate-200 py-5 text-3xl font-semibold text-slate-900"
                >
                  Contact
                </a>
              </nav>

              <a
                href="#contact"
                onClick={closeMenu}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#2553B8] px-6 py-4 text-base font-semibold text-white shadow-md transition hover:bg-[#1f469a]"
              >
                Free Estimate
              </a>
            </div>
          </div>
        )}
      </header>
      <main>
        <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_right,_rgba(37,83,184,0.14),_transparent_28%),linear-gradient(180deg,#eff6ff_0%,#f8fafc_58%,#ffffff_100%)]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 md:items-center md:px-6 md:py-20">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-[#2553B8]">
                Trusted exterior services for homes and businesses
              </div>

              <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
                Quality exterior work done right the first time.
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                Simon Contracting & Roofing helps homeowners and businesses
                improve, protect, and restore their properties with dependable
                workmanship, honest communication, and service you can feel
                confident about.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#2553B8] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#1f469a]"
                >
                  Request an Estimate
                  <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  View Services
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-white bg-white shadow-xl shadow-slate-300/50">
                <img
                  src="/pic11.JPG"
                  alt="Exterior home improvement project"
                  className="h-[360px] w-full object-cover md:h-[520px]"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-6 text-center md:grid-cols-3 md:px-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5">
              <p className="text-2xl font-bold text-slate-900">10+</p>
              <p className="text-sm text-slate-600">Years of experience</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5">
              <p className="text-2xl font-bold text-slate-900">
                Residential + Commercial
              </p>
              <p className="text-sm text-slate-600">
                Reliable solutions for homes and businesses
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5">
              <p className="text-2xl font-bold text-slate-900">
                Insurance Support
              </p>
              <p className="text-sm text-slate-600">
                Guidance for claim-related repairs and restoration
              </p>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="mx-auto max-w-7xl px-5 py-16 md:px-6 md:py-20"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2553B8]">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Exterior services built around protection, appearance, and
              long-term value.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Whether you need repairs, upgrades, or a full exterior improvement
              project, We deliver quality work with attention to detail and a
              commitment to getting the job done right.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              return (
                <div
                  key={service.title}
                  className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
                >
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="h-80 w-full object-cover object-center"
                    />
                  ) : (
                    <div className="flex h-80 w-full items-center justify-center bg-slate-100 px-6 text-center text-sm font-medium text-slate-500">
                      Photo coming soon
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section id="about" className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:px-6 md:py-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2553B8]">
                About Us
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
                A family-driven company built on trust, quality, and dependable
                service.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                At Simon Contracting & Roofing, we believe every project
                deserves careful workmanship, honest communication, and results
                that last. We take pride in helping homeowners and business
                owners feel confident in the work being done on their property.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                From roofing and siding to painting and gutters, our goal is
                simple: deliver high-quality exterior work while treating every
                customer with respect and every property like it matters.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {aboutPoints.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-[2rem] border border-white bg-white shadow-xl shadow-slate-300/40">
                <img
                  src="/family.JPG"
                  alt="Family or team portrait"
                  className=" w-full object-fill"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="gallery"
          className="mx-auto max-w-7xl px-5 py-16 md:px-6 md:py-20"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2553B8]">
              Projects
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              See the quality of our work for yourself.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Our recent projects reflect the care, craftsmanship, and attention
              to detail we bring to every job. Browse the gallery to get a
              better feel for the results we deliver.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((image) => (
              <div
                key={image.title}
                className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="h-72 w-full object-cover transition duration-300 hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>
        </section>
        <section className="border-y border-blue-200 bg-[linear-gradient(180deg,#2553B8_0%,#2f61d1_100%)]">
          <div className="mx-auto max-w-7xl px-5 py-14 text-center md:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-100">
              Why Choose Simon
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Skilled workmanship backed by service you can trust.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-50/95">
              When you hire Simon Contracting & Roofing, you are choosing
              experience, reliability, and a team that takes pride in delivering
              work that looks good, performs well, and lasts.
            </p>
          </div>
        </section>
        <section
          id="contact"
          className="mx-auto max-w-7xl px-5 py-16 md:px-6 md:py-20"
        >
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2553B8]">
                Contact Us
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Ready to get started on your project?
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-slate-600">
                Whether you need roofing, siding, painting, or gutters, we are
                here to help. Reach out today to discuss your project, ask
                questions, or request a free estimate.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:simoncontracting.rfg@gmail.com?subject=Project%20Estimate"
                  className="inline-flex items-center gap-2 rounded-full bg-[#2553B8] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1f469a]"
                >
                  <Mail className="h-4 w-4" />
                  Email Us
                </a>
                <a
                  href="tel:3177165354"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#2553B8]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Contact Details
              </h3>
              <div className="mt-6 space-y-4 text-slate-600">
                <p>
                  <span className="font-semibold text-slate-900">Email:</span>{" "}
                  simoncontracting.rfg@gmail.com
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Phone:</span>{" "}
                  (317) 716-5354
                </p>
                <p>
                  <span className="font-semibold text-slate-900">
                    Service Area: Indiana
                  </span>{" "}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Hours:</span>{" "}
                  Always open
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:px-6">
          <p>
            © {new Date().getFullYear().toString()} Simon Contracting &
            Roofing. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#services" className="transition hover:text-[#2553B8]">
              Services
            </a>
            <a href="#about" className="transition hover:text-[#2553B8]">
              About
            </a>
            <a href="#contact" className="transition hover:text-[#2553B8]">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
