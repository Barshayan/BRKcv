// src/components/Contact.jsx
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

const Contact = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const payload = {
      name: form.user_name.value,
      email: form.user_email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    const { data, error } = await supabase.functions.invoke('send-contact-email', {
      body: JSON.stringify(payload),
    });

    if (error) alert('❌ Failed to send message');
    else alert('✅ Message sent successfully!');
    form.reset();
  };

  return (
    <section id="contact" className="p-6">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" rows="4" placeholder="Message" required />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
