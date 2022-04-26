import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Intro from '../components/Home/Intro'
import SampleCourses from '../components/Home/SampleCourses'
import Banner from '../components/Home/Banner'
import Testimonial from '../components/Home/Testimonial'
import ImageBanner from '../components/Home/ImageBanner'





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
   
      <ImageBanner/>
      <Testimonial/>
      <SampleCourses/>
      

    </div>


   
    </>
  )
}
