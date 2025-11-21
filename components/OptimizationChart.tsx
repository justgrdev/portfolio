import {
	Bar,
	BarChart,
	CartesianGrid,
	Cell,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const data = [
	{ name: "Prisma ORM", time: 96, label: "Original" }, // 1m36s -> 96s
	{ name: "Kysely (TS)", time: 10, label: "Optimized" },
];

function formatTime(seconds: number) {
	const mins = Math.floor(seconds / 60);
	const secs = seconds % 60;
	if (mins > 0) return `${mins}m${secs}s`;
	return `${secs}s`;
}

export default function OptimizationChart() {
	return (
		<div className="h-[300px] w-full bg-surface/30 rounded-xl p-6 border border-white/5 relative overflow-hidden group">
			<div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-red-500 to-green-500" />

			<div className="mb-4">
				<h3 className="text-lg font-display font-bold text-white">
					Database Performance
				</h3>
				<p className="text-sm text-slate-400">
					Complex Query Response Time Reduction
				</p>
			</div>

			<ResponsiveContainer width="100%" height="80%">
				<BarChart
					data={data}
					layout="vertical"
					margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
				>
					<CartesianGrid
						strokeDasharray="3 3"
						horizontal={false}
						stroke="#334155"
					/>
					<XAxis type="number" hide />
					<YAxis
						dataKey="name"
						type="category"
						tick={{ fill: "#94a3b8", fontSize: 12 }}
						width={80}
					/>
					<Tooltip
						cursor={{ fill: "transparent" }}
						contentStyle={{
							backgroundColor: "#0f172a",
							borderColor: "#1e293b",
							color: "#fff",
						}}
						itemStyle={{ color: "#fff" }}
						formatter={(value: number) => [formatTime(value), "Time"]}
					/>
					<Bar dataKey="time" radius={[0, 4, 4, 0]} barSize={40}>
						{data.map((entry, index) => (
							<Cell
								key={`cell-${entry.name}`}
								fill={index === 0 ? "#ef4444" : "#22c55e"}
							/>
						))}
					</Bar>
				</BarChart>
			</ResponsiveContainer>

			<div className="absolute bottom-4 right-6 text-right">
				{(() => {
					const reduction = Math.max(0, data[0].time - data[1].time);
					return (
						<>
							<span className="text-3xl font-bold text-green-400">
								-{formatTime(reduction)}
							</span>
							<span className="text-xs text-slate-400 ml-2">Reduced</span>
						</>
					);
				})()}
			</div>
		</div>
	);
}
