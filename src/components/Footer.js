import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl px-4 py-4 mx-auto sm:px-6 lg:px-8">
        <div className="lg:flex">
          <div className="w-full -mx-4 sm:-mx-6 lg:-mx-8 lg:w-2/5">
            <div className="px-4 sm:px-6 lg:px-8">
              <Link className="flex items-center gap-1" to="/">
                <StaticImage
                  src="../img/logo.png"
                  alt="Logo SMK Daarussaadah"
                  layout="fixed"
                  width={40}
                  height={40}
                  backgroundColor="transparent"
                  placeholder="blurred"
                />
                <div className="text-xl font-bold tracking-wide">
                  <span className="text-gray-800 font-semibold">Dakimakura</span>
                  <span className="text-green-700">Pillow</span>
                </div>
              </Link>

              <p className="max-w-md mt-2 text-gray-600 dark:text-gray-400">
                Dakimakura Pillow bukan hanya bantal peluk, tetapi wujud ekspresi dan kreativitas yang
                menghubungkan penggemar dengan karakter kesayangan mereka.
              </p>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Tentang
                </h3>
                <Link
                  to="/"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Dakimakura Pillow
                </Link>
                <Link
                  to="/"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Komunitas
                </Link>
                <Link
                  to="/"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Wibu
                </Link>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Blog
                </h3>
                <Link
                  to="/"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Artikel
                </Link>
                <Link
                  to="/"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Sosmed
                </Link>
                <Link
                  to="/"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Videos
                </Link>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Kerjasama
                </h3>
                <a
                  href="https://www.aretanet.com/"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  PT. Dakimakura Pillow
                </a>
                <a
                  href="https://www.aretacollege.com/"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  Dakimakura Pillow
                </a>
                <a
                  href="https://facebook.com/smk-daarussaadah"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  Fan Page
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Kontak
                </h3>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  +62 821-1487-0063
                </span>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  info@Dakimakurapillow.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-gray-800 dark:text-white">
            © Dakimakura Pillow 2025 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
