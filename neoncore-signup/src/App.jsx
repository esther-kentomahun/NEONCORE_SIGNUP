import { useState } from "react";
export default function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  });
  return (
    <main className="min-h-screen bg-[#0d1117] text-white flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-[#161b22] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/*left side- branding*/}
        <div className="p-8 lg:p-12 flex flex-col justify-between bg-[hsl(210_39%_7%)]">
          <div>
            <div className="flex items-center gap-2 mb-12">
              <img src="/images/logo.svg" alt="Neoncore Logo" className="h-5"/>
            </div>
            <h1 className="font-heading text-4xl lg:text-5xl font-extrabold text-[#e6edf3] leading-tight tracking-wide">
              <span className="text-lime-500">//</span> JOIN THE <br/> NEXUS
            </h1>
            <p className="font-body text-xs text-[#e6edf3] mt-3 tracking-[0.16em] uppercase">INITIALIZE YOUR NEONCORE IDENTITY</p>
          </div>
        </div>
      </div>
    </main>
  )
}