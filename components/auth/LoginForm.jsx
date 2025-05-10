"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

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
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-12">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md space-y-6 bg-white p-10 rounded-xl border border-neutral-200 shadow-lg"
      >
        <div className="flex justify-center mb-6">
          <img
            src="/Real_Madrid_CF.svg.png"
            alt="Real Madrid Logo"
            className="h-20 w-20 object-contain"
          />
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-black text-[#0055A4] tracking-tight uppercase">
            MADRIDISTA LOGIN
          </h1>
          <p className="mt-2 text-sm text-neutral-500">
            Access your exclusive content
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
            className="w-full px-5 py-3 rounded-xl text-sm bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#0055A4] focus:border-[#0055A4] transition"
          />
          <input
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-5 py-3 rounded-xl text-sm bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#0055A4] focus:border-[#0055A4] transition"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 rounded-xl bg-[#0055A4] text-white font-bold text-sm tracking-wider hover:bg-[#004494] transition flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
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
              SIGNING IN...
            </>
          ) : (
            "SIGN IN"
          )}
        </button>
        <p className="text-sm text-center mt-6 text-neutral-600">
          Not a member?{" "}
          <Link
            href="/register"
            className="text-[#0055A4] hover:underline font-medium"
          >
            REGISTER NOW
          </Link>
        </p>
      </form>
    </div>
  );
}
