import React from 'react';
import { useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CostsFilter from '../costsFilter/index';
import Unit from '../unit/index';
import AgeFilter from '../ageFilter/index';
import './index.scss';

function Units() {
  const units = useSelector((state) => (state.filterOutput ? state.filterOutput : state.units));
  return (
    <div className='unitList' >
      <div className='unitList__header'>
        <h1>Unit List</h1>
        <p>This is a list of all units in Age of Empires.</p>
      </div>
      <div className='unitList__controlPanel'>
        <div className='unitList__age'>
          <AgeFilter />
        </div>
        <div className='unitList__costs'>
          <CostsFilter label='wood' />
          <CostsFilter label='food' />
          <CostsFilter label='gold' />
        </div>
        <div className='unitList__table-container'>
          <TableContainer className='unitList__table' component={Paper}>
            <Table>
              <TableHead className='unitList__table-head'>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>NAME</TableCell>
                  <TableCell>AGE</TableCell>
                  <TableCell>COST</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {units.map((unit) => (
                  <Unit
                    key={unit.id}
                    id={unit.id}
                    name={unit.name}
                    age={unit.age}
                    cost={unit.cost}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      
    </div>
  );
}

export default Units;
