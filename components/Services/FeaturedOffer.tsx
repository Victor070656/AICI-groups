export default function FeaturedOffer() {
  return (
    <div className="bg-gray-50 rounded-xl p-8 md:p-12 my-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div
          className="w-full md:w-1/2 bg-center bg-no-repeat aspect-video bg-cover rounded-lg shadow-lg"
          style={{
            backgroundImage:
              'url("/work/img/15.jpeg")',
          }}
        />
        <div className="flex flex-col gap-4 flex-1">
          <p className="text-red-600 text-sm font-bold uppercase tracking-wider font-body">
            Exclusive Offer
          </p>
          <h3 className="text-blue-800 text-2xl md:text-3xl font-bold font-display">
            10% Off on Property Valuation This Month
          </h3>
          <p className="text-gray-600 text-base font-normal font-body leading-relaxed">
            Get a precise and professional valuation of your property. Offer
            valid for a limited time.
          </p>
          <button className="flex min-w-[84px] w-fit cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-5 bg-red-600 text-white text-sm font-bold mt-2 hover:bg-red-800 transition-colors shadow-sm">
            <span className="truncate">Claim Offer</span>
          </button>
        </div>
      </div>
    </div>
  );
}
