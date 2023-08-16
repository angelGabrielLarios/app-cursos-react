import { CardCourse, CartCourseTable, Footer } from "./components"
import { useAppCourses } from "./hooks"



const App = () => {

  const {
    courses,
    coursesCart,
    isShowCart,
    onChangeUpdateCourseCartAmount,
    onClickAddCourse,
    onClickDeleteCourseCart,
    priceTotal,
    setIsShowCart
  } = useAppCourses()

  return (
    <>
      <div className="flex flex-col min-h-screen">

        <header
          className="basis-[80px] flex flex-col justify-center relative"
        >
          <section
            className="lg:w-4/6 mx-auto flex items-center justify-between"
          >
            <img src="./assets/img/logo.jpg" alt="logo" />

            <button
              onClick={() => setIsShowCart(!isShowCart)}
            >
              <img src="./assets/img/cart.png" alt="logo-cart" />
            </button>
          </section>

          {

            isShowCart

            &&

            (<CartCourseTable
              coursesCart={coursesCart}
              onChangeUpdateCourseCartAmount={onChangeUpdateCourseCartAmount} onClickDeleteCourseCart={onClickDeleteCourseCart}
              priceTotal={priceTotal}
            />)

          }

        </header>

        <main
          className="grow bg-[url('assets/img/hero.jpg')] mix-blend-overlay bg-[rgba(0,0,0, 0.5)] bg-cover flex flex-col justify-center "
        >

          <section
            className="flex flex-col gap-6 ml-0 md:ml-52"
          >
            <h1
              className="text-white text-4xl ">
              Aprende algo nuevo
            </h1>

            <h2
              className="text-white text-base"
            >
              Todos los cursos a $15
            </h2>

            <form
              className="flex">
              <input
                type="text"
                placeholder="¿Que te gustaria aprender?"
                className="bg-white rounded-sm border py-2 px-4"
              />

              <button
                className="bg-white flex justify-center items-center"
              >
                <img
                  src="assets/img/lupa.png"
                  alt=""
                  className="block"
                />
              </button>
            </form>
          </section>

        </main>
      </div>



      <section
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 flex flex-col md:flex-row justify-center gap-14 ">

        <div className="flex justify-center items-center gap-4">
          <img
            src="assets/img/icono1.png"
            alt="foco"
            className="h-16"
          />

          <div
            className="space-y-1"
          >
            <p>20,000 Cursos en línea</p>
            <p>Explora los temas más recientes</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <img
            src="assets/img/icono2.png"
            alt="foco"
            className="h-16"
          />

          <div
            className="space-y-1"
          >
            <p>Instructores Expertos</p>
            <p>Aprende con distintos estilos</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <img
            src="assets/img/icono3.png"
            alt="foco"
            className="h-16"
          />

          <div
            className="space-y-1"
          >
            <p>Acceso de por vida</p>
            <p>Aprende a tu ritmo</p>
          </div>
        </div>

      </section>

      <section>
        <h2
          className="text-6xl text-center py-10"
        >
          Cursos En Línea
        </h2>

        <article
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto w-9/12 gap-6"
        >
          {
            courses.map(course => {
              return (
                <CardCourse
                  key={course.id}
                  course={course}
                  onClickAddCourse={() => onClickAddCourse(course.id)}
                />
              )
            })
          }





        </article>
      </section>

      <Footer />
    </>
  )
}

export default App