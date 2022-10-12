import data from '../../services/units.json';

const initialState = {
  units: data.units,
  filterOutput: null,
  age: 'All',
  wood: { checked: false, value: [0, 200] },
  food: { checked: false, value: [0, 200] },
  gold: { checked: false, value: [0, 200] },
};

export default function combinedFilter(state = initialState, action) {
  switch (action.type) {
    case 'AGE': {
      return {
        ...state,
        age: action.payload,
      };
    }

    case 'COST': {
      if (action.payload.checked === true || action.payload.checked === false) {
        return {
          ...state,
          [action.payload.costName]: {
            checked: action.payload.checked,
            value: state[action.payload.costName].value,
          },
        };
      } if (action.payload.value) {
        return {
          ...state,
          [action.payload.costName]: {
            checked: state[action.payload.costName].checked,
            value: action.payload.value,
          },
        };
      }
      break;
    }

    case 'SET_FILTERED':
      return {
        ...state,
        filterOutput: action.payload,
      };

    default:
      return state;
  }
}
