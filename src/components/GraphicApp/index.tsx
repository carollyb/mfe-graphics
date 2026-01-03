'use client';

import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Typography } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Transaction = {
  id: string;
  accountId: string;
  type: string;
  value: number;
  date: string;
};

interface Props {
  testeMfe: string;
  transactions?: Transaction[];
  initialBalance?: number;
  height?: number;
}

export default function GraphicApp({
  transactions = [
    {
      id: '1',
      accountId: 'a',
      type: 'Credit',
      value: 200,
      date: '2024-12-16T18:29:05.170Z',
    },
    {
      id: '2',
      accountId: 'a',
      type: 'Debit',
      value: -200,
      date: '2024-12-17T18:29:06.250Z',
    },
    {
      id: '3',
      accountId: 'a',
      type: 'Debit',
      value: -200,
      date: '2024-12-18T18:29:08.734Z',
    },
    {
      id: '4',
      accountId: 'a',
      type: 'Credit',
      value: 200,
      date: '2024-12-19T18:29:08.734Z',
    },
  ],
  initialBalance = 700,
  testeMfe,
}: Props) {
  const theme = useTheme();
  const sorted = [...transactions].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const labels: string[] = [];
  const balances: number[] = [];
  let balance = initialBalance;

  for (const tx of sorted) {
    balance += tx.value;
    labels.push(new Date(tx.date).toLocaleString());
    balances.push(balance);
  }

  const data = {
    labels,
    datasets: [
      {
        label: 'Saldo',
        data: balances,
        fill: false,
        borderColor: theme?.palette?.primary?.main,
        backgroundColor: theme?.palette?.secondary?.main,
        tension: 0.2,
        pointRadius: 4,
      },
    ],
  };

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
      title: { display: true, text: 'Saldo ao longo do tempo' },
      tooltip: { mode: 'index', intersect: false },
    },
    interaction: { mode: 'nearest', axis: 'x', intersect: false },
    scales: {
      y: { title: { display: true, text: 'Value' } },
      x: { title: { display: true, text: 'Date' } },
    },
  };

  const containerStyle: React.CSSProperties = {
    width: '75vw',
    height: '50vh',
    margin: '24px auto',
    padding: '8px',
    boxSizing: 'border-box',
  };

  return (
    <div>
      <Typography sx={{ textAlign: 'center', margin: '8px 0' }}>
        {testeMfe}
      </Typography>
      <div style={containerStyle}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
