const properties = [
  {
    title: "123 Elegance Avenue",
    price: "$1,200,000",
    bedrooms: 3,
    bathrooms: 2,
    sqft: "1,800",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAi0WZs40vszSd2j9jGSXUn5nVffmuAiRTHvc6xkGBhPw738N4xz7iYsWBYTi4gYVF0VeTrqttFccq96n7ONr72HJUlSwUuFb3xsVav40Kwwd07NYAkX8AsKGM5Lt5QCkjGSowMQeLnHATsu0n2PeSKOSR4nuuo5Y12cZe38mPeeMBEjL7R4w2iXK57ZcOB_W-Xg4Zr9XdaQAnpvIOjEPAY_tf75tHytyEyO5GHNl5ABRbPTpJ0VEYhkQtqdWIDAtURi_f3HeDVq7w",
    badge: "For Sale",
  },
  {
    title: "Luxury Downtown Condo",
    price: "$2,500,000",
    bedrooms: 4,
    bathrooms: 4,
    sqft: "3,200",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC8mgQgYu8lzO9sF0zhfdPQ8XiL9xvflFlL-ydLujDz82EU5weWKvpXE8kl0sBHjd8rJdgKfGniCpp8RqdAwdtcmGcnlbxXAgzN1dpdg_My1anM4wla_DTjYUOXdT6SCMHobwG-ZCcH1MYZIN33jVXX2BUGJVsA41QHm1m-Y6fReuUnmGd41VN7PvmKfEvDWlrST0URvGKlzc59APIGlzkF-eIXtt0KIkObpyRft7Bz6735rOpOREG-NhRMNunoM_Uuys1hUUDuIG4",
    badge: "New Listing",
  },
  {
    title: "Modern Family Home",
    price: "$850,000",
    bedrooms: 4,
    bathrooms: 3,
    sqft: "2,500",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIbpzqeh19qBH7UPD-oUN1QnFXq0zxn5OFF5yevP_04H0pTVC9c7mtklNdumVgFqwqD-OnIS4KGImgK9uATxO2agYjT6_HpVQEbKW_A-o6988QyvCRtkyQA8F-0tbTefT4xF6-sByiyNE3KKrG1D9bX_6cbVW1c4Fdhep8g52MuMpcONjltswdK3pbDXSyL_pGQPPOBlW9zmjaKoc1ogHiIwmt-bhmTgS6ha2Y7TTO2S5f5y56nsUF36gCXPnj1QNLuaDnBQla3pg",
    badge: "For Sale",
  },
  {
    title: "Riverside Villa",
    price: "$3,100,000",
    bedrooms: 5,
    bathrooms: 5,
    sqft: "4,500",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDHTTZF2TYLfoplJom171wfJyO5Bmy0qt20xFycqFaq3Xd5W31mYZkbUTnoNMBQib6F-EMH2CCQwTD5p9UI6TqE4Icy639aQw1eSr3ksZC7DiB_SXzix8kXOpHFmlTBKPctfETWnmom3FW236Ou-1b49oaac4JrmlWWpFD6mo2mQYyfwwdA89XDxKmEgMyHWfA99cPxsNHBr_LPLKqENCYfGWEIvXTHZBBVFej6KdSdRS5W8e3wopMAeglZMpl-PBFTpPUfQ70OiE4",
    badge: "For Sale",
  },
  {
    title: "Penthouse with a View",
    price: "$4,500,000",
    bedrooms: 3,
    bathrooms: 4,
    sqft: "3,000",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADp2u6MDZXClJdqsT9r54nlDS-CUyll8NS9D4Dnbs4QJaSiW3SwM89CoXPMiAbRTHapBpeepYC5lov1fqI-MJk5GsX-dJ3XAVtxhRWYJ5bBVe9id2RQUYWulsm69A8eLDfsA-WWIBfZ0xRmoisUKuPVHY2YAwMYz67cGbzu6WSdOtpSpxNA3UJynCN2x9L94JxZqWeUJJdcsCLNC0W8BkdAJzALEDfFlfLha1l5haXafS6jtnUCy-SS7rGbVex-cOTHI_ZGGynUTw",
    badge: "New Listing",
  },
  {
    title: "Cozy Suburban House",
    price: "$780,000",
    bedrooms: 4,
    bathrooms: 2,
    sqft: "2,200",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDETxwppnKitdgZpIIWddFkMvBg1IynoLk6vsDpw4ZI5nLV9k0BEaFdx16e0rA8yf2wwBa-dCRfsvKXwXwhW6lVo_PkBsHLIU1sBVNWD0zhYuWJiGJauWa_KRLrrVjZYrI4YLC3BLIhsrFdfvY62FaHhrQo9ysyLsN20VmJunQx7fOZXgoAfd4vDVYqpfFYlkZY5DNM2CkE7LpJMa5233p8Lj3QIXy4PIPQ9yd2R2bL2_5Hlh-J3XeiDEpgH4bLT5qRnunjc_7j1ak",
    badge: "For Sale",
  },
  {
    title: "Historic Brownstone",
    price: "$1,900,000",
    bedrooms: 5,
    bathrooms: 4,
    sqft: "3,500",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBxuKA26OO_OiHJtNzfa4zSHHNiOEAkuG6To9dkPLonAUs8Axxo65hYVBzPRla3aE7qDpDvO94M2il2v68VO9yrpitLGUnPYkMJUVKEIHzs-Bhs8q5I94pdwamPj2hT-m-J5nvOrw6G_robosU0dFjrrWX3NWSYxLsfgK8KKbytoA7T0iS2TBuRs0dESDZoiXArwIUphiX9Nh9o5l3dJR7ogwGkPhXom-YH2D68ys1uC5GHCthAGmLqE1cjrm111aE0b5oWH79UhKE",
    badge: "For Sale",
  },
  {
    title: "Sleek Urban Loft",
    price: "$950,000",
    bedrooms: 2,
    bathrooms: 2,
    sqft: "1,500",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXmgQtMyvTLcR4GyTty4Ny_ukcYPtmNOx3zSF-IByDzZTGGSF6ZpWI8CpJYebhQlg5en6B22Cqs3hvqSXAHMHhtwO_obj4oJwvnh5U7wiZagoYpO5wqmQxfy01IHq9PDZTuBs-JrCj3XE_cLCo4dO90FN6_is5D9k5--JMb7JE1DPK7W_a4ynJnecF45AZ8YyDgYrnjHlGAazGOTSiozHmkFGM6r67QSErOzSmwtyGFbGYKUvk_o6EPMyToMXkejJ48a0kezV-bjk",
    badge: "For Sale",
  },
];

