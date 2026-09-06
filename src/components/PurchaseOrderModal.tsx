import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  CreditCard, 
  Sparkles, 
  ArrowRight,
  Lock,
  Building2,
  Mail,
  User,
  Check
} from 'lucide-react';
import { PricingPlan } from '../data/digimaxData';

interface PurchaseOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: PricingPlan | null;
  billingCycle: 'monthly' | 'annual';
  onBillingCycleChange: (cycle: 'monthly' | 'annual') => void;
}

export const PurchaseOrderModal: React.FC<PurchaseOrderModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
  billingCycle,
  onBillingCycleChange,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [coupon, setCoupon] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'wire'>('card');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!selectedPlan) return null;

  const basePrice = billingCycle === 'annual' ? selectedPlan.annualPrice : selectedPlan.monthlyPrice;
  const discountAmount = discountApplied ? Math.round(basePrice * 0.15) : 0;
  const finalPrice = Math.max(0, basePrice - discountAmount);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === 'DIGIMAX' || coupon.trim().toUpperCase() === 'SAVE15') {
      setDiscountApplied(true);
    }
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `DGX-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="purchase-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
          role="dialog"
          aria-modal="true"
          onClick={resetAndClose}
        >
          <motion.div
            key="purchase-modal-card"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0.12 }}
            className="relative w-full max-w-2xl bg-[#110c24] border border-purple-800/60 rounded-3xl shadow-2xl shadow-purple-950/70 text-slate-100 overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 4 Optical Corner Reticles */}
            <div className="pointer-events-none absolute inset-0 z-20" aria-hidden="true">
              <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-fuchsia-500/70" />
              <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-fuchsia-500/70" />
              <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-fuchsia-500/70" />
              <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-fuchsia-500/70" />
            </div>

            {/* Top Bar */}
            <div className="flex items-center justify-between p-5 border-b border-purple-900/50 bg-[#150f2f]">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-fuchsia-400">
                  DIGIMAX // SECURE CHECKOUT
                </span>
              </div>

              <button
                type="button"
                onClick={resetAndClose}
                className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {isSubmitted ? (
              /* Success Confirmation View */
              <div className="p-8 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 to-fuchsia-600 flex items-center justify-center mx-auto shadow-lg shadow-pink-500/30">
                  <Check className="w-8 h-8 text-white stroke-[3]" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Order Successfully Initiated!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{fullName || 'Valued Partner'}</strong>! Your order for the <strong className="text-fuchsia-300">{selectedPlan.name}</strong> has been provisioned.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#171033] border border-purple-800/50 max-w-sm mx-auto text-left font-mono text-xs space-y-2">
                  <div className="flex justify-between text-slate-400">
                    <span>Order Reference:</span>
                    <span className="text-white font-bold">{orderId}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Plan:</span>
                    <span className="text-fuchsia-400">{selectedPlan.name}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Billing:</span>
                    <span className="text-white capitalize">{billingCycle}</span>
                  </div>
                  <div className="flex justify-between text-slate-400 pt-2 border-t border-purple-900/50">
                    <span>Total Charged:</span>
                    <span className="text-pink-400 font-bold">${finalPrice}/mo</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={resetAndClose}
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg"
                  >
                    Return to DigiMax
                  </button>
                </div>
              </div>
            ) : (
              /* Standard Checkout View */
              <form onSubmit={handleCheckout} className="p-6 sm:p-8 space-y-6">
                
                {/* Plan Summary Header */}
                <div className="p-4 rounded-2xl bg-[#191138] border border-purple-800/40 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-bold text-white tracking-tight">
                        {selectedPlan.name}
                      </h4>
                      {selectedPlan.popular && (
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-bold text-white bg-fuchsia-600 uppercase tracking-wider">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Includes full deployment & direct priority access
                    </p>
                  </div>

                  <div className="text-right">
                    <div className="text-2xl font-black text-white">
                      ${finalPrice}
                      <span className="text-xs font-normal text-slate-400 font-mono">
                        /mo
                      </span>
                    </div>
                    {billingCycle === 'annual' && (
                      <span className="text-[10px] text-pink-400 font-medium">
                        Annual 20% Discount Active
                      </span>
                    )}
                  </div>
                </div>

                {/* Form Fields Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-pink-400" />
                      <span>Full Name</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d091d] border border-purple-900/60 focus:border-pink-500 focus:outline-none text-xs text-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-pink-400" />
                      <span>Work Email</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d091d] border border-purple-900/60 focus:border-pink-500 focus:outline-none text-xs text-white"
                    />
                  </div>

                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-pink-400" />
                      <span>Company / Brand Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Studio, Inc."
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d091d] border border-purple-900/60 focus:border-pink-500 focus:outline-none text-xs text-white"
                    />
                  </div>
                </div>

                {/* Coupon Code Strip */}
                <div className="pt-1 flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter Coupon (e.g. DIGIMAX)"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className="flex-1 px-3.5 py-2 rounded-xl bg-[#0d091d] border border-purple-900/60 focus:border-pink-500 focus:outline-none text-xs text-white font-mono uppercase"
                  />
                  <button
                    type="button"
                    onClick={handleApplyCoupon}
                    className="px-4 py-2 rounded-xl bg-purple-900/50 hover:bg-purple-800 border border-purple-700/60 text-xs font-semibold text-white transition-colors"
                  >
                    Apply
                  </button>
                </div>

                {discountApplied && (
                  <div className="p-2 rounded-lg bg-pink-500/15 border border-pink-500/35 text-pink-300 text-xs flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Special Coupon Applied: 15% Extra Savings Applied!</span>
                  </div>
                )}

                {/* Payment Method Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Payment Method
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-2.5 rounded-xl border text-xs font-medium flex items-center justify-center gap-2 transition-all ${
                        paymentMethod === 'card'
                          ? 'bg-fuchsia-950/50 border-pink-500 text-white shadow-sm shadow-pink-500/20'
                          : 'bg-[#150f2e] border-purple-900/50 text-slate-400 hover:text-white'
                      }`}
                    >
                      <CreditCard className="w-3.5 h-3.5" />
                      <span>Credit Card</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('paypal')}
                      className={`p-2.5 rounded-xl border text-xs font-medium flex items-center justify-center gap-2 transition-all ${
                        paymentMethod === 'paypal'
                          ? 'bg-fuchsia-950/50 border-pink-500 text-white shadow-sm shadow-pink-500/20'
                          : 'bg-[#150f2e] border-purple-900/50 text-slate-400 hover:text-white'
                      }`}
                    >
                      <span>PayPal</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('wire')}
                      className={`p-2.5 rounded-xl border text-xs font-medium flex items-center justify-center gap-2 transition-all ${
                        paymentMethod === 'wire'
                          ? 'bg-fuchsia-950/50 border-pink-500 text-white shadow-sm shadow-pink-500/20'
                          : 'bg-[#150f2e] border-purple-900/50 text-slate-400 hover:text-white'
                      }`}
                    >
                      <span>Wire Invoice</span>
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-purple-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <Lock className="w-3.5 h-3.5 text-pink-400" />
                    <span>256-Bit SSL Encrypted Checkout</span>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={resetAndClose}
                      className="px-4 py-2.5 rounded-full text-xs font-medium text-slate-400 hover:text-white transition-colors"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="flex-1 sm:flex-initial px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-pink-500/30 hover:shadow-pink-500/45 transition-all"
                    >
                      Confirm Order (${finalPrice}/mo)
                    </button>
                  </div>
                </div>

              </form>
            )}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
