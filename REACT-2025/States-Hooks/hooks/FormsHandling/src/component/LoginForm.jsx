import { useState } from "react"

export const LoginFrom = () => {
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");

     const handleFromSubmit =(e)=>{
          e.preventDefault();
          const loginData = {
               // username:username, // es6 rule by not neet to writh 2 time
               // password:password
               username,
               password,
          };
          console.log(loginData)
     }
     return(
          <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-96">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Login Form
        </h1>
        <form onSubmit={handleFromSubmit} className="flex flex-col space-y-4">
          {/* Username */}
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="text-sm font-semibold text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              required
              autoCapitalize="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your username"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
     )
}