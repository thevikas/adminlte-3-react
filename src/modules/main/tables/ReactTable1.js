// Table.js

import React from "react";
import ReactTable from '../../../components/ReactTable';

export default function ReactTable1() {

    const data = React.useMemo(
        () => [
          {
            col1: 'Hello',
            col2: 'World',
          },
          {
            col1: 'react-table',
            col2: 'rocks',
          },
          {
            col1: 'whatever',
            col2: 'you want',
          },
        ],
        []
      );

      const columns = React.useMemo(
        () => [
          {
            Header: 'Column 1',
            accessor: 'col1', // accessor is the "key" in the data
          },
          {
            Header: 'Column 2',
            accessor: 'col2',
          },
        ],
        []
      );

    /*constructor(props) {
        super(props);

        this.state = {
            openId: null
        }
    }*/

    /*
      Render the UI for your table
      - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
    */
    return (
        <div class="card">
              <div class="card-header">
                <h3 class="card-title">ReactTable with defaults</h3>
              </div>
              <div class="card-body">
                <ReactTable columns={columns} data={data} />
            </div>
        </div>
    );
}