import { LabNav } from "@/features/navigation/components/lab-nav";

export default function LabLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-auto w-full max-w-4xl px-4 pt-10 sm:px-6">
        <LabNav />
      </div>
      {children}
    </>
  );
}
