'use client';
export default function Home() {
  return (
    <main className="text-gray-800 bg-white">
      {/* HERO SECTION */}
      <section className="h-screen bg-[url('/hero.jpg')] bg-cover bg-center flex flex-col justify-center items-center px-4 text-center">
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl max-w-2xl shadow-lg">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">Dr. Serena Blake, PsyD</h1>
          <p className="text-lg md:text-xl mb-6">
            Licensed Clinical Psychologist in Los Angeles, California
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition"
          >
            Book a Free Consult
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="flex justify-center">
        <img 
        src="/profile.jpg"
        alt="Dr. Serena Blake"
        className="rounded-full w-48 h-48 object-cover border-4 border-white shadow" />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Dr. Serena Blake</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            With 8 years of experience and 500+ sessions, Dr. Serena Blake provides
            compassionate, evidence-based therapy for anxiety, trauma, and relationship issues.
            She offers both in-person and virtual care to create a safe space for healing and growth.
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-white px-6" id="services">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Services</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Anxiety */}
            <div className="bg-gray-100 rounded-lg shadow p-6 hover:shadow-lg transition">
              <img
                src="/anxiety.jpg"
                alt="Anxiety Therapy"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Anxiety & Stress Management</h3>
              <p className="text-gray-700 text-sm">
                Learn to manage overwhelming thoughts and reduce physical symptoms of stress through
                mindfulness and cognitive techniques tailored to your unique challenges.
              </p>
            </div>

            {/* Relationship */}
            <div className="bg-gray-100 rounded-lg shadow p-6 hover:shadow-lg transition">
              <img
                src="/relationship.jpg"
                alt="Couples Therapy"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Relationship Counseling</h3>
              <p className="text-gray-700 text-sm">
                Whether you are struggling with communication, trust, or connection — gain clarity and
                rebuild strong, healthy relationships through proven couples therapy approaches.
              </p>
            </div>

            {/* Trauma */}
            <div className="bg-gray-100 rounded-lg shadow p-6 hover:shadow-lg transition">
              <img
                src="/trauma.jpg"
                alt="Trauma Recovery"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Trauma Recovery</h3>
              <p className="text-gray-700 text-sm">
                Heal from past trauma in a safe and nurturing space. Dr. Blake uses trauma-informed
                methods to support emotional recovery at your pace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-gray-50 py-20 px-6" id="faq">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>

          <details className="mb-4 border rounded-lg p-4 bg-white shadow-sm">
            <summary className="cursor-pointer font-semibold text-lg">
              Do you accept insurance?
            </summary>
            <p className="mt-2 text-gray-700 text-sm">
              No, I do not accept insurance, but I can provide you with a superbill for self-submission.
            </p>
          </details>

          <details className="mb-4 border rounded-lg p-4 bg-white shadow-sm">
            <summary className="cursor-pointer font-semibold text-lg">
              Are online sessions available?
            </summary>
            <p className="mt-2 text-gray-700 text-sm">
              Yes. I offer virtual sessions via Zoom on Monday, Wednesday, and Friday afternoons.
            </p>
          </details>

          <details className="mb-4 border rounded-lg p-4 bg-white shadow-sm">
            <summary className="cursor-pointer font-semibold text-lg">
              What is your cancellation policy?
            </summary>
            <p className="mt-2 text-gray-700 text-sm">
              I require at least 24 hours notice for cancellations. Late cancellations may be charged.
            </p>
          </details>
        </div>
      </section>
      {/* CONTACT SECTION */}
<section className="bg-white py-20 px-6" id="contact">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10">Contact Dr. Serena Blake</h2>

    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = (form.elements.namedItem("name") as HTMLInputElement).value;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;
        const time = form.time.value;
        const agree = form.agree.checked;

        if (!name || !phone || !email || !message || !time || !agree) {
          alert("Please fill out all fields and agree to be contacted.");
        } else {
          alert("Form submitted successfully!");
          form.reset();
        }
      }}
      className="space-y-6 bg-gray-50 p-8 rounded-xl shadow"
    >
      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input name="name" type="text" className="w-full p-3 border rounded" required />
      </div>

      <div>
        <label className="block mb-1 font-medium">Phone</label>
        <input name="phone" type="text" className="w-full p-3 border rounded" required />
      </div>

      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input name="email" type="email" className="w-full p-3 border rounded" required />
      </div>

      <div>
        <label className="block mb-1 font-medium">What brings you here?</label>
        <textarea name="message" rows={4} className="w-full p-3 border rounded" required></textarea>
      </div>

      <div>
        <label className="block mb-1 font-medium">Preferred time to reach you</label>
        <input name="time" type="text" className="w-full p-3 border rounded" required />
      </div>

      <div className="flex items-center">
        <input type="checkbox" name="agree" id="agree" className="mr-2" required />
        <label htmlFor="agree">I agree to be contacted</label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
      >
        Send Message
      </button>
    </form>

    <div className="mt-10 text-center text-sm text-gray-600">
      📍 1287 Maplewood Drive, Los Angeles, CA 90026 <br />
      📞 (323) 555-0192 <br />
      📧 bhavishya1345w1@.com
    </div>
  </div>
</section>
    </main>
  );
}