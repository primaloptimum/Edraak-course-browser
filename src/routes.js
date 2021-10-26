import Router from 'react-router-dom'
import Course from './components/Course'

export default function Routes() {
    return (
      <Router>
          <Switch>
            {/* <Route path="/course-info">
              <CourseInfo />
            </Route> */}
            <Route path="/">
              <Course />
            </Route>
          </Switch>
      </Router>
    );
  }