import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  PhoneCall,
  CloudLightning,
  BarChart3,
  MapPinned,
  CheckCircle2,
  ArrowRight,
  CalendarDays,
  FileCheck,
  X,
  Loader2,
} from "lucide-react";
import RainBackground from "./RainBackground";
import { useNavigate } from "react-router";
import { sendEmail } from "@/lib/sendEmail";

const BOOKING_URL = "https://calendar.app.google/MWZhAuWvo6jKJHJj7";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const features = [
  {
    icon: CloudLightning,
    title: "Storm-zone targeting",
    text: "We run focused outreach in hail and storm-affected areas so your team is talking to homeowners who are far more likely to need an inspection.",
  },
  {
    icon: CalendarDays,
    title: "Appointments, not random leads",
    text: "We do the front-end work to generate real conversations and set inspection opportunities directly into your pipeline.",
  },
  {
    icon: FileCheck,
    title: "Better lead visibility",
    text: "We help structure tracking so every lead can be monitored by status, outcome, and closed revenue instead of disappearing into guesswork.",
  },
  {
    icon: BarChart3,
    title: "Built around ROI",
    text: "Our model is centered on helping roofing companies close more jobs while clearly understanding what each appointment is worth.",
  },
];

const steps = [
  {
    title: "We identify the market",
    text: "We choose storm-active zones and neighborhoods where homeowners are more likely to need roof inspections.",
  },
  {
    title: "We run targeted outreach",
    text: "We launch smart campaigns designed to start conversations, drive responses, and create inspection opportunities.",
  },
  {
    title: "We qualify and book",
    text: "Interested homeowners are filtered, organized, and scheduled so your team is not wasting time on junk leads.",
  },
  {
    title: "You inspect and close",
    text: "Your company handles the inspection, insurance conversation, and close while we keep the pipeline moving.",
  },
];

const benefits = [
  "More qualified inspection opportunities",
  "Less guesswork around where leads come from",
  "A cleaner process for tracking status and outcomes",
  "Better leverage during storm season",
  "A scalable system you can expand into new markets",
  "A real marketing partner instead of just a list seller",
];

const EMPTY_FORM = {
  name: "",
  phone: "",
  company: "",
  serviceArea: "",
  honeypot: "",
};

type LeadForm = typeof EMPTY_FORM;

function buildMessage(form: LeadForm) {
  return `Company: ${form.company}\nService Area: ${form.serviceArea}`;
}

// ─── Shared field styles ────────────────────────────────────────────────────
const inputCls =
  "w-full rounded-2xl border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.08)] px-4 py-3 text-sm text-white placeholder:text-[rgba(226,232,240,0.45)] outline-none focus:border-[rgba(255,255,255,0.35)] transition-colors";

// ─── Inline hero form ────────────────────────────────────────────────────────
function HeroForm() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (form.honeypot) return;

    // GA4 event
    // @ts-ignore
    if (typeof gtag === "function") {
      // @ts-ignore
      gtag("event", "Form_submission", {
        event_category: "engagement",
        event_label: "hero_inspection_flow",
        value: 1,
        lead_type: "roofing_contractor",
      });
    }

    setLoading(true);
    await sendEmail({
      name: form.name,
      phone: form.phone,
      address: form.serviceArea,
      message: buildMessage(form),
    });
    setLoading(false);
    setSubmitted(true);
    setForm(EMPTY_FORM);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-5 rounded-[28px] border border-[rgba(255,255,255,0.20)] bg-[rgba(255,255,255,0.10)] p-8 text-center backdrop-blur-xl"
      >
        <div className="text-4xl">⚡</div>
        <h3 className="text-xl font-semibold text-white">
          You're in the queue.
        </h3>
        <p className="text-sm text-[rgba(226,232,240,0.75)]">
          We'll reach out shortly — keep your phone nearby. If you want to lock
          in your spot faster, book a call now.
        </p>
        <div className="flex w-full flex-col gap-3">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="w-full rounded-2xl bg-white text-black hover:bg-white/90">
              <CalendarDays className="mr-2 h-4 w-4" />
              Schedule a Call Now
            </Button>
          </a>
          <Button
            variant="ghost"
            className="rounded-2xl text-[rgba(226,232,240,0.6)] hover:text-white"
            onClick={() => setSubmitted(false)}
          >
            I'll wait for your call
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <Card className="rounded-[28px] border border-[rgba(255,255,255,0.20)] bg-[rgba(255,255,255,0.08)] backdrop-blur-xl">
      <CardContent className="p-6">
        <div className="mb-1 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-emerald-400 uppercase tracking-widest">
            Accepting Applications
          </span>
        </div>
        <h2 className="mb-1 text-xl font-semibold text-white">
          Get Inspection Flow
        </h2>
        <p className="mb-5 text-sm text-[rgba(226,232,240,0.65)]">
          We're booking storm-damage roof inspections in your area.{" "}
          <span className="text-white/80">Only 1 contractor per market.</span>
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {/* spam trap */}
          <input
            type="text"
            name="honeypot"
            value={form.honeypot}
            onChange={handleChange}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputCls}
          />
          <input
            required
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone number"
            type="tel"
            className={inputCls}
          />
          <input
            required
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company name"
            className={inputCls}
          />
          <input
            required
            name="serviceArea"
            value={form.serviceArea}
            onChange={handleChange}
            placeholder="Service area (e.g. Indianapolis, IN)"
            className={inputCls}
          />

          <Button
            type="submit"
            disabled={loading}
            className="mt-1 w-full rounded-2xl bg-white text-black hover:bg-white/90 disabled:opacity-60"
          >
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <ArrowRight className="mr-2 h-4 w-4" />
            )}
            {loading ? "Sending…" : "Get Inspection Flow"}
          </Button>
        </form>

        <p className="mt-4 text-center text-xs text-[rgba(226,232,240,0.4)]">
          ⚠️ We only work with 1–2 contractors per area to avoid overlap.
        </p>
      </CardContent>
    </Card>
  );
}

