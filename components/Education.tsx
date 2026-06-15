const Education = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-12">Education</h2>

        <div className="space-y-8">
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800  hover:border-sky-500 hover:-translate-x-2">
            <h3 className="text-xl font-semibold">
              Master of Computer Applications
            </h3>

            <p className="text-slate-400 mt-2">
              Lokmanya Institute of Management and Computer Applications
            </p>

            <p className="text-sky-400 mt-2">2024 - 2026</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800  hover:border-sky-500 hover:-translate-x-2">
            <h3 className="text-xl font-semibold">
              Bachelor of Computer Applications
            </h3>

            <p className="text-slate-400 mt-2">
              Lokmanya Institute of Management and Computer Applications
            </p>

            <p className="text-sky-400 mt-2">2021 - 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
