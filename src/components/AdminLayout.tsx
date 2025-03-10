import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, LogOut, LayoutDashboard, Users, FileText, Settings, Menu as MenuIcon, BookOpen } from 'lucide-react';
import Logo from '@/components/Logo';

type AdminLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export default function AdminLayout({ children, title }: AdminLayoutProps) {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Check if user is authenticated
    const token = localStorage.getItem('adminToken');
    if (!token && router.pathname !== '/admin/login') {
      router.push('/admin/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  // Navigation items
  const navItems = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: <LayoutDashboard className="mr-2 h-4 w-4" /> },
    { href: '/admin/service-requests', label: 'Service Requests', icon: <Users className="mr-2 h-4 w-4" /> },
    { href: '/admin/contact-submissions', label: 'Contact Submissions', icon: <FileText className="mr-2 h-4 w-4" /> },
    { href: '/admin/coverage', label: 'Coverage Areas', icon: <Menu className="mr-2 h-4 w-4" /> },
    { href: '/admin/blog', label: 'Blog Management', icon: <BookOpen className="mr-2 h-4 w-4" /> },
    { href: '/admin/settings', label: 'Settings', icon: <Settings className="mr-2 h-4 w-4" /> },
  ];

  // Don't render anything on the server to avoid hydration issues
  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top navigation bar */}
      <header className="bg-indigo-700 shadow-md text-white">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-indigo-600">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 bg-indigo-50">
                <div className="flex flex-col space-y-4 py-4">
                  <div className="px-4">
                    <Logo />
                  </div>
                  <nav className="flex flex-col space-y-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                          router.pathname === item.href
                            ? 'bg-indigo-100 text-indigo-700'
                            : 'text-slate-700 hover:bg-indigo-100 hover:text-indigo-700'
                        }`}
                      >
                        {item.icon}
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
            <div className="hidden md:flex md:items-center">
              <Logo />
              <span className="ml-4 text-lg font-semibold text-white">Admin Portal</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={handleLogout} className="text-white hover:bg-indigo-600">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Sidebar (desktop) */}
      <div className="flex">
        <aside className="hidden w-64 flex-shrink-0 border-r bg-indigo-50 md:block">
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                  router.pathname === item.href
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-slate-700 hover:bg-indigo-100 hover:text-indigo-700'
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}