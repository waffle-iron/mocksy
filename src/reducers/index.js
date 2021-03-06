import { combineReducers } from 'redux';
import ProjectsReducer from './ProjectsReducer';
import FeedbackReducer from './FeedbackReducer';
import UserReducer from './UserReducer';


const reducer = combineReducers({
  projects: ProjectsReducer,
  feedback: FeedbackReducer,
  user: UserReducer
});

export default reducer;
