import { comments } from "../../data/comments";

const Comment = ({ comment }) => {
  return (
    <div>
      {comment?.id}
      {comment?.text}
    </div>
  );
};

export default Comment;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentOd: "1" } },
      { params: { commentOd: "2" } },
      { params: { commentOd: "3" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { commentId } = params;

  const comment = comments?.find(
    (comment) => comment?.id === parseInt(commentId)
  );
  return {
    props: {
      comment,
    },
  };
}
