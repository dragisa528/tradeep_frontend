import { combineReducers } from '@reduxjs/toolkit';
import projects from './projectsSlice';

const reducer = combineReducers({
  projects,
});

export default reducer;
