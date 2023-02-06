export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-slate-400">
      <div className="container">
        <p>
          Get started by editing&nbsp;
          <code className="text-red-500">src/app/page.tsx</code>
        </p>
        <h1>
          Dashboard for showing achievements, latest update, hot issues, etc
        </h1>
        
        {children}
      </div>
    </main>
  );
}
