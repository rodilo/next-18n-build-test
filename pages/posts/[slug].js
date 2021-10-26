const Post = ({ blogId }) => {
  return <div>{blogId}</div>;
};

export default Post;

export async function getStaticProps(context) {
  const { params } = context;
  const blogId = params.slug;
  return {
    props: {
      blogId,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "1" } },
      { params: { slug: "2" } },
      { params: { slug: "3" } },
    ],
    fallback: false,
  };
}
