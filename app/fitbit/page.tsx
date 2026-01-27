// app/fitbit/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
);

type FitbitSummary = {
  caloriesOut?: number;
  activityCalories?: number;
  caloriesBMR?: number;
  steps?: number;
  sedentaryMinutes?: number;
  lightlyActiveMinutes?: number;
  fairlyActiveMinutes?: number;
  veryActiveMinutes?: number;
  distances?: { activity: string; distance: number }[];
  goals?: {
    caloriesOut?: number;
    steps?: number;
    distance?: number;
  };
};

type FitbitResponse = {
  activities?: any[];
  summary?: FitbitSummary;
};

export default function FitbitPage() {
  const searchParams = useSearchParams();
  const [data, setData] = useState<FitbitResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // For the demo flow: only auto-load data when coming back with ?success=1
  const shouldLoad = searchParams.get("success") === "1";

  const handleConnect = () => {
    // Kick off the OAuth flow
    window.location.href = "/api/fitbit/auth";
  };

  useEffect(() => {
    if (!shouldLoad) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/fitbit/data");
        const json = await res.json();

        if (!res.ok) {
          setError(json?.error || "Failed to load Fitbit data");
          setData(null);
        } else {
          setData(json);
        }
      } catch (err) {
        console.error(err);
        setError("Unexpected error while loading data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [shouldLoad]);

  const summary = data?.summary || {};
  const distances = summary.distances || [];

  const getDistance = (activity: string) =>
    distances.find((d) => d.activity === activity)?.distance ?? 0;

  // ---- Chart datasets ---- //

  // Activity “ring” – sedentary vs light vs fairly vs very active
  const activityMinutesChart = {
    labels: ["Sedentary", "Light", "Fairly Active", "Very Active"],
    datasets: [
      {
        label: "Minutes",
        data: [
          summary.sedentaryMinutes ?? 0,
          summary.lightlyActiveMinutes ?? 0,
          summary.fairlyActiveMinutes ?? 0,
          summary.veryActiveMinutes ?? 0,
        ],
        backgroundColor: [
          "rgba(148, 163, 184, 0.9)", // slate-400
          "rgba(56, 189, 248, 0.9)",  // sky-400
          "rgba(96, 165, 250, 0.9)",  // blue-400
          "rgba(251, 146, 60, 0.9)",  // orange-400
        ],
        borderWidth: 0,
      },
    ],
  };

  // Steps vs goal bar chart
  const stepsBarChart = {
    labels: ["Steps"],
    datasets: [
      {
        label: "Actual",
        data: [summary.steps ?? 0],
        backgroundColor: "rgba(96, 165, 250, 0.9)", // blue-400
      },
      {
        label: "Goal",
        data: [summary.goals?.steps ?? 10000],
        backgroundColor: "rgba(148, 163, 184, 0.6)", // slate-400
      },
    ],
  };

  // Calories over “baseline” line chart (BMR vs caloriesOut)
  const caloriesLineChart = {
    labels: ["BMR", "Activity Calories", "Total Out"],
    datasets: [
      {
        label: "Calories",
        data: [
          summary.caloriesBMR ?? 0,
          summary.activityCalories ?? 0,
          summary.caloriesOut ?? 0,
        ],
        borderColor: "rgba(52, 211, 153, 1)", // emerald-400
        backgroundColor: "rgba(52, 211, 153, 0.2)",
        tension: 0.35,
        fill: true,
        pointRadius: 4,
      },
    ],
  };

  // Distances stacked bar
  const distanceBarChart = {
    labels: ["Distance (km)"],
    datasets: [
      {
        label: "Total",
        data: [getDistance("total")],
        backgroundColor: "rgba(56, 189, 248, 0.9)", // sky
      },
      {
        label: "Lightly Active",
        data: [getDistance("lightlyActive")],
        backgroundColor: "rgba(129, 140, 248, 0.9)", // indigo
      },
      {
        label: "Fairly Active",
        data: [getDistance("fairlyActive")],
        backgroundColor: "rgba(96, 165, 250, 0.9)", // blue
      },
      {
        label: "Very Active",
        data: [getDistance("veryActive")],
        backgroundColor: "rgba(249, 115, 22, 0.9)", // orange
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10">
        {/* Header */}
        <header className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              My Fitbit Data
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              Daily activity snapshot powered by Fitbit + OAuth2.
            </p>
          </div>

          <button
            onClick={handleConnect}
            className="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400"
          >
            {shouldLoad ? "Reconnect Fitbit" : "Connect Fitbit"}
          </button>
        </header>

        {/* Status / Error */}
        {loading && (
          <div className="mb-6 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-300">
            Syncing with Fitbit…
          </div>
        )}

        {error && (
          <div className="mb-6 rounded-xl border border-red-800 bg-red-900/70 px-4 py-3 text-sm text-red-100">
            <p className="font-semibold">Error loading Fitbit data</p>
            <p className="text-xs text-red-200">{error}</p>
          </div>
        )}

        {!shouldLoad && !loading && !data && (
          <div className="mb-8 rounded-xl border border-slate-800 bg-slate-900 px-4 py-4 text-sm text-slate-300">
            Click <span className="font-semibold">“Connect Fitbit”</span> to
            start the OAuth flow. You’ll be redirected back here with today’s
            data.
          </div>
        )}

        {/* Only render dashboard once we have data */}
        {data && summary && (
          <>
            {/* Summary cards */}
            <section className="mb-10">
              <h2 className="mb-3 text-lg font-semibold tracking-tight">
                Summary
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <SummaryCard
                  label="Calories Out"
                  value={summary.caloriesOut}
                  suffix="kcal"
                />
                <SummaryCard
                  label="BMR"
                  value={summary.caloriesBMR}
                  suffix="kcal"
                />
                <SummaryCard label="Steps" value={summary.steps} />
                <SummaryCard
                  label="Sedentary Minutes"
                  value={summary.sedentaryMinutes}
                  suffix="min"
                />
              </div>
            </section>

            {/* Charts layout */}
            <section className="mb-10 space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Activity ring */}
                <ChartCard title="Activity Breakdown (Minutes)">
                  <Doughnut
                    data={activityMinutesChart}
                    options={{
                      plugins: {
                        legend: {
                          position: "bottom",
                          labels: {
                            color: "#cbd5f5",
                          },
                        },
                      },
                      cutout: "60%",
                    }}
                  />
                </ChartCard>

                {/* Steps vs goal */}
                <ChartCard title="Steps vs Goal">
                  <Bar
                    data={stepsBarChart}
                    options={{
                      responsive: true,
                      plugins: {
                        legend: {
                          position: "bottom",
                          labels: { color: "#cbd5f5" },
                        },
                      },
                      scales: {
                        x: {
                          ticks: { color: "#94a3b8" },
                          grid: { color: "rgba(148, 163, 184, 0.15)" },
                        },
                        y: {
                          ticks: { color: "#94a3b8" },
                          grid: { color: "rgba(148, 163, 184, 0.15)" },
                        },
                      },
                    }}
                  />
                </ChartCard>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                {/* Calories */}
                <ChartCard title="Calories Breakdown">
                  <Line
                    data={caloriesLineChart}
                    options={{
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                      scales: {
                        x: {
                          ticks: { color: "#94a3b8" },
                          grid: { color: "rgba(148, 163, 184, 0.1)" },
                        },
                        y: {
                          ticks: { color: "#94a3b8" },
                          grid: { color: "rgba(148, 163, 184, 0.1)" },
                        },
                      },
                    }}
                  />
                </ChartCard>

                {/* Distance */}
                <ChartCard title="Distance by Intensity (km)">
                  <Bar
                    data={distanceBarChart}
                    options={{
                      responsive: true,
                      plugins: {
                        legend: {
                          position: "bottom",
                          labels: { color: "#cbd5f5" },
                        },
                      },
                      scales: {
                        x: {
                          stacked: true,
                          ticks: { color: "#94a3b8" },
                          grid: { color: "rgba(148, 163, 184, 0.15)" },
                        },
                        y: {
                          stacked: true,
                          ticks: { color: "#94a3b8" },
                          grid: { color: "rgba(148, 163, 184, 0.15)" },
                        },
                      },
                    }}
                  />
                </ChartCard>
              </div>
            </section>

            {/* Raw JSON (collapsible) */}
            <section>
              <details className="rounded-xl border border-slate-800 bg-slate-950">
                <summary className="cursor-pointer list-none rounded-xl px-4 py-3 text-sm font-medium text-slate-200 hover:bg-slate-900/70">
                  Raw Fitbit JSON
                </summary>
                <pre className="max-h-72 overflow-auto bg-slate-950 px-4 pb-4 pt-2 text-xs leading-relaxed text-slate-300">
                  {JSON.stringify(data, null, 2)}
                </pre>
              </details>
            </section>
          </>
        )}
      </div>
    </main>
  );
}

type SummaryCardProps = {
  label: string;
  value?: number;
  suffix?: string;
};

function SummaryCard({ label, value, suffix }: SummaryCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-4 shadow-sm shadow-slate-900/60">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
        {label}
      </p>
      <p className="mt-2 text-2xl font-semibold">
        {value ?? 0}
        {suffix && (
          <span className="ml-1 align-middle text-xs font-normal text-slate-400">
            {suffix}
          </span>
        )}
      </p>
    </div>
  );
}

type ChartCardProps = {
  title: string;
  children: React.ReactNode;
};

function ChartCard({ title, children }: ChartCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm shadow-slate-900/70">
      <h3 className="mb-3 text-sm font-semibold text-slate-200">{title}</h3>
      <div className="h-64">
        {children}
      </div>
    </div>
  );
}
