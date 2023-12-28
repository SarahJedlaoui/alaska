import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page ",
  description: "This is Blog Page.",
  // other metadata
};

const Blog = () => {
  return (
    <>

    
      <Breadcrumb
        pageName="Discover more about our activities"
        description="We have homegrown staff rooted in the community whose local knowledge and expertise can assist you in finding the adventures you seek."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

        
        </div>
      </section>
    </>
  );
};

export default Blog;
