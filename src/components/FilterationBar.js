import {Button} from 'react-bootstrap'
import { useState } from 'react'
import { Multiselect } from 'multiselect-react-dropdown'
import { orders, statuses } from '../api_service/ApiVariables'
import './course_card/CourseCard.css'

const multiSelectStyle = {
    chips: {
        background: "#DC3545"
    },
    option: {
        background: "#DC3545"
      },
  };

const FilterationBar = ({ categories, filterCourses }) => {
    const [selectedCategories, setSelectedCategories] = useState([])
    const [selectedStatus, setSelectedStatus] = useState([])
    const [selectedOrder, setSelectedOrder] = useState([])

    const addCategory = (selectedList) => {
        setSelectedCategories(selectedList)
    }

    const removeCategory = (selectedList) => {
        setSelectedCategories(selectedList)
    }

    const addStatus = (selectedList) => {
        setSelectedStatus(selectedList)
    }

    const removeStatus = (selectedList) => {
        setSelectedStatus(selectedList)
    }

    const addOrder = (selectedList) => {
        setSelectedOrder(selectedList)
    }

    const removeOrder = (selectedList) => {
        setSelectedOrder(selectedList)
    }

    const submitFilter = () => {
        let statusFilter = ''
        let categoryFilter = ''
        let orderFilter = ''

        selectedStatus.forEach(element => {
            statusFilter += element.slug + ','
        });

        selectedCategories.forEach(element => {
            categoryFilter += element.slug + ','
        });

        selectedOrder.forEach(element => {
            orderFilter += element.slug + ','
        });

        filterCourses({statusFilter:statusFilter, 
            categoryFilter: categoryFilter, 
            orderFilter: orderFilter})
    }

    return(
        <div className="container-fluid mt-3 mb-5">
            <div className="row">
                <div className="col-md-3 mb-4">
                    <Multiselect
                        style={multiSelectStyle}
                        placeholder='Select Categories'
                        options={categories}
                        selectedValues={selectedCategories} 
                        displayValue="name_en" 
                        onSelect={addCategory}
                        onRemove={removeCategory}
                    /> 
                </div> 
                <div className="col-md-3 mb-4">
                    <Multiselect
                        style={multiSelectStyle}
                        placeholder='Select Statuses'
                        options={statuses}
                        selectedValues={selectedStatus} 
                        displayValue="name" 
                        onSelect={addStatus}
                        onRemove={removeStatus}
                    /> 
                </div>
                <div className="col-md-3 mb-4">
                    <Multiselect
                        style={multiSelectStyle}
                        placeholder='Select Sorting'
                        options={orders}
                        selectedValues={selectedOrder} 
                        displayValue="name" 
                        onSelect={addOrder}
                        onRemove={removeOrder}
                    /> 
                </div>
                <div className="col-md-2 mb-4">
                    <Button variant="danger" onClick={submitFilter} id="button-addon2">
                        Search
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default FilterationBar