import {
  Search,
  Package,
  Truck,
  ShieldCheck,
  Sparkles,
  ChevronRight,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* NAVBAR */}
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900">
              <Package className="h-5 w-5 text-white" />
            </div>

            <div>
              <h1 className="text-lg font-bold text-slate-900">
                SpareFlow
              </h1>

              <p className="text-xs text-slate-500">
                Autonomous Spare Parts
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <button className="font-medium text-slate-900">
              Order Parts
            </button>

            <button className="text-slate-500 hover:text-slate-900">
              My Orders
            </button>

            <button className="text-slate-500 hover:text-slate-900">
              Track Order
            </button>

            <div className="h-9 w-9 rounded-full bg-slate-200 flex items-center justify-center font-semibold">
              A
            </div>
          </div>

        </div>
      </nav>


      {/* HERO */}
      <main className="mx-auto max-w-7xl px-8 py-12">

        <div className="mb-10 max-w-3xl">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-700">
            <Sparkles className="h-4 w-4" />
            AI-powered fulfilment
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Get the right spare part,
            <br />
            <span className="text-indigo-600">
              when you need it.
            </span>
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Our AI evaluates inventory, suppliers, delivery times,
            pricing and compatible alternatives to find the best
            fulfilment strategy for your requirement.
          </p>

        </div>


        {/* SEARCH CARD */}
        <div className="rounded-2xl border bg-white p-8 shadow-sm">

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-900">
              Find a Spare Part
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Tell us what you need and when you need it.
            </p>
          </div>


          <div className="grid gap-5 md:grid-cols-2">

            {/* PART SEARCH */}
            <div className="md:col-span-2">

              <label className="mb-2 block text-sm font-medium text-slate-700">
                Part number or description
              </label>

              <div className="relative">

                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  placeholder="e.g. Hydraulic Pump HP-204"
                  className="w-full rounded-xl border border-slate-200 py-3.5 pl-12 pr-4 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />

              </div>

            </div>


            {/* QUANTITY */}
            <div>

              <label className="mb-2 block text-sm font-medium text-slate-700">
                Quantity
              </label>

              <input
                type="number"
                placeholder="20"
                className="w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />

            </div>


            {/* REQUIRED DATE */}
            <div>

              <label className="mb-2 block text-sm font-medium text-slate-700">
                Required by
              </label>

              <input
                type="date"
                className="w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />

            </div>


            {/* URGENCY */}
            <div>

              <label className="mb-2 block text-sm font-medium text-slate-700">
                Requirement priority
              </label>

              <select
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              >
                <option>Normal</option>
                <option>High</option>
                <option>Production Critical</option>
                <option>Emergency</option>
              </select>

            </div>


            {/* PURPOSE */}
            <div>

              <label className="mb-2 block text-sm font-medium text-slate-700">
                Intended use
              </label>

              <input
                type="text"
                placeholder="e.g. Production line maintenance"
                className="w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />

            </div>

          </div>


          {/* AI BUTTON */}
          <button
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-4 font-semibold text-white transition hover:bg-slate-800"
          >

            <Sparkles className="h-5 w-5" />

            Find Best Fulfilment Plan

            <ChevronRight className="h-5 w-5" />

          </button>

        </div>


        {/* AI CAPABILITIES */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">

          <FeatureCard
            icon={<Sparkles />}
            title="AI Fulfilment Planning"
            description="Evaluates suppliers, warehouses, cost, lead time and urgency."
          />

          <FeatureCard
            icon={<Package />}
            title="Alternative Parts"
            description="If your exact part is unavailable, AI identifies compatible alternatives."
          />

          <FeatureCard
            icon={<Truck />}
            title="Smart Delivery"
            description="Balances speed, cost and reliability to meet your deadline."
          />

        </div>


        {/* TRUST MESSAGE */}
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
          <ShieldCheck className="h-4 w-4" />
          AI recommendations are explainable and approval-controlled.
        </div>

      </main>

    </div>
  );
}


function FeatureCard({ icon, title, description }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
        {icon}
      </div>

      <h3 className="font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>

    </div>
  );
}

export default App;