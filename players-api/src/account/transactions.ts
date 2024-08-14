export type Transaction = {
  id: number;
  timestamp: number;
  type: "deposit" | "withdrawal";
  amount: number;
};

export const transactions: { [key: number]: Transaction[] } = {
  1: [
    { id: 123654, timestamp: 1722763892, type: "deposit", amount: 324.45 },
    { id: 321574, timestamp: 1722763871, type: "deposit", amount: 1478.45 },
    { id: 987622, timestamp: 1722763565, type: "withdrawal", amount: 67.03 },
  ],
  2: [{ id: 1234, timestamp: 1722763892, type: "deposit", amount: 254.45 }],
  3: [
    { id: 76565, timestamp: 1722763892, type: "deposit", amount: 9866.87 },
    { id: 18751, timestamp: 1722763871, type: "withdrawal", amount: 42.1 },
    { id: 98665, timestamp: 1722763565, type: "withdrawal", amount: 67.03 },
    { id: 32751, timestamp: 1722763892, type: "deposit", amount: 324.45 },
    { id: 72651, timestamp: 1722763871, type: "deposit", amount: 1478.45 },
    { id: 12982, timestamp: 1722763565, type: "withdrawal", amount: 67.03 },
  ],
};
