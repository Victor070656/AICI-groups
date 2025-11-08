"use client";

export default function LoginToggle({ loginType, setLoginType }: any) {
  return (
    <div className="p-2 sm:p-4">
      <div className="flex h-12 flex-1 items-center justify-center rounded-lg bg-gray-100  p-1">
        <label
          className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 text-sm font-medium leading-normal transition-all duration-200 ${
            loginType === "client"
              ? "bg-white shadow-sm text-red-600"
              : "text-gray-600  hover:text-gray-900 "
          }`}
        >
          <span className="truncate">Client Login</span>
          <input
            className="invisible w-0"
            name="login_type"
            type="radio"
            value="client"
            checked={loginType === "client"}
            onChange={(e) => setLoginType("client")}
          />
        </label>

        <label
          className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 text-sm font-medium leading-normal transition-all duration-200 ${
            loginType === "admin"
              ? "bg-white  shadow-sm text-red-600"
              : "text-gray-600  hover:text-gray-900 "
          }`}
        >
          <span className="truncate">Admin Login</span>
          <input
            className="invisible w-0"
            name="login_type"
            type="radio"
            value="admin"
            checked={loginType === "admin"}
            onChange={(e) => setLoginType("admin")}
          />
        </label>
      </div>
    </div>
  );
}
