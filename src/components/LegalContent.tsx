import { Mail, Phone } from 'lucide-react';
import privacyHtml from '../content/privacy-policy.html?raw';
import termsHtml from '../content/terms-and-conditions.html?raw';

export const ContactContent = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a 
          href="tel:+12034506033"
          className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-accent/50 hover:shadow-lg transition-all group"
        >
          <Phone className="w-6 h-6 text-accent mb-4 group-hover:scale-110 transition-transform" />
          <h4 className="font-bold text-dark mb-1">Call Us</h4>
          <p className="text-zinc-500 text-sm font-semibold">203-450-6033</p>
        </a>
        <a 
          href="mailto:support@contentsyndicate.net"
          className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-accent/50 hover:shadow-lg transition-all group"
        >
          <Mail className="w-6 h-6 text-accent mb-4 group-hover:scale-110 transition-transform" />
          <h4 className="font-bold text-dark mb-1">Email Us</h4>
          <p className="text-zinc-500 text-sm font-semibold">support@contentsyndicate.net</p>
        </a>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20">
        <p className="text-center text-dark font-semibold">
          Ready to get started? Contact us today for a free consultation!
        </p>
      </div>
    </div>
  );
};

export const PrivacyContent = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: privacyHtml }} />
  );
};

export const TermsContent = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: termsHtml }} />
  );
};

