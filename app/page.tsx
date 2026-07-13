const categories = [
  {
    title: "Daily Devotion",
    count: "42 reflections",
    tone: "bg-rose-100 text-rose-900",
    description: "Short morning readings, prayer prompts, and one verse to carry through the day.",
  },
  {
    title: "Weekly Study",
    count: "18 guides",
    tone: "bg-cyan-100 text-cyan-950",
    description: "Longer Bible studies for small groups, families, and personal Sabbath review.",
  },
  {
    title: "Prayer Room",
    count: "27 requests",
    tone: "bg-emerald-100 text-emerald-950",
    description: "Guided intercession, praise reports, and community prayer invitations.",
  },
  {
    title: "Christian Living",
    count: "33 essays",
    tone: "bg-amber-100 text-amber-950",
    description: "Biblical wisdom for work, relationships, forgiveness, service, and courage.",
  },
];

const featuredPosts = [
  {
    title: "When the Morning Feels Heavy",
    category: "Daily",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    excerpt:
      "Psalm 143 reminds us that God meets tired hearts before they have perfect words.",
    meta: "6 min read",
  },
  {
    title: "A Table in the Wilderness",
    category: "Weekly",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=80",
    excerpt:
      "A study on provision, trust, and the surprising places where God prepares peace.",
    meta: "Study guide",
  },
  {
    title: "Learning to Pray With Scripture",
    category: "Prayer",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
    excerpt:
      "Turn a passage into confession, thanksgiving, intercession, and quiet listening.",
    meta: "12 responses",
  },
];

