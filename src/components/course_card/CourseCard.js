import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import './CourseCard.css'

const CourseCard = ({ course }) => {
    return(
        <div className="col-md-4 mb-4">
            <div className="card">
                <div className="img-container">
                    <div className="d-flex justify-content-between align-items-center p-2 first"> <span className="percent bg-danger">{course.pacing.toUpperCase()}</span> </div> 
                    <Link to={{
                        pathname:'/course-details/' + course.id,
                        course: course
                    }}>
                        <img src={course.course_image} alt={course.name_en} className="img-responsive" width="357" height="300"/>
                    </Link>
                </div>
                <div className="product-detail-container">
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0 limit-name">{course.name_en}</p> <span className="text-danger font-weight-bold">{course.level.toUpperCase()}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h6 className="mb-0 limit">{course.start_date.slice(0,10)} - {course.end_date == null ? 'On going' : course.end_date.slice(0,10)}</h6>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <div className="ratings"> <i className="fa fa-star"></i> <span>{course.category == null ? 'No Category' : course.category.name_en}</span> </div>
                    </div>
                    <Link to={{
                        pathname:'/course-details/' + course.id,
                        course: course
                    }}>
                        <div className="mt-3"> <Button variant="danger">More details</Button> </div>
                    </Link> 
                    
                </div>
            </div>
        </div>
    )
}

export default CourseCard
