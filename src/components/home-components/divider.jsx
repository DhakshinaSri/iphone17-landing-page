import { Link } from "react-router-dom";

export default function ProductDivider() {
  return (
    <section className="w-full items-center justify-between px-4 md:px-20 lg:px-32 py-3 bg-white">
      <div className="text-center md:text-left pt-3">
        <h2
          className="text-base sm:text-lg md:text-xl lg:text-xl font-thin text-black leading-tight text-left pb-3"
          style={{ letterSpacing: "2px", wordSpacing: "4px" }}
        >
          EXPERIENCE THE POWER OF THE NEXT GENERATION iPHONE 17 PRO →
          PERFORMANCE, DESIGN & INNOVATION REDEFINED
          <Link
            to="/product"
            className="text-black font-bold underline hover:text-gray-700 ml-3"
          >
            EXPLORE NOW
          </Link>
        </h2>
      </div>
    </section>
  );
}