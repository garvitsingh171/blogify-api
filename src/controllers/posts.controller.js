const posts = [
  { id: 1, title: "Controller Post 1" },
  { id: 2, title: "Controller Post 2" },
];

const getAllPosts = (req, res) => {
  res.status(200).json({
    message: "Posts fetched successfully",
    data: posts,
  });
};

const getPostById = (req, res) => {
  const { id } = req.params;

  const post = posts.find((p) => p.id === Number(id));

  res.status(200).json({
    success: true,
    data: post,
  });
};

export default { getAllPosts, getPostById };
