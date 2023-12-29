export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="flex justify-center items-center mt-10 mb-10">
      <div className="prose">{children}</div>
    </div>
  )
}
