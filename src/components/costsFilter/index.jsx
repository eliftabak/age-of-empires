import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import PropTypes from 'prop-types';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import './index.scss';

function valuetext(value) {
  return `${value}`;
}

function CostsFilter({ label }) {

  CostsFilter.propTypes = {
    label: PropTypes.string,
  }

  const dispatch = useDispatch();

  const filterStatus = useSelector((state) => state[label]);

  return (
    <div className='costsFilter'>
      <FormGroup className='costsFilter__form'>
          <FormControlLabel
            control={
              <Checkbox 
              sx={{
                color: '#fbbf24',
                '&.Mui-checked': {
                  color: '#fbbf24',
                },
                }}
                onChange={(costFilter) => {
                  dispatch({
                    type: 'COST',
                    payload: {
                      costName: label,
                      checked: costFilter.target.checked,
                    },
                  });
                }} name={filterStatus.checked ? filterStatus.checked : null } />
              }
            label={label}
          />
        </FormGroup>
        <Box className="costsFilter__slider">
          <Slider
            max={200}
            min={0}
            getAriaLabel={() => 'Resource Cost'}
            value={filterStatus.value}
            onChange={(costFilter) => {
              dispatch({
                type: 'COST_FILTER',
                payload: { costName: label, value: costFilter.target.value },
              });
            }}
            sx={{
              color: '#fbbf24'
            }}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disabled={!filterStatus.checked}
          />
        </Box>
        <h1>{`${filterStatus.value[0]} - ${filterStatus.value[1]}`}</h1>
    </div>
  );
}

export default CostsFilter;
