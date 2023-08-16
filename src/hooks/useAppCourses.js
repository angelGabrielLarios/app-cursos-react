import { useState, useRef, useEffect } from "react"
import { courses } from '../data'


export const useAppCourses = () => {
    const [isShowCart, setIsShowCart] = useState(false)

    const [coursesCart, setCoursesCart] = useState([])

    const isCourseExists = useRef(false)


    useEffect(() => {
        const localStorageCoursesCart = JSON.parse(localStorage.getItem('coursesCart'))

        if (localStorageCoursesCart) {
            setCoursesCart(localStorageCoursesCart)
        }
        else {
            setCoursesCart([])
        }


    }, [])

    useEffect(() => {
        localStorage.setItem(
            'coursesCart',
            JSON.stringify(coursesCart)
        )
    }, [coursesCart])

    const calculatePriceTotal = () => {
        let priceTotalByAllCourses = 0;

        for (let index = 0; index < coursesCart.length; index++) {
            const course = coursesCart[index];
            const calculatePriceTotalCourse = course.amount * course.price;
            priceTotalByAllCourses += calculatePriceTotalCourse;

        }

        return priceTotalByAllCourses
    }

    const priceTotal = calculatePriceTotal()

    const onClickAddCourse = (courseId) => {

        isCourseExists.current = false

        const updateCoursesCart = coursesCart.map(course => {
            if (course.id === courseId) {
                isCourseExists.current = true
                course.amount++
                return course
            }
            return course
        })


        if (isCourseExists.current) {
            setCoursesCart(updateCoursesCart)
        }
        else {
            const courseToAdd = {
                ...courses.find(course => course.id === courseId),
                amount: 1
            }

            setCoursesCart([
                ...coursesCart,
                courseToAdd
            ])
        }



    }

    const onClickDeleteCourseCart = (courseIdDelete) => {

        const updateCoursesCart = coursesCart.filter(course => course.id !== courseIdDelete)

        setCoursesCart(updateCoursesCart)


    }

    const onChangeUpdateCourseCartAmount = (courseIdUpdate, newAmount) => {

        const updateCourseCartAmount = coursesCart.map(course => {
            if (course.id === courseIdUpdate) {
                course.amount = newAmount
                return course
            }
            return course
        })

        setCoursesCart(updateCourseCartAmount)

    }

    return {
        isShowCart,
        setIsShowCart,
        coursesCart,
        setCoursesCart,
        isCourseExists,
        priceTotal,
        courses,
        onClickAddCourse,
        onClickDeleteCourseCart,
        onChangeUpdateCourseCartAmount
    }


}
