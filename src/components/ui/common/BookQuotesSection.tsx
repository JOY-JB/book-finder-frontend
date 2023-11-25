import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const BookQuotesSection = () => {
  const quotes = [
    {
      text: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
      book: "Places You'll Go!",
    },
    {
      text: "A room without books is like a body without a soul.",
      book: "Marcus Tullius",
    },
    {
      text: "You can never get a cup of tea large enough or a book long enough to suit me.",
      book: "The Complete Works",
    },
    {
      text: "There is no friend as loyal as a book.",
      book: "The Old Man",
    },
    {
      text: "Reading is a discount ticket to everywhere.",
      book: "The Complete Works",
    },
  ];

  return (
    <section className="my-16">
      <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
        <h1 className="text-4xl font-semibold leading-tight text-center">
          Book Quotes and Excerpts
        </h1>
        <p className="text-lg text-center text-gray-600 mt-4">
          Discover profound thoughts and ideas from our favorite books through
          inspiring quotes and excerpts.
        </p>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        scrollbar={{ draggable: true }}
        navigation
        pagination={{ clickable: true }}
      >
        {quotes.map((quote, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center mx-12 lg:mx-0">
              <div className="relative text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="inline-block w-8 h-8 text-gray-400 mb-8"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="px-6 text-lg italic">{quote.text}</p>
              </div>
              <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
              <p>{quote.book}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BookQuotesSection;
