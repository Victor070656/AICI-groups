const courses = [
  {
    title: "Real Estate Sales Fundamentals",
    category: "Sales",
    difficulty: "Beginner",
    description:
      "Master the essential skills for a successful career in real estate sales, from prospecting to closing deals.",
    duration: "8 Weeks",
    availability: "Upcoming",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCcAUJevLpQis_jlJFSpgcaEKgBhilrkPonIWcCHz0G8rbcoV27nZflShrb7PVwtH--iyI9hyQrfNv00-5bcTq2dWsVlfUgDbjZM0TdxblbKfodSBVsD0FsFpj6pdun--X7RS21ShasfkNMcHBDKV4nFQOtgWTG-cW8czPFX7Nsa76EcbOfB0rGbTLREXsS7DfZNLrUiZx2BV3EkVWhuxtN4cPm41y73-B4hgS_OWl9g99gICsBVkr1lIxY2jHfaf7LBfg0lwLUFAM",
    buttonText: "Enroll Now",
    buttonColor: "bg-red-600",
  },
  {
    title: "Advanced Property Investment Strategies",
    category: "Investment",
    difficulty: "Advanced",
    description:
      "Explore sophisticated investment techniques, risk management, and portfolio diversification for seasoned investors.",
    duration: "12 Weeks",
    availability: "On-demand",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDu6Ajbn-XAqZKYyzHG8FXQVMZNiok2eLx9EpiSFOMYfVRiTZmoiTzfETxkggd_o9Z_yriHatm8FFgpWeA8oV_hqmuI3vyPfQUMMh9YLKta5uhRTa-zaUk8fFWv1nGvfdKe3p848CqcA6cUTdcOU-ARxQd9kJyG4M4WYxdB0L4Em67T0NiVOeu_5bfq8AY6YArRs5mCYfzo6QuMrSMy53R7g81CEo_nGsi5Q_8ZNFodECbHRgm5LHpI2T0yENC9razkwcrUysySgRA",
    buttonText: "Enroll Now",
    buttonColor: "bg-red-600",
  },
  {
    title: "Real Estate Law & Ethics",
    category: "Legal",
    difficulty: "Intermediate",
    description:
      "Navigate the complex legal landscape of real estate transactions and uphold the highest ethical standards.",
    duration: "6 Weeks",
    availability: "Upcoming",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDTakWGRjCu-2r8giDi_DHYnB_NAf14ann8V5FnwkJlU80ImOhk8cfhBlm391UCm6Hb6LLo8711wjkNINXu4ccD_5EucYN-x0plsjnO30PpQEpVRhU9BLNxGGkax3qoogeQ_MJQgS904KZpTPNhD-e1_L2GMqjAe70KbQFoBVFcal82KCx8TrOMnPlcwEKO3YYm1W_Qd1cWvKcx-MVIKhQQO4nmcP7ktYFuhShCuYK_17HZQJPx7b7yOebDe259zy6SqJr1aah3qcg",
    buttonText: "Learn More",
    buttonColor: "bg-blue-800",
  },
];

export default function CourseGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course, index) => (
        <article
          key={index}
          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
        >
          <img
            className="w-full h-48 object-cover"
            src={course.image}
            alt={course.title}
          />

          <div className="p-6 flex flex-col flex-grow">
            {/* Badges */}
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider bg-blue-800/10 text-blue-800  px-2 py-1 rounded-full font-body">
                {course.category}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider bg-gray-200 text-gray-700 px-2 py-1 rounded-full font-body">
                {course.difficulty}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-gray-900  text-xl font-bold mb-2 font-display">
              {course.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600  text-sm mb-4 leading-relaxed font-body flex-grow">
              {course.description}
            </p>

            {/* Course Info */}
            <div className="flex items-center text-sm text-gray-500  mt-auto pt-4 border-t border-gray-200 ">
              <span className="material-symbols-outlined text-base mr-2">
                schedule
              </span>
              <span>{course.duration}</span>
              <span className="mx-3">·</span>
              <span className="material-symbols-outlined text-base mr-2">
                {course.availability === "On-demand"
                  ? "ondemand_video"
                  : "calendar_today"}
              </span>
              <span>{course.availability}</span>
            </div>

            {/* CTA Button */}
            <button
              className={`w-full mt-6 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 ${course.buttonColor} text-white text-base font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity`}
            >
              <span className="truncate">{course.buttonText}</span>
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
