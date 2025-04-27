"use client"
import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/app/components/passwordinput";
import { Label } from "@/components/ui/label"
import { useState } from "react";
import { Button } from "@/components/ui/button"

const Login = () => { 
  const [currentPassword, setCurrentPassword] = useState("")
    return(
        <main className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Left Side */}
        <div className="bg-blue-500 text-white flex flex-col justify-center items-center">
          <div className=" z-10 p-6">
          <h1 className="text-2xl font-semibold text-left text-white">E-naam</h1>
          <p className="text-3xl font-bold mt-2 text-center text-left text-white">
            Celebrate Your Hard Work
          </p>
          </div>
          <img
            src="/Frame 12.png"
            alt="Trophy"
            className="z-0 absolute mr-64 md:block hidden opacity-24"
          />
        </div>
  
        {/* Right Side */}
        <div className="bg-white flex justify-center items-center px-6 py-12">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-6">
              Sign In to E-naam
            </h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <Input type="email" placeholder="Email" />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <div className="relative">
                    <PasswordInput id="current_password"
					value={currentPassword}
					onChange={(e) => setCurrentPassword(e.target.value)}
					autoComplete="current-password" />
                </div>
              </div>
  
              <div className="flex justify-between items-center text-sm text-gray-600">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  {/* <span>Remember me</span> */}
                  <Label htmlFor="email">Remeber me</Label>

                </label>
                <a href="#" className="hover:underline">Forgot Password?</a>
              </div>

              <Button type="submit" variant="outline" className="w-full bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600 hover:text-white transition cursor-pointer">
                 Sign In →
              </Button>
  
              <p className="text-center text-sm text-gray-600 mt-4">
                Don’t have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
              </p>
            </form>
          </div>
        </div>
      </main>
    )
 }

export default Login;