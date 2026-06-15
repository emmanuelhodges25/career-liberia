export default function DeveloperPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
        "
      >
        <div className="flex flex-col items-center text-center">
          <div
            className="
              mb-6
              h-36
              w-36
              rounded-full
              bg-linear-to-br
              from-red-500
              to-blue-700
            "
          />

          <h1 className="text-4xl font-bold text-blue-500">
            Emmanuel Hodges
          </h1>

          <p className="mt-4 max-w-2xl text-slate-800">
            I am a Junior Developer passionate about evolving through
            learning resources, graphics design, digital solutions,
            and technology innovation.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-6
          "
        >
          <h2 className="text-xl font-semibold text-blue-800">
            Contact
          </h2>

          <p className="mt-3 text-slate-800">
            Phone: +231 770 376 793
          </p>

          <p className="mt-2 text-slate-800">
            Email: emmanuelhodges17@gmail.com
          </p>
        </div>

        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-6
          "
        >
          <h2 className="text-xl font-semibold text-blue-800">
            Skills
          </h2>

          <ul className="mt-4 space-y-2 text-slate-800">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Graphics Design</li>
            <li>Digital Solutions</li>
            <li>Technology Innovation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}