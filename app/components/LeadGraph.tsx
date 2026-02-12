"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

interface LeadStat {
  _id: string;
  count: number;
}

const LeadGraph = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/lead/stats`)
      .then((res) => res.json())
      .then((stats) => {
        const formatted = stats.map((item: LeadStat) => ({
          date: item._id,
          leads: item.count,
        }));
        setData(formatted);
      })
      .catch((err) => {
        console.error("Error loading lead stats:", err);
      });
  }, []);

  return (
    <div className="w-full h-[400px] bg-neutral-900 p-6 rounded-2xl border border-[#0a2342] shadow-lg">
      <h3 className="text-lg font-semibold text-gray-200 mb-4">
        Leads Overview
      </h3>

      <ResponsiveContainer width="100%" height="90%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00e5ff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#00e5ff" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />
          <XAxis dataKey="date" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />

          <Tooltip
            contentStyle={{
              backgroundColor: "#111",
              border: "1px solid #333",
              borderRadius: "10px",
            }}
          />

          {/* Animated Area */}
          <Area
            type="monotone"
            dataKey="leads"
            stroke="#00e5ff"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorLeads)"
            isAnimationActive={true}
            animationDuration={1500}
            animationEasing="ease-in-out"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LeadGraph;