export default function PropertyGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {properties.map((property, index) => (
        <article
          key={index}
          className="flex flex-col overflow-hidden rounded-lg bg-gray-50 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          {/* Property Image */}
          <div className="relative w-full">
            <div
              className="aspect-video w-full bg-cover bg-center"
              style={{ backgroundImage: `url("${property.image}")` }}
            />
            <div className="absolute top-3 left-3 rounded bg-red-600/90 px-2 py-1 text-xs font-bold uppercase tracking-wider text-white">
              {property.badge}
            </div>
          </div>

          {/* Property Details */}
          <div className="flex flex-1 flex-col p-4">
            <div className="flex-1">
              <p className="font-display text-lg font-bold text-gray-900 ">
                {property.title}
              </p>
              <p className="mt-1 text-xl font-bold text-blue-800">
                {property.price}
              </p>

              {/* Property Features */}
              <div className="mt-3 flex items-center gap-4 text-gray-600 ">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg text-blue-800">
                    bed
                  </span>
                  <span className="text-sm">{property.bedrooms}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg text-blue-800">
                    bathtub
                  </span>
                  <span className="text-sm">{property.bathrooms}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg text-blue-800">
                    square_foot
                  </span>
                  <span className="text-sm">{property.sqft} sqft</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="mt-4 flex w-full items-center justify-center rounded-lg bg-red-600 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90">
              View Details
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
