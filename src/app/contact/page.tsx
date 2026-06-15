export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white">
          Contact Us
        </h1>

        <p className="mt-3 text-blue-700">
          We do love to hear from you.
        </p>
      </div>

      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
        "
      >
        <div className="grid gap-4">
          <input
            placeholder="Your Name"
            className="rounded-xl bg-black/30 p-4 text-black"
          />

          <input
            placeholder="Email Address"
            className="rounded-xl bg-black/30 p-4 text-black"
          />

          <textarea
            rows={6}
            placeholder="Message"
            className="rounded-xl bg-black/30 p-4 text-blue"
          />

          <button
            className="
              rounded-xl
              bg-red-600
              py-4
              text-white
            "
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}