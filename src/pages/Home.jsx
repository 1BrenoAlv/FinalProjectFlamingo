import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductGrid from '../components/ProductGrid'

const productsData = [
    {
        id: 1,
        title: 'React de A a Z',
        tag: 'Curso Online',
        description: 'Domine React do zero ao avançado criando interfaces modernas e profissionais.',
        price: 199.9,
        imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'CSS Moderno na Prática',
        tag: 'Ebook',
        description: 'Aprenda Flexbox, Grid, responsividade, animações e boas práticas de layout.',
        price: 49.9,
        imageUrl: 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'APIs com Node.js',
        tag: 'Curso Online',
        description: 'Construa APIs escaláveis com Node.js, Express, TypeScript e autenticação.',
        price: 249.9,
        imageUrl: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 4,
        title: 'SQL Essencial',
        tag: 'Ebook',
        description: 'Domine modelagem, joins, filtros, agrupamentos e consultas otimizadas.',
        price: 69.9,
        imageUrl: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 5,
        title: 'React Avançado',
        tag: 'Curso Online',
        description: 'Aprenda hooks avançados, performance, componentização e padrões profissionais.',
        price: 149.9,
        imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 6,
        title: 'Backend com Node.js',
        tag: 'Curso Online',
        description: 'Crie backends robustos com rotas, middlewares, validações e banco de dados.',
        price: 199.9,
        imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 7,
        title: 'Clean Architecture com .NET',
        tag: 'Ebook',
        description: 'Estruture projetos .NET com camadas, entidades, DTOs, serviços e repositórios.',
        price: 99.9,
        imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 8,  
        title: 'Flutter Completo',
        tag: 'Curso Online',
        description: 'Desenvolva apps Android e iOS com layouts responsivos e navegação moderna.',
        price: 179.9,
        imageUrl: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 9,
        title: 'Git e GitHub Profissional',
        tag: 'Ebook',
        description: 'Aprenda branches, commits, pull requests, merge, rebase e boas práticas.',
        price: 49.9,
        imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 10,
        title: 'Docker para Devs',
        tag: 'Curso Online',
        description: 'Aprenda containers, Dockerfile, Docker Compose e ambientes de desenvolvimento.',
        price: 129.9,
        imageUrl: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 11,
        title: 'Como ser programador raiz',
        tag: 'Curso no Quartel',
        description: 'Aprenda os fundamentos de programação e se torne um desenvolvedor completo.',
        price: 39.9,
        imageUrl: 'https://avatars.githubusercontent.com/u/85910379?s=130&v=4'
    }
]
export function Home() {
    return (
        <>
            <Header />

            <main className="container py-5">
                <section className="text-center mb-5">
                    <h2 className="display-6">Aprenda as tecnologias do futuro.</h2>
                    <p className="lead text-muted">Explore nossos produtos digitais exclusivos e impulsione sua carreira.</p>
                </section>

                <section id="cursos">
                    <ProductGrid products={productsData} />
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Home
