import Link from "next/link";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1 className="title">
        Ir a <Link href="/about">About</Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/index.js</code>
      </p>
    </MainLayout>
  );
}

/* Home.getLayout = function getLayout(page) {
  return(<MainLayout>
    <DarkLayout>
      {page}
    </DarkLayout>
  </MainLayout>
  )
} */
