import StudentInfo from "./StudentInfo/StudentInfo.jsx";
import Link from 'next/link';

export default function HomePage() {
  
  return(
    <div>
      <h1 className="text-center text-4xl font-bold" >CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo></StudentInfo>
      <Link href="/week2">week2</Link>
      <Link href="/week3">week3</Link>
    </div>
  );
}