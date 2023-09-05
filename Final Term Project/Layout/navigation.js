import Link from "next/link";

export default function NavigationPanel() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className=" bg-info btn btn-ghost normal-case text-2xl text-slate-100">
        📶 Dashboard
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
          <b>Sign Up</b>
            <Link href="../pages/Signup"></Link>
            
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Log In</a>
                </li>
                <li>
                  <a>Sign Up</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
