"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") ?? "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl,
    });

    if (result?.error) {
      setErrorMsg("Invalid email or password.");
      setLoading(false);
    } else if (result?.ok && result.url) {
      router.push(result.url);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] px-4 py-12">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md space-y-6 bg-white p-10 rounded-3xl border border-gray-200 shadow-2xl"
      >
        <div className="flex justify-center mb-4">
          <img
            src="/logo-navy-no-bg.png"
            alt="Real Madrid Logo"
            className="h-16 w-16 object-contain"
          />
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-black text-[#0a1e41] tracking-tight uppercase">
            Welcome, Madridista
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Sign in to continue your journey
          </p>
        </div>

        {errorMsg && (
          <p className="text-sm text-red-600 text-center font-medium -mt-2">
            {errorMsg}
          </p>
        )}

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl text-sm bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#0a1e41] focus:border-[#0a1e41] transition"
          />
          <input
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl text-sm bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#0a1e41] focus:border-[#0a1e41] transition"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl bg-[#0a1e41] text-white font-semibold text-sm tracking-wide hover:bg-[#071731] transition flex items-center justify-center"
        >
          {loading ? (
            <svg
              className="w-5 h-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          ) : (
            "Sign In"
          )}
        </button>
      </form>
    </div>
  );
}
