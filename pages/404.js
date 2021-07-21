import Layout from '../components/Layout'
import Link from 'next/link'

const custom404 = () => (
    <Layout>
        <div className="text-center">
            <h1>404</h1>
            <p>This page doesn't exist. Please return to</p>
            <Link href="/">
                <a>Home</a>
            </Link>
        </div>
    </Layout>
)

export default custom404;