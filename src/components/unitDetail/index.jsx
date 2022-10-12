/* eslint-disable max-len */
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import './index.scss';

function UnitDetail() {
const { unitName } = useParams();

const unit = useSelector((state) => state.units.find((item) => item.name === unitName)) || {};

const unitCost = unit.cost;

return (
  <div className='detail'>
    <h1>UNIT : {unit.name}</h1>
    <TableContainer >
      <Table className='detail__table'>
        <TableBody>
          <TableRow>
            <TableCell>
              ID
            </TableCell>
            <TableCell>
              {unit.id ? unit.id : 'N/A'}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Name
            </TableCell>
            <TableCell>
              {unit.name ? unit.name : 'N/A'}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Description
            </TableCell>
            <TableCell>
              {unit.description ? unit.description : 'N/A'}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Min. Required Age
            </TableCell>
            <TableCell>
              {unit.age ? unit.age : 'N/A'}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Food
            </TableCell>
            <TableCell>
              {unitCost.Food ? unitCost.Food : 'N/A'}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Wood
            </TableCell>
            <TableCell>
              {unitCost.Wood ? unitCost.Wood : 'N/A'}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Golg
            </TableCell>
            <TableCell>
              {unitCost.Gold ? unitCost.Gold : 'N/A'}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Buil Time
            </TableCell>
            <TableCell>
              {unit.build_time ? unit.build_time : 'N/A'}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Reload Time
            </TableCell>
            <TableCell>
              {unit.reload_time ? unit.reload_time : 'N/A'}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Hit Points
            </TableCell>
            <TableCell>
              {unit.hit_points ? unit.hit_points : 'N/A'}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Attack
            </TableCell>
            <TableCell>
              {unit.attack ? unit.attack : 'N/A'}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Accuracy
            </TableCell>
            <TableCell>
              {unit.accuracy ? unit.accuracy : 'N/A'}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </div>
);
}

export default UnitDetail;