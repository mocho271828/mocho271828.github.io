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
                <a href="https://twitter.com/partial_mocho" aria-label="twitter">
                  <Image src="/twitter.jpg" alt="Twitter" width={30} height={30} />
                </a>
                <a href="https://instagram.com/mocho_tsuchi" aria-label="instagram">
                  <Image src="/Instagram_icon.jpg" alt="Instagram" width={30} height={30} />
                </a>
                <a href="https://bsky.app/profile/mocho-tsuchi.bsky.social" aria-label="Bluesky">
                  <Image src="/Bluesky_Logo.jpg" alt="Bluesky" width={30} height={30} />
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
            <li>座右の銘: &quot;世のため人のために生きられる人間となれ&quot;</li>
            <li>趣味: 読書/ベース/創作活動/写真</li>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-10 pb-4 border-b-2 text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8">Education</h2>
          <ul className="list-disc list-inside text-white">
            <li>University of Toyama, Faculty of Science, Department of Science, Mathematical Science program (2025-present)</li>
          </ul>
        </section>

        {/* Academic Pursuits Section */}
        <section className="mb-10 pb-4 border-b-2 text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8">読了/読中リスト</h2>
          <ul className="list-disc list-inside text-white">
            <li>
              <a href="https://amzn.asia/d/8pwanVM" className="text-blue-500 hover:underline">
              数学の基礎: 集合・数・位相 (基礎数学 14)
              </a>
              <span className="text-gray-500"> (2024年)</span>
              <p className="text-gray-700">著者: 斎藤 正彦</p>
              <p className="text-gray-700">出版社: 東京大学出版会</p>
              <p className="text-gray-700">ISBN: 4130629093</p>
              <p className="text-gray-700">概要: 大学数学の基礎,集合や位相空間論の入門書</p>
            </li>
            <li>
              <a href="https://amzn.asia/d/2GmD6xo" className="text-blue-500 hover:underline">
              数学の基礎: 線形代数入門 (基礎数学 1)
              </a>
              <span className="text-gray-500"> (2024年)</span>
              <p className="text-gray-700">著者: 斎藤 正彦</p>
              <p className="text-gray-700">出版社: 東京大学出版会</p>
              <p className="text-gray-700">ISBN: 4130620010</p>
              <p className="text-gray-700">概要: 線形代数の入門書,特筆詳しい訳ではないが易しくもない.ソフトカバーの方は分かりやすい.</p>
            </li>
            <li>
              <a href="https://amzn.asia/d/eSYsQ7g" className="text-blue-500 hover:underline">
              数学の基礎: 多様体の基礎 (基礎数学 5)
              </a>
              <span className="text-gray-500"> (2024年)</span>
              <p className="text-gray-700">著者: 松本 幸夫</p>
              <p className="text-gray-700">出版社: 東京大学出版会</p>
              <p className="text-gray-700">ISBN: 4130621033</p>
              <p className="text-gray-700">概要: とても分かりやすいが,物足りない.非数学科の方にはおすすめ</p>
            </li>
            <li>
              <a href="https://amzn.asia/d/74qkiat" className="text-blue-500 hover:underline">
              多様体入門(新装版) (数学選書 5)
              </a>
              <span className="text-gray-500"> (2024年)</span>
              <p className="text-gray-700">著者: 松島 与三</p>
              <p className="text-gray-700">出版社: 裳華房</p>
              <p className="text-gray-700">ISBN: 478531317X</p>
              <p className="text-gray-700">概要: 多様体の名著.数学科はこちらをやるべき(個人の見解です)</p>
            </li>
            <li>
              <a href="https://amzn.asia/d/0evXIGj" className="text-blue-500 hover:underline">
              数学の基礎: 線形代数演習 (基礎数学 4)
              </a>
              <span className="text-gray-500"> (2024年)</span>
              <p className="text-gray-700">著者: 斎藤 正彦</p>
              <p className="text-gray-700">出版社: 東京大学出版会</p>
              <p className="text-gray-700">ISBN: 4130620258</p>
              <p className="text-gray-700">概要: 線形代数の演習書,知識の定着に一役買われる</p>
            </li>
            <li>
              <a href="https://amzn.asia/d/5JwaBcf" className="text-blue-500 hover:underline">
              数学の基礎: 解析入門 (1)  (基礎数学 2)
              </a>
              <span className="text-gray-500"> (2024年~2025年)</span>
              <p className="text-gray-700">著者: 杉浦 光夫</p>
              <p className="text-gray-700">出版社: 東京大学出版会</p>
              <p className="text-gray-700">ISBN: 4130620053</p>
              <p className="text-gray-700">概要: 俗に言う杉浦解析,言わずと知れた名著だが,字が細かく読みづらい</p>
            </li>
            <li>
              <a href="https://amzn.asia/d/gyPlfCZ" className="text-blue-500 hover:underline">
              数学の基礎: 解析入門 (2)  (基礎数学 3)
              </a>
              <span className="text-gray-500"> (2024年~)</span>
              <p className="text-gray-700">著者: 杉浦 光夫</p>
              <p className="text-gray-700">出版社: 東京大学出版会</p>
              <p className="text-gray-700">ISBN: 4130620061</p>
              <p className="text-gray-700">概要: (中略)…後半部分で複素解析を扱う.二冊セットで持っておくことを薦める</p>
            </li>
            <li>
              <a href="https://amzn.asia/d/43hLD5w" className="text-blue-500 hover:underline">
              代数学１ 群論入門 第２版
              </a>
              <span className="text-gray-500"> (2024年)</span>
              <p className="text-gray-700">著者: 雪江 明彦</p>
              <p className="text-gray-700">出版社: 日本評論社</p>
              <p className="text-gray-700">ISBN: 4535789975</p>
              <p className="text-gray-700">概要: 俗に言う雪江赤,第一版に比べ数題程度,例と演習問題が補充されている</p>
            </li>
            <li>
              <a href="https://amzn.asia/d/fACTrXF" className="text-blue-500 hover:underline">
              代数学２ 環論入門 第２版
              </a>
              <span className="text-gray-500"> (2024年~)</span>
              <p className="text-gray-700">著者: 雪江 明彦</p>
              <p className="text-gray-700">出版社: 日本評論社</p>
              <p className="text-gray-700">ISBN: 4535789983</p>
              <p className="text-gray-700">概要: 俗に言う雪江青,(中略),私は途中でアティマクに切り替えたため,現在は文鎮となっている</p>
            </li>
            <li>
              <a href="https://amzn.asia/d/3kkTAYr" className="text-blue-500 hover:underline">
              代数学3 代数学のひろがり 第２版
              </a>
              <span className="text-gray-500"> (2024年~)</span>
              <p className="text-gray-700">著者: 雪江 明彦</p>
              <p className="text-gray-700">出版社: 日本評論社</p>
              <p className="text-gray-700">ISBN: 4535789991</p>
              <p className="text-gray-700">概要: 俗に言う雪江黄,(中略),私は途中でハーツホーンに切り替えたため,(以下略)</p>
            </li>
            <li>
              <a href="https://amzn.asia/d/ebjCTnX" className="text-blue-500 hover:underline">
              圏と表現論: 2-圏論的被覆理論を中心に (2) (SGCライブラリ 155)
              </a>
              <span className="text-gray-500"> (2024年)</span>
              <p className="text-gray-700">著者: 浅芝 秀人</p>
              <p className="text-gray-700">出版社: サイエンス社</p>
              <p className="text-gray-700">ISBN: 4781914659</p>
              <p className="text-gray-700">概要: 2-圏論を扱う本の中では抜きん出て明快,初学者にもお薦め</p>
            </li>
            <li>
              <a href="https://amzn.asia/d/aXCiV6L" className="text-blue-500 hover:underline">
              連続群と対称空間 (共立講座 数学探検)
              </a>
              <span className="text-gray-500"> (2024年)</span>
              <p className="text-gray-700">著者: 河添 健</p>
              <p className="text-gray-700">出版社: 共立出版</p>
              <p className="text-gray-700">ISBN: 4320111826</p>
              <p className="text-gray-700">概要: 群の応用(具体)を知りたいという気になる子ちゃんへのお薦めの一冊</p>
            </li>
            <li>
              <a href="https://amzn.asia/d/fdAXad0" className="text-blue-500 hover:underline">
              圏論によるトポロジー
              </a>
              <span className="text-gray-500"> (2025年)</span>
              <p className="text-gray-700">著者: Tai-Danae Bradley (原著), Tyler Bryson (原著), John Terilla (原著), 小森 洋平 (翻訳)</p>
              <p className="text-gray-700">出版社: 森北出版</p>
              <p className="text-gray-700">ISBN: 4627063113</p>
              <p className="text-gray-700">概要: 変人向けの一冊.すぐ読み終えられるので暇潰しに最適</p>
            </li>
            <li>
              <a href="https://amzn.asia/d/70PqUE7" className="text-blue-500 hover:underline">
              数学原論
              </a>
              <span className="text-gray-500"> (2024~年)</span>
              <p className="text-gray-700">著者: 斎藤 毅</p>
              <p className="text-gray-700">出版社: 東京大学出版会</p>
              <p className="text-gray-700">ISBN: 4130639048</p>
              <p className="text-gray-700">概要: ブルバキの21世紀版(ただし一人で執筆),圏論による統一的背景を与える読み応えたっぷりの一作.</p>
            </li>
            <li>
              <a href="https://amzn.asia/d/fbnxGLz" className="text-blue-500 hover:underline">
              ベーシック圏論 普遍性からの速習コース
              </a>
              <span className="text-gray-500"> (2024年)</span>
              <p className="text-gray-700">著者: Tom Leinster (著), 斎藤 恭司 (監修), 土岡 俊介 (翻訳)</p>
              <p className="text-gray-700">出版社: 丸善出版</p>
              <p className="text-gray-700">ISBN: 4621300709</p>
              <p className="text-gray-700">概要: 圏論入門の一冊,日本語版を載せたのはわざわざベシ圏を英語版でやる理由を理解できないから</p>
            </li>
            <li>
              <a href="https://amzn.asia/d/a6hcyjG" className="text-blue-500 hover:underline">
              Categories for the Working Mathematician (Graduate Texts in Mathematics, 5)
              </a>
              <span className="text-gray-500"> (2024年)</span>
              <p className="text-gray-700">著者: Saunders Mac Lane</p>
              <p className="text-gray-700">出版社: Springer</p>
              <p className="text-gray-700">ISBN: 0387984038</p>
              <p className="text-gray-700">概要: ArXiveで無償配布されている.こちらは英語版でやる価値がある.</p>
            </li>
            <li>
              <a href="https://alg-d.com/math/kan_extension/" className="text-blue-500 hover:underline">
              壱大聖域 圏論
              </a>
              <span className="text-gray-500"> (2024年)</span>
              <p className="text-gray-700">著者: Alg-d氏</p>
              <p className="text-gray-700">概要: 私も非常にお世話になった,非常に分かりやすい</p>
            </li>
            <li>
              <a href="https://amzn.asia/d/iO54DzX" className="text-blue-500 hover:underline">
              力学 (増訂第3版) ランダウ=リフシッツ理論物理学教程
              </a>
              <span className="text-gray-500"> (2024年)</span>
              <p className="text-gray-700">著者: エリ・ランダウ (著), イェ・エム・リフシッツ (著), 広重 徹 (翻訳), 水戸 巌 (翻訳)</p>
              <p className="text-gray-700">出版社: 東京図書</p>
              <p className="text-gray-700">ISBN: 4489011601</p>
              <p className="text-gray-700">概要: 言わずと知られた名著.初学には「考える力学」を薦める</p>
            </li>
          </ul>
        </section>

        {/* Interests Section */}
        <section className="mb-10 pb-4 border-b-2 text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8">Interests</h2>
          <ul className="list-disc list-inside text-white">
            <li>Algebraic geometry (mathematics)</li>
            <li>数理論理学 (mathematics)</li>
            <li>Category theory (mathematics)</li>
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
            <Image src="/latex.jpg" alt="LaTeX" width={50} height={50} className="m-2" />
            <Image src="/java.jpg" alt="Java" width={50} height={50} className="m-2" />
            <Image src="/C.jpg" alt="C_lang" width={50} height={50} className="m-2" />
            <Image src="/go.jpg" alt="Go_lang" width={50} height={50} className="m-2" />
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
