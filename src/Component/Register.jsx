
import { motion } from "framer-motion";
import { Brain, LogIn, UserPlus, Sparkles, ShieldCheck } from "lucide-react";
import { NavLink } from "react-router";

const fadeUp = {
initial: { opacity: 0, y: 24 },
whileInView: { opacity: 1, y: 0 },
viewport: { once: true, amount: 0.5 },
transition: { duration: 0.6, ease: "easeOut" }
};
const Register = () => {
    return (
        <div className="relative overflow-hidden theme-section">

<div className="absolute -top-32 left-1/2 -translate-x-1/2 -z-10 h-96 w-[80rem] rounded-full bg-gradient-to-r from-indigo-600/40 via-fuchsia-500/25 to-cyan-500/20 blur-3xl" />




<section className="mx-auto max-w-6xl px-6 py-20">

<motion.div
{...fadeUp}
className="mx-auto mb-6 w-fit rounded-full border border-[var(--card-border)] bg-[color-mix(in_srgb,var(--card-bg)_90%,transparent)] px-4 py-1.5 text-sm text-[var(--text-strong)] shadow-sm backdrop-blur"
>
<div className="flex items-center gap-2">
<Sparkles className="h-4 w-4" />
<span>Manage AI models in minutes</span>
</div>
</motion.div>



<motion.h1
{...fadeUp}
className="mx-auto max-w-3xl text-center text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl text-[var(--text-strong)]"
>
Get Started with <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">AI Model Management</span>
</motion.h1>



<motion.p
{...fadeUp}
transition={{ ...fadeUp.transition, delay: 0.05 }}
className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-soft"
>
Centralize, version, and monitor your AI models with a clean, intuitive dashboard. Register or log in to begin tracking performance, deployments, and updates.
</motion.p>



<motion.div
{...fadeUp}
transition={{ ...fadeUp.transition, delay: 0.1 }}
className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-3"
>
<NavLink to="/register">
    <button
type="button"
className="inline-flex items-center gap-2 rounded-2xl bg-indigo-500 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-900/30 ring-1 ring-inset ring-white/10 transition-transform hover:scale-[1.02] hover:bg-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
aria-label="Create an account"
>
<UserPlus className="h-5 w-5" />
Create an account
</button>
</NavLink>


<NavLink to="/login">
    <button
type="button"
className="inline-flex items-center gap-2 rounded-2xl bg-[color-mix(in_srgb,var(--card-bg)_90%,transparent)] px-5 py-3 text-base font-semibold text-[var(--text-strong)] backdrop-blur ring-1 ring-[var(--card-border)] transition-transform hover:scale-[1.02] hover:bg-[color-mix(in_srgb,var(--card-bg)_96%,transparent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
aria-label="Log in"
>
<LogIn className="h-5 w-5" />
Log in
</button>
</NavLink>
</motion.div>
</section>
</div>
    );
};

export default Register;