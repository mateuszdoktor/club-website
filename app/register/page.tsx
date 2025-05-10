import { Suspense } from "react";
import { RegisterForm } from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading register...</div>}>
        <RegisterForm />
      </Suspense>
    </div>
  );
}
