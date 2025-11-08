import LoginForm from "@/components/Login/LoginForm";

export const metadata = {
  title: "AICI Group Portal Login",
  description: "Access your AICI Group portal account.",
};

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-gray-50 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-center bg-no-repeat bg-cover opacity-10 "
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1HH_FmC-scLHt8RgsAdQMl340zjHqr9z4DNVFrix-fmg218tuVzIB88AIS8q7lXfgHl21_e4_JtriqUJ5ngjiB_F4ukwqv_S5zKYB0ZcYTyqmXRP1G_lT-j4-IhAbJ9x6sTZFt6WNNa0ExOadI8EGvrrhq7GesR9XAxCCvdVELzQgnZjx-oVgH8N0mCbIGtJZ7byRnaS2OQQuF-gK-p2i9j8ICmf-iTAC9u318dRktt-xjP57Ja6vj3rF2Bh812GBhUn0ttpVfAc")',
          }}
        />
      </div>

      {/* Login Container */}
      <div className="layout-container relative z-10 flex h-full w-full max-w-7xl grow flex-col items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex flex-col items-center text-center mb-8">
          <svg
            className="h-16 w-auto text-red-600"
            viewBox="0 0 200 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              fill="currentColor"
              fontFamily="Noto Serif, serif"
              fontSize="40"
              fontWeight="bold"
              x="0"
              y="40"
            >
              AICI
            </text>
            <text
              fill="currentColor"
              fontFamily="Noto Sans, sans-serif"
              fontSize="35"
              fontWeight="normal"
              x="95"
              y="40"
            >
              Group
            </text>
          </svg>
        </div>

        {/* Login Form Card */}
        <LoginForm />

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 AICI Group. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
