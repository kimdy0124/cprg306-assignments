import NewItem from "./new-item";
import Link from 'next/link'

export default function Page() {
  return (
    <main>
      <NewItem />
      <Link href="/" className="font-bold">Back to HomePage</Link>
    </main>
  );
}