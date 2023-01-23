import { combineReducers } from '@reduxjs/toolkit';
import projects from './projectsSlice';
import model from './modelSlice';

const reducer = combineReducers({
  projects,
  model,
});

export default reducer;
