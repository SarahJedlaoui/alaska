import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-1 md:py-16 lg:py-1"
    >
      <div className="container">
        <SectionTitle
          title="Discover more"
          paragraph="We have homegrown staff rooted in the community whose local knowledge and expertise can assist you in finding the adventures you seek."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Blog;
