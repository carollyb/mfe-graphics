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
import { Card, Typography } from '@mui/material';
import type { Transaction } from '../../types/Transaction';
import { getBalanceImpact } from '../../utils/getBalanceImpact';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  transactions: Transaction[];
  initialBalance?: number;
  height?: number;
}

export default function GraphicApp({
  transactions,
  initialBalance = 0,
}: Props) {
  const theme = useTheme();
  const sorted = [...transactions].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const labels: string[] = [];
  const balances: number[] = [];
  let balance = initialBalance;

  for (const tx of sorted) {
    balance += getBalanceImpact(tx.type, tx.value);
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
        borderColor: theme?.palette?.secondary?.main,
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
      legend: { display: false },
      title: { display: false },
      tooltip: { mode: 'index', intersect: false },
    },
    interaction: { mode: 'nearest', axis: 'x', intersect: false },
    scales: {
      y: { title: { display: true, text: 'Saldo' } },
      x: { title: { display: true, text: 'Data' } },
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
    <Card sx={{ padding: 2, backgroundColor: theme.palette.primary.main }}>
      <Typography
        variant='h6'
        component='h2'
        gutterBottom
        sx={{ flexShrink: 0, color: 'text.disabled' }}
      >
        Evolução do Saldo
      </Typography>
      <div style={containerStyle}>
        <Line data={data} options={options} />
      </div>
    </Card>
  );
}
