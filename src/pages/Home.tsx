import React from "react";
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
    <div className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_left,rgba(255,255,255,0.08),transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xl font-semibold tracking-wide">DHP</div>
              <div className="text-sm text-white/60">
                Storm Campaigns for Roofing Companies
              </div>
            </div>
            <div className="hidden gap-3 md:flex">
              <Button
                variant="ghost"
                className="text-white/80 hover:text-white hover:bg-white/10 rounded-2xl"
              >
                How It Works
              </Button>
              <Button className="rounded-2xl bg-white text-neutral-950 hover:bg-white/90">
                Book a Call
              </Button>
            </div>
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <Badge className="mb-5 w-fit rounded-full border border-white/10 bg-white/10 px-4 py-1 text-white">
              Roofing growth powered by targeted storm outreach
            </Badge>
            <h1 className="max-w-2xl text-5xl font-semibold tracking-tight sm:text-6xl">
              We help roofing companies turn storm activity into booked
              inspections and closed jobs.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              We run targeted campaigns in storm-affected markets, start
              conversations with homeowners, and feed qualified inspection
              opportunities into your pipeline so your team can focus on selling
              and servicing roofs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-2xl bg-white text-neutral-950 hover:bg-white/90"
              >
                Start a Campaign <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                See How It Works
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/60">
              <div className="rounded-full border border-white/10 px-3 py-1">
                Storm-targeted markets
              </div>
              <div className="rounded-full border border-white/10 px-3 py-1">
                Booked opportunities
              </div>
              <div className="rounded-full border border-white/10 px-3 py-1">
                Contractor-focused systems
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid gap-4"
          >
            <Card className="rounded-[28px] border-white/10 bg-white/5 backdrop-blur">
              <CardContent className="p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-2xl bg-white/10 p-3">
                    <MapPinned className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-lg font-medium">Market Activation</div>
                    <div className="text-sm text-white/60">
                      Launch where the demand is strongest
                    </div>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <div className="text-2xl font-semibold">{item.value}</div>
                      <div className="mt-1 text-sm text-white/60">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="rounded-[28px] border-white/10 bg-white/5">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-2xl bg-white/10 p-3">
                      <Users className="h-5 w-5" />
                    </div>
                    <div className="font-medium">Homeowner Outreach</div>
                  </div>
                  <p className="text-sm leading-7 text-white/70">
                    Messaging built to create real engagement in neighborhoods
                    impacted by recent weather activity.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-[28px] border-white/10 bg-white/5">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-2xl bg-white/10 p-3">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div className="font-medium">Pipeline Structure</div>
                  </div>
                  <p className="text-sm leading-7 text-white/70">
                    A cleaner system for lead status, follow-up, appointments,
                    and revenue visibility.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="text-sm uppercase tracking-[0.2em] text-white/50">
            What we do
          </div>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            This is not generic marketing. It is a roof-focused growth system
            built around storm opportunity.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/70">
            Instead of waiting on referrals or paying for broad, low-intent
            traffic, we focus on homeowners in areas that have been hit by
            recent weather activity and move them into a real inspection
            pipeline for your company.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Card className="h-full rounded-[28px] border-white/10 bg-white/5">
                  <CardContent className="p-6">
                    <div className="mb-4 w-fit rounded-2xl bg-white/10 p-3">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-medium">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/70">
                      {feature.text}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <div className="text-sm uppercase tracking-[0.2em] text-white/50">
                How it works
              </div>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                A simple system contractors can actually plug into.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">
                We handle the front-end momentum so your team can spend more
                time inspecting, estimating, and closing instead of chasing cold
                opportunity.
              </p>
            </motion.div>

            <div className="grid gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <Card className="rounded-[28px] border-white/10 bg-black/20">
                    <CardContent className="flex gap-4 p-6">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-neutral-950 font-semibold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">{step.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-white/70">
                          {step.text}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <div className="text-sm uppercase tracking-[0.2em] text-white/50">
              Why contractors work with us
            </div>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Built for roofers who want opportunity without chaos.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                  <span className="text-white/80">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="rounded-[32px] border-white/10 bg-gradient-to-br from-white/10 to-white/5">
              <CardContent className="p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-medium">Partner Snapshot</div>
                    <div className="text-sm text-white/60">
                      Example contractor workflow
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-3">
                    <Zap className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="mb-2 text-sm text-white/50">Pipeline</div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "New Lead",
                        "Contacted",
                        "Pending",
                        "Appointment Set",
                        "Inspected",
                        "Closed",
                      ].map((stage) => (
                        <span
                          key={stage}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80"
                        >
                          {stage}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="text-sm text-white/50">Lead flow</div>
                      <div className="mt-2 text-2xl font-semibold">
                        Consistent
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="text-sm text-white/50">
                        Revenue visibility
                      </div>
                      <div className="mt-2 text-2xl font-semibold">Tracked</div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm text-white/50">
                      <MessageSquareMore className="h-4 w-4" />
                      What this means
                    </div>
                    <p className="text-sm leading-7 text-white/70">
                      You get a repeatable acquisition channel built around
                      homeowner need, cleaner communication, and a more
                      accountable process from first contact to closed roof.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <Card className="rounded-[36px] border-white/10 bg-white text-neutral-950 shadow-2xl shadow-white/10">
            <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
              <div className="max-w-2xl">
                <div className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                  Let’s build your pipeline
                </div>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                  Ready to put your roofing company in front of the right
                  homeowners?
                </h2>
                <p className="mt-4 text-base leading-7 text-neutral-600">
                  If you want qualified storm-driven opportunities, a cleaner
                  lead process, and a partner focused on helping you close more
                  work, let’s talk.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="rounded-2xl bg-neutral-950 text-white hover:bg-neutral-800"
                >
                  <PhoneCall className="mr-2 h-4 w-4" /> Schedule a Call
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-2xl border-neutral-300"
                >
                  See Campaign Options
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}
