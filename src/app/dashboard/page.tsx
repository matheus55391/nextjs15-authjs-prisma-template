
import { Sidebar } from "@/components/sidebar"
import { TopBar } from "@/components/top-bar"
import { CreatePost } from "@/components/create-post"
import { PostCard } from "@/components/post-card"
import { TrendingSidebar } from "@/components/trending-sidebar"
import { auth } from "@/lib/auth"

const mockPosts = [
  {
    id: "1",
    author: {
      name: "Sarah Chen",
      username: "sarahdev",
      avatar: "/placeholder.svg?height=40&width=40",
      verified: true,
    },
    content:
      "Acabei de descobrir uma forma mais elegante de lidar com estados assíncronos no React. Usando custom hooks com useReducer + useEffect:",
    code: `const useAsyncState = (asyncFn) => {
  const [state, dispatch] = useReducer(reducer, {
    data: null,
    loading: false,
    error: null
  });
  
  useEffect(() => {
    dispatch({ type: 'LOADING' });
    asyncFn()
      .then(data => dispatch({ type: 'SUCCESS', data }))
      .catch(error => dispatch({ type: 'ERROR', error }));
  }, []);
  
  return state;
};`,
    language: "JavaScript",
    tags: ["react", "hooks", "async", "javascript"],
    timestamp: "2h",
    likes: 127,
    comments: 23,
    reposts: 45,
    liked: true,
  },
  {
    id: "2",
    author: {
      name: "Alex Rodriguez",
      username: "alexcodes",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Dica rápida: sempre que você estiver debugando um problema complexo, tente explicar o código linha por linha para um pato de borracha (ou para si mesmo em voz alta). Funciona 90% das vezes! 🦆",
    tags: ["debugging", "tips", "productivity"],
    timestamp: "4h",
    likes: 89,
    comments: 12,
    reposts: 34,
  },
  {
    id: "3",
    author: {
      name: "Maria Santos",
      username: "mariafullstack",
      avatar: "/placeholder.svg?height=40&width=40",
      verified: true,
    },
    content:
      "Implementei um sistema de cache distribuído usando Redis para nossa API. A performance melhorou em 300%! Aqui está a estrutura básica:",
    code: `const redis = require('redis');
const client = redis.createClient();

const cacheMiddleware = (ttl = 3600) => {
  return async (req, res, next) => {
    const key = req.originalUrl;
    const cached = await client.get(key);
    
    if (cached) {
      return res.json(JSON.parse(cached));
    }
    
    res.sendResponse = res.json;
    res.json = (body) => {
      client.setex(key, ttl, JSON.stringify(body));
      res.sendResponse(body);
    };
    
    next();
  };
};`,
    language: "Node.js",
    tags: ["redis", "cache", "performance", "nodejs", "api"],
    timestamp: "6h",
    likes: 203,
    comments: 31,
    reposts: 67,
  },
  {
    id: "4",
    author: {
      name: "João Silva",
      username: "joaotech",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Alguém mais acha que a documentação é tão importante quanto o código em si? Passei a manhã toda refatorando nossos READMEs e a diferença na produtividade da equipe é notável.",
    tags: ["documentation", "teamwork", "productivity", "bestpractices"],
    timestamp: "8h",
    likes: 156,
    comments: 28,
    reposts: 42,
  },
]

export default async function DashboardPage() {
  const session = await auth();
  const user = session?.user
  return (
    <div className="flex flex-1 flex-row max-h-screen min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar user={user} />
      </div>

      {/* Mobile Top Bar */}
      <TopBar user={user} />

      {/* Main Content */}
      <div className="mx-auto flex overflow-y-scroll ">
        {/* Feed */}
        <main className="flex-1 max-w-2xl">
            <div className="bg-background/95 backdrop-blur  p-4 hidden  md:flex items-center justify-center">
              <h1 className="text-xl font-bold">Pagina Inicial</h1>
            </div>
            {user && <CreatePost user={user} />}

          <div className="bg-primary-foreground ">
            {mockPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </main>

        {/* Right Sidebar */}
        <TrendingSidebar />
      </div>
    </div>
  )
}
