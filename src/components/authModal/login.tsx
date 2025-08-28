'use client';

import { useState } from "react";
import { Label } from "../ui/label";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Apple from "../icon/apple";
import Microsoft from "../icon/microsoft";
import Google from "../icon/google";
import { useRouter } from "next/navigation";

type AuthView = "login" | "signup" | "forgot";

export default function Login({ switchView }: { switchView: (v: AuthView) => void }) {

    const router = useRouter()

    const [loading, setLoading] = useState(false)

    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        try {
            setLoading(true)
            router.refresh()
        } catch (error) {
            setLoading(false)
        }
        // Handle sign in logic here
        console.log("Sign in attempt:", { email, password })
    }
    return (
        <div className="">
            <div className="w-full max-w-md mx-auto ">
                <div className="">
                   

                    <form onSubmit={handleSubmit} className="space-y-3">
                        {/* Email Field */}
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-lg font-semibold text-[#374151]">
                                Email
                            </Label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#059669] h-5 w-5" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="pl-12 h-14 bg-gray-50 border-[#9CA3AF] rounded-lg text-gray-700 placeholder:text-gray-400 focus:bg-white focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-lg font-semibold text-[#374151]">
                                Password
                            </Label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#059669] h-5 w-5" />
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="pl-12 pr-12 h-14 bg-gray-50 border-gray-200 rounded-xl text-gray-700 placeholder:text-gray-400 focus:bg-white focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Forgot Password Link */}
                        <div className="text-right">
                            <button
                                type="button"
                                className="text-sm font-semibold cursor-pointer text-emerald-600 hover:text-emerald-700  transition-colors"
                                onClick={() => switchView("forgot")}
                            >
                                Forget password?
                            </button>
                        </div>

                        {/* Sign In Button */}
                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full h-14 bg-[#059669] cursor-pointer text-[18px] font-semibold hover:bg-emerald-700 text-white  rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            {loading ? "Signing In..." : "Sign In"}
                        </Button>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500 font-medium">Or</span>
                            </div>
                        </div>

                        {/* Social Login Buttons */}
                        <div className="space-y-2">
                            <Button
                                type="button"
                                variant="outline"
                                className="w-full h-14 bg-[#D1FAE5] hover:bg-emerald-100 border-emerald-200  rounded-lg cursor-pointer text-[18px] text-[#047857] font-semibold transition-all duration-200 flex items-center justify-center gap-3"
                            >
                                <Apple />
                                Sign In with Apple
                            </Button>

                            <Button
                                type="button"
                                variant="outline"
                                className="w-full h-14 bg-[#D1FAE5] hover:bg-emerald-100 border-emerald-200  rounded-lg cursor-pointer text-[18px] text-[#047857] font-semibold transition-all duration-200 flex items-center justify-center gap-3"
                            >
                                <Google />
                                Sign In with Google
                            </Button>

                            <Button
                                type="button"
                                variant="outline"
                                className="w-full h-14 bg-[#D1FAE5] hover:bg-emerald-100 border-emerald-200  rounded-lg cursor-pointer text-[18px] text-[#047857] font-semibold transition-all duration-200 flex items-center justify-center gap-3"
                            >
                                <Microsoft />
                                Sign In with Microsoft
                            </Button>
                        </div>

                        {/* Sign Up Link */}
                        <div className="text-center mt-8">
                            <span className="text-gray-600 text-sm">
                                Don't have an account?{" "}
                                <button onClick={() => switchView("signup")} type="button" className="text-emerald-600 hover:text-emerald-700 cursor-pointer font-semibold transition-colors">
                                    Sign Up
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>

            {/* <div className="flex justify-between text-sm text-blue-600">
        <button onClick={() => switchView("signup")}>Create Account</button>
        <button onClick={() => switchView("forgot")}>Forgot Password?</button>
      </div> */}
        </div>
    );
}
