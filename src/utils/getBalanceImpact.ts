import type { Transaction } from '../types/Transaction';

export const getBalanceImpact = (type: Transaction['type'], value: number) => {
  switch (type) {
    case 'deposit':
      return value;
    case 'transfer':
    case 'payment':
    case 'withdraw':
      return -value;
    default:
      return 0;
  }
};
