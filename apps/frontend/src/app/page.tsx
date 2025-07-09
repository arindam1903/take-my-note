'use client';
import Image from "next/image";

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();

  }
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="flex justify-between items-center">
          <label htmlFor="emailInput">Email</label>
          <input id='emailInput' className="border-1 rounded ml-2 p-1" placeholder="Enter email" />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="passwordInput">Password</label>
          <input id='passwordInput' className="border-1 rounded ml-2 p-1" placeholder="Enter password" type="password" />
        </div>
        <div>
          <button type="submit" className="border-1 p-1 rounded font-bold cursor-pointer">Sign In</button>
        </div>
      </form>
    </div>
  );
}
