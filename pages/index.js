import Sidebar from "@/components/Sidebar"
import Head from "next/head"

export default function Home() {
  return (<>
    <Head>
      <title>Hey Every One</title>
    </Head>
    <main className="m-0 p-0 " >
      <Sidebar />
    </main>
  </>
  )
}
