import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Unit({ id, name, age, cost }) {

  Unit.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.string,
    cost: PropTypes.any,
  };
  
  let unitCost = [];

  switch (cost) {
    case null:
      unitCost = 'No Cost';
      break;
    default: {
      switch (cost.Wood) {
        case undefined:
          break;
        default:
          unitCost.push(`Wood: ${cost.Wood}`);
      }
      switch (cost.Food) {
        case undefined:
          break;
        case null:
          break;
        default:
          unitCost.push(`Food: ${cost.Food}`);
      }
      switch (cost.Gold) {
        case undefined:
          break;
        default:
          unitCost.push(`Gold: ${cost.Gold}`);
      }
    }
  }

  const unitCostString = unitCost === 'No Cost' ? 'No Cost' : unitCost.join(', ');

  return (
    <TableRow>
      <TableCell align='left'>{id}</TableCell>
      <TableCell align='left'>
        <Link to={`/detail/${name}`}>
          {name}
          {' '}
        </Link>
      </TableCell>
      <TableCell align='left'>{age}</TableCell>
      <TableCell align='left'>{unitCostString}</TableCell>
    </TableRow>
  );
}

export default Unit;
