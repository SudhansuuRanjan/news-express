import Layout from '../../components/partials'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'


export default function Post() {
  return (
    <Layout>
      <Head>
        <title>News topic</title>
      </Head>
      <article>
          <header className={utilStyles.header}>
       <img src="/images/450.jpg" alt="ygguyerf" />
      </header>
        <h1 className={utilStyles.headingXl}>News Description</h1>
        <div className={utilStyles.lightText}>
          12 jan 2022 | 2 min read
        </div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam magnam minima nisi obcaecati reiciendis saepe corrupti optio, excepturi doloribus quos repudiandae similique modi molestias, tenetur, dolore aliquam sint numquam ducimus soluta! Ad, modi? Doloremque harum eligendi quasi quam explicabo ratione impedit perferendis fuga, nostrum, pariatur praesentium et minima ipsum tempore est perspiciatis mollitia blanditiis corrupti illum eveniet reprehenderit cumque enim optio? Ipsum, impedit et error voluptatibus inventore nisi ipsam repudiandae Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nesciunt aut, amet id, ipsum accusantium totam ratione quae nulla, ad distinctio consequuntur perspiciatis sunt fugit odio dicta soluta? Laboriosam minima eaque numquam molestias praesentium, exercitationem maxime voluptatum eligendi quisquam iusto?</div>
      </article>
    </Layout>
  )
}