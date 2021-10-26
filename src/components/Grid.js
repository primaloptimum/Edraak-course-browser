import React from 'react'
import CourseCard from './course_card/CourseCard'

const Grid = ({courses}) => {

    return (
        <div className="container-fluid mt-3 mb-3">
            <div className="row g-2">
                {courses.map((course, index)=>( 
                    <CourseCard key={index} course={course} 
                        category={course.category}/>
                ))}   
            </div>
        </div>
    )
}


export default Grid
