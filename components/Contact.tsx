import React, { useRef, useState } from 'react';
import { Button } from './ui/Button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CONTACT_INFO } from '../constants';

export const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Validation functions
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone: string) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone.replace(/\s/g, ''));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    // Validate all fields
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.treatment) newErrors.treatment = 'Please select a treatment';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate form submission
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', phone: '', email: '', treatment: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section ref={containerRef} id="book" className="relative py-32 px-6 overflow-hidden bg-teal-900 rounded-b-[4rem]">

      {/* Background Image Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-teal-900/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2070&auto=format&fit=crop"
          alt="Modern dental clinic interior with comfortable seating and professional equipment"
          className="w-full h-full object-cover opacity-60 scale-110"
        />
      </motion.div>

      <div className="relative z-20 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        {/* Left: Text */}
        <div className="lg:col-span-6 text-white">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-sans font-bold text-xs tracking-widest text-terracotta-500">006</span>
            <div className="h-[1px] w-8 bg-white/20"></div>
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] opacity-80">Book Appointment</span>
          </div>

          <h2 className="font-serif text-5xl sm:text-6xl lg:text-8xl mb-8 leading-[0.9]">
            Start Your <br /> Journey.
          </h2>
          <p className="opacity-70 font-sans font-light text-lg max-w-md leading-relaxed mb-12">
            Join over 90,000 happy patients who have transformed their smiles with us.
            Transparent pricing. No waiting.
          </p>

          <div className="flex gap-8 text-xs uppercase tracking-widest opacity-60">
            <div>
              <span className="block text-terracotta-500 mb-1">Email</span>
              {CONTACT_INFO.email}
            </div>
            <div>
              <span className="block text-terracotta-500 mb-1">Phone</span>
              {CONTACT_INFO.phone}
            </div>
          </div>
        </div>

        {/* Right: Floating Form Card */}
        <div className="lg:col-span-6 lg:pl-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 md:p-14 shadow-2xl relative max-w-lg mx-auto lg:mx-0 rounded-[3rem]"
          >
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-24 h-24">
              <svg viewBox="0 0 100 100" className="fill-terracotta-500">
                <path d="M0 0 L100 0 L100 100 Z" />
              </svg>
            </div>

            <h3 className="font-serif text-4xl text-teal-900 mb-10">Make an appointment</h3>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl text-green-800 text-sm">
                ✓ Thank you! We'll contact you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full border-b ${errors.name ? 'border-red-500' : 'border-neutral-300'} py-4 focus:outline-none focus:border-terracotta-500 transition-colors bg-transparent placeholder-neutral-400 font-sans text-sm`}
                  placeholder="Full Name *"
                  aria-required="true"
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="sr-only">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full border-b ${errors.phone ? 'border-red-500' : 'border-neutral-300'} py-4 focus:outline-none focus:border-terracotta-500 transition-colors bg-transparent placeholder-neutral-400 font-sans text-sm`}
                    placeholder="Phone Number *"
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-2">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full border-b ${errors.email ? 'border-red-500' : 'border-neutral-300'} py-4 focus:outline-none focus:border-terracotta-500 transition-colors bg-transparent placeholder-neutral-400 font-sans text-sm`}
                    placeholder="Email Address *"
                    aria-required="true"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
                </div>
              </div>

              <div className="pt-4">
                <label htmlFor="treatment" className="sr-only">Select Treatment</label>
                <select
                  id="treatment"
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleChange}
                  className={`w-full border-b ${errors.treatment ? 'border-red-500' : 'border-neutral-300'} py-4 focus:outline-none focus:border-terracotta-500 transition-colors bg-transparent text-neutral-500 font-sans text-sm`}
                  aria-required="true"
                  aria-invalid={!!errors.treatment}
                >
                  <option value="">Select Treatment *</option>
                  <option value="consultation">General Consultation</option>
                  <option value="cosmetic">Cosmetic Dentistry</option>
                  <option value="implants">Implants</option>
                  <option value="aligners">Invisible Aligners</option>
                  <option value="preventive">Preventive Care</option>
                </select>
                {errors.treatment && <p className="text-red-500 text-xs mt-2">{errors.treatment}</p>}
              </div>

              <div className="pt-8">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-900 text-white hover:bg-teal-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};