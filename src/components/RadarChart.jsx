import React from 'react';
import { Radar, RadarChart as RechartsRadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer } from 'recharts';

const RadarChart = ({ data }) => {
  const chartData = data.map(item => ({
    subject: item.skill,
    A: item.value,
    fullMark: 100,
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsRadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
        <PolarGrid stroke="#e2e8f0" />
        <PolarAngleAxis dataKey="subject" stroke="#1a365d" tick={{ fontSize: 12 }} />
        <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#e2e8f0" tick={{ fontSize: 10 }} />
        <Radar name="您的能力" dataKey="A" stroke="#2a6496" fill="#2a6496" fillOpacity={0.6} />
        <Tooltip />
      </RechartsRadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChart;
