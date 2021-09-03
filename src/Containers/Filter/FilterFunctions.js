import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FilteringData, FilterError, closeFilterOptions } from '../../Redux'

const FilterFunctions = () => {
  const dispatch = useDispatch()

  const data = useSelector(state => state.courses)

  const [type, setType] = useState([])
  const [price, setPrice] = useState([])
  const [priceChecked, setPriceChecked] = useState(['0'])
  const [language, setLanguage] = useState([])
  const [instructor, setInstructor] = useState([])

  const handleChange = e => {
    if (e.target.name === 'price') {
      setPriceChecked([e.target.id])
      switch (e.target.id) {
        case '0':
          setPrice([])
          break
        case '1':
          setPrice([1, 100])
          break
        case '2':
          setPrice([100, 500])
          break
        case '3':
          setPrice([500, 1000])
          break
        case '4':
          setPrice([1000])
          break
      }
    }

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

    if (price.length > 1) {
      filteredCourses = filteredCourses.filter(course => {
        return course.price >= price[0] && course.price <= price[1]
      })
    } else if (price.length) {
      filteredCourses = filteredCourses.filter(course => {
        return course.price >= price[0]
      })
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
    priceChecked,
    handleChange,
    type,
    language,
    instructor,
  }
}

export default FilterFunctions
