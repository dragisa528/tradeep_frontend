import { combineReducers } from '@reduxjs/toolkit';
import projects from './projectsSlice';
import widgets from './widgetsSlice';
import model from './modelSlice';

const reducer = combineReducers({
  widgets,
  projects,
  model,
});

export default reducer;