const comments = [
  {
    name: "Miriam A.",
    message:
      "The weekly reflection helped our home Bible group slow down and talk honestly.",
  },
  {
    name: "Daniel K.",
    message:
      "I come for the daily verse before work. It has become a steady rhythm.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#1f2a27]">
      <section className="hero-scene relative isolate min-h-[92vh] overflow-hidden text-white">
        <div className="hero-image absolute inset-0" />
        <div className="hero-glow absolute inset-0" />
        <nav className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
          <a className="text-lg font-semibold tracking-[0.18em] uppercase" href="#">
            Living Word Journal
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#devotions">Devotions</a>
            <a href="#topics">Topics</a>
            <a href="#comments">Comments</a>
            <a href="#submit">Write</a>
          </div>
          <a
            className="rounded-full border border-white/40 px-4 py-2 text-sm font-semibold backdrop-blur transition hover:bg-white hover:text-[#22312b]"
            href="#submit"
          >
            Blogger Login
          </a>
        </nav>

        <div className="relative z-10 mx-auto flex min-h-[72vh] w-full max-w-7xl items-center px-5 pb-20 pt-8 sm:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full bg-white/16 px-4 py-2 text-sm font-semibold backdrop-blur">
              Daily bread, weekly study, shared prayer
            </p>
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] sm:text-7xl lg:text-8xl">
              A biblical blog for hearts learning to walk with God.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/86 sm:text-xl">
              Read Scripture-centered devotionals, explore topics by season,
              join thoughtful conversations, and help publish reflections that
              point visitors back to the Bible.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full bg-[#f8d66d] px-6 py-3 text-center font-bold text-[#23342c] transition hover:bg-white"
                href="#devotions"
              >
                Start Today&apos;s Devotion
              </a>
              <a
                className="rounded-full border border-white/50 px-6 py-3 text-center font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#23342c]"
                href="#topics"
              >
                Browse Topics
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 grid w-[92%] max-w-5xl -translate-x-1/2 grid-cols-2 gap-3 rounded-[2rem] border border-white/20 bg-black/22 p-3 backdrop-blur md:grid-cols-4">
          {["Verse of the Day", "Prayer Wall", "Weekly Series", "Open Comments"].map(
            (item) => (
              <span
                className="rounded-full bg-white/14 px-3 py-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-white/90"
                key={item}
              >
                {item}
              </span>
            ),
          )}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#9a5a25]">
            Today&apos;s invitation
          </p>
          <h2 className="mt-3 text-4xl font-bold leading-tight text-[#21332c] sm:text-5xl">
            Begin with the Word before the noise of the day.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-lg bg-[#21332c] p-7 text-white shadow-xl shadow-stone-200">
            <p className="text-sm font-semibold text-[#f8d66d]">John 15:5</p>
            <blockquote className="mt-4 text-2xl font-semibold leading-snug">
              Abide in Me, and I in you.
            </blockquote>
            <p className="mt-5 leading-7 text-white/76">
              Pause, breathe, and ask Christ to shape your thoughts, words, and
              decisions today.
            </p>
          </article>
          <article className="rounded-lg border border-[#dfd7c5] bg-white p-7 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2b7168]">
              Reading path
            </p>
            <ul className="mt-5 space-y-4 text-[#41524c]">
              <li>Morning: Psalm 27 and a five-minute prayer</li>
              <li>Midday: Matthew 6:25-34 and one act of trust</li>
              <li>Evening: Romans 8:31-39 and gratitude journaling</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="topics" className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2b7168]">
                Categories
              </p>
              <h2 className="mt-3 text-4xl font-bold text-[#21332c]">
                Find a rhythm for every season.
              </h2>
            </div>
            <a className="font-bold text-[#9a5a25]" href="#submit">
              Add a new topic
            </a>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <article
                className="group rounded-lg border border-[#ebe3d0] bg-[#fbfaf6] p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-200"
                key={category.title}
              >
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${category.tone}`}
                >
                  {category.count}
                </span>
                <h3 className="mt-6 text-2xl font-bold text-[#21332c]">
                  {category.title}
                </h3>
                <p className="mt-4 leading-7 text-[#5d6a64]">
                  {category.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="devotions" className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#9a5a25]">
              Featured posts
            </p>
            <h2 className="mt-3 text-4xl font-bold text-[#21332c]">
              New reflections to open and discuss.
            </h2>
          </div>
          <div className="flex gap-2 rounded-full bg-white p-1 shadow-sm">
            {["Daily", "Weekly", "Prayer"].map((tab) => (
              <button
                className="rounded-full px-4 py-2 text-sm font-bold text-[#48645c] transition hover:bg-[#21332c] hover:text-white"
                key={tab}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <article
              className="overflow-hidden rounded-lg bg-white shadow-lg shadow-stone-200"
              key={post.title}
            >
              <div
                className="h-64 bg-cover bg-center transition duration-700 hover:scale-105"
                style={{ backgroundImage: `url(${post.image})` }}
              />
              <div className="p-6">
                <div className="flex items-center justify-between text-sm font-bold text-[#2b7168]">
                  <span>{post.category}</span>
                  <span>{post.meta}</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold leading-tight text-[#21332c]">
                  {post.title}
                </h3>
                <p className="mt-4 leading-7 text-[#5d6a64]">{post.excerpt}</p>
                <button className="mt-6 rounded-full bg-[#21332c] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#2b7168]">
                  Read and respond
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="scripture-band relative overflow-hidden px-5 py-24 text-white sm:px-8">
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f8d66d]">
              Community engagement
            </p>
            <h2 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
              Let every post end with a step of faith.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Pray", "Submit a prayer request and let readers stand with you."],
              ["Discuss", "Comment with insight, questions, and testimony."],
              ["Practice", "Choose one obedience step from each devotion."],
            ].map(([title, body]) => (
              <div className="rounded-lg bg-white/12 p-6 backdrop-blur" key={title}>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-white/78">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="comments"
        className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-2"
      >
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2b7168]">
            Comments
          </p>
          <h2 className="mt-3 text-4xl font-bold text-[#21332c]">
            A thoughtful place for testimony and questions.
          </h2>
          <div className="mt-8 space-y-4">
            {comments.map((comment) => (
              <article
                className="rounded-lg border border-[#e8dfcd] bg-white p-6"
                key={comment.name}
              >
                <p className="font-bold text-[#21332c]">{comment.name}</p>
                <p className="mt-3 leading-7 text-[#5d6a64]">{comment.message}</p>
              </article>
            ))}
          </div>
        </div>
        <form className="rounded-lg bg-[#21332c] p-6 text-white shadow-xl shadow-stone-200">
          <h3 className="text-2xl font-bold">Leave a comment</h3>
          <label className="mt-6 block text-sm font-bold" htmlFor="comment-name">
            Name
          </label>
          <input
            className="mt-2 w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 outline-none transition placeholder:text-white/45 focus:border-[#f8d66d]"
            id="comment-name"
            placeholder="Your name"
          />
          <label className="mt-5 block text-sm font-bold" htmlFor="comment-message">
            Message
          </label>
          <textarea
            className="mt-2 min-h-36 w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 outline-none transition placeholder:text-white/45 focus:border-[#f8d66d]"
            id="comment-message"
            placeholder="Share what God is teaching you..."
          />
          <button className="mt-5 rounded-full bg-[#f8d66d] px-6 py-3 font-bold text-[#21332c] transition hover:bg-white">
            Post comment
          </button>
        </form>
      </section>

      <section id="submit" className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#9a5a25]">
              Admin and bloggers
            </p>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-[#21332c]">
              Draft, review, and publish biblical reflections.
            </h2>
            <p className="mt-5 leading-8 text-[#5d6a64]">
              This front-end panel can later connect to authentication and a
              database. For now it gives writers a clear publishing workflow for
              title, category, scripture, devotion text, and review status.
            </p>
          </div>
          <form className="grid gap-4 rounded-lg border border-[#e8dfcd] bg-[#fbfaf6] p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                className="rounded-md border border-[#d8ceb9] bg-white px-4 py-3 outline-none focus:border-[#2b7168]"
                placeholder="Blog title"
              />
              <select className="rounded-md border border-[#d8ceb9] bg-white px-4 py-3 outline-none focus:border-[#2b7168]">
                <option>Daily Devotion</option>
                <option>Weekly Study</option>
                <option>Prayer Room</option>
                <option>Christian Living</option>
              </select>
            </div>
            <input
              className="rounded-md border border-[#d8ceb9] bg-white px-4 py-3 outline-none focus:border-[#2b7168]"
              placeholder="Scripture reference, e.g. Isaiah 40:31"
            />
            <textarea
              className="min-h-44 rounded-md border border-[#d8ceb9] bg-white px-4 py-3 outline-none focus:border-[#2b7168]"
              placeholder="Write the devotion text..."
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="rounded-full bg-[#21332c] px-6 py-3 font-bold text-white transition hover:bg-[#2b7168]">
                Save draft
              </button>
              <button className="rounded-full border border-[#21332c] px-6 py-3 font-bold text-[#21332c] transition hover:bg-[#21332c] hover:text-white">
                Submit for review
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
