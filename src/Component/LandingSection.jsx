import React from "react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  BookOpenText,
  Brain,
  CheckCircle2,
  Cpu,
  Globe2,
  Layers,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

const SectionHeading = ({ label, title, description }) => (
  <div className="text-center space-y-3 mb-10">
    <p
      className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs"
      style={{
        border: "1px solid var(--border)",
        background: "color-mix(in srgb, var(--card-bg) 85%, transparent)",
        color: "var(--text-soft)",
      }}
    >
      <span
        className="h-2 w-2 rounded-full"
        style={{ background: "var(--brand-secondary)" }}
      />
      {label}
    </p>
    <h2 className="text-3xl md:text-4xl font-bold brand-gradient">{title}</h2>
    <p className="text-soft max-w-3xl mx-auto">{description}</p>
  </div>
);

const GradientDivider = () => (
  <div
    className="h-px w-full rounded-full"
    style={{
      background:
        "linear-gradient(90deg, transparent, rgba(79,70,229,0.4), transparent)",
    }}
  />
);

const LandingSections = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Adaptive workflows",
      description:
        "Smart automation that learns from your inventory habits and keeps teams in sync.",
      tags: ["Auto-prioritize", "Playbooks", "Continuous learning"],
    },
    {
      icon: ShieldCheck,
      title: "Governed access",
      description:
        "Role-aware permissions, audit trails, and policy checks to keep every action safe.",
      tags: ["SSO ready", "Audit ready", "Granular roles"],
    },
    {
      icon: Activity,
      title: "Live observability",
      description:
        "Real-time signals, health scoring, and anomaly alerts so issues are caught early.",
      tags: ["Pulse monitor", "Alert tuning", "Drilldowns"],
    },
  ];

  const services = [
    {
      icon: Layers,
      title: "Model lifecycle",
      copy: "Blueprints for prototyping, shipping, and iterating without losing context.",
    },
    {
      icon: Brain,
      title: "Inference at scale",
      copy: "Optimized deployments with predictable cost controls and usage insights.",
    },
    {
      icon: Globe2,
      title: "Global reliability",
      copy: "Redundant edges and smart caching so latency stays low for every region.",
    },
  ];

  const categories = [
    "Generative AI",
    "Vision",
    "Recommendation",
    "Forecasting",
    "Voice & NLP",
    "Security",
    "Data quality",
    "Automation",
  ];

  const highlights = [
    {
      title: "Unified data fabric",
      detail: "Connects models, datasets, and environments with lineage you can trace.",
    },
    {
      title: "Human-in-the-loop",
      detail: "Review queues and feedback signals improve outputs without slowing teams.",
    },
    {
      title: "Performance guardrails",
      detail: "Quality benchmarks, fallbacks, and impact scoring baked into every release.",
    },
  ];

  const stats = [
    { label: "Model uptime", value: "99.95%", accent: "var(--brand-primary)" },
    { label: "Avg. speedup", value: "3.2x", accent: "var(--brand-secondary)" },
    { label: "Teams shipped", value: "180+", accent: "#22d3ee" },
    { label: "Data secured", value: "4.8PB", accent: "#a855f7" },
  ];

  const testimonials = [
    {
      name: "Lena Ortiz",
      role: "VP Platform, Stratos",
      quote:
        "The theme-aware surfaces fit seamlessly into our brand, and the observability view cut incident time in half.",
    },
    {
      name: "Kamal Roy",
      role: "Head of AI, Northwind",
      quote:
        "Our teams collaborate in one place now—governance, launches, and insights stay perfectly in sync across modes.",
    },
  ];

  const blogPosts = [
    {
      title: "Designing resilient AI inventory systems",
      readTime: "7 min read",
      category: "Architecture",
    },
    {
      title: "Measuring quality with adaptive guardrails",
      readTime: "5 min read",
      category: "Quality",
    },
    {
      title: "Reducing inference cost without trade-offs",
      readTime: "6 min read",
      category: "Scaling",
    },
  ];

  const faqs = [
    {
      question: "Will the sections honor the light and dark themes?",
      answer:
        "Yes. Surfaces, borders, and typography rely on shared tokens so the palette shifts smoothly with the navbar toggle.",
    },
    {
      question: "How responsive are the layouts?",
      answer:
        "Grids auto-fit to available space, typography scales by breakpoint, and spacing adjusts for comfortable reading on any device.",
    },
    {
      question: "Can we mix these sections with existing components?",
      answer:
        "Each block is self-contained, uses shared utilities like card surfaces, and keeps interactions lightweight.",
    },
  ];

  return (
    <div className="space-y-16">
      <section className="space-y-10">
        <SectionHeading
          label="Product pillars"
          title="Features that stay in lockstep with your theme"
          description="Every card uses the shared brand tokens so light and dark modes remain consistent across the landing page."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description, tags }) => (
            <div
              key={title}
              className="card-surface rounded-2xl p-6 space-y-4 border"
              style={{ borderColor: "var(--card-border)" }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="p-3 rounded-xl"
                  style={{
                    background: "var(--button-bg)",
                    border: "1px solid var(--button-border)",
                    color: "var(--brand-primary)",
                  }}
                >
                  <Icon size={24} />
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-soft">{description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="chip px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <GradientDivider />

      <section className="space-y-10">
        <SectionHeading
          label="What we deliver"
          title="Services aligned to your launch rhythm"
          description="From experimentation to production, each service block mirrors the existing glassmorphism and gradient cues."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, copy }) => (
            <div
              key={title}
              className="card-surface rounded-2xl p-6 border space-y-4"
              style={{ borderColor: "var(--card-border)" }}
            >
              <Icon
                className="w-10 h-10"
                style={{ color: "var(--brand-secondary)" }}
              />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-soft">{copy}</p>
              <button className="btn btn-soft flex items-center gap-2">
                Learn more <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          label="Catalog"
          title="Categories that mirror your primary palette"
          description="Use these categories to spotlight your strongest verticals without clashing with the theme switcher."
        />
        <div
          className="card-surface rounded-2xl p-6 border"
          style={{ borderColor: "var(--card-border)" }}
        >
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <span key={category} className="chip px-4 py-2 rounded-full text-sm">
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6 card-surface rounded-2xl p-6 border" style={{ borderColor: "var(--card-border)" }}>
          <SectionHeading
            label="Highlights"
            title="Built for high-signal releases"
            description="Lean on structured narratives to show how models, people, and policy work together."
          />
          <div className="space-y-4">
            {highlights.map(({ title, detail }) => (
              <div key={title} className="flex gap-3">
                <span
                  className="mt-1 h-6 w-6 rounded-full flex items-center justify-center"
                  style={{
                    background: "var(--button-bg)",
                    border: "1px solid var(--button-border)",
                    color: "var(--brand-primary)",
                  }}
                >
                  <CheckCircle2 size={14} />
                </span>
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="text-soft">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 card-surface rounded-2xl p-6 border" style={{ borderColor: "var(--card-border)" }}>
          <SectionHeading
            label="Statistics"
            title="Proof points that adapt to theme"
            description="Metrics stay legible in any mode with balanced contrast against shared surfaces."
          />
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ label, value, accent }) => (
              <div
                key={label}
                className="rounded-xl p-4 border"
                style={{
                  borderColor: "var(--card-border)",
                  background: "color-mix(in srgb, var(--card-bg) 92%, transparent)",
                }}
              >
                <p className="text-soft text-sm">{label}</p>
                <p className="text-2xl font-bold" style={{ color: accent }}>
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          className="card-surface rounded-2xl p-6 border space-y-4"
          style={{ borderColor: "var(--card-border)" }}
        >
          <SectionHeading
            label="Testimonials"
            title="Teams see the difference"
            description="Comments highlight reliability, theme alignment, and collaboration benefits."
          />
          <div className="space-y-4">
            {testimonials.map(({ name, role, quote }) => (
              <div key={name} className="rounded-xl p-4 border" style={{ borderColor: "var(--card-border)" }}>
                <p className="text-soft">“{quote}”</p>
                <div className="mt-3">
                  <p className="font-semibold">{name}</p>
                  <p className="text-soft text-sm">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="card-surface rounded-2xl p-6 border space-y-4"
          style={{ borderColor: "var(--card-border)" }}
        >
          <SectionHeading
            label="Blog"
            title="Latest from the lab"
            description="Short, skimmable entries that keep the landing fresh without clashing with the palette."
          />
          <div className="space-y-3">
            {blogPosts.map(({ title, readTime, category }) => (
              <div
                key={title}
                className="flex items-center justify-between rounded-xl p-4 border"
                style={{ borderColor: "var(--card-border)" }}
              >
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="text-soft text-sm">{readTime}</p>
                </div>
                <span className="chip px-3 py-1 rounded-full text-xs">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          className="card-surface rounded-2xl p-6 border space-y-4"
          style={{ borderColor: "var(--card-border)" }}
        >
          <SectionHeading
            label="Newsletter"
            title="Stay aligned with releases"
            description="Drop your email to receive the same polished updates your users will see."
          />
          <div className="space-y-3">
            <label className="block text-soft text-sm">Work email</label>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-xl px-4 py-3 border"
              style={{
                borderColor: "var(--card-border)",
                background: "transparent",
                color: "var(--text-strong)",
              }}
            />
            <button className="btn btn-brand w-full flex items-center justify-center gap-2">
              <Mail size={18} /> Subscribe
            </button>
          </div>
        </div>

        <div
          className="card-surface rounded-2xl p-6 border space-y-4"
          style={{ borderColor: "var(--card-border)" }}
        >
          <SectionHeading
            label="FAQ"
            title="Built to pair with your navbar toggle"
            description="Clear answers about theming, responsiveness, and blending with existing flows."
          />
          <div className="space-y-3">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="rounded-xl border p-4" style={{ borderColor: "var(--card-border)" }}>
                <summary className="cursor-pointer font-semibold flex items-center gap-2">
                  <MessageCircle size={16} style={{ color: "var(--brand-primary)" }} />
                  {question}
                </summary>
                <p className="text-soft mt-2 ml-6">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        className="rounded-3xl p-8 lg:p-12 border flex flex-col lg:flex-row items-center justify-between gap-6"
        style={{
          borderColor: "var(--card-border)",
          background:
            "linear-gradient(120deg, rgba(79,70,229,0.14), rgba(6,182,212,0.12))",
        }}
      >
        <div className="space-y-3 max-w-2xl">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs" style={{ background: "var(--button-bg)", border: "1px solid var(--button-border)", color: "var(--text-soft)" }}>
            <Cpu size={14} /> Ready to launch the next model?
          </p>
          <h3 className="text-3xl font-bold">CTA built for your dual-theme experience</h3>
          <p className="text-soft">
            Keep momentum with a closing call-to-action that matches the navbar toggle and preserves readability in any mode.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="btn btn-brand flex items-center gap-2">
              Start now <Zap size={18} />
            </button>
            <button className="btn btn-soft flex items-center gap-2">
              View roadmap <ArrowRight size={16} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
          {["Secure", "Adaptive", "Reliable", "Collaborative"].map((pill) => (
            <span key={pill} className="chip px-4 py-2 rounded-full text-center">{pill}</span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingSections;