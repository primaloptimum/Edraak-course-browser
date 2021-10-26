const fetchCourses = async (url) => {

    const response = await fetch(url)
  
    if(response.status !== 200){
      return {
        'results': []
      }
    }
    const courses = await response.json()
  
    return courses
  }

export { fetchCourses }