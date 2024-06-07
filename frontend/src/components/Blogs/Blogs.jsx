import "./Blogs.css"
import BlogItem from "./BlogItem"
const Blogs = () => {
  return (
    <section className="blogs">
    <div className="container">
      <div className="section-title">
        <h2>Blogs</h2>
        <p>Jimmouse</p>
      </div>
      <ul className="blog-list">
      <BlogItem/>
      </ul>
    </div>
  </section>
  )
}

export default Blogs