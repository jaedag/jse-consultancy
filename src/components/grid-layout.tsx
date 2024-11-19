
export default function GridLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 mb-4">
            {children}
      </div>
         )
}