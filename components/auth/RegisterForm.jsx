"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function RegisterForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const isValidImageUrl = (url) => {
    try {
      const parsed = new URL(url);
      return /\.(jpg|jpeg|png|gif|webp|svg)$/.test(parsed.pathname);
    } catch {
      return false;
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    if (image && !isValidImageUrl(image)) {
      setErrorMsg("Please provide a valid image URL (jpg, png, etc.)");
      setLoading(false);
      return;
    }

    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password, image }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    if (!res.ok) {
      setErrorMsg(data.message || "Something went wrong");
      setLoading(false);
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <form
        onSubmit={handleRegister}
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
            Join the club
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Create an account to get started
          </p>
        </div>

        {errorMsg && (
          <p className="text-sm text-red-600 text-center font-medium -mt-2">
            {errorMsg}
          </p>
        )}

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl text-sm bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#0a1e41] focus:border-[#0a1e41] transition"
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl text-sm bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#0a1e41] focus:border-[#0a1e41] transition"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl text-sm bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#0a1e41] focus:border-[#0a1e41] transition"
          />
          <input
            type="url"
            placeholder="Avatar image URL (optional)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full px-4 py-3 rounded-xl text-sm bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#0a1e41] focus:border-[#0a1e41] transition"
          />
          {image && (
            <div className="flex justify-center">
              <img
                src={image}
                onError={(e) =>
                  (e.currentTarget.src =
                    "https://png.pngtree.com/png-clipart/20210129/ourmid/pngtree-default-male-avatar-png-image_2811083.jpg")
                }
                alt="Avatar Preview"
                className="h-16 w-16 object-cover rounded-full border"
              />
            </div>
          )}
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
            "Sign Up"
          )}
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}
