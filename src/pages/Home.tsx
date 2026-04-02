import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  PhoneCall,
  CloudLightning,
  ShieldCheck,
  BarChart3,
  MapPinned,
  Users,
  CheckCircle2,
  ArrowRight,
  CalendarDays,
  FileCheck,
  Zap,
  MessageSquareMore,
} from "lucide-react";
import RainBackground from "./RainBackground";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stats = [
  { label: "Storm-targeted outreach", value: "Hyper-local" },
  { label: "Qualified homeowner conversations", value: "Booked" },
  { label: "Built for roofing contractors", value: "End-to-end" },
  { label: "Performance focus", value: "Revenue-driven" },
];

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
export default function Home() {
  return (
    <RainBackground>
      <div className="min-h-screen bg-[#070b12] text-white opacity-70">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-[rgba(255,255,255,0.15)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.2),transparent_30%),radial-gradient(circle_at_left,rgba(255,255,255,0.08),transparent_25%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xl font-semibold tracking-wide text-white">
                  DHP
                </div>
                <div className="text-sm text-[rgba(226,232,240,0.75)]">
                  Storm Campaigns for Roofing Companies
                </div>
              </div>

              <div className="hidden gap-3 md:flex">
                <Button
                  variant="ghost"
                  className="rounded-2xl text-[rgba(226,232,240,0.85)] hover:bg-[rgba(255,255,255,0.08)]"
                >
                  How It Works
                </Button>

                <Button className="rounded-2xl bg-white text-black hover:bg-white/90">
                  Book a Call
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
                We help roofing companies turn storm activity into booked
                inspections and closed jobs.
              </h1>

              <p className="mt-6 max-w-xl text-lg text-[rgba(226,232,240,0.85)]">
                We run targeted campaigns in storm-affected markets, start
                conversations with homeowners, and feed qualified inspection
                opportunities into your pipeline.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button className="rounded-2xl bg-white text-black hover:bg-white/90">
                  Start a Campaign <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  className="rounded-2xl border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.08)] text-white hover:bg-[rgba(255,255,255,0.12)]"
                >
                  See How It Works
                </Button>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <Card className="rounded-[28px] border border-[rgba(255,255,255,0.20)] bg-[rgba(255,255,255,0.12)] backdrop-blur-xl">
                <CardContent className="p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-2xl bg-[rgba(96,165,250,0.12)] p-3 text-[#dbeafe]">
                      <MapPinned />
                    </div>
                    <div>
                      <div className="text-lg text-white">
                        Market Activation
                      </div>
                      <div className="text-sm text-[rgba(226,232,240,0.75)]">
                        Launch where the demand is strongest
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {stats.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.10)] p-4"
                      >
                        <div className="text-2xl font-semibold text-white">
                          {item.value}
                        </div>
                        <div className="text-sm text-[rgba(226,232,240,0.75)]">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => {
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
        <section className="border-y border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.08)]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="grid gap-4">
              {steps.map((step, index) => (
                <Card
                  key={step.title}
                  className="rounded-[28px] border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.10)]"
                >
                  <CardContent className="flex gap-4 p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black font-semibold">
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
                <CheckCircle2 className="text-[#dbeafe]" />
                <span className="text-[rgba(226,232,240,0.85)]">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <Card className="rounded-[36px] border border-[rgba(255,255,255,0.20)] bg-white text-black">
            <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold">
                  Ready to grow your pipeline?
                </h2>
                <p className="text-neutral-600">
                  Let’s build a storm-driven system that closes.
                </p>
              </div>

              <Button className="bg-black text-white">
                <PhoneCall className="mr-2 h-4 w-4" />
                Schedule a Call
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </RainBackground>
  );
}
