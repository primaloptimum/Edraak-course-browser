import React from 'react'

const CourseVideo = ({course_video}) =>{
    return (
        <div className="embed-responsive embed-responsive-21by9">
            <iframe src={course_video}
                width="400"
                height="240"
                className="embed-responsive-item"
                frameborder='0'
                allow='autoplay; encrypted-media'
                allowfullscreen
                title='video'/>
        </div>
    )
}

export default CourseVideo
