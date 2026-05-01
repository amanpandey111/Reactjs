
import { useEffect, useState } from "react";

const ProfilePage = ({ page, user }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div
      className={`
        relative w-[40%] mt-4 rounded-2xl p-[2px]
        overflow-hidden
        bg-[linear-gradient(90deg,#06b6d4,#8b5cf6,#ec4899,#22c55e,#06b6d4)]
        bg-[length:300%_300%]
        animate-[borderMove_5s_linear_infinite]
        shadow-[0_0_25px_rgba(139,92,246,0.35)]
        transition-transform duration-700 ease-in-out
        ${show ? "translate-x-10" : "translate-x-0"}
      `}
    >
      {/* Inner Content Container */}
      <div
        className="
          rounded-2xl
          bg-white dark:bg-zinc-900
          p-5
          h-full
        "
      >
        <h2 className="text-center text-2xl font-bold mb-4">
          User Profile Page
        </h2>

        <ul className="list-disc pl-5 space-y-3">
          <li>
            <p className="w-33 inline-block font-semibold">
              Employee Name :
            </p>
            <p className="inline-block">{user.userName}</p>
          </li>

          <li>
            <p className="w-33 inline-block font-semibold">
              Role :
            </p>
            <p className="inline-block">{user.role}</p>
          </li>

          <li>
            <p className="w-33 inline-block font-semibold">
              Position :
            </p>
            <p className="inline-block">{user.position}</p>
          </li>

          <li>
            <p className="w-33 inline-block font-semibold">
              Skills :
            </p>
            <p className="inline-block">
              {user.skill.join(", ")}
            </p>
          </li>

          <li>
            <p className="w-33 inline-block font-semibold">
              Email :
            </p>
            <p className="inline-block">{user.email}</p>
          </li>

          <li>
            <p className="w-33 inline-block font-semibold">
              Password :
            </p>
            <p className="inline-block">{user.password}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
