import { useAuth } from "../hook/useAuth";
import useLanguage from "../hook/useLanguage";

const ConsumingComp = () => {
  const [authState, toggleLogin] = useAuth();
  const [languageOptions = [], languageState, toggleLanguage] =
    useLanguage();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Infoane Dashboard
          </h1>
          <p className="text-sm text-blue-100">
            Employee Management Portal
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* Language Dropdown */}
          <select
            value={languageState.language}
            onChange={(e) => toggleLanguage(e.target.value)}
            className="bg-white text-gray-700 px-4 py-2 rounded-lg outline-none border border-gray-300 shadow-sm cursor-pointer"
          >
            {languageOptions.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>

          {/* Login Button */}
          <button
            onClick={toggleLogin}
            className={`px-5 py-2 rounded-lg font-semibold transition duration-200 cursor-pointer shadow-md
              ${
                authState.isLogin
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : "bg-white hover:bg-gray-100 text-blue-600"
              }`}
          >
            {authState.isLogin ? "Logout" : "Login"}
          </button>
        </div>
      </nav>

      {/* Welcome Section */}
      <div className="px-8 pt-8">
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 leading-relaxed">
            {languageState?.details?.heading}
          </h2>
        </div>
      </div>

      {/* User Info */}
      <div className="p-8">
        {authState.isLogin && authState.userData ? (
          <div className="max-w-4xl bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            {/* Card Header */}
            <div className="bg-blue-600 px-6 py-4">
              <h2 className="text-2xl font-bold text-white">
                User Information
              </h2>
            </div>

            {/* Card Body */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Employee Name</p>
                <p className="font-semibold text-gray-800">
                  {authState.userData.name}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-gray-500">Employee ID</p>
                <p className="font-semibold text-gray-800">
                  {authState.userData.empId}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-gray-500">Email Address</p>
                <p className="font-semibold text-gray-800">
                  {authState.userData.email}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-gray-500">Role</p>
                <p className="font-semibold text-gray-800">
                  {authState.userData.role}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-gray-500">Department</p>
                <p className="font-semibold text-gray-800">
                  {authState.userData.department}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-gray-500">Manager ID</p>
                <p className="font-semibold text-gray-800">
                  {authState.userData.managerId}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-gray-500">Manager Name</p>
                <p className="font-semibold text-gray-800">
                  {authState.userData.managername}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-gray-500">Date Of Joining</p>
                <p className="font-semibold text-gray-800">
                  {authState.userData.dateOfJoining}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-[50vh]">
            <div className="bg-white px-10 py-8 rounded-2xl shadow-md text-center border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-700 mb-2">
                User is not logged in
              </h2>

              <p className="text-gray-500">
                Please login to view employee details
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsumingComp;