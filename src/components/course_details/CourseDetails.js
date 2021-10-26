import React, {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import { FaAngleLeft } from 'react-icons/fa'
import CourseVideo from './CourseVideo';
import './CourseDetails.css'
import CourseDescription from './CourseDescription';

const CourseDetails = (props) => {
    const [course, setCourse] = useState(null)
    const [loading, setLoading] = useState(true)
    let history = useHistory();

    useEffect(() => {
        const setItem = () => {
            if(props.location.course){
                localStorage.setItem('course', JSON.stringify(props.location.course))
                setCourse(props.location.course)
            }
            else{
                setCourse(JSON.parse(localStorage.getItem('course')))
            }
            setLoading(false)
            console.log(course)
            console.log(props.location.course)
        }
        setItem()
    }, [loading])

    if(loading){
        return(
            <div className="container">
            <div className="spinner-border text-danger center" role="status">
              <span className="sr-only center"></span>
            </div>
          </div>
        )
    }
    else{
    return (    
        <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="product-content product-wrap clearfix product-deatil">
            <div className="mt-1 mb-3"> <Button variant="danger"
             onClick={() => history.goBack()}> <FaAngleLeft/> </Button> </div>
                <div className="row">
                    <div className="col-md-5 col-sm-12 col-xs-12 mt-3">
                        <CourseVideo course_video={course.course_video}/>
                    </div>
                    <CourseDescription course={course}/>
                </div>
            </div>
        </div>
    )}
    
}

export default CourseDetails
