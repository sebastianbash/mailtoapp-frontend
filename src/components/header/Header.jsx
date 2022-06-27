import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
      <div className="w-full flex flex-wrap items-center justify-between px-6">
        <div className="container mx-auto flex flex-row items-center justify-center">
          <Link className="text-xl text-black font-semibold" to="/">MailTo</Link>
        </div>
      </div>
    </nav>
  )
}

export default Header