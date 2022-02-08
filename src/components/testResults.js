import React, { Component } from 'react';
import { Grid, Cell, DataTable, TableHeader } from 'react-mdl';

class TestResults extends Component {
  render() {
    return (
      <Grid>
        <Cell col={2}></Cell>
        <Cell col={10}>
          <h5 style={{ marginTop: '0px', color: 'white' }}>
            {this.props.title}:
          </h5>
          <div style={{ display: 'flex' }}>
            <DataTable
              className='result-table'
              shadow={4}
              sortable
              rows={[
                {
                  module: 'Mathematics for Computing',
                  year: 1,
                  result: 80 + '%',
                },
                {
                  module: '	Programming I',
                  year: 1,
                  result: 79 + '%',
                },
                {
                  module: '	Computer Technologies',
                  year: 1,
                  result: 71 + '%',
                },
                {
                  module: 'Introduction to Databases',
                  year: 1,
                  result: 79 + '%',
                },
                {
                  module: 'Systems Analysis and Design',
                  year: 1,
                  result: 75 + '%',
                },
                {
                  module: '	Systems Software',
                  year: 2,
                  result: 80 + '%',
                },
                {
                  module: '	Data Communications & Networking',
                  year: 2,
                  result: 84 + '%',
                },
                {
                  module: 'Systems Development',
                  year: 2,
                  result: 68 + '%',
                },
                {
                  module: 'Mobile Development',
                  year: 2,
                  result: 69 + '%',
                },
                {
                  module: 'Professional Development',
                  year: 2,
                  result: 62 + '%',
                },
                {
                  module: '	Programming II',
                  year: 2,
                  result: 65 + '%',
                },
                {
                  module: 'Client-Server Application Dev',
                  year: 2,
                  result: 60 + '%',
                },
                {
                  module: 'Final Year Project',
                  year: 4,
                  result: 66 + '%',
                },
                {
                  module: 'Process Management',
                  year: 4,
                  result: 69 + '%',
                },
                {
                  module: 'Full-stack Strategies & Development',
                  year: 4,
                  result: 65 + '%',
                },
                {
                  module: 'Data Analytics',
                  year: 4,
                  result: 92 + '%',
                },
                {
                  module: 'Software Engineering Mangement',
                  year: 4,
                  result: 61 + '%',
                },
              ]}
            >
              <TableHeader name='module' style={{ color: 'white' }}>
                Module
              </TableHeader>
              <TableHeader
                numeric
                sortable
                name='year'
                style={{ color: 'white' }}
              >
                Year
              </TableHeader>
              <TableHeader
                numeric
                sortable
                name='result'
                style={{ color: 'white' }}
              >
                Result
              </TableHeader>
            </DataTable>
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default TestResults;
