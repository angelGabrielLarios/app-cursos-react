import PropTypes from 'prop-types'

export const CartCourseTable = ({ coursesCart = [], onClickDeleteCourseCart, onChangeUpdateCourseCartAmount, priceTotal = 0 }) => {
    return (
        <div className="absolute z-20 top-[80px] right-10 overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Imagen
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Precio
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Cantidad
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>



                    </tr>
                </thead>
                <tbody>
                    {
                        coursesCart.map(course => {
                            return (
                                <tr
                                    key={course.id}
                                    className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900  "
                                    >
                                        <img
                                            className="block mx-auto w-20"
                                            src={course.img}
                                            alt={`imagen del curso: ${course.title}`}
                                        />
                                    </th>
                                    <td className="px-6 py-4">{course.title}</td>
                                    <td className="px-6 py-4">{course.price}</td>
                                    <td className="px-6 py-4">
                                        <input
                                            type="number"
                                            name="amount"
                                            value={course.amount}
                                            min={0}
                                            step={1}
                                            onChange={event => {
                                                const newAmount = event.target.value
                                                onChangeUpdateCourseCartAmount(course.id, newAmount)
                                            }}

                                        />
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            type="button"
                                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                            onClick={() => onClickDeleteCourseCart(course.id)}
                                        >
                                            Eliminar
                                        </button>

                                    </td>



                                </tr>)
                        })
                    }




                </tbody>

                <tfoot
                    className="text-xs text-gray-700 uppercase bg-gray-50 "
                >
                    <tr>
                        <td
                            className="uppercase px-6 py-3 font-bold text-end"
                            colSpan={4}
                        >
                            Total:
                        </td>



                        <td className="px-6 py-3 font-bold">
                            {priceTotal}
                        </td>

                    </tr>
                </tfoot>
            </table>
        </div>)
}


CartCourseTable.propTypes = {
    coursesCart: PropTypes.array,
    onClickDeleteCourseCart: PropTypes.func,
    onChangeUpdateCourseCartAmount: PropTypes.func,
    priceTotal: PropTypes.number,
}