const contactDetails = [
  {
    icon: "location_on",
    label: "Address",
    value: "123 Realty Avenue, Suite 100, Metro City, 12345",
  },
  {
    icon: "call",
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: "mail",
    label: "Email",
    value: "contact@aicigroup.com",
    href: "mailto:contact@aicigroup.com",
  },
  {
    icon: "schedule",
    label: "Business Hours",
    value: "Monday - Friday: 9:00 AM - 6:00 PM",
  },
];

export default function ContactInfo() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <div>
          <h2 className="text-blue-800 font-display text-2xl font-bold leading-tight tracking-tight pb-4">
            Contact Information
          </h2>
          <div className="space-y-4">
            {contactDetails.map((detail, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-red-600/5 border border-red-600/10 "
              >
                <span className="material-symbols-outlined mt-1 text-red-600">
                  {detail.icon}
                </span>
                <div>
                  <p className="text-gray-600 text-sm font-normal">
                    {detail.label}
                  </p>
                  {detail.href ? (
                    <a
                      className="text-sm font-medium text-gray-900  hover:underline hover:text-red-600 transition-colors"
                      href={detail.href}
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-gray-900 ">
                      {detail.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div>
          <h2 className="text-blue-800  font-display text-2xl font-bold leading-tight tracking-tight mb-4">
            Our Location
          </h2>
          <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-md">
            <img
              alt="Map showing office location of AICI Group in Metro City"
              className="w-full h-64 lg:h-80 object-cover rounded-lg"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxuLD3WSNn-TewSDtJEMCgjYuol-Lbv5ciovsuyLhY0xT1hi8SXeqzGRkqn8wF2_TvCjnsAMnyRN2qvIIMGRXijKlnUEe4SfzimsNnQ07vYyl2kxegsBUdtPrukoFn00uQlqfsNCmjPHUT5ABX9uWK6OlgHfs1Dc62NdJ8h3IwmqVGBaI7HqxkPlCJMRG8wkkW2ewXfAshmUfJJ_yC0lCvcgAWxso0OyfK9aC8aj3N_gFirEna14SZQ9ErfCkz1oKSDnrqHjj8KeY"
            />
          </div>
        </div>
      </div>
    </>
  );
}
