import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Intro from '../components/Home/Intro'
import SampleCourses from '../components/Home/SampleCourses'
import Banner from '../components/Home/Banner'





export default function Home(props) {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>빵의나라</title>
        <meta name="description" content="이제 온라인에서 만나요" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


   <Banner/>
   <Intro/>
   
   <p>3.연력/later</p>
   <p>4.testimonial/later</p>
  <SampleCourses/>
   <p>6.문의 연락</p>

    </div>


   
    </>
  )
}
