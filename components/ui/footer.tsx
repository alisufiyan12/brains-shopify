import Logo from './logo'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">


          {/* Copyrights note */}
            <div className="mb-2">
              <Logo />
            </div>
          <div className="text-sm text-gray-600 mr-4">&copy; <a className='hover:text-red-600 transition ease-in-out duration-500' href='https://brinsol.agency'>Brinsol.agency</a> | All rights reserved.</div>
        </div>

      </div>
    </footer>
  )
}
