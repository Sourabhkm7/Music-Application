import Link from "next/link";
// import courseData from "../data/courseData.json";


function FeaturedCourses() {
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-centre">
          <h2 className="text-base text-teal-500 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn with the Best</p>
        </div>
      </div>
      <div>2</div>
      <div className="mt-20 text-centre ">
        <Link href={"/courses"}> View All Courses</Link>
      </div>
    </div>
  )
}

export default FeaturedCourses
