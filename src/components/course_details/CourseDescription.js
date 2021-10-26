import React from 'react'

const CourseDescription = ({course}) => {
    return (
        <div className="col-md-6 col-md-offset-1 col-sm-12 col-xs-12">
            <h2 className="name">
                {course.name_en}
            </h2>
            <h6>
                <small>Paced by {course.pacing == null ? 'None' : 
                (course.pacing.charAt(0).toUpperCase() + course.pacing.slice(1))}</small>
            </h6>
            <p>
            Category - {course.category == null ? 'None' : course.category.name_en}
            </p>
            <hr />
            <h3 className="price-container">
                {course.level == null ? 'None' : 
                (course.level.charAt(0).toUpperCase() + course.level.slice(1))} Level 
            </h3>
            <div className="certified">
                <ul>
                    <li>
                        <a href="#">Enrollment dates<span>{course.enrollment_start_date.slice(0,10)} - {course.enrollment_end_date == null ? 'On going': course.enrollment_end_date.slice(0,10)}</span></a>
                    </li>
                    <li>
                        <a href="#">Course Timeline<span>{course.start_date.slice(0,10)} - {course.end_date == null ? 'On going': course.end_date.slice(0,10)}</span></a>
                    </li>
                </ul>
            </div>
            <hr />
                <div className="description">
                {course.description_en}
                </div>
            <hr />
        </div>
    )

}

export default CourseDescription
