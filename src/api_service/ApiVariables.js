const domain = "https://www.edraak.org"
const courses_endpoint = "/api/mobile/v1/continuous/courses/"
const categories_endpoint = "/api/mobile/v1/continuous/categories/"
const courses_per_page = 10

const statuses = [
    {'slug' :'self', 'name': 'Self'},
    {'slug':'current', 'name':'Current'},
    {'slug':'upcoming', 'name':'Upcoming'},
    {'slug':'finished', 'name':'Finished'},
 ]

 const orders = [
     {'slug': 'name_en', 'name': 'Name'},
     {'slug': 'start_date', 'name': 'Earliest start date'},
     {'slug': '-start_date', 'name': 'Latest start date'},
     {'slug': 'enrollment_start_date', 'name': 'Earliest enrollment date'},
     {'slug': '-enrollment_start_date', 'name': 'Latest enrollment date'}
 ]

export { domain, courses_endpoint, categories_endpoint, courses_per_page, orders, statuses }

