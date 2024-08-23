import Image from "next/image";
import img1 from "../assets/images/homevision1.jpg";
import img2 from "../assets/images/homevision2.jpg";
import img3 from "../assets/images/homevision3.jpg";
import Link from "next/link";

function HomeMission() {
  return (
    <div className="bg-gray-100 py-12 px-6 lg:px-20">
      <h1 className="text-center text-black text-4xl font-semibold mb-12">
        A Different Way to Learn
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Link href="/about-us/mission-and-vision">
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <Image
              src={img1}
              layout="responsive"
              width={600}
              height={400}
              sizes="100vw"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              alt="Mission Image"
            />
            <div
              className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-6 opacity-0 group-hover:opacity-100 
          transition-opacity duration-500"
            >
              <h2 className="text-3xl font-bold text-white mb-2">
                Our Mission and Vision
              </h2>
              <p className="text-white text-lg leading-relaxed">
                Our mission is to provide high-quality education that nurtures
                lifelong learners and responsible global citizens.
              </p>
            </div>
          </div>
        </Link>

        <Link href="/about-us/what-makes-us-different">
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <Image
              src={img2}
              layout="responsive"
              width={600}
              height={400}
              sizes="100vw"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              alt="Mission Image"
            />
            <div
              className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-6 opacity-0 group-hover:opacity-100 
          transition-opacity duration-500"
            >
              <h2 className="text-3xl font-bold text-white mb-2">
                What Makes us different
              </h2>
              <p className="text-white text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                perferendis non hic voluptate nam distinctio odio minima ipsum
                amet dignissimos cum libero sequi ad quidem numquam ab sit,
                facilis eveniet.
              </p>
            </div>
          </div>
        </Link>

        <Link href="/about-us/our-values">
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <Image
              src={img3}
              layout="responsive"
              width={600}
              height={400}
              sizes="100vw"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              alt="Mission Image"
            />
            <div
              className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-6 opacity-0 group-hover:opacity-100 
          transition-opacity duration-500"
            >
              <h2 className="text-3xl font-bold text-white mb-2">Values</h2>
              <p className="text-white text-lg leading-relaxed">
                We are committed to integrity, respect, inclusivity, and
                fostering a supportive learning environment for all.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomeMission;
