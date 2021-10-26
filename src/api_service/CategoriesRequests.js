import { categories_endpoint, domain } from "./ApiVariables"


const fetchCategories = async () => {
    const response = await fetch(domain + categories_endpoint)
    
    if(response.status !== 200){
      return {
        'results': []
      }
    }

    const categories = await response.json()
  
    return categories
  }

export { fetchCategories }