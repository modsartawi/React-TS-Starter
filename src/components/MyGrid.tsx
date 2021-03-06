import React from 'react';
import {
  Grid,
  Table,
  TableHeaderRow
} from '@devexpress/dx-react-grid-material-ui';
import Paper from '@material-ui/core/Paper';
export default () => {
  return (
    <Paper>
      <Grid
        rows={[
          { id: 0, product: 'DevExtreme', owner: 'DevExpress' },
          { id: 1, product: 'DevExtreme Reactive', owner: 'DevExpress' }
        ]}
        columns={[
          { name: 'id', title: 'ID' },
          { name: 'product', title: 'Product' },
          { name: 'owner', title: 'Owner' },
        
        ]}
      >
        <Table />
        <TableHeaderRow />
      </Grid>
    </Paper>
  );
};
