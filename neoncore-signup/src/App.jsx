import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  });
  const validateCallsign = (username) => {
    if (!username.trim()) {
      return "Enter a callsign";
    }
    if (username.length < 3) {
      return "Use at least 3 characters";
    }
    if (username.length > 20) {
      return "Use 20 characters or fewer";
    }
    if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
      return "Use letters, numbers, _ or - only";
    }
    return "";
  };
  const callsignError = formData.username ? validateCallsign(formData.username) : "";
  const callsignStatus = !formData.username.trim() 
  ? "PENDING" 
  : callsignError === "Use at least 3 characters" ? "TOO SHORT" 
  : callsignError === "Use 20 characters or fewer" ? "TOO LONG"
  : callsignError === "Use letters, numbers, _ or - only" ? "BAD CHARACTER"
  : callsignError ? "INVALID"
  : "OK";
  const validateEmail = (email) => {
    if (!email.trim()) {
      return "Enter your email";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return "Enter a valid email, like you@example.com";
    }
    return "";
  };
  const emailError = formData.email
  ? validateEmail(formData.email) : "";
  const emailIsValid = formData.email && !emailError;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <main className=" relative min-h-screen bg-[hsl(210_39%_7%)] text-white flex items-center justify-center p-8 lg:p-12">
      {/*pattern backdrop*/}
      <div className="hidden md:block absolute right-0 top-0 w-1/2 h-full overflow-hidden pointer-events-none">
        <img src="/images/pattern-backdrop.svg" alt="" aria-hidden="true"
          className="absolute insert-0 w-full h-full object-fill"
        />
      </div>
      <div className=" relative z-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 md:item-start">
        {/*left side-branding*/}
        <div className="p-8 lg:p-12 flex flex-col justify-center bg-[hsl(210_39%_7%)]">
          <div>
            <div className="flex items-center justify-between gap-6 mb-12">
              <img src="/images/logo.svg" alt="Neoncore Logo" className="h-5"/>
              <span className="md:hidden text-xs text-[hsl(211_13%_55%)] tracking-wider">0/5 READY</span>
            </div>
            <h1 className="font-heading text-4xl lg:text-5xl font-extrabold text-[#e6edf3] leading-tight tracking-wide">
              <span className="text-lime-500">//</span> JOIN THE <br/> NEXUS
            </h1>
            <p className="font-body text-[10px] sm:text-xs text-[#e6edf3] mt-3 tracking-[0.16em] uppercase whitespace-nowrap">INITIALIZE YOUR NEONCORE IDENTITY</p>
          </div>
          <div className="mt-8 bg-[hsl(214_37%_4%)] border border-[hsl(211_22%_24%)] font-body text-xs"></div>
          <div className="flex justify-between items-center mt-5 mb-4 pb-2">
            <span className="text-xs text-[hsl(211_13%_55%)] tracking-[0.16em]">OPERATOR ID</span>
            <span className="md:hidden text-xs text-[hsl(211_13%_55%)] tracking-[0.16em]">UNASSIGNED</span>
            <span className="hidden md:block text-xs text-[hsl(211_13%_55%)] tracking-wider">0/5 READY</span>
          </div>
          <p className="hidden md:block text-base font-heading font-bold text-[#e6edf3] mb-6 tracking-[0.16em] uppercase truncate">UNASSIGNED</p>
          <div className="hidden md:block space-y-2 text-xs text-[hsl(211_13%_55%)]">
            <div className="flex justify-between items-center gap-3">
              <span className="">CALLSIGN</span>
              <div className="flex-1 border-t border-[hsl(211_22%_24%)]"></div>
              <span className={callsignError ? "text-red-300" : "text-[hsl(211_13%_55%)]"}>{callsignStatus}</span>
            </div>
            <div className="flex justify-between items-center gap-3">
              <span className="">EMAIL</span>
              <div className="flex-1 border-t border-[hsl(211_22%_24%)]"></div>
              <span>PENDING</span>
            </div>
            <div className="flex justify-between items-center gap-3">
              <span className="">PASSWORD</span>
              <div className="flex-1 border-t border-[hsl(211_22%_24%)]"></div>
              <span>PENDING</span>
            </div>
            <div className="flex justify-between items-center gap-3">
              <span className="">CONFIRM</span>
              <div className="flex-1 border-t border-[hsl(211_22%_24%)]"></div>
              <span>PENDING</span>
            </div>
            <div className="flex justify-between items-center gap-3">
              <span className="">TERMS</span>
              <div className="flex-1 border-t border-[hsl(211_22%_24%)]"></div>
              <span>PENDING</span>
            </div>
          </div>
        </div>
        {/*right side-signup form*/}
        <div className="relative flex items-center justify-center p-8 lg:px-6 lg:py-12">
          {/*form card*/}
          <div className="relative z-10 w-full max-w-md border border-[hsl(211_22%_24%)] bg-[#161b22] p-6 lg:p-8">
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-lime-500"></div>
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-lime-500"></div>
            <div className="flex justify-between items-center mb-6">
              <span className="font-body text-xs text-white tracking-wider">NEW OPERATOR</span>
              <span className="font-body text-[10px] text-white tracking-wider">ALL FIELDS REQUIRED</span>
            </div>
            <form className="space-y-6">
              {/*CALLSIGN FIELD*/}
              <div>
                <label htmlFor="username" className="block text-xs font-body text-gray-300 mb-2 tracking-wider">
                  <span className="text-lime-500">&gt;</span> CALLSIGN
                </label>
                <input type="text" id="username" name="username" placeholder="e.g. Vortex_07"
                  value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})}
                  className={`w-full bg-[#od1117] border p-2 text-sm text-white outline-none 
                  ${callsignError ? "border-red-300" : "border-gray-700 hover:border-white focus:border-lime-500"}`}
                />
                <p className={`mt-2 text-xs font-body ${callsignError ? "text-red-300" : "text-gray-400"}`}>
                  {callsignError || "3-20 characters: letters, numbers, _ or -"}
                </p>
              </div>
              {/*EMAIL*/}
              <div>
                <label htmlFor="email" className="block text-xs font-body text-gray-300 mb-2 tracking-wider">
                  <span className="text-lime-500">&gt;</span> EMAIL
                </label>
                <input type="email" id="email" name="email" value={formData.email}
                  onChange={(e) => setFormData({...formData,email: e.target.value})} placeholder="e.g. you@example.com"
                  className={`w-full bg-[#0d1117] border p-2 text-sm text-white outline-none transition-colors 
                  ${ emailError ? "border-red-300" : "border-gray-700 hover:border-white focus:border-lime-500" }`}
                />
                <p className={`mt-2 flex items-center gap-2 text-xs font-body ${emailError ? "text-red-300" : "text-gray-400"}`}>
                  {emailError ? (
                    <>
                      <img src="/images/icon-alert.svg" alt="" aria-hidden="true" className="h-4 w-4"/>
                      <span>{emailError}</span>
                    </>
                  ) : (
                    "Enter your email"
                  )}
                </p>
             </div>
              {/*PASSWORD*/}
              <div className="relative">
                <label htmlFor="password" className="block text-xs font-body text-gray-300 mb-2 tracking-wider">
                  <span className="text-lime-500">&gt;</span> PASSWORD
                </label>
                <input type={showPassword ? "text" : "password"} id="password" name="password"
                  className="w-full bg-[#0d1117] border border-gray-700 p-2 pr-12 text-sm text-white outline-none focus:border-lime-500"
                />
                <button 
                  type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center"
                  aria-label={showPassword ? "Hide password" : "show password"}
                >
                  <img src={showPassword ? "/images/icon-eye-off.svg" : "/images/icon-eye.svg"}
                  alt=""
                  className="w-4 h-4"/>
                </button>
                {/*PASSWORD STRENGTH INDICATOR*/}
                <div className="flex items-center gap-1 mt-3">
                  <div className="h-1 flex-1 bg-gray-700"></div>
                  <div className="h-1 flex-1 bg-gray-700"></div>
                  <div className="h-1 flex-1 bg-gray-700"></div>
                  <div className="h-1 flex-1 bg-gray-700"></div>
                </div>
                <p className="font-body text-[10px] text-gray-300 mt-2">At least 8 characters</p>
              </div>
              {/*CONFIRM PASSWORD*/}
              <div>
                <label htmlFor="confirmPassword" className="block text-xs font-body text-gray-300 mb-2 tracking-wider">
                  <span className="text-lime-500">&gt;</span> CONFIRM PASSWORD
                </label>
                <div className="relative">
                  <input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" name="confirmPassword" 
                    className="w-full bg-[#0d1117] border border-gray-700 p-2 pr-12 text-sm text-white outline-none focus:border-lime-500"
                  />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center"
                    aria-label={showConfirmPassword ? "Hide password" : "show password"}
                  >
                    <img src={showConfirmPassword ? "/images/icon-eye-off.svg" : "/images/icon-eye.svg"}
                      alt=""
                      className="w-4 h-4"
                    />
                  </button>
                </div>
              </div>
              {/* TERMS AND CONDITIONS */}
              <div className="flex items-start gap-2">
                <input type="checkbox" id="terms" name="terms" 
                  className="mt-0 h-4 w-4 appearance-none border border-gray-600 bg-[#0d1117] checked:bg-lime-500 checked:border-lime-500 cursor-pointer"
                />
                <label htmlFor="terms" className="font-body text-[10px] lg:text-xs text-gray-300 lg:whitespace-nowrap">
                  I accept the{" "} 
                  <a href="#" className="text-lime-400 hover:underline">Terms</a>
                  {" "}and{" "}
                  <a href="#" className="text-lime-400 hover:underline">Privacy Policy</a>.
                </label>
              </div>
              {/* SUBMIT BUTTON */}
              <button type="submit"
                className="w-full mt-2 bg-lime-400 py-3 font-body text-sm font-bold tracking-wider text-[#0d1117] hover:bg-lime-400 transition-colors"
              >
                INITIALIZE ACCOUNT
              </button>
              {/* LOGIN LINK */}
              <p className="text-center font-body text-xs text-gray-300">Already an operator?{" "}
                <a href="#" className="text-lime-500 hover:underline">Log in</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}