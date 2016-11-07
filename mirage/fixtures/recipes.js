function recipe(title, slug) {
  return {
    slug: slug,
    title: title,
    imageUrl: '/data/images/' + slug.replace(/-\d*$/,'') + '.jpg'
  };
}

export default [
  recipe("World's Best Lasagna",'worlds-best-lasagna'),
  recipe('Greek Island Chicken Shish Kebabs', 'greek-island-chicken-shish-kebabs'),
  recipe('Orange and Milk-Braised Pork Carnitas', 'orange-and-milk-braised-pork-carnitas')
];