// ─── Timed popup ─────────────────────────────────────────────────────────────
function LeadPopup({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (form.honeypot) return;

    // @ts-ignore
    if (typeof gtag === "function") {
      // @ts-ignore
      gtag("event", "Form_submission", {
        event_category: "engagement",
        event_label: "popup_inspection_flow",
        value: 1,
        lead_type: "roofing_contractor",
      });
    }

    setLoading(true);
    await sendEmail({
      name: form.name,
      phone: form.phone,
      address: form.serviceArea,
      message: buildMessage(form),
    });
    setLoading(false);
    setSubmitted(true);
    setForm(EMPTY_FORM);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className="relative z-10 w-full max-w-md rounded-[32px] border border-[rgba(255,255,255,0.20)] bg-[#0d1523] p-7 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-1.5 text-[rgba(226,232,240,0.5)] hover:bg-[rgba(255,255,255,0.08)] hover:text-white transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-5 py-2 text-center"
          >
            <div className="text-4xl">🔥</div>
            <h3 className="text-xl font-semibold text-white">
              You're locked in.
            </h3>
            <p className="text-sm text-[rgba(226,232,240,0.70)]">
              We'll be calling you shortly. Contractors who book a call first
              get priority placement in their market.
            </p>
            <div className="flex w-full flex-col gap-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full rounded-2xl bg-white text-black hover:bg-white/90">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  Book a Call — Lock My Spot
                </Button>
              </a>
              <Button
                variant="ghost"
                className="rounded-2xl text-[rgba(226,232,240,0.55)] hover:text-white"
                onClick={onClose}
              >
                I'll wait for your call
              </Button>
            </div>
          </motion.div>
        ) : (
          <>
            <div className="mb-1 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-medium text-amber-400 uppercase tracking-widest">
                1 slot left in your market
              </span>
            </div>

            <h2 className="mb-2 text-2xl font-semibold text-white">
              Don't miss your window.
            </h2>
            <p className="mb-5 text-sm text-[rgba(226,232,240,0.65)]">
              We're placing one roofing contractor per service area. Once it's
              claimed, we move to the next market.
            </p>

            <div className="mb-5 flex flex-col gap-2 text-xs text-[rgba(226,232,240,0.6)]">
              <span>✔ 8 inspections booked in 3 days in Indiana</span>
              <span>✔ Contractors closing $10k–$15k jobs</span>
              <span>✔ Storm-targeted outreach that actually converts</span>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="honeypot"
                value={form.honeypot}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={inputCls}
              />
              <input
                required
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone number"
                type="tel"
                className={inputCls}
              />
              <input
                required
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company name"
                className={inputCls}
              />
              <input
                required
                name="serviceArea"
                value={form.serviceArea}
                onChange={handleChange}
                placeholder="Service area (e.g. Indianapolis, IN)"
                className={inputCls}
              />

              <Button
                type="submit"
                disabled={loading}
                className="mt-1 w-full rounded-2xl bg-white text-black hover:bg-white/90 disabled:opacity-60"
              >
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <ArrowRight className="mr-2 h-4 w-4" />
                )}
                {loading ? "Sending…" : "Apply for Inspection Flow"}
              </Button>

              <button
                type="button"
                onClick={onClose}
                className="text-center text-xs text-[rgba(226,232,240,0.35)] hover:text-[rgba(226,232,240,0.6)] transition-colors"
              >
                No thanks, I don't need more leads
              </button>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function Home() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const popupShown = useRef(false);

  // Show popup once per session after 10 seconds
  useEffect(() => {
    if (popupShown.current) return;
    const shown = sessionStorage.getItem("popupShown");
    if (shown) return;

    const timer = setTimeout(() => {
      if (!popupShown.current) {
        popupShown.current = true;
        sessionStorage.setItem("popupShown", "1");
        setShowPopup(true);
      }
    }, 10_000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <RainBackground>
      <div className="min-h-screen bg-[#070b12] text-white opacity-70">

        {/* TIMED POPUP */}
        <AnimatePresence>
          {showPopup && (
            <LeadPopup onClose={() => setShowPopup(false)} />
          )}
        </AnimatePresence>

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-[rgba(255,255,255,0.15)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.2),transparent_30%),radial-gradient(circle_at_left,rgba(255,255,255,0.08),transparent_25%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xl font-semibold tracking-wide text-white">
                  Farah Marketing
                </div>
                <div className="text-sm text-[rgba(226,232,240,0.75)]">
                  Storm Campaigns for Roofing Companies
                </div>
              </div>

              <div className="hidden gap-3 md:flex">
                <Button
                  variant="ghost"
                  className="rounded-2xl text-[rgba(226,232,240,0.85)] hover:bg-[rgba(255,255,255,0.08)]"
                  onClick={() => navigate("/#how-it-works")}
                >
                  How It Works
                </Button>

                <Button className="rounded-2xl bg-white text-black hover:bg-white/90">
                  <a
                    className="flex items-center"
                    href={BOOKING_URL}
                  >
                    Book a Call
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
            {/* LEFT */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <Badge className="mb-5 w-fit rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(96,165,250,0.12)] text-[#dbeafe]">
                Roofing growth powered by targeted storm outreach
              </Badge>

              <h1 className="max-w-2xl text-5xl font-semibold sm:text-6xl">
                We're Booking Storm-Damage Roof Inspections in Your Area.
              </h1>

              <p className="mt-6 max-w-xl text-lg text-[rgba(226,232,240,0.85)]">
                Consistent, insurance-ready homeowners delivered to your
                pipeline. We're currently opening{" "}
                <span className="text-white font-medium">
                  1 contractor slot per market
                </span>{" "}
                — apply before yours is gone.
              </p>

              <div className="mt-6 flex flex-col gap-2 text-sm text-[rgba(226,232,240,0.6)]">
                <span>✔ 8 inspections booked in 3 days in Indiana</span>
                <span>✔ Contractors closing $10k–$15k jobs</span>
                <span>✔ Storm-targeted outreach that actually converts</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  className="rounded-2xl border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.08)] text-white hover:bg-[rgba(255,255,255,0.12)]"
                  onClick={() => navigate("/#how-it-works")}
                >
                  See How It Works
                </Button>
              </div>
            </motion.div>

            {/* RIGHT — lead capture form */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <HeroForm />
            </motion.div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="rounded-[28px] border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.10)]"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 w-fit rounded-2xl bg-[rgba(96,165,250,0.12)] p-3 text-[#dbeafe]">
                      <Icon />
                    </div>
                    <h3 className="text-xl text-white">{feature.title}</h3>
                    <p className="mt-3 text-sm text-[rgba(226,232,240,0.75)]">
                      {feature.text}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          id="how-it-works"
          className="border-y border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.08)]"
        >
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="grid gap-4">
              {steps.map((step, index) => (
                <Card
                  key={step.title}
                  className="rounded-[28px] border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.10)]"
                >
                  <CardContent className="flex gap-4 p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-black font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-white">{step.title}</h3>
                      <p className="text-sm text-[rgba(226,232,240,0.75)]">
                        {step.text}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex gap-3 rounded-2xl border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.10)] p-4"
              >
                <CheckCircle2 className="shrink-0 text-[#dbeafe]" />
                <span className="text-[rgba(226,232,240,0.85)]">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <Card className="rounded-[36px] border border-[rgba(255,255,255,0.20)] bg-white text-black">
            <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold">
                  Ready to grow your pipeline?
                </h2>
                <p className="text-neutral-600">
                  Let's build a storm-driven system that closes.
                </p>
              </div>

              <Button className="bg-black text-white shrink-0">
                <a
                  href={BOOKING_URL}
                  className="flex items-center"
                >
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Schedule a Call
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </RainBackground>
  );
}
