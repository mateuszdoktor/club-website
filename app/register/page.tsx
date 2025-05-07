import { Suspense } from "react";
import { RegisterForm } from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Suspense fallback={<div>Loading register...</div>}>
        <RegisterForm />
      </Suspense>
    </div>
  );
}
