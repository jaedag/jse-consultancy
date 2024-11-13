

export default function Spacer({children}: {children?: React.ReactNode}) {
    return (
        <div className="flex grow">
            {children}
        </div>
    )
            
}