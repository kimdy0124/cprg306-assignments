import StudentInfo from "../StudentInfo/StudentInfo";
import Link from 'next/link';

export default function Check() {
  return(
    <div>
      <h1 className="text-center text-4xl font-bold text-blue-500">My Shopping List</h1>
      <StudentInfo></StudentInfo>
      <Link href="/">Back to HomePage</Link>
    </div>
  );
}