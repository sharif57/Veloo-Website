// import React from 'react'

// export default function Login() {
//   return (
//     <div>
//       <h1>login</h1>
//     </div>
//   )
// }

// components/AuthModal.tsx
"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"; // shadcn/ui modal
import Login from "./login";

type AuthView = "login" | "signup" | "forgot";

export default function AuthModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [view, setView] = useState<AuthView>("login");

  return (
    <Dialog open={open} onOpenChange={onOpenChange} >
      <DialogContent className="max-w-md rounded-3xl bg-[#F9FAFB]">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold">
            {view === "login" && ""}
            {view === "signup" && "Sign Up"}
            {view === "forgot" && "Forgot Password"}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4">
          {view === "login" && <Login switchView={setView} />}
          {view === "signup" && <SignupForm switchView={setView} />}
          {view === "forgot" && <ForgotForm switchView={setView} />}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function LoginForm({ switchView }: { switchView: (v: AuthView) => void }) {
  return (
    <div className="space-y-4">
      <input className="w-full border p-2 rounded" placeholder="Email" />
      <input className="w-full border p-2 rounded" type="password" placeholder="Password" />
      <button className="w-full bg-blue-500 text-white p-2 rounded">Login</button>

      <div className="flex justify-between text-sm text-blue-600">
        <button onClick={() => switchView("signup")}>Create Account</button>
        <button onClick={() => switchView("forgot")}>Forgot Password?</button>
      </div>
    </div>
  );
}

function SignupForm({ switchView }: { switchView: (v: AuthView) => void }) {
  return (
    <div className="space-y-4">
      <input className="w-full border p-2 rounded" placeholder="Name" />
      <input className="w-full border p-2 rounded" placeholder="Email" />
      <input className="w-full border p-2 rounded" type="password" placeholder="Password" />
      <button className="w-full bg-green-500 text-white p-2 rounded">Sign Up</button>

      <p className="text-sm text-center">
        Already have an account?{" "}
        <button onClick={() => switchView("login")} className="text-blue-600 underline">
          Login
        </button>
      </p>
    </div>
  );
}

function ForgotForm({ switchView }: { switchView: (v: AuthView) => void }) {
  return (
    <div className="space-y-4">
      <input className="w-full border p-2 rounded" placeholder="Enter your email" />
      <button className="w-full bg-yellow-500 text-white p-2 rounded">Reset Password</button>

      <p className="text-sm text-center">
        Back to{" "}
        <button onClick={() => switchView("login")} className="text-blue-600 underline">
          Login
        </button>
      </p>
    </div>
  );
}
