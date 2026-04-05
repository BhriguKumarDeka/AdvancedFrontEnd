import {Link, Outlet} from 'react-router-dom';
import {motion} from 'motion/react';
import { LayoutDashboard, MessageSquare, Notebook, Settings, ShieldCheck }   from 'lucide-react';

const navItems = [
  {name: 'Dashboard', path:'/', icon: <LayoutDashboard size={14} />},
  {name: 'Notes', path:'/notes', icon: <Notebook size={14} />},
  {name: 'Chat', path:'/chat', icon: <MessageSquare size={14} />},
  {name: 'Auth', path:'/auth', icon: <ShieldCheck size={14} />},
  {name: 'Devtools', path:'/devtools', icon: <Settings size={14} />},
]

export default function MainLayout() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      {/* Sidebar  */}
      <aside className="w-64 border-r border-slate-800 p-6 flex flex-col gap-4">
        <h1 className="text-xl font-bold bg-linear-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
          FRONTEND MASTERY
        </h1>
        <nav className ='mt-8 flex flex-col gap-2'>
          {navItems.map((item)=>(
            <Link key={item.name} to={item.path}>
              <motion.div
              whileHover={{x: 4 }}
              className="group flex items-center gap-3 p-2.5 rounded-md transition-all text-zinc-500 hover:text-zinc-100 hover:bg-zinc-900/50">
                <span className="text-zinc-600 group-hover:text-zinc-100 transition-colors">
                  {item.icon}
                </span>
                <span className="text-sm font-medium">{item.name}</span>
              </motion.div>
            </Link>
          ))}
        </nav>
      </aside>
      <main className='flex-1 p-8'> <Outlet /> </main>
    </div>
  )
}