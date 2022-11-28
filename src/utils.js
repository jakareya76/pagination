const paginate = (followers) => {
  const itemsPerPage = 12;
  const pages = Math.ceil(followers.length / itemsPerPage);

  const newFollowsers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;

    return followers.slice(start, start + itemsPerPage);
  });

  return newFollowsers;
};

export default paginate;
