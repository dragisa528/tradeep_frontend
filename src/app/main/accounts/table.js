import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'Asset',
    selector: 'asset',
    sortable: true
  },
  {
    name: 'Start Date',
    selector: 'start_date',
    sortable: true
  },
  {
    name: 'End Date',
    selector: 'end_date',
    sortable: true
  },
  {
    name: 'Last Price',
    selector: 'last_price',
    sortable: true
  },
  {
    name: 'Average Fill Price',
    selector: 'average_fill_price',
    sortable: true
  },
  {
    name: 'Quantity',
    selector: 'quantity',
    sortable: true
  },
  {
    name: 'Side',
    selector: 'side',
    sortable: true
  },
  {
    name: 'P&L',
    selector: 'pnl',
    sortable: true
  },
  {
    name: 'P&L %',
    selector: 'pnl_percentage',
    sortable: true
  },
  {
    name: 'Status',
    selector: 'status',
    sortable: true
  },
  {
    name: 'Account',
    selector: 'account',
    sortable: true
  },
  {
    name: 'Strategy ID',
    selector: 'strategy_id',
    sortable: true
  },
];

const data = [
  {
    asset: 'AAPL',
    start_date: '2022-01-01',
    end_date: '2022-01-02',
    last_price: 200,
    average_fill_price: 200,
    quantity: 100,
    side: 'Buy',
    pnl: 20,
    pnl_percentage: 0.2,
    status: 'Open',
    account: 'Account 1',
    strategy_id: 'S12345'
  },
  {
    asset: 'GOOG',
    start_date: '2022-01-01',
    end_date: '2022-01-02',
    last_price: 500,
    average_fill_price: 500,
    quantity: 50,
    side: 'Sell',
    pnl: -25,
    pnl_percentage: -0.05,
    status: 'Closed',
    account: 'Account 2',
    strategy_id: 'S23456'
  },
];

const Table = () => {
  return (
    <>
    <DataTable
      columns={columns}
      data={data}
      pagination
      theme="dark"
      title="Position"
      paginationPerPage={10}
    />
    </>
  );
};

export default Table;
