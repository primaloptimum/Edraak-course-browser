import './App.css'
import FilterationBar from './components/FilterationBar'
import Grid from './components/Grid'
import { Component } from 'react'
import { domain, courses_endpoint, courses_per_page } from './api_service/ApiVariables'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Pagination from "react-js-pagination"
import CourseDetails from './components/course_details/CourseDetails'
import { fetchCategories } from './api_service/CategoriesRequests'
import { fetchCourses } from './api_service/CourseRequests'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      courses: {'results':[]},
      categories: {'results':[]},
      activePage: 1,
      filter: '',
      isLoaded: false
    }
  }
  componentDidMount(){
    const getCoursesAndCategories = async () => {
      await this.fetchCoursesAndCategories()
    }
    getCoursesAndCategories()
  }

  fetchCoursesAndCategories = async () => {
    console.log('fetching')
    const url = domain + courses_endpoint + '?page=' + this.state.activePage + this.state.filter

      fetchCourses(url).then((courses) => {
        this.setState({
          courses: courses
        })
      })

      fetchCategories().then((categories) => {
        this.setState({
          categories: categories,
          isLoaded: true
        })
      })
  }

  filterCourses = async ({statusFilter, categoryFilter, orderFilter}) => {
    const filter = '&status=' + 
      statusFilter.slice(0,-1) + 
      '&category=' + 
      categoryFilter.slice(0,-1) +
      '&ordering=' +
      orderFilter.slice(0,-1)

    this.setState({
      filter: filter
    }, () => {
      this.fetchCoursesAndCategories()
    });
  }

  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber}, () => {
      this.fetchCoursesAndCategories()
    });
  }
  

  render(){

    var { isLoaded, courses, categories } = this.state;
    if(!isLoaded){
      return (
          <div className="container">
            <div className="spinner-border text-danger center" role="status">
              <span className="sr-only center"></span>
            </div>
          </div>
        )
    }
    else {  
      return (
        <Router> 
          <Switch>      
            <Route exact path={['/home/:status/:category', '/']} render={props => (
              <div className="container">
                <FilterationBar categories={categories['results']} filterCourses={this.filterCourses}/>
                <Grid courses={courses['results']}/>
                <div id='inner'>
                  <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={courses_per_page}
                    totalItemsCount={courses['count']}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange.bind(this)} 
                    itemClass="page-item"
                    linkClass="page-link"
                  /> 
                </div>
              </div>
              )}/>
              <Route path='/course-details/:courseId' component={CourseDetails}/>
            </Switch>
            
            <Footer/>
        </Router>
      );
    }
  }
}

export default App;
