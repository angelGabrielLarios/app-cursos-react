import PropTypes from 'prop-types'
export const CardCourse = ({ course, onClickAddCourse }) => {
    return (
        <div className=" bg-white border border-gray-200 rounded-lg shadow ">

            <img
                src={course.img}
                alt=""
                className="block w-full"
            />

            <section
                className="p-5 space-y-2"
            >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    {course.title}
                </h5>

                <img
                    src="assets/img/estrellas.png"
                    alt=""
                />

                <p className="mb-3 font-normal text-gray-700 ">
                    Juan Pablo
                </p>

                <div
                    className="text-xl flex justify-between items-center"
                >
                    <span className="line-through">$200</span>
                    <span className="font-bold">$<span>{course.price}</span></span>

                </div>

                <button
                    type="button"
                    className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 uppercase"
                    onClick={onClickAddCourse}
                >
                    agregar al carrito
                </button>

            </section>

        </div>
    )
}

CardCourse.propTypes = {
    course: PropTypes.object,
    onClickAddCourse: PropTypes.func
}