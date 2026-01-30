// 개발 관련 자주 사용하는 단어 모음
export const DEV_WORDS: string[] = [
  // JavaScript/TypeScript 키워드 및 메서드
  "const", "let", "var", "function", "return", "if", "else", "switch", "case",
  "break", "continue", "for", "while", "do", "try", "catch", "finally", "throw",
  "async", "await", "promise", "then", "resolve", "reject", "class", "extends",
  "constructor", "super", "this", "new", "static", "get", "set", "import", "export",
  "default", "from", "as", "module", "require", "typeof", "instanceof", "void",
  "null", "undefined", "true", "false", "number", "string", "boolean", "object",
  "array", "symbol", "bigint", "any", "unknown", "never", "enum", "interface",
  "type", "namespace", "declare", "implements", "private", "public", "protected",
  "readonly", "abstract", "override", "satisfies", "infer", "keyof", "mapped",

  // Array 메서드
  "push", "pop", "shift", "unshift", "splice", "slice", "concat", "join", "reverse",
  "sort", "filter", "map", "reduce", "forEach", "find", "findIndex", "some", "every",
  "includes", "indexOf", "lastIndexOf", "flat", "flatMap", "fill", "copyWithin",
  "entries", "keys", "values", "at", "toSorted", "toReversed", "toSpliced", "with",

  // String 메서드
  "charAt", "charCodeAt", "codePointAt", "split", "substring", "substr", "trim",
  "trimStart", "trimEnd", "padStart", "padEnd", "repeat", "replace", "replaceAll",
  "search", "match", "matchAll", "toLowerCase", "toUpperCase", "localeCompare",
  "normalize", "startsWith", "endsWith", "anchor", "link", "bold", "italics",

  // Object 메서드
  "assign", "create", "defineProperty", "defineProperties", "freeze", "seal",
  "preventExtensions", "isFrozen", "isSealed", "isExtensible", "getOwnPropertyNames",
  "getOwnPropertySymbols", "getOwnPropertyDescriptor", "getOwnPropertyDescriptors",
  "getPrototypeOf", "setPrototypeOf", "hasOwn", "fromEntries", "groupBy",

  // Promise/Async
  "pending", "fulfilled", "rejected", "settled", "race", "all", "allSettled",
  "callback", "timeout", "interval", "immediate", "nextTick", "microtask",

  // DOM API
  "document", "window", "element", "node", "event", "listener", "handler",
  "querySelector", "querySelectorAll", "getElementById", "getElementsByClassName",
  "getElementsByTagName", "createElement", "createTextNode", "appendChild",
  "removeChild", "replaceChild", "insertBefore", "cloneNode", "setAttribute",
  "getAttribute", "removeAttribute", "hasAttribute", "classList", "className",
  "innerHTML", "innerText", "textContent", "outerHTML", "style", "dataset",
  "addEventListener", "removeEventListener", "dispatchEvent", "preventDefault",
  "stopPropagation", "stopImmediatePropagation", "target", "currentTarget",
  "bubbles", "cancelable", "composed", "eventPhase", "timeStamp", "isTrusted",

  // React
  "useState", "useEffect", "useContext", "useReducer", "useCallback", "useMemo",
  "useRef", "useImperativeHandle", "useLayoutEffect", "useDebugValue", "useId",
  "useDeferredValue", "useTransition", "useSyncExternalStore", "useInsertionEffect",
  "component", "render", "props", "state", "context", "provider", "consumer",
  "fragment", "portal", "suspense", "lazy", "memo", "forwardRef", "createContext",
  "createRef", "createElement", "cloneElement", "isValidElement", "children",
  "StrictMode", "Profiler", "startTransition", "useOptimistic", "useFormStatus",
  "useFormState", "useActionState", "server", "client", "hydrate", "hydration",

  // Next.js
  "metadata", "layout", "page", "loading", "error", "template", "head", "script",
  "middleware", "matcher", "revalidate", "generateStaticParams", "generateMetadata",
  "notFound", "redirect", "permanentRedirect", "useRouter", "usePathname",
  "useSearchParams", "useParams", "useSelectedLayoutSegment", "headers", "cookies",
  "NextRequest", "NextResponse", "ImageResponse", "userAgent", "geolocation",

  // Node.js
  "process", "buffer", "stream", "readable", "writable", "transform", "duplex",
  "pipe", "pipeline", "pump", "cork", "uncork", "destroy", "emit", "once",
  "filesystem", "readFile", "writeFile", "appendFile", "unlink", "rename", "mkdir",
  "rmdir", "readdir", "stat", "lstat", "chmod", "chown", "symlink", "readlink",
  "realpath", "watch", "watchFile", "unwatchFile", "createReadStream", "createWriteStream",
  "path", "dirname", "basename", "extname", "resolve", "relative", "normalize",
  "isAbsolute", "delimiter", "sep", "posix", "win32", "format", "parse",
  "http", "https", "request", "response", "server", "listen", "close",
  "crypto", "hash", "hmac", "cipher", "decipher", "sign", "verify", "random",
  "child_process", "spawn", "exec", "execFile", "fork", "cluster", "worker",

  // Git 명령어
  "git", "init", "clone", "add", "commit", "push", "pull", "fetch", "merge",
  "rebase", "cherry-pick", "revert", "reset", "checkout", "branch", "tag",
  "remote", "origin", "upstream", "master", "main", "develop", "feature",
  "hotfix", "release", "stash", "apply", "drop", "list", "show", "diff",
  "log", "reflog", "blame", "bisect", "grep", "archive", "bundle", "gc",
  "prune", "fsck", "config", "alias", "hook", "submodule", "worktree",
  "sparse-checkout", "filter-branch", "subtree", "notes", "describe",

  // Package managers
  "npm", "yarn", "pnpm", "bun", "deno", "install", "uninstall", "update",
  "upgrade", "outdated", "audit", "fix", "publish", "unpublish", "deprecate",
  "pack", "link", "unlink", "run", "start", "test", "build", "dev", "preview",
  "lint", "format", "typecheck", "clean", "cache", "registry", "scope",
  "workspace", "workspaces", "monorepo", "turborepo", "lerna", "nx",

  // Build tools
  "webpack", "vite", "rollup", "esbuild", "swc", "babel", "terser", "uglify",
  "minify", "bundle", "chunk", "entry", "output", "loader", "plugin", "preset",
  "sourcemap", "devtool", "optimization", "splitChunks", "treeshaking", "sideEffects",
  "externals", "alias", "extensions", "modules", "rules", "test", "exclude", "include",

  // Testing
  "jest", "vitest", "mocha", "jasmine", "cypress", "playwright", "puppeteer",
  "selenium", "webdriver", "describe", "it", "test", "expect", "assert", "should",
  "beforeAll", "afterAll", "beforeEach", "afterEach", "mock", "spy", "stub",
  "fake", "fixture", "snapshot", "coverage", "threshold", "reporter", "matcher",
  "toBe", "toEqual", "toStrictEqual", "toMatch", "toContain", "toThrow",
  "toHaveBeenCalled", "toHaveBeenCalledWith", "toHaveBeenCalledTimes",
  "toHaveProperty", "toBeNull", "toBeUndefined", "toBeTruthy", "toBeFalsy",
  "toBeGreaterThan", "toBeLessThan", "toBeInstanceOf", "resolves", "rejects",

  // CSS
  "display", "position", "top", "right", "bottom", "left", "width", "height",
  "margin", "padding", "border", "outline", "background", "color", "font",
  "flex", "grid", "justify", "align", "items", "content", "self", "gap",
  "row", "column", "wrap", "nowrap", "order", "grow", "shrink", "basis",
  "template", "areas", "auto", "span", "minmax", "repeat", "fit-content",
  "transition", "transform", "animation", "keyframes", "translate", "rotate",
  "scale", "skew", "origin", "perspective", "backface", "visibility", "opacity",
  "overflow", "scroll", "hidden", "visible", "clip", "mask", "filter", "blur",
  "brightness", "contrast", "grayscale", "hue-rotate", "invert", "saturate", "sepia",
  "box-shadow", "text-shadow", "border-radius", "box-sizing", "object-fit",
  "z-index", "cursor", "pointer-events", "user-select", "resize", "appearance",
  "will-change", "contain", "isolation", "mix-blend-mode", "backdrop-filter",

  // Tailwind CSS
  "tailwind", "postcss", "autoprefixer", "purge", "safelist", "blocklist",
  "hover", "focus", "active", "disabled", "visited", "first", "last", "odd", "even",
  "group", "peer", "before", "after", "placeholder", "selection", "marker", "file",
  "sm", "md", "lg", "xl", "2xl", "dark", "motion-safe", "motion-reduce", "print",
  "container", "prose", "aspect", "columns", "break", "box", "block", "inline",
  "table", "flow", "contents", "list", "hidden", "invisible", "collapse",
  "static", "fixed", "absolute", "relative", "sticky", "inset", "isolate",
  "float", "clear", "overscroll", "truncate", "whitespace", "break-words",

  // HTML 태그
  "html", "head", "body", "title", "meta", "link", "style", "script", "noscript",
  "div", "span", "section", "article", "header", "footer", "nav", "aside", "main",
  "h1", "h2", "h3", "h4", "h5", "h6", "p", "br", "hr", "pre", "code", "blockquote",
  "ul", "ol", "li", "dl", "dt", "dd", "table", "thead", "tbody", "tfoot", "tr", "th", "td",
  "form", "input", "textarea", "select", "option", "optgroup", "button", "label",
  "fieldset", "legend", "datalist", "output", "progress", "meter", "details", "summary",
  "dialog", "menu", "menuitem", "canvas", "svg", "math", "template", "slot",
  "a", "img", "picture", "source", "video", "audio", "track", "embed", "object",
  "iframe", "portal", "figure", "figcaption", "mark", "time", "abbr", "address",
  "cite", "dfn", "kbd", "samp", "var", "sub", "sup", "small", "strong", "em", "b", "i", "u",

  // HTTP
  "request", "response", "header", "body", "method", "status", "url", "uri",
  "protocol", "host", "port", "path", "query", "fragment", "scheme", "authority",
  "GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS", "TRACE", "CONNECT",
  "content-type", "accept", "authorization", "cache-control", "cookie", "set-cookie",
  "user-agent", "referer", "origin", "host", "connection", "keep-alive", "upgrade",
  "transfer-encoding", "content-length", "content-encoding", "accept-encoding",
  "cors", "preflight", "credentials", "expose", "allow", "methods", "headers", "max-age",

  // REST API
  "api", "endpoint", "resource", "collection", "item", "filter", "sort", "pagination",
  "limit", "offset", "cursor", "page", "size", "total", "count", "next", "previous",
  "crud", "create", "read", "update", "delete", "list", "get", "post", "put", "patch",
  "idempotent", "safe", "cacheable", "stateless", "uniform", "layered", "code-on-demand",
  "hateoas", "hypermedia", "link", "rel", "href", "action", "method", "type", "title",

  // GraphQL
  "graphql", "schema", "query", "mutation", "subscription", "resolver", "directive",
  "scalar", "enum", "input", "union", "fragment", "variable", "operation", "field",
  "argument", "alias", "inline", "spread", "introspection", "validation", "execution",
  "apollo", "relay", "urql", "graphene", "prisma", "hasura", "postgraphile",

  // Database
  "database", "table", "column", "row", "record", "field", "schema", "index",
  "primary", "foreign", "key", "unique", "constraint", "reference", "cascade",
  "select", "insert", "update", "delete", "where", "from", "join", "left", "right",
  "inner", "outer", "cross", "natural", "using", "on", "and", "or", "not", "in",
  "between", "like", "ilike", "is", "null", "distinct", "order", "by", "asc", "desc",
  "group", "having", "limit", "offset", "union", "intersect", "except", "all",
  "transaction", "commit", "rollback", "savepoint", "lock", "unlock", "begin", "end",
  "trigger", "procedure", "function", "view", "materialized", "sequence", "partition",
  "postgresql", "mysql", "sqlite", "mongodb", "redis", "elasticsearch", "cassandra",
  "dynamodb", "firestore", "supabase", "planetscale", "neon", "turso", "cockroach",

  // ORM
  "orm", "model", "entity", "repository", "migration", "seed", "factory", "relation",
  "belongsTo", "hasOne", "hasMany", "belongsToMany", "morphTo", "morphOne", "morphMany",
  "eager", "lazy", "preload", "include", "select", "where", "orderBy", "groupBy",
  "prisma", "drizzle", "typeorm", "sequelize", "mongoose", "knex", "objection",

  // Authentication
  "auth", "authentication", "authorization", "identity", "principal", "subject",
  "login", "logout", "register", "signup", "signin", "signout", "verify", "confirm",
  "password", "hash", "salt", "bcrypt", "argon", "scrypt", "pbkdf2", "compare",
  "token", "jwt", "jws", "jwe", "jwk", "claim", "payload", "signature", "expiry",
  "refresh", "access", "bearer", "basic", "digest", "oauth", "openid", "saml", "ldap",
  "session", "cookie", "storage", "local", "session", "secure", "httponly", "samesite",
  "mfa", "totp", "hotp", "otp", "sms", "email", "authenticator", "webauthn", "passkey",
  "role", "permission", "scope", "grant", "revoke", "policy", "rule", "acl", "rbac", "abac",

  // Cloud services
  "aws", "azure", "gcp", "cloud", "serverless", "lambda", "functions", "edge",
  "s3", "bucket", "blob", "storage", "cdn", "cloudfront", "cloudflare", "vercel",
  "ec2", "instance", "container", "kubernetes", "docker", "pod", "deployment",
  "service", "ingress", "configmap", "secret", "volume", "persistent", "claim",
  "vpc", "subnet", "gateway", "route", "security", "firewall", "load", "balancer",
  "auto", "scaling", "health", "check", "monitor", "alert", "metric", "log", "trace",
  "iam", "policy", "role", "user", "group", "permission", "resource", "arn", "principal",
  "sqs", "sns", "kinesis", "kafka", "rabbitmq", "pubsub", "eventbridge", "queue", "topic",
  "rds", "aurora", "documentdb", "elasticache", "memcached", "dynamodb", "neptune",
  "cognito", "auth0", "clerk", "firebase", "supabase", "amplify", "appwrite",

  // DevOps
  "devops", "cicd", "pipeline", "workflow", "job", "step", "stage", "artifact",
  "github", "gitlab", "bitbucket", "actions", "runner", "agent", "executor",
  "jenkins", "circleci", "travis", "drone", "argo", "tekton", "spinnaker",
  "terraform", "pulumi", "cloudformation", "cdk", "ansible", "chef", "puppet",
  "infrastructure", "code", "provision", "deploy", "release", "rollback", "canary",
  "blue", "green", "rolling", "recreate", "shadow", "traffic", "split", "mirror",
  "helm", "chart", "values", "template", "release", "revision", "upgrade", "install",
  "prometheus", "grafana", "datadog", "newrelic", "splunk", "elastic", "kibana",
  "sentry", "bugsnag", "rollbar", "logrocket", "fullstory", "amplitude", "mixpanel",

  // Security
  "security", "vulnerability", "exploit", "attack", "threat", "risk", "mitigation",
  "encryption", "decryption", "symmetric", "asymmetric", "aes", "rsa", "ecdsa", "ed25519",
  "tls", "ssl", "certificate", "ca", "chain", "trust", "handshake", "cipher", "suite",
  "xss", "csrf", "sqli", "injection", "sanitize", "escape", "encode", "decode", "validate",
  "cors", "csp", "hsts", "xfo", "referrer", "permissions", "feature", "policy", "sandbox",
  "owasp", "cve", "cvss", "pentest", "audit", "scan", "report", "remediate", "patch",

  // Data formats
  "json", "xml", "yaml", "toml", "ini", "csv", "tsv", "markdown", "html", "css",
  "base64", "hex", "binary", "ascii", "utf8", "unicode", "emoji", "encoding", "charset",
  "serialize", "deserialize", "parse", "stringify", "format", "pretty", "minify", "compress",
  "gzip", "brotli", "deflate", "zlib", "lz4", "zstd", "snappy", "tar", "zip", "rar",
  "protobuf", "msgpack", "avro", "thrift", "flatbuffers", "capnproto", "bson", "cbor",

  // Algorithms & Data Structures
  "algorithm", "complexity", "bigO", "time", "space", "best", "worst", "average",
  "array", "list", "linked", "doubly", "circular", "stack", "queue", "deque", "priority",
  "tree", "binary", "bst", "avl", "redblack", "btree", "trie", "heap", "min", "max",
  "graph", "directed", "undirected", "weighted", "vertex", "edge", "adjacency", "matrix",
  "hash", "table", "map", "set", "multiset", "multimap", "dictionary", "bucket", "collision",
  "sort", "bubble", "selection", "insertion", "merge", "quick", "heap", "radix", "counting",
  "search", "linear", "binary", "interpolation", "exponential", "jump", "fibonacci",
  "traversal", "bfs", "dfs", "preorder", "inorder", "postorder", "levelorder",
  "dynamic", "programming", "memoization", "tabulation", "recursion", "iteration",
  "greedy", "backtracking", "divide", "conquer", "branch", "bound", "heuristic",

  // Design Patterns
  "pattern", "singleton", "factory", "abstract", "builder", "prototype", "adapter",
  "bridge", "composite", "decorator", "facade", "flyweight", "proxy", "chain",
  "command", "interpreter", "iterator", "mediator", "memento", "observer", "state",
  "strategy", "template", "visitor", "dependency", "injection", "inversion", "control",
  "solid", "dry", "kiss", "yagni", "separation", "concerns", "single", "responsibility",
  "open", "closed", "liskov", "substitution", "interface", "segregation", "dependency",

  // Architecture
  "architecture", "monolith", "microservice", "serverless", "event", "driven", "cqrs",
  "saga", "choreography", "orchestration", "domain", "bounded", "context", "aggregate",
  "entity", "value", "object", "service", "repository", "factory", "specification",
  "hexagonal", "ports", "adapters", "onion", "clean", "vertical", "slice", "modular",
  "layer", "presentation", "application", "domain", "infrastructure", "persistence",
  "mvc", "mvvm", "mvp", "flux", "redux", "mobx", "recoil", "zustand", "jotai", "valtio",

  // Frontend concepts
  "frontend", "client", "browser", "render", "paint", "layout", "composite", "reflow",
  "virtual", "dom", "diff", "patch", "reconciliation", "fiber", "concurrent", "suspense",
  "hydration", "ssr", "ssg", "isr", "csr", "streaming", "progressive", "enhancement",
  "responsive", "adaptive", "mobile", "desktop", "tablet", "breakpoint", "viewport",
  "accessibility", "aria", "role", "label", "describedby", "live", "atomic", "relevant",
  "semantic", "landmark", "heading", "navigation", "main", "complementary", "contentinfo",
  "performance", "lighthouse", "core", "vitals", "lcp", "fid", "cls", "ttfb", "fcp", "inp",
  "bundle", "chunk", "lazy", "preload", "prefetch", "preconnect", "dns-prefetch",
  "service", "worker", "workbox", "cache", "offline", "pwa", "manifest", "install",

  // Backend concepts
  "backend", "server", "runtime", "process", "thread", "async", "sync", "blocking",
  "nonblocking", "concurrent", "parallel", "distributed", "cluster", "load", "balance",
  "pool", "connection", "keep-alive", "timeout", "retry", "circuit", "breaker", "bulkhead",
  "rate", "limit", "throttle", "debounce", "queue", "worker", "job", "scheduler", "cron",
  "webhook", "callback", "polling", "long-polling", "websocket", "sse", "grpc", "trpc",
  "middleware", "interceptor", "guard", "pipe", "filter", "exception", "handler", "logger",
  "validation", "transformation", "serialization", "deserialization", "dto", "entity",

  // Mobile development
  "mobile", "native", "hybrid", "cross-platform", "react-native", "flutter", "ionic",
  "swift", "kotlin", "objective-c", "java", "dart", "xamarin", "cordova", "capacitor",
  "expo", "metro", "gradle", "cocoapods", "fastlane", "testflight", "appstore", "playstore",
  "gesture", "touch", "swipe", "pinch", "pan", "tap", "press", "drag", "drop", "scroll",
  "navigation", "stack", "tab", "drawer", "modal", "sheet", "toast", "snackbar", "alert",
  "notification", "push", "local", "remote", "badge", "sound", "vibration", "haptic",
  "camera", "gallery", "photo", "video", "audio", "microphone", "speaker", "bluetooth",
  "gps", "location", "geofence", "beacon", "nfc", "biometric", "fingerprint", "face",

  // Programming languages keywords
  "python", "java", "csharp", "cpp", "rust", "go", "ruby", "php", "swift", "kotlin",
  "scala", "clojure", "haskell", "elixir", "erlang", "lua", "perl", "r", "matlab", "julia",
  "def", "fn", "fun", "func", "proc", "sub", "method", "lambda", "closure", "arrow",
  "struct", "record", "tuple", "union", "variant", "option", "result", "either", "maybe",
  "trait", "protocol", "mixin", "module", "package", "crate", "gem", "pod", "jar", "dll",
  "generic", "template", "macro", "annotation", "decorator", "attribute", "metadata",
  "async", "await", "yield", "generator", "coroutine", "channel", "select", "spawn",
  "mutex", "semaphore", "atomic", "volatile", "synchronized", "lock", "unlock", "deadlock",

  // Linux/Unix commands
  "linux", "unix", "bash", "shell", "terminal", "console", "cli", "tty", "pty", "ssh",
  "ls", "cd", "pwd", "mkdir", "rmdir", "rm", "cp", "mv", "touch", "cat", "less", "more",
  "head", "tail", "grep", "sed", "awk", "cut", "sort", "uniq", "wc", "diff", "patch",
  "find", "locate", "which", "whereis", "type", "file", "stat", "du", "df", "mount",
  "chmod", "chown", "chgrp", "umask", "su", "sudo", "passwd", "useradd", "usermod",
  "ps", "top", "htop", "kill", "killall", "pkill", "nice", "renice", "nohup", "bg", "fg",
  "tar", "gzip", "gunzip", "bzip2", "xz", "zip", "unzip", "rar", "7z", "compress",
  "curl", "wget", "scp", "rsync", "ftp", "sftp", "nc", "netcat", "telnet", "ping",
  "ifconfig", "ip", "route", "netstat", "ss", "iptables", "ufw", "firewalld", "nmap",
  "systemctl", "service", "journalctl", "dmesg", "syslog", "cron", "crontab", "at",
  "apt", "yum", "dnf", "pacman", "brew", "snap", "flatpak", "appimage", "dpkg", "rpm",
  "vim", "nano", "emacs", "ed", "sed", "awk", "perl", "python", "ruby", "node", "php",

  // Networking
  "network", "internet", "intranet", "lan", "wan", "vpn", "proxy", "gateway", "router",
  "switch", "hub", "bridge", "firewall", "nat", "dhcp", "dns", "arp", "icmp", "tcp", "udp",
  "ip", "ipv4", "ipv6", "cidr", "subnet", "mask", "broadcast", "multicast", "unicast",
  "socket", "bind", "listen", "accept", "connect", "send", "recv", "close", "shutdown",
  "packet", "frame", "segment", "datagram", "header", "payload", "checksum", "ttl", "mtu",
  "bandwidth", "latency", "throughput", "jitter", "packet-loss", "congestion", "qos",
  "http", "https", "http2", "http3", "quic", "websocket", "webrtc", "mqtt", "amqp", "stomp",

  // Version control
  "version", "control", "vcs", "scm", "repository", "repo", "clone", "fork", "upstream",
  "branch", "trunk", "mainline", "feature", "release", "hotfix", "bugfix", "support",
  "commit", "amend", "squash", "fixup", "reword", "edit", "drop", "pick", "reorder",
  "merge", "rebase", "cherry-pick", "revert", "reset", "restore", "switch", "checkout",
  "conflict", "resolution", "ours", "theirs", "base", "head", "detached", "orphan",
  "tag", "annotated", "lightweight", "signed", "verify", "describe", "archive", "bundle",
  "stash", "worktree", "submodule", "subtree", "sparse", "shallow", "partial", "filter",
  "hook", "pre-commit", "post-commit", "pre-push", "post-merge", "pre-rebase", "prepare",
  "blame", "bisect", "log", "reflog", "shortlog", "whatchanged", "show", "diff", "status",
  "gitignore", "gitattributes", "gitmodules", "gitconfig", "gitkeep", "gitflow", "trunk",

  // IDE/Editor
  "ide", "editor", "vscode", "intellij", "webstorm", "pycharm", "android", "studio",
  "xcode", "eclipse", "netbeans", "atom", "sublime", "brackets", "notepad", "vim", "emacs",
  "workspace", "project", "folder", "file", "tab", "split", "pane", "panel", "sidebar",
  "explorer", "outline", "problems", "output", "debug", "terminal", "search", "replace",
  "snippet", "emmet", "autocomplete", "intellisense", "suggestion", "signature", "hover",
  "definition", "declaration", "reference", "implementation", "type", "symbol", "rename",
  "refactor", "extract", "inline", "move", "organize", "imports", "format", "lint", "fix",
  "breakpoint", "watch", "call", "stack", "variable", "expression", "evaluate", "step",
  "extension", "plugin", "theme", "color", "icon", "font", "keybinding", "setting", "sync",

  // Documentation
  "documentation", "docs", "readme", "changelog", "license", "contributing", "code",
  "conduct", "security", "support", "roadmap", "architecture", "decision", "record",
  "jsdoc", "tsdoc", "javadoc", "pydoc", "rustdoc", "godoc", "rdoc", "yard", "sphinx",
  "swagger", "openapi", "raml", "blueprint", "postman", "insomnia", "hoppscotch",
  "storybook", "docusaurus", "vuepress", "vitepress", "nextra", "gitbook", "mkdocs",
  "comment", "annotation", "description", "summary", "param", "returns", "throws",
  "example", "deprecated", "since", "see", "link", "author", "version", "todo", "fixme",

  // Collaboration
  "collaboration", "team", "member", "owner", "admin", "maintainer", "contributor",
  "issue", "bug", "feature", "enhancement", "question", "discussion", "rfc", "proposal",
  "pull", "request", "review", "approve", "reject", "comment", "suggest", "resolve",
  "assign", "label", "milestone", "project", "board", "column", "card", "automation",
  "mention", "notify", "subscribe", "watch", "star", "fork", "sponsor", "donate",
  "slack", "discord", "teams", "zoom", "meet", "jira", "trello", "asana", "notion",
  "linear", "height", "shortcut", "clubhouse", "basecamp", "monday", "clickup",

  // Internationalization
  "i18n", "l10n", "internationalization", "localization", "translation", "language",
  "locale", "region", "country", "currency", "timezone", "calendar", "date", "time",
  "format", "number", "plural", "ordinal", "gender", "context", "interpolation",
  "namespace", "key", "value", "fallback", "missing", "default", "override", "extend",
  "rtl", "ltr", "bidi", "direction", "writing", "mode", "script", "unicode", "icu",

  // Performance
  "performance", "optimization", "profiling", "benchmarking", "metrics", "monitoring",
  "memory", "cpu", "disk", "network", "io", "throughput", "latency", "response", "time",
  "cache", "memoization", "lazy", "eager", "preload", "prefetch", "prerender", "preconnect",
  "compress", "minify", "uglify", "treeshake", "codesplit", "bundle", "chunk", "vendor",
  "critical", "render", "path", "above", "fold", "first", "paint", "contentful", "input",
  "defer", "async", "blocking", "parser", "blocking", "render", "blocking", "resource",
  "web", "worker", "service", "worker", "shared", "worker", "worklet", "offscreen", "canvas",

  // Debugging
  "debug", "debugger", "breakpoint", "watch", "inspect", "evaluate", "console", "log",
  "error", "warn", "info", "trace", "assert", "count", "time", "timeEnd", "group", "table",
  "stack", "trace", "source", "map", "minified", "original", "line", "column", "frame",
  "step", "over", "into", "out", "continue", "pause", "resume", "restart", "stop", "detach",
  "conditional", "logpoint", "tracepoint", "exception", "caught", "uncaught", "promise",
  "network", "request", "response", "timing", "waterfall", "flamegraph", "heap", "snapshot",

  // Error handling
  "error", "exception", "throw", "catch", "finally", "try", "rethrow", "wrap", "unwrap",
  "stack", "trace", "message", "name", "code", "cause", "context", "details", "metadata",
  "custom", "typed", "specific", "generic", "base", "derived", "hierarchy", "inheritance",
  "handle", "recover", "retry", "fallback", "default", "ignore", "propagate", "log", "report",
  "boundary", "isolation", "containment", "graceful", "degradation", "circuit", "breaker",
  "validation", "assertion", "precondition", "postcondition", "invariant", "contract",

  // Logging
  "logging", "logger", "log", "level", "severity", "priority", "category", "channel",
  "debug", "info", "notice", "warning", "error", "critical", "alert", "emergency", "fatal",
  "message", "context", "metadata", "timestamp", "correlation", "request", "trace", "span",
  "format", "json", "text", "structured", "unstructured", "template", "placeholder", "args",
  "transport", "console", "file", "stream", "http", "socket", "syslog", "cloudwatch", "stackdriver",
  "rotation", "retention", "compression", "archival", "deletion", "lifecycle", "policy",
  "aggregation", "filtering", "sampling", "throttling", "batching", "buffering", "flushing",

  // Configuration
  "config", "configuration", "settings", "options", "preferences", "defaults", "overrides",
  "environment", "variable", "env", "dotenv", "secret", "credential", "sensitive", "secure",
  "file", "json", "yaml", "toml", "ini", "xml", "properties", "rc", "profile", "manifest",
  "schema", "validation", "type", "coercion", "transformation", "interpolation", "reference",
  "merge", "extend", "override", "inherit", "cascade", "priority", "precedence", "order",
  "reload", "watch", "hot", "live", "dynamic", "static", "immutable", "frozen", "sealed",

  // State management
  "state", "store", "reducer", "action", "dispatch", "selector", "middleware", "enhancer",
  "slice", "feature", "module", "domain", "entity", "normalized", "denormalized", "flat",
  "immutable", "mutable", "draft", "produce", "patch", "diff", "undo", "redo", "history",
  "persist", "rehydrate", "migrate", "purge", "pause", "resume", "serialize", "deserialize",
  "subscribe", "unsubscribe", "listener", "observer", "watcher", "effect", "reaction",
  "computed", "derived", "memo", "cached", "stale", "fresh", "invalidate", "refetch",
  "optimistic", "pessimistic", "rollback", "conflict", "resolution", "merge", "strategy",

  // Forms
  "form", "field", "input", "control", "value", "default", "initial", "current", "previous",
  "validation", "validator", "rule", "constraint", "pattern", "required", "optional",
  "min", "max", "length", "range", "email", "url", "phone", "date", "number", "custom",
  "error", "message", "touched", "dirty", "pristine", "valid", "invalid", "pending",
  "submit", "reset", "clear", "focus", "blur", "change", "input", "keydown", "keyup",
  "disabled", "readonly", "hidden", "visible", "enabled", "editable", "interactive",
  "array", "nested", "dynamic", "conditional", "dependent", "computed", "derived",

  // Animation
  "animation", "transition", "transform", "keyframe", "timeline", "sequence", "parallel",
  "duration", "delay", "timing", "easing", "linear", "ease", "cubic", "bezier", "spring",
  "from", "to", "start", "end", "progress", "percent", "absolute", "relative", "offset",
  "play", "pause", "resume", "stop", "cancel", "finish", "reverse", "restart", "seek",
  "loop", "repeat", "alternate", "infinite", "iteration", "count", "direction", "fill",
  "opacity", "scale", "rotate", "translate", "skew", "origin", "perspective", "matrix",
  "enter", "exit", "appear", "disappear", "mount", "unmount", "initial", "animate", "exit",
  "gesture", "drag", "pan", "pinch", "rotate", "swipe", "tap", "press", "hover", "focus",

  // Common words in code
  "data", "info", "result", "output", "input", "source", "target", "destination", "origin",
  "item", "element", "member", "property", "attribute", "field", "column", "row", "cell",
  "list", "array", "collection", "set", "map", "dictionary", "object", "instance", "entity",
  "id", "key", "value", "pair", "entry", "record", "tuple", "struct", "class", "type",
  "name", "label", "title", "description", "summary", "detail", "content", "text", "body",
  "count", "total", "sum", "average", "min", "max", "first", "last", "next", "previous",
  "start", "end", "begin", "finish", "open", "close", "create", "delete", "update", "read",
  "get", "set", "add", "remove", "insert", "append", "prepend", "push", "pop", "shift",
  "find", "search", "filter", "sort", "group", "aggregate", "reduce", "transform", "convert",
  "load", "save", "fetch", "send", "receive", "upload", "download", "import", "export",
  "init", "setup", "configure", "prepare", "build", "compile", "run", "execute", "process",
  "handle", "manage", "control", "coordinate", "orchestrate", "delegate", "dispatch",
  "validate", "verify", "check", "test", "assert", "ensure", "require", "expect", "should",
  "enable", "disable", "activate", "deactivate", "show", "hide", "expand", "collapse",
  "connect", "disconnect", "attach", "detach", "bind", "unbind", "link", "unlink",
  "lock", "unlock", "acquire", "release", "claim", "free", "allocate", "deallocate",
  "encode", "decode", "encrypt", "decrypt", "compress", "decompress", "serialize", "parse",
  "format", "render", "display", "present", "visualize", "draw", "paint", "layout",
  "measure", "calculate", "compute", "estimate", "predict", "analyze", "evaluate",
  "compare", "match", "equal", "same", "different", "similar", "contains", "includes",
  "merge", "combine", "join", "split", "separate", "divide", "partition", "chunk",
  "copy", "clone", "duplicate", "replicate", "mirror", "sync", "synchronize", "reconcile",
  "cache", "store", "persist", "save", "restore", "recover", "backup", "archive",
  "log", "trace", "debug", "monitor", "track", "record", "audit", "report", "notify",
  "retry", "repeat", "loop", "iterate", "recurse", "traverse", "walk", "visit", "scan",
  "wait", "sleep", "delay", "timeout", "interval", "schedule", "queue", "defer", "postpone",
  "success", "failure", "error", "warning", "info", "debug", "verbose", "silent", "quiet",
  "pending", "loading", "ready", "complete", "done", "finished", "cancelled", "aborted",
  "active", "inactive", "enabled", "disabled", "visible", "hidden", "selected", "focused",
  "valid", "invalid", "required", "optional", "default", "custom", "override", "fallback",
  "public", "private", "protected", "internal", "external", "local", "remote", "global",
  "sync", "async", "parallel", "sequential", "concurrent", "atomic", "transactional",
  "temporary", "permanent", "volatile", "persistent", "ephemeral", "durable", "stable",
  "raw", "processed", "formatted", "parsed", "validated", "sanitized", "normalized",
  "empty", "null", "undefined", "missing", "unknown", "invalid", "malformed", "corrupt",
  "single", "multiple", "batch", "bulk", "stream", "chunk", "page", "slice", "range",
  "parent", "child", "sibling", "ancestor", "descendant", "root", "leaf", "node", "edge",
  "primary", "secondary", "tertiary", "main", "sub", "auxiliary", "helper", "utility",
  "base", "derived", "abstract", "concrete", "generic", "specific", "common", "shared",
  "inner", "outer", "nested", "flat", "deep", "shallow", "recursive", "iterative",
  "before", "after", "pre", "post", "early", "late", "immediate", "deferred", "lazy",
  "hot", "cold", "warm", "cool", "fresh", "stale", "dirty", "clean", "pristine",
  "light", "dark", "bright", "dim", "high", "low", "fast", "slow", "quick", "gradual",
  "simple", "complex", "easy", "hard", "basic", "advanced", "beginner", "expert",
  "small", "medium", "large", "tiny", "huge", "narrow", "wide", "short", "long",
  "old", "new", "legacy", "modern", "deprecated", "current", "latest", "stable", "beta",

  // Additional programming terms
  "syntax", "semantic", "lexical", "token", "parser", "lexer", "ast", "ir", "bytecode",
  "compile", "interpret", "transpile", "polyfill", "shim", "bundle", "minify", "uglify",
  "obfuscate", "deobfuscate", "reverse", "engineer", "disassemble", "decompile",
  "variable", "constant", "literal", "expression", "statement", "block", "scope",
  "hoisting", "closure", "context", "binding", "reference", "pointer", "address",
  "stack", "heap", "memory", "allocation", "deallocation", "garbage", "collection",
  "leak", "overflow", "underflow", "buffer", "bounds", "check", "safe", "unsafe",
  "mutable", "immutable", "readonly", "const", "final", "sealed", "frozen",
  "nullable", "optional", "required", "mandatory", "default", "fallback",

  // Web APIs
  "fetch", "xhr", "ajax", "cors", "jsonp", "websocket", "eventsource", "beacon",
  "serviceworker", "webworker", "sharedworker", "broadcast", "channel", "message",
  "postmessage", "origin", "sandbox", "iframe", "embed", "object", "crossorigin",
  "intersection", "observer", "mutation", "resize", "performance", "navigation",
  "geolocation", "notification", "permission", "clipboard", "vibration", "battery",
  "mediastream", "webrtc", "peerconnection", "datachannel", "mediarecorder",
  "canvas", "webgl", "webgpu", "audio", "video", "media", "fullscreen", "pip",
  "indexeddb", "localstorage", "sessionstorage", "cache", "caches", "quota",
  "history", "pushstate", "replacestate", "popstate", "hashchange", "beforeunload",

  // Framework specific - Vue
  "vue", "reactive", "ref", "computed", "watch", "watcheffect", "provide", "inject",
  "definecomponent", "defineprops", "defineemits", "defineexpose", "withdefaults",
  "onmounted", "onunmounted", "onupdated", "onbeforemount", "onbeforeupdate",
  "setup", "composition", "options", "mixins", "extends", "directives", "plugins",
  "vuex", "pinia", "nuxt", "quasar", "vuetify", "primevue", "naive", "element",

  // Framework specific - Angular
  "angular", "component", "directive", "pipe", "service", "injectable", "module",
  "ngmodule", "ngif", "ngfor", "ngswitch", "ngclass", "ngstyle", "ngmodel",
  "input", "output", "eventemitter", "viewchild", "contentchild", "hostbinding",
  "hostlistener", "changedetection", "onpush", "zonejs", "rxjs", "observable",
  "subject", "behaviorsubject", "replaysubject", "asyncsubject", "operator",
  "pipe", "map", "filter", "tap", "switchmap", "mergemap", "concatmap", "exhaustmap",
  "debounce", "throttle", "distinctuntilchanged", "take", "skip", "first", "last",

  // Framework specific - Svelte
  "svelte", "sveltekit", "rune", "snippet", "store", "writable", "readable", "derived",
  "onmount", "ondestroy", "beforeupdate", "afterupdate", "tick", "createeventdispatcher",
  "setcontext", "getcontext", "hascontext", "bind", "use", "transition", "animate",
  "tweened", "spring", "flip", "crossfade", "fade", "blur", "fly", "slide", "scale",

  // State machines
  "state", "machine", "transition", "action", "guard", "context", "event", "service",
  "invoke", "spawn", "send", "forward", "escalate", "respond", "done", "error",
  "entry", "exit", "always", "after", "delay", "interpret", "inspect", "snapshot",
  "xstate", "robot", "stately", "finite", "infinite", "parallel", "history", "final",

  // Functional programming
  "pure", "impure", "side", "effect", "referential", "transparency", "immutability",
  "currying", "partial", "application", "composition", "pipe", "flow", "identity",
  "functor", "applicative", "monad", "monoid", "semigroup", "foldable", "traversable",
  "maybe", "either", "io", "task", "reader", "writer", "state", "cont", "free",
  "lens", "prism", "iso", "optional", "getter", "setter", "fold", "traversal",
  "ramda", "lodash", "underscore", "immutablejs", "immer", "mori", "sanctuary",

  // Machine Learning / AI
  "model", "train", "predict", "inference", "dataset", "feature", "label", "target",
  "supervised", "unsupervised", "reinforcement", "classification", "regression",
  "clustering", "neural", "network", "layer", "neuron", "activation", "weight",
  "bias", "gradient", "descent", "backpropagation", "forward", "loss", "cost",
  "optimizer", "sgd", "adam", "rmsprop", "momentum", "learning", "rate", "epoch",
  "batch", "minibatch", "overfitting", "underfitting", "regularization", "dropout",
  "convolution", "pooling", "recurrent", "lstm", "gru", "attention", "transformer",
  "embedding", "tokenizer", "vocabulary", "sequence", "encoder", "decoder", "latent",
  "tensorflow", "pytorch", "keras", "scikit", "pandas", "numpy", "matplotlib",

  // Blockchain / Web3
  "blockchain", "block", "chain", "hash", "nonce", "mining", "proof", "work", "stake",
  "consensus", "node", "peer", "network", "distributed", "ledger", "transaction",
  "wallet", "address", "public", "private", "key", "signature", "verify", "encrypt",
  "smart", "contract", "solidity", "vyper", "evm", "gas", "wei", "gwei", "ether",
  "token", "erc20", "erc721", "nft", "mint", "burn", "transfer", "approve", "allowance",
  "defi", "dex", "amm", "liquidity", "pool", "swap", "yield", "farming", "staking",
  "ethereum", "polygon", "solana", "avalanche", "arbitrum", "optimism", "base",
  "metamask", "wagmi", "viem", "ethers", "web3js", "hardhat", "foundry", "truffle",

  // Game Development
  "game", "engine", "scene", "camera", "light", "mesh", "material", "texture", "shader",
  "vertex", "fragment", "pixel", "normal", "tangent", "uv", "coordinate", "matrix",
  "vector", "quaternion", "euler", "rotation", "translation", "scaling", "world",
  "local", "space", "transform", "hierarchy", "parent", "child", "prefab", "instance",
  "physics", "rigidbody", "collider", "trigger", "raycast", "collision", "velocity",
  "force", "torque", "mass", "gravity", "friction", "drag", "joint", "constraint",
  "animation", "keyframe", "clip", "controller", "blend", "tree", "layer", "mask",
  "sprite", "tilemap", "particle", "system", "emitter", "lifetime", "emission",
  "unity", "unreal", "godot", "phaser", "pixi", "threejs", "babylonjs", "playcanvas",

  // IoT / Embedded
  "iot", "embedded", "microcontroller", "arduino", "raspberry", "esp32", "esp8266",
  "gpio", "pin", "digital", "analog", "pwm", "adc", "dac", "i2c", "spi", "uart",
  "serial", "baud", "rate", "protocol", "sensor", "actuator", "servo", "motor",
  "led", "lcd", "oled", "display", "button", "switch", "potentiometer", "encoder",
  "interrupt", "timer", "watchdog", "sleep", "wake", "power", "battery", "voltage",
  "current", "resistance", "capacitance", "inductance", "frequency", "duty", "cycle",
  "mqtt", "coap", "lorawan", "zigbee", "bluetooth", "wifi", "cellular", "gps",

  // Data Science
  "data", "science", "analysis", "analytics", "visualization", "dashboard", "report",
  "metric", "kpi", "dimension", "measure", "aggregation", "rollup", "drilldown",
  "slice", "dice", "pivot", "crosstab", "histogram", "scatter", "line", "bar", "pie",
  "heatmap", "treemap", "sankey", "funnel", "gauge", "sparkline", "bullet", "waterfall",
  "etl", "extract", "transform", "load", "pipeline", "workflow", "orchestration",
  "airflow", "dagster", "prefect", "luigi", "spark", "hadoop", "hive", "presto",
  "bigquery", "snowflake", "redshift", "databricks", "dbt", "fivetran", "airbyte",
  "tableau", "powerbi", "looker", "metabase", "superset", "grafana", "kibana",

  // Additional common terms
  "user", "admin", "role", "permission", "access", "grant", "revoke", "deny", "allow",
  "profile", "account", "settings", "preference", "notification", "alert", "message",
  "inbox", "outbox", "draft", "sent", "archive", "trash", "spam", "filter", "label",
  "tag", "category", "folder", "file", "document", "image", "video", "audio", "media",
  "upload", "download", "share", "export", "import", "print", "preview", "view",
  "edit", "delete", "create", "copy", "move", "rename", "archive", "restore", "recover",
  "search", "find", "replace", "highlight", "bookmark", "favorite", "star", "pin",
  "like", "comment", "reply", "mention", "follow", "unfollow", "block", "report",
  "post", "article", "blog", "news", "feed", "timeline", "story", "reel", "live",
  "chat", "conversation", "thread", "channel", "room", "group", "team", "organization",
  "workspace", "project", "task", "issue", "ticket", "bug", "feature", "enhancement",
  "milestone", "sprint", "backlog", "kanban", "scrum", "agile", "waterfall", "lean",
  "standup", "retro", "planning", "review", "demo", "release", "deploy", "rollout",
  "incident", "outage", "downtime", "recovery", "postmortem", "runbook", "playbook",
  "oncall", "escalation", "severity", "priority", "status", "resolution", "workaround",

  // More technical terms
  "algorithm", "heuristic", "optimization", "approximation", "estimation", "sampling",
  "interpolation", "extrapolation", "regression", "correlation", "causation", "variance",
  "deviation", "mean", "median", "mode", "quartile", "percentile", "distribution",
  "normal", "uniform", "exponential", "poisson", "binomial", "bernoulli", "gaussian",
  "probability", "likelihood", "confidence", "interval", "hypothesis", "significance",
  "pvalue", "ttest", "anova", "chisquare", "fisher", "bayesian", "frequentist",
  "supervised", "unsupervised", "semisupervised", "selfsupervised", "reinforcement",
  "online", "offline", "batch", "streaming", "realtime", "nearrealtime", "async",

  // Container orchestration
  "container", "image", "dockerfile", "compose", "swarm", "kubernetes", "k8s",
  "pod", "replicaset", "deployment", "statefulset", "daemonset", "job", "cronjob",
  "service", "ingress", "configmap", "secret", "volume", "persistentvolume", "claim",
  "namespace", "context", "cluster", "node", "master", "worker", "kubelet", "kubectl",
  "helm", "chart", "release", "values", "template", "repository", "artifact", "registry",
  "istio", "envoy", "linkerd", "consul", "vault", "terraform", "pulumi", "crossplane",

  // Additional API terms
  "endpoint", "route", "path", "param", "query", "body", "header", "cookie", "session",
  "token", "bearer", "basic", "digest", "oauth", "oidc", "saml", "jwt", "jwe", "jws",
  "scope", "claim", "audience", "issuer", "subject", "expiration", "refresh", "revoke",
  "rate", "limit", "quota", "throttle", "burst", "backoff", "retry", "circuit", "breaker",
  "timeout", "deadline", "keepalive", "heartbeat", "ping", "pong", "health", "ready",
  "live", "startup", "shutdown", "graceful", "drain", "evict", "preempt", "priority",

  // More framework terms
  "express", "koa", "fastify", "hapi", "nest", "adonis", "sails", "meteor", "feathers",
  "django", "flask", "fastapi", "tornado", "aiohttp", "starlette", "quart", "sanic",
  "rails", "sinatra", "hanami", "roda", "grape", "padrino", "cuba", "ramaze",
  "spring", "springboot", "quarkus", "micronaut", "vert.x", "dropwizard", "spark",
  "gin", "echo", "fiber", "chi", "gorilla", "buffalo", "beego", "iris", "revel",
  "actix", "rocket", "axum", "warp", "tide", "gotham", "nickel", "iron",
  "laravel", "symfony", "codeigniter", "yii", "cakephp", "zend", "slim", "lumen",
  "aspnet", "blazor", "maui", "xamarin", "uno", "avalonia", "wpf", "winforms",

  // Testing frameworks
  "junit", "testng", "mockito", "powermock", "easymock", "jmock", "hamcrest",
  "pytest", "unittest", "nose", "doctest", "hypothesis", "faker", "factory",
  "rspec", "minitest", "capybara", "cucumber", "shoulda", "factory_bot",
  "xunit", "nunit", "mstest", "moq", "nsubstitute", "autofixture", "bogus",
  "ginkgo", "gomega", "testify", "gocheck", "goconvey", "goblin", "gock",

  // Build and package managers
  "maven", "gradle", "ant", "ivy", "sbt", "mill", "bazel", "buck", "pants",
  "pip", "poetry", "pipenv", "conda", "virtualenv", "venv", "pyenv", "tox",
  "bundler", "rubygems", "rbenv", "rvm", "chruby", "asdf", "mise",
  "nuget", "paket", "dotnet", "msbuild", "cake", "nuke", "fake",
  "cargo", "rustup", "crates", "docs", "clippy", "rustfmt", "miri",
  "gomod", "goget", "goinstall", "gobuild", "gotest", "gofmt", "golint",
  "cocoapods", "carthage", "spm", "xcodebuild", "xcrun", "simctl",
  "maven", "gradle", "ant", "ivy", "sbt", "mill", "bazel", "buck",

  // Monitoring and observability
  "prometheus", "grafana", "alertmanager", "pushgateway", "exporter", "scrape",
  "metric", "counter", "gauge", "histogram", "summary", "label", "series", "query",
  "promql", "rate", "increase", "sum", "avg", "max", "min", "quantile", "topk",
  "jaeger", "zipkin", "tempo", "lightstep", "honeycomb", "datadog", "newrelic",
  "span", "trace", "baggage", "context", "propagation", "sampling", "collector",
  "elk", "elasticsearch", "logstash", "kibana", "filebeat", "metricbeat", "packetbeat",
  "fluentd", "fluentbit", "vector", "loki", "promtail", "opentelemetry", "otel",

  // CI/CD tools
  "jenkins", "github", "gitlab", "bitbucket", "azure", "devops", "circleci", "travis",
  "drone", "argo", "tekton", "spinnaker", "harness", "codefresh", "buildkite", "semaphore",
  "action", "workflow", "job", "step", "stage", "pipeline", "trigger", "webhook",
  "artifact", "cache", "matrix", "strategy", "environment", "secret", "variable",
  "runner", "agent", "executor", "container", "image", "registry", "artifact",
  "deploy", "release", "rollback", "canary", "bluegreen", "rolling", "recreate",

  // Additional database terms
  "nosql", "document", "keyvalue", "columnar", "graph", "timeseries", "spatial",
  "sharding", "replication", "partition", "consistency", "availability", "tolerance",
  "acid", "base", "cap", "pacelc", "eventual", "strong", "causal", "linearizable",
  "read", "write", "quorum", "consensus", "raft", "paxos", "gossip", "crdt",
  "backup", "restore", "snapshot", "checkpoint", "wal", "binlog", "oplog", "cdc",
  "vacuum", "analyze", "explain", "plan", "cost", "rows", "width", "actual",

  // More common programming words
  "util", "utils", "helper", "helpers", "common", "shared", "core", "base",
  "lib", "libs", "library", "libraries", "pkg", "package", "packages", "mod",
  "src", "source", "dist", "build", "out", "output", "bin", "binary", "exe",
  "test", "tests", "spec", "specs", "mock", "mocks", "stub", "stubs", "fake",
  "fixture", "fixtures", "factory", "factories", "seed", "seeds", "migration",
  "config", "configs", "configuration", "env", "environment", "settings", "options",
  "assets", "static", "public", "private", "vendor", "node_modules", "packages",
  "types", "typings", "interfaces", "models", "entities", "schemas", "dtos",
  "controllers", "services", "repositories", "handlers", "middlewares", "guards",
  "pipes", "filters", "interceptors", "decorators", "annotations", "attributes",
  "routes", "router", "routing", "navigation", "redirect", "forward", "rewrite",
  "views", "templates", "layouts", "partials", "components", "widgets", "elements",
  "styles", "themes", "skins", "variants", "modes", "presets", "defaults",
];

