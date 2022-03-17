import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { auth } from './services/firebase-config';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [registerEmail, setRegisterEmail] = useState<string>('');
  const [registerPassword, setRegisterPassword] = useState<string>('');
  const [loginEmail, setLoginEmail] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  }, (error) => {
    console.log('onAuthStateChanged::error');
    console.log(error);
  });

  async function register() {
    try {
      const userCred = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
    } catch (error) {
      console.log('register::createUserWithEmailAndPassword::error');
      console.log(error);
    }
  };

  async function login() {
    try {
      const userCred = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    } catch (error) {
      console.log('login::signInWithEmailAndPassword::error');
      console.log(error);
    }
  };

  async function logout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log('logout::signOut::error');
      console.log(error);
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='border-2 p-3 mt-10 rounded-lg'>
        <div className='text-lg'>Register</div>
        <div className='flex flex-row mt-2'>
          <div>
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Email
              </span>
              <input onChange={(e) => setRegisterEmail(e.currentTarget.value)} type="email" autoComplete='off' className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
            </label>
          </div>
          <div className='ml-5'>
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Password
              </span>
              <input onChange={(e) => setRegisterPassword(e.currentTarget.value)} type="text" autoComplete='off' className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
            </label>
          </div>
          <div className='ml-5 flex flex-row items-end'>
            <button onClick={() => register()} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Register</button>
          </div>
        </div>
      </div>
      <div className='border-2 p-3 mt-10 rounded-lg'>
        <div className='text-lg'>Login</div>
        <div className='flex flex-row mt-2'>
          <div>
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Email
              </span>
              <input onChange={(e) => setLoginEmail(e.currentTarget.value)} type="email" autoComplete='off' className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
            </label>
          </div>
          <div className='ml-5'>
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Password
              </span>
              <input onChange={(e) => setLoginPassword(e.currentTarget.value)} type="text" autoComplete='off' className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
            </label>
          </div>
          <div className='ml-5 flex flex-row items-end'>
            <button onClick={() => login()} className="px-4 py-1 text-sm text-green-600 font-semibold rounded-full border border-green-200 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">Login</button>
          </div>
        </div>
      </div>
      <div className='border-2 p-3 mt-10 rounded-lg'>
        <div className='text-lg'>Logout</div>
        <div className='mt-2'>
          <button onClick={() => logout()} className="px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2">Logout</button>
        </div>
      </div>
      <div className='border-2 p-3 mt-10 rounded-lg'>
        <div className='text-lg'>Logged In User</div>
        <div className='mt-1 text-green-600 text-sm'>{ user?.email }</div>
      </div>
    </div>
  );
}

export default App;
