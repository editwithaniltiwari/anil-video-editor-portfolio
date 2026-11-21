import React, { useState } from 'react';
import { Mail, MessageSquare, Instagram, Send, CheckCircle2, Copy, Clock, Globe, HelpCircle, ChevronDown, ChevronUp, Loader2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { editorProfile, faqs } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';

export default function Contact({ preselectedService }) {
  const [sectionRef, isInView] = useInView();
  const [currency, setCurrency] = useState('INR');
  const [isCustomBudget, setIsCustomBudget] = useState(false);
  const [customAmount, setCustomAmount] = useState('');

  const inrRanges = [
    'Under ₹2,000',
    '₹2,000 – ₹5,000',
    '₹5,000 – ₹10,000',
    '₹10,000 – ₹20,000',
    '₹20,000 – ₹50,000',
    '₹50,000+'
  ];

  const usdRanges = [
    'Under $25',
    '$25 – $50',
    '$50 – $100',
    '$100 – $250',
    '$250 – $500',
    '$500+'
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: preselectedService || 'YouTube & Narrative Documentary',
    timeline: '1-2 Weeks',
    currency: 'INR',
    budget: '₹5,000 – ₹10,000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submittedSummary, setSubmittedSummary] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
    const prefix = newCurrency === 'INR' ? '₹' : '$';
    if (isCustomBudget) {
      setFormData((prev) => ({
        ...prev,
        currency: newCurrency,
        budget: customAmount ? `${prefix}${customAmount}` : 'Custom Budget'
      }));
    } else {
      const defaultRange = newCurrency === 'INR' ? '₹5,000 – ₹10,000' : '$50 – $100';
      setFormData((prev) => ({
        ...prev,
        currency: newCurrency,
        budget: defaultRange
      }));
    }
  };

  const handleBudgetSelect = (value) => {
    if (value === 'custom') {
      setIsCustomBudget(true);
      const prefix = currency === 'INR' ? '₹' : '$';
      setFormData((prev) => ({
        ...prev,
        budget: customAmount ? `${prefix}${customAmount}` : 'Custom Budget'
      }));
    } else {
      setIsCustomBudget(false);
      setFormData((prev) => ({
        ...prev,
        budget: value
      }));
    }
  };

  const handleCustomAmountChange = (val) => {
    const numericVal = val.replace(/[^0-9]/g, '');
    setCustomAmount(numericVal);
    const prefix = currency === 'INR' ? '₹' : '$';
    setFormData((prev) => ({
      ...prev,
      budget: numericVal ? `${prefix}${numericVal}` : 'Custom Budget'
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent duplicate submissions

    // Client-side field validations
    const trimmedName = formData.name.trim();
    if (!trimmedName || trimmedName.length < 2) {
      setSubmitError('Please enter your name or channel name (minimum 2 characters).');
      return;
    }

    const trimmedEmail = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setSubmitError('Please enter a valid email address so I can get back to you.');
      return;
    }

    if (isCustomBudget && (!customAmount || parseInt(customAmount, 10) <= 0)) {
      setSubmitError('Please enter a valid positive budget amount.');
      return;
    }

    setSubmitError(null);
    setIsSubmitting(true);

    // Verify Supabase configuration exists
    if (!isSupabaseConfigured || !supabase) {
      setIsSubmitting(false);
      setSubmitError(
        'Supabase is not configured yet. Please ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in .env.local.'
      );
      return;
    }

    try {
      const calculatedBudget = isCustomBudget
        ? `${currency === 'INR' ? '₹' : '$'}${customAmount}`
        : formData.budget;

      // Exact mapping to public.project_inquiries columns
      const inquiryPayload = {
        client_name: trimmedName,
        email: trimmedEmail.toLowerCase(),
        service: formData.projectType,
        turnaround: formData.timeline,
        budget: calculatedBudget,
        currency: currency,
        project_details: formData.message.trim() || null,
      };

      const { data, error } = await supabase
        .from('project_inquiries')
        .insert([inquiryPayload]);

      if (error) {
        throw error;
      }

      setSubmittedSummary({
        name: trimmedName,
        email: trimmedEmail,
        service: formData.projectType,
        budget: calculatedBudget,
      });

      // Trigger celebratory blue-themed confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#1677FF', '#318BFF', '#FFFFFF', '#69b1ff']
        });
      } catch (confettiErr) {
        console.log('Confetti error:', confettiErr);
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Supabase submission error:', err);
      let errorMsg = err.message || 'Failed to submit inquiry to database. Please try again.';
      if (err.code === '42501' || err.message?.includes('permission denied')) {
        errorMsg = 'Database permission denied: anonymous users cannot insert into public.project_inquiries. Please enable public INSERT policy in Supabase SQL editor.';
      } else if (err.message?.includes('Failed to fetch') || err.message?.includes('NetworkError') || err.message?.includes('fetch failed')) {
        errorMsg = 'Network connection to Supabase failed. Please check your internet connection or secure DNS settings.';
      }
      setSubmitError(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(editorProfile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 bg-navy-950/45 backdrop-blur-[2px] film-grain border-t border-white/10">
      {/* Background ambient electric blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-electric-blue/15 rounded-full blur-[170px] pointer-events-none" />

      <div ref={sectionRef} className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-reveal ${isInView ? 'section-revealed' : ''}`}>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-850 border border-white/10 font-sans text-xs font-medium text-slate-secondary mb-3">
            <Send className="w-3.5 h-3.5 text-electric-blue" />
            <span>COMMISSIONS & INQUIRIES // Q1-Q2</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Let's Work Together
          </h2>
          <p className="font-manrope font-medium text-base sm:text-lg text-[#F5F8FF] mt-2 leading-[1.75] tracking-normal">
            Tell me about your project, timeline, and footage. Reach out directly via WhatsApp, Email, or Instagram DM.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels & Direct Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Connect Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-navy-850 border border-white/15 space-y-6">
              <div className="flex items-center gap-2 font-sans text-xs font-semibold tracking-wider text-electric-blue uppercase">
                <span className="w-2 h-2 rounded-full bg-electric-blue animate-rec" />
                <span>DIRECT CHANNELS // FAST RESPONSE</span>
              </div>

              <h3 className="font-heading font-semibold text-2xl text-white tracking-tight">
                Contact Anil Directly
              </h3>

              <div className="space-y-4">
                {/* Working Email Button */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-navy-900 border border-white/5 hover:border-electric-blue/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors group">
                  <a
                    href={`mailto:${editorProfile.email}`}
                    className="flex items-center gap-3 flex-1 min-w-0"
                    title="Send Email"
                  >
                    <div className="w-10 h-10 rounded-lg bg-navy-800 border border-electric-blue/20 flex items-center justify-center text-electric-blue shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-sans text-[11px] font-semibold uppercase tracking-wider text-slate-muted">
                        Direct Email
                      </div>
                      <div className="font-mono text-xs sm:text-[13px] text-white group-hover:text-electric-light transition-colors truncate">
                        {editorProfile.email}
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <a
                      href={`mailto:${editorProfile.email}`}
                      className="hidden sm:inline-flex px-3 py-1.5 rounded-lg bg-electric-blue/15 hover:bg-electric-blue text-electric-light hover:text-white font-sans text-xs font-semibold transition-colors"
                    >
                      Email Me →
                    </a>
                    <button
                      onClick={copyEmailToClipboard}
                      className="p-2 rounded-lg bg-navy-800 hover:bg-navy-750 text-slate-secondary hover:text-white border border-white/10 transition-colors"
                      title="Copy Email"
                    >
                      {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Working WhatsApp Contact Button */}
                <a
                  href={editorProfile.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 sm:p-4 rounded-xl bg-navy-900 border border-white/5 hover:border-emerald-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-sans text-[11px] font-semibold uppercase tracking-wider text-slate-muted">
                        WhatsApp Contact
                      </div>
                      <div className="font-sans text-xs sm:text-[13px] font-medium text-white group-hover:text-emerald-400 transition-colors">
                        {editorProfile.phone}
                      </div>
                    </div>
                  </div>
                  <span className="font-sans text-xs font-semibold text-emerald-400 group-hover:translate-x-0.5 transition-transform self-end sm:self-auto">Chat on WhatsApp →</span>
                </a>

                {/* Working Instagram Contact Link */}
                <a
                  href={editorProfile.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 sm:p-4 rounded-xl bg-navy-900 border border-white/5 hover:border-electric-blue/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-navy-800 border border-electric-blue/30 flex items-center justify-center text-electric-light shrink-0 group-hover:scale-105 transition-transform">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-sans text-[11px] font-semibold uppercase tracking-wider text-slate-muted">
                        Instagram Profile
                      </div>
                      <div className="font-sans text-xs sm:text-[13px] font-medium text-white group-hover:text-electric-light transition-colors">
                        {editorProfile.instagramHandle}
                      </div>
                    </div>
                  </div>
                  <span className="font-sans text-xs font-semibold text-electric-light group-hover:translate-x-0.5 transition-transform self-end sm:self-auto">Open Instagram →</span>
                </a>
              </div>

              {/* Timezone and working hours */}
              <div className="pt-4 border-t border-white/10 space-y-2 font-sans text-xs font-medium text-slate-secondary">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-slate-muted" />
                  <span>Timezone: IST (UTC+05:30) • Remote Worldwide</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-muted" />
                  <span>Typical Response SLA: Under 12 Hours</span>
                </div>
              </div>
            </div>

            {/* Quick FAQs */}
            <div className="p-6 rounded-2xl bg-navy-850/60 border border-white/10 space-y-4">
              <h4 className="font-heading font-semibold text-lg text-white flex items-center gap-2 tracking-tight">
                <HelpCircle className="w-4 h-4 text-electric-blue" />
                <span>Frequently Asked Questions</span>
              </h4>

              <div className="space-y-2">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-xl bg-navy-900 border border-white/5 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full p-3.5 text-left font-sans text-xs sm:text-[13px] font-medium text-white flex items-center justify-between gap-2 hover:bg-navy-850/50"
                    >
                      <span>{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="w-4 h-4 text-electric-blue shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-muted shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="p-3.5 pt-0 font-manrope font-medium text-[13px] sm:text-sm leading-[1.7] text-[#F5F8FF] border-t border-white/5 bg-navy-900/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="cine-card rounded-2xl p-6 sm:p-8 relative">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-blue-950/80 border border-electric-blue/50 text-electric-light flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-2xl text-white tracking-tight">
                    Inquiry Received, {submittedSummary?.name || formData.name}!
                  </h3>
                  <p className="font-manrope font-medium text-sm sm:text-base text-[#F5F8FF] max-w-md mx-auto leading-[1.75]">
                    Thank you for reaching out. Your inquiry has been saved to the database. I have received your project details for <span className="text-electric-blue font-semibold">{submittedSummary?.service || formData.projectType}</span> ({submittedSummary?.budget || formData.budget}). I will review your requirements and respond back via email at <a href="mailto:editwithaniltiwari@gmail.com" className="text-electric-light hover:text-white font-mono underline decoration-electric-blue/50 transition-colors">editwithaniltiwari@gmail.com</a> within 12 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setSubmittedSummary(null);
                      setSubmitError(null);
                      setIsSubmitting(false);
                      setCurrency('INR');
                      setIsCustomBudget(false);
                      setCustomAmount('');
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'YouTube & Narrative Documentary',
                        timeline: '1-2 Weeks',
                        currency: 'INR',
                        budget: '₹5,000 – ₹10,000',
                        message: ''
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-navy-800 hover:bg-navy-750 font-sans text-xs font-semibold text-slate-secondary border border-white/10 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-heading font-semibold text-2xl text-white tracking-tight">
                      Project Booking Form
                    </h3>
                    <p className="font-manrope font-medium text-xs sm:text-[13px] text-[#F5F8FF] mt-1 leading-[1.65]">
                      Fill out the parameters below to receive an accurate timeline and proposal.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-secondary">
                        Your Name / Channel *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Rivera or Apex Media"
                        className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-white/10 focus:border-electric-blue focus:outline-none font-body text-sm sm:text-[15px] text-white placeholder-slate-600 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-secondary">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-white/10 focus:border-electric-blue focus:outline-none font-body text-sm sm:text-[15px] text-white placeholder-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-secondary">
                      Primary Service / Project Scope
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-white/10 focus:border-electric-blue focus:outline-none font-body text-sm sm:text-[15px] text-white transition-colors"
                    >
                      <option value="YouTube & Narrative Documentary">YouTube Long-Form & Documentary</option>
                      <option value="Viral Reels & Short-Form (9:16)">Viral Reels & Short-Form Series (9:16)</option>
                      <option value="Commercial & Brand Film">Commercial / Brand Anthem / Promo</option>
                      <option value="DaVinci Resolve Color Grading">DaVinci Resolve Color Grading Pass</option>
                      <option value="Thumbnails & Visual Packaging">High-CTR Thumbnails & Visual Packaging</option>
                      <option value="Full Retainer / Channel Pipeline">Ongoing Monthly Editing Retainer</option>
                    </select>
                  </div>

                  {/* Timeline & Budget Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Target Timeline */}
                    <div className="space-y-1.5">
                      <label className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-secondary">
                        Target Turnaround
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-white/10 focus:border-electric-blue focus:outline-none font-body text-sm sm:text-[15px] text-white transition-colors"
                      >
                        <option value="Rush: 24-48 Hours">Rush (24 to 48 Hours)</option>
                        <option value="1-2 Weeks">Standard (1 to 2 Weeks)</option>
                        <option value="Monthly Ongoing">Ongoing Weekly Pipeline</option>
                        <option value="Flexible">Flexible Date</option>
                      </select>
                    </div>

                    {/* Estimated Budget with Dual Currency Selector */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <label className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-secondary">
                          Estimated Budget
                        </label>

                        {/* Currency Selector (INR vs USD) */}
                        <div className="inline-flex items-center p-0.5 rounded-lg bg-navy-950 border border-white/10 text-xs">
                          <button
                            type="button"
                            onClick={() => handleCurrencyChange('INR')}
                            className={`px-2.5 py-1 rounded-md font-sans text-[11px] font-semibold transition-all ${currency === 'INR'
                              ? 'bg-electric-blue text-white shadow-sm'
                              : 'text-slate-muted hover:text-slate-secondary'
                              }`}
                            title="Indian Rupees"
                          >
                            INR (₹)
                          </button>
                          <button
                            type="button"
                            onClick={() => handleCurrencyChange('USD')}
                            className={`px-2.5 py-1 rounded-md font-sans text-[11px] font-semibold transition-all ${currency === 'USD'
                              ? 'bg-electric-blue text-white shadow-sm'
                              : 'text-slate-muted hover:text-slate-secondary'
                              }`}
                            title="US Dollars"
                          >
                            USD ($)
                          </button>
                        </div>
                      </div>

                      {/* Budget Range Select */}
                      <select
                        value={isCustomBudget ? 'custom' : formData.budget}
                        onChange={(e) => handleBudgetSelect(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-white/10 focus:border-electric-blue focus:outline-none font-body text-sm sm:text-[15px] text-white transition-colors"
                      >
                        {(currency === 'INR' ? inrRanges : usdRanges).map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                        <option value="custom">Custom Budget ({currency === 'INR' ? '₹' : '$'})...</option>
                      </select>

                      {/* Custom Budget Numeric Input */}
                      {isCustomBudget && (
                        <div className="relative mt-2">
                          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-electric-light font-mono text-sm font-semibold pointer-events-none">
                            {currency === 'INR' ? '₹' : '$'}
                          </span>
                          <input
                            type="number"
                            min="1"
                            step="1"
                            required={isCustomBudget}
                            value={customAmount}
                            onChange={(e) => handleCustomAmountChange(e.target.value)}
                            placeholder={currency === 'INR' ? 'Enter budget in ₹ (e.g. 15000)' : 'Enter budget in $ (e.g. 250)'}
                            className="w-full pl-8 pr-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 focus:border-electric-blue focus:outline-none font-mono text-sm text-white placeholder-slate-600 transition-colors"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-secondary">
                      Project Vision, References or Footage Link
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share a brief overview of your footage, reference styles you like (YouTube links), or specific pacing/sound design instructions..."
                      className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-white/10 focus:border-electric-blue focus:outline-none font-body text-sm sm:text-[15px] text-white placeholder-slate-600 transition-colors"
                    />
                  </div>

                  {/* Error Alert Message */}
                  {submitError && (
                    <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 flex items-start gap-3 text-xs sm:text-sm animate-in fade-in duration-200">
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-semibold text-red-300 font-heading">Unable to Submit Inquiry</p>
                        <p className="text-red-200/90 leading-relaxed font-manrope">{submitError}</p>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl font-sans font-semibold text-sm sm:text-[15px] uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? 'bg-navy-800 text-slate-400 cursor-not-allowed border border-white/10 opacity-75'
                        : 'bg-electric-blue hover:bg-electric-hover text-white shadow-xl shadow-electric-blue/30 hover:shadow-electric-blue/50 active:scale-[0.99]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-electric-light" />
                        <span>Submitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Project Inquiry</span>
                      </>
                    )}
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
