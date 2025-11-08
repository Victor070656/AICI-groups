const teamMembers = [
  {
    name: "Eleanor Vance",
    role: "Lead Consultant",
    bio: "Eleanor brings over 15 years of strategic consulting experience, specializing in high-value property portfolios.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxM50ffXlP8a7o0HdORF2jHjmfhLFrAWtUr4gdncfrEVniq0w1VI43PRt-sumUnLvPqArmEHMo3vGduRoJjUBNuBESLTD_J3q3bEOhGyGnmUsngQ9rKZcqtWDbhNLsZh-TnvfQdwyq0Mx-xU0xEv540RvZk5UX1kjxuSUCoL9WsS9UmBBLYVQohValzpe_YjgG9q4KAofyb3ttmYuJ1sYx7i53GwD1vsgEVQQ-DCha3K4-1lCc1e5QvTAeO2uOzCiqnUeruEJu6Kg",
  },
  {
    name: "Marcus Thorne",
    role: "Senior Real Estate Advisor",
    bio: "Marcus is an expert in luxury residential markets, known for his negotiation skills and market foresight.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVdPDHKT3dN31EXEycCG6zMeFQosUCd_O3REvHs-Eqi9enH1AskeH6GNmKTE6HJ5RwMvpWihR5fgBwat5tjG98HJhBhO-uDnOwttHNoRq4GnyUU599BHTTEzKGqA-T4rO1UtFI4tTJVPkc9-fiMquwwIyI6Zx3DusRqHy_dpdXfegwUMV4zqIzs_nhc8G4n5kcEl0WG6B8JC6on5UluV825RpwrZWNbDkOdotF1a4FXnsqa_0ftv9lc2_k0l-j-uRK_kmX90vZR7M",
  },
  {
    name: "Isabella Rossi",
    role: "Director of Operations",
    bio: "Isabella ensures seamless operations, enhancing client experiences through meticulous process management.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVpKJYx0Fjan1h4qGvudcERtQfYTw88cB3dnoSdOr-d2DZkPB13UMrNhVxXCcQ40FNHMmzsYqMPEhqALw4hLwz33mo0l9Fpn1wq3-5TPwc3WgGKo0tE3gsuDYsqitN0NKJ2sR6ZHSyzGFOJzv7u-16ZKSjf_zu7lFak1nolkOAbihbO5gR76KLCxeG944c3YLSj3ZHzfJAaXofLUmN4yRHuszYUfWqyR2iEqEAOaHcwJLSRglP7bxSmBhiEEwegIKVWKfq3sh5Nb0",
  },
  {
    name: "Julian Croft",
    role: "Market Analyst",
    bio: "Julian's data-driven insights empower our clients to make informed decisions in a dynamic market.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuByCVgiWqdrQDTbUCS1ZwbmLf7-fx32z-4ATi52P0AIn0N3bwcM91hd0u2MTmkpTayaot3LIMvlGyC3YJ-emRD6ZM1YrVSzhSXhzxY0iahKDBtwc0ASRyVlGmobphGP2sxqfwwT-AVUFMRSlrQOrKgE0rAOD4Pe0k6a-bwhqc9VUNW_Am3JLuG5wm2PDIN6KzgG9iDIpsrWKEo3kj4E383RWHMH-7-gemn0O9UPuYrHNmwwGfWNCiVBsXNAyphfIPGqQZnIUePvdK0",
  },
  {
    name: "Sophia Chen",
    role: "Commercial Properties Lead",
    bio: "Sophia leads our commercial division, with a track record of successful high-stakes transactions.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB0IQOz1h1wheHSRyqAUlEyPdemx4W7I5VvC8dxV0xMyNzTIcgN21zsGE4_ZybEUgorrSOy9YJ8VoDXKHfhZmWLzZHYUvR2DTQuvObYKnKXRc6pLVnpcZJ4KWejiFwOkmIfaBubcx8OlDhOdNBDaKnATNTEN6gdO_Elk7BZqUOfKzFVHCBqq_nNB7bxARc94eZerhYxZnTkBIBKfJiz_nrjcD0b9z0nSG4y4_Tj2K5YNV3GcKSg-USFMVPI-ipn-glUXtqgLdTo_Uw",
  },
  {
    name: "Liam Gallagher",
    role: "Residential Specialist",
    bio: "Liam combines local knowledge with a client-first approach to find the perfect homes for our clients.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAE-m7GkdjplrhSUyzXycsJbfxWJsVHQ4biZ6GtxDXMBRJM0zhahHmVL9SWRfYM_Edgo5b4YrgyuZ1_1Y5fxQELdNB8Ltigu-2J0xfVvFwhCx_uVCLe5nYhV5cBQIp091_kIAweO0RH478lKug4qk-jHQIEcOc_sxUNX9JOq4vUSEaHayZjOQUBNv1UKAK76t_VqbQi_oCXXN7RuM6BlKHLo0Q2fFLxIl3Dyxm_HrjFJ3Ji9Ps-r9VPzRBIvqYiYKmBTk22j0KCFaI",
  },
  {
    name: "Ava Sterling",
    role: "Client Relations Manager",
    bio: "Ava is dedicated to building lasting relationships and ensuring client satisfaction at every step.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAuAWZMPLyUu9X63fOuqMFs1N_OME_UVdW5um5OQiG8ZKSBfxt-U5ZG0-Mfz53OA67i9xwTJf-zjbFLgzRln9SkGbKrkuKU5LW8pnmEn6mNkPRgR4it4T4ZtkHEps0v1fJQWLlVcfXLshZxidCnrcymq7Na7axnaWQiMuI8Tp5M3HZbCt1NW0BK1UayQyQjJbDLmqV90C2TLs2WhvIk048AKOUmP97D_HeE67Iz2v4knOTEy2hoHs8y00gVdFOoWUjCFLKmgIFzImY",
  },
  {
    name: "Noah Patel",
    role: "Junior Consultant",
    bio: "Eager and analytical, Noah supports the senior team with fresh perspectives and diligent research.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDplPEUR9fcXhHk_ONdTOOuoKag06UF5zjDiYFnC7eqUE4snZON80Sm31v6LqiFdKzlmAsGo1JjSBweSeaNhV5TlAbNwyaE5W8m5lJPrMIyCfXkWeWFTM-61toq6bzwi-BI58iKcrRFsQG6dbqIrH9z6lOFcL_aMv0ee8zdLMjy7IhP9NYOrm7PadJs0_lKfv1zvPADBaa_ckqGECmegX83aa08og_vKySClUnL_HgWB2biUE1FQ8l5c3Yf1HMNqMfTPXn_AuERmaU",
  },
];

export default function TeamGrid() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 mb-8">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="flex flex-col gap-3 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
        >
          <div
            className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover transform transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url("${member.image}")` }}
          />
          <div className="p-5 flex flex-col gap-2">
            <h3 className="text-gray-900 text-xl font-bold leading-normal font-display">
              {member.name}
            </h3>
            <p className="text-red-600 text-sm font-bold leading-normal font-body">
              {member.role}
            </p>
            <p className="text-gray-600 text-sm font-normal leading-normal font-body">
              {member.bio}
            </p>
            <a
              href="#"
              className="text-blue-800 text-sm font-bold leading-normal hover:underline mt-2 inline-flex items-center gap-1 group/link"
            >
              <span>View Full Bio</span>
              <svg
                className="w-4 h-4 transform transition-transform group-hover/link:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
