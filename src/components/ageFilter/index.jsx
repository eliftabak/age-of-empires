import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import './index.scss';

function AgeFilter() {
  const dispatch = useDispatch();
  const age = useSelector((state) => state.age);

  return (
    <Tabs activeKey={age} className='ageFilter'
      onSelect={(selectedAge) => {
        dispatch({ type: "AGE_FILTER", payload: selectedAge });
      }}>
      <Tab eventKey='All' title='All'></Tab>
      <Tab eventKey='Dark' title='Dark'></Tab>
      <Tab eventKey='Feudal' title='Feudal'></Tab>
      <Tab eventKey='Castle' title='Castle'></Tab>
      <Tab eventKey='Imperial' title='Imperial'></Tab>
    </Tabs>
  );
}

export default AgeFilter;
