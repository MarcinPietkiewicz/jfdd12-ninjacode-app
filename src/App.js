import React from "react";
import "./App.css";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
// import { myData } from 'historyTable/sampleData.json'

let data = [
  {
    name: "Zakup mebli",
    category: "dom i ogród",
    transactionDate: "23-03-2019",
    type: "wydatki",
    amount: 3499
  },
  {
    name: "Spożywcze",
    category: "żywność i chemia",
    transactionDate: "25-03-2019",
    type: "wydatki",
    amount: 251
  },
  {
    name: "opłata czynszu",
    category: "opłaty i odsetki",
    transactionDate: "01-04-2019",
    type: "wydatki",
    amount: 1500
  },
  {
    name: "Aerobik-kwiecień",
    category: "zajęcia dodatkowe",
    transactionDate: "02-04-2019",
    type: "wydatki",
    amount: 210
  },
  {
    name: "pensja",
    category: "pensja",
    transactionDate: "04-04-2019",
    type: "wpływy",
    amount: 6500
  },
  {
    name: "odsetki od lokaty",
    category: "inwestycje",
    transactionDate: "06-04-2019",
    type: "wpływy",
    amount: 34.57
  }]

function App() {
  return (
    <ReactTable
      data={data}
      columns={[
        {
          Header: 'Nazwa',
          accessor: 'name'
        }, {
          Header: 'Kategoria',
          accessor: 'category',
        }, {
          Header: 'Data',
          accessor: 'transactionDate'
        },
        {
          id: 'typeID',
          Header: 'Typ',
          accessor: 'type'
        },
        {
          id: 'amountID',
          Header: 'Kwota',
          accessor: 'amount'
        }
      ]}
      defaultPageSize={10}
      className="-striped -highlight"
    />
  );
}

export default App;
