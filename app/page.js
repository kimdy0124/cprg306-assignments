import StudentInfo from "./StudentInfo/StudentInfo.jsx";
import Link from 'next/link';

export default function HomePage() {
  
  return(
    <div>
      <h1>CPRG Assignment</h1>
      <StudentInfo></StudentInfo>
      <Link href="/week2">week2</Link>
    </div>
  );
}