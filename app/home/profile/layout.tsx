// /app/auth/signup/layout.tsx
// Correct layout.tsx example
export default function SignupLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <>
      <main className="flex w-full">
        {children}
      </main>
      </>
    );
  }
  