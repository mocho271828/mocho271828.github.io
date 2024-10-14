import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-4xl px-4 mx-auto my-10 xl:max-w-5xl xl:px-0 sm:px-6 bg-black text-white">
      <main>
        {/* Profile Section */}
        <section className="mb-10">
          <div className="flex flex-col md:flex-row items-center justify-center p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Kota Tsuchimoto"
              width={160}
              height={160}
              className="w-40 h-40 md:w-48 md:h-48 border border-gray-200 rounded-full shadow-xl mb-4 md:mb-0 md:mr-6"
            />
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Kota Tsuchimoto</h1>
              <p className="text-lg text-gray-700">First-year student, Faculty of Science, University of Toyama</p>
              <div className="flex justify-center md:justify-start mt-4 space-x-4">
                <a href="https://github.com/mocho271828" aria-label="github">
                  <Image src="/github-mark.svg" alt="GitHub" width={30} height={30} />
                </a>
                <a href="https://twitter.com/sugaku_tankyu0" aria-label="twitter">
                  <Image src="/twitter.jpg" alt="Twitter" width={30} height={30} />
                </a>
                <a href="https://instagram.com/mocho_tsuchi" aria-label="instagram">
                  <Image src="/Instagram_icon.jpg" alt="Instagram" width={30} height={30} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="mb-10 pb-4 border-b-2 text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8">About Me</h2>
          <div className="space-y-4 text-white">
            <li>Born: October, 2005 in Gifu Prefecture, Japan</li>
            <li>Residence: Toyama City, Toyama Prefecture, Japan</li>
            <li>Personal Motto: &quot;不敢為天下先&quot; - Lao Tzu</li>
            <li>Habit: Reading Etchu Manyoshu, a classic Japanese poetry collection. Many places in Toyama Prefecture are related to this work.</li>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-10 pb-4 border-b-2 text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8">Education</h2>
          <ul className="list-disc list-inside text-white">
            <li>University of Toyama, Faculty of Science, Department of Science (2024-present)</li>
          </ul>
        </section>

        {/* Academic Pursuits Section */}
        <section className="mb-10 pb-4 border-b-2 text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8">Other Infomation of Me</h2>
          <ul className="list-disc list-inside text-white">
            <li>Representative of Mathle, a self-study seminar circle at the University of Toyama</li>
            <li>Conducting research under faculty supervision since university entrance</li>
            <li>Member of the University of Toyama Astronomy Club</li>
            <li>Student member of the Physical Society of Japan (Cosmic Ray and Astrophysics, Theory, Particle Theory, and Particle Experiment divisions)</li>
          </ul>
        </section>

        {/* Interests Section */}
        <section className="mb-10 pb-4 border-b-2 text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8">Interests</h2>
          <ul className="list-disc list-inside text-white">
            <li>Algebraic geometry (mathematics)</li>
            <li>Nuclear and particle theory (physics)</li>
            <li>Computer Science</li>
          </ul>
        </section>

        {/* Skills Section */}
        <section className="mb-10 pb-4 border-b-2 text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8">Skills</h2>
          <div className="flex flex-wrap justify-center md:justify-start">
            <Image src="/python.jpg" alt="Python" width={50} height={50} className="m-2" />
            <Image src="/javascript.jpg" alt="JavaScript" width={50} height={50} className="m-2" />
            <Image src="/html.jpg" alt="HTML" width={50} height={50} className="m-2" />
            <Image src="/css3-512.jpg" alt="CSS" width={50} height={50} className="m-2" />
            <Image src="/haskell.jpg" alt="Haskell" width={50} height={50} className="m-2" />
            <Image src="/sage.jpg" alt="SageMath" width={50} height={50} className="m-2" />
            <Image src="/Typescript.jpg" alt="TypeScript" width={50} height={50} className="m-2" />
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="mb-10 pb-4 border-b-2 text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8">Contact</h2>
          <ul className="list-disc list-inside text-white">
            <p className="text-lg text-gray-700">s2440829(at).ems.u-toyama.ac.jp</p>
          </ul>
        </section>
      </main>
    </div>
  );
}
