import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FilteringData, FilterError, closeFilterOptions } from '../../Redux'

const FilterFunctions = () => {
  const dispatch = useDispatch()

  const data = useSelector(state => state.courses)

  const [type, setType] = useState([])
  const [language, setLanguage] = useState([])
  const [instructor, setInstructor] = useState([])

  const handleChange = e => {
    if (e.target.name === 'type') {
      if (e.target.checked) {
        setType([...type, e.target.id])
      } else {
        setType(type.filter(eachType => eachType !== e.target.id))
      }
    } else if (e.target.name === 'language') {
      if (e.target.checked) {
        setLanguage([...language, e.target.id])
      } else {
        setLanguage(language.filter(eachLang => eachLang !== e.target.id))
      }
    } else if (e.target.name === 'instructor') {
      if (e.target.checked) {
        setInstructor([...instructor, e.target.id])
      } else {
        setInstructor(instructor.filter(eachLang => eachLang !== e.target.id))
      }
    }
  }

  const filterData = () => {
    let filteredCourses = []
    if (type.length) {
      filteredCourses = data.data.filter(course => {
        return type.includes(course.type.name_en)
      })
    } else {
      filteredCourses = data.data
    }

    if (language.length) {
      filteredCourses = filteredCourses.filter(course => {
        return language.includes(course.language.name_en)
      })
    }
    if (instructor.length) {
      filteredCourses = filteredCourses.filter(course => {
        return instructor.includes(course.instructor.name_en)
      })
    }

    if (filteredCourses.length === 0) {
      dispatch(FilterError())

      return
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })

    dispatch(FilteringData(filteredCourses))
    dispatch(closeFilterOptions())
  }

  return {
    filterData,

    handleChange,
    type,
    language,
    instructor,
  }
}

export default FilterFunctions
