// app/contact/page.tsx (or wherever you want the form)
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="flex items-center justify-center h-auto w-full">
      <ContactForm />
    </div>
  );
}
